async function boot(){try{const res=await fetch('./levels/index.json');if(!res.ok)throw Error('Cannot load mission index');const manifest=await res.json();const ids=manifest.groups.flatMap(g=>g.levels);const entries=await Promise.all([...ids,manifest.sandbox].map(async id=>{const r=await fetch('./levels/'+encodeURIComponent(id)+'.json');if(!r.ok)throw Error('Missing level: '+id);return r.json()}));let groups=[],offset=0;for(const g of manifest.groups){groups.push([g.title,offset,offset+g.levels.length]);offset+=g.levels.length}const loaded={missions:entries.slice(0,-1),sandbox:entries.at(-1),groups};init(loaded)}catch(e){document.body.innerHTML='<main style="padding:30px;max-width:700px;margin:auto"><h1>Factory Lab could not load</h1><p>Keep the levels folder next to index.html and open the game through a web server (GitHub Pages or localhost). Opening the HTML directly may block JSON requests.</p><p id="loadError"></p></main>';document.querySelector('#loadError').textContent=e.message}}
function init(loaded){

'use strict';
const $=s=>document.querySelector(s), copy=x=>JSON.parse(JSON.stringify(x)), esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const I=(a,n,d=false)=>({a:'%I0.'+a,n,d}), O=(a,n)=>({a:'%Q0.'+a,n,d:false}), M=(a,n)=>({a:'%M0.'+a,n,d:false});
const A=i=>'%I0.'+i,B=i=>'%Q0.'+i,K=i=>'%M0.'+i;
const t=(type,a)=>({type,a}), end=(type,a,p=0,r='FALSE')=>({type,a,p,r});
const n=(groups,out,name='')=>({groups,out,name}); // groups contain alternative series paths
const basic=(contacts,out=B(0),name='')=>n(contacts.map(c=>[[c]]),end('COIL',out),name);
function truth(ins,outs,fn){return Array.from({length:2**ins.length},(_,mask)=>{let input=Object.fromEntries(ins.map((a,i)=>[a,!!(mask&(1<<i))]));let v=fn(...ins.map(a=>input[a]));return {name:'Inputs '+ins.map(a=>+input[a]).join(' / '),steps:[{in:input,ms:100,expect:Object.fromEntries(outs.map((a,i)=>[a,!!(Array.isArray(v)?v[i]:v)]))}]}})}
const s=(label,input,ms,expect)=>({label,in:input,ms,expect});const test=(name,...steps)=>({name,steps});
const missions=loaded.missions,sandbox=loaded.sandbox;
const types={BRANCH:'Parallel branch',NO:'NO contact',NC:'NC contact',COIL:'Coil',SET:'Set coil',RESET:'Reset coil',TON:'TON',TOF:'TOF',CTU:'CTU',TP:'TP',EQ:'== Int',NE:'<> Int',GT:'> Int',GE:'>= Int',LT:'< Int',LE:'<= Int',RISE:'Rising edge',FALL:'Falling edge',MOVE:'MOVE',ADD:'ADD Int',SUB:'SUB Int'};
const blockType=x=>['TON','TOF','CTU','TP'].includes(x);const compareType=x=>['EQ','NE','GT','GE','LT','LE'].includes(x);const mathType=x=>['MOVE','ADD','SUB'].includes(x);const contactType=x=>['NO','NC','RISE','FALL'].includes(x)||compareType(x);const compareLabel={EQ:'==',NE:'≠',GT:'>',GE:'≥',LT:'<',LE:'≤'};
function symbol(type){if(compareType(type)||mathType(type)||type==='RISE'||type==='FALL')return `<svg viewBox="0 0 46 24" aria-hidden="true"><rect x="3" y="2" width="40" height="20" rx="2" fill="none" stroke="currentColor"/><text x="23" y="16" text-anchor="middle" fill="currentColor" font-size="11">${compareLabel[type]||({RISE:'P',FALL:'N'})[type]||type}</text></svg>`;let inner=type==='NO'||type==='NC'?`<path d="M0 12H16 M16 3V21 M30 3V21 M30 12H46"/>${type==='NC'?'<path d="M13 22L33 2"/>':''}`:`<path d="M0 12H14 M17 3Q7 12 17 21 M29 3Q39 12 29 21 M32 12H46"/>${type==='SET'||type==='RESET'?`<text x="23" y="15.5" text-anchor="middle" font-size="10" fill="currentColor" stroke="none">${type==='SET'?'S':'R'}</text>`:''}`;return `<svg viewBox="0 0 46 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round">${inner}</svg>`}
/* V5 tree-backed LAD networks; baseProgram defined below. */const key='engineering-share-factory-lab-v1',dataKey='engineering-share-factory-lab-v4';let saved={programs:{},done:{},current:0};try{const oldIds=['conveyor','cooling','packing','start-stop','reverse','delay','run-on','batch','staged','alarm','guard-bypass','pump','sandbox'];let v=JSON.parse(localStorage.getItem(dataKey));if(!v){let old=JSON.parse(localStorage.getItem(key));if(old?.programs&&old?.done){v={programs:{},done:{},current:oldIds[old.current]};oldIds.forEach((id,i)=>{if(old.programs[i])v.programs[id]=old.programs[i];if(old.done[i])v.done[id]=true})}}if(v){[...missions,sandbox].forEach((m,i)=>{if(v.programs?.[m.id])saved.programs[i]=v.programs[m.id];if(v.done?.[m.id])saved.done[i]=true});saved.current=Math.max(0,[...missions,sandbox].findIndex(m=>m.id===v.current))}}catch{};
let current=Number(saved.current);if(!Number.isInteger(current)||current<0||current>missions.length)current=0;
let mission,program,selected='NO',history=[],future=[],state,mode='STOP',hintLevel=0,modalApply=null,modalFocus=null,toastTimer;
function persist(){try{saved.current=current;saved.programs[current]=copy(program);let v={programs:{},done:{},current:mission.id};[...missions,sandbox].forEach((m,i)=>{if(saved.programs[i])v.programs[m.id]=saved.programs[i];if(saved.done[i])v.done[m.id]=true});localStorage.setItem(dataKey,JSON.stringify(v))}catch{}}
function tags(m=mission){return [...m.ins,...m.outs,...(m.mem||[])]}
function initial(m){return {bits:Object.fromEntries(tags(m).map(t=>[t.a,t.kind==='INT'?Number(t.d||0):!!t.d])),inst:{},edges:{},plant:{},scan:0,time:0,flows:[]}}
function read(st,a){if(a==='TRUE')return true;if(a==='FALSE')return false;if(typeof a==='number')return a;if(a?.endsWith('.Q'))return !!st.inst[a.slice(0,-2)]?.q;return st.bits[a]??false}
// V5 editable network tree: series of contact/output nodes and arbitrarily nested parallel paths.
// Legacy V4 networks are migrated at load time; old progression storage remains readable.
let nextNodeId=0;
const uid=()=>`e${++nextNodeId}`;
const opNode=o=>({kind:contactType(o.type)?'contact':'output',id:uid(),...copy(o)});
const seq=items=>({kind:'series',id:uid(),items});
function migrateNetwork(net){
 if(net.tree?.kind==='series'){
  const observe=obj=>{if(/^e\d+$/.test(obj.id||''))nextNodeId=Math.max(nextNodeId,+obj.id.slice(1));else obj.id=uid()};const walk=s=>{observe(s);for(const el of s.items){observe(el);if(el.kind==='parallel')el.paths.forEach(walk)}};
  walk(net.tree);return net;
 }
 const items=[];
 (net.groups||[[[]]]).forEach((g,gi)=>{
  const paths=g.map((path,pi)=>{
   const entries=path.map(opNode);
   const bo=net.branchOutputs?.[`${gi}:${pi}`];
   if(bo)entries.push({...opNode(bo),legacyEnd:true});
   return seq(entries);
  });
  if(paths.length>1)items.push({kind:'parallel',id:uid(),paths});
  else items.push(...paths[0]?.items||[]);
 });
 if(net.out)items.push(opNode(net.out));
 for(const out of net.parallelOutputs||[])if(out)items.push(opNode(out));
 net.tree=seq(items);delete net.groups;delete net.out;delete net.parallelOutputs;delete net.branchOutputs;
 return net;
}
const modernProgram=p=>p.map(net=>migrateNetwork(net));
const baseProgram=()=>[{name:'',tree:seq([])}];
function walkNodes(series,cb){for(const node of series.items){cb(node);if(node.kind==='parallel')for(const path of node.paths)walkNodes(path,cb)}}
function networkOutputs(net){let a=[];walkNodes(net.tree,x=>{if(x.kind==='output')a.push(x)});return a}
function executeOutput(o,power,st,dt){
 if(!o)return false;
 if(blockType(o.type)){
  let q=st.inst[o.a]||(st.inst[o.a]={q:false,et:0,cv:0,prev:false});
  if(o.type==='TON'){q.et=power?Math.min(o.p,q.et+dt):0;q.q=power&&q.et>=o.p}
  else if(o.type==='TOF'){if(power){q.q=true;q.et=0}else if(q.q){q.et=Math.min(o.p,q.et+dt);q.q=q.et<o.p}}
  else if(o.type==='TP'){if(!q.q&&power&&!q.prev){q.et=0;q.q=true}if(q.q){q.et=Math.min(o.p,q.et+dt);q.q=q.et<o.p}else if(!power)q.et=0}
  else{if(read(st,o.r))q.cv=0;else if(power&&!q.prev)q.cv=Math.min(32767,q.cv+1);q.q=q.cv>=o.p}
  q.prev=power;return q.q;
 }
 if(mathType(o.type)){
  if(power){let x=Number(read(st,o.src)),y=Number(read(st,o.rhs));let v=o.type==='MOVE'?x:o.type==='ADD'?x+y:x-y;st.bits[o.a]=((v+32768)%65536+65536)%65536-32768}
  return read(st,o.a);
 }
 if(o.type==='COIL')st.bits[o.a]=power;
 else if(o.type==='SET'&&power)st.bits[o.a]=true;
 else if(o.type==='RESET'&&power)st.bits[o.a]=false;
 return read(st,o.a);
}

function evaluateContact(c,st,ni,dt){
 const a=read(st,c.a),b=read(st,c.b);
 if(compareType(c.type))return ({EQ:a===b,NE:a!==b,GT:a>b,GE:a>=b,LT:a<b,LE:a<=b})[c.type];
 if(c.type==='RISE'||c.type==='FALL'){
  let prior=!!st.edges[c.id];st.edges[c.id]=!!a;
  return c.type==='RISE'?!!a&&!prior:!a&&prior;
 }
 return c.type==='NC'?!a:!!a;
}
function tick(p,st,dt=100){
 st.flows=[];
 function calculate(series,incoming,flow,ni){
  let power=incoming;
  for(const node of series.items){
   if(node.kind==='contact'){const pass=evaluateContact(node,st,ni,dt);power=power&&pass}
   else if(node.kind==='output'){flow[node.id]=power;executeOutput(node,power,st,dt);if(node.legacyEnd)power=false}
   else if(node.kind==='parallel'){
    const outputs=node.paths.map(path=>calculate(path,power,flow,ni));
    power=outputs.some(Boolean);
   }
   flow[node.id]=power;
  }
  return power;
 }
 for(let ni=0;ni<p.length;ni++){
  const flow={};flow.rail=true;flow.result=calculate(p[ni].tree,true,flow,ni);st.flows.push(flow);
 }
 st.scan++;st.time+=dt;return st;
}
function compile(p,m){
 const errors=[],warnings=[];
 const validTags=new Set(tags(m).filter(t=>t.kind!=='INT').map(t=>t.a));
 const intTags=new Set(tags(m).filter(t=>t.kind==='INT').map(t=>t.a));
 const intOperand=a=>intTags.has(a)||(Number.isInteger(a)&&a>=-32768&&a<=32767);
 const instances=new Map(),writes=new Map();
 p.forEach((net,i)=>networkOutputs(net).forEach(o=>{if(blockType(o.type)){
  if(!/^[A-Za-z_][A-Za-z0-9_]{0,29}$/.test(o.a||''))errors.push(`Network ${i+1}: invalid instance name.`);
  if(instances.has(o.a))errors.push(`Network ${i+1}: ${o.a} is already used as an instance.`);
  instances.set(o.a,i);
 }}));
 const operand=a=>validTags.has(a)||a==='TRUE'||a==='FALSE'||(typeof a==='string'&&a.endsWith('.Q')&&instances.has(a.slice(0,-2)));
 p.forEach((net,i)=>{
  const label=`Network ${i+1}: `,outs=networkOutputs(net);
  if(!outs.length)errors.push(label+'missing an output instruction.');
  if(!net.tree?.items)errors.push(label+'invalid ladder network.');
  const verify=s=>{
   s.items.forEach((node,index)=>{
    if(node.kind==='parallel'){
     if(node.paths.length<2)errors.push(label+'parallel group needs at least two paths.');
     for(const path of node.paths){
      if(!path.items.length)errors.push(label+'an empty parallel path would bypass the other paths.');
      verify(path);
     }
    }else if(node.kind==='contact'){
     if(!contactType(node.type)||(compareType(node.type)?!intOperand(node.a)||!intOperand(node.b):!operand(node.a)))
      errors.push(label+'unassigned or invalid contact '+(node.a||'(blank)')+'.');
     if(typeof node.a==='string'&&node.a.endsWith('.Q')&&instances.get(node.a.slice(0,-2))>i)
      warnings.push(label+'reads an instance Q before its network executes.');
    }else if(node.kind==='output'){
     if(blockType(node.type)){
      if(!Number.isInteger(node.p)||node.p<1||(node.type==='CTU'?node.p>32767:node.p>3600000))errors.push(label+'invalid preset value.');
      if(node.type==='CTU'&&!operand(node.r))errors.push(label+'invalid counter reset operand.');
     }else if(mathType(node.type)){
      if(!intTags.has(node.a)||node.a.startsWith('%I')||!intOperand(node.src)||(node.type!=='MOVE'&&!intOperand(node.rhs)))errors.push(label+'invalid INT instruction operands.');
     }else{
      if(!['COIL','SET','RESET'].includes(node.type)||!validTags.has(node.a)||node.a.startsWith('%I'))errors.push(label+'coil must write a declared output or memory bit.');
      let w=writes.get(node.a)||[];w.push(node.type);writes.set(node.a,w);
     }
     if(node.legacyEnd&&index<s.items.length-1)warnings.push(label+'legacy branch termination leaves following instructions without power.');
    }else errors.push(label+'unknown network instruction.');
   });
  };
  if(net.tree?.items)verify(net.tree);
 });
 writes.forEach((w,a)=>{if(w.length>1&&w.includes('COIL'))warnings.push(`${a}: multiple writes including an ordinary coil; later writes may overwrite earlier ones.`)});
 return {errors:[...new Set(errors)],warnings:[...new Set(warnings)]};
}

function runTests(p,m){return m.tests.map(tc=>{let st=initial(m);for(const step of tc.steps){Object.entries(step.in).forEach(([a,v])=>st.bits[a]=tags(m).find(t=>t.a===a)?.kind==='INT'?Number(v):!!v);for(let k=0;k<step.ms;k+=100)tick(p,st);let mismatches=Object.entries(step.expect).filter(([a,v])=>read(st,a)!==(tags(m).find(t=>t.a===a)?.kind==='INT'?Number(v):!!v));if(mismatches.length)return {name:tc.name,ok:false,detail:`${step.label||'Input combination'} · ${mismatches.map(([a,v])=>`${tagName(a,m)} expected ${Number(v)}, got ${+read(st,a)}`).join('; ')} · inputs: ${m.ins.map(t=>`${t.n}=${+read(st,t.a)}`).join(', ')}`}}return {name:tc.name,ok:true,detail:`${tc.steps.length} checkpoint${tc.steps.length===1?'':'s'} passed`}})}
function tagName(a,m=mission){return tags(m).find(t=>t.a===a)?.n||a||'Unassigned'}
function instNames(){return program.flatMap(networkOutputs).filter(o=>blockType(o.type)&&o.a).map(o=>o.a)}
function timeText(ms){if(ms%1000===0)return `T#${ms/1000}s`;return `T#${ms}ms`}
function parseTime(s){s=s.trim().toLowerCase();if(s.startsWith('t#'))s=s.slice(2);if(s.startsWith('time#'))s=s.slice(5);const m=s.match(/^(\d+(?:\.\d+)?)(ms|s|m)?$/);if(!m)return NaN;return Math.round(Number(m[1])*(m[2]==='ms'?1:m[2]==='m'?60000:1000))}
function toast(msg){const e=$('#toast');e.textContent=msg;e.classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>e.classList.add('hidden'),2600)}
function load(i){if(program)persist();current=i;mission=missions[i]||sandbox;program=modernProgram(copy(saved.programs[i]||mission.starter||baseProgram()));history=[];future=[];selected='NO';hintLevel=0;mode='STOP';state=initial(mission);$('#hintBox').classList.add('hidden');$('#missionCode').textContent=i===missions.length?'OPEN LAB':`MISSION ${String(i+1).padStart(2,'0')} / ${mission.level}`;$('#missionTitle').textContent=mission.title;$('#brief').innerHTML=`<div>${esc(mission.brief)}</div>${mission.requirements?.length?`<div class="requirements-label">Operating requirements</div><ul>${mission.requirements.map(q=>`<li>${esc(q)}</li>`).join('')}</ul>`:''}`;$('#objective').textContent='Learning focus: '+mission.objective;$('#demoBtn').classList.toggle('hidden',i!==missions.length);$('#hintBtn').disabled=!mission.hints;$('#testBtn').disabled=!mission.tests.length;$('#checks').innerHTML=`<p>${mission.tests.length?'Build a program, run it manually, then test it against the mission requirements.':'Free lab: compile and monitor your program using the controls above.'}</p>`;renderAll();persist()}
function firstIncomplete(){const i=missions.findIndex((_,i)=>!saved.done[i]);return i<0?missions.length:i}
function canOpen(i){return Number.isInteger(i)&&i>=0&&i<=missions.length&&(i===missions.length||i<=firstIncomplete())}
function missionStatus(i){
 if(!canOpen(i))return 'locked';if(saved.done[i])return 'done';
 const p=saved.programs[i];if(!p)return 'available';
 // Ignore generated node IDs when deciding whether the student has edited a starter.
 const signature=programs=>JSON.stringify(programs,(key,val)=>key==='id'?undefined:val);
 const baseline=modernProgram(copy(missions[i].starter||baseProgram()));
 const candidate=modernProgram(copy(p));
 return signature(candidate)===signature(baseline)?'available':'started';
}

