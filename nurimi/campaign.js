(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const label = (ar,en) => document.documentElement.lang === 'ar' ? ar : en;
  const local = value => value?.[document.documentElement.lang] || value?.en || '';
  const safe = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arrow = '<svg class="icon arrow" aria-hidden="true"><use href="assets/icons.svg#arrow-left"></use></svg>';
  const makerEdits = {
    Anua: {
      key:'anua', ar:'أنوا', ids:['P008','P013','P014'],
      title:{ar:'من أول تنظيف لآخر ترطيب.',en:'From first cleanse to final layer.'},
      description:{ar:'تونر هارتليف، زيت التنظيف، وعناية بيتش. اختيارات لخطوات مختلفة من روتينك.',en:'Heartleaf toner, cleansing oil and Peach care. Explore the different steps in Anua’s range.'}
    },
    Arencia: {
      key:'arencia', ar:'أرينسيا', ids:['P003','P004','P002'],
      title:{ar:'خطوة السيروم، بطريقتك.',en:'Your take on the serum step.'},
      description:{ar:'تعرّف على بوسترات PDRN، فيتامين سي، والريتينال، ومكونات كل اختيار.',en:'Get to know PDRN, Vitamin C and Retinal Booster Shots, with the ingredients behind each choice.'}
    },
    Celimax: {
      key:'celimax', ar:'سيليماكس', ids:['P001','P005','P021'],
      title:{ar:'تعرّف على عناية فيتا-إيه.',en:'Get to know the Vita-A range.'},
      description:{ar:'سيروم، بوستر، وكريم ليلي. قارن صيغ الريتينول والريتينال واقرأ تعليمات كل منتج.',en:'A serum, booster and night cream. Compare retinol and retinal formats, and read each product’s directions.'},
      note:{ar:'خيارات للمقارنة، وليست روتينًا لاستخدامها معًا.',en:'Alternatives to compare, not a routine to layer together.'}
    },
    Mixa: {
      key:'mixa', ar:'ميكسا', ids:['P022','P023'],
      title:{ar:'عناية تمتد أبعد من الوجه.',en:'Care beyond your face.'},
      description:{ar:'سيراميد بروتكت وسيكا ريباراسيون. كريمات متعددة الاستخدام للوجه واليدين والجسم.',en:'Ceramide Protect and Cica Réparation. Multi-use creams for the face, hands and body.'}
    }
  };
  let selectedMaker = 'Anua';
  let makerStatus = 'loading';
  function scrollToShop(){
    $('#catalog-title')?.focus({preventScroll:true});
    $('#shop-section')?.scrollIntoView({behavior:reduced.matches?'auto':'smooth',block:'start'});
  }
  function countLabel(count){
    if(document.documentElement.lang!=='ar')return `${count} ${count===1?'pick':'picks'}`;
    if(count===2)return 'اختياران';
    return `${new Intl.NumberFormat('ar-SA').format(count)} ${count<=10?'اختيارات':'اختيارًا'}`;
  }
  function renderMaker(announce=false){
    const edit=makerEdits[selectedMaker], panel=$('#maker-panel');
    if(!panel)return;
    panel.dataset.makerWorld=edit.key;
    $$('[data-maker-select]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.makerSelect===selectedMaker)));
    const products=window.NurimiShop?.getProducts() || [];
    if(products.length)makerStatus='ready';
    const picks=edit.ids.map(id=>products.find(p=>p.id===id)).filter(Boolean);
    if(!picks.length){
      const loading=makerStatus==='loading';
      panel.setAttribute('aria-busy',String(loading));
      panel.innerHTML=`<div class="maker-panel-loading"><h3 id="maker-panel-title">${loading?label('تُحمّل تفاصيل التشكيلة.','Loading the collection.'):label('تعذر عرض تفاصيل التشكيلة.','Collection details are unavailable.')}</h3>${loading?'':`<p>${label('تحقق من الاتصال وأعد المحاولة.','Check your connection and try again.')}</p><button type="button" class="maker-collection-link" data-retry-products>${label('إعادة المحاولة','Try again')}</button>`}</div>`;
      return;
    }
    panel.setAttribute('aria-busy','false');
    const count=products.filter(p=>p.brand===selectedMaker).length;
    panel.innerHTML=`<div class="maker-panel-body"><div class="maker-panel-copy"><p class="maker-panel-count"><bdi>${safe(selectedMaker)}</bdi> / ${countLabel(count)}</p><h3 id="maker-panel-title">${safe(local(edit.title))}</h3><p>${safe(local(edit.description))}</p>${edit.note?`<p class="maker-panel-note">${safe(local(edit.note))}</p>`:''}<button class="maker-collection-link" type="button" data-brand-edit="${safe(selectedMaker)}">${label('تسوّق '+edit.ar,'Shop '+selectedMaker)} ${arrow}</button></div><div class="maker-products" data-count="${picks.length}">${picks.map(p=>`<button class="maker-product" type="button" data-product="${safe(p.id)}" aria-label="${safe(label('استكشف ','Explore ')+local(p.name))}"><span class="maker-product-image"><img src="${safe(p.sceneImage||p.image)}" alt="" width="1024" height="1024" loading="lazy" decoding="async"></span><span class="maker-product-name">${safe(local(p.shortName||p.name))}</span><span class="maker-product-size">${safe(local(p.variantLabel))}</span></button>`).join('')}</div></div>`;
    $('[data-maker-status]').textContent=announce?label('تشكيلة '+edit.ar+'، '+countLabel(count),selectedMaker+' collection, '+countLabel(count)):'';
  }
  document.addEventListener('click',event=>{
    if(event.target.closest('[data-retry-products]')){makerStatus='loading';renderMaker();return;}
    const maker=event.target.closest('[data-maker-select]');
    if(maker){
      if(maker.dataset.makerSelect===selectedMaker)return;
      selectedMaker=maker.dataset.makerSelect;
      renderMaker(true);
      return;
    }
    const brand=event.target.closest('[data-brand-edit]');
    if(brand){
      window.NurimiShop?.resetFilters();window.NurimiShop?.setBrand(brand.dataset.brandEdit);scrollToShop();
      return;
    }
    const category=event.target.closest('[data-category-edit]');
    if(category){window.NurimiShop?.resetFilters();window.NurimiShop?.setType(category.dataset.categoryEdit);scrollToShop();}
  });
  document.addEventListener('nurimi:products-ready',event=>{makerStatus=event.detail?.error?'error':'ready';renderMaker();});
  document.addEventListener('nurimi:language-change',()=>{renderMaker();motionLabel();});
  renderMaker();

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
