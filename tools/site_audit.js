/* RR Info site audit: checks what visitors actually see, by running the site's own code in the page (2026-11-20).
   User: "do not use passive approach of fixing found bugs. i can't find bugs all the time. check your fundamental approach".
   The build gate (check_build.py) checks the builder's data; this checks the site's views built from it:
   - every station has its own map point on a drawn line;
   - every train / line view (getTrainPath): a connected route along drawn edges, every call on it in order, from its first
     call to its last, no out-and-back spike between calls, nothing drawn over a lake or the sea for more than 2 km (a bridge) except a listed Mainline causeway (GRAPH.causeways);
   - times never run backwards: scheduled and revised times along every train, journey legs and connections;
   - drawn track: Regio / Local colour (own or shared lane) only where trains of that system run, and every train's
     track drawn in its own system's colour (Mainline, Regio, Local - otherwise the line looks broken);
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
 // crowding: every Local train has a level at each stop (1-3); other trains none
 {let nc=0;for(const t of TRAINS){for(let i=0;i<t.route.length;i+=Math.max(1,Math.floor(t.route.length/3))){nc++;const c=rrCrowd(t,i);
   const want=t.type==='Local'&&statusTone(t.status)!=='cancelled';   // cancelled trains: no crowding
   if(want?!(c>=1&&c<=3):c!==0){bad('crowding level wrong',rrTrainLabel(t)+' '+t.route[i][0]+' '+c);break}}}
  out.counts['crowding levels checked']=nc}
 // alert tiers: red (cancelled) and yellow (delayed) flag a train in the timetable; a blue notice never does
 {let na=0;for(const t of TRAINS){const a=rrVisibleAlert(t);if(!a)continue;na++;const tier=rrAlertTier(a),flag=rrAlertFlag(t);
   if(tier==='info'&&flag)bad('notice flagged',rrTrainLabel(t))}
  out.counts['alerts checked']=na}
 // airports: every airport in a city with a Local system has Local trains (user 2026-11-20: "airports are all served by
 // local lines (if that city has one)"); a city has one when a Local station lies within 30 km
 {const loc=new Set();for(const t of TRAINS)if(t.type==='Local')for(const [s] of t.route)loc.add(s);const km=(a,b)=>Math.hypot(P[S.get(a).point][0]-P[S.get(b).point][0],P[S.get(a).point][1]-P[S.get(b).point][1])/RR_UNITS_PER_KM;let na=0;
  for(const a of S.keys()){if(!/airport|a[ée]roport/i.test(a))continue;na++;if(loc.has(a))continue;
   const near=[...loc].find(s=>km(a,s)<30);if(near)bad('airport in a Local city without Local trains',a+' (Local at '+near+')')}
  out.counts['airports checked']=na}
 // airport glyph (U+2708 from fonts/RRGlyphs.woff): loaded, after every airport name in the board, train details and journey,
 // and never cropped where the name itself shows (user 2026-11-20: the earlier icon showed cropped)
 {if(!document.fonts.check("15px 'RR Glyphs'",'\u2708'))bad('airport glyph font not loaded','RR Glyphs');
  for(const n of RR_AIRPORT_LINKS)if(!S.has(n))bad('airport-linked station (old Mainline map) not found - renamed?',n);
  const box=(t,i)=>{const r=document.createRange();r.setStart(t,i);r.setEnd(t,i+1);return r.getBoundingClientRect()},inside=(g,c)=>g.left>=c.left-.5&&g.right<=c.right+.5&&g.top>=c.top-.5&&g.bottom<=c.bottom+.5;
  let ng=0;const scan=async view=>{await null;   /* the glyph is added by a MutationObserver: one microtask, before paint */
   const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
   for(let t=w.nextNode();t;t=w.nextNode()){const v=t.data.trim();if(rrIsAirport(v)&&S.has(v)&&!(t.parentNode instanceof SVGElement))bad('airport name without its glyph',view+': '+v);
    const i=t.data.indexOf('\u2708');if(i<2||!t.parentElement.getClientRects().length)continue;const g=box(t,i),l=box(t,i-2);
    for(let a=t.parentElement;a;a=a.parentElement){const cs=getComputedStyle(a),top=a===document.documentElement;if(!top&&cs.overflowX==='visible'&&cs.overflowY==='visible')continue;
     const c=top?{left:0,top:0,right:innerWidth,bottom:innerHeight}:a.getBoundingClientRect();if(!inside(l,c))break;ng++;if(!inside(g,c))bad('airport glyph cropped',view+': '+t.data.trim()+' in '+(a.className||a.tagName));break}}};
  const st0=currentStation,ap=[...S.keys()].filter(n=>rrIsAirport(n)&&TRAINS.some(t=>t.route.some(r=>r[0]===n)));
  for(const a of ap.slice(0,4)){setCurrentStation(a);await scan('board '+a);const t=upcoming(a)[0];if(t){chooseTrain(t);detail.scrollTop=0;await scan('train at '+a)}}
  const ta=TRAINS.find(t=>rrIsAirport(t.dest));if(ta){setCurrentStation(ta.route[0][0]);chooseTrain(ta);detail.scrollTop=0;await scan('train to '+ta.dest)}
  if(st0)setCurrentStation(st0);out.counts['airport glyphs checked']=ng}
