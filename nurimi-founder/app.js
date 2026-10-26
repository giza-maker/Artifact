import { RESEARCH as R } from './data/research.js?v=62e8a0c88d';
import { DEFAULT_UNIT, DEFAULT_PORTFOLIO, DEFAULT_WEIGHTS, scorePlatforms, unitEconomics, portfolioCosts, sanitizeNumber } from './models.js?v=576e792f61';
import { createViews, esc, icon } from './views.js?v=b576ee7d7d';

const KEY='nurimi:founder:v1', VERSION=1, ids=new Set(R.nav.map(v=>v.id));
const defaults=()=>({version:VERSION,lang:'en',route:'overview',unit:{...DEFAULT_UNIT},portfolio:{...DEFAULT_PORTFOLIO},weights:{...DEFAULT_WEIGHTS},gates:{},platformGates:{},verifiedSkus:0,allocation:6,stackTab:'compare',econTab:'unit',stackInspect:'salla',factory:{brand:'nurimi',name:'',accent:'',layout:''},decisions:{platform:'salla',launchMode:'verified',rationale:'',reversal:'',nextAction:''},scenarios:[],sourceQuery:'',sourceArea:'all',evidenceTab:'sources'});
const cleanText=(v,max=3000)=>typeof v==='string'?v.slice(0,max):'';
const cleanInputs=(source,base)=>Object.fromEntries(Object.entries(base).map(([k,v])=>[k,typeof v==='boolean'?(source?.[k]==null?v:source[k]===true):sanitizeNumber(source?.[k],v,0,k==='stores'?10:k.toLowerCase().includes('percent')||k==='vatRate'?100:1000000)]));
function cleanState(raw) {
  const d=defaults();if(!raw||typeof raw!=='object'||raw.version!==VERSION)return d;
  d.lang=raw.lang==='ar'?'ar':'en';d.route=ids.has(raw.route)?raw.route:'overview';d.unit=cleanInputs(raw.unit,DEFAULT_UNIT);d.portfolio=cleanInputs(raw.portfolio,DEFAULT_PORTFOLIO);d.portfolio.stores=Math.max(1,Math.round(d.portfolio.stores));
  d.weights=Object.fromEntries(Object.keys(DEFAULT_WEIGHTS).map(k=>[k,sanitizeNumber(raw.weights?.[k],DEFAULT_WEIGHTS[k],0,50)]));
  for(const g of R.gates){const v=raw.gates?.[g.id];if(v&&typeof v==='object')d.gates[g.id]={status:['pending','progress','verified','blocked'].includes(v.status)?v.status:'pending',owner:cleanText(v.owner,100),evidence:cleanText(v.evidence,2000)};}
  for(const p of R.platforms){const v=raw.platformGates?.[p.id];if(v&&typeof v==='object')d.platformGates[p.id]=Object.fromEntries(['merchant','theme','operations'].map(k=>[k,['unknown','pass','fail'].includes(v[k])?v[k]:'unknown']));}
  d.verifiedSkus=Math.round(sanitizeNumber(raw.verifiedSkus,0,0,23));d.allocation=Math.round(sanitizeNumber(raw.allocation,6,0,10));
  const f=raw.factory||{};d.factory={brand:f.brand==='sada'?'sada':'nurimi',name:cleanText(f.name,40),accent:/^#[0-9a-f]{6}$/i.test(f.accent)?f.accent:'',layout:['editorial','compact'].includes(f.layout)?f.layout:''};
  const c=raw.decisions||{};d.decisions={platform:c.platform==='undecided'?'undecided':R.platforms.some(p=>p.id===c.platform)?c.platform:'salla',launchMode:c.launchMode==='full'?'full':'verified',rationale:cleanText(c.rationale),reversal:cleanText(c.reversal),nextAction:cleanText(c.nextAction,2000)};
  if(Object.values(d.platformGates[d.decisions.platform]||{}).includes('fail'))d.decisions.platform='undecided';
  d.stackTab=raw.stackTab==='blueprint'?'blueprint':'compare';d.econTab=raw.econTab==='portfolio'?'portfolio':'unit';
  d.stackInspect=R.platforms.some(p=>p.id===raw.stackInspect)?raw.stackInspect:'salla';
  d.evidenceTab=['sources','memo','limits'].includes(raw.evidenceTab)?raw.evidenceTab:'sources';
  d.sourceQuery=cleanText(raw.sourceQuery,200);d.sourceArea=['all','salla','zid','shopify','medusa','saudi','technical'].includes(raw.sourceArea)?raw.sourceArea:'all';
  d.scenarios=Array.isArray(raw.scenarios)?raw.scenarios.slice(0,8).filter(v=>v&&typeof v==='object').map(v=>({name:cleanText(v.name,60)||'Scenario',unit:cleanInputs(v.unit,DEFAULT_UNIT),portfolio:{...cleanInputs(v.portfolio,DEFAULT_PORTFOLIO),stores:Math.max(1,Math.round(sanitizeNumber(v.portfolio?.stores,1,1,10)))}})):[];
  return d;
}
let failedRead=false;
let saved;try{saved=JSON.parse(localStorage.getItem(KEY));}catch{failedRead=true;}
const state=cleanState(saved);
const t=(en,ar)=>state.lang==='ar'?ar:en;
const b=value=>typeof value==='string'?value:(value?.[state.lang]||value?.en||'');
const num=(n,dp=0)=>new Intl.NumberFormat(state.lang==='ar'?'ar-SA':'en-US',{minimumFractionDigits:dp,maximumFractionDigits:dp}).format(Number.isFinite(n)?n:0);
const money=(n,dp=0)=>`${num(n,dp)} ${t('SAR','ر.س')}`;
const views=createViews({state,t,b,money,num});
const view=document.getElementById('view'), dialog=document.getElementById('app-dialog'), dialogBody=document.getElementById('dialog-content');
let trigger=null, saveTimer, sources=[], memoHTML='', sourcesPromise=null, memoPromise=null, sourceVisible=16;
const uiIcons={overview:'sparkles',market:'globe',stack:'layers',economics:'receipt',launch:'check',factory:'grid',decisions:'clipboard',evidence:'search'};

function announce(text){const e=document.getElementById('app-status');if(e)e.textContent=text;}
function save() {
  clearTimeout(saveTimer);const e=document.getElementById('save-indicator');if(e)e.textContent=t('Saving…','جارٍ الحفظ…');
  saveTimer=setTimeout(()=>{try{localStorage.setItem(KEY,JSON.stringify(state));if(e)e.textContent=t('Saved on this browser','محفوظ في هذا المتصفح');}catch{if(e)e.textContent=t('Browser storage unavailable — export your work','التخزين غير متاح — صدّر عملك');}},200);
}
function hydrateShell(){
  document.documentElement.lang=state.lang;document.documentElement.dir=state.lang==='ar'?'rtl':'ltr';
  document.title=t('NURIMI | Founder desk','نوريمي | مكتب المؤسس');
  document.getElementById('research-date').textContent=t('Research · 27 Oct 2026','البحث · 27 أكتوبر 2026');
  const controls={search:[t('Search the desk','ابحث في المكتب'),'search'],language:[t('العربية','English'),null],export:[t('Founder brief','موجز المؤسس'),'download'],menu:[t('Open navigation','افتح التنقل'),'menu']};
  for(const [action,[label,ico]] of Object.entries(controls)){const el=document.querySelector(`#app-header [data-action="${action}"]`);if(el){el.setAttribute('aria-label',label);el.innerHTML=(ico?icon(ico):'')+(['search','menu'].includes(action)?'':`<span>${label}</span>`);}}
  document.querySelector('.skip-link').textContent=t('Skip to workspace','انتقل إلى مساحة العمل');
  const sideNote=document.querySelector('.local-note');if(sideNote)sideNote.textContent=t('Decisions stay on this browser. Export to share.','تبقى القرارات في هذا المتصفح. صدّرها لمشاركتها.');
  const shop=document.querySelector('.shop-link');if(shop)shop.innerHTML=t('Open NURIMI concept','افتح نموذج نوريمي')+icon('arrow-up-right');
  renderNav();
}
function renderNav(){
  const markup=R.nav.map((n,i)=>`<a href="#${n.id}" class="nav-link ${state.route===n.id?'is-active':''}" ${state.route===n.id?'aria-current="page"':''}><span class="nav-number">${String(i+1).padStart(2,'0')}</span><span>${esc(b(n.title))}</span>${icon(state.lang==='ar'?'chevron-left':'chevron-right')}</a>`).join('');
  document.getElementById('primary-nav').innerHTML=markup;
  document.getElementById('primary-nav').setAttribute('aria-label',t('Founder workspace','مكتب المؤسس'));
  document.getElementById('mobile-nav').innerHTML=[['overview',t('Start','البداية'),'sparkles'],['economics',t('Economics','الجدوى'),'receipt'],['launch',t('Launch','الإطلاق'),'check'],['decisions',t('Decisions','القرارات'),'copy']].map(([id,label,ico])=>`<a href="#${id}" ${state.route===id?'aria-current="page"':''} class="${state.route===id?'is-active':''}">${icon(ico)}<span>${label}</span></a>`).join('');
  document.getElementById('breadcrumb').textContent=b(R.nav.find(n=>n.id===state.route)?.title);
}
function routeFromHash(){const id=location.hash.slice(1).split('?')[0];return ids.has(id)?id:'overview';}
function render(focus=true){
  const active=document.activeElement;
  const focusSelector=!focus&&view.contains(active)?(active.id?`#${CSS.escape(active.id)}`:['data-action','data-tab','data-preset','data-platform','data-brand','data-index'].filter(k=>active.hasAttribute(k)).map(k=>`[${k}="${CSS.escape(active.getAttribute(k))}"]`).join('')):null;
  state.route=routeFromHash();hydrateShell();view.innerHTML=views.render(state.route);
  view.setAttribute('aria-busy','false');
  views.updateEconomics();views.updateStack();views.updateFactory();
  if(state.route==='evidence'){if(state.evidenceTab==='sources')renderSources();else if(state.evidenceTab==='memo')renderMemo();}
  if(focus){document.getElementById('page-title')?.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
  else if(focusSelector)(view.querySelector(focusSelector)||document.getElementById('page-title'))?.focus({preventScroll:true});
  view.getAnimations().forEach(a=>a.cancel());
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches)view.animate([{opacity:.5,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'cubic-bezier(.2,.7,.2,1)'});
}
function navigate(route){if(dialog.open)dialog.close();if(routeFromHash()===route)render();else location.hash=route;}
function openDialog(title,body,options={}){
  if(!dialog.open)trigger=document.activeElement;dialogBody.innerHTML=`<header class="dialog-head"><h2 id="dialog-title">${esc(title)}</h2><button class="icon-button" data-action="close-dialog" aria-label="${t('Close','إغلاق')}">${icon('x')}</button></header><div class="dialog-body">${body}</div>`;
  dialog.setAttribute('aria-labelledby','dialog-title');dialog.dataset.kind=options.kind||'';if(!dialog.open)dialog.showModal();
  (dialog.querySelector(options.focus||'input,select,textarea,button,a')||dialog.querySelector('button'))?.focus({preventScroll:true});
}
dialog.addEventListener('close',()=>{if(trigger?.isConnected)trigger.focus({preventScroll:true});else document.querySelector('#app-header [data-action="search"]')?.focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});

async function loadSources(){
  if(sources.length)return sources;
  sourcesPromise??=fetch('data/sources.json?v=d5cdbe6ba1').then(r=>{if(!r.ok)throw new Error(`Sources ${r.status}`);return r.json();}).then(list=>{
    const byURL=new Map();for(const item of list){try{const url=new URL(item.url);if(!['https:','http:'].includes(url.protocol))continue;if(!byURL.has(item.url))byURL.set(item.url,item);}catch{}}
    sources=[...byURL.values()];return sources;
  }).catch(e=>{sourcesPromise=null;throw e;});return sourcesPromise;
}
async function loadMemo(){if(memoHTML)return memoHTML;memoPromise??=fetch('data/memo.html?v=5a9aeb9e68').then(r=>{if(!r.ok)throw new Error(`Memo ${r.status}`);return r.text();}).then(v=>(memoHTML=v)).catch(e=>{memoPromise=null;throw e;});return memoPromise;}
function sourceArea(item){const url=item.url||'',host=new URL(url).hostname.replace(/^www\./,'');if(/salla/.test(url))return'salla';if(/zid/.test(url))return'zid';if(/shopify/.test(url+' '+(item.title||'')))return'shopify';if(/medusa/.test(url))return'medusa';if(/gov\.sa$|business\.sa$|splonline\.com\.sa$|mada\.com\.sa$|saudiexchange\.sa$|niceonesa\.com$|tap\.company$|paytabs\.com$/.test(host))return'saudi';return'technical';}
async function renderSources(){
  const root=document.getElementById('source-results');if(!root)return;
  try{await loadSources();if(!root.isConnected)return;const q=state.sourceQuery.trim().toLowerCase();const list=sources.filter(v=>(state.sourceArea==='all'||sourceArea(v)===state.sourceArea)&&(!q||[v.title,v.url,...(v.claims||[]),v.limits].join(' ').toLowerCase().includes(q)));
    root.innerHTML=list.length?list.slice(0,sourceVisible).map(v=>{const i=sources.indexOf(v);return`<button class="source-card" data-action="source-detail" data-index="${i}"><span class="source-domain">${esc(new URL(v.url).hostname.replace(/^www\./,''))}</span><strong class="source-title">${esc(v.title)}</strong><span class="source-meta">${esc(t('Accessed ','تاريخ الاطلاع ')+(v.accessed||R.asOf))}</span><span class="source-limit">${esc(v.limits||t('Read source scope before applying.','راجع نطاق المصدر قبل التطبيق.'))}</span>${icon('arrow-up-right')}</button>`;}).join('')+(list.length>sourceVisible?`<button class="button button-secondary source-more" data-action="more-sources">${t('Show 16 more sources','اعرض 16 مصدراً إضافياً')}</button>`:''):`<p class="empty-state">${t('No sources match. Try another term or research area.','لا توجد مصادر مطابقة. جرّب عبارة أو مجالاً آخر.')}</p>`;
    document.getElementById('source-count').textContent=`${num(Math.min(sourceVisible,list.length))} / ${num(list.length)} ${t('matching sources','مصدر مطابق')} · ${num(sources.length)} ${t('unique URLs in the research snapshot. Linked pages may change.','رابطاً فريداً في لقطة البحث. الصفحات المرتبطة قد تتغير.')}`;
  }catch{if(root.isConnected)root.innerHTML=`<div class="empty-state"><p>${t('Sources could not load. Your saved work is still available.','تعذّر تحميل المصادر. عملك المحفوظ ما زال متاحاً.')}</p><button class="button button-secondary" data-action="retry-sources">${t('Try again','أعد المحاولة')}</button></div>`;}
}
async function renderMemo(){const root=document.getElementById('memo-body');if(!root)return;try{const html=await loadMemo();if(root.isConnected)root.innerHTML=html;}catch{if(root.isConnected)root.innerHTML=`<p>${t('Memo could not load.','تعذّر تحميل المذكرة.')}</p><button class="button button-secondary" data-action="retry-memo">${t('Try again','أعد المحاولة')}</button>`;}}
function showSource(index){const v=sources[index];if(!v)return;openDialog(v.title,`<div class="inline"><span class="pill pill-source">${t('Primary-source record','سجل مصدر أصلي')}</span><span class="fine">${esc(v.accessed||R.asOf)}</span></div><p><strong>${t('Publication / update / period','النشر أو التحديث أو الفترة')}</strong><br>${esc(v.published_updated||v.published_or_updated||t('Not stated','غير مذكور'))}</p><h3>${t('What it supports','ما يدعمه')}</h3><ul>${(v.claims||[]).map(c=>`<li>${esc(c)}</li>`).join('')}</ul><h3>${t('Limits','الحدود')}</h3><p>${esc(v.limits||'')}</p><a class="button button-primary" href="${esc(v.url)}" target="_blank" rel="noopener noreferrer">${t('Open original source','افتح المصدر الأصلي')}${icon('arrow-up-right')}</a><p class="fine">${t('Original research notes retain their source language. A source record is not a merchant acceptance test.','تحافظ ملاحظات البحث على لغة المصدر. سجل المصدر ليس اختبار قبول لمتجر التاجر.')}</p>`);}

function showSearch(){openDialog(t('Find a decision, gate or source','ابحث عن قرار أو متطلب أو مصدر'),`<label class="field"><span class="field-label">${t('Search the desk','ابحث في المكتب')}</span><input type="search" class="number-input text-input" id="desk-search" placeholder="${t('Economics, payment, merchant, SFDA…','الجدوى، الدفع، التاجر، SFDA…')}"></label><div id="search-results" class="search-results"></div>`,{kind:'search',focus:'#desk-search'});updateSearch('');loadSources().then(()=>{const input=document.getElementById('desk-search');if(input)updateSearch(input.value);}).catch(()=>{});}
function updateSearch(query){const root=document.getElementById('search-results');if(!root)return;const q=query.trim().toLowerCase();const nav=R.nav.filter(v=>!q||[b(v.title),b(v.description),v.id].join(' ').toLowerCase().includes(q));const gates=q?R.gates.filter(v=>[b(v.title),b(v.why)].join(' ').toLowerCase().includes(q)):[];const found=q?sources.filter(v=>[v.title,...(v.claims||[])].join(' ').toLowerCase().includes(q)).slice(0,5):[];
  root.innerHTML=nav.map(v=>`<a class="search-result" href="#${v.id}" data-search-route="${v.id}"><strong>${esc(b(v.title))}</strong><span>${esc(b(v.description))}</span>${icon(state.lang==='ar'?'arrow-left':'arrow-right')}</a>`).join('')+gates.slice(0,5).map(v=>`<button class="search-result" data-action="search-gate" data-gate="${v.id}"><strong>${esc(b(v.title))}</strong><span>${t('Launch gate','متطلب إطلاق')}</span></button>`).join('')+found.map(v=>`<button class="search-result" data-action="source-detail" data-index="${sources.indexOf(v)}"><strong>${esc(v.title)}</strong><span>${t('Evidence source','مصدر دليل')}</span></button>`).join('')||`<p class="empty-state">${t('No match. Try a shorter term.','لا توجد نتيجة. جرّب عبارة أقصر.')}</p>`;
}
function showExport(){const p=portfolioCosts(state.portfolio),u=unitEconomics(state.unit,p.annualOperating/12);openDialog(t('Take the decision with you','اصطحب القرار معك'),`<p>${t('Export a readable founder brief, or a workspace file that restores scenarios and notes on another browser. These files include your local notes.','صدّر موجزاً مقروءاً للمؤسس أو ملف مكتب يستعيد السيناريوهات والملاحظات في متصفح آخر. تتضمن الملفات ملاحظاتك المحلية.')}</p><div class="grid-2 export-stats"><div><span class="fine">${t('AFTER ACQUISITION','بعد الاستحواذ')}</span><strong>${money(u.contributionAfterCAC,2)}</strong></div><div><span class="fine">${t('FIRST YEAR / SCENARIO','السنة الأولى / السيناريو')}</span><strong>${money(p.firstYear)}</strong></div></div><div class="dialog-actions"><button class="button button-primary" data-action="download-brief">${icon('download')}${t('Download founder brief','نزّل موجز المؤسس')}</button><button class="button button-secondary" data-action="download-workspace">${t('Export workspace JSON','صدّر ملف المكتب JSON')}</button></div><div class="rule"></div><label class="button button-secondary file-button">${t('Import workspace file','استورد ملف المكتب')}<input type="file" id="import-workspace" accept="application/json,.json" class="file-input"></label><p class="field-note">${t('Import replaces this browser’s current workspace after review. Research facts stay unchanged.','الاستيراد يستبدل مساحة هذا المتصفح بعد المراجعة. حقائق البحث تبقى كما هي.')}</p><button class="button button-ghost" data-action="reset-workspace">${t('Reset local workspace','أعد ضبط المكتب المحلي')}</button>`);}
function download(name,content,type){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);announce(t('Download prepared.','تم تجهيز التنزيل.'));}
function brandManifest(){const sada=state.factory.brand==='sada';return{schemaVersion:1,kind:'local_configuration_preview_not_merchant_deployment',retailer:state.factory.name||(sada?'SADA':'NURIMI'),fictionalTest:sada,accent:state.factory.accent||(sada?'#125c48':'#b82b55'),layout:state.factory.layout||(sada?'compact':'editorial'),locales:['ar','en'],productIds:sada?['P022','P023']:Array.from({length:23},(_,i)=>`P${String(i+1).padStart(3,'0')}`),stockPolicy:'per_store_allocated',manufacturerLabels:'unchanged',commercialVerification:'pending',merchantAdapter:'not_validated',sourceSnapshot:R.asOf};}
async function downloadBrief(){
  const button=dialog.querySelector('[data-action="download-brief"]');if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
  try{const memo=await loadMemo();const p=portfolioCosts(state.portfolio),u=unitEconomics(state.unit,p.annualOperating/12),rank=scorePlatforms(state.weights);const gates=R.gates.map(g=>`<tr><td>${esc(b(g.title))}</td><td>${esc(views.statusLabel(state.gates[g.id]?.status||'pending'))}</td><td>${esc(state.gates[g.id]?.owner||b(g.owner))}</td><td>${esc(state.gates[g.id]?.evidence||'—')}</td></tr>`).join('');
    const title=t('NURIMI founder decision brief','موجز قرارات مؤسس نوريمي');
    const labels={basket:['Product basket','قيمة المنتجات'],shippingCollected:['Shipping collected','الشحن المحصّل'],vatRegistered:['VAT-registered scenario','سيناريو تاجر مسجل ضريبياً'],vatRate:['VAT rate (%)','نسبة الضريبة (%)'],cogs:['Landed goods cost','تكلفة المنتجات الواصلة'],pspPercent:['Payment rate (%)','نسبة الدفع (%)'],pspFlat:['Fixed payment fee','رسم الدفع الثابت'],carrierCost:['Carrier cost','تكلفة الناقل'],pickPack:['Pick and pack','التجهيز والتعبئة'],packaging:['Packaging','التغليف'],reserve:['Return / spoilage reserve','مخصص الإرجاع والتلف'],cac:['Delivered-order acquisition cost','استحواذ الطلب المسلّم'],platformFeePercent:['Additional platform fee (%)','عمولة المنصة الإضافية (%)'],stores:['Stores','المتاجر'],planAnnual:['Annual plan per store','اشتراك سنوي لكل متجر'],domainAnnual:['Annual domain allowance','مخصص النطاق السنوي'],appsAnnual:['Annual apps and monitoring','تطبيقات ومراقبة سنوية'],engineeringRate:['Engineering hourly rate','تكلفة ساعة الهندسة'],operationsRate:['Operations hourly rate','تكلفة ساعة التشغيل'],sharedHoursMonthly:['Shared technical hours/month','ساعات تقنية مشتركة شهرياً'],storeHoursMonthly:['Technical hours/store/month','ساعات تقنية لكل متجر شهرياً'],controlHoursMonthly:['Control hours/store/month','ساعات رقابة لكل متجر شهرياً'],firstEngineeringHours:['First-store engineering hours','ساعات هندسة المتجر الأول'],firstDesignHours:['First-store design QA hours','ساعات مراجعة تصميم الأول'],designRate:['Design hourly rate','تكلفة ساعة التصميم'],firstOperationsHours:['First-store operations hours','ساعات تشغيل المتجر الأول'],extraEngineeringHours:['Engineering hours/additional brand','ساعات هندسة لكل علامة إضافية'],extraOperationsHours:['Operations hours/additional brand','ساعات تشغيل لكل علامة إضافية'],themePerStore:['Initial theme allowance/store','مخصص الثيم الأولي لكل متجر']};
    const inputTable=values=>`<table><tbody>${Object.entries(values).map(([key,value])=>`<tr><th>${esc(t(...(labels[key]||[key,key])))}</th><td>${typeof value==='boolean'?(value?t('Yes','نعم'):t('No','لا')):num(value,Number.isInteger(value)?0:2)}</td></tr>`).join('')}</tbody></table>`;
    const html=`<!doctype html><html lang="${state.lang}" dir="${state.lang==='ar'?'rtl':'ltr'}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>body{font-family:system-ui,sans-serif;background:#fff9f3;color:#302039;max-width:1000px;padding:40px;margin:auto;line-height:1.65}h1{font-size:40px;line-height:1.2}h2{margin-top:48px}table{border-collapse:collapse;width:100%;font-size:14px}th,td{padding:12px;text-align:start;border-bottom:1px solid #ddd;vertical-align:top}a{color:#a3274a}blockquote{border-inline-start:3px solid #b82b55;padding-inline-start:18px}pre{white-space:pre-wrap}details{padding:20px;background:white}small{color:#675d6d}@media print{body{padding:0;background:white}details>*{display:block!important}tr{break-inside:avoid}a{overflow-wrap:anywhere}}</style><body><small>${esc(t('Research snapshot: 27 October 2026. Local founder scenario; not a supplier quote or merchant acceptance.','لقطة البحث: 27 أكتوبر 2026. سيناريو محلي للمؤسس؛ ليس عرض مورّد أو قبول متجر.'))}</small><h1>${title}</h1><h2>${t('Your current decision','قرارك الحالي')}</h2><p><strong>${esc(R.platforms.find(v=>v.id===state.decisions.platform)?.name||t('Undecided — resolve trial evidence','لم يُحسم — راجع أدلة الاختبار'))}</strong></p><p>${esc(state.decisions.rationale||t('Rationale not recorded.','لم يُسجل السبب.'))}</p><p><strong>${t('Reversal evidence','ما قد يغيّر القرار')}:</strong> ${esc(state.decisions.reversal||'—')}</p><p><strong>${t('Next action','الإجراء التالي')}:</strong> ${esc(state.decisions.nextAction||'—')}</p><h2>${t('Scenario results','نتائج السيناريو')}</h2><table><tr><th>${t('Net revenue','صافي الإيراد')}</th><td>${money(u.netRevenue,2)}</td></tr><tr><th>${t('Contribution before acquisition','المساهمة قبل الاستحواذ')}</th><td>${money(u.contributionBeforeCAC,2)}</td></tr><tr><th>${t('After acquisition','بعد الاستحواذ')}</th><td>${money(u.contributionAfterCAC,2)}</td></tr><tr><th>${t('First-year allowance','مخصص السنة الأولى')}</th><td>${money(p.firstYear)}</td></tr><tr><th>${t('Recurring annual allowance','المخصص السنوي المتكرر')}</th><td>${money(p.annualOperating)}</td></tr></table><h3>${t('All model inputs','جميع مدخلات النموذج')}</h3>${inputTable(state.unit)}${inputTable(state.portfolio)}<h2>${t('Weighted shortlist — judgement, not proof','القائمة المرجّحة — تقدير لا إثبات')}</h2><ol>${rank.map(v=>`<li>${esc(v.name)}: ${Object.values(state.platformGates[v.id]||{}).includes('fail')?t('Excluded by failed trial','مستبعد لفشل الاختبار'):num(v.score,2)+'/10'}</li>`).join('')}</ol><h2>${t('Founder-marked launch gates','متطلبات الإطلاق المؤكدة محلياً')}</h2><table><thead><tr><th>${t('Gate','المتطلب')}</th><th>${t('Local status','الحالة المحلية')}</th><th>${t('Owner','المسؤول')}</th><th>${t('Evidence note','ملاحظة الدليل')}</th></tr></thead><tbody>${gates}</tbody></table><h2>${t('Original research memo','مذكرة البحث الأصلية')}</h2><div dir="ltr" lang="en">${memo}</div><small>${t('Generated from NURIMI Founder Desk. No new merchant tests are implied by this export.','صُدّر من مكتب مؤسس نوريمي. لا يعني هذا التصدير إجراء اختبارات متجر جديدة.')}</small></body></html>`;
    download('NURIMI-founder-brief.html',html,'text/html;charset=utf-8');
  }catch{announce(t('Brief could not load. Export workspace JSON to preserve your work.','تعذّر تحميل الموجز. صدّر ملف المكتب للحفاظ على عملك.'));openDialog(t('Brief unavailable','الموجز غير متاح'),`<p>${t('The original memo could not load. Retry, or export the workspace file.','تعذّر تحميل المذكرة الأصلية. أعد المحاولة أو صدّر ملف المكتب.')}</p><button class="button button-secondary" data-action="export">${t('Return to export','ارجع إلى التصدير')}</button>`);
  }finally{if(button?.isConnected){button.disabled=false;button.removeAttribute('aria-busy');}}
}
function presets(kind){if(kind==='base')return {...DEFAULT_UNIT};if(kind==='squeeze')return {...DEFAULT_UNIT,cogs:125,cac:60,carrierCost:18,reserve:10};return {...DEFAULT_UNIT,cac:20};}

document.addEventListener('click',async e=>{
  if(e.target.closest('.skip-link')){e.preventDefault();document.getElementById('main').focus();return;}
  const searchLink=e.target.closest('[data-search-route]');if(searchLink){e.preventDefault();navigate(searchLink.dataset.searchRoute);return;}
  const el=e.target.closest('[data-action]');if(!el)return;
  const action=el.dataset.action;
  switch(action){
    case'language':state.lang=state.lang==='en'?'ar':'en';if(dialog.open)dialog.close();save();render();break;
    case'menu':openDialog(t('Your founder desk','مكتب المؤسس'),`<nav class="dialog-nav">${R.nav.map(v=>`<a class="nav-link" href="#${v.id}" data-search-route="${v.id}">${esc(b(v.title))}${icon(state.lang==='ar'?'arrow-left':'arrow-right')}</a>`).join('')}</nav>`);break;
    case'search':showSearch();break;
    case'export':showExport();break;
    case'close-dialog':dialog.close();break;
    case'stack-tab':state.stackTab=el.dataset.tab;render(false);document.querySelector(`[data-action=\"stack-tab\"][data-tab=\"${state.stackTab}\"]`)?.focus({preventScroll:true});break;
    case'econ-tab':state.econTab=el.dataset.tab;render(false);document.querySelector(`[data-action=\"econ-tab\"][data-tab=\"${state.econTab}\"]`)?.focus({preventScroll:true});break;
    case'evidence-tab':state.evidenceTab=el.dataset.tab;render(false);document.querySelector(`[data-action=\"evidence-tab\"][data-tab=\"${state.evidenceTab}\"]`)?.focus({preventScroll:true});break;
    case'weight-preset':state.weights=el.dataset.preset==='saudi'?{...DEFAULT_WEIGHTS}:el.dataset.preset==='global'?{launch_speed:12,saudi_integration:4,brand_flexibility:20,arabic_rtl:4,operational_reliability:15,maintenance:10,portability:20,total_cost:15}:{launch_speed:4,saudi_integration:3,brand_flexibility:20,arabic_rtl:3,operational_reliability:10,maintenance:5,portability:45,total_cost:10};save();render(false);break;
    case'reset-weights':state.weights={...DEFAULT_WEIGHTS};save();render(false);break;
    case'platform-detail':state.stackInspect=el.dataset.platform;render(false);document.getElementById('platform-detail')?.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});break;
    case'choose-platform':if(Object.values(state.platformGates[el.dataset.platform]||{}).includes('fail')){announce(t('Resolve the failed trial gate first.','عالج فشل الاختبار أولاً.'));break;}state.decisions.platform=el.dataset.platform;save();announce(t('Preferred route recorded. Review it in Founder decisions.','تم تسجيل المسار المفضّل. راجعه في قرارات المؤسس.'));el.textContent=t('Recorded — review your decision','تم التسجيل — راجع قرارك');break;
    case'unit-preset':state.unit=presets(el.dataset.preset);save();render(false);break;
    case'save-scenario':openDialog(t('Save a scenario','احفظ سيناريو'),`<form id="scenario-form"><label class="field"><span class="field-label">${t('Scenario name','اسم السيناريو')}</span><input class="number-input text-input" id="scenario-name" name="name" maxlength="60" required placeholder="${t('Base case / supplier quote / launch plan','الأساسي أو عرض المورد أو خطة الإطلاق')}"></label><button class="button button-primary" type="submit">${t('Save locally','احفظ محلياً')}</button><p class="fine">${t('Up to eight scenarios; saving another replaces the oldest.','حتى ثمانية سيناريوهات؛ حفظ المزيد يستبدل الأقدم.')}</p></form>`,{focus:'#scenario-name'});break;
    case'load-scenario':{const v=state.scenarios[Number(el.dataset.index)];if(v){state.unit={...v.unit};state.portfolio={...v.portfolio};save();render(false);announce(t('Scenario loaded.','تم استخدام السيناريو.'));}break;}
    case'delete-scenario':state.scenarios.splice(Number(el.dataset.index),1);save();render(false);break;
    case'factory-brand':state.factory={brand:el.dataset.brand,name:'',accent:'',layout:''};save();render(false);break;
    case'export-brand':download('NURIMI-brand-manifest.json',JSON.stringify(brandManifest(),null,2),'application/json');break;
    case'source-detail':showSource(Number(el.dataset.index));break;
    case'search-gate':{const id=el.dataset.gate;navigate('launch');requestAnimationFrame(()=>{const gate=document.getElementById(`gate-${id}`);if(gate){gate.querySelector('details').open=true;gate.querySelector('select')?.focus();gate.scrollIntoView({block:'start',behavior:'instant'});}});break;}
    case'retry-sources':renderSources();break;
    case'more-sources':sourceVisible+=16;await renderSources();announce(t('More sources shown.','تم عرض مصادر إضافية.'));break;
    case'retry-memo':renderMemo();break;
    case'download-workspace':download('NURIMI-founder-workspace.json',JSON.stringify({...state,exportedAt:new Date().toISOString(),researchSnapshot:R.asOf},null,2),'application/json');break;
    case'download-brief':await downloadBrief();break;
    case'reset-workspace':openDialog(t('Reset this browser’s workspace?','إعادة ضبط مكتب هذا المتصفح؟'),`<p>${t('This removes your local notes, trial marks and saved scenarios. Export first if you want a copy. Research facts remain.','يزيل ملاحظاتك المحلية وتأكيدات الاختبارات والسيناريوهات المحفوظة. صدّر نسخة أولاً إن رغبت. تبقى حقائق البحث.')}</p><div class="dialog-actions"><button class="button button-secondary" data-action="close-dialog">${t('Keep my work','احتفظ بعملي')}</button><button class="button button-primary" data-action="confirm-reset">${t('Reset workspace','أعد ضبط المكتب')}</button></div>`);break;
    case'confirm-reset':{const lang=state.lang;Object.assign(state,defaults(),{lang});save();dialog.close();if(location.hash==='#overview')render();else navigate('overview');announce(t('Local workspace reset.','تمت إعادة ضبط المكتب المحلي.'));break;}
    case'confirm-import':if(pendingImport){const lang=state.lang;const importedRoute=pendingImport.route;Object.assign(state,pendingImport,{lang});pendingImport=null;save();dialog.close();if(routeFromHash()===importedRoute)render();else navigate(importedRoute);announce(t('Workspace imported. Research facts are unchanged.','تم استيراد المكتب. حقائق البحث لم تتغيّر.'));}break;
  }
});

