(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const label = (ar,en) => document.documentElement.lang === 'ar' ? ar : en;
  let spotlight = 'P003';
  if(!reduced.matches){
    const products=$$('.campaign-product').map(element=>({element,transform:getComputedStyle(element).transform}));
    products.forEach(({element,transform},index)=>element.animate([{opacity:0,transform:'translateY(28px) rotate(0deg) scale(.94)'},{opacity:1,transform}],{duration:950,delay:index*120,easing:'cubic-bezier(.2,.7,.2,1)'}));
  }
  function scrollToShop(){ $('#catalog-title')?.focus({preventScroll:true});$('#shop-section').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'}); }
  $$('[data-brand-edit]').forEach(button=>button.addEventListener('click',()=>{window.NurimiShop?.resetFilters();window.NurimiShop?.setBrand(button.dataset.brandEdit);scrollToShop();}));
  $$('[data-category-edit]').forEach(button=>button.addEventListener('click',()=>{window.NurimiShop?.resetFilters();window.NurimiShop?.setType(button.dataset.categoryEdit);scrollToShop();}));
  function updateSpotlight(id, animate=true){
    const product=window.NurimiShop?.getProducts().find(p=>p.id===id);if(!product)return;
    spotlight=id;const button=$('#campaign-main'),image=$('#campaign-main-image');
    button.dataset.product=id;button.setAttribute('aria-label',label('استكشف ','Explore ')+product.name[document.documentElement.lang]);
    image.src=product.image;image.alt=product.name[document.documentElement.lang];
    const side=$('.campaign-product-side'),sideProduct=window.NurimiShop?.getProducts().find(p=>p.id===(id==='P004'?'P003':'P004'));
    if(sideProduct){side.dataset.product=sideProduct.id;side.setAttribute('aria-label',label('استكشف ','Explore ')+sideProduct.name[document.documentElement.lang]);side.querySelector('img').src=sideProduct.image;side.querySelector('img').alt=sideProduct.name[document.documentElement.lang];}
    if(animate&&!reduced.matches){button.classList.remove('is-changing');requestAnimationFrame(()=>button.classList.add('is-changing'));}
    $$('[data-spotlight]').forEach(tab=>tab.setAttribute('aria-pressed',String(tab.dataset.spotlight===id)));
  }
  $$('[data-spotlight]').forEach(button=>button.addEventListener('click',()=>updateSpotlight(button.dataset.spotlight)));
  $('#campaign-main').addEventListener('animationend',e=>e.currentTarget.classList.remove('is-changing'));
  document.addEventListener('nurimi:products-ready',()=>updateSpotlight(spotlight,false));
  document.addEventListener('nurimi:language-change',()=>{updateSpotlight(spotlight,false);motionLabel();});
  const video=$('#campaign-video'),control=$('#campaign-motion');
  let inView=false, userPaused=Boolean(navigator.connection?.saveData), available=false;
  function motionLabel(){
    const playing=!video.paused;
    control.setAttribute('aria-pressed',String(playing));
    const span=$('[data-motion-label]');span.textContent=playing?label('إيقاف المشهد','Pause the scene'):label('تشغيل المشهد','Play the scene');
  }
  function stopVideo(){video.pause();motionLabel();}
  async function startVideo(){
    if(!available||reduced.matches||document.hidden||userPaused||!inView)return;
    if(!video.src)video.src=video.dataset.videoSrc;
    try{await video.play();video.classList.add('is-playing');}catch{video.classList.remove('is-playing');}
    motionLabel();
  }
  // Only disclose/load the generated film after the asset is actually available.
  fetch(video.dataset.videoSrc,{method:'HEAD'}).then(response=>{
    if(!response.ok)return;available=true;control.hidden=reduced.matches;startVideo();
  }).catch(()=>{});
  control.addEventListener('click',()=>{userPaused=!video.paused;if(userPaused)stopVideo();else startVideo();});
  if('IntersectionObserver'in window)new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)startVideo();else stopVideo();},{threshold:.15}).observe($('.texture-photograph'));
  document.addEventListener('visibilitychange',()=>document.hidden?stopVideo():startVideo());
  reduced.addEventListener('change',()=>{control.hidden=!available||reduced.matches;reduced.matches?stopVideo():startVideo();});
  motionLabel();
})();