// a station's facilities never use a train's words (user 2026-11-21: "station has no voiture-restaurant, that is on trains")
{let nf=0;for(const l of [STATION_CORE,...Object.values(STATION_AMENITIES)])for(const f of l){nf++;if(['Dining','Quiet Zone','First Class','Bistro'].includes(f))bad('train-only facility listed for a station',f)}out.counts['station facility labels checked']=nf}
// fast Local trains (user 2026-11-21, approved): same letter as the all-stations train, the word "Fast" on the board, by the
// destination in the details; the calling list shows only where it calls (user 2026-11-21: no run-through stations); never a new code
{const st0=currentStation;let nf=0;const fs=TRAINS.filter(t=>t.fast);
  for(const t of fs){const a=TRAINS.find(x=>x.type==='Local'&&!x.fast&&x.network===t.network&&x.line===t.line&&x.dir===t.dir);if(!a||rrTrainLabel(a)!==rrTrainLabel(t))bad('fast Local train not under its line letter',t.id);
   if(a){const an=a.route.map(r=>r[0]);let k=0;for(const [n] of t.route){k=an.indexOf(n,k);if(k<0)break;k++}if(k<0||t.route.length>=a.route.length)bad('fast Local train: its stops are not a shorter subset of the all-stations train',t.id)}}
  for(const t of fs.slice(0,6)){viewMode='departures';setCurrentStation(t.route[0][0]);const j=departures.findIndex(x=>x.id===t.id),rows=[...board.querySelectorAll('.trainrow')];
   if(j>=0&&rows[j]){nf++;if(!rows[j].querySelector('.rr-fast-tag'))bad('fast train without "Fast" on the board',t.id)}
   chooseTrain(t,false);if(!detail.querySelector('.service-dest .rr-fast-tag'))bad('fast train without "Fast" by its destination',t.id);
   if(/does not stop|Not stopping at/.test(detail.textContent))bad('calling list names stations the train does not call at',t.id)}
  selectedTrain=null;setCurrentStation(st0);out.counts['fast Local trains checked']=fs.length;out.counts['fast board rows checked']=nf}
