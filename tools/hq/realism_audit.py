#!/usr/bin/env python3
"""HQ realism audit (user 2026-11-24: "only service pattern be realistic, not frequency" - the site is illustrative;
geography, route, service pattern and stations matter, train counts do not: every check is about existence, never volume): what passengers see, new timetable vs a reference (pre-change) timetable.
Usage: realism_audit.py NEW_trains.js REF_trains.js [app.js]
Fault classes (each = a list; any entry blocks HQ approval unless explained):
 A  major pair lost ALL direct service, per type group (Max+VIA / IC / any Mainline)
 B  classic corridor stretch lost IC (adjacent IC calls before, no IC calling at both now)
 C  station lost all Mainline service (still exists, had >= 8 calls a day)
 E  main-station label without Mainline calls
"""
import re,json,sys,itertools,collections
def trains(f):
  s=open(f).read();out=[]
  for m in re.finditer(r'\{"id":"([^"]+)","type":"([^"]+)"[^{}]*?"route":(\[\[.*?\]\])',s):
    out.append((m.group(1),m.group(2),re.findall(r'\["([^"]+)","',m.group(3))))
  return out
ML={'Max','VIA','InterCity','Nightline'}
GROUPS={'Max+VIA':{'Max','VIA'},'Mainline':{'Max','VIA','InterCity'}}   # IC alone: covered by B (corridor gaps) + Mainline pairs
def pairs(T,types):
  c=collections.Counter()
  for i,t,st in T:
    if t in types:
      for a,b in itertools.combinations(sorted(set(st)),2): c[(a,b)]+=1
  return c
def calls(T,types):
  c=collections.Counter()
  for i,t,st in T:
    if t in types:
      for x in set(st): c[x]+=1
  return c
new,ref=trains(sys.argv[1]),trains(sys.argv[2])
# The reference uses the names of its day: translate them through every later rename (tools/hq/ref_renames.json, old -> new,
# reference-day name -> today's name, by station id; each rename release regenerates it), so a renamed station isn't counted as a lost one.
import os
_rn=os.path.join(os.path.dirname(os.path.abspath(__file__)),'ref_renames.json')
if os.path.exists(_rn):
  RN=json.load(open(_rn))
  def _tr(n): return RN.get(n,n)      # one lookup: the file maps each reference-day name straight to today's (joined by station id), so a chain such as Jennanguan -> Eastley, Fukou -> Jennanguan never cascades
  _cur={x for _,_,st in new for x in st}   # translate only names that no longer exist (a current-name reference stays as it is)
  ref=[(i,t,[x if x in _cur else _tr(x) for x in st]) for i,t,st in ref]
