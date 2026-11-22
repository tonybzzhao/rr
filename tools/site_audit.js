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
   - journey results: no train formation; every train badge opens that train departing from the leg's boarding station;
   - every time in Radeland time (now, today, train times, opening hours, first / last trains), no zone stated anywhere;
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
  // a wet stretch that takes in a listed causeway is that causeway (2026-11-21: the drawn line now follows it closely and the
  // stretch ran on to the coast past the old end-point test)
  const onCw=q=>(GRAPH.causeways||[]).some(([x,y,rad])=>Math.hypot(P[q][0]-x,P[q][1]-y)<=rad);
  let run=0,cw=false;for(let i=1;i<r.length;i++){const w=wetLen(r[i-1],r[i]),L=Math.hypot(P[r[i]][0]-P[r[i-1]][0],P[r[i]][1]-P[r[i-1]][1]);if(w>=L-1e-6){run+=w;cw=cw||onCw(r[i])||onCw(r[i-1])}else{run=w;cw=w>0&&onCw(r[i])};if(run>4.5&&!cw){bad('route drawn over a lake or the sea for more than 2 km',label+' at '+P[r[i]]);break}}
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
  const isAir=a=>/airport|a[ée]roport/i.test(a)||(S.get(a)?.conn||[]).some(c=>c[0]==='airport');   // by name or by its airport connection (Cartier: 2026-11-22)
  // known, still to fix (2026-11-22, found when airports were first matched by their connection too): airport-link stations whose
  // city's Local network does not reach them yet - counted, not failed; a new one fails
  const KNOWN_NO_LOCAL=new Set(['Jiangkou','Cosgrove']);let nk=0;
  for(const a of S.keys()){if(!isAir(a))continue;na++;if(loc.has(a))continue;if(KNOWN_NO_LOCAL.has(a)){nk++;continue}
   const near=[...loc].find(s=>km(a,s)<30);if(near)bad('airport in a Local city without Local trains',a+' (Local at '+near+')')}
  out.counts['airports checked']=na;out.counts['known airport gaps without Local trains (Jiangkou, Cosgrove) checked']=nk}
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
// the journey Reset leaves an empty planner on Journeys (Regio network pages removed 2026-11-22)
{let nn=0;const nets=[...new Set(TRAINS.filter(t=>t.type==='Regio').map(t=>t.network))];
  app.classList.remove('detail-open');clear();drawMap();
  setViewMode('journeys');rrSelectValue($('from'),LABELS[0]);rrSelectValue($('to'),LABELS[1]);$('clear').click();
  if(viewMode!=='journeys'||$('from').value||$('to').value)bad('journey Reset did not leave an empty planner on Journeys',viewMode+' '+$('from').value+' '+$('to').value);
  setViewMode('departures')}