// a Regio or Local train names the airport it calls at on the way in its board "via" (user 2026-11-21)
{const st0=currentStation;let nv=0;const seen=new Set();
  for(const t of TRAINS){if(t.type!=='Regio'&&t.type!=='Local')continue;const k=t.route.findIndex((r,i)=>i>0&&i<t.route.length-1&&rrIsAirport(r[0])&&r[0]!==t.dest);if(k<1)continue;
   const st=t.route[k-1][0];if(seen.has(st)||seen.size>=12)continue;seen.add(st);viewMode='departures';setCurrentStation(st);
   const rows=[...board.querySelectorAll('.trainrow')];departures.slice(0,rows.length).forEach((tr,j)=>{const row=rows[j];if(tr.type!=='Regio'&&tr.type!=='Local')return;
    const i0=tr.hereIndex??tr.route.findIndex(r=>r[0]===st),air=tr.route.slice(i0+1).find(r=>r[0]!==tr.dest&&rrIsAirport(r[0]));if(!air)return;nv++;
    if(!(row.querySelector('.row-via')?.textContent||'').includes(air[0]))bad('Regio / Local via without the airport on the way',st+': '+rrTrainLabel(tr)+' to '+tr.dest+' (via '+air[0]+')')})}
  setCurrentStation(st0);out.counts['airport vias checked']=nv}
 // station services: grouped by kind in RR_SERVICE_GROUPS order; every network with lines is a drop-down (user 2026-11-20)
 {const st0=currentStation;let ns=0;const order=RR_SERVICE_GROUPS.map(g=>g[0]);
  for(const name of LABELS.slice(0,12)){if(!S.has(name))continue;fillStationInfo(name);const card=[...detail.querySelectorAll('.rr-card')].find(c=>c.querySelector('.rr-card-title')?.textContent==='Services');if(!card)continue;
   const hs=[...card.querySelectorAll('.station-svc-group')].map(h=>h.textContent),idx=hs.map(h=>order.indexOf(h)).filter(i=>i>=0);
   if(idx.some((v,i)=>i&&v<idx[i-1]))bad('station services out of group order',name+': '+hs.join(' / '));
   for(const r of card.querySelectorAll('.station-svc')){ns++;if(!r.parentElement.previousElementSibling?.classList.contains('station-svc-group'))bad('station service outside a group',name);
    if(r.querySelector('.route-link')&&r.tagName!=='DETAILS')bad('station service with lines is not a drop-down',name+': '+r.querySelector('.station-svc-name')?.textContent)
    if(/RR Local/.test(r.textContent)&&!r.querySelector('summary .rr-system-link'))bad('Local network name does not open its network page',name)}}
  if(st0)setCurrentStation(st0);out.counts['station services checked']=ns}
 // a delay status never breaks over two lines in a timetable row ("Expected" shortens to "Expt" when space runs out)
 {let nt=0;for(const tag of document.querySelectorAll('#board .rowstatus .status-tag')){nt++;if(tag.getClientRects().length>1)bad('status breaks over two lines',tag.textContent);
   const cr=tag.parentElement.querySelector('.rr-crowd');if(cr&&cr.getBoundingClientRect().top>=tag.getBoundingClientRect().bottom-2)bad('crowding pushed under its status (user 2026-11-21)',tag.textContent)}out.counts['row statuses checked']=nt}
 // alignment: in every row laid out to centre its items (flex / grid, align-items:center), items side by side share one centre
 // line (user 2026-11-20: "Ring line" sat 4 px under its O badge - a margin meant for the route header; "fix all problems alike").
 // Skipped: items aligned on purpose (align-self start / end / baseline / stretch), nudged on purpose (transform), or more than 2.5x taller.
 {const st0=currentStation;let nr=0;const scan=view=>{for(const el of document.querySelectorAll('body *')){const cs=getComputedStyle(el);if(!/flex|grid/.test(cs.display)||cs.alignItems!=='center'||(cs.display.includes('flex')&&/column/.test(cs.flexDirection)))continue;
   const kids=[...el.children].filter(k=>{const s=getComputedStyle(k);return s.display!=='none'&&s.position!=='absolute'&&s.position!=='fixed'&&s.visibility!=='hidden'&&s.transform==='none'&&k.getBoundingClientRect().height>0&&!['start','flex-start','baseline','end','flex-end','stretch'].includes(s.alignSelf)});if(kids.length<2)continue;nr++;
   const rs=kids.map(k=>[k,k.getBoundingClientRect()]);
   outer:for(let i=0;i<rs.length;i++)for(let j=i+1;j<rs.length;j++){const [a,ra]=rs[i],[b,rb]=rs[j];if(ra.bottom<=rb.top||rb.bottom<=ra.top||ra.height>2.5*rb.height||rb.height>2.5*ra.height)continue;
    const d=(ra.top+ra.height/2)-(rb.top+rb.height/2);if(Math.abs(d)>1.5){bad('items in a row not centred on each other',view+': '+(a.className.baseVal??a.className)+' / '+(b.className.baseVal??b.className)+' '+d.toFixed(1)+' px');break outer}}}};
  const st=LABELS.find(n=>S.has(n));setCurrentStation(st);scan('board');fillStationInfo(st);detail.querySelectorAll('details').forEach(d=>d.open=true);scan('station information');
  for(const ty of ['Local','Regio','InterCity']){const t=upcoming(st).find(x=>x.type===ty);if(t){chooseTrain(t);scan('train '+ty)}}
  const tr=TRAINS.find(x=>x.ring);if(tr){setCurrentStation(tr.route[1][0]);chooseTrain(tr);scan('ring train');fillRouteInfo('Local',tr.network,tr.line,tr.route[1][0]);scan('ring route')}
  const tl=TRAINS.find(x=>x.type==='Local'&&!x.ring);fillRouteInfo('Local',tl.network,tl.line,tl.route[0][0]);scan('route');
  for(const n of new Set(TRAINS.filter(x=>x.type==='Local').map(x=>x.network))){fillLocalSystem(n);scan('network '+n)}
  const js=findJourneys(st,TRAINS.find(x=>x.type==='Local'&&x.route.some(r=>r[0]===st))?.route.at(-1)[0]||st,false);if(js[0]){chooseJourney(js[0]);scan('journey')}
  if(st0)setCurrentStation(st0);out.counts['centred rows checked']=nr}
 // cancelled trains in the timetable and train details: time crossed out, no crowding (user 2026-11-20)
 {const st0=currentStation;let nc=0;for(const st of LABELS.filter(n=>S.has(n)).slice(0,30)){setCurrentStation(st);
   for(const row of board.querySelectorAll('.trainrow')){if(!/Cancelled/.test(row.querySelector('.rowstatus')?.textContent||''))continue;nc++;
    const tp=row.querySelector('.row-time .time-primary');if(!tp||!getComputedStyle(tp).textDecorationLine.includes('line-through'))bad('cancelled train time not crossed out',st+': '+row.querySelector('.dest')?.textContent);
    if(row.querySelector('.rr-crowd'))bad('cancelled train shows crowding',st+': '+row.querySelector('.dest')?.textContent)}
   if(nc>=6)break}
  const tc=TRAINS.find(t=>statusTone(t.status)==='cancelled'&&t.type==='Local');if(tc){setCurrentStation(tc.route[0][0]);chooseTrain(tc);
   const tp=detail.querySelector('.depart-time .time-primary');if(!tp||!getComputedStyle(tp).textDecorationLine.includes('line-through'))bad('cancelled train time not crossed out','train details');
   if(detail.querySelector('.rr-crowd')||[...detail.querySelectorAll('.keylabel')].some(e=>e.textContent==='Crowding'))bad('cancelled train shows crowding','train details')}
  if(st0)setCurrentStation(st0);out.counts['cancelled trains checked']=nc}
 // timetable rows carry no alert triangle: the status (Cancelled / Expected) says it (user 2026-11-20)
 {let nf=0;const st0=currentStation;for(const st of LABELS.filter(n=>S.has(n)).slice(0,10)){setCurrentStation(st);for(const row of board.querySelectorAll('.trainrow')){nf++;if(row.querySelector('.rr-alert-flag,[class*="alert-flag"]'))bad('alert triangle in a timetable row',st)}}
  if(st0)setCurrentStation(st0);out.counts['triangle-free timetable rows checked']=nf}
 // day marks: a train's time at the stop being looked at never carries a day mark (timetable, route details); along a train or a
 // journey a mark counts the visitor's days from that stop / the first departure and never goes backwards (user 2026-11-20: "-1")
 {let nd=0;for(const t of TRAINS.filter((_,i)=>i%7===0)){const h=Math.min(t.hereIndex??0,t.route.length-1),b=rrDayIdx(t.route[h][1]);nd++;
   if(/day-offset/.test(stopTimeMarkup(t,h).replace(/retime-box[\s\S]*/,'')))bad('day mark on the time being looked at',rrTrainLabel(t)+' '+t.route[h][0]+' '+t.route[h][1]);
   for(let i=h;i<t.route.length;i++)if(rrDayIdx(t.route[i][1])-b<0){bad('negative day mark after the stop being looked at',rrTrainLabel(t)+' '+t.route[i][0]);break}}
  out.counts['day marks checked']=nd}
 // airport names inside longer texts (via lists, 'Towards ...') carry the glyph too (user 2026-11-20: "not showing icon in via xxx")
 {const AIR=[...S.keys()].filter(rrIsAirport).sort((a,b)=>b.length-a.length),st0=currentStation;let nv=0;
  const scan=async view=>{await null;const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);for(let t=w.nextNode();t;t=w.nextNode()){if(t.parentNode instanceof SVGElement||!t.parentElement.getClientRects().length)continue;
   const v=t.data;if(v.length>160)continue;for(const n of AIR){let k=v.indexOf(n);while(k>=0){const after=v.slice(k+n.length),before=v[k-1]||' ';nv++;
     if(!/\w/.test(before)&&!/^\w/.test(after)&&!after.startsWith(RR_AIR)&&!/^(Departures|Arrivals|Next departures from|Show departures at|Journey|Runs between)/.test(v.trim()))bad('airport name without its glyph in a text',view+': '+v.trim().slice(0,60));
     k=v.indexOf(n,k+n.length)}}}};
  const ap=[...S.keys()].filter(n=>rrIsAirport(n)&&TRAINS.some(t=>t.route.some(r=>r[0]===n)));
  let nb=0;for(const st of STATIONS.map(s=>s.name)){if(nb>=6)break;if(!upcoming(st).slice(0,12).some(t=>rrVia(t,false).some(rrIsAirport)))continue;nb++;setCurrentStation(st);await scan('board '+st)}   // timetables whose via lines name an airport
  for(const t of TRAINS.filter(t=>t.ring).slice(0,2)){fillRouteInfo('Local',t.network,t.line,t.route[1][0]);await scan('ring route')}
  if(st0)setCurrentStation(st0);out.counts['airport names in texts checked']=nv}
 // train formation: no coach selected at first; clicking a coach selects it, clicking it again deselects it (user 2026-11-20)
 {const t=TRAINS.find(x=>x.type!=='Local'&&RR_FORMATIONS[rrFormationKey(x)]);if(t){setCurrentStation(t.route[0][0]);chooseTrain(t);const w=detail.querySelector('.rr-formation');
   if(!w)bad('train formation missing',rrTrainLabel(t));else{if(w.querySelector('.rr-car[aria-pressed="true"]'))bad('a coach is selected before any click',rrTrainLabel(t));
    const c=w.querySelector('.rr-car[data-rr-coach="0"]');c.click();if(c.getAttribute('aria-pressed')!=='true'||!w.querySelector('.rr-selected-summary').textContent.trim())bad('clicking a coach does not select it',rrTrainLabel(t));
    c.click();if(w.querySelector('.rr-car[aria-pressed="true"]')||w.querySelector('.rr-selected-summary').textContent.trim())bad('clicking the selected coach does not deselect it',rrTrainLabel(t));
    detail.scrollTop=0;c.click();const sb=w.querySelector('.rr-selected-summary').getBoundingClientRect(),db=detail.getBoundingClientRect();
    if(sb.height&&(sb.bottom>db.bottom+1||sb.top<db.top-1))bad('selected coach details not brought into view',rrTrainLabel(t)+' '+Math.round(sb.bottom-db.bottom)+' px below');c.click()}}
  out.counts['train formation checked']=1}
 // a selected train's names: its other stops (not ends, current station, changes or major stations) are named only where their dot has
 // room (no other highlighted stop within 22 px) and right beside it; zoomed out, names never scatter (user 2026-11-20)
 {const st0=currentStation,v0={zoom,panX,panY};let nl=0;const dot=n=>{const c=document.querySelector(`#stationLayer g[data-station="${CSS.escape(n)}"] circle`);return c&&[+c.getAttribute('cx'),+c.getAttribute('cy')]};
  for(const t of TRAINS.filter(x=>(x.type==='Regio'||x.type==='Local')&&x.route.length>=18).filter((_,i)=>i%40===0).slice(0,5)){const st=t.route[Math.floor(t.route.length/3)][0];setCurrentStation(st);chooseTrain(upcoming(st).find(x=>x.id===t.id)||t);
   const sel=new Set(selectedNames),key=new Set([t.route[0][0],t.route.at(-1)[0],st,...LABELS]);
   for(const f of [1,0.4]){if(f!==1)zoomAt(f);rrRedraw();
    for(const g of document.querySelectorAll('#labelLayer .station-label')){const n=g.getAttribute('aria-label').replace('Show departures at ','');if(!sel.has(n)||key.has(n))continue;nl++;
     const p=dot(n);if(!p)continue;const crowd=[...sel].some(o=>{if(o===n)return false;const q=dot(o);return q&&Math.hypot(q[0]-p[0],q[1]-p[1])<22});
     if(crowd&&zoom<rrMaxZoom()-1e-6)bad('stop named where highlighted dots crowd',rrTrainLabel(t)+': '+n);
     const b=g.getBBox();const dx=Math.max(b.x-p[0],0,p[0]-(b.x+b.width)),dy=Math.max(b.y-p[1],0,p[1]-(b.y+b.height));if(Math.hypot(dx,dy)>24)bad('stop name far from its dot',rrTrainLabel(t)+': '+n+' '+Math.round(Math.hypot(dx,dy))+' px')}}}
  zoom=v0.zoom;panX=v0.panX;panY=v0.panY;updateWorld();if(st0)setCurrentStation(st0);out.counts['trip stop names checked']=nl}
 // Mainline train numbers, DB style (user 2026-11-20): 3 digits; one line (type + the same two termini) per block of numbers; odd one
 // way, even the other; counting up through the day
 {const L=new Map();let nn=0;for(const t of TRAINS){if(t.type==='Regio'||t.type==='Local')continue;nn++;const m=String(t.id).match(/^(MAX|IC|VIA|NL) (\d{3})$/);if(!m){bad('Mainline train number not 3 digits with its type prefix',t.id);continue}
   const k=t.type+'|'+[t.origin,t.dest].sort().join('~');if(!L.has(k))L.set(k,[]);L.get(k).push(t)}
  const blocks=[];for(const [k,ts] of L){const ns=ts.map(t=>+t.id.split(' ')[1]);blocks.push([k.split('|')[0],Math.min(...ns),Math.max(...ns),k]);
   const par=new Map();for(const t of ts){const p=+t.id.split(' ')[1]%2,d=t.origin+'>'+t.dest;if(!par.has(d))par.set(d,new Set());par.get(d).add(p)}
   for(const [d,ps] of par)if(ps.size>1)bad('one direction of a line has odd and even numbers',k+' '+d);
   if(new Set([...par.values()].map(ps=>[...ps][0])).size<par.size)bad('both directions of a line share odd / even',k);
   for(const p of [0,1]){const seq=ts.filter(t=>+t.id.split(' ')[1]%2===p).sort((a,b)=>+a.id.split(' ')[1]-+b.id.split(' ')[1]);for(let i=1;i<seq.length;i++)if(timeOrdinal(seq[i].route[0][1])<timeOrdinal(seq[i-1].route[0][1])){bad('line numbers do not count up through the day',k);break}}}
  for(const a of blocks)for(const b of blocks)if(a!==b&&a[0]===b[0]&&a[1]<=b[2]&&b[1]<=a[2])bad('two lines share a number block',a[3]+' / '+b[3]);
  out.counts['Mainline train numbers checked']=nn}
 // left panel (user 2026-11-20): Stations / Journeys on top; with a station chosen its name, Station information, Departures / Arrivals and
 // the filters show and the search box does not; with none, the search box (with its search icon) shows - also after a journey search
 {const st0=currentStation,vis=s=>{const e=document.querySelector(s);return !!e&&e.getClientRects().length>0&&e.getBoundingClientRect().height>0};
  const js=findJourneys(LABELS[0],LABELS[1],false);setViewMode('journeys');if(js[0])chooseJourney(js[0]);setViewMode('departures');setCurrentStation(LABELS[0]);
  for(const s of ['#stationsTab','#journeysTab','#stationHeading','#stationInfoLeft','#departuresTab','#arrivalsTab','.service-filter'])if(!vis(s))bad('left panel part missing with a station chosen',s);
  if(vis('#stationPanel .search-picker-main'))bad('station search box shown with a station chosen','');
  {const y=s=>document.querySelector(s).getBoundingClientRect().top,ord=['#stationsTab','#stationHeading','#stationInfoLeft','#departuresTab','.service-filter','#board'];
   for(let i=1;i<ord.length;i++)if(y(ord[i])<y(ord[i-1])-1)bad('left panel parts out of order',ord[i-1]+' then '+ord[i])}
  setCurrentStation(null);if(!vis('#stationPanel .search-picker-main')||!vis('.picker-search-icon'))bad('station search box (with its icon) missing with no station chosen','');
  for(const s of ['#departuresTab','.service-filter'])if(vis(s))bad('station part shown with no station chosen',s);
  if(!vis('#stationHeading')||$('stationHeading').textContent.trim()!=='Choose a station')bad('home without its "Choose a station" heading (user 2026-11-21)','#stationHeading');
  {const g=document.querySelector('#stationPanel .search-picker-main').getBoundingClientRect().top-$('stationHeading').getBoundingClientRect().bottom;if(g<10||g>16)bad('home heading not spaced from the search box (10-16 px)',Math.round(g)+' px')}
  setViewMode('journeys');if(vis('#stationHeading')||vis('#stationInfoLeft')||vis('.board-controls'))bad('station block shown while Journeys is open','');if(!vis('#journeyPanel')&&!vis('.journey-results-head'))bad('journey planner missing while Journeys is open','');setViewMode('departures');
  setCurrentStation(st0||LABELS[0]);out.counts['left panel states checked']=3}
 // station facilities: every tile has its pictogram, and the pictogram exists (2026-11-20: 11 new station pictograms)
 {let nf=0;const st0=currentStation,byTier={};for(const n of S.keys()){const k=rrStationTier(n);if(!byTier[k])byTier[k]=n}
  for(const n of Object.values(byTier)){fillStationInfo(n);for(const t of detail.querySelectorAll('.station-picto-grid .facility')){nf++;const u=t.querySelector('use');const id=u?.getAttribute('href')?.slice(1);
    if(!u||(!document.getElementById(id)))bad('station facility without its pictogram',n+': '+t.textContent.trim())}}
  if(st0)setCurrentStation(st0);out.counts['station facility tiles checked']=nf}
 // a journey's change stations: a neutral ring on the map, not the lines' colours (user 2026-11-20)
 {const st0=currentStation;let nc=0;const js=[[LABELS[0],LABELS[5]],['Peiting Central','Songchiao Airport'],[LABELS[2],LABELS[9]]].flatMap(([a,b])=>findJourneys(a,b,false).filter(j=>j.change>0).slice(0,1));const ink=RR_UI_CSS_COLOR('--ink');
  for(const j of js){chooseJourney(j);for(let i=0;i<j.legs.length-1;i++){rrFocusStation(j.legs[i].to);rrRedraw();const g=document.querySelector(`#stationLayer g[data-station="${CSS.escape(j.legs[i].to)}"]`);if(!g)continue;nc++;
    const strokes=[...g.querySelectorAll('circle,path')].map(e=>e.getAttribute('stroke')).filter(x=>x&&x!=='none');if(strokes.some(c=>c!==ink))bad('journey change ring not neutral',j.legs[i].to+': '+strokes.join(' '))}}
  if(st0)setCurrentStation(st0);out.counts['journey change rings checked']=nc}
 // the timetable: another list (departures <-> arrivals, another filter) starts at the top; choosing the chosen tab keeps the place
 {const st0=currentStation;setViewMode('departures');setCurrentStation(LABELS.find(n=>S.has(n)));board.scrollTop=300;const y0=board.scrollTop;
  $('departuresTab').click();if(y0>0&&board.scrollTop!==y0)bad('choosing the chosen tab moved the timetable','');
  $('arrivalsTab').click();if(board.scrollTop!==0)bad('arrivals did not start at the top',board.scrollTop);
  board.scrollTop=300;$('departuresTab').click();if(board.scrollTop!==0)bad('departures did not start at the top',board.scrollTop);
  if(st0)setCurrentStation(st0);out.counts['timetable switches checked']=3}
 // regional trains reach the main station in cities that work that way (Hamburg / Melbourne / Amsterdam model; 2026-11-21)
 {for(const n of ['Havenbolme Hbf','Victoria Central','Prinsburg Central','Yenchia Main','Amptonside Central','Somerfield St John'])if(S.has(n)&&!TRAINS.some(t=>t.type==='Regio'&&t.route.some(r=>r[0]===n)))bad('main station without Regio trains',n);out.counts['Regio main stations checked']=6}
 // Somerfield works like London (2026-11-21): no Local line across the centre (Melridge - Somerfield - Sudmere)
 {const n=TRAINS.filter(t=>t.network==='Somershire'&&!t.ring&&t.route.some(r=>r[0]==='Melridge')&&t.route.some(r=>r[0]==='Sudmere')).length;if(n)bad('Somerfield Local line across the centre',n);out.counts['London-model cities checked']=1}
 // journey form: the swap button exchanges From and To (each select only holds its chosen station)
 {const f=$('from'),t=$('to'),f0=f.value,t0=t.value,[a,b]=RR_STATION_NAMES;rrSelectValue(f,a);rrSelectValue(t,b);$('swapStations').click();
  if(f.value!==b||t.value!==a||$('fromInput').value!==b||$('toInput').value!==a)bad('swap button does not exchange From and To',f.value+' / '+t.value);
  rrSelectValue(f,f0);rrSelectValue(t,t0);pickerViews.get('from')?.sync();pickerViews.get('to')?.sync();out.counts['swap button checked']=1}
 // ring trains have no destination: boards, train details and journey cards show their direction, never 'To <station>'
 {let nr=0;const done=new Set(),st0=currentStation;for(const t of TRAINS){if(!t.ring)continue;nr++;const want=t.ring==='cw'?'Clockwise':'Anticlockwise';
   if(rrDestText(t,false)!==want||rrDestText(t,true)!==want)bad('ring train shows no direction',rrTrainLabel(t)+' '+t.id);
   const k=rrTrainLabel(t)+t.ring;if(done.has(k))continue;done.add(k);setCurrentStation(t.route[1][0]);chooseTrain(t);
   const lab=detail.querySelector('.destination-label')?.textContent,d=detail.querySelector('.service-dest')?.textContent.trim();
   if(lab!=='Ring line'||d!==want)bad('ring train details show a destination',rrTrainLabel(t)+': '+lab+' '+d)
   if([...detail.querySelectorAll('.keylabel')].some(e=>e.textContent==='Origin'))bad('ring train details show an origin',rrTrainLabel(t))}
  if(st0)setCurrentStation(st0);out.counts['ring trains checked']=nr}
 // times never run backwards: scheduled and revised (delayed) times along every train, and every journey's legs and changes
 {let nt2=0;for(const t of TRAINS){nt2++;let ps=-1,pr=-1;for(let i=0;i<t.route.length;i++){const s=timeOrdinal(t.route[i][1]),r=stopOrdinal(t,i);
   if(s<ps){bad('scheduled time earlier than the stop before',rrTrainLabel(t)+' '+t.route[i][0]+' '+t.route[i][1]);break}
   if(r<pr){bad('revised time earlier than the stop before',rrTrainLabel(t)+' '+t.route[i][0]+' '+t.route[i][1]+' +'+stopDelay(t,i));break}
   ps=s;pr=r}}
  out.counts['train timetables checked']=nt2}
 // drawn track: a line is drawn in a system's colour (Regio, Local - its own colour or a shared lane) only where trains of that
 // system run (2026-11-20: Local lanes were drawn on a stretch only Regio trains use)
 {const key=(a,b)=>a<b?a+'_'+b:b+'_'+a,runs=new Map(),seenP=new Set(),sysOf=t=>t.type==='Regio'?'R':t.type==='Local'?'L':'M';
  for(const t of TRAINS){const k=t.mp+'|'+sysOf(t);if(seenP.has(k))continue;seenP.add(k);const r=getTrainPath(t);for(let i=1;i<r.length;i++){const k2=key(r[i-1],r[i]);if(!runs.has(k2))runs.set(k2,new Set());runs.get(k2).add(sysOf(t))}}
  let ne=0;for(const [a,b,t,sh] of E){ne++;const d=((sh?{1:'MR',2:'RL',3:'MRL',4:'ML'}[sh]:'')+({0:'M',1:'M',2:'R',3:'L'}[t]||'')),u=runs.get(key(a,b))||new Set();
   for(const s of 'RL')if(d.includes(s)&&!u.has(s)){bad('track drawn for a system with no trains on it',(s==='R'?'Regio':'Local')+' at '+P[a]);break}
   for(const s of 'MRL')if(u.has(s)&&!d.includes(s)){bad('trains run on track not drawn in their colour (the line looks broken)',({M:'Mainline',R:'Regio',L:'Local'})[s]+' at '+P[a]);break}}
  out.counts['drawn track pieces checked']=ne}
 // a Mainline line never looks broken: no run of track without the Mainline lane, through plain points (no junction), with Mainline
 // track at both ends (2026-11-20, user: "last two broken lines" - a Regional / Local twin standing for the main line lost its lane)
 {const hasM=e=>e[2]===0||e[2]===1||[1,3,4].includes(e[3]),dg=new Map(),inc=new Map();E.forEach((e,i)=>{for(const v of [e[0],e[1]]){dg.set(v,(dg.get(v)||0)+1);if(!inc.has(v))inc.set(v,[]);inc.get(v).push(i)}});
  const seenE=new Set();let nr=0;
  E.forEach((e,i)=>{if(hasM(e)||seenE.has(i))return;seenE.add(i);nr++;let both=0;
   for(const start of [e[0],e[1]]){let v=start,prev=i;while(dg.get(v)===2){const nx=inc.get(v).find(j=>j!==prev);if(hasM(E[nx])){both++;break}if(seenE.has(nx))break;seenE.add(nx);prev=nx;v=E[nx][0]===v?E[nx][1]:E[nx][0]}}
   if(both===2)bad('Mainline line broken by a piece without its Mainline lane','at '+P[e[0]])});
  out.counts['non-Mainline runs checked']=nr}
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
    if(i&&j.legs[i-1].to!==l.from)bad('change between different stations',lab);
    if(l.arr<l.dep)bad('journey leg arrives before it departs',lab);
    if(i&&l.dep<j.legs[i-1].arr)bad('connection leaves before the train before it arrives',lab)})}}
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
   if(e.closest('.service,.train-number,.close-detail,.day-offset,.scheduled-time,.rr-station-fac-chevron,.rr-formation')||![...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;ntx++;
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
 // every marker on its line's exact point; at the deepest zoom every station in view is named (user 2026-11-20)
 {clear();app.classList.remove('detail-open');setCurrentStation(null);if(phone)rrSetPhoneView(true,false);resize();const v0={zoom,panX,panY};
  let nmk=0,nz=0;const centres=[...LABELS].map(n=>P[S.get(n)?.point]).filter(Boolean);
  for(const [cx,cy] of centres){resize();zoom=rrMaxZoom();const sc=fit*zoom;panX=W/2-cx*sc-((W-graphWidth*sc)/2-minX*sc);panY=H/2-cy*sc-((H-graphHeight*sc)/2-minY*sc);updateWorld();
   const named=new Set([...labels.querySelectorAll('.station-label')].map(g=>g.getAttribute('aria-label').replace(/^Show departures at /,'')));
   for(const g of layer.querySelectorAll('g[data-station]')){const c=g.querySelector('.mapnode'),x=+c.getAttribute('cx'),y=+c.getAttribute('cy'),st=S.get(g.dataset.station);
    const [px,py]=P[st.point];nmk++;if(Math.hypot(x-(px*sc+offX),y-(py*sc+offY))>0.5)off('station marker off its line','"'+g.dataset.station+'"');
    const mb=container.getBoundingClientRect(),ovs=[...container.querySelectorAll('.map-legend,.zoom-control')].map(e=>{const b=e.getBoundingClientRect();return{x:b.left-mb.left,y:b.top-mb.top,w:b.width,h:b.height}}).filter(r=>r.w>0&&r.h>0);
    if(x<40||y<40||x>W-40||y>H-40||ovs.some(p=>x>=p.x-8&&x<=p.x+p.w+8&&y>=p.y-8&&y<=p.y+p.h+8))continue;nz++;   /* as the map: not at the edge or under its legend / controls */ if(!named.has(g.dataset.station))off('station without its name at the deepest zoom','"'+g.dataset.station+'"')}}
  zoom=v0.zoom;panX=v0.panX;panY=v0.panY;updateWorld();if(phone)rrSetPhoneView(false,false);out.counts['station markers checked']=nmk;out.counts['deepest-zoom names checked']=nz}
 const fails=Object.keys(out.counts).filter(k=>!/checked$/.test(k));out.ok=!fails.length;return out;
})()
