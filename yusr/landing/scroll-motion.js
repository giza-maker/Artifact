(()=>{
 'use strict';
 const root=document.documentElement,gsap=window.gsap,ST=window.ScrollTrigger;
 if(!gsap||!ST)return; // Plain readable page if either local dependency fails.
 gsap.registerPlugin(ST);
 const $=(s,base=document)=>base?.querySelector(s),$$=(s,base=document)=>base?[...base.querySelectorAll(s)]:[];
 const reduce=matchMedia('(prefers-reduced-motion: reduce)'),originals=new Map();
 let active=!root.classList.contains('motion-paused'),media=null,refreshTimer=0,resizeTimer=0,sequence=0;
 const allowed=()=>active&&!reduce.matches&&!document.hidden;
 function restore(){
  media?.revert();media=null;
  originals.forEach((html,el)=>{if(el.isConnected)el.innerHTML=html;});originals.clear();
  root.classList.remove('scroll-motion-ready');
 }
 function lines(el){
  if(!el)return [];
  if(originals.has(el))return $$('.motion-line-inner',el);
  originals.set(el,el.innerHTML);
  const groups=el.innerHTML.split(/<br\s*\/?\s*>/i);
  el.innerHTML=groups.map(html=>`<span class="motion-line"><span class="motion-line-inner">${html}</span></span>`).join(' ');
  return $$('.motion-line-inner',el);
 }
 function words(){
  const p=$('.flow-intro p');if(!p)return [];
  if(originals.has(p))return $$('.flow-word',p);
  originals.set(p,p.innerHTML);
  const text=p.textContent,sr=document.createElement('span'),visual=document.createElement('span');
  sr.className='sr-only';sr.textContent=text;
  visual.className='flow-visual-words';visual.setAttribute('aria-hidden','true');
  text.trim().split(/\s+/).forEach(word=>{const span=document.createElement('span');span.className='flow-word';span.textContent=word+' ';visual.append(span);});
  p.replaceChildren(sr,visual);return $$('.flow-word',p);
 }
 function refresh(){clearTimeout(refreshTimer);refreshTimer=setTimeout(()=>{if(media&&allowed())ST.refresh();},80);}
 function build(){
  restore();if(!allowed())return;
  root.classList.add('scroll-motion-ready');
  const flowWords=words();
  const headingGroups=['#connections-title','#approach-title','#start-title'].map(selector=>({selector,targets:lines($(selector))}));
  media=gsap.matchMedia();
  media.add({desktop:'(min-width:1101px) and (min-height:760px)',compact:'(max-width:1100px), (max-height:759px)'},ctx=>{
   const desktop=ctx.conditions.desktop,scrub=desktop?.65:.3,rtl=root.dir==='rtl';
   const motion=(target,from,to,trigger,start='top 88%',end='center 45%')=>{
    if(!target||(Array.isArray(target)&&!target.length))return;
    return gsap.fromTo(target,from,{...to,ease:'none',scrollTrigger:{id:'yusr-scroll-'+(++sequence),trigger,start,end,scrub,invalidateOnRefresh:true}});
   };
   motion($('.scroll-progress'),{scaleX:0},{scaleX:1,transformOrigin:rtl?'right center':'left center'},document.body,'top top','bottom bottom');
   motion($('.hero-copy'),{y:0,opacity:1},{y:desktop?-85:-35,opacity:.25},'.hero','top top','bottom top');
   motion($('.hero-depth'),{yPercent:0,scale:1},{yPercent:desktop?11:5,scale:1.06},'.hero','top top','bottom top');
   motion(flowWords,{y:12,opacity:desktop?.6:.75},{y:0,opacity:1,stagger:.035},'.flow-intro','top 90%','bottom 48%');
   const caps=$('#capabilities'),cells=$$('.cap-cell',caps),portrait=$('.identity-study img',caps);
   // One bounded desktop scene; no scroll interception or snapping.
   const canPin=desktop&&caps&&caps.getBoundingClientRect().height<innerHeight-190;
   if(canPin){
    const story=gsap.timeline({scrollTrigger:{id:'yusr-scroll-capabilities',trigger:caps,start:'top 125px',end:()=>'+='+Math.min(760,Math.round(innerHeight*.72)),pin:true,pinSpacing:true,scrub,anticipatePin:1,invalidateOnRefresh:true}});
    story.fromTo(cells,{y:72,rotationX:12,opacity:.66},{y:0,rotationX:0,opacity:1,stagger:.14,duration:.7,ease:'none'},0);
    if(portrait)story.fromTo(portrait,{scale:1.13,y:-24},{scale:1,y:0,duration:1.12,ease:'none'},0);
    const intro=$('.capability-intro',caps);
    if(intro)story.fromTo(intro,{y:72},{y:0,duration:.7,ease:'none'},.42);
   }else{
    motion(cells,{y:42,opacity:.72},{y:0,opacity:1,stagger:.09},caps,'top 90%','center 42%');
    motion(portrait,{scale:1.12},{scale:1},'.identity-study','top 92%','center 42%');
   }
   motion($('.connection-visual'),{x:rtl?90:-90,scale:1.08},{x:0,scale:1},'#connections','top 90%','center 48%');
   headingGroups.forEach(({selector,targets})=>{
    const trigger=selector==='#connections-title'?'#connections':selector==='#approach-title'?'#approach':'#start';
    motion(targets,{yPercent:110,opacity:.25},{yPercent:0,opacity:1,stagger:.12},trigger,'top 92%','top 32%');
   });
   motion($('.portal-study'),{y:desktop?75:35},{y:0},'#approach','top 90%','center 42%');
   motion($('#portal-image'),{scale:1.22},{scale:1},'#approach','top 90%','center 42%');
   motion($$('#process-steps li'),{y:30,opacity:.65},{y:0,opacity:1,stagger:.1},'#approach','top 85%','top 30%');
   motion($('.process-rail'),{scaleX:0},{scaleX:1,transformOrigin:rtl?'right center':'left center'},'#process-steps','top 90%','top 50%');
   motion($('.call-planner'),{y:55,opacity:.68},{y:0,opacity:1},'#start','top 85%','top 30%');
   motion($$('#faq-list details'),{y:28,opacity:.7},{y:0,opacity:1,stagger:.08},'#faq-list','top 92%','bottom 72%');
   motion($('.footer-brand img'),{yPercent:24,scale:.94},{yPercent:0,scale:1},'.footer-brand','top 95%','bottom bottom');
  });
  ST.refresh();
 }
 function destroy(){active=false;clearTimeout(refreshTimer);clearTimeout(resizeTimer);restore();}
 function setMotion(value){active=!!value;if(allowed())build();else restore();}
 window.YusrScroll={destroy,setMotion};
 // Lifecycle listeners persist across language rebuilds; contexts own only motion.
 document.addEventListener('visibilitychange',()=>{
  const owned=ST.getAll().filter(trigger=>String(trigger.vars.id).startsWith('yusr-scroll-'));
  if(document.hidden){owned.forEach(trigger=>trigger.getTween()?.pause());}
  else if(allowed()){
   if(!media)build();
   else{ST.refresh();owned.forEach(trigger=>{trigger.update();trigger.getTween()?.play();});}
  }
 });
 reduce.addEventListener('change',()=>{if(allowed())build();else restore();});
 window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(allowed())build();},180);},{passive:true});
 document.addEventListener('load',e=>{if(e.target instanceof HTMLImageElement)refresh();},true);
 document.fonts?.ready.then(refresh);
 build();
})();
