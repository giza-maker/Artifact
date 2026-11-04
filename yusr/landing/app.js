(()=>{
 'use strict';
 const $=(s,root=document)=>root.querySelector(s);
 const $$=(s,root=document)=>[...root.querySelectorAll(s)];
 const copy=window.YusrContent;
 let lang='ar',service=0,stage=0,motion=true,returnFocus=null;
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const dialog=$('#starter-dialog');
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const t=()=>copy[lang];
 const animate=el=>{if(motion&&!reduce.matches)el.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:360,easing:'cubic-bezier(.2,.7,.2,1)'});};
 function renderService(animateChange=false){
  const c=t(),s=c.services[service];
  $$('#service-list button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===service)));
  $('#service-panel').innerHTML=`<h3 id="service-name">${esc(s.title)}</h3><p>${esc(s.body)}</p><ul class="service-deliverables">${s.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`;
  const image=$('#service-image');
  if(!image.getAttribute('src').endsWith(s.image+'.webp')){image.src=`assets/${s.image}.webp`;if(animateChange)animate($('.service-scene'));}
  if(animateChange)animate($('#service-panel'));
 }
 function renderJourney(animateChange=false){
  const c=t(),j=c.journeys[stage];
  $$('#journey-choices button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===stage)));
  $('#journey-result').innerHTML=`<h3>${esc(j.title)}</h3><p>${esc(j.body)}</p><div class="journey-labels">${j.tags.map(tag=>`<span>${esc(tag)}</span>`).join('')}</div><button class="button" type="button" data-starter><span>${esc(c.starter)}</span><span class="arrow" aria-hidden="true">↗</span></button>`;
  if(animateChange)animate($('#journey-result'));
 }
 function setMenu(open){
  $('.menu-toggle').setAttribute('aria-expanded',String(open));
  $('.menu-toggle').setAttribute('aria-label',open?t().menuClose:t().menuOpen);
  $('#navigation').classList.toggle('is-open',open);
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
  const c=t();returnFocus=trigger;
  if(kind==='privacy')$('#dialog-body').innerHTML=`<h2 id="dialog-title">${esc(c.privacyTitle)}</h2><p>${esc(c.privacyBody)}</p>`;
  else $('#dialog-body').innerHTML=`<h2 id="dialog-title">${esc(c.starterTitle)}</h2><p>${esc(c.starterIntro)}</p><div class="brief-sheet">${esc(briefText())}</div><div class="dialog-actions"><button type="button" class="button" data-copy>${esc(c.copy)}</button><button type="button" class="button secondary" data-download>${esc(c.download)}</button></div><p class="dialog-note">${esc(c.notSent)}</p><div class="dialog-status" role="status"></div>`;
  dialog.showModal();$('.dialog-close').focus();
 }
 function closeDialog(){dialog.close();}
 function renderMotion(){
  const enabled=motion&&!reduce.matches;
  document.documentElement.classList.toggle('motion-paused',!enabled);
  $('.motion-control').hidden=reduce.matches;
  $('.motion-control').setAttribute('aria-pressed',String(enabled));
  $('.motion-control [data-i18n]').textContent=enabled?t().pause:t().play;
  if(!enabled)document.getAnimations().filter(a=>a.effect?.target?.closest?.('.hero-copy,.service-panel,.service-scene,.journey-result')).forEach(a=>a.finish());
 }
 $('.language').addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';render();});
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
 dialog.addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();}});
 $('.motion-control').addEventListener('click',()=>{motion=!motion;renderMotion();});
 reduce.addEventListener('change',renderMotion);
 document.addEventListener('visibilitychange',()=>document.body.classList.toggle('document-hidden',document.hidden));
 render();
 if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('shown');observer.unobserve(entry.target);}}),{threshold:.1});
  $$('.manifesto>* , .section-heading,.service-layout,.enablement-heading,.enablement-art,.enablement-points,.approach>*,.start-heading,.journey,.faq>*').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
  const heroObserver=new IntersectionObserver(([entry])=>$('.hero').classList.toggle('in-view',entry.isIntersecting),{threshold:.05});heroObserver.observe($('.hero'));
 }
 if(motion&&!reduce.matches)$$('.hero-copy>*').forEach((el,i)=>el.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:80*i,easing:'cubic-bezier(.2,.7,.2,1)',fill:'backwards'}));
})();
