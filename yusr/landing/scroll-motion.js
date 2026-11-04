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
  for(const token of text.match(/\S+\s*|\s+/g)||[]){const span=document.createElement('span');span.className='flow-word';span.textContent=token;visual.append(span);}
  p.replaceChildren(sr,visual);return $$('.flow-word',p);
 }
 // Asset refresh waits for native scrolling to finish instead of interrupting anchor travel.
 function refresh(){clearTimeout(refreshTimer);refreshTimer=setTimeout(()=>{if(media&&allowed())ST.refresh(true);},80);}
 function build(){
  restore();if(!allowed())return;
  root.classList.add('scroll-motion-ready');
  const flowWords=words();
  const headingGroups=['#connections-title','#approach-title','#start-title'].map(selector=>({selector,targets:lines($(selector))}));
  media=gsap.matchMedia();
  media.add({desktop:'(min-width:1101px) and (min-height:760px)',compact:'(max-width:1100px), (max-height:759px)'},ctx=>{
   const desktop=ctx.conditions.desktop,phone=innerWidth<768,scrub=desktop?.85:.55,rtl=root.dir==='rtl',direction=rtl?1:-1;
   const motion=(target,from,to,trigger,start='top 88%',end='center 45%')=>{
    if(!target||(Array.isArray(target)&&!target.length))return;
    // Initialize every staggered target, including later lines before their tween starts.
    gsap.set(target,from);
    return gsap.fromTo(target,from,{...to,ease:'none',scrollTrigger:{id:'yusr-scroll-'+(++sequence),trigger,start,end,scrub,invalidateOnRefresh:true}});
   };
   motion($('.scroll-progress'),{scaleX:0},{scaleX:1,transformOrigin:rtl?'right center':'left center'},document.body,'top top','bottom bottom');
   const scene=(trigger,start='top 110%',end='top 24%')=>gsap.timeline({scrollTrigger:{id:'yusr-scroll-'+(++sequence),trigger,start,end,scrub,invalidateOnRefresh:true}});
   const aperture=(timeline,base,position=0,duration=.8)=>timeline.fromTo($$('.media-shutter',base),{scaleY:.8},{scaleY:0,duration,ease:'power2.inOut'},position);
   // Camera push and rising copy share the hero's exit, carrying into the manifesto.
   const hero=scene('.hero','top top','bottom 15%');
   hero.fromTo($('.hero-copy'),{y:0,scale:1,opacity:1},{y:phone?-110:-180,scale:.9,opacity:.08,duration:1,ease:'none'},0);
   hero.fromTo($('.hero-depth'),{yPercent:0,scale:1},{yPercent:10,scale:1.32,duration:1,ease:'none'},0);
   motion($('.flow-intro'),{y:phone?50:95},{y:-15},'.flow-intro','top 110%','bottom 62%');
   motion(flowWords,{opacity:.24},{opacity:1,stagger:.05},'.flow-intro','top 100%','bottom 60%');
   const caps=$('#capabilities'),cells=$$('.cap-cell',caps),portrait=$('.identity-study img',caps);
   // One bounded desktop scene; no scroll interception or snapping.
   const canPin=desktop&&caps&&caps.getBoundingClientRect().height<innerHeight-190;
   if(canPin){
    const story=gsap.timeline({scrollTrigger:{id:'yusr-scroll-capabilities',trigger:caps,start:'top 125px',end:()=>'+='+Math.min(1100,Math.round(innerHeight*1.12)),pin:true,pinSpacing:true,scrub,anticipatePin:1,invalidateOnRefresh:true}});
    const folded={y:140,scale:.9,rotationX:8,opacity:.45};
    gsap.set(cells,folded);
    story.fromTo(cells,folded,{y:0,scale:1,rotationX:0,opacity:1,stagger:.12,duration:.85,ease:'power1.out'},.18);
    if(portrait)story.fromTo(portrait,{scale:1.5,y:-65},{scale:1,y:0,duration:1.39,ease:'none'},0);
    aperture(story,$('.identity-frame'),0,.7);
    const intro=$('.capability-intro',caps);
    if(intro)story.fromTo(intro,{y:140},{y:0,duration:.85,ease:'power1.out'},.54);
   }else{
    motion(cells,{y:phone?75:110,scale:.93,opacity:.5},{y:0,scale:1,opacity:1,stagger:.1},'.capability-cross','top 95%','bottom 60%');
    const identity=scene('.identity-study','top 105%','top 26%');
    identity.fromTo(portrait,{scale:1.4,y:-45},{scale:1,y:0,duration:1,ease:'none'},0);
    aperture(identity,$('.identity-frame'),0,.85);
   }
   // Paired handoffs: outgoing material recedes as the next image opens.
   // Separate parent/child targets prevent entry and exit tweens fighting on reverse scroll.
   const connection=scene('#connections');
   const connectionExit=scene('#connections','top 84%','top 8%');
   connectionExit.fromTo($('.identity-study'),{y:phone?0:26,scale:1,opacity:1},{y:phone?65:140,scale:.94,opacity:.28,duration:1,ease:'none'},0);
   connectionExit.fromTo($('.capability-cross'),{y:0,opacity:1},{y:phone?-45:-95,opacity:.55,duration:1,ease:'none'},0);
   connection.fromTo($('.connection-visual'),{x:direction*(phone?75:190),y:phone?65:135,scale:1.22,rotation:direction*2.5},{x:0,y:0,scale:1,rotation:0,duration:1,ease:'power1.out'},0);
   aperture(connection,$('.connection-visual'),.05,.85);
   headingGroups.forEach(({selector,targets})=>{
    const trigger=selector==='#connections-title'?'.connection-copy':selector==='#approach-title'?'.approach-copy':'.start-title';
    motion(targets,{yPercent:125,rotation:direction*2,opacity:.12},{yPercent:0,rotation:0,opacity:1,stagger:.16},trigger,'top 100%','top 52%');
   });
   const approach=scene('#approach','top 82%','top 12%');
   approach.fromTo($('.connection-stage'),{y:0,scale:1,opacity:1},{y:phone?75:125,scale:.94,opacity:.24,duration:1,ease:'none'},0);
   approach.fromTo($('.connection-copy'),{y:0,opacity:1},{y:phone?-35:-85,opacity:.6,duration:1,ease:'none'},0);
   const portal=scene('.portal-study','top 110%','top 22%');
   portal.fromTo($('.portal-frame'),{y:phone?95:180,scale:1.12,rotation:-direction*3},{y:0,scale:1,rotation:0,duration:1,ease:'power1.out'},0);
   portal.fromTo($('#portal-image'),{scale:1.4},{scale:1,duration:1,ease:'none'},0);
   aperture(portal,$('.portal-frame'),0,.9);
   motion($$('#process-steps li'),{y:55,opacity:.3},{y:0,opacity:1,stagger:.12},'.approach-copy','top 90%','top 28%');
   motion($('.process-rail'),{scaleX:0},{scaleX:1,transformOrigin:rtl?'right center':'left center'},'#process-steps','top 90%','top 50%');
   const start=scene('#start','top 85%','top 15%');
   start.fromTo($('.portal-study'),{y:0,scale:1,opacity:1},{y:phone?60:110,scale:.94,opacity:.28,duration:1,ease:'none'},0);
   motion($('.call-planner'),{y:phone?85:150,opacity:.35},{y:0,opacity:1},'.call-planner','top 100%','top 32%');
   motion($$('#faq-list details'),{y:55,opacity:.4},{y:0,opacity:1,stagger:.1},'#faq-list','top 100%','bottom 72%');
   motion($('.footer-brand img'),{yPercent:65,scale:.85},{yPercent:0,scale:1},'.footer-brand','top 100%','bottom bottom');
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