app=open(sys.argv[3] if len(sys.argv)>3 else 'js/app.js').read()
labels=json.loads(re.search(r'const LABELS=(\[.*?\]);',app).group(1))
nowst={x['name'] for x in json.loads(re.search(r'const STATIONS=(\[.*?\]);\n',app,re.S).group(1))}
cn,cr=calls(new,ML-{'Nightline'}),calls(ref,ML-{'Nightline'})
top=[s for s,_ in cr.most_common(100) if s in nowst]
major=set(labels)|set(top[:60])
F=collections.defaultdict(list)
import os
_pr=os.environ.get('RR_PAIR_REVIEWS',os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','..','Radeland_QGIS','RR_Info_Export','redraw','pair_reviews.json'))
PAIR_REVIEW={}
if os.path.exists(_pr):
  for e in json.load(open(_pr)) if isinstance(json.load(open(_pr)),list) else json.load(open(_pr)).get('pairs',[]):
    PAIR_REVIEW[e.get('pair','')]=e.get('status','')
for g,ty in GROUPS.items():
  pn,pr=pairs(new,ty),pairs(ref,ty)
  for (a,b),o in pr.items():
    if a in major and b in major and a in nowst and b in nowst and o>=8:
      n=pn.get((a,b),0)
      if n==0:
        # user 2026-11-25: direct pairs may change; a lost direct train needs a passenger-impact review, not a fix.
        # Pairs the coordinator accepted (redraw/pair_reviews.json, status "accepted") are listed as reviewed, not open.
        k=f'{a} – {b}';st=PAIR_REVIEW.get(k) or PAIR_REVIEW.get(f'{b} – {a}')
        F[('A reviewed ' if st=='accepted' else 'A REVIEW NEEDED ')+g].append((o,n,k))
# B corridor IC gaps
icn=pairs(new,{'InterCity'})
seen=set()
for i,t,st in ref:
  if t!='InterCity':continue
  for a,b in zip(st,st[1:]):
    k=tuple(sorted((a,b)))
    if k in seen or a not in nowst or b not in nowst:continue
    seen.add(k)
    if not icn.get(k) and cn.get(a) and cn.get(b): F['B IC corridor gap'].append((0,0,f'{a} – {b}'))
for s,o in cr.items():
  if s in nowst and o>=8 and not cn.get(s): F['C lost all Mainline'].append((o,0,s))
for s in labels:
  if not cn.get(s): F['E label without Mainline'].append((0,0,s))

# H sharp corners in drawn track (user 2026-11-24 screenshots Huapu / Nanhe): a track class passing through a node turns > 45°
import math
g=json.loads(re.search(r'const GRAPH=(\{.*?\});\n',app,re.S).group(1))
P,E=g['pts'],g['edges']
adj=collections.defaultdict(list)
for a,b,t,*_ in E:
  adj[a].append((b,t));adj[b].append((a,t))
stx={tuple(x['attach']):x['name'] for x in json.loads(re.search(r'const STATIONS=(\[.*?\]);\n',app,re.S).group(1))}
stpts={tuple(x) for x in stx}
def _turn(a,b,c):   # degrees the track turns at b
  v1=(b[0]-a[0],b[1]-a[1]);v2=(c[0]-b[0],c[1]-b[1]);n1,n2=math.hypot(*v1),math.hypot(*v2)
  if n1==0 or n2==0:return 0.0
  return math.degrees(math.acos(max(-1,min(1,(v1[0]*v2[0]+v1[1]*v2[1])/(n1*n2)))))
def far(prev,cur,t,skip=False):   # look ahead along this class's own track only, never through a station onto other track
  p,c=prev,cur;o=P[prev]
  for _ in range(500):
    if math.dist(P[c],o)>=0.6 and not skip or tuple(P[c]) in stpts:return c
    nb=[x for x,u in adj[c] if x!=p and u==t]
    if len(nb)!=1:return c
    # skip (curve radius only; coordinator 2026-11-28, Meiyin ML-036): a collinear vertex 0.6 out - the builder's extra
    # drawing vertex on a straight - cut the arm short and a curve read 924 m; the reach then ends where the track bends
    if skip and math.dist(P[c],o)>=0.6 and _turn(P[p],P[c],P[nb[0]])>1.0:return c
    p,c=c,nb[0]
  return c
def arm(prev,cur,t,L):   # the point on this class's track at straight distance L from prev (interpolated)
  p,c=prev,cur;o=P[prev];q=P[prev]
  for _ in range(500):
    d=math.dist(P[c],o)
    if d>=L:
      d0=math.dist(q,o);f=(L-d0)/(d-d0) if d>d0 else 1
      return (q[0]+(P[c][0]-q[0])*f,q[1]+(P[c][1]-q[1])*f)
    if tuple(P[c]) in stpts:return tuple(P[c])
    nb=[x for x,u in adj[c] if x!=p and u==t]
    if len(nb)!=1:return tuple(P[c])
    q=P[c];p,c=c,nb[0]
  return tuple(P[c])
CLS={0:'Mainline',1:'high-speed',2:'Regional',3:'Local'}
RMIN={0:0.8,1:1.2,2:0.3,3:0.2,4:3.0}   # km, guidance: 4 = dedicated HS alignment, 1 = Mainline / upgraded track HS trains use (~160-200 km/h); user 2026-11-25 "sensibly looser"
for n,nb in adj.items():
  by=collections.defaultdict(list)
  for x,t in nb:by[t].append(x)
  for t,ns in by.items():
    if len(ns)!=2:continue
    # symmetric arms (corner-tool 2026-11-25: a curve beside one long straight segment read as ~R/2): both look-ahead points
    # at the same distance L from the node, the shorter arm's reach, interpolated along the track
    b=P[n];fa,fc=far(n,ns[0],t),far(n,ns[1],t);L=min(math.dist(P[fa],b),math.dist(P[fc],b))
    a,c=arm(n,ns[0],t,L),arm(n,ns[1],t,L)
    v1=(b[0]-a[0],b[1]-a[1]);v2=(c[0]-b[0],c[1]-b[1]);n1,n2=math.hypot(*v1),math.hypot(*v2)
    if n1<0.3 or n2<0.3:continue
    ang=math.degrees(math.acos(max(-1,min(1,(v1[0]*v2[0]+v1[1]*v2[1])/(n1*n2)))))
    st=stx.get(tuple(b))
    # R tight curve (user 2026-11-25 "add curve line for this kind of 90 degree turns, see what real world does"): the curve
    # radius through the look-ahead points, against the class minimum (km). Station throats are exempt.
    R=min(n1,n2)/(2*math.sin(math.radians(ang)/2))/2.25 if ang>0.5 else 1e9
    if R<RMIN.get(t,0):   # the same radius with collinear vertices skipped (a drawing vertex on a straight is no curve)
      fa,fc=far(n,ns[0],t,True),far(n,ns[1],t,True);L=min(math.dist(P[fa],b),math.dist(P[fc],b))
      a2,c2=arm(n,ns[0],t,L),arm(n,ns[1],t,L)
      u1=(b[0]-a2[0],b[1]-a2[1]);u2=(c2[0]-b[0],c2[1]-b[1]);m1,m2=math.hypot(*u1),math.hypot(*u2)
      g2=math.degrees(math.acos(max(-1,min(1,(u1[0]*u2[0]+u1[1]*u2[1])/(m1*m2)))))
      R=max(R,min(m1,m2)/(2*math.sin(math.radians(g2)/2))/2.25 if g2>0.5 else 1e9)
    if not st and ang<=120 and R<RMIN.get(t,0):
      F['R tight curve '+CLS.get(t,str(t))].append((int(R*1000),0,f"@{b[0]:.1f},{b[1]:.1f} radius ~{R*1000:.0f} m (min {RMIN[t]*1000:.0f})"))
    if ang>120 and not st:   # open track doubling back on itself: impossible, never EXPLAINED (user 2026-11-25 Peiting spike);
      F['K HARD hairpin '+CLS.get(t,str(t))].append((int(ang),0,f"{st or 'open track'} @{b[0]:.1f},{b[1]:.1f} ({int(ang)} deg)"))
    elif ang>45:
      F['H sharp corner '+CLS.get(t,str(t))].append((int(ang),0,f"{st or 'open track'} @{b[0]:.1f},{b[1]:.1f} ({int(ang)} deg)"))
tot=lambda T,t:sum(1 for x in T if x[1]==t)
print('totals', {t:(tot(ref,t),tot(new,t)) for t in ['Max','VIA','InterCity','Nightline','Regio','Local']})
bad=0
for k in sorted(F):
  v=sorted(F[k],reverse=True);bad+=len(v)
  print(f'\n## {k}: {len(v)}')
  for o,n,x in v[:40]: print(f'  {o:5d} -> {n:4d}  {x}' if o else f'  {x}')
hard=sum(len(v) for k,v in F.items() if ' HARD ' in k)
rev=sum(len(v) for k,v in F.items() if k.startswith('A REVIEW NEEDED'))
print('\nLOST DIRECT PAIRS needing a passenger-impact review (not faults):',rev)
print('\nHARD (impossible, must be 0 to ship):',hard)
print('TOTAL FAULTS',bad)
sys.exit(1 if bad else 0)
