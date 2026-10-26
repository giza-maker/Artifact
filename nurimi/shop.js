(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const icon = (name) => `<svg class="shop-icon" aria-hidden="true"><use href="assets/icons.svg#${name}"></use></svg>`;
  const t = (ar, en) => state.lang === 'ar' ? ar : en;
  // Product copy can be bilingual objects or defensive plain strings.
  const text = (value) => typeof value === 'string' ? value : (value?.[state.lang] || value?.ar || value?.en || '—');
  const safe = (value = '') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const store = {
    read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage is optional */ } }
  };
  const storedSaved = store.read('nurimi:saved', []);
  const storedCompare = store.read('nurimi:compare', []);
  const storedBag = store.read('nurimi:demo-bag', {});
  const state = {
    products: [], ready: false, lang: document.documentElement.lang?.startsWith('en') ? 'en' : 'ar',
    mood: 'all', brand: 'all', type: 'all', query: '', order: 'default', savedOnly: false, visible: 8,
    saved: new Set(Array.isArray(storedSaved) ? storedSaved.filter(id => typeof id === 'string') : []),
    compare: Array.isArray(storedCompare) ? storedCompare.filter(id => typeof id === 'string').slice(0, 2) : [],
    bag: storedBag && typeof storedBag === 'object' && !Array.isArray(storedBag) ? storedBag : {}, active: null, checkoutStep: 0,
    checkout: { delivery: 'pickup', city: 'riyadh' }
  };
  const roots = { toolbar: $('#shop-toolbar'), grid: $('#product-grid'), empty: $('#shop-empty'), product: $('#product-dialog'), bag: $('#bag-dialog'), compare: $('#compare-dialog'), search: $('#search-dialog') };
  const dialogTriggers = new WeakMap();

  function localize() { return state.lang === 'ar' ? 'ar' : 'en'; }
  function productById(id) { return state.products.find(p => p.id === id); }
  function productLabel(product) { return text(product.name)+(product.variantLabel?' · '+text(product.variantLabel):''); }
  function sanitizeStoredState() {
    const ids = new Set(state.products.map(p => p.id));
    state.saved = new Set([...state.saved].filter(id => ids.has(id)));
    state.compare = [...new Set(state.compare)].filter(id => ids.has(id)).slice(0, 2);
    state.bag = Object.fromEntries(Object.entries(state.bag).flatMap(([id,rawQty]) => {
      const qty = Math.min(99, Math.floor(Number(rawQty)));
      return ids.has(id) && Number.isFinite(qty) && qty > 0 ? [[id, qty]] : [];
    }));
    persist();
  }
  function persist() {
    store.write('nurimi:saved', [...state.saved]); store.write('nurimi:compare', state.compare); store.write('nurimi:demo-bag', state.bag);
    updateCounts();
  }
  function updateCounts() {
    $$('[data-bag-count]').forEach(el => el.textContent = Object.values(state.bag).reduce((a, n) => a + n, 0));
    $$('[data-compare-count]').forEach(el => el.textContent = state.compare.length);
    $$('[data-open-compare]').forEach(el => { el.hidden = state.compare.length === 0; el.setAttribute('aria-label', t(`المقارنة، ${state.compare.length}`, `Compare, ${state.compare.length}`)); });
  }
  function openDialog(dialog, focusSelector) {
    if (!dialog) return;
    dialogTriggers.set(dialog, document.activeElement);
    if (!dialog.open) dialog.showModal();
    requestAnimationFrame(() => $(focusSelector, dialog)?.focus());
  }
  function closeDialog(dialog) { if (dialog?.open) dialog.close(); }
  function wireDialog(dialog, key) {
    if (!dialog) return;
    dialog.addEventListener('click', e => { if (e.target === dialog) closeDialog(dialog); });
    dialog.addEventListener('close', () => {
      const trigger = dialogTriggers.get(dialog);
      if (trigger?.isConnected && !trigger.closest('dialog:not([open])')) trigger.focus();
      else ($(`[data-open-${key}]`) || $('[data-open-search]') || $('[data-mood]', roots.toolbar))?.focus();
    });
  }
  function heading(product, level = 3) {
    const name = product.name || {};
    const shortName = product.shortName || {};
    const tag = level === 2 ? 'h2' : 'h3';
    return state.lang === 'ar'
      ? `<${tag}>${safe(name.ar || name.en || '—')}</${tag}><p lang="en" dir="ltr">${safe(shortName.en || name.en || name.ar || '—')}</p>`
      : `<${tag}>${safe(name.en || name.ar || '—')}</${tag}><p lang="ar" dir="rtl">${safe(shortName.ar || name.ar || name.en || '—')}</p>`;
  }
  function moods(product) {
    const names = { glow: ['إشراقة','Glow'], hydrate: ['ترطيب','Hydrate'], smooth: ['نعومة','Smooth'], night: ['ليلي','Night'] };
    return (product.moods || []).filter(m => names[m]).map(m => `<span>${t(...names[m])}</span>`).join('');
  }
  function moodText(product) {
    const names = { glow: ['إشراقة','Glow'], hydrate: ['ترطيب','Hydrate'], smooth: ['نعومة','Smooth'], night: ['ليلي','Night'] };
    return (product.moods || []).filter(m => names[m]).map(m => t(...names[m])).join(' · ') || '—';
  }
  function renderToolbar() {
    if (!roots.toolbar) return;
    const brands = [...new Set(state.products.map(p => p.brand))].sort();
    const types = { cleanser: ['منظّف','Cleanser'], toner: ['تونر','Toner'], serum: ['سيروم','Serum'], moisturizer: ['مرطّب','Moisturizer'], pads: ['وسادات','Pads'] };
    const moodNames = { all: ['الكل','All'], glow: ['إشراقة','Glow'], hydrate: ['ترطيب','Hydrate'], smooth: ['نعومة','Smooth'], night: ['ليلي','Night'] };
    roots.toolbar.innerHTML = `<div class="shop-mood-row" role="group" aria-label="${t('تصفية حسب احتياج البشرة','Filter by goal')}">
      ${Object.entries(moodNames).map(([key,label]) => `<button class="shop-chip" type="button" data-mood="${key}" aria-pressed="${state.mood === key}">${t(...label)}</button>`).join('')}
    </div><div class="shop-filter-row">
      <label class="shop-search-field">${icon('search')}<span class="shop-sr">${t('البحث في المنتجات','Search products')}</span><input type="search" value="${safe(state.query)}" placeholder="${t('ابحث باسم المنتج أو المكوّن','Search name or ingredient')}" data-shop-search></label>
      <label class="shop-select"><span>${t('العلامة','Brand')}</span><select data-shop-brand><option value="all">${t('كل العلامات','All brands')}</option>${brands.map(b => `<option ${state.brand===b?'selected':''}>${safe(b)}</option>`).join('')}</select>${icon('chevron-down')}</label>
      <label class="shop-select"><span>${t('النوع','Type')}</span><select data-shop-type><option value="all">${t('كل الأنواع','All types')}</option>${Object.entries(types).map(([key,label]) => `<option value="${key}" ${state.type===key?'selected':''}>${t(...label)}</option>`).join('')}</select>${icon('chevron-down')}</label>
      <label class="shop-select"><span>${t('الترتيب','Sort')}</span><select data-shop-order><option value="default">${t('الترتيب الافتراضي','NURIMI edit')}</option><option value="brand" ${state.order==='brand'?'selected':''}>${t('حسب العلامة','By brand')}</option></select>${icon('arrows-sort')}</label>
      <button class="shop-saved-filter" type="button" data-saved-filter aria-pressed="${state.savedOnly}">${icon('heart')} ${t('المحفوظات','Saved')} <span>${state.saved.size}</span></button>
      <p class="shop-count" role="status" aria-live="polite" data-shop-result-count></p>
    </div>`;
  }
  function filtered() {
    let list = state.products.filter(p => (state.mood === 'all' || (p.moods || []).includes(state.mood)) && (state.brand === 'all' || p.brand === state.brand) && (state.type === 'all' || p.type === state.type) && (!state.savedOnly || state.saved.has(p.id)));
    const q = state.query.trim().toLocaleLowerCase();
    if (q) list = list.filter(p => [p.brand, p.name?.ar, p.name?.en, p.ingredient?.ar, p.ingredient?.en].some(v => v?.toLocaleLowerCase().includes(q)));
    if (state.order === 'brand') list.sort((a,b) => a.brand.localeCompare(b.brand));
    return list;
  }
  function renderGrid() {
    if (!roots.grid) return;
    const products = filtered();
    const shown = Math.min(state.visible, products.length);
    const counter = $('[data-shop-result-count]'); if (counter) counter.innerHTML = t(`عرض <strong>${shown}</strong> من ${products.length}`, `Showing <strong>${shown}</strong> of ${products.length}`);
    roots.grid.innerHTML = products.slice(0, shown).map(p => `<article class="shop-card" data-product-brand="${brandKey(p)}" style="--product-color:${safe(p.color || '#eadde4')}">
      <button class="shop-save ${state.saved.has(p.id)?'is-saved':''}" type="button" data-save="${safe(p.id)}" aria-pressed="${state.saved.has(p.id)}" aria-label="${t('حفظ','Save product')}">${icon('heart')}</button>
      <button class="shop-card-media ${p.sceneImage?'has-scene':''}" type="button" data-product="${safe(p.id)}" aria-label="${t('عرض','Explore')} ${safe(productLabel(p))}"><img src="${safe(productPhoto(p))}" alt="${safe(productLabel(p))}" style="--image-scale:${Number(p.imageScale)||1}" loading="lazy"></button>
      <div class="shop-card-copy"><p class="shop-brand">${safe(p.brand)}</p>${heading(p)}${p.variantLabel?`<p class="shop-variant">${safe(text(p.variantLabel))}</p>`:''}<div class="shop-tags"><span>${safe(text(p.ingredient))}</span></div>
      <p class="shop-price">${t('السعر قيد التأكيد','Price pending')}</p>
      <div class="shop-card-actions"><button class="shop-secondary shop-quick-add" type="button" data-quick-add="${safe(p.id)}">${icon('shopping-bag')} <span aria-live="polite">${t('أضف إلى الحقيبة','Add to demo')}</span></button><button class="shop-primary" type="button" data-product="${safe(p.id)}">${t('التفاصيل','Explore')} ${icon(state.lang==='ar'?'arrow-left':'arrow-right')}</button>
      <label class="shop-compare-check"><input type="checkbox" data-compare="${safe(p.id)}" ${state.compare.includes(p.id)?'checked':''}><span>${t('قارن','Compare')}</span></label></div></div></article>`).join('');
    if (products.length > 8) roots.grid.insertAdjacentHTML('beforeend', `<div class="shop-pagination"><button class="shop-secondary" type="button" data-shop-page>${shown < products.length ? t('عرض المزيد','Show more') : t('عرض أقل','Show fewer')}</button></div>`);
    if (roots.empty) {
      roots.empty.hidden = products.length > 0;
      roots.empty.innerHTML = `<div class="shop-empty-card">${icon('search')}<h3>${t('لا توجد منتجات مطابقة','No products match')}</h3><p>${t('غيّر عوامل التصفية أو جرّب عبارة بحث أخرى.','Try another goal or search.')}</p><button class="shop-secondary" type="button" data-reset-filters>${t('إعادة الضبط','Reset filters')}</button></div>`;
    }
  }
  function renderAll() { renderToolbar(); renderGrid(); updateCounts(); }
  function refocus(selector, fallback = '[data-saved-filter]') { requestAnimationFrame(() => ($(selector) || $(fallback))?.focus()); }

  function productPhoto(product) { return product.sceneImage || product.image; }
  function brandKey(product) { return ['anua','arencia','celimax','mixa'].includes(product.brand.toLowerCase()) ? product.brand.toLowerCase() : 'nurimi'; }
  function ingredientBreakdown(product) {
    const breakdown = product.breakdown;
    if (!breakdown) return `<section class="product-breakdown product-breakdown-pending"><h3>${t('تفاصيل المكونات','Ingredient details')}</h3><p>${t('تعذّر تحميل التفاصيل. راجع مصدر معلومات المنتج والعبوة.','Details could not load. Check the product source and packaging.')}</p></section>`;
    const ingredients = Array.isArray(breakdown.ingredients) ? breakdown.ingredients : [];
    const benefits = Array.isArray(breakdown.benefits) ? breakdown.benefits : [];
    const sourceUrls = (breakdown.evidence?.urls || []).filter(url=>/^https?:\/\//.test(url));
    return `<nav class="product-section-nav" aria-label="${t('تفاصيل المنتج','Explore this product')}"><button type="button" data-pdp-jump="pdp-ingredients">${t('المكونات','Ingredients')}</button><button type="button" data-pdp-jump="pdp-benefits">${t('الفائدة','Benefits')}</button><button type="button" data-pdp-jump="pdp-use">${t('الاستخدام','How to use')}</button></nav>
      <section class="product-breakdown" aria-labelledby="pdp-ingredients"><div class="product-section-heading"><div><p>${t('معلومات التركيبة','LOOK PAST THE NAME')}</p><h3 id="pdp-ingredients" tabindex="-1">${t('المكونات البارزة','What’s inside?')}</h3></div><span>${t('مكونات بارزة','FEATURED INGREDIENTS')}</span></div><div class="ingredient-grid">${ingredients.length?ingredients.map(item=>`<article class="ingredient-card"><span class="ingredient-symbol" aria-hidden="true">${icon(item.icon || 'droplet')}</span><h4>${safe(text(item.name))}</h4><p>${safe(text(item.role))}</p></article>`).join(''):`<article class="ingredient-card ingredient-unconfirmed"><span class="ingredient-symbol" aria-hidden="true">${icon('info')}</span><h4>${t('قائمة المكونات قيد التأكيد','Packaging list to confirm')}</h4><p>${t('العبوة المصوّرة تؤكد الاسم والحجم. نحتاج قائمة مكونات هذه النسخة قبل عرض تفاصيل تركيبتها.','The pictured pack confirms name and size. This version’s ingredient list is needed before its formula can be described.')}</p></article>`}</div><p class="ingredient-footnote">${ingredients.length?t('مكونات مختارة، وليست قائمة INCI الكاملة. راجع قائمة العبوة قبل الاستخدام.','Selected ingredients, not the full INCI list. Check your packaging before use.'):t('تُضاف التفاصيل بعد مطابقة قائمة مكونات هذه العبوة.','Details will be added once this variant’s back-label ingredient list is matched.')}</p></section>
      <section class="product-benefits" aria-labelledby="pdp-benefits"><div class="product-section-heading"><h3 id="pdp-benefits" tabindex="-1">${t('ما فائدته؟','Why reach for it?')}</h3></div><div class="benefit-grid">${benefits.map(item=>`<article><span class="benefit-symbol" aria-hidden="true">${icon(item.icon || 'sparkles')}</span><div><h4>${safe(text(item.title))}</h4><p>${safe(text(item.description))}</p></div></article>`).join('')}</div>${breakdown.intro?`<p class="benefit-intro">${safe(text(breakdown.intro))}</p>`:''}</section>
      <section class="product-use" aria-labelledby="pdp-use"><div class="product-section-heading"><h3 id="pdp-use" tabindex="-1">${t('طريقة إدخاله في روتينك','Make room in your routine')}</h3></div><div class="product-use-grid"><article>${icon('sun')}<h4>${t('وقت الاستخدام','When')}</h4><p>${safe(text(breakdown.useMoment))}</p></article><article>${icon('droplet')}<h4>${t('طريقة الاستخدام','How')}</h4><p>${safe(text(product.use))}</p></article><article class="product-caution">${icon('info')}<h4>${t('تنبيه','Keep in mind')}</h4><p>${safe(text(breakdown.caution || product.caution))}</p></article></div></section>
      <aside class="product-evidence"><span aria-hidden="true">${icon('info')}</span><div><p>${safe(text(breakdown.evidence?.note || {ar:'راجع مصدر معلومات المنتج لمزيد من التفاصيل.',en:'See the product source for details.'}))}</p>${sourceUrls.length?`<div class="product-evidence-links">${sourceUrls.map((url,index)=>`<a href="${safe(url)}" target="_blank" rel="noopener">${t('مرجع التفاصيل','Detail source')}${sourceUrls.length>1?' '+(index+1):''} ${icon('arrow-up-right')}</a>`).join('')}</div>`:''}</div></aside>`;
  }

  function productDetailMarkup(product) {
    const benefitTitles = (product.breakdown?.benefits || []).slice(0,3);
    return `<div class="shop-dialog-shell shop-pdp product-detail" data-product-brand="${brandKey(product)}">
      <header class="shop-dialog-head"><p>${safe(product.brand)} <span> / </span> ${safe(text(product.format))}</p><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header>
      <div class="shop-pdp-layout"><div class="product-gallery"><div class="shop-pdp-visual product-image-stage" data-image-mode="${product.sceneImage?'scene':'original'}"><img data-product-image src="${safe(productPhoto(product))}" alt="${safe(productLabel(product))}" width="1024" height="1024"></div>${product.sceneImage?`<div class="product-image-controls" role="group" aria-label="${t('عرض صورة المنتج','Product image view')}"><button type="button" data-product-view="scene" aria-pressed="true">${t('صورة العرض','The scene')}</button><button type="button" data-product-view="original" aria-pressed="false">${t('العبوة الأصلية','Original packaging')}</button></div>`:''}<p class="product-image-caption" data-image-caption aria-live="polite">${product.sceneImage?t('صورة مولّدة لأغراض العرض. يمكنك مراجعة صورة العبوة الأصلية.','Generated presentation scene. Original packaging is available to inspect.'):t('صورة مرجعية للمنتج. بيانات العبوة المحلية قيد التحقق.','Reference product photograph. Local packaging details await verification.')}</p></div>
      <div class="shop-pdp-copy">${heading(product,2)}${product.variantLabel?`<p class="shop-pdp-variant">${safe(text(product.variantLabel))}</p>`:''}<p class="shop-lede">${safe(text(product.description))}</p>${benefitTitles.length?`<ul class="product-quick-benefits">${benefitTitles.map(item=>`<li>${icon(item.icon||'check')}<span>${safe(text(item.title))}</span></li>`).join('')}</ul>`:''}
      <div class="product-buy-panel"><p class="shop-price shop-price-large">${t('السعر قيد التأكيد','Price to be confirmed')}</p><div class="shop-buy-row"><label class="shop-stepper"><span>${t('الكمية','Quantity')}</span><span><button type="button" data-qty-minus aria-label="${t('تقليل الكمية','Decrease quantity')}">${icon('minus')}</button><output data-qty>1</output><button type="button" data-qty-plus aria-label="${t('زيادة الكمية','Increase quantity')}">${icon('plus')}</button></span></label><button class="shop-primary" type="button" data-add-bag>${icon('shopping-bag')} ${t('أضف للحقيبة التجريبية','Add to demo bag')}</button><button class="shop-secondary" type="button" data-view-bag hidden>${t('عرض الحقيبة','View demo bag')}</button></div><p class="shop-helper">${t('هذه تجربة فقط. السعر والتوفر قيد التأكيد، ولا يتم دفع أي مبلغ أو حجز أي منتج.','Demo only. Price and availability await confirmation; no payment or reservation.')}</p></div></div></div>
      ${ingredientBreakdown(product)}
      <details class="product-facts"><summary>${t('العبوة والمصادر وبطاقة المنتج','Packaging, sources & Skin Receipt')} ${icon('chevron-down')}</summary><div class="product-facts-body"><dl><div><dt>${t('العلامة','Brand')}</dt><dd>${safe(product.brand)}</dd></div><div><dt>${t('الحجم','Size')}</dt><dd>${safe(text(product.sizeLabel))}</dd></div><div><dt>${t('الصيغة','Format')}</dt><dd>${safe(text(product.format))}</dd></div><div><dt>${t('السعر والمخزون والدفعة والصلاحية','Price, stock, batch & expiry')}</dt><dd>${t('قيد التحقق المحلي','Pending local verification')}</dd></div></dl>${product.verificationNote?`<p class="shop-source-note">${safe(text(product.verificationNote))}</p>`:''}<div class="product-source-actions"><a class="shop-source" href="${safe(product.sourceUrl)}" target="_blank" rel="noopener">${safe(text(product.sourceLabel))} ${icon('arrow-up-right')}</a>${product.originalImage&&product.originalImage!==product.sourceUrl?`<a class="shop-source" href="${safe(product.originalImage)}" target="_blank" rel="noopener">${t('الصورة الأصلية المورّدة','Supplied original photo')} ${icon('arrow-up-right')}</a>`:''}<button class="shop-secondary" type="button" data-download-receipt>${icon('download')} ${t('نزّل بطاقة المنتج','Download Skin Receipt')}</button></div></div></details>
      </div>`;
  }

  function productDialog(product) {
    state.active = product.id;
    roots.product.innerHTML = productDetailMarkup(product);
    let qty = 1; const out = $('[data-qty]', roots.product);
    $('[data-qty-minus]', roots.product).onclick = () => { qty = Math.max(1, qty - 1); out.value = out.textContent = qty; };
    $('[data-qty-plus]', roots.product).onclick = () => { qty = Math.min(9, qty + 1); out.value = out.textContent = qty; };
    $('[data-add-bag]', roots.product).onclick = e => { state.bag[product.id] = Math.min(99, (state.bag[product.id] || 0) + qty); persist(); e.currentTarget.innerHTML = `${icon('circle-check')} ${t('تمت الإضافة إلى الحقيبة التجريبية','Added to demo bag')}`; $('[data-view-bag]', roots.product).hidden = false; };
    $('[data-view-bag]', roots.product).onclick = () => { closeDialog(roots.product); bagDialog(); };
    $('[data-download-receipt]', roots.product).onclick = () => downloadReceipt(product);
    $$('[data-product-view]',roots.product).forEach(button=>button.onclick=()=>{
      const original=button.dataset.productView==='original';
      $('[data-product-image]',roots.product).src=original?(product.originalImage||product.image):productPhoto(product);
      $('.product-image-stage',roots.product).dataset.imageMode=original?'original':'scene';
      $('[data-image-caption]',roots.product).textContent=original?t('صورة مرجعية للعبوة. تحقق من بيانات وحدتك المحلية.','Reference packaging photo. Verify the details on your local unit.'):t('صورة مولّدة لأغراض العرض. يمكنك مراجعة صورة العبوة الأصلية.','Generated presentation scene. Original packaging is available to inspect.');
      $$('[data-product-view]',roots.product).forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    });
    $$('[data-pdp-jump]',roots.product).forEach(button=>button.onclick=()=>{
      const target=$('#'+button.dataset.pdpJump,roots.product);if(!target)return;
      target.focus({preventScroll:true});target.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    });
    openDialog(roots.product, '[data-close]');
  }
  function downloadReceipt(p) {
    const content = [t('نوريمي — بطاقة المنتج','NURIMI — Skin Receipt'), `${p.brand} — ${text(p.name)}`, `${t('المكوّن','Ingredient')}: ${text(p.ingredient)}`, `${t('الصيغة','Format')}: ${text(p.format)}`, `${t('الحجم','Size')}: ${text(p.sizeLabel)}`, `${t('الاستخدام','Use')}: ${text(p.use)}`, `${t('التنبيه','Caution')}: ${text(p.caution)}`, `${t('السعر','Price')}: ${t('قيد التأكيد المحلي','Pending local confirmation')}`, `${t('المخزون / الدفعة / الصلاحية','Stock / batch / expiry')}: ${t('قيد التحقق المحلي','Pending local verification')}`, `${text(p.sourceLabel)}: ${p.sourceUrl || '—'}`].join('\n');
    const url = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'})); const a = document.createElement('a'); a.href = url; a.download = `nurimi-${p.id}-receipt.txt`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function bagDialog() {
    const lines = Object.entries(state.bag).map(([id,qty]) => [productById(id), qty]).filter(([p])=>p);
    roots.bag.innerHTML = `<div class="shop-dialog-shell shop-bag"><header class="shop-dialog-head"><div><p>${t('تجربة محفوظة على هذا الجهاز فقط','Local draft only')}</p><h2>${t('الحقيبة التجريبية','Demo bag')}</h2></div><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header>
      ${lines.length ? `<ul class="shop-bag-list">${lines.map(([p,q])=>`<li><img src="${safe(productPhoto(p))}" alt=""><div><strong>${safe(productLabel(p))}</strong><span>${safe(p.brand)} · ${t('السعر قيد التأكيد','Price pending')}</span></div><label class="shop-qty-input"><span class="shop-sr">${t('الكمية','Quantity')} ${safe(productLabel(p))}</span><input type="number" min="1" max="99" value="${q}" data-bag-qty="${safe(p.id)}"></label><button class="shop-icon-button" type="button" data-remove="${safe(p.id)}" aria-label="${t('إزالة','Remove')} ${safe(productLabel(p))}">${icon('trash')}</button></li>`).join('')}</ul><div class="shop-bag-total"><span>${t('الإجمالي','Total')}</span><strong>${t('الأسعار قيد التأكيد','Pending confirmed pricing')}</strong></div><button class="shop-primary shop-wide" type="button" data-checkout>${t('متابعة التجربة','Continue demo')}</button>` : `<div class="shop-empty-card">${icon('shopping-bag')}<h3>${t('الحقيبة فارغة','Bag is empty')}</h3><p>${t('أضف منتجًا لمتابعة تجربة التسوق.','Add a product to try the flow.')}</p><button class="shop-primary" type="button" data-browse-products>${t('تصفح المنتجات','Browse products')}</button></div>`}</div>`;
    $$('[data-bag-qty]', roots.bag).forEach(input => input.onchange = () => { state.bag[input.dataset.bagQty] = Math.max(1, Math.min(99, Number(input.value)||1)); persist(); bagDialog(); });
    $$('[data-remove]', roots.bag).forEach(btn => btn.onclick = () => { delete state.bag[btn.dataset.remove]; persist(); bagDialog(); });
    $('[data-checkout]', roots.bag)?.addEventListener('click', () => { state.checkoutStep = 1; renderCheckout(); });
    $('[data-browse-products]', roots.bag)?.addEventListener('click', () => { closeDialog(roots.bag); $('#shop-section')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}); });
    openDialog(roots.bag, '[data-close]');
  }
  function renderCheckout() {
    const shell = $('.shop-bag', roots.bag); if (!shell) return;
    shell.setAttribute('aria-live', 'polite');
    const lines = Object.entries(state.bag).map(([id,qty]) => [productById(id), qty]).filter(([p])=>p);
    const deliveryName = state.checkout.delivery === 'standard' ? t('توصيل عادي — الشروط قيد التأكيد','Standard delivery — terms to confirm') : t('استلام — التفاصيل قيد التأكيد','Pickup — details to confirm');
    const cityName = state.checkout.city === 'jeddah' ? t('جدة','Jeddah') : t('الرياض','Riyadh');
    const summary = `<dl class="shop-order-summary"><div><dt>${t('طريقة الاستلام','Delivery')}</dt><dd>${deliveryName}</dd></div><div><dt>${t('المدينة','Sample city')}</dt><dd>${cityName}</dd></div></dl><ul class="shop-review-items">${lines.map(([p,q])=>`<li><span>${safe(productLabel(p))}</span><strong>${t('الكمية','Qty')} ${q}</strong></li>`).join('')}</ul>`;
    if (state.checkoutStep === 1) shell.innerHTML = `<header class="shop-dialog-head"><div><p>1 / 2</p><h2>${t('اختر طريقة الاستلام','Demo delivery choice')}</h2></div><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header><form class="shop-checkout" data-delivery-form><fieldset><legend>${t('اختر طريقة','Choose a route')}</legend><label><input type="radio" name="delivery" value="pickup" ${state.checkout.delivery==='pickup'?'checked':''}><span><strong>${t('استلام','Pickup')}</strong><small>${t('التفاصيل تحتاج تأكيداً','Details to confirm')}</small></span></label><label><input type="radio" name="delivery" value="standard" ${state.checkout.delivery==='standard'?'checked':''}><span><strong>${t('توصيل عادي','Standard delivery')}</strong><small>${t('الشروط والمدة تحتاجان تأكيداً','Terms and timing to confirm')}</small></span></label></fieldset><label class="shop-field"><span>${t('المدينة','Sample city')}</span><select name="city"><option value="riyadh" ${state.checkout.city==='riyadh'?'selected':''}>${t('الرياض','Riyadh')}</option><option value="jeddah" ${state.checkout.city==='jeddah'?'selected':''}>${t('جدة','Jeddah')}</option></select></label><p class="shop-helper">${t('لا يطلب هذا النموذج أي بيانات شخصية.','No personal data is requested in this demo.')}</p><button class="shop-primary shop-wide" type="submit">${t('مراجعة الطلب التجريبي','Review draft')}</button></form>`;
    else if (state.checkoutStep === 2) shell.innerHTML = `<header class="shop-dialog-head"><div><p>2 / 2</p><h2>${t('راجع الطلب التجريبي','Review demo')}</h2></div><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header><div class="shop-review">${summary}<div>${icon('receipt')}<p>${t('الأسعار والمخزون والتوصيل كلها بانتظار التأكيد.','Pricing, stock, and delivery all await confirmation.')}</p></div><p>${t('إنشاء الطلب التجريبي لا يرسل طلبًا فعليًا ولا يخصم أي مبلغ.','Creating a sample order sends nothing and charges no payment.')}</p><button class="shop-primary shop-wide" type="button" data-create-sample>${t('إنشاء طلب تجريبي','Create sample order')}</button><button class="shop-secondary shop-wide" type="button" data-back>${t('رجوع','Back')}</button></div>`;
    $$('[data-close]', shell).forEach(b=>b.onclick=()=>closeDialog(roots.bag));
    $('[data-delivery-form]', shell)?.addEventListener('submit', e => { e.preventDefault(); const form = new FormData(e.currentTarget); state.checkout.delivery = form.get('delivery') === 'standard' ? 'standard' : 'pickup'; state.checkout.city = form.get('city') === 'jeddah' ? 'jeddah' : 'riyadh'; state.checkoutStep = 2; renderCheckout(); });
    $('[data-back]', shell)?.addEventListener('click', () => { state.checkoutStep = 1; renderCheckout(); });
    $('[data-create-sample]', shell)?.addEventListener('click', () => { shell.innerHTML = `<div class="shop-confirm">${icon('circle-check')}<h2>${t('تم إنشاء الطلب التجريبي','Demo complete')}</h2>${summary}<p>${t('لم يُرسل أي طلب ولم تُسجّل أي دفعة. هذه معاينة لتجربة التسوق فقط.','Nothing was sent and no payment was charged. This is a flow preview only.')}</p><button class="shop-primary" type="button" data-close>${t('تم','Done')}</button></div>`; $('[data-close]', shell).onclick=()=>closeDialog(roots.bag); requestAnimationFrame(()=>$('[data-close]',shell)?.focus()); });
    requestAnimationFrame(() => $('[data-close]', shell)?.focus());
  }
  function compareDialog() {
    const ps = state.compare.map(productById).filter(Boolean);
    roots.compare.innerHTML = `<div class="shop-dialog-shell shop-comparison"><header class="shop-dialog-head"><div><p>${t('بحد أقصى منتجان','Up to two products')}</p><h2>${t('مقارنة المنتجات','Clear comparison')}</h2></div><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header>${ps.length < 2 ? `<div class="shop-empty-card">${icon('copy')}<h3>${t('اختر منتجين للمقارنة','Select two products to compare')}</h3><p>${t('اختر منتجاً آخر من البطاقات.','Choose another product from the cards.')}</p></div>` : `<div class="shop-compare-products">${ps.map(p=>`<div><img src="${safe(productPhoto(p))}" alt=""><strong>${safe(productLabel(p))}</strong><button class="shop-text-button" data-compare-remove="${safe(p.id)}">${t('إزالة','Remove')}</button></div>`).join('')}</div>${ps.every(p=>p.retinoid)?`<p class="shop-alert">${icon('info')} ${t('كلاهما ريتينويد. هذه مقارنة معلومات فقط وليست نصيحة لاستخدامهما معاً.','Both are retinoids. This is factual comparison, not advice to use them together.')}</p>`:''}<div class="shop-table-wrap"><table><thead><tr><th>${t('الخاصية','Attribute')}</th>${ps.map(p=>`<th>${safe(p.brand)}</th>`).join('')}</tr></thead><tbody>${[['sizeLabel','الحجم','Size'],['ingredient','المكوّن','Ingredient'],['format','الصيغة','Format'],['moods','الأهداف','Goals'],['caution','التنبيه','Caution']].map(([key,ar,en])=>`<tr><th>${t(ar,en)}</th>${ps.map(p=>`<td>${key==='moods'?safe(moodText(p)):safe(text(p[key]))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}</div>`;
    $$('[data-compare-remove]', roots.compare).forEach(b=>b.onclick=()=>{ state.compare=state.compare.filter(id=>id!==b.dataset.compareRemove); persist(); renderGrid(); compareDialog(); });
    openDialog(roots.compare, '[data-close]');
  }
  function searchDialog() {
    roots.search.innerHTML = `<div class="shop-dialog-shell shop-search-dialog"><header class="shop-dialog-head"><h2>${t('ابحث في نوريمي','Search NURIMI')}</h2><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header><label class="shop-search-large">${icon('search')}<span class="shop-sr">${t('البحث','Search')}</span><input type="search" value="${safe(state.query)}" placeholder="${t('اسم، علامة، أو مكوّن','Name, brand, or ingredient')}" data-modal-search autocomplete="off"></label><div class="shop-search-results" aria-live="polite"></div></div>`;
    const input = $('[data-modal-search]', roots.search), results = $('.shop-search-results', roots.search);
    const refresh = () => { const q=input.value.trim().toLowerCase(); const ps=q?state.products.filter(p=>[p.brand,text(p.name),p.name?.ar,p.name?.en,text(p.ingredient),p.ingredient?.ar,p.ingredient?.en].some(v=>String(v || '').toLowerCase().includes(q))).slice(0,5):[]; results.innerHTML=ps.length?ps.map(p=>`<button type="button" data-product="${safe(p.id)}"><img src="${safe(productPhoto(p))}" alt=""><span><strong>${safe(productLabel(p))}</strong><small>${safe(p.brand)} · ${safe(text(p.ingredient))}</small></span>${icon(state.lang==='ar'?'arrow-left':'arrow-right')}</button>`).join(''):q?`<p>${t('لا نتائج','No results')}</p>`:`<p>${t('ابحث بالاسم أو المكوّن.','Search by name or ingredient.')}</p>`; };
    input.addEventListener('input', refresh); refresh(); openDialog(roots.search, '[data-modal-search]');
  }
  function toggleCompare(id, checked) {
    if (checked && !state.compare.includes(id)) { if (state.compare.length >= 2) return false; state.compare.push(id); }
    if (!checked) state.compare = state.compare.filter(x=>x!==id); persist(); return true;
  }
  document.addEventListener('click', e => {
    const close=e.target.closest('[data-close]'); if(close){ closeDialog(close.closest('dialog')); return; }
    const p=e.target.closest('[data-product]'); if(p){ closeDialog(p.closest('dialog')); productById(p.dataset.product) && productDialog(productById(p.dataset.product)); return; }
    const save=e.target.closest('[data-save]'); if(save){ const id=save.dataset.save; state.saved.has(id)?state.saved.delete(id):state.saved.add(id); persist(); renderAll(); refocus(`[data-save="${CSS.escape(id)}"]`); return; }
    if(e.target.closest('[data-reset-filters]')){ window.NurimiShop.resetFilters(); refocus('[data-mood="all"]'); }
    const quick=e.target.closest('[data-quick-add]'); if(quick){ const product=productById(quick.dataset.quickAdd); if(product){ state.bag[product.id]=Math.min(99,(state.bag[product.id]||0)+1); persist(); const label=$('span',quick); if(label) label.textContent=t('أضف مرة ثانية','Add another'); quick.classList.add('is-added'); quick.setAttribute('aria-label',t(`أضف ${productLabel(product)} مرة ثانية للحقيبة التجريبية`,`Add another ${productLabel(product)} to demo bag`)); const status=$('#site-status');if(status)status.textContent=t(`أضيف ${productLabel(product)}. الكمية في الحقيبة: ${state.bag[product.id]}.`,`${productLabel(product)} added. Quantity in demo bag: ${state.bag[product.id]}.`); } return; }
    const page=e.target.closest('[data-shop-page]'); if(page){ const previousShown=Math.min(state.visible,filtered().length),expanding=state.visible<filtered().length;state.visible=expanding?state.visible+8:8;renderGrid();requestAnimationFrame(()=>{if(expanding){const firstNew=$$('.shop-card',roots.grid)[previousShown];$('button[data-product]',firstNew||roots.grid)?.focus();}else{const heading=$('#catalog-title');heading?.focus({preventScroll:true});$('#shop-section')?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}});return;}
    if(e.target.closest('[data-saved-filter]')){ state.savedOnly=!state.savedOnly; state.visible=8; renderAll(); refocus('[data-saved-filter]'); }
    if(e.target.closest('[data-open-bag]')) bagDialog();
    if(e.target.closest('[data-open-search]')) searchDialog();
    if(e.target.closest('[data-open-compare]')) compareDialog();
    const mood=e.target.closest('[data-mood]'); if(mood){ window.NurimiShop.setMood(mood.dataset.mood); }
  });
  document.addEventListener('change', e => {
    if(e.target.matches('[data-shop-brand]')){ state.brand=e.target.value; state.visible=8; renderGrid(); }
    if(e.target.matches('[data-shop-type]')){ state.type=e.target.value; state.visible=8; renderGrid(); }
    if(e.target.matches('[data-shop-order]')){ state.order=e.target.value; renderGrid(); }
    if(e.target.matches('[data-compare]')){ const id=e.target.dataset.compare; if(!toggleCompare(id,e.target.checked)){ e.target.checked=false; compareDialog(); } renderGrid(); refocus(`[data-compare="${CSS.escape(id)}"]`); }
  });
  document.addEventListener('input', e => { if(e.target.matches('[data-shop-search]')){ state.query=e.target.value; state.visible=8; renderGrid(); } });
  const dialogNames = { product: ['تفاصيل المنتج','Product details'], bag: ['الحقيبة التجريبية','Demo bag'], compare: ['مقارنة المنتجات','Product comparison'], search: ['البحث في المنتجات','Product search'] };
  Object.entries(roots).filter(([,el])=>el?.tagName==='DIALOG').forEach(([key,dialog]) => { dialog.setAttribute('aria-label', t(...dialogNames[key])); wireDialog(dialog, key); });
  window.NurimiShop = {
    setLanguage(lang){ Object.values(roots).filter(el=>el?.tagName==='DIALOG'&&el.open).forEach(closeDialog); state.lang=lang==='en'?'en':'ar'; Object.entries(roots).filter(([,el])=>el?.tagName==='DIALOG').forEach(([key,d])=>d.setAttribute('aria-label',t(...dialogNames[key]))); renderAll(); },
    setMood(mood){ const fromControl=document.activeElement?.matches?.('[data-mood]'); state.mood=['all','glow','hydrate','smooth','night'].includes(mood)?mood:'all'; state.visible=8; renderAll(); if(fromControl) refocus(`[data-mood="${CSS.escape(state.mood)}"]`); document.dispatchEvent(new CustomEvent('nurimi:mood-change',{detail:{mood:state.mood}})); $('#shop-section')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}); },
    setBrand(brand){ const brands=new Set(state.products.map(p=>p.brand)); state.brand=brand==='all'||!state.ready||brands.has(brand)?brand:'all'; state.visible=8; renderAll(); document.dispatchEvent(new CustomEvent('nurimi:brand-change',{detail:{brand:state.brand}})); },
    setType(type){ state.type=['all','cleanser','toner','serum','moisturizer','pads'].includes(type)?type:'all'; state.visible=8; renderAll(); document.dispatchEvent(new CustomEvent('nurimi:type-change',{detail:{type:state.type}})); },
    resetFilters(){ state.mood='all'; state.brand='all'; state.type='all'; state.query=''; state.order='default'; state.savedOnly=false; state.visible=8; renderAll(); document.dispatchEvent(new CustomEvent('nurimi:filters-reset')); },
    openProduct(id){ const run=()=>{const p=productById(id); if(p) productDialog(p);}; state.ready?run():document.addEventListener('nurimi:products-ready',run,{once:true}); },
    openBag(){ state.ready?bagDialog():document.addEventListener('nurimi:products-ready',bagDialog,{once:true}); },
    getProducts(){ return state.products.slice(); },
    openSearch(){ state.ready?searchDialog():document.addEventListener('nurimi:products-ready',searchDialog,{once:true}); },
    openCompare(){ state.ready?compareDialog():document.addEventListener('nurimi:products-ready',compareDialog,{once:true}); }
  };
  function loadProducts() {
    if (roots.grid) { roots.grid.setAttribute('aria-busy','true'); roots.grid.innerHTML=''; }
    return Promise.all([fetch('data/products.json?v=20261026-scenes',{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error(`${r.status}`);return r.json();}),fetch('data/product-breakdowns.json?v=20261026',{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error(`${r.status}`);return r.json();}).catch(()=>({products:{}}))]).then(([data,details])=>{
      state.products=Array.isArray(data.products)?data.products.map(p=>({...p,breakdown:details.products?.[p.id]})):[]; sanitizeStoredState(); state.ready=true; if(roots.grid) roots.grid.setAttribute('aria-busy','false'); renderAll(); document.dispatchEvent(new CustomEvent('nurimi:products-ready',{detail:{products:state.products.slice()}}));
    }).catch(()=>{ state.ready=true; if(roots.grid){ roots.grid.setAttribute('aria-busy','false'); roots.grid.innerHTML=`<div class="shop-empty-card">${icon('info')}<h3>${t('تعذّر تحميل المنتجات','Could not load the edit')}</h3><p>${t('تحقق من اتصالك بالإنترنت، ثم أعد المحاولة.','Check connection and try again.')}</p><button class="shop-primary" type="button" data-retry-products>${t('إعادة المحاولة','Retry')}</button></div>`;} document.dispatchEvent(new CustomEvent('nurimi:products-ready',{detail:{products:[],error:true}})); });
  }
  document.addEventListener('click', e => { if (e.target.closest('[data-retry-products]')) loadProducts(); });
  loadProducts();
})();
