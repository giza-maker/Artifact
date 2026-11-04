(()=>{
 'use strict';
 const $=(s,root=document)=>root.querySelector(s);
 const $$=(s,root=document)=>[...root.querySelectorAll(s)];
 const copy=window.YusrContent;
 let lang='ar',service=0,stage=0,motion=true,returnFocus=null,imageVersion=0,closingDialog=false,revealObserver=null;
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const dialog=$('#starter-dialog');
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const t=()=>copy[lang];
 const effects=new Set(),elementEffects=new WeakMap();
 const motionEnabled=()=>motion&&!reduce.matches&&!document.hidden;
 function play(el,frames,options={}){
  elementEffects.get(el)?.cancel();
  if(!motionEnabled())return null;
  const effect=el.animate(frames,{duration:560,easing:'cubic-bezier(.16,1,.3,1)',...options});
  elementEffects.set(el,effect);effects.add(effect);
  const done=()=>{effects.delete(effect);if(elementEffects.get(el)===effect)elementEffects.delete(el);};
  effect.finished.then(done,done);return effect;
 }
 function animateContent(el){
  [...el.children].forEach((child,i)=>play(child,[{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{delay:i*45,fill:'backwards'}));
 }
 function settleEffects(){[...effects].forEach(effect=>effect.finish());}
 async function swapServiceImage(name,animateChange){
  const version=++imageVersion,src=`assets/${name}.webp`,current=$('#service-image');
  if(current.getAttribute('src')===src)return;
  const incoming=new Image();incoming.alt='';incoming.className='service-image-layer';incoming.decoding='async';incoming.src=src;
  try{await incoming.decode();}catch{return;}
  if(version!==imageVersion)return;
  const scene=$('.service-scene');
  $$('.service-image-layer',scene).forEach(image=>{elementEffects.get(image)?.finish();if(image!==current)image.remove();});
  current.removeAttribute('id');incoming.id='service-image';scene.append(incoming);
  const effect=animateChange?play(incoming,[{opacity:0},{opacity:1}],{duration:700}):null;
  if(effect)effect.finished.then(()=>current.remove(),()=>current.remove());else current.remove();
 }
 function renderService(animateChange=false){
  const c=t(),s=c.services[service];
  $$('#service-list button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===service)));
  $('#service-panel').innerHTML=`<h3 id="service-name">${esc(s.title)}</h3><p>${esc(s.body)}</p><ul class="service-deliverables">${s.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`;
  swapServiceImage(s.image,animateChange);
  if(animateChange)animateContent($('#service-panel'));
 }
 function renderJourney(animateChange=false){
  const c=t(),j=c.journeys[stage];
  $$('#journey-choices button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===stage)));
  $('#journey-result').innerHTML=`<h3>${esc(j.title)}</h3><p>${esc(j.body)}</p><div class="journey-labels">${j.tags.map(tag=>`<span>${esc(tag)}</span>`).join('')}</div><button class="button" type="button" data-starter><span>${esc(c.starter)}</span><span class="arrow" aria-hidden="true">↗</span></button>`;
  if(animateChange)animateContent($('#journey-result'));
 }
 function setMenu(open){
  $('.menu-toggle').setAttribute('aria-expanded',String(open));
  $('.menu-toggle').setAttribute('aria-label',open?t().menuClose:t().menuOpen);
  $('#navigation').classList.toggle('is-open',open);
  if(open)play($('#navigation'),[{opacity:0,transform:'translateY(-8px)'},{opacity:1,transform:'translateY(0)'}],{duration:320});
 }
 function render(){
  const c=t();
  document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.title=c.title;$('meta[name="description"]').content=c.description;$('meta[property="og:title"]').content=c.title;$('meta[property="og:description"]').content=c.description;
  $$('[data-i18n]').forEach(el=>el.innerHTML=c[el.dataset.i18n]||'');
  $('.language').textContent=lang==='ar'?'EN':'عربي';$('.language').lang=lang==='ar'?'en':'ar';$('.language').setAttribute('aria-label',lang==='ar'?'Switch to English':'التحويل للعربية');
  $('.wordmark').setAttribute('aria-label',c.home);$('#navigation').setAttribute('aria-label',c.navLabel);
  $('#service-list').setAttribute('role','group');$('#service-list').setAttribute('aria-label',c.serviceGroup);
  $('#service-list').innerHTML=c.services.map((s,i)=>`<button type="button" class="service-choice" data-service="${i}" aria-controls="service-panel" aria-pressed="${i===service}"><span class="service-number" aria-hidden="true">0${i+1}</span><span class="service-label">${esc(s.name)}</span><span class="service-symbol" aria-hidden="true">+</span></button>`).join('');
  $('#journey-choices').setAttribute('aria-label',c.journeyGroup);
  $('#journey-choices').innerHTML=c.journeys.map((j,i)=>`<button type="button" class="journey-choice" data-stage="${i}" aria-pressed="${i===stage}" aria-controls="journey-result"><span>${esc(j.name)}</span><span class="arrow" aria-hidden="true">↗</span></button>`).join('');
  $('#faq-list').innerHTML=c.faqs.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  $('.dialog-close').setAttribute('aria-label',c.close);
  setMenu(false);renderService();renderJourney();renderMotion();
 }
 function briefText(){
  const c=t(),j=c.journeys[stage];
  return `${c.briefHeading}\n\n${c.briefStage}: ${j.name}\n${c.briefFocus}: ${j.title}\n${c.briefScope}: ${j.tags.join(' / ')}\n\n${c.briefQuestions}\n1. ${c.briefQuestion1}\n2. ${c.briefQuestion2}\n3. ${c.briefQuestion3}\n4. ${c.briefQuestion4}\n\n${c.briefNote}`;
 }
 function openDialog(kind,trigger){
  if(dialog.open||closingDialog)return;
  const c=t();returnFocus=trigger;
  if(kind==='privacy')$('#dialog-body').innerHTML=`<h2 id="dialog-title">${esc(c.privacyTitle)}</h2><p>${esc(c.privacyBody)}</p>`;
  else $('#dialog-body').innerHTML=`<h2 id="dialog-title">${esc(c.starterTitle)}</h2><p>${esc(c.starterIntro)}</p><div class="brief-sheet">${esc(briefText())}</div><div class="dialog-actions"><button type="button" class="button" data-copy>${esc(c.copy)}</button><button type="button" class="button secondary" data-download>${esc(c.download)}</button></div><p class="dialog-note">${esc(c.notSent)}</p><div class="dialog-status" role="status"></div>`;
  dialog.showModal();$('.dialog-close').focus();
  play(dialog,[{opacity:0,transform:'translateY(22px) scale(.985)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:440});
 }
 function closeDialog(){
  if(!dialog.open||closingDialog)return;
  closingDialog=true;
  const finish=()=>{dialog.close();effect?.cancel();closingDialog=false;};
  const effect=play(dialog,[{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(10px)'}],{duration:180,fill:'forwards'});
  if(effect)effect.finished.then(finish,finish);else finish();
 }
 function renderMotion(){
  const enabled=motion&&!reduce.matches;
  document.documentElement.classList.toggle('motion-paused',!enabled);
  $('.motion-control').hidden=reduce.matches;
  $('.motion-control').setAttribute('aria-pressed',String(enabled));
  $('.motion-control [data-i18n]').textContent=enabled?t().pause:t().play;
  if(!enabled){settleEffects();resetTilt();$$('.reveal').forEach(el=>el.classList.add('shown'));revealObserver?.disconnect();}
 }
 $('.language').addEventListener('click',()=>{settleEffects();lang=lang==='ar'?'en':'ar';render();});
 $('.menu-toggle').addEventListener('click',()=>setMenu($('.menu-toggle').getAttribute('aria-expanded')!=='true'));
 $('#navigation').addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('.menu-toggle').getAttribute('aria-expanded')==='true'){setMenu(false);$('.menu-toggle').focus();}});
 document.addEventListener('click',async e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.service!==undefined){const index=Number(b.dataset.service);if(index>=0&&index<4&&index!==service){service=index;renderService(true);}return;}
  if(b.dataset.stage!==undefined){const index=Number(b.dataset.stage);if(index>=0&&index<4&&index!==stage){stage=index;renderJourney(true);}return;}
  if(b.hasAttribute('data-starter'))openDialog('starter',b);
  if(b.hasAttribute('data-copy')){try{await navigator.clipboard.writeText(briefText());$('.dialog-status').textContent=t().copied;}catch{$('.dialog-status').textContent=t().copyError;}}
  if(b.hasAttribute('data-download')){const url=URL.createObjectURL(new Blob(['\ufeff'+briefText()],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=`yusr-project-starter-${lang}.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('.dialog-status').textContent=t().downloaded;}
 });
 $('.privacy').addEventListener('click',e=>openDialog('privacy',e.currentTarget));
 $('.dialog-close').addEventListener('click',closeDialog);
 dialog.addEventListener('cancel',e=>{e.preventDefault();closeDialog();});
 dialog.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();}});
 $('.motion-control').addEventListener('click',()=>{motion=!motion;renderMotion();});
 reduce.addEventListener('change',renderMotion);
 document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('document-hidden',document.hidden);if(document.hidden){settleEffects();resetTilt();$$('.reveal').forEach(el=>el.classList.add('shown'));revealObserver?.disconnect();}});
 const heroArt=$('.hero-art'),tilt=$('.sculpture-tilt');
 let artBounds=null;
 function resetTilt(){artBounds=null;$('.sculpture-tilt').style.removeProperty('transform');}
 heroArt.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&motionEnabled())artBounds=heroArt.getBoundingClientRect();},{passive:true});
 heroArt.addEventListener('pointermove',e=>{
  if(!artBounds||!motionEnabled()||e.pointerType!=='mouse')return;
  const x=Math.max(-1,Math.min(1,(e.clientX-artBounds.left)/artBounds.width*2-1));
  const y=Math.max(-1,Math.min(1,(e.clientY-artBounds.top)/artBounds.height*2-1));
  tilt.style.transform=`translate3d(${x*7}px,${y*5}px,0) rotateX(${-y*4}deg) rotateY(${x*6}deg)`;
 },{passive:true});
 heroArt.addEventListener('pointerleave',resetTilt,{passive:true});
 window.addEventListener('resize',resetTilt,{passive:true});
 document.body.classList.toggle('document-hidden',document.hidden);
 $('#faq-list').addEventListener('toggle',e=>{if(e.target.open)play($('p',e.target),[{opacity:0,transform:'translateY(-6px)'},{opacity:1,transform:'translateY(0)'}],{duration:420});},true);
 render();
 if('IntersectionObserver' in window){
  const heroObserver=new IntersectionObserver(([entry])=>{const visible=entry.isIntersecting;$('.hero').classList.toggle('in-view',visible);if(!visible)resetTilt();},{threshold:.05});heroObserver.observe($('.hero'));
  if(motionEnabled()){
   try{
    revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('shown');revealObserver.unobserve(entry.target);}}),{threshold:.1});
    const targets=$$('.manifesto>* , .section-heading,.service-list,.service-canvas,.enablement-heading,.enablement-art,.enablement-points article,.approach>h2,.process li,.start-heading,.journey-choices,.journey-result,.faq>*');
    targets.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',`${i%3*60}ms`);revealObserver.observe(el);});
    document.documentElement.classList.add('motion-ready');
   }catch{document.documentElement.classList.remove('motion-ready');revealObserver?.disconnect();}
  }
 }
 $$('.hero-copy>*').forEach((el,i)=>play(el,[{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:900,delay:80+i*90,fill:'backwards'}));
 play($('.sculpture-entry'),[{opacity:0,transform:'translate3d(0,34px,0) scale(.94)'},{opacity:1,transform:'translate3d(0,0,0) scale(1)'}],{duration:1500,delay:60,fill:'backwards'});
})();
