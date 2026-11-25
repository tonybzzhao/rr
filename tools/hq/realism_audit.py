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
app=open(sys.argv[3] if len(sys.argv)>3 else 'js/app.js').read()
labels=json.loads(re.search(r'const LABELS=(\[.*?\]);',app).group(1))
nowst={x['name'] for x in json.loads(re.search(r'const STATIONS=(\[.*?\]);\n',app,re.S).group(1))}
cn,cr=calls(new,ML-{'Nightline'}),calls(ref,ML-{'Nightline'})
top=[s for s,_ in cr.most_common(100) if s in nowst]
major=set(labels)|set(top[:60])
F=collections.defaultdict(list)
for g,ty in GROUPS.items():
  pn,pr=pairs(new,ty),pairs(ref,ty)
  for (a,b),o in pr.items():
    if a in major and b in major and a in nowst and b in nowst and o>=8:
      n=pn.get((a,b),0)
      if n==0: F['A '+g].append((o,n,f'{a} – {b}'))
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
def far(prev,cur):
  p,c=prev,cur;o=P[prev]
  for _ in range(500):
    if math.dist(P[c],o)>=0.6:return c
    nb=[x for x,_ in adj[c] if x!=p]
    if len(nb)!=1:return c
    p,c=c,nb[0]
  return c
CLS={0:'Mainline',1:'high-speed',2:'Regional',3:'Local'}
for n,nb in adj.items():
  by=collections.defaultdict(list)
  for x,t in nb:by[t].append(x)
  for t,ns in by.items():
    if len(ns)!=2:continue
    a,c,b=P[far(n,ns[0])],P[far(n,ns[1])],P[n]
    v1=(b[0]-a[0],b[1]-a[1]);v2=(c[0]-b[0],c[1]-b[1]);n1,n2=math.hypot(*v1),math.hypot(*v2)
    if n1<0.3 or n2<0.3:continue
    ang=math.degrees(math.acos(max(-1,min(1,(v1[0]*v2[0]+v1[1]*v2[1])/(n1*n2)))))
    st=stx.get(tuple(b))
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
print('\nHARD (impossible, must be 0 to ship):',hard)
print('TOTAL FAULTS',bad)
sys.exit(1 if bad else 0)
