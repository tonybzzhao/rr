/* RR Info site audit: checks what visitors actually see, by running the site's own code in the page (2026-11-20).
   User: "do not use passive approach of fixing found bugs. i can't find bugs all the time. check your fundamental approach".
   The build gate (check_build.py) checks the builder's data; this checks the site's views built from it:
   - every station has its own map point on a drawn line;
   - every train / line view (getTrainPath): a connected route along drawn edges, every call on it in order, from its first
     call to its last, no out-and-back spike between calls, nothing drawn over a lake or the sea for more than 2 km (a bridge) except a listed Mainline causeway (GRAPH.causeways);
   - main stations are named on the map at three zoom levels (a busy hub must not lose its name);
   - one presentation: every badge on its tier (size, height, bold), all text on the type tiers (sizes, weights 500 / 700);
   - Local networks in colour: every Local station on its coloured line, every name by its own mark, clear of other names and marks;
   - journeys (findJourneys + getSegmentPath) for a wide sample of station pairs, incl. whole-city choices: each leg on its
     train's route from its boarding point to its alighting point, every call on the way on it, changes at the same place.
   Run in the page:  await (await fetch('tools/site_audit.js')).text().then(eval)  -> {ok, counts, examples}
   Not linked from the site. */
(async()=>{
 const out={counts:{},examples:{}},bad=(k,ex)=>{out.counts[k]=(out.counts[k]||0)+1;(out.examples[k]=out.examples[k]||[]).length<8&&out.examples[k].push(ex)};
 const edge=new Set();for(const [a,b] of E){edge.add(a+'_'+b);edge.add(b+'_'+a)}
 const deg=new Map();for(const [a,b] of E){deg.set(a,(deg.get(a)||0)+1);deg.set(b,(deg.get(b)||0)+1)}
 // lakes and sea: water rings big enough not to be a river (a river crossing is a bridge)
 const area=r=>Math.abs(r.reduce((s,p,i)=>{const q=r[(i+1)%r.length];return s+p[0]*q[1]-q[0]*p[1]},0))/2;
 const perim=r=>r.reduce((s,p,i)=>s+Math.hypot(r[(i+1)%r.length][0]-p[0],r[(i+1)%r.length][1]-p[1]),0);
 const lakes=(GRAPH.water||[]).filter(r=>area(r)>60&&4*Math.PI*area(r)/perim(r)**2>0.08) /* compact: a lake, not a long thin river */.map(r=>{const xs=r.map(p=>p[0]),ys=r.map(p=>p[1]);return{r,b:[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)]}});
 const inRing=(x,y,r)=>{let c=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const [xi,yi]=r[i],[xj,yj]=r[j];if((yi>y)!==(yj>y)&&x<(xj-xi)*(y-yi)/(yj-yi)+xi)c=!c}return c};
 const onLand=(x,y)=>(GRAPH.land||[]).some(r=>inRing(x,y,r));
 const wetSeg=new Map();
 const isWet=(x,y)=>lakes.some(l=>x>=l.b[0]&&x<=l.b[2]&&y>=l.b[1]&&y<=l.b[3]&&inRing(x,y,l.r))||!onLand(x,y);
 const wetLen=(a,b)=>{const k=a<b?a+'_'+b:b+'_'+a;if(wetSeg.has(k))return wetSeg.get(k);const [x1,y1]=P[a],[x2,y2]=P[b],L=Math.hypot(x2-x1,y2-y1),n=Math.max(1,Math.ceil(L/0.5));
  let w=0;for(let i=0;i<n;i++){const f=(i+.5)/n;if(isWet(x1+(x2-x1)*f,y1+(y2-y1)*f))w+=L/n}wetSeg.set(k,w);return w};   // map units over lake / sea
 // stations
 for(const s of STATIONS){if(!Number.isInteger(s.pt))bad('station without its own map point',s.name);else if(!deg.get(s.pt))bad('station point on no drawn line',s.name)}
 // trains and line views
 const checkPath=(label,r,stops,ends,full)=>{
  if(!r.length){bad('route not drawn',label);return false}
  for(let i=1;i<r.length;i++)if(r[i]!==r[i-1]&&!edge.has(r[i-1]+'_'+r[i])){bad('route jumps between points that no drawn line joins',label+' at '+P[r[i-1]]+' -> '+P[r[i]]);return false}
  for(let i=0;i<stops.length;i++){if(ends[i]<0){bad('call not on its drawn route',label+': '+stops[i]);return false}if(i&&ends[i]<ends[i-1]){bad('calls out of order on the route',label+': '+stops[i]);return false}}
  if(full&&(ends[0]!==0||ends[ends.length-1]!==r.length-1))bad('route runs past its first or last call',label);
  for(let i=1;i+1<r.length;i++)if(r[i-1]===r[i+1]&&!ends.includes(i))bad('out-and-back spike between calls',label+' at '+P[r[i]]);
  // over a lake or the sea for more than 2 km in one go (4.5 map units; a shorter stretch is a bridge, as in the GIS rule)
  let run=0;for(let i=1;i<r.length;i++){const w=wetLen(r[i-1],r[i]),L=Math.hypot(P[r[i]][0]-P[r[i-1]][0],P[r[i]][1]-P[r[i-1]][1]);run=w>=L-1e-6?run+w:w;if(run>4.5&&!(GRAPH.causeways||[]).some(([x,y,rad])=>Math.hypot(P[r[i]][0]-x,P[r[i]][1]-y)<=rad)){bad('route drawn over a lake or the sea for more than 2 km',label+' at '+P[r[i]]);break}}
  return true};
 const seen=new Set();let nt=0;
 for(const t of TRAINS){const key=(t.mp??'x')+'|'+t.route.map(x=>x[0]).join('>');if(seen.has(key))continue;seen.add(key);nt++;
  const r=getTrainPath(t),ends=routeStopPathEnds.get(t.id)||[];checkPath(rrTrainLabel(t)+' '+t.route[0][0]+' - '+t.route.at(-1)[0],r,t.route.map(x=>x[0]),ends,true)}
 out.counts['train routes checked']=nt;
 // journeys
 const names=STATIONS.map(s=>s.name),major=LABELS.filter(n=>S.has(n)),cities=[...RR_CITIES.keys()];
 let seed=20261120;const rnd=()=>(seed=(seed*1103515245+12345)%2147483648)/2147483648,pick=a=>a[Math.floor(rnd()*a.length)];
 const pairs=[];for(let i=0;i<120;i++)pairs.push([pick(major),pick(major)]);for(let i=0;i<180;i++)pairs.push([pick(names),pick(names)]);for(let i=0;i<60;i++)pairs.push([pick(cities),pick(i%2?names:cities)]);
 let nj=0;
 for(const [a,b] of pairs){if(a===b)continue;let js;try{js=findJourneys(a,b,false)}catch(e){bad('journey search error',a+' -> '+b+': '+e.message);continue}
  for(const j of js.slice(0,3)){nj++;
   j.legs.forEach((l,i)=>{const r=getSegmentPath(l.train,l.from,l.to),lab=`${a} -> ${b} leg ${i+1} ${rrTrainLabel(l.train)} ${l.from} - ${l.to}`;
    if(!r.length){bad('journey leg not drawn',lab);return}
    if(r[0]!==S.get(l.from)?.point||r.at(-1)!==S.get(l.to)?.point)bad('journey leg does not start / end at its stations',lab);
    const calls=l.train.route.slice(l.fromIdx,l.toIdx+1).map(x=>x[0]);let k=0;
    for(const c of calls){const q=r.indexOf(S.get(c)?.point,k);if(q<0){bad('journey call not on the drawn leg',lab+': '+c);break}k=q}
    for(let m=1;m<r.length;m++)if(r[m]!==r[m-1]&&!edge.has(r[m-1]+'_'+r[m])){bad('journey leg jumps between unjoined points',lab);break}
    if(i&&j.legs[i-1].to!==l.from)bad('change between different stations',lab)})}}
 out.counts['journeys checked']=nj;
 // labels: every main station is named on the map when it is in view (centred at three zoom levels)
 clear();setCurrentStation(null);   // names are checked on the plain map: a selected route or station puts its own names first
 const phone=matchMedia('(max-width:750px)').matches;if(phone){rrSetPhoneView(true,false);resize()}   // phones: the map is its own screen
 const view0={zoom,panX,panY},norm=t=>t.replace(/\s+/g,'');let nl=0;
 for(const z of [3,7,12])for(const name of LABELS){const s=S.get(name);if(!s)continue;nl++;zoom=z;const sc=fit*zoom;
  panX=W/2-s.attach[0]*sc-((W-graphWidth*sc)/2-minX*sc);panY=H/2-s.attach[1]*sc-((H-graphHeight*sc)/2-minY*sc);updateWorld();drawMap();
  if(![...document.querySelectorAll('#labelLayer text')].some(t=>norm(t.textContent).startsWith(norm(name))))bad('main station without its name on the map','zoom '+z+': '+name)}
 zoom=view0.zoom;panX=view0.panX;panY=view0.panY;updateWorld();drawMap();out.counts['main-station labels checked']=nl;
 // Local networks in colour (each network's page, fitted and zoomed in): every Local station is on its coloured line;
 // every name sits by its own station mark, clear of other names and of other stations' marks
 const frame=async()=>{resize();focusRoute()};   // what the page does on its next frame (no animation frames in a hidden tab)
 const box=(e,o)=>{const b=e.getBoundingClientRect();return{x:b.left-o.left,y:b.top-o.top,w:b.width,h:b.height}};
 const hit=(a,b,m=0)=>a.x<b.x+b.w-m&&b.x<a.x+a.w-m&&a.y<b.y+b.h-m&&b.y<a.y+a.h-m;
 const checkNames=lab=>{const o=map.getBoundingClientRect(),marks=new Map();
  for(const g of layer.querySelectorAll('g[data-station]')){const parts=[...g.children].filter(e=>!e.classList.contains('mapnode'));if(parts.length)marks.set(g.dataset.station,parts.map(e=>box(e,o)))}
  const names=[...labels.querySelectorAll('.station-label')].map(g=>({name:g.getAttribute('aria-label').replace(/^Show departures at /,''),b:box(g.querySelector('text'),o),over:!!g.querySelector('.over-lines')}));
  for(const n of names){const own=marks.get(n.name);if(!own){bad('name without its station mark',lab+': '+n.name);continue}
   const c=own[0],dx=Math.max(n.b.x-(c.x+c.w),0,c.x-(n.b.x+n.b.w)),dy=Math.max(n.b.y-(c.y+c.h),0,c.y-(n.b.y+n.b.h));   // gap between the name and its mark
   if(Math.hypot(dx,dy)>44)bad('name away from its station',lab+': '+n.name);
   if(!n.over)for(const [k,bs] of marks)if(k!==n.name&&bs.some(b=>hit(n.b,b,1))){bad('name covers another station',lab+': '+n.name+' over '+k);break}
   for(const q of names)if(q!==n&&hit(n.b,q.b,1)){bad('names overlap',lab+': '+n.name+' / '+q.name);break}}
  return names.length};
 let nn=0;
 for(const [net,m] of rrLocalNetworkEdges()){const pts=new Set([...m.keys()].flatMap(k=>k.split('_').map(Number)));
  for(const t of TRAINS)if(t.type==='Local'&&t.network===net)for(const [n] of t.route)if(!pts.has(S.get(n)?.point)){bad('Local station off its coloured line',net+': '+n);break}
  fillLocalSystem(net);if(phone){app.classList.remove('detail-open');rrSetPhoneView(true,false)}await frame();nn+=checkNames(net);   // phones: View route shows the map
  const hub=S.get([...LABELS].find(n=>pts.has(S.get(n)?.point))||'');
  if(hub){zoom=28;const sc=fit*zoom;panX=W/2-hub.x*sc-((W-graphWidth*sc)/2-minX*sc);panY=H/2-hub.y*sc-((H-graphHeight*sc)/2-minY*sc);updateWorld();nn+=checkNames(net+' centre zoomed in')}}
 clear();app.classList.remove('detail-open');setCurrentStation(null);zoom=view0.zoom;panX=view0.panX;panY=view0.panY;updateWorld();
 if(phone)rrSetPhoneView(false,false);
 out.counts['Local network names checked']=nn;
 // one presentation site-wide: badges in two tiers (S lists, L details heads), text on the type tiers, weights 500 / 700
 const tok=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
 const badgeOK=new Set([[tok('--badge-s-fs'),tok('--badge-s-h')],[tok('--badge-l-fs'),tok('--badge-l-h')]].map(([f,h])=>parseFloat(f)+'/'+parseFloat(h)));
 const sizes=new Set(['--fs-caption','--fs-small','--fs-body','--fs-primary','--fs-hero','--fs-display'].map(n=>parseFloat(tok(n))));
 let nb=0,ntx=0;const seenOff=new Set(),off=(k,m)=>{if(!seenOff.has(m)){seenOff.add(m);bad(k,m)}};
 const look=view=>{for(const root of [document.querySelector('.side'),detail,document.querySelector('.details-head')])if(root)for(const e of root.querySelectorAll('*')){if(!e.offsetParent)continue;const cs=getComputedStyle(e);
   if(e.matches('.service,.train-number')){nb++;const k=parseFloat(cs.fontSize)+'/'+Math.round(e.getBoundingClientRect().height);if(!badgeOK.has(k)||cs.fontWeight!=='700')off('badge off the tiers',view+': '+e.textContent.trim()+' '+k+' '+cs.fontWeight);continue}
   if(e.closest('.service,.train-number,.close-detail,.day-offset,.scheduled-time,.rr-station-fac-chevron')||![...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;ntx++;
   if(!sizes.has(parseFloat(cs.fontSize))||!['500','700'].includes(cs.fontWeight))off('text off the type tiers',view+': "'+e.textContent.trim().slice(0,24)+'" '+cs.fontSize+'/'+cs.fontWeight+' ('+e.className+')')}};
 const st=LABELS.find(n=>upcoming(n).some(t=>t.type==='Regio')&&upcoming(n).some(t=>t.type==='Local'))||LABELS[0];
 setCurrentStation(st);look('timetable');
 for(const ty of ['Max','InterCity','Regio','Local']){const t=upcoming(st).find(x=>x.type===ty);if(t){chooseTrain(t);look('train '+ty)}}
 const rg=upcoming(st).find(x=>x.type==='Regio');if(rg){fillRouteInfo('Regio',rg.network,rg.line,st);look('route')}
 fillStationInfo(st);detail.querySelectorAll('details').forEach(d=>d.open=true);look('station');
 const ln=TRAINS.find(t=>t.type==='Local');fillLocalSystem(ln.network);look('network');
 const other=LABELS.find(n=>n!==st);try{rrSelectValue($('from'),st);rrSelectValue($('to'),other);setViewMode('journeys');searchJourneys();look('journeys');if(journeyResults[0]){chooseJourney(journeyResults[0]);look('journey')}}catch(e){bad('journey view error',e.message)}
 viewMode='departures';clear();app.classList.remove('detail-open');setCurrentStation(null);
 out.counts['badges checked']=nb;out.counts['text elements checked']=ntx;
 const fails=Object.keys(out.counts).filter(k=>!/checked$/.test(k));out.ok=!fails.length;return out;
})()
