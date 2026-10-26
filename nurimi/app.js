(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const state = { lang: 'ar', world: 'shop', palette: 'balanced', products: [], receipt: 'P003', lensX: .5, lensY: .5 };
  const text = (ar,en) => state.lang === 'ar' ? ar : en;
  const value = obj => obj?.[state.lang] || obj?.ar || obj?.en || '';
  const escape = input => String(input ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const copyLines = [ ['بشرتك أهم.','Your skin comes first.'], ['مشهور؟ حلو. مناسب لك؟ أهم.','Famous? Good. For you? Better.'], ['المكونات قبل المبالغات.','Ingredients before exaggeration.'] ];

  function setLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-ar][data-en]').forEach(el => el.textContent = el.dataset[lang]);
    $$('[data-label-ar][data-label-en]').forEach(el => el.setAttribute('aria-label',el.dataset[lang==='ar'?'labelAr':'labelEn']));
    $$('[data-alt-ar][data-alt-en]').forEach(el => el.alt=el.dataset[lang==='ar'?'altAr':'altEn']);
    $('#language-toggle').textContent = lang === 'ar' ? 'EN' : 'عربي';
    $('#language-toggle').setAttribute('aria-label',lang==='ar'?'Switch to English':'التبديل للعربية');
    document.title = text('NURIMI — بشرتك أهم.','NURIMI — Your skin comes first.');
    window.NurimiShop?.setLanguage(lang);
    renderTokens(); renderReceiptPicker(); renderVoice();
    document.dispatchEvent(new CustomEvent('nurimi:language-change',{detail:{lang}}));
  }
  function showWorld(world, push = true) {
    state.world = world === 'brand' ? 'brand' : 'shop';
    $('#shop-world').hidden = state.world !== 'shop';
    $('#brand-world').hidden = state.world !== 'brand';
    document.documentElement.dataset.world = state.world;
    $$('a[data-world]').forEach(el => { if(el.dataset.world===state.world) el.setAttribute('aria-current','page'); else el.removeAttribute('aria-current'); });
    closeMenu();
    if (push) history.pushState({world:state.world},'',`#${state.world}`);
    window.scrollTo({top:0,behavior:'instant'});
    if(state.world==='brand') { requestAnimationFrame(measureLens); renderReceiptPicker(); }
  }
  function closeMenu() { $('#mobile-menu').hidden=true; $('#menu-toggle').setAttribute('aria-expanded','false'); }
  document.addEventListener('click', e => {
    const worldLink = e.target.closest('a[data-world],button[data-world-button]');
    if(worldLink) { e.preventDefault(); showWorld(worldLink.dataset.world || worldLink.dataset.worldButton); return; }
    const scrollLink = e.target.closest('[data-scroll],[data-studio-scroll]');
    if(scrollLink) {
      e.preventDefault(); const id=scrollLink.dataset.scroll || scrollLink.dataset.studioScroll;
      if(scrollLink.dataset.scroll && state.world!=='shop') showWorld('shop');
      closeMenu(); $(`#${id}`)?.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});
    }
  });
  window.addEventListener('popstate',()=>showWorld(location.hash==='#brand'?'brand':'shop',false));
  $('#language-toggle').addEventListener('click',()=>setLanguage(state.lang==='ar'?'en':'ar'));
  $('#menu-toggle').addEventListener('click',()=>{const open=$('#mobile-menu').hidden;$('#mobile-menu').hidden=!open;$('#menu-toggle').setAttribute('aria-expanded',String(open));});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#mobile-menu').hidden){closeMenu();$('#menu-toggle').focus();}});
  $$('[data-hero-mode]').forEach(button=>button.addEventListener('click',()=>{
    $('#hero-stage').dataset.mode=button.dataset.heroMode;
    $$('[data-hero-mode]').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
  }));

  $$('[data-logo-ground]').forEach(button=>button.addEventListener('click',()=>{
    const ground=button.dataset.logoGround;$('#logo-showcase').dataset.ground=ground;
    $('#studio-logo').src=`assets/brand/${ground==='dark'?'logo-white.svg':'logo.svg'}`;
    $$('[data-logo-ground]').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
  }));
  $('#clearspace-toggle').addEventListener('click',e=>{const active=$('#logo-showcase').classList.toggle('show-clearspace');e.currentTarget.setAttribute('aria-pressed',String(active));});

  const tokens=[['Ivory','عاجي','#FFF9F3'],['Plum','برقوقي','#3B2158'],['Coral','مرجاني','#F29AA8'],['Cherry','كرزي','#B82B55'],['Lilac','ليلكي','#EADFFF'],['Sage','مريمي','#C8D9BF'],['Blush','وردي','#F7CBD4'],['Butter','زبدة','#FFE7A7']];
  function luminance(hex) { const channels=hex.replace('#','').match(/../g).map(x=>parseInt(x,16)/255).map(v=>v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4));return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722; }
  function contrast(a,b){const x=luminance(a),y=luminance(b);return ((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2);}
  function renderTokens(){
    $('#color-tokens').innerHTML=tokens.map(([en,ar,hex])=>`<button class="color-token" type="button" data-copy-color="${hex}" aria-label="${text('نسخ لون','Copy color')} ${text(ar,en)} ${hex}"><i style="background:${hex}" aria-hidden="true"></i><span><b>${text(ar,en)}</b><code dir="ltr">${hex}</code></span></button>`).join('');
    $('#contrast-caption').textContent=text(`تباين محسوب: البرقوقي على العاجي ${contrast('#3B2158','#FFF9F3')}:1 · الأبيض على الكرزي ${contrast('#FFFFFF','#B82B55')}:1. كلاهما يجتاز AA للنص العادي.` ,`Computed contrast: plum on ivory ${contrast('#3B2158','#FFF9F3')}:1 · white on cherry ${contrast('#FFFFFF','#B82B55')}:1. Both meet AA for normal text.`);
  }
  $$('[data-palette-choice]').forEach(button=>button.addEventListener('click',()=>{
    state.palette=button.dataset.paletteChoice;document.documentElement.dataset.palette=state.palette;
    $$('[data-palette-choice]').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
    $('#site-status').textContent=text('تم تحديث ألوان الاستوديو والمتجر.','Studio and shop palette updated.');
  }));
  async function copyText(content, status=$('#site-status')){
    try{await navigator.clipboard.writeText(content);status.textContent=text('تم النسخ.','Copied.');}
    catch{status.textContent=text(`انسخ النص: ${content}`,`Copy this text: ${content}`);}
  }
  $('#color-tokens').addEventListener('click',e=>{const swatch=e.target.closest('[data-copy-color]');if(swatch)copyText(swatch.dataset.copyColor);});
  function renderVoice(){const line=copyLines[Number($('#voice-picker').value)||0];$('#voice-output').value=text(...line);$('#copy-status').textContent='';}
  $('#voice-picker').addEventListener('change',renderVoice);
  $('#copy-voice').addEventListener('click',()=>copyText($('#voice-output').value,$('#copy-status')));

  function renderReceiptPicker(){
    if(!state.products.length)return;
    $('#receipt-product').innerHTML=state.products.map(p=>`<option value="${p.id}" ${state.receipt===p.id?'selected':''}>${escape(p.brand)} — ${escape(value(p.shortName))}${p.variantLabel?" · "+escape(value(p.variantLabel)):""}</option>`).join('');
    renderReceipt();
  }
  function renderReceipt(){
    const p=state.products.find(p=>p.id===state.receipt);if(!p)return;
    $('#receipt-product-image').src=p.sceneImage||p.image;$('#receipt-product-image').alt=`${p.brand} ${value(p.name)}`;
    const rows=[ [text('الحجم','Size'),value(p.sizeLabel)], [text('الاختيار','The pick'),value(p.format)], [text('مكوّن بارز','Featured ingredient'),value(p.ingredient)], [text('سبب الاختيار','Why in the edit'),value(p.why)], [text('الاستخدام','Directions'),value(p.use)], [text('ننتبه لـ','Keep in mind'),value(p.caution)], [text('الدفعة والصلاحية','Batch & expiry'),text('تُضاف بعد التحقق المحلي','Pending local verification')], [text('السعر والمخزون','Price & stock'),text('قيد التأكيد','To be confirmed')] ];
    $('#builder-ticket').innerHTML=`<div class="ticket-brand"><img src="assets/brand/logo.svg" alt="nurimi."><span dir="ltr">SKIN RECEIPT / ${escape(p.id)}</span></div><p class="receipt-brand" dir="ltr">${escape(p.brand)}</p><h3>${escape(value(p.name))}</h3><dl>${rows.map(([key,val])=>`<div><dt>${escape(key)}</dt><dd>${escape(val)}</dd></div>`).join('')}</dl><p class="receipt-source">${text('مرجع معلومات المنتج:','Product information:')} <a href="${escape(p.sourceUrl)}" target="_blank" rel="noopener">${escape(value(p.sourceLabel)||p.brand)} ↗</a><br>${text('مرجع المنتج لا يؤكد بيانات الدفعة المحلية.','The product reference does not verify the local inventory batch.')}</p>`;
  }
  function downloadText(name,content){const url=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  $('#receipt-product').addEventListener('change',e=>{state.receipt=e.target.value;renderReceipt();});
  $('#download-receipt').addEventListener('click',()=>{
    const p=state.products.find(p=>p.id===state.receipt);if(!p)return;
    const lines=['NURIMI / نوريمي','SKIN RECEIPT / '+p.id,p.brand,value(p.name),text('الحجم: ','Size: ')+value(p.sizeLabel),'',value(p.description),'',text('المكوّن: ','Ingredient: ')+value(p.ingredient),text('الاستخدام: ','Directions: ')+value(p.use),text('تنبيه: ','Caution: ')+value(p.caution),'',text('السعر، المخزون، الدفعة والصلاحية: قيد التأكيد المحلي.','Price, stock, batch and expiry: pending local verification.'),`${value(p.sourceLabel)||p.brand}: ${p.sourceUrl}`,'',text('نسخة تجريبية. ليست وصفة علاجية أو إثبات اعتماد محلي.','Prototype. Not medical advice or proof of local product clearance.')];
    downloadText(`NURIMI-Skin-Receipt-${p.id}-${state.lang}.txt`,lines.join('\n'));
    $('#site-status').textContent=text('تم تنزيل كرت البشرة.','Skin Receipt downloaded.');
  });
  document.addEventListener('nurimi:products-ready',e=>{state.products=e.detail.products||[];renderReceiptPicker();});
  const existing=window.NurimiShop?.getProducts?.();if(existing?.length){state.products=existing;renderReceiptPicker();}

  // Measure on entry/resize, then move only composited image and lens transforms.
  const lens={stage:$('#lens-stage'),window:$('#lens-window'),zoom:$('#lens-zoom'),rect:null,w:0,h:0,size:0};
  function measureLens(){
    if(!lens.stage.offsetWidth)return;
    const rect=lens.stage.getBoundingClientRect();const size=lens.window.getBoundingClientRect().width;
    lens.rect=rect;lens.w=rect.width;lens.h=rect.height;lens.size=size;
    lens.window.style.left='0';lens.window.style.top='0';
    lens.zoom.style.left='0';lens.zoom.style.top='0';
    lens.zoom.style.width=`${rect.width*2}px`;lens.zoom.style.height=`${rect.height*2}px`;lens.zoom.style.padding='50px';
    positionLens(state.lensX,state.lensY);
  }
  function positionLens(x,y){
    if(!lens.w)return;state.lensX=Math.max(.15,Math.min(.85,x));state.lensY=Math.max(.15,Math.min(.85,y));
    const px=state.lensX*lens.w,py=state.lensY*lens.h,r=lens.size/2;
    lens.window.style.transform=`translate(${px-r}px,${py-r}px)`;
    lens.zoom.style.transform=`translate(${r-px*2}px,${r-py*2}px)`;
  }
  lens.stage.addEventListener('pointerenter',measureLens);
  lens.stage.addEventListener('pointermove',e=>{if(e.pointerType==='touch'||!lens.rect)return;positionLens((e.clientX-lens.rect.left)/lens.w,(e.clientY-lens.rect.top)/lens.h);});
  lens.stage.addEventListener('keydown',e=>{let x=state.lensX,y=state.lensY;const step=.07;if(e.key==='ArrowLeft')x-=step;else if(e.key==='ArrowRight')x+=step;else if(e.key==='ArrowUp')y-=step;else if(e.key==='ArrowDown')y+=step;else return;e.preventDefault();positionLens(x,y);});
  $$('[data-lens-position]').forEach(button=>button.addEventListener('click',()=>{measureLens();const pos=button.dataset.lensPosition;positionLens(.5,pos==='top'?.28:pos==='bottom'?.75:.5);$$('[data-lens-position]').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));}));
  if('ResizeObserver' in window)new ResizeObserver(measureLens).observe(lens.stage);

  let readinessTrigger;
  $('#readiness-open').addEventListener('click',()=>{readinessTrigger=document.activeElement;$('#readiness-dialog').showModal();});
  $('[data-close-readiness]').addEventListener('click',()=>$('#readiness-dialog').close());
  $('#readiness-dialog').addEventListener('close',()=>readinessTrigger?.focus({preventScroll:true}));
  if(!reduced.matches && 'IntersectionObserver' in window){
    document.documentElement.classList.add('motion-ready');
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.07});
    $$('.reveal').forEach(el=>observer.observe(el));
  }
  renderTokens();renderVoice();
  if(location.hash==='#brand')showWorld('brand',false);
})();