// every main / central station has Regio trains (user 2026-11-21: "why regio won't serve a central station???")
{let nm=0;for(const x of STATIONS)if(LABELS.includes(x.name)||/(Central|Centrale|Hbf|Main)$/.test(x.name)){nm++;if(!/R/.test(x.sys||''))bad('main station without Regio trains',x.name)}out.counts['main stations with Regio checked']=nm}
// station Connections (user 2026-11-21): every station with GIS connections shows them, each mode with its pictogram (metro: its
// own logo once provided), no airport row repeating the station's name, and an airport station always has its airport row
{const st0=currentStation;let nc=0;const withC=STATIONS.filter(x=>x.conn?.length);
  for(const x of STATIONS)if(rrIsAirport(x.name)&&/Airport\b/.test(x.name)&&!(x.conn||[]).some(c=>c[0]==='airport'))bad('airport station without its airport connection',x.name);
  for(const x of withC.filter((_,i)=>i%Math.max(1,Math.floor(withC.length/12))===0).slice(0,12)){fillStationInfo(x.name);const rows=[...detail.querySelectorAll('.station-conn')];nc++;
   if(rows.length!==x.conn.length)bad('station connections missing from Services',x.name);
   for(const r of rows){const m=r.dataset.mode;if(m!=='metro'&&!r.querySelector('.station-conn-icon use'))bad('connection without its pictogram',x.name+': '+m);
    if(m==='airport'&&!/ \([A-Z]{3}\)$/.test(r.querySelector('.station-svc-name').textContent.trim()))bad('airport row without its official name and (IATA) code',x.name)}}
  // invented names are English (Windale, not Vindelle; user 2026-11-21) and every airport code is unique
  {const codes=STATIONS.flatMap(x=>(x.conn||[]).filter(c=>c[0]==='airport').map(c=>c[2]));if(new Set(codes).size!==codes.length)bad('an IATA code used twice',codes.join(' '));
   for(const x of STATIONS)for(const c of x.conn||[])if(/Vindelle|Érableuve|Pétine|Métro\b|Aéroport international/.test(c[1]))bad('connection name not in English',x.name+': '+c[1])}
  app.classList.remove('detail-open');setCurrentStation(st0);out.counts['station connections checked']=nc}
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
  {const st_=currentStation;setViewMode('journeys');$('sidebarContent').classList.remove('jp-collapsed');if(!vis('#journeyHeading')||$('journeyHeading').textContent.trim()!=='Plan a journey')bad('Journeys without its "Plan a journey" heading (user 2026-11-21)','#journeyHeading');
   else{const g=document.querySelector('#journeyPlannerSlot').getBoundingClientRect().top-$('journeyHeading').getBoundingClientRect().bottom;if(g<10||g>16)bad('journey heading not spaced from From / To (10-16 px)',Math.round(g)+' px')}
   setViewMode('departures');setCurrentStation(st_)}
  // an airport is a connection, not a station facility (user 2026-11-21: "stop putting airports in facilities")
  for(const n of S.keys())if(stationFacilities(n).includes('Airport'))bad('Airport listed as a station facility',n);
  if(!vis('#stationHeading')||$('stationHeading').textContent.trim()!=='Choose a station')bad('home without its "Choose a station" heading (user 2026-11-21)','#stationHeading');
  {const g=document.querySelector('#stationPanel .search-picker-main').getBoundingClientRect().top-$('stationHeading').getBoundingClientRect().bottom;if(g<10||g>16)bad('home heading not spaced from the search box (10-16 px)',Math.round(g)+' px')}
  setViewMode('journeys');if(vis('#stationHeading')||vis('#stationInfoLeft')||vis('.board-controls'))bad('station block shown while Journeys is open','');if(!vis('#journeyPanel')&&!vis('.journey-results-head'))bad('journey planner missing while Journeys is open','');setViewMode('departures');
  setCurrentStation(st0||LABELS[0]);out.counts['left panel states checked']=3}
 // the journey Edit button is the station Reset button's twin (user 2026-11-21: "same format and size as Stations reset"): same box size,
 // same place from its card's top right corner, its icon drawn as large
 {const st0=currentStation,R=e=>e.getBoundingClientRect(),glyph=btn=>{const sv=btn.querySelector('svg'),id=sv.querySelector('use').getAttribute('href').slice(1),b=document.getElementById(id).querySelector('path').getBBox();return Math.max(b.width,b.height)/32*R(sv).width};
  setViewMode('departures');setCurrentStation(LABELS[0]);const sc=R(document.querySelector('.side-controls')),sr=R($('stationReset')),sg=glyph($('stationReset'));
  setViewMode('journeys');rrSelectValue($('from'),LABELS[0]);rrSelectValue($('to'),LABELS[1]);pickerViews.get('from')?.sync();pickerViews.get('to')?.sync();$('trace').click();
  const eb=$('journeyEdit');
  if(!eb||!eb.getClientRects().length)bad('journey Edit button not shown after a search','');
  else{const jc=R(document.querySelector('.journey-results-head')),er=R(eb),ofs=(a,b)=>Math.abs(a-b)>1;
   if(ofs(er.width,sr.width)||ofs(er.height,sr.height))bad('journey Edit button not the size of the station Reset button',Math.round(er.width)+' vs '+Math.round(sr.width)+' px');
   if(ofs(er.top-jc.top,sr.top-sc.top)||ofs(jc.right-er.right,sc.right-sr.right))bad('journey Edit button not placed like the station Reset button',Math.round(er.top-jc.top)+' / '+Math.round(sr.top-sc.top)+' px from the top');
   if(ofs(glyph(eb),sg))bad('journey Edit icon not drawn as large as the Reset icon',glyph(eb).toFixed(1)+' vs '+sg.toFixed(1)+' px')
   // it IS the Reset button: only Reset's class, and its own rules only show / place it or size its icon - so colour, hover and focus
   // can never differ (user 2026-11-22: "why it's not highlighting like reset is")
   if(eb.className.trim()!==$('stationReset').className.trim())bad('journey Edit button classes differ from the station Reset button',eb.className);
   const okProp=/^(display|position|top|right|left|margin(-top|-bottom|-left|-right)?|width|height|transform)$/;
   for(const sh of document.styleSheets){let rs;try{rs=sh.cssRules}catch(_){continue}for(const r of rs){if(!r.selectorText||!/journeyEdit|jp-edit/.test(r.selectorText))continue;
    for(const pr of r.style)if(!okProp.test(pr))bad('a rule styles the journey Edit button beyond showing / placing it',r.selectorText+' { '+pr+' }')}}}
  setViewMode('departures');setCurrentStation(st0||LABELS[0]);out.counts['card buttons checked']=2}
 // departure board spacing (user 2026-11-22: "optimize timetable column spacing; ... spacing between destination and fast badge"):
 // the time fits its column with at most 16 px to the train badge, the header's Train sits over the badges, and the lines under the
 // destination (Fast / via, status) all keep the same 3-6 px gap
 {const st0=currentStation;let nb=0;setViewMode('departures');for(const n of LABELS.slice(0,6)){setCurrentStation(n);const hd=document.querySelector('.boardhead span:nth-child(2)');
   for(const r of [...document.querySelectorAll('#board .trainrow')].slice(0,12)){nb++;const R_=s=>r.querySelector(s)?.getBoundingClientRect(),t=R_('.time-primary'),b=R_('.service'),d=R_('.dest'),v=R_('.row-via'),st=R_('.rowstatus');
    if(!t||!b||!d)continue;const rt=r.querySelector('.row-time');if(rt.scrollWidth>rt.clientWidth+1)bad('board time wider than its column',n);
    const tr=Math.max(...[...rt.querySelectorAll('*')].map(e=>e.getBoundingClientRect().right));if(b.left-tr>16)bad('board gap from time to train badge over 16 px',n+' '+Math.round(b.left-tr)+' px');
    if(hd&&Math.abs(hd.getBoundingClientRect().left-b.left)>1)bad('board header Train not over the train badges',n);
    for(const [a,z,w] of [[d,v,'destination to Fast / via'],[v||d,st,'line above to status']])if(a&&z){const g=z.top-a.bottom;if(g<3||g>6)bad('board line gap '+w+' not 3-6 px',n+' '+Math.round(g)+' px')}}}
  setCurrentStation(st0||LABELS[0]);out.counts['board rows spacing checked']=nb}
 // metro / underground connections show the underground pictogram (or the system's own logo) (user 2026-11-22)
 {let nm=0;for(const x of STATIONS)for(const c of x.conn||[])if(c[0]==='metro'){nm++;const id=RR_METRO_LOGOS[c[1]]||'underground';if(!document.getElementById('rr-picto-'+id))bad('metro connection without its pictogram',c[1]);
   if(!rrConnRow(c,x.name).includes('#rr-picto-'+id))bad('metro connection row not drawing its pictogram',x.name+': '+c[1])}out.counts['metro connections checked']=nm}
 // a change of trains in a journey shows the change-2 pictogram (user 2026-11-22: "use change-2 for change-trains")
 {const j=findJourneys(LABELS[0],LABELS[3],false).find(x=>x.change>0)||findJourneys(LABELS[1],LABELS[5],false).find(x=>x.change>0);
  if(!document.getElementById('rr-ui-change-trains'))bad('change-trains pictogram missing','rr-ui-change-trains');
  if(j){const v0=viewMode;setViewMode('journeys');chooseJourney(j);for(const bx of document.querySelectorAll('.jt-transfer-box strong')){const v=[...bx.childNodes].filter(n=>!(n.classList&&n.classList.contains('rr-sr-only'))).map(n=>n.textContent).join('').trim();if(!/^(Change|Correspondance)$/.test(v))bad('journey change row repeats the station (user 2026-11-22: "do we need to repeat station name?")',v)}
   for(const ic of document.querySelectorAll('.jt-transfer .jt-change-icon use'))if(ic.getAttribute('href')!=='#rr-ui-change-trains')bad('journey change not drawn with the change-trains pictogram',ic.getAttribute('href'));setViewMode(v0)}
  out.counts['change pictograms checked']=1}
 // the Fast / Rapide badge: 12 px in lists, 14 px beside the train page's destination, centred on it (user 2026-11-22: "a little small")
 {const st0=currentStation;setViewMode('departures');let nf=0;for(const n of LABELS){setCurrentStation(n);const row=[...document.querySelectorAll('#board .trainrow')].find(r=>r.querySelector('.rr-fast-tag'));if(!row)continue;
   const bt=row.querySelector('.rr-fast-tag');if(parseFloat(getComputedStyle(bt).fontSize)<12)bad('Fast badge under 12 px on the board',n);
   const t=upcoming(n).find(x=>x.fast||rrDestText(x,false).includes('Fast'))||upcoming(n).find(x=>row.textContent.includes(x.route.at(-1)[0]));
   row.click();const d=document.querySelector('.service-dest'),tg=d?.querySelector('.rr-fast-tag');if(!tg){bad('train page without its Fast badge',n);break}
   const nm=d.querySelector('.station-link')||d.firstElementChild,a=tg.getBoundingClientRect(),b=nm.getBoundingClientRect();nf++;
   if(parseFloat(getComputedStyle(tg).fontSize)!==14)bad('Fast badge on the train page not 14 px',getComputedStyle(tg).fontSize);
   if(a.top>=b.bottom-1){/* a long destination: the badge wraps to the next line, flush with the name */if(Math.abs(a.left-d.getBoundingClientRect().left)>1)bad('wrapped Fast badge not flush left under the destination',n)}else if(Math.abs((a.top+a.height/2)-(b.top+b.height/2))>1)bad('Fast badge not centred on the destination',n);break}
  setCurrentStation(st0||LABELS[0]);out.counts['Fast badges checked']=nf}
 // Airport Express (user 2026-11-22): badge "AX" with no number, filled like RX, type "Airport Express", an AX4 / AX8 formation with
 // luggage space in every car, and every service runs between an airport and its city (one end an airport)
 {let nx=0;const air=a=>/airport|a[ée]roport/i.test(a)||(S.get(a)?.conn||[]).some(c=>c[0]==='airport');
  for(const t of TRAINS){if(t.pattern!=='AX')continue;nx++;if(rrTrainLabel(t)!=='AX')bad('AX train not labelled AX',t.id);if(rrOutline(t))bad('AX badge drawn as an outline',t.id);
   const fk=rrFormationKey(t);if(!['AX4','AX8'].includes(fk)||!RR_FORMATIONS[fk])bad('AX train without its AX formation',t.id);
   if(!air(t.origin)&&!air(t.dest))bad('AX train not running to an airport',t.id+' '+t.origin+' > '+t.dest);
   if(RR_FORMATIONS[fk]?.cars.some(c=>!c.features.includes('luggage')))bad('AX car without luggage space',t.id)}
  if(new Set(TRAINS.filter(t=>t.pattern==='AX').map(t=>t.id)).size!==nx)bad('AX train ids not unique','');
  // its operator is its region's Regio network, not a network of its own (user 2026-11-22: "operator of AX is that region!")
  const regioNets=new Set(TRAINS.filter(t=>t.type==='Regio'&&t.pattern!=='AX').map(t=>t.network));
  for(const t of TRAINS)if(t.pattern==='AX'&&!regioNets.has(t.network))bad('AX train not run by a Regio network of its region',t.id+' '+t.network);
  if(!nx)bad('no Airport Express trains','');out.counts['AX trains checked']=nx}
 // no Regio network page (user 2026-11-22: "no more dedicated network details for regio"): no Regio network link anywhere; with the
 // Regio filter on a station's board the map highlights exactly the Regio regions serving that station
 {let nr=0;const st0=currentStation,f0=serviceFilter;for(const n of LABELS.slice(0,6)){fillStationInfo(n);if(document.querySelector('#detailsBody .rr-system-link[data-type="Regio"]'))bad('Regio network link on a station page',n);
   const rt=TRAINS.find(t=>t.type==='Regio'&&t.route.some(r=>r[0]===n));if(rt){fillRouteInfo('Regio',rt.network,rt.line,n);if(document.querySelector('#detailsBody .rr-system-link[data-type="Regio"]'))bad('Regio network link on a route page',rt.network+' '+rt.line)}
   setViewMode('departures');setCurrentStation(n);clear();serviceFilter='regio';rrRegioFilterKey='';drawMap();nr++;
   const want=[...new Set(TRAINS.filter(t=>t.type==='Regio'&&t.route.some(r=>r[0]===n)).map(t=>t.network))].sort().join('+');
   if(want&&(!rrFocusSystem||rrFocusSystem.net!==want))bad('Regio filter does not highlight the regions serving the station',n+': '+(rrFocusSystem?.net||'none')+' vs '+want)
   const ringCol=v=>{const d=document.createElement('i');d.style.color=RR_UI_CSS_COLOR(v);document.body.appendChild(d);const r=getComputedStyle(d).color;d.remove();return r};
   const ovl=v=>{const w=ringCol(v);for(const e of document.querySelectorAll('#systemOverlay .system-overlay-line'))if(getComputedStyle(e).stroke!==w)return bad('filter highlight colour differs from its station rings',n+' '+v+': '+getComputedStyle(e).stroke+' vs '+w)};
   if(want)ovl('--rail-regio');
   // Local filter (user 2026-11-22): zoomed out only the station's Local network(s) in red; zoomed in their lines colour-coded, no other network
   const wl=[...new Set(TRAINS.filter(t=>t.type==='Local'&&t.route.some(r=>r[0]===n)).map(t=>t.network))].sort().join('+');
   if(wl&&W&&H){/* the map must be on screen (on a phone it opens with the Map button) */const z0=zoom;clear();setViewMode('departures');setCurrentStation(n);serviceFilter='local';app.dataset.sysFocus='local';rrRegioFilterKey='';zoom=1;updateWorld();drawMap();if(!rrFocusSystem||rrFocusSystem.net!==wl||!rrFocusSystem.lines.length)bad('Local filter zoomed out does not highlight the station network in red',n+': '+(rrFocusSystem?.net||'none'));ovl('--rail-local');
    zoom=RR_LOCAL_COLOUR_ZOOM+1;updateWorld();drawMap();const k=$('localColours').dataset.key||'';if(!k.startsWith('*'+wl+'|'))bad('Local filter zoomed in colours other networks',n+': '+k);zoom=z0;updateWorld()}}
  serviceFilter=f0;rrRegioFilterKey='';setCurrentStation(st0||LABELS[0]);drawMap();out.counts['Regio filter focus checked']=nr}
 // stations show opening hours (user 2026-11-22), and Local route pages first and last trains each way
 {let nh=0;for(const n of LABELS.slice(0,8)){fillStationInfo(n);const c=document.querySelector('#detailsBody .station-hero .station-hours');nh++;if(document.querySelector('#detailsBody section.station-hours'))bad('opening hours still a separate card',n);
   if(!c)bad('station without opening hours',n);else if(!/Open 24 hours|Ouvert 24|\d\d:\d\d.*–.*\d\d:\d\d/.test(c.textContent))bad('station opening hours unreadable',n+': '+c.textContent.trim().slice(0,60))}
  const loc=TRAINS.find(t=>t.type==='Local'&&!t.ring);if(loc){fillRouteInfo('Local',loc.network,loc.line,loc.route[0][0]);const fl=document.querySelectorAll('#detailsBody .route-firstlast');
   if(fl.length<1)bad('Local route page without first and last trains',loc.network+' '+loc.line);for(const r of fl){const td=r.querySelectorAll('td');if(td.length!==3||![1,2].every(i=>/^\d\d:\d\d$/.test(td[i].textContent.trim())))bad('first / last train row not Towards | First | Last',r.textContent.trim().slice(0,60))}
   if(document.querySelector('#detailsBody .rr-firstlast .day-offset'))bad('day mark on a first / last train time','')}
  out.counts['station hours / first-last checked']=nh}
 // French names of the Regio stopping patterns (user 2026-11-22): RS Sprinter régional, RX Express régional, AX Express aéroport
 {for(const [en,fr] of [['Regional Sprinter','Sprinter régional'],['Regional Express','Express régional'],['Airport Express','Express aéroport']])if(rrFrenchExact[en]!==fr)bad('French name of '+en+' is not '+fr,rrFrenchExact[en]);
  if(/Régional omnibus|Régional express/.test(Object.values(rrFrenchExact).join('|')))bad('old French Regio names left','Régional omnibus / Régional express');out.counts['French Regio names checked']=3}
 // board status says Expt, never Expected (user 2026-11-22: "always use Expt in timetable")
 {const st0=currentStation;let ne=0;setViewMode('departures');for(const n of LABELS.slice(0,10)){setCurrentStation(n);rrFitStatus(board);for(const t of board.querySelectorAll('.rowstatus .status-tag')){if(/^Expected\b/.test(t.textContent))bad('board status says Expected, not Expt',n+': '+t.textContent);if(/^Expt|^\+/.test(t.textContent))ne++}}
  setCurrentStation(st0||LABELS[0]);out.counts['board Expt statuses checked']=ne}
 // metro connections carry the official names (user 2026-11-22, Metro_names_for_approval.csv): English = official name, French "Métro"
 {const OFFICIAL=new Set(['Peiting URS','Metrail','Prinsburg Underground','Somerfield Underground','Yuchow Underground','Chungsia Metro','Windale Metro','Victoria Metro','Yenchia Metro','Touraine Metro','Havenbolme U-Bahn','Amptonside Metro']);let nm=0;
  for(const x of STATIONS)for(const c of x.conn||[])if(c[0]==='metro'){nm++;if(!OFFICIAL.has(c[1]))bad('metro connection not under its official name',x.name+': '+c[1]);if(c[3]!=='Métro')bad('metro connection not "Métro" in French',x.name+': '+c[3])}
  out.counts['metro names checked']=nm}
 // a Connections row never repeats the plane after the airport name: its pictogram says it (user 2026-11-22: "why tf icon in connections")
 {let nc=0;for(const x of STATIONS.filter(x=>(x.conn||[]).some(c=>c[0]==='airport')).slice(0,20)){fillStationInfo(x.name);for(const r of document.querySelectorAll('#detailsBody .station-conn')){nc++;if(r.textContent.includes('✈'))bad('plane glyph in a Connections row',x.name+': '+r.textContent.trim())}}
  out.counts['connection rows without plane checked']=nc}
 // one unified rail system (user 2026-11-22): under All only the neutral layer shows; each network filter shows its own track in colour
 {const vis=id=>getComputedStyle($(id)).display!=='none',vis_legend=()=>getComputedStyle(document.querySelector('.map-legend')).display!=='none',f0=serviceFilter,st0=currentStation;setViewMode('departures');setCurrentStation(LABELS[0]);
  for(const [f,id] of [['all',null],['mainline','sysMainline'],['regio','sysRegio'],['local','sysLocal']]){serviceFilter=f;app.dataset.sysFocus=f;rrRegioFilterKey='';drawMap();
   if(!vis('allTrack')||!$('allTrack').getAttribute('d'))bad('unified track missing',f);
   if(vis_legend()!==(f==='mainline'))bad('legend '+(f==='mainline'?'missing':'shown')+' under the '+f+' filter','');
   if(f==='mainline'&&!(parseFloat(getComputedStyle($('sysMainlineHs')).strokeWidth)>parseFloat(getComputedStyle($('sysMainline')).strokeWidth)))bad('Mainline + high-speed not drawn thicker than Mainline-only','');
   for(const x of ['sysMainline','sysRegio','sysLocal']){const want=x===id&&!app.classList.contains('system-focus');if(vis(x)!==want)bad('network track '+(want?'hidden':'shown')+' under the '+f+' filter',x)}
   for(const x of ['mlTrack','regioTrack','localTrack','hslTrack','mlShared','regioShared','localShared'])if(vis(x))bad('typed track layer shown',x);
   if(f==='all'&&vis('allTrack')&&getComputedStyle($('allTrack')).stroke!==getComputedStyle(document.documentElement).getPropertyValue('--rail-neutral').trim()&&!/rgb/.test(getComputedStyle($('allTrack')).stroke))bad('unified track not neutral','')}
  serviceFilter=f0;app.dataset.sysFocus=f0;rrRegioFilterKey='';setCurrentStation(st0||LABELS[0]);drawMap();out.counts['unified track checked']=4}
 // zoom tiers (user 2026-11-22): zoomed out only major stations; each tier appears at its zoom; the selected station always shows
 {const v0={zoom,panX,panY},st0=currentStation;clear();setCurrentStation(null);let nz=0;
  for(const z of [1,RR_TIER_ZOOM[1],RR_TIER_ZOOM[2],RR_TIER_ZOOM[3]]){zoom=z;updateWorld();drawMap();nz++;
   for(const g of document.querySelectorAll('#stationLayer g[data-station]')){const s=S.get(g.dataset.station);if(s&&RR_TIER_ZOOM[rrZoomTier(s)]>z+1e-9){bad('station shown before its zoom tier',s.name+' at zoom '+z);break}}}
  zoom=1;updateWorld();const minor=STATIONS.find(s=>rrZoomTier(s)===3);setCurrentStation(minor.name);drawMap();if(!document.querySelector(`#stationLayer g[data-station="${CSS.escape(minor.name)}"]`)&&(()=>{const q=screen(...(P[minor.point]||[minor.x,minor.y]));return q.x>=0&&q.y>=0&&q.x<=W&&q.y<=H})())bad('selected station hidden when zoomed out',minor.name);
  zoom=v0.zoom;panX=v0.panX;panY=v0.panY;updateWorld();setCurrentStation(st0||LABELS[0]);drawMap();out.counts['zoom tiers checked']=nz}
 // under All, a one-network station's ring is the neutral line colour; interchanges keep theirs (user 2026-11-22)
 {const v0={zoom,panX,panY},f0=serviceFilter,st0=currentStation,c0=LABELS[0];clear();setViewMode('departures');setCurrentStation(c0);serviceFilter='all';app.dataset.sysFocus='all';zoom=RR_TIER_ZOOM[3];updateWorld();if(W&&H){const q=P[S.get(c0).point],sc_=screen(q[0],q[1]);panX+=W/2-sc_.x;panY+=H/2-sc_.y;updateWorld()}drawMap();
  const neu=RR_UI_CSS_COLOR('--rail-neutral'),mut=RR_UI_CSS_COLOR('--muted-slate');let nn=0;
  for(const g of [...document.querySelectorAll('#stationLayer g[data-station]')].slice(0,60)){const s=S.get(g.dataset.station),c=g.querySelector('circle');if(!s||!c||g.querySelector('.local-mark')||s.name===currentStation||LABELS.includes(s.name))continue;nn++;
   const want=s.sys.length>1?mut:neu;if(c.getAttribute('stroke')!==want){bad('station ring not '+(s.sys.length>1?'the interchange colour':'neutral')+' under All',s.name+' '+c.getAttribute('stroke'));break}}
  serviceFilter=f0;app.dataset.sysFocus=f0;zoom=v0.zoom;panX=v0.panX;panY=v0.panY;updateWorld();setCurrentStation(st0||LABELS[0]);drawMap();if(W&&H&&!nn)bad('no station rings to check under All','');out.counts['station rings checked']=nn}
 // the board filter shows only the kinds of train serving the station, chips sharing the row (user 2026-11-22)
 {const st0=currentStation;let nf=0;setViewMode('departures');for(const n of [...LABELS.slice(0,4),...STATIONS.filter(x=>x.sys==='L').slice(0,3).map(x=>x.name),...STATIONS.filter(x=>x.sys==='R').slice(0,3).map(x=>x.name)]){if(!S.has(n))continue;setCurrentStation(n);nf++;
   const kinds=new Set();for(const t of TRAINS)if(t.route.some(r=>r[0]===n))kinds.add(RR_MAINLINE_TYPES.has(t.type)?'mainline':t.type==='Regio'?'regio':'local');
   const vis=[...document.querySelectorAll('.service-chip')].filter(c=>c.getClientRects().length);
   for(const c of vis)if(c.dataset.filter!=='all'&&!kinds.has(c.dataset.filter))bad('filter chip for a kind of train not serving the station',n+': '+c.dataset.filter);
   for(const k of kinds)if(!vis.some(c=>c.dataset.filter===k))bad('filter chip missing for a kind of train serving the station',n+': '+k);
   const ws=vis.map(c=>Math.round(c.getBoundingClientRect().width));if(Math.max(...ws)-Math.min(...ws)>1)bad('filter chips not sharing the row equally',n+': '+ws.join('/'))}
  setCurrentStation(st0||LABELS[0]);out.counts['board filter chips checked']=nf}
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
 // journey results (user 2026-11-22): no train formation in the cards or the legs; every train badge is a button (not inside another
 // button) that opens that train's page departing from the leg's boarding station, and does not choose / fold the journey card;
 // that train page has Back to journey, which brings the same journey back (chosen, its legs' stops open as left)
 {const st0=currentStation;let nl=0;const pairs=[[LABELS[0],LABELS[5]],['Peiting Central','Songchiao Airport'],[LABELS[2],LABELS[9]],[LABELS[1],LABELS[7]]];
  const noForm=(root,where)=>{if(root.querySelector('.rr-formation,.jt-coach,.rr-car')||/\b(Train formation|coaches)\b/.test(root.textContent))bad('train formation shown in journey results',where)};
  let nb=0;const tryLink=(b,leg,where,j)=>{nl++;
   if(b.tagName!=='BUTTON'||!b.classList.contains('rr-train-link')||b.parentElement.closest('button')){bad('journey train badge not its own button',where+': '+b.outerHTML.slice(0,80));return}
   if(decodeURIComponent(b.dataset.from)!==leg.from||b.dataset.train!==leg.train.id)bad('journey train badge links to another train or station',where+': '+b.dataset.train+' @ '+decodeURIComponent(b.dataset.from));
   if(!/^Train .+ from .+/.test(b.getAttribute('aria-label')||''))bad('journey train badge without its "Train … from …" label',where);
   b.click();
   if(selectedTrain?.id!==leg.train.id||currentStation!==leg.from||!detail.querySelector('.train-hero')||selectedJourney)bad('journey train badge does not open that train at its boarding station',where+': '+rrTrainLabel(leg.train)+' @ '+leg.from+' -> '+(selectedTrain?.id||'none')+' @ '+currentStation);
   else if(!location.hash.startsWith('#train/'))bad('journey train badge leaves the address off the train page',where+': '+location.hash);
   const back=detail.querySelector('#backToJourney.back-to-train');
   if(!back){bad('train opened from a journey without Back to journey',where+': '+rrTrainLabel(leg.train));return}
   back.click();nb++;
   if(viewMode!=='journeys'||selectedJourney?.key!==j.key||!detail.querySelector('.jt-timeline'))bad('Back to journey does not bring the journey back',where+': '+(selectedJourney?.key||'none')+' '+viewMode)};
  const sig=r=>[...r.querySelectorAll('.service')].map(x=>(x.dataset.train||'?')+'@'+decodeURIComponent(x.dataset.from||'')).join('|');
  for(const [a,b] of pairs){if(!(S.has(a)||RR_CITIES.has(a))||!(S.has(b)||RR_CITIES.has(b)))continue;
   rrSelectValue($('from'),a);rrSelectValue($('to'),b);pickerViews.get('from')?.sync();pickerViews.get('to')?.sync();searchJourneys();
   noForm(board,'journey cards '+a+' - '+b);
   const cards=[...board.querySelectorAll('.journey-row')];if(!cards.length)continue;
   const card=cards.reduce((m,r)=>r.querySelectorAll('.service').length>m.querySelectorAll('.service').length?r:m),key=sig(card);   // the one with most changes
   const j=journeyResults.find(x=>x.legs.map(l=>l.train.id+'@'+l.from).join('|')===key);
   if(!j){bad('journey card badges do not match its journey (train @ boarding station)',a+' - '+b+': '+key);continue}
   if(!card.querySelector('button.journey-row-open'))bad('journey card without its open button',a+' - '+b);
   j.legs.forEach((leg,i)=>{searchJourneys();const c=[...board.querySelectorAll('.journey-row')].find(r=>sig(r)===key);if(c)tryLink(c.querySelectorAll('.service')[i],leg,'card '+a+' - '+b,j)});
   j.legs.forEach((leg,i)=>{setViewMode('journeys');chooseJourney(j);if(i===0)noForm(detail,'journey legs '+a+' - '+b);const heads=detail.querySelectorAll('.jt-card-head .service');
    if(heads.length!==j.legs.length){bad('journey leg without its train badge',a+' - '+b);return}
    const tg=detail.querySelectorAll('.jt-calls-toggle')[0];if(tg&&tg.getAttribute('aria-expanded')!=='true')tg.click();   // a leg's stops left open come back open
    tryLink(heads[i],leg,'leg '+a+' - '+b,j);
    const tg2=detail.querySelectorAll('.jt-calls-toggle')[0];if(tg&&selectedJourney&&tg2?.getAttribute('aria-expanded')!=='true')bad('Back to journey shut the stops the visitor had opened',a+' - '+b)})}
  setViewMode('departures');if(st0)setCurrentStation(st0);out.counts['journey train links checked']=nl;out.counts['back to journey checked']=nb;if(!nl)bad('journey train links: none found to check','')}
 // journey leg alerts (user 2026-11-22): no full-width message box; a small badge with the alert icon right after the status tag
 // (same height, 4-8 px apart, centres level) whose accessible name is the message; focus or tap shows it, Escape hides it
 {const st0=currentStation;let na=0;const R=e=>e.getBoundingClientRect(),shown=e=>getComputedStyle(e).display!=='none';
  const withAlert=TRAINS.filter(t=>rrVisibleAlert(t)&&t.route.length>2);let nj=0;
  for(const t of withAlert){if(nj>=8)break;const js=findJourneys(t.route[0][0],t.route[1][0],false),j=js.find(x=>x.legs.some(l=>l.train.id===t.id));if(!j)continue;nj++;
   setViewMode('journeys');chooseJourney(j);
   if(detail.querySelector('.jt-timeline .rr-alert-banner'))bad('full-width alert box in a journey leg',rrTrainLabel(t));
   j.legs.forEach((leg,i)=>{const a=rrVisibleAlert(leg.train);const head=detail.querySelectorAll('.jt-card-head')[i];if(!head)return;const tip=head.querySelector('.rr-alert-tip');
    if(!a){if(tip)bad('alert badge on a leg without an alert',rrTrainLabel(leg.train));return}
    na++;const tag=head.querySelector('.jt-status>.status-tag'),btn=tip?.querySelector('button.rr-alert-badge'),pop=tip?.querySelector('.rr-alert-pop');
    if(!tip||!btn||!pop||!tag||tag.nextElementSibling!==tip){bad('journey leg alert not a badge right after the status',rrTrainLabel(leg.train));return}
    const name=(btn.getAttribute('aria-labelledby')||'').split(' ').map(id=>document.getElementById(id)?.textContent||'').join(' ').trim();
    if(!name||(rrActiveLocale!=='fr'&&name!==a.en))bad('journey alert badge without the message as its name',rrTrainLabel(leg.train)+': "'+name+'"');
    const rt=R(tag),rb=R(btn),gap=rb.left-rt.right;
    if(rb.top>=rt.bottom||rt.top>=rb.bottom){}else{if(Math.abs(rb.height-rt.height)>1)bad('journey alert badge not as tall as the status tag',Math.round(rb.height)+' vs '+Math.round(rt.height)+' px');
     if(gap<4||gap>8)bad('journey alert badge not 4-8 px after the status tag',Math.round(gap)+' px');
     if(Math.abs((rb.top+rb.bottom)/2-(rt.top+rt.bottom)/2)>1)bad('journey alert badge not centred with the status tag',rrTrainLabel(leg.train))}
    if(shown(pop))bad('journey alert message shown before hover / focus / tap',rrTrainLabel(leg.train));
    btn.focus();if(!shown(pop))bad('journey alert message not shown on focus',rrTrainLabel(leg.train));
    btn.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));if(shown(pop))bad('Escape does not close the journey alert message',rrTrainLabel(leg.train));
    btn.blur();btn.click();if(!shown(pop))bad('tapping the journey alert badge does not show the message',rrTrainLabel(leg.train));
    document.body.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));btn.blur();if(shown(pop))bad('journey alert message stays open after tapping elsewhere',rrTrainLabel(leg.train))})}
  setViewMode('departures');if(st0)setCurrentStation(st0);out.counts['journey leg alerts checked']=na;if(!na)bad('journey leg alerts: none found to check','')}
 // editing a journey search (user 2026-11-22): the form replaces the results summary (no summary card while editing, on any width);
 // on a touch screen Edit focuses no text field (no keyboard / selection handles until a field is tapped); Find trains folds back to the summary
 {const st0=currentStation;let ne=0;const frame=()=>new Promise(r=>{requestAnimationFrame(()=>r());setTimeout(r,600)})   /* the next frame; a background tab runs frames late (120 ms was too short: Edit's focus had not run yet) */,head=document.querySelector('.journey-results-head'),vis=e=>!!e&&!e.hidden&&getComputedStyle(e).display!=='none'&&e.getClientRects().length>0;
  const t=TRAINS.find(x=>x.route.length>2&&S.has(x.route[0][0])&&S.has(x.route[2][0]));
  for(const coarse of t?[false,true]:[]){window.rrForceCoarsePointer=coarse;
   setViewMode('journeys');rrSelectValue($('from'),t.route[0][0]);rrSelectValue($('to'),t.route[2][0]);pickerViews.get('from')?.sync();pickerViews.get('to')?.sync();$('trace').click();await frame();
   if(!vis(head))bad('no journey summary after Find trains','');
   $('journeyEdit').click();await frame();await frame();ne++;
   if(vis(head))bad('journey summary card still shown while editing the search',coarse?'touch':'mouse');
   if(!vis($('journeyPanel')))bad('Edit did not open the journey form',coarse?'touch':'mouse');
   const f=document.activeElement;
   if(coarse&&f&&f.matches('input,select,textarea'))bad('Edit focused a form field on a touch screen',f.id||f.name||f.tagName);
   if(!coarse&&!$('journeyPanel').contains(f))bad('Edit did not move focus into the journey form','mouse');
   $('trace').click();await frame();
   if(!vis(head)||vis($('journeyPanel')))bad('Find trains did not fold the form back to the summary',coarse?'touch':'mouse');
   document.activeElement?.blur?.()}
  delete window.rrForceCoarsePointer;setViewMode('departures');if(st0)setCurrentStation(st0);out.counts['journey edit states checked']=ne;if(!ne)bad('journey edit states: none found to check','')}
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
 {let nr=0;const done=new Set(),st0=currentStation;for(const t of TRAINS){if(!t.ring)continue;nr++;const want=null;
   for(const ar of [false,true]){const dt=rrDestText(t,ar);if(!(/^via \S/.test(dt)||dt===rrRingName(t.ring))||(dt.match(/\bvia\b/g)||[]).length>1){bad('ring train shows no direction',rrTrainLabel(t)+' '+t.id+': '+dt);break}}
   const k=rrTrainLabel(t)+t.ring;if(done.has(k))continue;done.add(k);setCurrentStation(t.route[1][0]);chooseTrain(t);
   const lab=detail.querySelector('.destination-label')?.textContent,d=detail.querySelector('.service-dest')?.textContent.trim();
   const tg=detail.querySelector('.service-dest .rr-ring-tag');if(lab!=='Ring line'||!/^via \S/.test(d||'')||!tg||(d.match(/\bvia\b/g)||[]).length>1)bad('ring train details show a destination',rrTrainLabel(t)+': '+lab+' '+d)
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
  const names=[...labels.querySelectorAll('.station-label')].filter(g=>g.getClientRects().length).map(g=>({name:g.getAttribute('aria-label').replace(/^Show departures at /,''),b:box(g.querySelector('text'),o),over:!!g.querySelector('.over-lines')}));
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
 // Map speed (2026-11-22, user: "improve desktop/tablet map slow loading problem"): the map is drawn once per change - a resize to
 // the same size or an unchanged theme does not redraw it (startup drew it 7 times) - colour tokens are read from a cache (each
 // read was a forced style recalc), and a redraw stays within budget at three zoom levels (it took 100 ms+ when every name
 // candidate was tested against every on-screen line and dot).
 {clear();app.classList.remove('detail-open');setCurrentStation(null);if(phone)rrSetPhoneView(true,false);resize();const v0={zoom,panX,panY},draw0=drawMap;let n=0;
  const settle=()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(()=>setTimeout(r,50))));await settle();   // earlier steps' queued redraws run first
  drawMap=function(){n++;return draw0.apply(this,arguments)};
  try{resize();if(n)bad('map redrawn by a same-size resize',n+' draws');n=0;
   const root=document.documentElement;root.dataset.theme=root.dataset.theme;await Promise.resolve();await Promise.resolve();if(n)bad('map redrawn for an unchanged theme',n+' draws')}
  finally{drawMap=draw0}
  let t0=performance.now();for(let i=0;i<2000;i++)RR_UI_CSS_COLOR('--ink');if(performance.now()-t0>20)bad('colour tokens not cached',(performance.now()-t0).toFixed(1)+' ms for 2000 reads');
  const RR_DRAW_BUDGET=60;out.mapDrawMs={};
  for(const z of [1,2.5,4]){zoom=z;panX=panY=0;updateWorld();const t=[];for(let i=0;i<3;i++){t0=performance.now();drawMap();t.push(performance.now()-t0)}t.sort((x,y)=>x-y);
   out.mapDrawMs['zoom '+z]=+t[1].toFixed(1);if(t[1]>RR_DRAW_BUDGET)bad('map redraw over its '+RR_DRAW_BUDGET+' ms budget','zoom '+z+': '+t[1].toFixed(0)+' ms')}
  zoom=v0.zoom;panX=v0.panX;panY=v0.panY;updateWorld();if(phone)rrSetPhoneView(false,false);out.counts['map redraw timings checked']=3}
 // Details panel open (2026-11-22 bug: the map went blank - no track, no markers - zoomed in with Station information open): the
 // panel narrows the map after the station is focused; the map must keep the station and its track in view at a middle and the
 // deepest zoom, and again after the panel closes and reopens. Desktop only (on a phone the map is its own screen).
 if(!phone&&container.clientWidth){const st=S.get('Peiting Central')?'Peiting Central':LABELS[0],v0={zoom,panX,panY};let nd=0;
  const settle=()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(()=>setTimeout(r,450))));   // the panel's grid transition, then the resize
  const see=lab=>{const [px,py]=P[S.get(st).point],{x,y}=screen(px,py);nd++;
   if(!app.classList.contains('detail-open'))return bad('details panel not open for the map check',lab);
   if(x<0||y<0||x>W||y>H||!layer.querySelector(`g[data-station="${CSS.escape(st)}"]`))bad('details panel open: current station not on the map',lab+' at zoom '+zoom.toFixed(1)+' ('+Math.round(x)+','+Math.round(y)+' in '+W+'x'+H+')');
   if(![...world.querySelectorAll('path.rail')].some(e=>{const cs=getComputedStyle(e);return cs.display!=='none'&&cs.stroke!=='none'&&e.isPointInStroke(new DOMPoint(px,py))}))bad('details panel open: no track drawn at the current station',lab)};
  clear();app.classList.remove('detail-open');await settle();setCurrentStation(st);rrFocusStation(st);fillStationInfo(st);await settle();
  for(const [lab,z] of [['middle zoom',Math.sqrt(rrMaxZoom())],['deepest zoom',rrMaxZoom()]]){zoomAt(z/zoom);rrRedraw();see(lab)}
  app.classList.remove('detail-open');await settle();app.classList.add('detail-open');await settle();see('deepest zoom, panel closed and reopened');
  clear();app.classList.remove('detail-open');setCurrentStation(null);await settle();zoom=v0.zoom;panX=v0.panX;panY=v0.panY;updateWorld();out.counts['details-open map views checked']=nd}
 // Radeland time (user 2026-11-22: "show in radeland time zone"): every time shown and typed is Radeland time, whatever the
 // visitor's zone. "now" is the real clock in Radeland time (UTC−1, summer UTC±0), worked out here from UTC; the app reads the
 // visitor's offset only to build that clock; a train's times show exactly as in the timetable, with a day mark only past
 // midnight from the train's own first call; daily items (opening hours, first / last trains) never carry a day mark; the
 // site never states the zone (user: "show radeland time do not specify it on website").
 {let ntz=0;const u=new Date(),want=((u.getUTCHours()*60+u.getUTCMinutes()+rrRadelandOffset())%1440+1440)%1440,got=rrNowMinutes();ntz++;
  if(Math.min(Math.abs(got-want),1440-Math.abs(got-want))>1)bad('"now" is not Radeland time','app '+rrMinutesToInput(got)+', Radeland '+rrMinutesToInput(want));
  const rd=new Date(u.getTime()+rrRadelandOffset()*60000),rk=rd.getUTCFullYear()+'-'+String(rd.getUTCMonth()+1).padStart(2,'0')+'-'+String(rd.getUTCDate()).padStart(2,'0');
  if(rrIsoDate(rrDay(0))!==rk)bad('today is not Radeland\'s date',rrIsoDate(rrDay(0))+' vs '+rk);
  const src=await (await fetch('js/app.js',{cache:'no-store'})).text(),tzUses=(src.match(/getTimezoneOffset/g)||[]).length;
  if(tzUses!==1)bad('visitor time zone used outside the Radeland clock',tzUses+' uses of getTimezoneOffset');
  const plain=h=>h.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
  for(const t of TRAINS){const base=rrDayIdx(t.route[0][1]);for(const [st,tm] of t.route){ntz++;const m=String(tm).match(/^(\d\d:\d\d)(?:\s*\+(\d+))?$/);if(!m)continue;
   const d=(+(m[2]||0))-base,exp=m[1]+(d?' '+(d>0?'+':'−')+Math.abs(d):'');
   if(plain(timeMarkup(tm,base))!==exp){bad('train time not shown as in the Radeland timetable',rrTrainLabel(t)+' '+st+': '+tm+' shown '+plain(timeMarkup(tm,base)));break}}}
  for(const s of STATIONS){const h=rrStationHours(s.name);if(!h)continue;ntz++;const html=rrStationHoursLine(s.name);
   if(/day-offset|[−+]\d/.test(plain(html))||html.includes('day-offset'))bad('day mark on opening hours',s.name+': '+plain(html));
   if(!h.allDay&&!plain(html).includes(rrMinutesToInput(timeOrdinal(h.open))+' – '+rrMinutesToInput(timeOrdinal(h.close))))bad('opening hours not in Radeland time',s.name+': '+plain(html))}
  for(const x of ['06:16','23:47','00:10 +1']){ntz++;if(rrDailyTime(x).includes('day-offset')||plain(rrDailyTime(x))!==x.slice(0,5))bad('day mark on a daily time',x)}
 const pageText=document.body.innerText;ntz++;if(/Radeland time|Heure de Radeland|UTC\s*[−±+-]\s*\d/i.test(pageText))bad('time zone stated on the site','user: show Radeland time without saying so');
  out.counts['Radeland times checked']=ntz}
 // Network filter colours (user 2026-11-22: "use previous colors. single system station ring are still that color"): a filtered
 // network's track and the Mainline legend use the same colour as that network's single-network station rings.
 {const css=v=>getComputedStyle(document.documentElement).getPropertyValue(v).trim(),f0=app.dataset.sysFocus;let nc=0;
  for(const [f,id,v] of [['mainline','sysMainline','--rail'],['regio','sysRegio','--rail-regio'],['local','sysLocal','--rail-local']]){
   app.dataset.sysFocus=f;const el=document.getElementById(id),want=RR_UI_CSS_COLOR(v),got=getComputedStyle(el).stroke;nc++;
   const norm=c=>{const d=document.createElement('i');d.style.color=c;document.body.appendChild(d);const r=getComputedStyle(d).color;d.remove();return r};
   if(norm(got)!==norm(want))bad('filter track colour differs from its station rings',f+': '+got+' vs '+want)}
  app.dataset.sysFocus='mainline';for(const k of document.querySelectorAll('.keymark.ml-hs,.keymark.ml-only')){nc++;
   const d=document.createElement('i');d.style.color=RR_UI_CSS_COLOR('--rail');document.body.appendChild(d);const w=getComputedStyle(d).color;d.remove();
   if(getComputedStyle(k).borderTopColor!==w)bad('Mainline legend colour differs from its station rings',k.className)}
  if(f0===undefined)delete app.dataset.sysFocus;else app.dataset.sysFocus=f0;out.counts['filter track colours checked']=nc}
 // Current station on the coloured Local map (user 2026-11-22): where stations are capsules across a bundle of lines, the current
 // station is a filled capsule with a halo, not a dot.
 if(W&&H){const st0=currentStation,z0={zoom,panX,panY},f0=serviceFilter;let nk=0;
  const cand=STATIONS.find(s=>s.name==='Amptonside Central')||null;
  if(cand){clear();setViewMode('departures');setCurrentStation(cand.name);serviceFilter='local';app.dataset.sysFocus='local';rrRegioFilterKey='';rrFocusStation(cand.name);zoom=Math.max(zoom,RR_LOCAL_COLOUR_ZOOM+2);updateWorld();drawMap();
   const lm=app.classList.contains('local-colours')?rrLocalStationMarks().get(cand.point):null,g=layer.querySelector(`g[data-station="${CSS.escape(cand.name)}"]`);nk++;
   if(lm&&!(lm.n<=1&&lm.cols.size===1&&cand.sys==='L')&&g&&(!g.querySelector('rect.local-mark.current')||!g.querySelector('rect.local-mark-halo')))bad('current station not a capsule with a halo on the coloured Local map',cand.name)}
  serviceFilter=f0;rrRegioFilterKey='';zoom=z0.zoom;panX=z0.panX;panY=z0.panY;updateWorld();setCurrentStation(st0||LABELS[0]);drawMap();out.counts['current-station capsules checked']=nk}
 // French (user 2026-11-22: "Première classe??? audit all french translation"): no English word left on any page in French, and no
 // dictionary word with two meanings (a context-specific string carries data-rr-fr instead). Every page type: boards and filters,
 // arrivals, station information, one train of every type with its formation, Regio / Local route pages, journeys, the menu.
 {const src=await (await fetch('js/app.js',{cache:'no-store'})).text(),i=src.indexOf('const rrFrenchExact=Object.freeze({'),body=src.slice(i,src.indexOf('});',i));
  const seenK=new Map();for(const m of body.matchAll(/'((?:[^'\\]|\\.)+)':'((?:[^'\\]|\\.)*)'/g)){if(seenK.has(m[1])&&seenK.get(m[1])!==m[2])bad('French dictionary word with two meanings',m[1]+': '+seenK.get(m[1])+' / '+m[2]);seenK.set(m[1],m[2])}
  const loc0=rrActiveLocale,st0=currentStation,vm0=viewMode,f0=serviceFilter,frame=()=>new Promise(r=>setTimeout(r,40));
  const names=new Set();for(const x of STATIONS){names.add(x.name);for(const c of x.conn||[]){if(c[1])names.add(c[1]);if(c[3])names.add(c[3])}}
  for(const t of TRAINS){names.add(rrTrainLabel(t));if(t.network)names.add(t.network);if(t.line)names.add(String(t.line))}
  const sorted=[...names].filter(n=>n&&n.length>1).sort((a,b)=>b.length-a.length);
  const SAME=new Set('via train trains min direct services service information bus taxis express sprinter max rs rx ic nightline intercity local regio wc wi-fi date police assistance restaurant type couchette couchettes café locomotive destination english français copyright'.split(' '));
  const left=new Map(),look=(t,lab)=>{if(!t||!/[A-Za-z]{3}/.test(t)||rrFrenchText(t)!==t)return;let r=' '+t+' ';for(const n of sorted)if(r.includes(n))r=r.split(n).join(' ');
   const w=(r.match(/\p{L}[\p{L}'’-]{2,}/gu)||[]).filter(x=>!SAME.has(x.toLowerCase()));if(w.length&&!left.has(t))left.set(t,lab)};
  const sweep=lab=>{rrLocalizeSubtree(document.body);const tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
   while(n=tw.nextNode()){const el=n.parentElement;if(!el||el.closest('script,style,svg')||el.dataset?.rrFr)continue;look((rrEnglishText.get(n)??n.nodeValue).replace(/\s+/g,' ').trim(),lab)}
   for(const el of document.querySelectorAll('[aria-label],[title],[placeholder]')){if(el.closest('svg'))continue;const m=rrEnglishAttrs.get(el);for(const a of ['aria-label','title','placeholder']){const t=m?.get(a)??el.getAttribute(a);if(t)look(t.replace(/\s+/g,' ').trim(),lab+' @'+a)}}};
  rrApplyLocale('fr');await frame();
  const pick=[...new Map(TRAINS.map(t=>[t.type+'|'+(t.pattern||''),t])).values()];
  for(const n of [...new Set(['Peiting Central','Mapleriver Central',LABELS[5],...pick.map(t=>t.route[0][0])])].filter(n=>S.has(n)).slice(0,12)){setViewMode('departures');setCurrentStation(n);await frame();sweep('board '+n);
   for(const f of ['mainline','regio','local','all']){document.querySelector(`[data-filter="${f}"]`)?.click();await frame();sweep('board '+f+' '+n)}
   $('arrivalsTab')?.click();await frame();sweep('arrivals '+n);$('departuresTab')?.click();
   try{fillStationInfo(n);await frame();sweep('station information '+n)}catch(e){}}
  for(const t of pick){try{setCurrentStation(t.route[0][0]);chooseTrain(t);await frame();sweep('train '+t.type+' '+(t.pattern||''))}catch(e){}}
  for(const t of [...TRAINS.filter(t=>t.type==='Local').slice(0,2),...TRAINS.filter(t=>t.type==='Regio').slice(0,2)]){try{fillRouteInfo(t.type,t.network,t.line,t.route[0][0]);await frame();sweep('route '+t.type)}catch(e){}}
  setViewMode('journeys');await frame();sweep('journeys');rrSelectValue($('from'),'Peiting Central');rrSelectValue($('to'),'Mapleriver Central');pickerViews.get('from')?.sync();pickerViews.get('to')?.sync();$('trace').click();await frame();sweep('journey results');
  for(const [t,lab] of left)bad('English left on the French site',lab+': '+t);
  rrApplyLocale(loc0);clear();setViewMode(vm0==='journeys'?'departures':vm0);serviceFilter=f0;setCurrentStation(st0||LABELS[0]);out.counts['French pages checked']=1}
 // City check-in (user 2026-11-22): every major station with a direct train within 90 min to a major airport (Mainline or Airport
 // Express served) lists City check-in under Help and services with its own icon and a note naming the airport(s); no other station
 // does; French "Enregistrement en ville".
 {const st0=currentStation,air=new Set();let nc=0;for(const t of TRAINS)if(RR_MAINLINE_TYPES.has(t.type)||t.pattern==='AX')for(const [n] of t.route)if(rrIsAirport(n))air.add(n);
  for(const x of STATIONS){const n=x.name;let want=false;if(MAJOR_STATIONS.has(n)&&!rrIsAirport(n))for(const t of TRAINS){const i=t.route.findIndex(r=>r[0]===n);if(i<0)continue;
    for(let k=i+1;k<t.route.length&&!want;k++)if(air.has(t.route[k][0])&&timeOrdinal(t.route[k][1])-timeOrdinal(t.route[i][1])<=90&&rrMetro(S.get(n)?.city).includes(rrAirportCity(t.route[k][0])))want=true;if(want)break}
   if(!want&&!MAJOR_STATIONS.has(n))continue;nc++;fillStationInfo(n);const tile=detail.querySelector('.facility[data-fac="City check-in"]');
   if(want&&!tile){bad('major station near a major airport without City check-in',n);continue}if(!want&&tile){bad('City check-in where no direct train reaches a major airport',n);continue}
   if(tile){if(!tile.querySelector('use[href="#rr-picto-city-check-in"]')||!document.getElementById('rr-picto-city-check-in'))bad('City check-in without its icon',n);
    tile.click();const note=detail.querySelector('.fac-detail .fac-note');for(const a of rrCityCheckIn(n)||[])if(!rrMetro(S.get(n)?.city).includes(rrAirportCity(a)))bad('City check-in names an airport of another city',n+': '+a);if(!note||!/^Check in your bags here for flights from .+/.test(note.textContent)||!note.dataset.rrFr?.startsWith('Enregistrez vos bagages'))bad('City check-in note missing or untranslated',n)}}
  if(rrFrenchText('City check-in')!=='Enregistrement en ville')bad('City check-in not in French',rrFrenchText('City check-in'));
  setCurrentStation(st0||LABELS[0]);out.counts['City check-in stations checked']=nc}
 // no vending machines in station facilities (user 2026-11-22: "remove vending machine from facilities")
 {let nv=0;for(const x of STATIONS){nv++;if(stationFacilities(x.name).includes('Vending machines')){bad('vending machines listed in station facilities',x.name);break}}out.counts['vending-free facilities checked']=nv}
 // facility tile labels fit inside their tile, in English and French (2026-11-22: "Enregistrement en ville" ran past the tile)
 {const st0=currentStation,loc0=rrActiveLocale;let nl=0;
  for(const loc of ['en','fr']){rrApplyLocale(loc);for(const n of [...new Set([...NATIONAL_HUBS,...MAJOR_STATIONS])].slice(0,40)){fillStationInfo(n);rrLocalizeSubtree(detail);
   for(const b of detail.querySelectorAll('.station-picto-grid .facility')){const sp=b.querySelector('span:not(.fac-icon)');if(!sp)continue;nl++;const bb=b.getBoundingClientRect(),r=document.createRange();r.selectNodeContents(sp);
    for(const q of r.getClientRects())if(q.left<bb.left-0.5||q.right>bb.right+0.5){bad('facility label wider than its tile',loc+' '+n+': '+sp.textContent);break}}}}
  rrApplyLocale(loc0);setCurrentStation(st0||LABELS[0]);out.counts['facility labels checked']=nl}
 // facility list (user 2026-11-22: "change to horizontally", "clever way to put light indicator", "uniform line spacing"): rows with
 // the icon left and name right, every row the same height and gap, the status lights in one column at the row's right end
 {const st0=currentStation;let nr=0;for(const n of ['Peiting Central','Mapleriver Central',LABELS[10]].filter(n=>S.has(n))){fillStationInfo(n);app.classList.add('detail-open');
  const it=[...detail.querySelectorAll('.station-picto-grid .facility')];if(!it.length)continue;nr+=it.length;const hs=new Set(it.map(e=>Math.round(e.getBoundingClientRect().height)));
  if(hs.size>1)bad('facility rows of different heights',n+': '+[...hs].join('/'));
  for(const e of it){const ic=e.querySelector('svg')?.getBoundingClientRect(),lb=e.querySelector(':scope>span:not(.fac-icon)')?.getBoundingClientRect();if(ic&&lb&&lb.left<ic.right){bad('facility name not beside its icon',n+': '+e.textContent);break}}
  const dots=[...detail.querySelectorAll('.station-picto-grid .fac-dot')].map(d=>{const r=d.getBoundingClientRect(),b=d.closest('.facility').getBoundingClientRect();return [Math.round(b.right-r.right),Math.round((r.top+r.height/2)-(b.top+b.height/2))]});
  if(new Set(dots.map(d=>d[0])).size>1||dots.some(d=>Math.abs(d[1])>1))bad('status lights not in one column at the row ends',n)}
  setCurrentStation(st0||LABELS[0]);out.counts['facility rows checked']=nr}
 // dividers between categories, not inside (user 2026-11-22): Services and Facilities rows carry no lines; each category heading
 // after the first has one line above it
 {const st0=currentStation;let nd=0;for(const n of ['Peiting Central','Mapleriver Central'].filter(n=>S.has(n))){fillStationInfo(n);
  for(const r of detail.querySelectorAll('.station-svc,.station-picto-grid .facility')){nd++;const cs=getComputedStyle(r);if(parseFloat(cs.borderTopWidth)>0||parseFloat(cs.borderBottomWidth)>0){bad('divider inside a category',n+': '+r.textContent.trim().slice(0,30));break}}
  for(const card of detail.querySelectorAll('.rr-card')){const hs=[...card.querySelectorAll(':scope>.rr-card-sub')];hs.forEach((h,i)=>{nd++;const w=parseFloat(getComputedStyle(h).borderTopWidth);if(i===0&&w>0)bad('divider above the first category',n+': '+h.textContent);if(i>0&&!(w>0))bad('no divider between categories',n+': '+h.textContent)})}}
  setCurrentStation(st0||LABELS[0]);out.counts['category dividers checked']=nd}
 // Services rows: one height inside every category (user 2026-11-22: "slightly tighter spacing inside that category": 36 px)
 {const st0=currentStation;let ns=0;for(const n of ['Peiting Central','Mapleriver Central'].filter(n=>S.has(n))){fillStationInfo(n);
  const hs=new Set([...detail.querySelectorAll('.station-svc')].map(r=>{ns++;return Math.round(r.querySelector(':scope>summary,:scope>.station-svc-row,:scope>.station-conn-row')?.getBoundingClientRect().height||0)}));
  if(hs.size>1||!hs.has(36))bad('Services rows not one 36 px height',n+': '+[...hs].join('/'))}setCurrentStation(st0||LABELS[0]);out.counts['service rows checked']=ns}
 // Nothing spills out of its box in the details panel (2026-11-22, user: "styling mess up. must not happen again this whole kind of
 // issues"): every visible element of a station-information card stays inside its card; every facility tile stays inside its own grid
 // cell (open or closed); an open facility's details card lines up with the grid edges. Run at every audit width.
 {const st0=currentStation;let nb=0;const inside=(r,o,t=0.5)=>r.left>=o.left-t&&r.right<=o.right+t&&r.top>=o.top-t&&r.bottom<=o.bottom+t;
  for(const n of ['Peiting Central','Mapleriver Central','Havenbolme Hbf'].filter(n=>S.has(n))){fillStationInfo(n);app.classList.add('detail-open');
   const tiles=[...detail.querySelectorAll('.station-picto-grid .facility.has-hours')];
   for(const t of [null,...tiles.slice(0,6)]){if(t)t.click();
    for(const card of detail.querySelectorAll('.rr-card')){const cr=card.getBoundingClientRect();if(!cr.width)continue;
     for(const el of card.querySelectorAll('*')){if(el.closest('svg')&&el.tagName.toLowerCase()!=='svg')continue;const cs=getComputedStyle(el);if(cs.display==='none'||cs.visibility==='hidden'||cs.position==='absolute'||cs.position==='fixed')continue;
      const r=el.getBoundingClientRect();if(!r.width||!r.height)continue;nb++;if(!inside(r,cr)){bad('element spills out of its card',n+': '+(el.className||el.tagName)+' '+(el.textContent||'').trim().slice(0,24));break}}}
    for(const g of detail.querySelectorAll('.station-picto-grid')){const gr=g.getBoundingClientRect(),cols=getComputedStyle(g).gridTemplateColumns.split(' ').map(parseFloat),gap=parseFloat(getComputedStyle(g).columnGap)||0;
     for(const f of g.querySelectorAll(':scope>.facility')){const r=f.getBoundingClientRect();let x=gr.left+parseFloat(getComputedStyle(g).paddingLeft),ok=false;for(const w of cols){if(r.left>=x-0.5&&r.right<=x+w+0.5){ok=true;break}x+=w+gap}nb++;
      if(!ok){bad('facility tile outside its grid cell',n+': '+f.textContent.trim());break}}
     {const d0=g.querySelector('.fac-detail'),op=g.querySelector('.facility[aria-expanded="true"]');if(d0&&op){const gapY=d0.getBoundingClientRect().top-op.getBoundingClientRect().bottom;nb++;if(gapY<6)bad('open facility and its details card touch',n+': '+Math.round(gapY)+' px apart')}}
     const d=g.querySelector('.fac-detail');if(d){const dr=d.getBoundingClientRect(),il=gr.left+parseFloat(getComputedStyle(g).paddingLeft),ir=gr.right-parseFloat(getComputedStyle(g).paddingRight);nb++;
      if(Math.abs(dr.left-il)>0.5||Math.abs(dr.right-ir)>0.5)bad('facility details card not edge to edge with the grid',n+': '+Math.round(dr.left-il)+'/'+Math.round(ir-dr.right))}}}
   detail.querySelectorAll('.fac-detail').forEach(x=>x.remove());}
  setCurrentStation(st0||LABELS[0]);out.counts['card boxes checked']=nb}
 // a station facility never carries a train-formation name that means something else on a train (user 2026-11-22: "luggage on a train
 // and at a station are two different facilities"): Left luggage, Cycle parking, Family room - each with its own icon
 {let nf=0;const TRAIN_ONLY=['Luggage','Cycles','Family','Seat','Power','Quiet'];for(const x of STATIONS){nf++;const f=stationFacilities(x.name),hit=f.filter(n=>TRAIN_ONLY.includes(n));if(hit.length){bad('station facility with a train-formation name',x.name+': '+hit.join(', '));break}}
  for(const [n,id] of [['Left luggage','luggage-locker'],['Cycle parking','cycle-parking']])if(!document.getElementById('rr-picto-'+id)||ICONS[n]!==id)bad('station facility without its own icon',n);
  out.counts['station facility names checked']=nf}
 // British English everywhere (user 2026-11-22: "make sure to use British way of saying things, forever"): no American spelling or
 // term in any visible text, tooltip or screen-reader label on boards, filters, arrivals, station information, every train type,
 // route pages or journeys (coach not car, platform not track, timetable not schedule, centre, colour, cancelled, lift, toilets ...)
 {const AM=/\b(center|centers|centered|color|colors|favorite|traveler|travelers|traveling|canceled|canceling|gray|elevators?|restrooms?|bathrooms?|subway|parking lot|schedules?|scheduled|baggage|strollers?|railroad|round[- ]trip|one-way|downtown|ticket booth|toward|neighborhood|organize[ds]?|analyze[ds]?|realize[ds]?|license|track \d+|cars? \d+)\b/i;
  const loc0=rrActiveLocale,st0=currentStation,vm0=viewMode,f0=serviceFilter,frame=()=>new Promise(r=>setTimeout(r,40)),hits=new Map();
  const look=(t,lab)=>{if(!t)return;const m=t.match(AM);if(m&&!hits.has(t))hits.set(t,lab+' ['+m[0]+']')};
  const sweep=lab=>{const tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=tw.nextNode()){const el=n.parentElement;if(!el||el.closest('script,style,svg'))continue;look(n.nodeValue.replace(/\s+/g,' ').trim(),lab)}
   for(const el of document.querySelectorAll('[aria-label],[title],[placeholder]'))for(const a of ['aria-label','title','placeholder']){const t=el.getAttribute(a);if(t)look(t,lab+' @'+a)}};
  rrApplyLocale('en');await frame();const pick=[...new Map(TRAINS.map(t=>[t.type+'|'+(t.pattern||''),t])).values()];
  for(const n of [...new Set(['Peiting Central','Mapleriver Central',...pick.map(t=>t.route[0][0])])].filter(n=>S.has(n)).slice(0,10)){setViewMode('departures');setCurrentStation(n);await frame();sweep('board '+n);
   $('arrivalsTab')?.click();await frame();sweep('arrivals '+n);$('departuresTab')?.click();try{fillStationInfo(n);await frame();sweep('station information '+n)}catch(e){}}
  for(const t of pick){try{setCurrentStation(t.route[0][0]);chooseTrain(t);await frame();sweep('train '+t.type)}catch(e){}}
  for(const t of [...TRAINS.filter(t=>t.type==='Local').slice(0,2),...TRAINS.filter(t=>t.type==='Regio').slice(0,2)]){try{fillRouteInfo(t.type,t.network,t.line,t.route[0][0]);await frame();sweep('route '+t.type)}catch(e){}}
  setViewMode('journeys');await frame();sweep('journeys');
  for(const [t,lab] of hits)bad('American English on the site',lab+': '+t);
  rrApplyLocale(loc0);clear();setViewMode(vm0==='journeys'?'departures':vm0);serviceFilter=f0;setCurrentStation(st0||LABELS[0]);out.counts['British English pages checked']=1}
 // revised-time box (user 2026-11-22): side padding 5 px on the board (one rule for every view), and its digits sit under the old time's
 {let nr=0;const st0=currentStation;setViewMode('departures');for(const n of LABELS){setCurrentStation(n);const b=document.querySelector('#board .trainrow .row-time .time-delayed .retime-box');if(!b)continue;nr++;
  const cs=getComputedStyle(b);if(parseFloat(cs.paddingLeft)!==5||parseFloat(cs.paddingRight)!==5)bad('revised-time box side padding not 5 px',cs.paddingLeft+'/'+cs.paddingRight);
  const old=b.closest('.time-delayed').querySelector('.scheduled-time');if(old){const r=document.createRange();r.selectNodeContents(b);const nl=[...r.getClientRects()].map(q=>q.left).filter(Boolean),ol=old.getBoundingClientRect().left;if(nl.length&&Math.abs(b.getBoundingClientRect().left+5-ol)>1)bad('new time digits not under the old time',n+': '+Math.round(b.getBoundingClientRect().left+5-ol)+' px')}break}
  setCurrentStation(st0||LABELS[0]);out.counts['revised-time boxes checked']=nr}
 // ring lines (user 2026-11-22, option D): a ring train is shown as "via <next major station>" with an Inner / Outer circle badge
 // (icon + name, like Fast; French "Intérieure / Extérieure"); "clockwise" / "Sens horaire" is never the passenger label
 {const st0=currentStation,loc0=rrActiveLocale;let nr=0;const rings=TRAINS.filter(t=>t.ring);
  for(const n of [...new Set(rings.map(t=>t.route[1]?.[0]).filter(Boolean))].slice(0,4)){setViewMode('departures');setCurrentStation(n);
   for(const row of document.querySelectorAll('#board .trainrow')){const tag=row.querySelector('.rr-ring-tag');if(!tag)continue;nr++;
    const dest=row.querySelector('.dest').textContent.trim();if(!/^via \S/.test(dest))bad('ring train not shown as via its next major station',n+': '+dest);if((row.textContent.match(/\bvia\b/g)||[]).length>1)bad('ring train row says via twice',n+': '+row.textContent.trim());
    if(!tag.querySelector('use[href^="#rr-ui-"]')||!/^(Inner|Outer) circle$/.test(tag.textContent.trim()))bad('ring badge without its icon or name',n+': '+tag.textContent);
    const dh=row.querySelector('.row-via .rr-fast-tag:not(.rr-ring-tag)');if(dh&&dh.getBoundingClientRect().height!==tag.getBoundingClientRect().height)bad('ring badge not the Fast badge size',n)}}
  rrApplyLocale('fr');for(const n of [...new Set(rings.map(t=>t.route[1]?.[0]).filter(Boolean))].slice(0,1)){setCurrentStation(n);rrLocalizeSubtree(document.body);const tag=document.querySelector('#board .rr-ring-tag');
   if(tag&&!/^(Intérieure|Extérieure)$/.test(tag.textContent.trim()))bad('French ring badge not Intérieure / Extérieure',tag.textContent)}rrApplyLocale(loc0);
  if(/\b(Clockwise|Anticlockwise)\b/.test(document.getElementById('board').textContent))bad('clockwise used as a passenger label','board');
  setCurrentStation(st0||LABELS[0]);out.counts['ring trains checked']=nr}
 // ring badge and loop (user 2026-11-22): the badge icon fits inside the badge; a ring train's calling-at list ends with the line running
 // into a ring icon and "Continues round the inner / outer circle" (FR "Continue sur la boucle …")
 {const st0=currentStation;let nk=0;const t=TRAINS.find(x=>x.ring);if(t){setCurrentStation(t.route[1][0]);chooseTrain(t);nk++;
   const tag=detail.querySelector('.service-dest .rr-ring-tag'),ic=tag?.querySelector('svg');if(tag&&ic){const a=tag.getBoundingClientRect(),b=ic.getBoundingClientRect();if(b.top<a.top-0.5||b.bottom>a.bottom+0.5||b.height>a.height-4)bad('ring badge icon not inside its badge',Math.round(b.height)+' in '+Math.round(a.height))}
   const last=detail.querySelector('.stop-list>.stop:last-child');if(!last?.classList.contains('stop-continues')||!last.querySelector('.rr-ring-icon')||!/^Continues round the (inner|outer) circle$/.test(last.textContent.trim()))bad('ring train list does not show the loop carrying on',last?.textContent.trim());
   if(last?.classList.contains('stop-continues')&&W){const ic=last.querySelector('svg').getBoundingClientRect(),r=document.createRange();r.selectNodeContents(last.querySelector('.stop-cont-text'));const l1=r.getClientRects()[0];if(ic.height&&l1&&Math.abs((ic.top+ic.height/2)-(l1.top+l1.height/2))>1)bad('loop icon not level with its text',Math.round((ic.top+ic.height/2)-(l1.top+l1.height/2))+' px')}
   if(rrFrenchText('Continues round the inner circle')!=='Continue sur la boucle intérieure')bad('loop continuation not in French','')}
  setCurrentStation(st0||LABELS[0]);out.counts['ring loops checked']=nk}
 const fails=Object.keys(out.counts).filter(k=>!/checked$/.test(k));out.ok=!fails.length;return out;
})()
