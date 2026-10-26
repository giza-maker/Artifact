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
    roots.toolbar.innerHTML = `<div class="shop-mood-row" role="group" aria-label="${t('تصفية حسب الهدف','Filter by goal')}">
      ${Object.entries(moodNames).map(([key,label]) => `<button class="shop-chip" type="button" data-mood="${key}" aria-pressed="${state.mood === key}">${t(...label)}</button>`).join('')}
    </div><div class="shop-filter-row">
      <label class="shop-search-field">${icon('search')}<span class="shop-sr">${t('البحث في المنتجات','Search products')}</span><input type="search" value="${safe(state.query)}" placeholder="${t('ابحث باسم أو مكوّن','Search name or ingredient')}" data-shop-search></label>
      <label class="shop-select"><span>${t('العلامة','Brand')}</span><select data-shop-brand><option value="all">${t('كل العلامات','All brands')}</option>${brands.map(b => `<option ${state.brand===b?'selected':''}>${safe(b)}</option>`).join('')}</select>${icon('chevron-down')}</label>
      <label class="shop-select"><span>${t('النوع','Type')}</span><select data-shop-type><option value="all">${t('كل الأنواع','All types')}</option>${Object.entries(types).map(([key,label]) => `<option value="${key}" ${state.type===key?'selected':''}>${t(...label)}</option>`).join('')}</select>${icon('chevron-down')}</label>
      <label class="shop-select"><span>${t('الترتيب','Sort')}</span><select data-shop-order><option value="default">${t('مختارات نوريمي','NURIMI edit')}</option><option value="brand" ${state.order==='brand'?'selected':''}>${t('حسب العلامة','By brand')}</option></select>${icon('arrows-sort')}</label>
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
    const counter = $('[data-shop-result-count]'); if (counter) counter.innerHTML = t(`نعرض <strong>${shown}</strong> من ${products.length}`, `Showing <strong>${shown}</strong> of ${products.length}`);
    roots.grid.innerHTML = products.slice(0, shown).map(p => `<article class="shop-card" style="--product-color:${safe(p.color || '#eadde4')}">
      <button class="shop-save ${state.saved.has(p.id)?'is-saved':''}" type="button" data-save="${safe(p.id)}" aria-pressed="${state.saved.has(p.id)}" aria-label="${t('حفظ المنتج','Save product')}">${icon('heart')}</button>
      <button class="shop-card-media" type="button" data-product="${safe(p.id)}" aria-label="${t('استكشاف','Explore')} ${safe(productLabel(p))}"><img src="${safe(p.image)}" alt="${safe(productLabel(p))}" style="--image-scale:${Number(p.imageScale)||1}" loading="lazy"></button>
      <div class="shop-card-copy"><p class="shop-brand">${safe(p.brand)}</p>${heading(p)}${p.variantLabel?`<p class="shop-variant">${safe(text(p.variantLabel))}</p>`:''}<div class="shop-tags"><span>${safe(text(p.ingredient))}</span></div>
      <p class="shop-price">${t('السعر قيد التأكيد','Price pending')}</p>
      <div class="shop-card-actions"><button class="shop-secondary shop-quick-add" type="button" data-quick-add="${safe(p.id)}">${icon('shopping-bag')} <span aria-live="polite">${t('أضف للتجربة','Add to demo')}</span></button><button class="shop-primary" type="button" data-product="${safe(p.id)}">${t('استكشف','Explore')} ${icon(state.lang==='ar'?'arrow-left':'arrow-right')}</button>
      <label class="shop-compare-check"><input type="checkbox" data-compare="${safe(p.id)}" ${state.compare.includes(p.id)?'checked':''}><span>${t('قارن','Compare')}</span></label></div></div></article>`).join('');
    if (products.length > 8) roots.grid.insertAdjacentHTML('beforeend', `<div class="shop-pagination"><button class="shop-secondary" type="button" data-shop-page>${shown < products.length ? t('عرض المزيد','Show more') : t('عرض أقل','Show fewer')}</button></div>`);
    if (roots.empty) {
      roots.empty.hidden = products.length > 0;
      roots.empty.innerHTML = `<div class="shop-empty-card">${icon('search')}<h3>${t('لا نتائج بهذه التصفية','No products match')}</h3><p>${t('جرّب هدفاً أو عبارة أخرى.','Try another goal or search.')}</p><button class="shop-secondary" type="button" data-reset-filters>${t('إعادة الضبط','Reset filters')}</button></div>`;
    }
  }
  function renderAll() { renderToolbar(); renderGrid(); updateCounts(); }
  function refocus(selector, fallback = '[data-saved-filter]') { requestAnimationFrame(() => ($(selector) || $(fallback))?.focus()); }

  function productDialog(product) {
    state.active = product.id;
    roots.product.innerHTML = `<div class="shop-dialog-shell shop-pdp" style="--product-color:${safe(product.color || '#eadde4')}">
      <header class="shop-dialog-head"><p>${safe(product.brand)} · ${safe(text(product.format))}</p><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header>
      <div class="shop-pdp-layout"><div class="shop-pdp-visual"><img src="${safe(product.image)}" alt="${safe(productLabel(product))}" style="--image-scale:${Number(product.imageScale)||1}"><span>${t('مختار بعناية · تحقق محلي معلّق','Curated · local verification pending')}</span></div>
      <div class="shop-pdp-copy">${heading(product, 2)}${product.variantLabel?`<p class="shop-pdp-variant">${safe(text(product.variantLabel))}</p>`:""}<p class="shop-lede">${safe(text(product.description))}</p>${product.verificationNote?`<p class="shop-source-note">${safe(text(product.verificationNote))}</p>`:""}<div class="shop-tags"><span>${safe(text(product.ingredient))}</span>${moods(product)}</div>
      <p class="shop-price shop-price-large">${t('السعر قيد التأكيد','Price to be confirmed')}</p>
      <div class="shop-buy-row"><label class="shop-stepper"><span>${t('الكمية','Quantity')}</span><span><button type="button" data-qty-minus aria-label="${t('تقليل الكمية','Decrease quantity')}">${icon('minus')}</button><output data-qty>1</output><button type="button" data-qty-plus aria-label="${t('زيادة الكمية','Increase quantity')}">${icon('plus')}</button></span></label><button class="shop-primary" type="button" data-add-bag>${icon('shopping-bag')} ${t('أضف للحقيبة التجريبية','Add to demo bag')}</button><button class="shop-secondary" type="button" data-view-bag hidden>${t('عرض الحقيبة','View demo bag')}</button></div>
      <p class="shop-helper">${t('لا حجز ولا دفع. التوفر والسعر يحتاجان تأكيداً محلياً.','No reservation or payment. Local price and availability need confirmation.')}</p></div></div>
      <div class="shop-details-grid"><details open><summary>${t('نظرة عامة','Overview')} ${icon('chevron-down')}</summary><p><strong>${t('لماذا اخترناه','Why it is here')}</strong>${safe(text(product.why))}</p><p><strong>${t('تنبيه محايد','Caution')}</strong>${safe(text(product.caution))}</p></details>
      <details><summary>${t('كرت البشرة','Skin Receipt')} ${icon('chevron-down')}</summary><div class="shop-receipt"><dl><div><dt>${t('المكوّن','Ingredient')}</dt><dd>${safe(text(product.ingredient))}</dd></div><div><dt>${t('الصيغة','Format')}</dt><dd>${safe(text(product.format))}</dd></div><div><dt>${t('الحجم','Size')}</dt><dd>${safe(text(product.sizeLabel))}</dd></div></dl><button class="shop-secondary" type="button" data-download-receipt>${icon('download')} ${t('تنزيل كرت نصي','Download text receipt')}</button></div></details>
      <details><summary>${t('طريقة الاستخدام','How to use')} ${icon('chevron-down')}</summary><p>${safe(text(product.use))}</p></details></div>
      <div class="shop-verification"><h3>${t('التحقق المحلي','Local verification')}</h3><p>${t('هذه الحقول غير مؤكدة بعد. لن نخمنها.','These fields are not confirmed yet. We do not invent them.')}</p><div class="shop-table-wrap"><table><thead><tr><th>${t('الحقل','Field')}</th><th>${t('الحالة','Status')}</th></tr></thead><tbody>${['batch','expiry','stock','price'].map(k=>`<tr><th>${t({batch:'الدفعة',expiry:'الصلاحية',stock:'المخزون',price:'السعر'}[k],k)}</th><td>${product[k] == null ? t('معلّق','Pending') : safe(product[k])}</td></tr>`).join('')}</tbody></table></div>
      <a class="shop-source" href="${safe(product.sourceUrl)}" target="_blank" rel="noopener">${safe(text(product.sourceLabel))} ${icon('arrow-up-right')}</a>${product.originalImage&&product.originalImage!==product.sourceUrl?`<a class="shop-source shop-original-photo" href="${safe(product.originalImage)}" target="_blank" rel="noopener">${t('الصورة الأصلية للعبوة','Original packaging photo')} ${icon('arrow-up-right')}</a>`:''}</div></div>`;
    let qty = 1; const out = $('[data-qty]', roots.product);
    $('[data-qty-minus]', roots.product).onclick = () => { qty = Math.max(1, qty - 1); out.value = out.textContent = qty; };
    $('[data-qty-plus]', roots.product).onclick = () => { qty = Math.min(9, qty + 1); out.value = out.textContent = qty; };
    $('[data-add-bag]', roots.product).onclick = e => { state.bag[product.id] = Math.min(99, (state.bag[product.id] || 0) + qty); persist(); e.currentTarget.innerHTML = `${icon('circle-check')} ${t('أضيفت للحقيبة التجريبية','Added to demo bag')}`; $('[data-view-bag]', roots.product).hidden = false; };
    $('[data-view-bag]', roots.product).onclick = () => { closeDialog(roots.product); bagDialog(); };
    $('[data-download-receipt]', roots.product).onclick = () => downloadReceipt(product);
    openDialog(roots.product, '[data-close]');
  }
  function downloadReceipt(p) {
    const content = [t('نوريمي — كرت البشرة','NURIMI — Skin Receipt'), `${p.brand} — ${text(p.name)}`, `${t('المكوّن','Ingredient')}: ${text(p.ingredient)}`, `${t('الصيغة','Format')}: ${text(p.format)}`, `${t('الحجم','Size')}: ${text(p.sizeLabel)}`, `${t('الاستخدام','Use')}: ${text(p.use)}`, `${t('التنبيه','Caution')}: ${text(p.caution)}`, `${t('السعر','Price')}: ${t('قيد التأكيد المحلي','Pending local confirmation')}`, `${t('المخزون / الدفعة / الصلاحية','Stock / batch / expiry')}: ${t('قيد التحقق المحلي','Pending local verification')}`, `${text(p.sourceLabel)}: ${p.sourceUrl || '—'}`].join('\n');
    const url = URL.createObjectURL(new Blob([content], {type:'text/plain;charset=utf-8'})); const a = document.createElement('a'); a.href = url; a.download = `nurimi-${p.id}-receipt.txt`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function bagDialog() {
    const lines = Object.entries(state.bag).map(([id,qty]) => [productById(id), qty]).filter(([p])=>p);
    roots.bag.innerHTML = `<div class="shop-dialog-shell shop-bag"><header class="shop-dialog-head"><div><p>${t('مسودة محلية فقط','Local draft only')}</p><h2>${t('الحقيبة التجريبية','Demo bag')}</h2></div><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header>
      ${lines.length ? `<ul class="shop-bag-list">${lines.map(([p,q])=>`<li><img src="${safe(p.image)}" alt=""><div><strong>${safe(productLabel(p))}</strong><span>${safe(p.brand)} · ${t('السعر قيد التأكيد','Price pending')}</span></div><label class="shop-qty-input"><span class="shop-sr">${t('الكمية','Quantity')} ${safe(productLabel(p))}</span><input type="number" min="1" max="99" value="${q}" data-bag-qty="${safe(p.id)}"></label><button class="shop-icon-button" type="button" data-remove="${safe(p.id)}" aria-label="${t('إزالة','Remove')} ${safe(productLabel(p))}">${icon('trash')}</button></li>`).join('')}</ul><div class="shop-bag-total"><span>${t('الإجمالي','Total')}</span><strong>${t('بانتظار تأكيد الأسعار','Pending confirmed pricing')}</strong></div><button class="shop-primary shop-wide" type="button" data-checkout>${t('متابعة المسودة','Continue demo')}</button>` : `<div class="shop-empty-card">${icon('shopping-bag')}<h3>${t('الحقيبة فارغة','Bag is empty')}</h3><p>${t('أضف منتجاً لتجربة المسار.','Add a product to try the flow.')}</p><button class="shop-primary" type="button" data-browse-products>${t('تصفح المنتجات','Browse products')}</button></div>`}</div>`;
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
    const summary = `<dl class="shop-order-summary"><div><dt>${t('طريقة الاستلام','Delivery')}</dt><dd>${deliveryName}</dd></div><div><dt>${t('مدينة العينة','Sample city')}</dt><dd>${cityName}</dd></div></dl><ul class="shop-review-items">${lines.map(([p,q])=>`<li><span>${safe(productLabel(p))}</span><strong>${t('الكمية','Qty')} ${q}</strong></li>`).join('')}</ul>`;
    if (state.checkoutStep === 1) shell.innerHTML = `<header class="shop-dialog-head"><div><p>1 / 2</p><h2>${t('طريقة الاستلام التجريبية','Demo delivery choice')}</h2></div><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header><form class="shop-checkout" data-delivery-form><fieldset><legend>${t('اختر مساراً','Choose a route')}</legend><label><input type="radio" name="delivery" value="pickup" ${state.checkout.delivery==='pickup'?'checked':''}><span><strong>${t('استلام','Pickup')}</strong><small>${t('التفاصيل تحتاج تأكيداً','Details to confirm')}</small></span></label><label><input type="radio" name="delivery" value="standard" ${state.checkout.delivery==='standard'?'checked':''}><span><strong>${t('توصيل عادي','Standard delivery')}</strong><small>${t('الشروط والمدة تحتاجان تأكيداً','Terms and timing to confirm')}</small></span></label></fieldset><label class="shop-field"><span>${t('مدينة العينة','Sample city')}</span><select name="city"><option value="riyadh" ${state.checkout.city==='riyadh'?'selected':''}>${t('الرياض','Riyadh')}</option><option value="jeddah" ${state.checkout.city==='jeddah'?'selected':''}>${t('جدة','Jeddah')}</option></select></label><p class="shop-helper">${t('لا نطلب بيانات شخصية في هذا النموذج.','No personal data is requested in this demo.')}</p><button class="shop-primary shop-wide" type="submit">${t('مراجعة المسودة','Review draft')}</button></form>`;
    else if (state.checkoutStep === 2) shell.innerHTML = `<header class="shop-dialog-head"><div><p>2 / 2</p><h2>${t('راجع المسودة','Review demo')}</h2></div><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header><div class="shop-review">${summary}<div>${icon('receipt')}<p>${t('الأسعار والمخزون والتوصيل كلها بانتظار التأكيد.','Pricing, stock, and delivery all await confirmation.')}</p></div><p>${t('إنشاء طلب عينة لا يرسل أي طلب ولا يخصم أي مبلغ.','Creating a sample order sends nothing and charges no payment.')}</p><button class="shop-primary shop-wide" type="button" data-create-sample>${t('إنشاء طلب عينة','Create sample order')}</button><button class="shop-secondary shop-wide" type="button" data-back>${t('رجوع','Back')}</button></div>`;
    $$('[data-close]', shell).forEach(b=>b.onclick=()=>closeDialog(roots.bag));
    $('[data-delivery-form]', shell)?.addEventListener('submit', e => { e.preventDefault(); const form = new FormData(e.currentTarget); state.checkout.delivery = form.get('delivery') === 'standard' ? 'standard' : 'pickup'; state.checkout.city = form.get('city') === 'jeddah' ? 'jeddah' : 'riyadh'; state.checkoutStep = 2; renderCheckout(); });
    $('[data-back]', shell)?.addEventListener('click', () => { state.checkoutStep = 1; renderCheckout(); });
    $('[data-create-sample]', shell)?.addEventListener('click', () => { shell.innerHTML = `<div class="shop-confirm">${icon('circle-check')}<h2>${t('اكتملت التجربة','Demo complete')}</h2>${summary}<p>${t('لم يُرسل شيء ولم تُسجّل دفعة. هذه معاينة للمسار فقط.','Nothing was sent and no payment was charged. This is a flow preview only.')}</p><button class="shop-primary" type="button" data-close>${t('تم','Done')}</button></div>`; $('[data-close]', shell).onclick=()=>closeDialog(roots.bag); requestAnimationFrame(()=>$('[data-close]',shell)?.focus()); });
    requestAnimationFrame(() => $('[data-close]', shell)?.focus());
  }
  function compareDialog() {
    const ps = state.compare.map(productById).filter(Boolean);
    roots.compare.innerHTML = `<div class="shop-dialog-shell shop-comparison"><header class="shop-dialog-head"><div><p>${t('بحد أقصى منتجان','Up to two products')}</p><h2>${t('مقارنة واضحة','Clear comparison')}</h2></div><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header>${ps.length < 2 ? `<div class="shop-empty-card">${icon('copy')}<h3>${t('اختر منتجين للمقارنة','Select two products to compare')}</h3><p>${t('اختر منتجاً آخر من البطاقات.','Choose another product from the cards.')}</p></div>` : `<div class="shop-compare-products">${ps.map(p=>`<div><img src="${safe(p.image)}" alt=""><strong>${safe(productLabel(p))}</strong><button class="shop-text-button" data-compare-remove="${safe(p.id)}">${t('إزالة','Remove')}</button></div>`).join('')}</div>${ps.every(p=>p.retinoid)?`<p class="shop-alert">${icon('info')} ${t('كلاهما ريتينويد. هذه مقارنة معلومات فقط وليست نصيحة لاستخدامهما معاً.','Both are retinoids. This is factual comparison, not advice to use them together.')}</p>`:''}<div class="shop-table-wrap"><table><thead><tr><th>${t('الخاصية','Attribute')}</th>${ps.map(p=>`<th>${safe(p.brand)}</th>`).join('')}</tr></thead><tbody>${[['sizeLabel','الحجم','Size'],['ingredient','المكوّن','Ingredient'],['format','الصيغة','Format'],['moods','الأهداف','Goals'],['caution','التنبيه','Caution']].map(([key,ar,en])=>`<tr><th>${t(ar,en)}</th>${ps.map(p=>`<td>${key==='moods'?safe(moodText(p)):safe(text(p[key]))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}</div>`;
    $$('[data-compare-remove]', roots.compare).forEach(b=>b.onclick=()=>{ state.compare=state.compare.filter(id=>id!==b.dataset.compareRemove); persist(); renderGrid(); compareDialog(); });
    openDialog(roots.compare, '[data-close]');
  }
  function searchDialog() {
    roots.search.innerHTML = `<div class="shop-dialog-shell shop-search-dialog"><header class="shop-dialog-head"><h2>${t('البحث في نوريمي','Search NURIMI')}</h2><button class="shop-icon-button" type="button" data-close aria-label="${t('إغلاق','Close')}">${icon('x')}</button></header><label class="shop-search-large">${icon('search')}<span class="shop-sr">${t('البحث','Search')}</span><input type="search" value="${safe(state.query)}" placeholder="${t('اسم، علامة، أو مكوّن','Name, brand, or ingredient')}" data-modal-search autocomplete="off"></label><div class="shop-search-results" aria-live="polite"></div></div>`;
    const input = $('[data-modal-search]', roots.search), results = $('.shop-search-results', roots.search);
    const refresh = () => { const q=input.value.trim().toLowerCase(); const ps=q?state.products.filter(p=>[p.brand,text(p.name),p.name?.ar,p.name?.en,text(p.ingredient),p.ingredient?.ar,p.ingredient?.en].some(v=>String(v || '').toLowerCase().includes(q))).slice(0,5):[]; results.innerHTML=ps.length?ps.map(p=>`<button type="button" data-product="${safe(p.id)}"><img src="${safe(p.image)}" alt=""><span><strong>${safe(productLabel(p))}</strong><small>${safe(p.brand)} · ${safe(text(p.ingredient))}</small></span>${icon(state.lang==='ar'?'arrow-left':'arrow-right')}</button>`).join(''):q?`<p>${t('لا نتائج','No results')}</p>`:`<p>${t('ابحث بالاسم أو المكوّن.','Search by name or ingredient.')}</p>`; };
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
    return fetch('data/products.json?v=20261026',{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error(`${r.status}`);return r.json();}).then(data=>{
      state.products=Array.isArray(data.products)?data.products:[]; sanitizeStoredState(); state.ready=true; if(roots.grid) roots.grid.setAttribute('aria-busy','false'); renderAll(); document.dispatchEvent(new CustomEvent('nurimi:products-ready',{detail:{products:state.products.slice()}}));
    }).catch(()=>{ state.ready=true; if(roots.grid){ roots.grid.setAttribute('aria-busy','false'); roots.grid.innerHTML=`<div class="shop-empty-card">${icon('info')}<h3>${t('تعذر تحميل المختارات','Could not load the edit')}</h3><p>${t('تحقق من الاتصال ثم أعد المحاولة.','Check connection and try again.')}</p><button class="shop-primary" type="button" data-retry-products>${t('إعادة المحاولة','Retry')}</button></div>`;} document.dispatchEvent(new CustomEvent('nurimi:products-ready',{detail:{products:[],error:true}})); });
  }
  document.addEventListener('click', e => { if (e.target.closest('[data-retry-products]')) loadProducts(); });
  loadProducts();
})();