document.addEventListener('input',e=>{
  const el=e.target;
  if(el.matches('[data-model]')){if(el.type==='number'&&el.value==='')return;const scope=el.dataset.model,key=el.name;const dest=scope==='state'?state:state[scope];if(dest&&Object.prototype.hasOwnProperty.call(dest,key)){dest[key]=el.type==='checkbox'?el.checked:sanitizeNumber(el.value,0,el.min?Number(el.min):0,el.max?Number(el.max):1000000);if(key==='stores'||key==='verifiedSkus')dest[key]=Math.round(dest[key]);save();views.updateEconomics();}return;}
  if(el.matches('[data-weight]')){state.weights[el.dataset.weight]=Number(el.value);document.querySelector(`[data-weight-output="${el.dataset.weight}"]`).textContent=num(Number(el.value));save();views.updateStack();return;}
  if(el.matches('[data-gate-owner],[data-gate-evidence]')){const id=el.dataset.gateOwner||el.dataset.gateEvidence;state.gates[id]??={status:'pending',owner:'',evidence:''};state.gates[id][el.dataset.gateOwner?'owner':'evidence']=el.value;save();return;}
  if(el.matches('[data-decision]')){state.decisions[el.dataset.decision]=el.value;save();return;}
  if(el.id==='source-search'){state.sourceQuery=el.value;sourceVisible=16;renderSources();return;}
  if(el.id==='desk-search'){updateSearch(el.value);return;}
  if(el.id==='factory-name'){state.factory.name=el.value;save();views.updateFactory();return;}
  if(el.id==='factory-color'){state.factory.accent=el.value;save();views.updateFactory();return;}
  if(el.id==='allocation-range'){state.allocation=Number(el.value);save();views.updateFactory();return;}
});
let pendingImport=null;
document.addEventListener('change',async e=>{
  const el=e.target;
  if(el.matches('[data-model]')&&el.type==='number'){const dest=el.dataset.model==='state'?state:state[el.dataset.model];if(dest&&el.name in dest)el.value=dest[el.name];return;}
  if(el.matches('[data-platform-gate]')){state.platformGates[el.dataset.platformGate]??={};state.platformGates[el.dataset.platformGate][el.dataset.gateKey]=el.value;if(el.value==='fail'&&state.decisions.platform===el.dataset.platformGate)state.decisions.platform='undecided';save();views.updateStack();const detail=document.getElementById('platform-detail');if(detail){const key=el.dataset.gateKey;detail.innerHTML=views.platformDetail(R.platforms.find(p=>p.id===state.stackInspect));detail.querySelector(`[data-gate-key=\"${key}\"]`)?.focus({preventScroll:true});}return;}
  if(el.matches('[data-gate-status]')){const id=el.dataset.gateStatus;state.gates[id]??={owner:'',evidence:''};state.gates[id].status=el.value;save();render(false);document.querySelector(`[data-gate-status="${id}"]`)?.focus({preventScroll:true});announce(t('Local gate record updated.','تم تحديث المتطلب محلياً.'));return;}
  if(el.matches('[data-decision]')){state.decisions[el.dataset.decision]=el.value;save();render(false);document.querySelector(`[data-decision="${el.dataset.decision}"]`)?.focus({preventScroll:true});return;}
  if(el.id==='stack-inspect'){state.stackInspect=el.value;render(false);document.getElementById('stack-inspect')?.focus({preventScroll:true});return;}
  if(el.id==='factory-layout'){state.factory.layout=el.value;save();views.updateFactory();return;}
  if(el.id==='source-area'){state.sourceArea=el.value;sourceVisible=16;renderSources();return;}
  if(el.id==='gate-filter'){document.querySelectorAll('[data-gate-card]').forEach(card=>{const status=card.dataset.status;card.hidden=el.value==='open'?status==='verified':el.value!=='all'&&status!==el.value;});return;}
  if(el.id==='import-workspace'){
    const file=el.files?.[0];if(!file)return;
    try{if(file.size>1000000)throw new Error('size');const raw=JSON.parse(await file.text());if(raw?.version!==VERSION||!raw.unit||!raw.portfolio)throw new Error('schema');pendingImport=cleanState(raw);openDialog(t('Review workspace import','راجع استيراد المكتب'),`<p>${t('Replace this browser’s scenarios, notes and local marks with the selected file?','هل تستبدل سيناريوهات هذا المتصفح وملاحظاته وتأكيداته المحلية ببيانات الملف؟')}</p><p><strong>${esc(file.name)}</strong> · ${num(pendingImport.scenarios.length)} ${t('saved scenarios','سيناريوهات محفوظة')}</p><div class="dialog-actions"><button class="button button-secondary" data-action="close-dialog">${t('Cancel','إلغاء')}</button><button class="button button-primary" data-action="confirm-import">${t('Import and replace','استورد واستبدل')}</button></div>`);
    }catch{openDialog(t('File could not be imported','تعذّر استيراد الملف'),`<p role="alert">${t('Use a valid NURIMI workspace JSON file under 1MB. Current work has not changed.','استخدم ملف مكتب نوريمي JSON صالحاً وأقل من 1 ميغابايت. لم يتغير عملك الحالي.')}</p><button class="button button-secondary" data-action="export">${t('Return','رجوع')}</button>`);}return;
  }
});
document.addEventListener('submit',e=>{if(e.target.id==='scenario-form'){e.preventDefault();const name=document.getElementById('scenario-name').value.trim();if(!name)return;state.scenarios.push({name,unit:{...state.unit},portfolio:{...state.portfolio}});state.scenarios=state.scenarios.slice(-8);save();dialog.close();render(false);announce(t('Scenario saved on this browser.','تم حفظ السيناريو في هذا المتصفح.'));}});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();showSearch();}});
window.addEventListener('hashchange',()=>{if(dialog.open)dialog.close();render();});
window.addEventListener('pagehide',()=>{clearTimeout(saveTimer);try{localStorage.setItem(KEY,JSON.stringify(state));}catch{}});
render(false);save();if(failedRead)announce(t('Previous local data could not be read. A fresh workspace is available.','تعذّر قراءة البيانات المحلية السابقة. تتوفر مساحة جديدة.'));
