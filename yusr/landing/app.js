(()=>{
 'use strict';
 const $=(s,root=document)=>root.querySelector(s),$$=(s,root=document)=>[...root.querySelectorAll(s)];
 const copy=window.YusrContent,reduce=matchMedia('(prefers-reduced-motion: reduce)'),dialog=$('#detail-dialog');
 let lang='ar',connection=0,step=0,stage=0,motion=true,returnFocus=null,closing=false,afterClose=null,reveals=null;
 const effects=new Set(),elementEffects=new WeakMap();
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const t=()=>copy[lang],enabled=()=>motion&&!reduce.matches&&!document.hidden;
 const icon=(name,cls='')=>`<img class="${cls}" src="icons/${name}.svg" width="24" height="24" alt="">`;
 const action=(label,attrs)=>`<button class="action-link" type="button" ${attrs}><span>${esc(label)}</span><span class="action-icon">${icon('arrow-up-right')}</span></button>`;
 function play(el,frames,options={}){
  elementEffects.get(el)?.cancel();if(!enabled()||!el.animate)return null;
  const effect=el.animate(frames,{duration:500,easing:'cubic-bezier(.16,1,.3,1)',...options});
  effects.add(effect);elementEffects.set(el,effect);
  const done=()=>{effects.delete(effect);if(elementEffects.get(el)===effect)elementEffects.delete(el);};
  effect.finished.then(done,done);return effect;
 }
 function settle(){[...effects].forEach(e=>{try{e.finish();}catch{e.cancel();}});}
 function enter(el){play(el,[{opacity:0,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}]);}
 function setMenu(open){
  $('.menu-toggle').setAttribute('aria-expanded',String(open));$('.menu-toggle').setAttribute('aria-label',open?t().menuClose:t().menuOpen);
  $('#navigation').classList.toggle('is-open',open);if(open)enter($('#navigation'));
 }
 function renderConnection(animate=false){
  const s=t().connectionOptions[connection];$$('#connection-choices button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===connection)));
  $('#connection-detail').innerHTML=`<h3 class="sr-only">${esc(s.title)}</h3><p>${esc(s.body)}</p>`;if(animate)enter($('#connection-detail'));
 }
 function renderStep(animate=false){
  const s=t().processSteps[step];$$('#process-steps button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===step)));
  $('#process-detail').innerHTML=`<h3>${esc(s.title)}</h3><p>${esc(s.body)}</p>`;
  if(animate){enter($('#process-detail'));play($('#portal-image'),[{transform:'scale(1.025)'},{transform:'scale(1)'}],{duration:1000});}
 }
 function renderJourney(animate=false){
  const c=t(),j=c.journeys[stage];$$('#journey-choices button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===stage)));
  $('#journey-result').innerHTML=`<h3>${esc(j.title)}</h3><p>${esc(j.body)}</p><div class="journey-labels">${j.tags.map(tag=>`<span>${esc(tag)}</span>`).join('')}</div>${action(c.starter,'data-starter')}`;
  if(animate)enter($('#journey-result'));
 }
 function renderMotion(){
  const active=motion&&!reduce.matches;document.documentElement.classList.toggle('motion-paused',!active);
  $('.motion-control').hidden=reduce.matches;$('.motion-control').setAttribute('aria-pressed',String(active));$('.motion-control span').textContent=active?t().pause:t().play;
  window.YusrHero?.setMotion(active);
  if(!active){settle();$$('.reveal').forEach(el=>el.classList.add('shown'));reveals?.disconnect();}
 }
 function render(){
  const c=t();document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.title=c.title;
  $('meta[name="description"]').content=c.description;$('meta[property="og:title"]').content=c.title;$('meta[property="og:description"]').content=c.description;
  $$('[data-i18n]').forEach(el=>{if(typeof c[el.dataset.i18n]==='string')el.innerHTML=c[el.dataset.i18n];});
  $('.language').textContent=lang==='ar'?'EN':'العربية';$('.language').lang=lang==='ar'?'en':'ar';$('.language').setAttribute('aria-label',lang==='ar'?'Switch to English':'التحويل للعربية');
  $$('.brand[href],.footer-brand').forEach(el=>el.setAttribute('aria-label',c.home));$('#navigation').setAttribute('aria-label',c.navLabel);
  $('#capability-cross').innerHTML=c.capabilityNames.map((name,i)=>`<h3 class="cap-cell"><button class="capability-button" type="button" data-service="${i}" aria-haspopup="dialog"><span class="capability-name">${name}</span><span class="capability-meta"><span>${esc(c.capabilityExplore)}</span>${icon('plus')}</span></button></h3>`).join('');
  $('#connection-choices').setAttribute('aria-label',c.connectionGroup);$('#connection-choices').innerHTML=c.connectionOptions.map((s,i)=>`<button type="button" data-connection="${i}" aria-controls="connection-detail" aria-pressed="${i===connection}">${esc(s.name)}</button>`).join('');
  $('#process-steps').innerHTML=c.processSteps.map((s,i)=>`<li><button type="button" data-step="${i}" aria-controls="process-detail" aria-pressed="${i===step}"><span aria-hidden="true">0${i+1}</span>${esc(s.name)}</button></li>`).join('');
  $('#journey-choices').setAttribute('aria-label',c.journeyGroup);$('#journey-choices').innerHTML=c.journeys.map((j,i)=>`<button type="button" class="journey-choice" data-stage="${i}" aria-pressed="${i===stage}" aria-controls="journey-result"><span>${esc(j.name)}</span>${icon('arrow-up-right')}</button>`).join('');
  $('#faq-list').innerHTML=c.faqs.map(([q,a])=>`<details><summary><span>${esc(q)}</span>${icon('plus')}</summary><p>${esc(a)}</p></details>`).join('');
  $('.dialog-close').setAttribute('aria-label',c.close);setMenu(false);renderConnection();renderStep();renderJourney();renderMotion();
 }
 function briefText(){
  const c=t(),j=c.journeys[stage];return `${c.briefHeading}\n\n${c.briefStage}: ${j.name}\n${c.briefFocus}: ${j.title}\n${c.briefScope}: ${j.tags.join(' / ')}\n\n${c.briefQuestions}\n1. ${c.briefQuestion1}\n2. ${c.briefQuestion2}\n3. ${c.briefQuestion3}\n4. ${c.briefQuestion4}\n\n${c.briefNote}`;
 }
 function openDialog(kind,trigger,index=0){
  if(dialog.open||closing)return;const c=t();returnFocus=trigger;
  if(kind==='privacy')$('#dialog-body').innerHTML=`<h2 id="dialog-title">${esc(c.privacyTitle)}</h2><p>${esc(c.privacyBody)}</p>`;
  else if(kind==='service'){
   const s=c.services[index];$('#dialog-body').innerHTML=`<p class="dialog-subtitle">${esc(s.name)}</p><h2 id="dialog-title">${esc(s.title)}</h2><p>${esc(s.body)}</p><ul class="deliverables">${s.items.map(item=>`<li>${icon('check')}<span>${esc(item)}</span></li>`).join('')}</ul><p class="dialog-subtitle">${esc(c.detailScope)}</p>${action(c.serviceCall,'data-discuss')}`;
  }else $('#dialog-body').innerHTML=`<h2 id="dialog-title">${esc(c.briefHeading)}</h2><p>${esc(c.briefIntro)}</p><div class="brief-sheet">${esc(briefText())}</div><div class="dialog-actions"><button type="button" data-copy>${esc(c.copy)}</button><button type="button" data-download>${esc(c.download)}</button></div><p class="dialog-note">${esc(c.notSent)}</p><p class="dialog-status" role="status"></p>`;
  dialog.showModal();dialog.scrollTop=0;$('.dialog-close').focus();play(dialog,[{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:400});
 }
 function closeDialog(callback=null){
  if(!dialog.open||closing)return;closing=true;afterClose=callback;
  const finish=()=>{if(!closing)return;dialog.close();effect?.cancel();closing=false;};
  const effect=play(dialog,[{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(12px)'}],{duration:160,fill:'forwards'});
  if(effect)effect.finished.then(finish,finish);else finish();
 }
 $('.language').addEventListener('click',()=>{settle();lang=lang==='ar'?'en':'ar';render();});
 $('.menu-toggle').addEventListener('click',()=>setMenu($('.menu-toggle').getAttribute('aria-expanded')!=='true'));
 $('#navigation').addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('.menu-toggle').getAttribute('aria-expanded')==='true'){setMenu(false);$('.menu-toggle').focus();}});
 document.addEventListener('click',async e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.service!==undefined){const i=Number(b.dataset.service);if(Number.isInteger(i)&&i>=0&&i<4)openDialog('service',b,i);return;}
  if(b.dataset.connection!==undefined){const i=Number(b.dataset.connection);if(i>=0&&i<2&&i!==connection){connection=i;renderConnection(true);}return;}
  if(b.dataset.step!==undefined){const i=Number(b.dataset.step);if(i>=0&&i<3&&i!==step){step=i;renderStep(true);}return;}
  if(b.dataset.stage!==undefined){const i=Number(b.dataset.stage);if(i>=0&&i<4&&i!==stage){stage=i;renderJourney(true);}return;}
  if(b.hasAttribute('data-starter'))openDialog('starter',b);
  if(b.hasAttribute('data-discuss'))closeDialog(()=>{location.hash='start';$('#start-title').setAttribute('tabindex','-1');$('#start-title').focus({preventScroll:true});});
  if(b.hasAttribute('data-copy')){try{await navigator.clipboard.writeText(briefText());$('.dialog-status').textContent=t().copied;}catch{$('.dialog-status').textContent=t().copyError;}}
  if(b.hasAttribute('data-download')){const url=URL.createObjectURL(new Blob(['\ufeff'+briefText()],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=`yusr-call-starter-${lang}.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('.dialog-status').textContent=t().downloaded;}
 });
 $('.privacy').addEventListener('click',e=>openDialog('privacy',e.currentTarget));$('.dialog-close').addEventListener('click',()=>closeDialog());
 dialog.addEventListener('cancel',e=>{e.preventDefault();closeDialog();});dialog.addEventListener('close',()=>{returnFocus?.isConnected&&returnFocus.focus({preventScroll:true});const callback=afterClose;afterClose=null;callback?.();});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();}});
 $('.motion-control').addEventListener('click',()=>{motion=!motion;renderMotion();});reduce.addEventListener('change',renderMotion);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){settle();$$('.reveal').forEach(el=>el.classList.add('shown'));reveals?.disconnect();}});
 $('#faq-list').addEventListener('toggle',e=>{if(e.target.open)enter($('p',e.target));},true);
 render();
 if('IntersectionObserver' in window&&enabled())try{
  reveals=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{if(isIntersecting){target.classList.add('shown');reveals.unobserve(target);}}),{threshold:.06});
  $$('.reveal').forEach(el=>reveals.observe(el));document.documentElement.classList.add('motion-ready');
 }catch{document.documentElement.classList.remove('motion-ready');reveals?.disconnect();}
 $$('.hero-copy>*').forEach((el,i)=>play(el,[{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:750,delay:i*80,fill:'backwards'}));
})();