const missionGroups=loaded.groups;
const lockIcon='<svg class="lock-icon" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 0 1 6 0v2"/></svg>';
function updateNext(){const b=$('#nextBtn'),note=$('#nextNote'),lab=current===missions.length,last=current===missions.length-1,passed=!!saved.done[current];b.classList.toggle('hidden',lab);b.disabled=lab||!passed;b.textContent=last?'Finish training →':'Next mission →';note.classList.toggle('hidden',lab||passed);note.textContent=lab||passed?'':'Pass the commissioning tests to '+(last?'finish training.':'unlock the next mission.')}
function progress(){let count=firstIncomplete(),started=missions.filter((_,i)=>missionStatus(i)==='started').length,available=missions.filter((_,i)=>missionStatus(i)==='available').length,locked=missions.filter((_,i)=>missionStatus(i)==='locked').length;$('#progressFill').style.width=`${count/missions.length*100}%`;$('#progressText').textContent=`${count}/${missions.length} passed`;$('#menuPassed').textContent=count;$('#statDone').textContent=count;$('#statStarted').textContent=started;$('#statNew').textContent=available;$('#statLocked').textContent=locked;$('#menuFill').style.width=`${count/missions.length*100}%`;$('#menuTrack').setAttribute('aria-valuenow',count);$('#menuTrack').setAttribute('aria-valuemax',missions.length);$('#menuTotal').textContent=' / '+missions.length+' missions passed';let resume=count===missions.length?0:count;$('#resumeBtn').dataset.target=resume;$('#resumeBtn').textContent=count===missions.length?'Review missions →':count||started?`Continue: ${missions[resume].title} →`:'Start training →';$('#missions').innerHTML=missionGroups.map(([label,from,to])=>`<div class="menu-group">${label}</div><div class="mission-grid">${missions.slice(from,to).map((m,j)=>{let i=from+j,status=missionStatus(i),locked=status==='locked';return `<button class="mission-card ${status}" data-mission="${i}" ${locked?'disabled aria-disabled="true"':''}><span class="card-top"><span class="num">${status==='done'?'✓':String(i+1).padStart(2,'0')}</span><span class="card-state ${status}">${locked?lockIcon+' Locked':status==='done'?'✓ Passed':status==='started'?'● In progress':'Ready to start'}</span></span><strong>${esc(m.title)}</strong><span class="card-desc">${esc(m.objective)}</span><span class="card-bottom"><span>${esc(m.level.split(' · ')[1]||m.level)}</span><span class="card-arrow">${locked?`Pass mission ${i} first${saved.done[i]?' · saved pass':''}`:status==='done'?'Review →':status==='started'?'Resume →':'Start →'}</span></span></button>`}).join('')}</div>`).join('');updateNext()}
let view='menu';
function showMenu(){if(program){persist();mode='STOP';state=initial(mission);updateLive()}view='menu';$('#gameView').classList.add('hidden');$('#menuView').classList.remove('hidden');$('#menuBtn').classList.add('hidden');progress();window.scrollTo(0,0)}
function openMission(i){if(!canOpen(i)){toast('Complete the earlier missions to unlock this one.');return}view='game';$('#menuView').classList.add('hidden');$('#gameView').classList.remove('hidden');$('#menuBtn').classList.remove('hidden');load(i);window.scrollTo(0,0)}
function setTheme(theme){const light=theme==='light';document.documentElement.dataset.theme=light?'light':'dark';$('#themeBtn').textContent=light?'☾ Dark mode':'☀ Light mode';$('#themeBtn').setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');try{localStorage.setItem(key+'-theme',light?'light':'dark')}catch{}}
$('#themeBtn').onclick=()=>setTheme(document.documentElement.dataset.theme==='light'?'dark':'light');$('#menuBtn').onclick=showMenu;$('#resumeBtn').onclick=()=>openMission(+$('#resumeBtn').dataset.target);$('#menuGuideBtn').onclick=()=>$('#helpBtn').click();
let preferredTheme='dark';try{preferredTheme=localStorage.getItem(key+'-theme')||'dark'}catch{};setTheme(preferredTheme);
function renderTools(){const hasInt=tags().some(t=>t.kind==='INT');const groups=[['NO','NC','RISE','FALL'],['BRANCH'],['COIL','SET','RESET'],['TON','TOF','TP','CTU'],...(hasInt?[['EQ','NE','GT','GE','LT','LE'],['MOVE','ADD','SUB']]:[])];const items=groups.map(g=>g.map(type=>`<button class="tool ${type===selected?'selected':''}" data-tool="${type}" draggable="true" aria-pressed="${type===selected}" title="${esc(types[type])}">${type==='BRANCH'?`<span class="branch-tool-icon" aria-hidden="true">⑂</span>`:blockType(type)||mathType(type)?`<span style="font:700 11px ui-monospace,monospace;border:1px solid currentColor;padding:2px 4px;border-radius:3px">${type}</span>`:symbol(type)}${blockType(type)||mathType(type)||compareType(type)?'':esc(types[type])}</button>`).join(''));$('#tools').innerHTML=items.join('<div class="tool-sep"></div>')+`<div class="tool-sep"></div><button class="mini" id="undoBtn" ${!history.length?'disabled':''} title="Undo">↶ Undo</button><button class="mini" id="redoBtn" ${!future.length?'disabled':''} title="Redo">↷</button>`;$('#toolHint').textContent=selected==='BRANCH'?'Parallel branch selected · drag onto a wire to split it, or onto an instruction to branch around it.':'Drag to insert · drag an existing instruction to a new position · drag Branch from the palette to create parallel paths.'}
function edit(mut){history.push(copy(program));if(history.length>50)history.shift();future=[];mut();invalidate()}
function invalidate(){mode='STOP';state=initial(mission);delete saved.done[current];$('#checks').innerHTML='<p>Program edited. Compile or run it, then repeat commissioning tests.</p>';persist();renderAll()}
function undo(redo=false){const from=redo?future:history,to=redo?history:future;if(!from.length)return;to.push(copy(program));program=from.pop();invalidate()}
function renderAll(){progress();renderTools();renderEditor();renderWatch();renderPlant();updateLive()}
// True nested LAD canvas. A wire or symbol is a drop target, not a fixed slot.
let selectedRef=null,rangeRef=null;
const eachSeries=(net,path='')=>{
 let series=net.tree;
 if(path)for(const item of path.split('/')){const [pid,idx]=item.split(':');const parallel=series.items.find(n=>n.id===pid&&n.kind==='parallel');if(!parallel||!parallel.paths[+idx])return null;series=parallel.paths[+idx]}
 return series;
};
function findNode(net,id){let found=null;function search(s,path){s.items.forEach((node,i)=>{if(node.id===id)found={series:s,path,index:i,node};if(node.kind==='parallel')node.paths.forEach((p,pi)=>search(p,path+(path?'/':'')+node.id+':'+pi))})}search(net.tree,'');return found}
function nodeLayout(n){if(n.kind!=='parallel')return {w:blockType(n.type)||mathType(n.type)?144:124,h:98};const paths=n.paths.map(seriesLayout);return {w:Math.max(166,...paths.map(p=>p.w))+72,h:paths.reduce((sum,p)=>sum+p.h,0)+18*(paths.length-1),paths}}
function seriesLayout(series){const items=series.items.map(nodeLayout);return {w:72+items.reduce((sum,l)=>sum+l.w+40,0),h:Math.max(100,...items.map(l=>l.h)),items}}
function renderEditor(){
 const e=$('#editor'),top=e.scrollTop,left=e.scrollLeft;
 $('#networkCount').textContent=`${program.length} network${program.length===1?'':'s'}`;
 const html=program.map((net,ni)=>{
  const layout=seriesLayout(net.tree),cw=Math.max(680,layout.w+85),ch=Math.max(155,layout.h+46);
  let wires=[],items=[];
  const line=(x1,y1,x2,y2,key)=>wires.push(`<path d="M${x1} ${y1}L${x2} ${y2}" class="lad-line" ${key?`data-lwire="${key}"`:''}/>`);
  const place=(x,y,extra)=>items.push(`<button type="button" class="lad-place" style="left:${x-17}px;top:${y-17}px" data-place="1" data-n="${ni}" data-path="${esc(extra.path)}" data-before="${esc(extra.before||'')}" title="Drop or click to insert an instruction here"><span>+</span></button>`);
  const op=(node,x,y,path)=>{
   const live=(selectedRef?.id===node.id?' selected':'');
   let label=node.kind==='contact'?(compareType(node.type)?`${compareLabel[node.type]} ${node.b}`:tagName(node.a)):(blockType(node.type)?`${node.type} · ${node.p}`:mathType(node.type)?`IN ${node.src} → ${node.a}`:tagName(node.a));
   const addr=blockType(node.type)?node.a:esc(node.a??'');
   const pict=blockType(node.type)||mathType(node.type)?`<span class="lad-block-label">${esc(node.type)}</span>`:symbol(node.type);
   const symClass=blockType(node.type)||mathType(node.type)?'is-block':'';
   items.push(`<div class="lad-item ${live}" style="left:${x}px;top:${y-47}px;width:${nodeLayout(node).w}px" data-node="${node.id}" data-n="${ni}" data-path="${esc(path)}" draggable="true" title="Drag to move · click to edit · Shift-click to select a range">
    <span class="lad-addr">${addr}</span><span class="lad-glyph ${symClass}">${pict}</span><span class="lad-tag">${esc(label)}</span>
    <button type="button" class="lad-trash" data-act="delnode" data-n="${ni}" data-id="${node.id}" title="Delete instruction">×</button>
   </div>`);
  };
  function drawSeries(s,x,cy,path){
   let cursor=x,tail=x;
   for(const node of s.items){
    const dim=nodeLayout(node),nodeX=cursor+40;
    const terminalPad=node.kind==='parallel'?0:(dim.w-(blockType(node.type)||mathType(node.type)?83:60))/2;
    const input=nodeX+terminalPad,output=nodeX+dim.w-terminalPad;
    // Draw straight to the actual terminal on the SVG symbol / function block.
    line(tail,cy,input,cy,node.id);
    place((tail+input)/2,cy,{path,before:node.id});
    if(node.kind==='parallel')drawParallel(node,nodeX,cy,dim,path);
    else op(node,nodeX,cy,path);
    cursor=nodeX+dim.w;tail=output;
   }
   const finish=cursor+36;
   line(tail,cy,finish,cy,s.items.at(-1)?.id);
   place((tail+finish)/2,cy,{path,before:''});
   return finish;
  }
  function drawParallel(node,x,cy,shape,path){
   const lx=x+22,rx=x+shape.w-22;
   const top=cy-shape.h/2;
   let dy=top;const centers=[],joining=[];
   node.paths.forEach((p,idx)=>{const pl=shape.paths[idx],py=dy+pl.h/2;centers.push(py);const ppath=path+(path?'/':'')+node.id+':'+idx;
    line(lx,py,lx+14,py);
    const end=drawSeries(p,lx+14,py,ppath);
    if(!p.items.at(-1)?.legacyEnd){line(end,py,rx,py);joining.push(py)};
    items.push(`<button type="button" class="lad-path-remove" data-act="delpath" data-n="${ni}" data-id="${node.id}" data-idx="${idx}" style="left:${rx-6}px;top:${py-31}px" title="Remove this parallel path">×</button>`);
    dy+=pl.h+18;
   });
   line(x,cy,lx,cy);line(lx,centers[0],lx,centers.at(-1));if(joining.length>1)line(rx,joining[0],rx,joining.at(-1));if(joining.length)line(rx,cy,x+shape.w,cy);
   items.push(`<button type="button" class="lad-addpath" data-act="addpath" data-n="${ni}" data-id="${node.id}" style="left:${lx+11}px;top:${top-15}px" title="Add another parallel path">＋ parallel path</button>`);
  }
  const start=25,y=ch/2;line(12,16,12,ch-14);line(12,y,start,y);
  const end=drawSeries(net.tree,start,y,'');line(end,y,cw-15,y);line(cw-15,16,cw-15,ch-14);
  return `<article class="network lad-network"><div class="network-head"><strong>NETWORK ${ni+1}</strong><input aria-label="Network ${ni+1} comment" placeholder="Add a network comment…" value="${esc(net.name||'')}" data-comment="${ni}"><button data-act="rangebranch" data-n="${ni}" title="Create a parallel branch around the selected instruction(s)">⤵ Branch selected</button><button data-act="up" data-n="${ni}" ${ni===0?'disabled':''}>↑</button><button data-act="down" data-n="${ni}" ${ni===program.length-1?'disabled':''}>↓</button><button data-act="delnet" data-n="${ni}">×</button></div><div class="lad-canvas-wrap"><div class="lad-canvas" style="width:${cw}px;height:${ch}px"><svg class="lad-wires" width="${cw}" height="${ch}" viewBox="0 0 ${cw} ${ch}" aria-hidden="true">${wires.join('')}</svg>${items.join('')}</div></div></article>`;
 }).join('')+`<button class="add-network" data-act="addnet">＋ Insert new network</button>`;
 e.innerHTML=html;e.scrollTop=top;e.scrollLeft=left;
}

function option(a,label,sel){return `<option value="${esc(a)}" ${a===sel?'selected':''}>${esc(label)}</option>`}
function operands(value,write=false){let list=tags().filter(t=>t.kind!=='INT'&&(!write||!t.a.startsWith('%I'))).map(t=>[t.a,`${t.a}  ·  ${t.n}`]);if(!write)list.push(...instNames().map(a=>[a+'.Q',a+'.Q']),['TRUE','TRUE (constant)'],['FALSE','FALSE (constant)']);if(value&&!list.some(x=>x[0]===value))list.unshift([value,value+' (unresolved)']);return option('','Select an operand…',value)+list.map(([a,l])=>option(a,l,value)).join('')}
function openDialog(html,apply){modalFocus=document.activeElement;$('#modalCard').innerHTML=html;modalApply=apply;$('#modal').classList.remove('hidden');$('#modalCard').querySelector('select,input,button')?.focus()}
function closeDialog(){$('#modal').classList.add('hidden');modalApply=null;if(modalFocus?.isConnected)modalFocus.focus()}
function dialogButtons(){return '<div class="error" id="dialogError" role="alert"></div><div class="modal-actions"><button data-modal="close">Cancel</button><button class="primary" data-modal="apply">Apply</button></div>'}
function intField(id,label,value,write=false){let opts=tags().filter(t=>t.kind==='INT'&&(!write||!t.a.startsWith('%I'))).map(t=>option(t.a,t.a+' · '+t.n,value));if(!write)opts.push(option('#literal','Integer constant',typeof value==='number'||value===''?'#literal':value));return `<div class="field"><label for="${id}">${label}</label><select id="${id}" onchange="document.getElementById('${id}Literal')?.classList.toggle('hidden',this.value!=='#literal')">${option('','Select INT tag…',value)}${opts.join('')}</select>${write?'':`<input id="${id}Literal" type="number" min="-32768" max="32767" class="${typeof value==='number'||value===''?'':'hidden'}" value="${typeof value==='number'?value:0}" aria-label="Integer constant">`}</div>`}function intValue(id){let v=$('#'+id).value;if(v==='#literal'){let raw=$('#'+id+'Literal').value;let n=Number(raw);return raw.trim()&&Number.isInteger(n)&&n>=-32768&&n<=32767?n:null}return v||null}
function nodeDialog(ni,path,before,existing,force){
 const net=program[ni],old=existing?findNode(net,existing)?.node:null;
 let type=force||old?.type||selected;
 if(!types[type])type='NO';
 function fields(){
  const tp=$('#dType').value;
  if(contactType(tp))$('#nodeFields').innerHTML=compareType(tp)?intField('dLeft','IN1 · INT',old?.a??'')+intField('dRight','IN2 · INT',old?.b??0):`<div class="field"><label for="dAddr">Boolean operand</label><select id="dAddr">${operands(old?.a||'')}</select></div>`;
  else if(mathType(tp))$('#nodeFields').innerHTML=intField('dDest','OUT · INT destination',old?.a||'',true)+intField('dSrc','IN · INT source',old?.src??0)+(tp==='MOVE'?'':intField('dRhs','IN2 · INT source',old?.rhs??1));
  else if(blockType(tp))$('#nodeFields').innerHTML=`<div class="field"><label for="dInstance">Instance DB name</label><input id="dInstance" maxlength="30" value="${esc(old?.a||tp+'_DB_'+(ni+1))}"></div><div class="field"><label for="dPreset">${tp==='CTU'?'PV · count':'PT · time (e.g. T#5s)'}</label><input id="dPreset" value="${esc(old?.p?(tp==='CTU'?old.p:timeText(old.p)):tp==='CTU'?'3':'T#5s')}"></div>${tp==='CTU'?`<div class="field"><label for="dReset">R · reset</label><select id="dReset">${operands(old?.r||'FALSE')}</select></div>`:''}`;
  else $('#nodeFields').innerHTML=`<div class="field"><label for="dAddr">Output or memory bit</label><select id="dAddr">${operands(old?.a||'',true)}</select></div>`;
 }
 openDialog(`<h3 id="modalTitle">${existing?'Edit':'Insert'} ladder instruction</h3><p>Place contacts, output coils and blocks anywhere in a connected series or branch path. Outputs execute when power reaches them; power continues through to the next instruction.</p><div class="field"><label for="dType">Instruction</label><select id="dType">${Object.keys(types).map(v=>option(v,types[v],v===type?type:'__'))}</select></div><div id="nodeFields"></div>${dialogButtons()}`,()=>{
  const tp=$('#dType').value;let obj={kind:contactType(tp)?'contact':'output',id:old?.id||uid(),type:tp};
  if(compareType(tp)){obj.a=intValue('dLeft');obj.b=intValue('dRight');if(obj.a===null||obj.b===null)return 'Select both integer operands.'}
  else if(contactType(tp)){obj.a=$('#dAddr').value;if(!obj.a)return 'Choose a Boolean operand.'}
  else if(mathType(tp)){obj.a=intValue('dDest');obj.src=intValue('dSrc');obj.rhs=tp==='MOVE'?0:intValue('dRhs');if(obj.a===null||obj.src===null||obj.rhs===null)return 'Choose valid INT operands.'}
  else if(blockType(tp)){obj.a=$('#dInstance').value.trim();if(!/^[A-Za-z_][A-Za-z0-9_]{0,29}$/.test(obj.a))return 'Use a valid instance name.';obj.p=tp==='CTU'?Number($('#dPreset').value):parseTime($('#dPreset').value);obj.r=tp==='CTU'?$('#dReset').value:'FALSE';if(!Number.isInteger(obj.p)||obj.p<1||obj.p>(tp==='CTU'?32767:3600000))return 'Invalid preset.';if(tp==='CTU'&&!obj.r)return 'Select a reset signal.';if(program.some(n=>networkOutputs(n).some(o=>o.id!==obj.id&&blockType(o.type)&&o.a===obj.a)))return 'Instance name already exists.'}
  else {obj.a=$('#dAddr').value;if(!obj.a)return 'Choose an output or memory bit.'}
  edit(()=>{
   if(existing){const found=findNode(program[ni],existing);if(found)found.series.items[found.index]=obj}
   else {const s=eachSeries(program[ni],path);if(!s)return;const index=before?s.items.findIndex(n=>n.id===before):-1;s.items.splice(index<0?s.items.length:index,0,obj)}
  });
  selectedRef={ni,id:obj.id};return true;
 });
 $('#dType').value=type;fields();$('#dType').addEventListener('change',fields);
}
function createBranch(ni,id,side='below',newType=null){
 const found=findNode(program[ni],id);if(!found)return;
 const source=found.series.items.splice(found.index,1);
 const newSide=seq(newType?[{kind:contactType(newType)?'contact':'output',id:uid(),type:newType,a:''}]:[]);
 const paths=side==='above'?[newSide,seq(source)]:[seq(source),newSide];
 found.series.items.splice(found.index,0,{kind:'parallel',id:uid(),paths});
}
function createBranchRange(ni){
 if(selectedRef?.ni!==ni){toast('Click an instruction first; Shift-click a second one to select a range.');return}
 const one=findNode(program[ni],selectedRef.id),two=rangeRef?.ni===ni?findNode(program[ni],rangeRef.id):null;
 if(!one){toast('Select an instruction first.');return}
 if(two&&two.series!==one.series){toast('Branch ranges must be in the same series path.');return}
 edit(()=>{
  const s=one.series,a=two?Math.min(one.index,two.index):one.index,b=two?Math.max(one.index,two.index):one.index;
  const members=s.items.splice(a,b-a+1);s.items.splice(a,0,{kind:'parallel',id:uid(),paths:[seq(members),seq([])]});
 });
 selectedRef=null;rangeRef=null;
}
function editorAction(el){
 const {act}=el.dataset,ni=+el.dataset.n,id=el.dataset.id,net=program[ni];
 if(act==='addnet')edit(()=>program.push({name:'',tree:seq([])}));
 else if(act==='delnet')edit(()=>{program.splice(ni,1);if(!program.length)program=baseProgram()});
 else if(act==='up'||act==='down')edit(()=>{const j=ni+(act==='up'?-1:1);if(j>=0&&j<program.length)[program[ni],program[j]]=[program[j],program[ni]]});
 else if(act==='delnode')edit(()=>{const f=findNode(net,id);f?.series.items.splice(f.index,1);selectedRef=null;rangeRef=null});
 else if(act==='wrap')edit(()=>createBranch(ni,id,el.dataset.side));
 else if(act==='rangebranch')createBranchRange(ni);
 else if(act==='addpath')edit(()=>{let f=findNode(net,id);if(f?.node.kind==='parallel')f.node.paths.push(seq([]))});
 else if(act==='delpath')edit(()=>{let f=findNode(net,id);if(!f||f.node.kind!=='parallel')return;f.node.paths.splice(+el.dataset.idx,1);if(f.node.paths.length===1)f.series.items.splice(f.index,1,...f.node.paths[0].items)});
}
function locateTarget(e){
 const target=e.target.closest('[data-place], [data-node]');
 if(target)return target;
 const canvas=e.target.closest('.lad-canvas');if(!canvas)return null;
 // Empty wire regions snap to the nearest genuine insertion point on that row.
 let nearest=null,best=Infinity;
 for(const place of canvas.querySelectorAll('[data-place]')){
  const r=place.getBoundingClientRect(),dx=Math.abs(e.clientX-(r.left+r.width/2)),dy=Math.abs(e.clientY-(r.top+r.height/2));
  const score=dx+2*dy;
  if(dy<=29&&dx<=85&&score<best){nearest=place;best=score}
 }
 return nearest;
}
function canDropBranch(ni,target){
 if(target.dataset.node)return !!findNode(program[ni],target.dataset.node);
 return !!eachSeries(program[ni],target.dataset.path||'');
}
function insertBranchAt(ni,target,event){
 if(!canDropBranch(ni,target))return;
 if(target.dataset.node){
  // Drop over a symbol: wrap that instruction in a new parallel circuit.
  const node=target.dataset.node,rect=target.getBoundingClientRect();
  const side=event&&event.clientY<rect.top+rect.height/2?'above':'below';
  edit(()=>createBranch(ni,node,side));
 }else{
  // Drop over a wire: insert a genuine branching junction with two empty paths.
  // Both paths must be populated before the ladder can compile.
  const path=target.dataset.path||'',before=target.dataset.before||'';
  edit(()=>{const s=eachSeries(program[ni],path);if(!s)return;
   const i=before?s.items.findIndex(n=>n.id===before):-1;
   s.items.splice(i<0?s.items.length:i,0,{kind:'parallel',id:uid(),paths:[seq([]),seq([])]});
  });
 }
 toast('Branch inserted. Drag instructions onto each path.');
}
function moveNode(sourceNi,id,destNi,path,before){
 const source=findNode(program[sourceNi],id),dest=eachSeries(program[destNi],path);
 if(!source||!dest)return false;
 // Prevent nesting a node inside itself or one of its descendants.
 if(source.node.kind==='parallel'&&path.split('/').some(p=>p.startsWith(source.node.id+':')))return false;
 if(before===id)return false;
 const destinationIndex=before?dest.items.findIndex(x=>x.id===before):dest.items.length;
 if(before&&destinationIndex<0)return false;
 if(source.series===dest&&(destinationIndex===source.index||destinationIndex===source.index+1))return false;
 edit(()=>{
  const f=findNode(program[sourceNi],id);if(!f)return;
  const moving=f.node;f.series.items.splice(f.index,1);
  const s=eachSeries(program[destNi],path);if(!s)return;
  const i=before?s.items.findIndex(x=>x.id===before):s.items.length;
  s.items.splice(i<0?s.items.length:i,0,moving);
 });
 selectedRef={ni:destNi,id};return true;
}
function insertDragged(type,target,movedId=null,dropEvent=null,sourceNi=null){
 const ni=+target.dataset.n;
 if(type==='BRANCH'){
  if(movedId){toast('Drag a branch from the toolbar to create a new path.');return}
  insertBranchAt(ni,target,dropEvent);return;
 }
 if(target.dataset.node){
  const id=target.dataset.node;
  const rect=target.getBoundingClientRect();
  const before=dropEvent?dropEvent.clientX<rect.left+rect.width/2:true;
  const f=findNode(program[ni],id);if(!f)return;
  if(movedId){
   if(movedId===id)return;
   const insertBefore=before?id:(f.series.items[f.index+1]?.id||'');
   if(!moveNode(sourceNi??ni,movedId,ni,f.path,insertBefore))toast('Choose a different insertion point.');
   return;
  }
  // A new operator dropped on a symbol is inserted next to it, not silently replacing it.
  const insertBefore=before?id:(f.series.items[f.index+1]?.id||'');
  nodeDialog(ni,f.path,insertBefore,null,type);return;
 }
 const path=target.dataset.path||'',before=target.dataset.before||'';
 if(movedId){if(!moveNode(sourceNi??ni,movedId,ni,path,before))toast('Choose a different insertion point.');}
 else nodeDialog(ni,path,before,null,type);
}

function renderWatch(){const rows=(list,input)=>list.map(t=>`<div class="io-row"><span class="dot" data-led="${esc(t.a)}"></span><div class="io-info"><b title="${esc(t.n)}">${esc(t.n)}</b><code>${esc(t.a)}</code></div>${t.kind==='INT'?(input?`<input type="range" data-int-input="${esc(t.a)}" min="${t.min??-32768}" max="${t.max??32767}" value="${read(state,t.a)}" aria-label="${esc(t.n)}"><span data-int-value="${esc(t.a)}">${read(state,t.a)}</span>`:`<span class="value" data-int-value="${esc(t.a)}">${read(state,t.a)}</span>`):input?`<button class="toggle" data-input="${esc(t.a)}" aria-label="Toggle ${esc(t.n)}" aria-pressed="false">0 OFF</button>`:`<span class="value" data-value="${esc(t.a)}">0</span>`}</div>`).join('');$('#watch').innerHTML='<div class="tag-header">Inputs · click or slide</div>'+rows(mission.ins,true)+'<div class="tag-header">Digital outputs</div>'+rows(mission.outs,false)+(mission.mem?.length?'<div class="tag-header">Memory tags · BOOL / INT</div>'+rows(mission.mem,false):'');$('#sequenceMonitor').innerHTML=mission.sequence?'<div class="tag-header">Sequence monitor · current INT</div>'+mission.sequence.map(x=>`<div class="seq-row" data-seq="${x.value}"><code>${x.value}</code> ${esc(x.label)}</div>`).join(''):'';$('#instances').innerHTML=instNames().length?'<div class="tag-header">Instance data</div>'+instNames().map(a=>`<div data-instance="${esc(a)}"></div>`).join(''):''}
function renderPlant(){const k=mission.kind;let scene='';const base=`<defs><linearGradient id="steel" x2="0" y2="1"><stop stop-color="#718b9e"/><stop offset="1" stop-color="#324b5c"/></linearGradient><pattern id="grid" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0H0V18" fill="none" stroke="#3a5262" opacity=".23"/></pattern><linearGradient id="floor" x2="0" y2="1"><stop stop-color="#314656"/><stop offset="1" stop-color="#172934"/></linearGradient></defs><rect x="0" y="0" width="300" height="190" rx="8" fill="url(#grid)"/><path d="M0 154H300V190H0Z" fill="url(#floor)"/><path d="M0 154H300" stroke="#526b79"/><g fill="#7d919d" font-size="8" font-family="monospace"><text x="10" y="15">SIMULATED PROCESS</text><text x="290" y="15" text-anchor="end">CELL 0${current%9+1}</text></g>`;
const motor=(x,y,idx=0)=>`<g transform="translate(${x} ${y})"><rect x="-20" y="-15" width="39" height="31" rx="4" fill="url(#steel)" stroke="#8aa1ad"/><path d="M-12 -12V12M-5 -12V12M2 -12V12M9 -12V12" stroke="#304757" stroke-width="2"/><circle cx="20" cy="0" r="13" fill="#263b49" stroke="#8aa1ad"/><g class="rotor"><path d="M20 -9V9M11 0H29M14 -6L26 6M14 6L26 -6" stroke="#a4b6bf" stroke-width="2"/></g><circle cx="-14" cy="-21" r="4" fill="#667987" data-output="${idx}"/><path d="M-16 16V22H16V16" stroke="#8397a4" fill="none" stroke-width="3"/></g>`;
const conveyor=`<g><path d="M42 113V153M244 113V153M70 127L45 151M216 127L243 151" stroke="#748b9a" stroke-width="6"/><rect x="29" y="98" width="232" height="29" rx="14" fill="#1b2e39" stroke="#8aa0ad" stroke-width="2"/><path class="beltmark" d="M44 101H247M44 124H247" stroke="#8da2af" stroke-width="4" stroke-dasharray="8 10"/><circle cx="44" cy="112" r="10" fill="#516a7a"/><circle cx="246" cy="112" r="10" fill="#516a7a"/><path d="M38 111H50M44 105V119M240 111H252M246 105V119" stroke="#9aaeb9"/><g class="motion"><rect x="70" y="77" width="32" height="21" rx="2" fill="#c58c49" stroke="#edbc78"/><path d="M86 78V97" stroke="#936831"/><rect x="120" y="77" width="32" height="21" rx="2" fill="#c58c49" stroke="#edbc78"/><path d="M136 78V97" stroke="#936831"/></g></g>`;
if(['conveyor','reverse','batch'].includes(k)){scene=conveyor+motor(244,144,k==='batch'?-1:0);if(k==='batch')scene+=`<path d="M154 98V51H183V68" stroke="#9ab0bc" stroke-width="5" fill="none"/><rect x="173" y="65" width="22" height="12" rx="2" fill="#657f8e"/><path d="M184 77V98" stroke="#ffbd65" stroke-dasharray="3 3"/><circle cx="229" cy="48" r="12" fill="#465b66" stroke="#91a4a9" data-output="0"/><text x="229" y="31" text-anchor="middle">BATCH</text>`;else if(k==='reverse')scene+=`<path d="M96 50H195L184 41M195 50L184 59" stroke="#65818f" fill="none" stroke-width="3" data-stroke="0"/><path d="M195 67H96L107 58M96 67L107 76" stroke="#65818f" fill="none" stroke-width="3" data-stroke="1"/>`;else scene+=`<path d="M28 74V56H255V74" fill="none" stroke="#566f7f" stroke-width="3" stroke-dasharray="7 4"/><text x="145" y="48" text-anchor="middle">CONVEYOR LINE</text>`}
else if(k==='traffic'||k==='crossing'){scene=`<rect x="0" y="106" width="300" height="48" fill="#435565"/><path d="M0 131H300" stroke="#e1e6e9" stroke-dasharray="16 12"/><rect x="65" y="23" width="49" height="105" rx="7" fill="#14232b" stroke="#8da1b0"/>${['#ef4444','#fbbf24','#22c55e'].map((c,i)=>`<circle cx="89" cy="${42+i*29}" r="11" fill="${c}" opacity=".18" data-lamp="${i}"/>`).join('')}${k==='crossing'?`<rect x="184" y="47" width="42" height="69" rx="6" fill="#13232b" stroke="#8da1b0"/><circle cx="205" cy="65" r="11" fill="#ef4444" opacity=".18" data-lamp="3"/><circle cx="205" cy="96" r="11" fill="#22c55e" opacity=".18" data-lamp="4"/><path d="M145 107V154M153 107V154M161 107V154M169 107V154" stroke="white" stroke-width="4"/>`:''}<text x="150" y="177" text-anchor="middle">TRAFFIC SIGNAL TRAINER</text>`}else if(k==='panel'||k==='tank'){scene=(k==='tank'?`<rect x="22" y="35" width="91" height="119" rx="6" fill="#233b48" stroke="#a0b2bd"/><rect id="tankFill" x="27" y="149" width="81" height="0" fill="#379bc5"/><text x="67" y="27" text-anchor="middle">LEVEL</text>`:'')+`<rect x="${k==='tank'?130:25}" y="27" width="${k==='tank'?156:250}" height="125" rx="6" fill="url(#steel)" stroke="#a0b2bd"/>${mission.outs.map((o,i)=>{let x=(k==='tank'?150:45)+(i%2)*(k==='tank'?78:120),y=50+Math.floor(i/2)*49;return `<circle cx="${x}" cy="${y}" r="10" fill="${['#22c55e','#ef4444','#fbbf24','#38bdf8'][i%4]}" opacity=".18" data-lamp="${i}"/><text x="${x+14}" y="${y+3}" font-size="7">${esc(o.n.replaceAll('_',' ').slice(0,16))}</text>`}).join('')}`}
else if(k==='filling'||k==='production'){scene=conveyor+`<rect x="126" y="24" width="48" height="33" rx="4" fill="url(#steel)" stroke="#9fb2be"/><g id="processHead"><rect x="144" y="52" width="12" height="29" rx="2" fill="#a6c0d0"/><rect x="133" y="75" width="34" height="9" rx="2" fill="#8299a7"/></g><g id="liquid" opacity="0"><path d="M150 85V104" stroke="#42c9ef" stroke-width="6" stroke-dasharray="4 3"/></g><rect x="139" y="86" width="22" height="23" rx="3" fill="#4fa4b0" opacity=".7"/><text x="150" y="178" text-anchor="middle">${k==='filling'?'BOTTLE FILLING CELL':'MACHINING CELL'}</text>${mission.outs.map((o,i)=>`<circle cx="${24+i*22}" cy="35" r="5" fill="#50d7a7" opacity=".18" data-lamp="${i}"/>`).join('')}`}
else if(k==='fan'){scene=`<rect x="72" y="30" width="156" height="125" rx="12" fill="url(#steel)" stroke="#92a5af"/><circle cx="150" cy="92" r="55" fill="#182936" stroke="#91a6b2" stroke-width="4"/><g class="rotor" fill="#85a1b3"><path d="M150 92Q176 60 183 72Q194 91 150 92Z"/><path d="M150 92Q182 118 168 125Q148 136 150 92Z"/><path d="M150 92Q124 124 117 112Q106 93 150 92Z"/><path d="M150 92Q118 66 132 59Q152 48 150 92Z"/><circle cx="150" cy="92" r="10" fill="#c0d0d8"/></g><path d="M92 155V164H208V155" stroke="#718b9b" stroke-width="5" fill="none"/><circle cx="219" cy="40" r="5" fill="#607784" data-output="0"/><text x="150" y="179" text-anchor="middle">VENTILATION UNIT</text>`}
else if(k==='pack'){scene=`<path d="M38 145V48H278V145" fill="none" stroke="#7994a2" stroke-width="8"/><path d="M38 48H278" stroke="#a0b2bd" stroke-width="3"/><rect x="43" y="70" width="12" height="32" rx="2" fill="#516e7d"/><g id="pusher" class="piston-motion"><rect x="73" y="82" width="95" height="9" rx="2" fill="#b8cbd4" stroke="#6c8998"/><path d="M76 84H164" stroke="#e3edf1" stroke-width="1.6"/><rect x="161" y="70" width="10" height="35" rx="2" fill="url(#steel)" stroke="#b7c8d0"/><path d="M168 73V102" stroke="#cfdae0" stroke-width="2"/></g><rect x="53" y="65" width="72" height="43" rx="5" fill="url(#steel)" stroke="#a9bac6"/><path d="M58 70H120M58 102H120" stroke="#a3b8c5" stroke-width="2"/><rect x="117" y="68" width="11" height="37" rx="2" fill="#8ba3b1" stroke="#b4c6cf"/><path d="M62 57V65M112 57V65" stroke="#72909f" stroke-width="5"/><path d="M62 57V35H112V57" stroke="#628caa" stroke-width="3" fill="none"/><rect x="55" y="31" width="14" height="10" rx="2" fill="#435f70"/><rect x="105" y="31" width="14" height="10" rx="2" fill="#435f70"/><rect x="52" y="121" width="224" height="12" rx="2" fill="#617d8d"/><path d="M68 133V155M259 133V155" stroke="#7e94a3" stroke-width="5"/><path d="M54 121H274" stroke="#9bb1bd" stroke-width="2"/><g class="packing-box"><rect x="177" y="83" width="39" height="38" rx="2" fill="#cb914f" stroke="#e9b776"/><path d="M177 83L187 77H226L216 83Z" fill="#e5b171" stroke="#edc58f"/><path d="M216 83L226 77V115L216 121Z" fill="#a56d35" stroke="#d3a46a"/><path d="M193 83V121M193 83L203 77" stroke="#916331" stroke-width="2"/><path d="M181 113H190" stroke="#f0ce9a" stroke-width="2"/></g><circle cx="263" cy="67" r="5" fill="#627d88" data-output="0"/><text x="150" y="176" text-anchor="middle">PNEUMATIC PUSHER / TRANSFER</text>`}
else if(k==='pump'||k==='staged'){scene=`<path d="M56 49V36H127V49M127 120H173V90H256V65" stroke="#65818f" stroke-width="12" fill="none" stroke-linejoin="round"/><rect x="43" y="48" width="97" height="92" rx="12" fill="#223c4b" stroke="#7895a5" stroke-width="3"/><path d="M46 92Q68 85 91 92T137 92V128Q137 137 128 137H54Q46 137 46 128Z" fill="#398ca4" opacity=".78"/><path d="M46 92Q68 85 91 92T137 92" stroke="#79d3e5" stroke-width="2" fill="none"/><path d="M60 140V152M122 140V152" stroke="#879ba8" stroke-width="6"/><path d="M173 90H256V65" stroke="#65818f" stroke-width="12" fill="none"/><circle cx="173" cy="120" r="24" fill="url(#steel)" stroke="#9cb0ba" stroke-width="2"/><path d="M162 120L181 110V130Z" fill="#cad9e0"/><circle cx="173" cy="120" r="5" fill="#283f4e"/><circle cx="203" cy="113" r="5" fill="#667b86" data-output="${k==='staged'?1:0}"/><path d="M173 90H256V65" stroke="#5d8997" stroke-width="3" stroke-dasharray="6 5" fill="none" class="beltmark" data-stroke="${k==='staged'?1:0}"/>${k==='staged'?motor(92,37,0):''}<text x="91" y="166" text-anchor="middle">TANK</text><text x="173" y="166" text-anchor="middle">PUMP</text>`}
else{scene=`<rect x="95" y="42" width="110" height="106" rx="5" fill="url(#steel)" stroke="#a2b5bf"/><rect x="124" y="87" width="52" height="36" rx="4" fill="#213746" stroke="#8097a3"/><circle cx="139" cy="105" r="5" fill="#8ba0aa"/><circle cx="161" cy="105" r="5" fill="#8ba0aa"/><path d="M150 42V30" stroke="#8196a2" stroke-width="9"/><rect x="130" y="18" width="40" height="25" rx="7" fill="#775b5c" stroke="#a78788" data-output="0"/><path d="M113 26L102 19M187 26L198 19M150 12V5" stroke="#8396a0" stroke-width="2"/><text x="150" y="176" text-anchor="middle">ALARM STATION</text>`}
$('#plant').innerHTML=`<svg viewBox="0 0 300 190" role="img" aria-label="Animated ${esc(k)} process"><g font-size="9" font-family="monospace" fill="#a5b9c4">${base}<g id="machine">${scene}</g></g></svg>`;$('#plantTitle').textContent=({conveyor:'Motor / belt',reverse:'Bidirectional drive',batch:'Part counting station',fan:'Extraction and cooling',pack:'Pneumatic actuator',pump:'Tank and pump',staged:'Mixer and transfer pump',alarm:'Alarm annunciator'})[k]||mission.title;$('#autoPlantWrap').classList.toggle('hidden',!mission.plant);$('#autoPlant').checked=!!mission.plant;}
function updateLive(){document.querySelectorAll('[data-int-value]').forEach(e=>e.textContent=read(state,e.dataset.intValue));document.querySelectorAll('[data-int-input]').forEach(e=>{if(document.activeElement!==e)e.value=read(state,e.dataset.intInput)});document.querySelectorAll('[data-seq]').forEach(e=>e.classList.toggle('active',Number(e.dataset.seq)===read(state,mission.sequenceTag||'%MW10')));const running=mode!=='STOP',flows=state.flows;$('#cpuState').textContent=mode;$('#cpuDot').className='dot '+(mode==='RUN'?'on':mode==='PAUSE'?'pause':'');$('#clock').textContent=`${(state.time/1000).toFixed(1)} s · scan ${state.scan}`;$('#pauseBtn').disabled=mode!=='RUN';$('#stopBtn').disabled=mode==='STOP';$('#runBtn').disabled=mode==='RUN';document.querySelectorAll('[data-led]').forEach(e=>e.classList.toggle('on',read(state,e.dataset.led)));document.querySelectorAll('[data-input]').forEach(e=>{let v=read(state,e.dataset.input);e.textContent=v?'1 ON':'0 OFF';e.classList.toggle('on',v);e.setAttribute('aria-pressed',String(v))});document.querySelectorAll('[data-value]').forEach(e=>{let v=read(state,e.dataset.value);e.textContent=v?'1 TRUE':'0 FALSE';e.classList.toggle('on',v)});document.querySelectorAll('[data-instance]').forEach(e=>{let a=e.dataset.instance,o=program.flatMap(networkOutputs).find(n=>n.a===a),q=state.inst[a];e.textContent=`${a} · Q=${+!!q?.q} · ${o?.type==='CTU'?'CV='+ (q?.cv||0):'ET='+((q?.et||0)/1000).toFixed(1)+'s'}`});document.querySelectorAll('.lad-item').forEach(el=>{const ni=+el.dataset.n,flag=state.flows[ni]?.[el.dataset.node];el.classList.toggle('energized',running&&!!flag)});document.querySelectorAll('[data-lwire]').forEach(el=>{const ni=+el.closest('.lad-network').querySelector('[data-n]').dataset.n;el.classList.toggle('live',running&&!!state.flows[ni]?.[el.dataset.lwire])});
 document.querySelectorAll('[data-instance]').forEach(e=>{const a=e.dataset.instance,o=program.flatMap(networkOutputs).find(x=>x.a===a),q=state.inst[a];e.textContent=`${a} · Q=${+!!q?.q} · ${o?.type==='CTU'?'CV='+(q?.cv||0):'ET='+((q?.et||0)/1000).toFixed(1)+'s'}`});
 const outs=mission.outs.map(t=>read(state,t.a)),active=outs.some(Boolean),machine=$('#machine');if(machine){machine.querySelectorAll('[data-lamp]').forEach(e=>e.setAttribute('opacity',outs[+e.dataset.lamp]?1:.18));let fill=$('#tankFill');if(fill){let h=Number(read(state,'%IW2'))*1.13;fill.setAttribute('height',h);fill.setAttribute('y',149-h)}let head=$('#processHead');if(head)head.setAttribute('transform',`translate(0 ${outs[mission.kind==='production'?2:1]?13:0})`);let liquid=$('#liquid');if(liquid)liquid.setAttribute('opacity',mission.kind==='filling'&&outs[2]?1:0);machine.classList.toggle('moving',mode==='RUN'&&(mission.kind==='batch'?read(state,A(0)):active));machine.classList.toggle('spinning',mode==='RUN'&&active);machine.classList.toggle('reverse',!!outs[1]);machine.querySelectorAll('[data-output]').forEach(e=>e.classList.toggle('machine-on',!!outs[+e.dataset.output]));machine.querySelectorAll('[data-stroke]').forEach(e=>e.setAttribute('stroke',outs[+e.dataset.stroke]?'#48d7b5':'#65818f'));if(mission.kind==='pack'){const was=machine.classList.contains('pushed');if(outs[0]){machine.classList.remove('returning');machine.classList.add('pushed')}else if(was){machine.classList.remove('pushed');machine.classList.add('returning')}}}$('#plantDot').classList.toggle('on',active);$('#plantStatusDot').classList.toggle('on',active);$('#plantStatus').textContent=active?(mission.kind==='reverse'?(outs[0]&&outs[1]?'CONFLICT':outs[1]?'Reverse':'Forward'):mission.kind==='batch'?'Batch complete':'Active'):'Standby';$('#plantMode').textContent=mode==='PAUSE'?'· scan paused':mode==='STOP'?'· CPU stopped':''}
function showCompile(c){$('#checks').innerHTML=`<div class="summary-line ${c.errors.length?'fail':'pass'}">${c.errors.length?`${c.errors.length} compile error(s)`:'Compile successful'}</div>${c.errors.map(x=>`<div class="check-row fail"><span>×</span><span>${esc(x)}</span></div>`).join('')}${c.warnings.map(x=>`<div class="check-row warn"><span>!</span><span>${esc(x)}</span></div>`).join('')}<p>${c.errors.length?'Resolve errors before running.':'Compilation checks structure, not whether your sequence meets the brief.'}</p>`}
function plantTick(){if(!mission.plant||!$('#autoPlant').checked)return;let p=state.plant;let b=state.bits;const move=(key,on,rate=.1)=>p[key]=Math.max(0,Math.min(1,(p[key]||0)+(on?rate:-rate)));const delay=(key,on,threshold=8)=>{p[key]=on?(p[key]||0)+1:0;return p[key]>=threshold};if(mission.plant==='cylinder'){let pos=move('rod',b[B(0)]);b[A(2)]=pos<.01;b[A(3)]=pos>.99}else if(mission.plant==='filling'){let pos=move('nozzle',b[B(1)]);b[A(2)]=pos>.99;b[A(3)]=pos<.01;if(b[B(0)]){if(delay('belt',true,15)){b[A(1)]=!b[A(1)];p.belt=0}}else p.belt=0}else if(mission.plant==='production'){let clamp=move('clamp',b[B(1)]),tool=move('tool',b[B(2)]);b[A(2)]=clamp>.99;b[A(4)]=clamp<.01;b[A(3)]=tool<.01;if(delay('feed',b[B(0)],15))b[A(1)]=true;if(b[B(1)])b[A(1)]=false;if(b[B(3)]){if(delay('exit',true,15)){b[A(5)]=!b[A(5)];p.exit=0}}else p.exit=0}}
function start(step=false){let c=compile(program,mission);if(c.errors.length){showCompile(c);toast('Fix compilation errors first.');return}mode=step?'PAUSE':'RUN';if(step){plantTick();tick(program,state);}updateLive()}
function testProgram(){if(!mission.tests.length)return;const c=compile(program,mission);if(c.errors.length){showCompile(c);return}const results=runTests(program,mission),count=results.filter(r=>r.ok).length,ok=count===results.length;if(ok){saved.done[current]=true;persist();progress()}else{delete saved.done[current];persist();progress()}$('#checks').innerHTML=`<div class="summary-line ${ok?'pass':'fail'}">${ok?'✓ Commissioned successfully':`${count} / ${results.length} test cases passed`}</div>${results.map(r=>`<div class="check-row"><span class="${r.ok?'pass':'fail'}">${r.ok?'✓':'×'}</span><span>${esc(r.name)}<small>${esc(r.detail)}</small></span></div>`).join('')}${c.warnings.map(x=>`<div class="check-row warn"><span>!</span><span>${esc(x)}</span></div>`).join('')}<p>${ok?(current===missions.length-1?'All specified checkpoints passed. Training complete! Return to the main menu to review your progress.':'All specified checkpoints passed. Your next mission is now available. Explain why your network works before progressing.'):'Use the first failing checkpoint to reproduce the condition in the watch table and debug your logic.'} Tests start from a separate reset CPU; your live session is unchanged.</p>`;if(ok)toast(current===missions.length-1?'Capstone commissioned!':'Mission commissioned!')}
// Drag from instruction palette or move an existing operator. Drop targets cover every wire.
$('#editor').addEventListener('click',e=>{
 const a=e.target.closest('[data-act]');if(a){editorAction(a);return}
 const pl=e.target.closest('[data-place]');if(pl){if(selected==='BRANCH')insertBranchAt(+pl.dataset.n,pl);else nodeDialog(+pl.dataset.n,pl.dataset.path||'',pl.dataset.before||'',null,selected);return}
 const op=e.target.closest('[data-node]');if(op){
  const ni=+op.dataset.n,id=op.dataset.node;
  if(e.shiftKey){rangeRef={ni,id};selectedRef||={ni,id};renderEditor();toast('Range selected. Choose Branch selected to create a parallel path.');return}
  selectedRef={ni,id};rangeRef=null;nodeDialog(ni,'','',id,null);
 }
});
$('#editor').addEventListener('change',e=>{if(e.target.matches('[data-comment]')){program[+e.target.dataset.comment].name=e.target.value;persist()}});
$('#tools').addEventListener('click',e=>{const b=e.target.closest('[data-tool]');if(b){selected=b.dataset.tool;renderTools()}else if(e.target.closest('#undoBtn'))undo();else if(e.target.closest('#redoBtn'))undo(true)});
$('#tools').addEventListener('dragstart',e=>{const b=e.target.closest('[data-tool]');if(b){e.dataTransfer.setData('text/plain','tool:'+b.dataset.tool);e.dataTransfer.effectAllowed='copy'}});
$('#editor').addEventListener('dragstart',e=>{const b=e.target.closest('[data-node]');if(b&&!e.target.closest('[data-act]')){
 e.dataTransfer.setData('text/plain','node:'+b.dataset.n+':'+b.dataset.node);e.dataTransfer.setData('application/x-lad-move','1');e.dataTransfer.effectAllowed='move';b.classList.add('dragging');
}});
$('#editor').addEventListener('dragend',()=>{$('#editor').querySelectorAll('.dragging,.drop-hover,.drop-before,.drop-after').forEach(e=>e.classList.remove('dragging','drop-hover','drop-before','drop-after'))});
$('#editor').addEventListener('dragover',e=>{const b=locateTarget(e);if(b){e.preventDefault();e.dataTransfer.dropEffect=e.dataTransfer.types.includes('application/x-lad-move')?'move':'copy';
 $('#editor').querySelectorAll('.drop-hover,.drop-before,.drop-after').forEach(x=>x.classList.remove('drop-hover','drop-before','drop-after'));
 b.classList.add('drop-hover');if(b.dataset.node){const r=b.getBoundingClientRect();b.classList.add(e.clientX<r.left+r.width/2?'drop-before':'drop-after')}
 }});
$('#editor').addEventListener('dragleave',e=>{if(!$('#editor').contains(e.relatedTarget))$('#editor').querySelectorAll('.drop-hover,.drop-before,.drop-after').forEach(x=>x.classList.remove('drop-hover','drop-before','drop-after'))});
$('#editor').addEventListener('drop',e=>{const b=locateTarget(e);if(!b)return;e.preventDefault();
 let raw=e.dataTransfer.getData('text/plain'),moved=null,type=null;
 if(raw.startsWith('tool:'))type=raw.slice(5);
 else if(raw.startsWith('node:')){let parts=raw.split(':');moved=parts[2];type=findNode(program[+parts[1]],moved)?.node.type}
 else if(types[raw])type=raw;
 if(!type||!types[type])return;const source=raw.startsWith('node:')?+raw.split(':')[1]:null;insertDragged(type,b,moved,e,source);
});
$('#missions').addEventListener('click',e=>{let b=e.target.closest('[data-mission]');if(b){openMission(+b.dataset.mission)}});$('#sandboxBtn').onclick=()=>{openMission(missions.length)};$('#nextBtn').onclick=()=>{if(current>=missions.length||!saved.done[current]){toast('Pass the commissioning tests first.');return}if(current===missions.length-1){showMenu();toast('Training complete — all missions commissioned!')}else openMission(current+1)};$('#hintBtn').onclick=()=>{hintLevel=Math.min(hintLevel+1,mission.hints.length);$('#hintBox').classList.remove('hidden');$('#hintBox').innerHTML=`<b>Engineering hint ${hintLevel}/${mission.hints.length}</b>${mission.hints.slice(0,hintLevel).map(h=>`<p>${esc(h)}</p>`).join('')}`};$('#demoBtn').onclick=()=>{
 if(current!==missions.length)return;
 openDialog(`<h3 id="modalTitle">Load a demonstration LAD network?</h3><p>This replaces the current free-lab program. It demonstrates coils in series, a second output branch, and a shared output after the branches. Undo will restore your previous program.</p>${dialogButtons()}`,()=>{
  const C=(type,a)=>({kind:'contact',id:uid(),type,a});
  const O=a=>({kind:'output',id:uid(),type:'COIL',a});
  edit(()=>{program=[{name:'Multiple output coils and parallel paths',tree:seq([
   C('NO','%I0.0'),{kind:'parallel',id:uid(),paths:[
    seq([C('NO','%I0.1'),O('%Q0.0'),O('%Q0.1')]),
    seq([C('NO','%I0.2'),O('%Q0.2')])]},O('%M0.0')])}];});return true;
 });
};
$('#resetBtn').onclick=()=>{openDialog(`<h3 id="modalTitle">Reset this program?</h3><p>This restores the initial network(s) for the current mission. You can undo the reset.</p>${dialogButtons()}`,()=>{edit(()=>program=modernProgram(copy(mission.starter||baseProgram())));return true})};$('#watch').addEventListener('input',e=>{if(e.target.dataset.intInput){state.bits[e.target.dataset.intInput]=Number(e.target.value);updateLive()}});$('#watch').addEventListener('click',e=>{let b=e.target.closest('[data-input]');if(b){let a=b.dataset.input;if(mission.plant&&$('#autoPlant').checked&&((mission.plant==='cylinder'&&[A(2),A(3)].includes(a))||(mission.plant==='filling'&&[A(1),A(2),A(3)].includes(a))||(mission.plant==='production'&&[A(1),A(2),A(3),A(4),A(5)].includes(a)))){toast('Turn off automatic sensors to override this sensor.');return}state.bits[a]=!state.bits[a];updateLive()}});$('#resetInputsBtn').onclick=()=>{mission.ins.forEach(t=>state.bits[t.a]=t.kind==='INT'?Number(t.d):!!t.d);updateLive()};$('#compileBtn').onclick=()=>showCompile(compile(program,mission));$('#runBtn').onclick=()=>start();$('#stepBtn').onclick=()=>start(true);$('#pauseBtn').onclick=()=>{mode='PAUSE';updateLive()};$('#stopBtn').onclick=()=>{const inputs=Object.fromEntries(mission.ins.map(t=>[t.a,read(state,t.a)]));mode='STOP';state=initial(mission);Object.assign(state.bits,inputs);updateLive()};$('#testBtn').onclick=testProgram;$('#modal').addEventListener('click',e=>{if(e.target===$('#modal')||e.target.closest('[data-modal="close"]'))closeDialog();else if(e.target.closest('[data-modal="apply"]')){let res=modalApply?.();if(res===true)closeDialog();else if($('#dialogError'))$('#dialogError').textContent=res||'Check your settings.'}});document.addEventListener('keydown',e=>{if(!$('#modal').classList.contains('hidden')){if(e.key==='Escape')closeDialog();if(e.key==='Enter'&&e.target.tagName==='INPUT'){e.preventDefault();$('#modalCard [data-modal="apply"]')?.click()}return}if(view==='game'&&(e.ctrlKey||e.metaKey)&&!['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)){if(e.key.toLowerCase()==='z'){e.preventDefault();undo(e.shiftKey)}if(e.key.toLowerCase()==='y'){e.preventDefault();undo(true)}}});
$('#helpBtn').onclick=()=>openDialog(`<h3 id="modalTitle">Factory Lab / Ladder editor guide</h3><div class="reference"><h4>1 · Build as in a LAD network</h4><p>Drag NO/NC contacts, coils, timers, counters, integer comparisons and data operations directly onto a wire. Click a wire's + to insert the selected tool. Click any instruction to edit its operands. Drag an existing instruction onto another wire, or onto the left/right half of another instruction, to move it before/after that symbol. Drag the Branch instruction from the toolbar onto a contact or coil to put a parallel path around it; drag Branch onto a wire to create a new parallel junction. Use + parallel path to extend an existing branch. Nested parallel paths and several coils in sequence are supported.</p><h4>2 · Group instructions</h4><p>Click an instruction to select it, then Shift-click another in the same series path. Press Branch selected to place a parallel branch around that entire range. An empty branch is an unintended bypass and must be filled before compiling. Outputs execute at their position in the path; multiple coils may be fed by the same condition. Network execution order matters when the same destination is written more than once.</p><h4>3 · Monitor and commission</h4><p>Use Compile to check operands and branch continuity. Run or Step scan to inspect live ladder power, watch table signals and machine animations. The test runner checks functional checkpoints and unlocks missions when all tests pass. Use Undo / Redo in the toolbox or Ctrl+Z / Ctrl+Y. The main menu retains saved programs and sequential mission progression.</p><h4>4 · Scope</h4><p>This is an educational LAD-style simulator, not a complete implementation of Siemens TIA Portal. It does not connect to hardware, import TIA projects, or validate real machine safety. IEC timer/counter execution is simplified to 100 ms scans. Network topology can express nested series/parallel logic and branches containing several coils, but not every Siemens instruction or advanced data type is modelled.</p></div><div class="modal-actions"><button class="primary" data-modal="close">Close guide</button></div>`,null);
showMenu();setInterval(()=>{if(view==='game'&&mode==='RUN'){plantTick();tick(program,state);updateLive()}},100);

}
boot();
