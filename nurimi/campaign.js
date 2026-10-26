(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const label = (ar,en) => document.documentElement.lang === 'ar' ? ar : en;
  const local = value => value?.[document.documentElement.lang] || value?.en || '';
  const safe = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="assets/icons.svg#${name}"></use></svg>`;
  const arrow = '<svg class="icon arrow" aria-hidden="true"><use href="assets/icons.svg#arrow-left"></use></svg>';
  const makerEdits = {
    Anua:{key:'anua',ar:'أنوا',ids:['P008','P013','P014'],title:{ar:'التنظيف، التونر، والترطيب.',en:'From first cleanse to final layer.'},description:{ar:'تشكيلة تشمل تونر هارتليف وزيت التنظيف ومنتجات بيتش. تعرّف على مكونات كل منتج وطريقة استخدامه.',en:'Heartleaf toner, cleansing oil and Peach care. Explore the different steps in Anua’s range.'}},
    Arencia:{key:'arencia',ar:'أرينسيا',ids:['P003','P004','P002'],title:{ar:'خيارات مختلفة لخطوة السيروم.',en:'Your take on the serum step.'},description:{ar:'بوسترات PDRN وفيتامين سي والريتينال. اختر منتجًا واعرف مكوناته وطريقة استخدامه.',en:'Get to know PDRN, Vitamin C and Retinal Booster Shots, with the ingredients behind each choice.'}},
    Celimax:{key:'celimax',ar:'سيليماكس',ids:['P001','P005','P021'],title:{ar:'تعرّف على مجموعة فيتا-إيه.',en:'Get to know the Vita-A range.'},description:{ar:'سيروم، بوستر، وكريم ليلي بصيغ مختلفة من الريتينول والريتينال.',en:'A serum, booster and night cream. Compare retinol and retinal formats, and read each product’s directions.'},note:{ar:'للمقارنة بين الخيارات، وليس لاستخدامها جميعًا في روتين واحد.',en:'Alternatives to compare, not a routine to layer together.'}},
    Mixa:{key:'mixa',ar:'ميكسا',ids:['P022','P023'],title:{ar:'للوجه واليدين والجسم.',en:'Care beyond your face.'},description:{ar:'تعرّف على كريمات سيراميد بروتكت وسيكا ريبير ومكوناتها.',en:'Ceramide Protect and Cica Réparation. Multi-use creams for the face, hands and body.'}}
  };
  const makerNames=Object.keys(makerEdits), selectedProducts={};
  const hashMaker=()=>makerNames.find(name=>location.hash==='#makers-'+makerEdits[name].key);
  let selectedMaker=hashMaker()||'Anua', makerStatus='loading', mediaRequest=0, motions=[];
  let initialJump=location.hash==='#makers'||Boolean(hashMaker());
  function announce(message){$('[data-maker-status]').textContent=message;}
  function animateReveal(elements){
    motions.forEach(animation=>animation.cancel());motions=[];
    if(reduced.matches)return;
    elements.filter(Boolean).forEach((element,index)=>motions.push(element.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:index?260:420,easing:'cubic-bezier(.2,.7,.2,1)'})));
  }
  function scrollToShop(){ $('#catalog-title')?.focus({preventScroll:true});$('#shop-section')?.scrollIntoView({behavior:reduced.matches?'auto':'smooth',block:'start'}); }
  function scrollToMaker(instant=false){const section=$('#makers');if(!section)return;const top=section.getBoundingClientRect().top+window.scrollY;$('#makers-title')?.focus({preventScroll:true});window.scrollTo({top,behavior:instant||reduced.matches?'instant':'smooth'});}
  function countLabel(count){
    if(document.documentElement.lang!=='ar')return `${count} ${count===1?'product':'products'}`;
    if(count===2)return 'منتجان';
    return `${new Intl.NumberFormat('ar-SA').format(count)} ${count<=10?'منتجات':'منتجًا'}`;
  }
  function productBenefits(product){return (product.breakdown?.benefits||[]).slice(0,2).map(benefit=>`<li>${icon('check')}<span>${safe(local(benefit.title))}</span></li>`).join('');}
  function syncNavigation(){
    const index=makerNames.indexOf(selectedMaker), edit=makerEdits[selectedMaker];
    $('.maker-presentation').dataset.makerWorld=edit.key;
    $('#maker-brand-select').value=selectedMaker;
    $('[data-maker-page]').textContent=`${index+1} / ${makerNames.length}`;
    $$('[data-maker-step]').forEach(button=>{
      const target=makerNames[(index+Number(button.dataset.makerStep)+makerNames.length)%makerNames.length];
      const title=Number(button.dataset.makerStep)<0?label('العلامة السابقة: ','Previous brand: '):label('العلامة التالية: ','Next brand: ');
      button.setAttribute('aria-label',title+label(makerEdits[target].ar,target));button.title=title+label(makerEdits[target].ar,target);
    });
  }
  function renderMaker({speak=false,animate=false}={}){
    ++mediaRequest;syncNavigation();
    const edit=makerEdits[selectedMaker], panel=$('#maker-panel'), products=window.NurimiShop?.getProducts()||[];
    if(products.length)makerStatus='ready';
    const picks=edit.ids.map(id=>products.find(p=>p.id===id)).filter(Boolean);
    if(!picks.length){
      const loading=makerStatus==='loading';panel.setAttribute('aria-busy',String(loading));
      panel.innerHTML=`<div class="maker-panel-loading"><h3 id="maker-panel-title">${loading?label('جارٍ تحميل المنتجات…','Loading the collection.'):label('تعذّر تحميل المنتجات.','Collection details are unavailable.')}</h3>${loading?'':`<p>${label('تحقق من اتصالك بالإنترنت، ثم أعد المحاولة.','Check your connection and try again.')}</p><button type="button" class="maker-collection-link" data-retry-products>${label('إعادة المحاولة','Try again')}</button>`}</div>`;
      return;
    }
    const active=picks.find(p=>p.id===selectedProducts[selectedMaker])||picks[0];selectedProducts[selectedMaker]=active.id;
    const count=products.filter(p=>p.brand===selectedMaker).length;
    panel.setAttribute('aria-busy','false');
    panel.innerHTML=`<div class="maker-stage-body"><div class="maker-story"><p class="maker-panel-count"><bdi>${safe(selectedMaker)}</bdi><span>${countLabel(count)}</span></p><h3 id="maker-panel-title">${safe(local(edit.title))}</h3><p>${safe(local(edit.description))}</p>${edit.note?`<p class="maker-panel-note">${safe(local(edit.note))}</p>`:''}</div><div class="maker-stage-gallery"><figure class="maker-featured-image" id="maker-featured-image"><img data-maker-image src="${safe(active.sceneImage||active.image)}" alt="${safe(local(active.name))}" width="1024" height="1024" decoding="async"></figure><div class="maker-thumbnails" role="group" aria-label="${safe(label('اختر منتجًا من '+edit.ar,'Choose a '+selectedMaker+' product'))}" aria-controls="maker-featured-image">${picks.map(p=>`<button type="button" data-featured-product="${safe(p.id)}" aria-pressed="${p.id===active.id}" aria-label="${safe(label('اعرض ','Preview ')+local(p.name))}" aria-controls="maker-featured-image"><img src="${safe(p.sceneImage||p.image)}" alt="" width="1024" height="1024" decoding="async"></button>`).join('')}</div><p class="maker-gallery-hint">${label('اختر منتجًا لعرضه هنا.','Select a product for a closer look.')}</p></div><div class="maker-feature-info"><div class="maker-feature-heading"><h4 data-maker-product-name>${safe(local(active.shortName||active.name))}</h4><span data-maker-product-size>${safe(local(active.variantLabel))}</span></div><p data-maker-product-intro>${safe(local(active.breakdown?.intro||active.description))}</p><ul class="maker-feature-benefits" data-maker-product-benefits>${productBenefits(active)}</ul><div class="maker-feature-actions"><button class="button button-plum" type="button" data-maker-detail data-product="${safe(active.id)}">${label('تفاصيل المنتج','Product details')} ${arrow}</button><button class="maker-collection-link" type="button" data-brand-edit="${safe(selectedMaker)}">${label('كل منتجات '+edit.ar,'Shop all '+selectedMaker)} ${arrow}</button></div></div></div>`;
    if(animate)animateReveal([$('.maker-stage-body')]);
    announce(speak?label('مجموعة '+edit.ar+'، '+countLabel(count),selectedMaker+' collection, '+countLabel(count)):'');
  }
  async function selectProduct(id){
    const edit=makerEdits[selectedMaker];if(!edit.ids.includes(id))return;
    if(selectedProducts[selectedMaker]===id){++mediaRequest;$('#maker-featured-image')?.setAttribute('aria-busy','false');return;}
    const product=window.NurimiShop?.getProducts().find(p=>p.id===id);if(!product)return;
    const request=++mediaRequest, maker=selectedMaker, stage=$('#maker-featured-image');stage.setAttribute('aria-busy','true');
    const next=new Image();next.src=product.sceneImage||product.image;
    try{await next.decode();}catch{if(request===mediaRequest){stage.setAttribute('aria-busy','false');announce(label('تعذّر عرض الصورة. أعد المحاولة.','The image could not load. Try again.'));}return;}
    if(request!==mediaRequest||maker!==selectedMaker)return;
    selectedProducts[maker]=id;
    const image=$('[data-maker-image]');image.src=next.src;image.alt=local(product.name);
    $('[data-maker-product-name]').textContent=local(product.shortName||product.name);
    $('[data-maker-product-size]').textContent=local(product.variantLabel);
    $('[data-maker-product-intro]').textContent=local(product.breakdown?.intro||product.description);
    $('[data-maker-product-benefits]').innerHTML=productBenefits(product);
    $('[data-maker-detail]').dataset.product=id;
    $$('[data-featured-product]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.featuredProduct===id)));
    stage.setAttribute('aria-busy','false');animateReveal([image,$('.maker-feature-info')]);
    announce(label('نعرض الآن: ','Now showing: ')+local(product.name));
  }
  function selectMaker(name,options={}){if(!makerEdits[name])return;selectedMaker=name;renderMaker(options);}
  function syncMakerHash(){if(location.hash.startsWith('#makers'))history.replaceState(history.state,'','#makers-'+makerEdits[selectedMaker].key);}
  document.addEventListener('click',event=>{
    if(event.target.closest('[data-retry-products]')){makerStatus='loading';renderMaker();return;}
    const jump=event.target.closest('[data-maker-jump]');
    if(jump){
      if(event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
      event.preventDefault();initialJump=false;
      selectMaker(jump.dataset.makerJump||selectedMaker,{speak:true,animate:true});
      if(location.hash!==jump.hash)history.pushState({world:'shop'},'',jump.hash);
      scrollToMaker();return;
    }
    const step=event.target.closest('[data-maker-step]');
    if(step){initialJump=false;const index=makerNames.indexOf(selectedMaker);selectMaker(makerNames[(index+Number(step.dataset.makerStep)+makerNames.length)%makerNames.length],{speak:true,animate:true});syncMakerHash();return;}
    const product=event.target.closest('[data-featured-product]');if(product){selectProduct(product.dataset.featuredProduct);return;}
    const brand=event.target.closest('[data-brand-edit]');
    if(brand){window.NurimiShop?.resetFilters();window.NurimiShop?.setBrand(brand.dataset.brandEdit);scrollToShop();return;}
    const category=event.target.closest('[data-category-edit]');if(category){window.NurimiShop?.resetFilters();window.NurimiShop?.setType(category.dataset.categoryEdit);scrollToShop();}
  });
  $('#maker-brand-select').addEventListener('change',event=>{initialJump=false;selectMaker(event.target.value,{speak:true,animate:true});syncMakerHash();});
  document.addEventListener('nurimi:products-ready',event=>{makerStatus=event.detail?.error?'error':'ready';renderMaker();if(initialJump){initialJump=false;requestAnimationFrame(()=>scrollToMaker(true));}});
  document.addEventListener('nurimi:language-change',()=>{renderMaker();motionLabel();});
  window.addEventListener('popstate',()=>{const maker=hashMaker();if(maker||location.hash==='#makers'){selectMaker(maker||selectedMaker);requestAnimationFrame(()=>scrollToMaker(true));}});
  reduced.addEventListener('change',()=>{if(reduced.matches){motions.forEach(animation=>animation.cancel());motions=[];}});
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
