const esc = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]));

const text = (value, lang) => {
  if (value && typeof value === 'object') return value[lang] ?? value.en ?? value.ar ?? '';
  return value ?? '';
};

const locale = lang => lang === 'ar' ? 'ar-AE' : 'en-AE';
const number = (value, lang) => new Intl.NumberFormat(locale(lang)).format(Number(value) || 0);
const money = (value, lang) => new Intl.NumberFormat(locale(lang), {
  style: 'currency', currency: 'AED', maximumFractionDigits: 0
}).format(Number(value) || 0);
const phrase = (lang, en, ar) => lang === 'ar' ? ar : en;

const statusCopy = {
  received: {en: 'Received', ar: 'جديد'},
  preparing: {en: 'Preparing', ar: 'قيد التجهيز'},
  ready: {en: 'Ready', ar: 'جاهز'},
  collected: {en: 'Collected', ar: 'تم التسليم'}
};

const safeOrders = orders => Array.isArray(orders) ? orders : [];
const itemTotal = order => (order?.items || []).reduce((sum, item) => sum + (Number(item.qty) || 0) * (Number(item.unit) || 0), 0);
const itemCount = order => (order?.items || []).reduce((sum, item) => sum + (Number(item.qty) || 0), 0);

function demoMark(lang) {
  return `<span class="pm-ops-demo" aria-label="${phrase(lang, 'Demo preview. Fictional data.', 'معاينة تجريبية. بيانات افتراضية.')}">${phrase(lang, 'DEMO · FICTIONAL DATA', 'معاينة · بيانات افتراضية')}</span>`;
}

function workspaceChrome(lang, title, subtitle, body, className) {
  return `<section class="pm-ops-workspace ${className}" aria-label="${esc(title)}">
    <header class="pm-ops-chrome">
      <div class="pm-ops-brand" aria-label="Marrah"><span class="pm-ops-brand-mark" aria-hidden="true">m</span><span>marrah <b lang="ar">مرّة</b></span></div>
      <div class="pm-ops-chrome-copy"><strong>${esc(title)}</strong><span>${esc(subtitle)}</span></div>
      ${demoMark(lang)}
      <div class="pm-ops-chrome-meta"><span class="pm-ops-live-dot" aria-hidden="true"></span>${phrase(lang, 'Sample shift · 10:50', 'وردية تجريبية · ١٠:٥٠')}</div>
    </header>
    ${body}
  </section>`;
}

function orderCard(order, selectedId, lang) {
  const selected = String(order.id) === String(selectedId);
  const delayed = order.status === 'preparing' && Number(order.minutes) > 12;
  const items = (order.items || []).map(item => `${number(item.qty, lang)}× ${esc(text(item.name, lang))}`).join(' · ');
  return `<article class="pm-staff-order${selected ? ' is-selected' : ''}${delayed ? ' is-delayed' : ''}" aria-label="${phrase(lang, 'Order', 'طلب')} ${esc(order.id)}">
    <button class="pm-staff-order-select" type="button" data-pm-action="select-order" value="${esc(order.id)}" aria-pressed="${selected}">
      <span class="pm-staff-order-top"><strong>#${esc(order.id)}</strong><span class="pm-chip pm-staff-status pm-staff-status-${esc(order.status)}">${esc(text(statusCopy[order.status] || order.status, lang))}</span></span>
      <span class="pm-staff-order-items">${items || phrase(lang, 'No items listed', 'لا توجد أصناف')}</span>
      <span class="pm-staff-order-bottom"><span>${phrase(lang, 'Items', 'الأصناف')}: ${number(itemCount(order), lang)}</span><span class="pm-staff-time">${number(order.minutes, lang)} ${phrase(lang, 'min', 'د')}</span></span>
      ${delayed ? `<span class="pm-staff-delay"><b aria-hidden="true">!</b>${phrase(lang, 'Needs attention · over 12 min', 'يحتاج متابعة · أكثر من ١٢ دقيقة')}</span>` : ''}
    </button>
  </article>`;
}

function detailDrawer(order, scenario, lang) {
  if (!order) return `<aside class="pm-staff-drawer pm-card"><p class="pm-muted">${phrase(lang, 'Select an order to inspect it.', 'اختر طلبًا لعرض تفاصيله.')}</p></aside>`;
  const total = itemTotal(order);
  const lines = (order.items || []).map(item => `<li><span>${number(item.qty, lang)}× ${esc(text(item.name, lang))}</span><strong>${money((Number(item.qty) || 0) * (Number(item.unit) || 0), lang)}</strong></li>`).join('');
  const canReady = order.status === 'received' || order.status === 'preparing';
  const canCollect = order.status === 'ready';
  return `<aside class="pm-staff-drawer pm-card" aria-labelledby="pm-staff-detail-title">
    <div class="pm-staff-drawer-head"><div><span class="pm-ops-kicker">${phrase(lang, 'Selected order', 'الطلب المحدد')}</span><h3 id="pm-staff-detail-title">#${esc(order.id)}</h3></div><span class="pm-chip pm-staff-status pm-staff-status-${esc(order.status)}">${esc(text(statusCopy[order.status] || order.status, lang))}</span></div>
    <dl class="pm-staff-facts">
      <div><dt>${phrase(lang, 'Branch', 'الفرع')}</dt><dd>${esc(text(order.branch, lang))}</dd></div>
      <div><dt>${phrase(lang, 'Elapsed', 'الوقت المنقضي')}</dt><dd>${number(order.minutes, lang)} ${phrase(lang, 'minutes', 'دقيقة')}</dd></div>
      <div><dt>${phrase(lang, 'Payment', 'الدفع')}</dt><dd>${order.paid ? phrase(lang, 'Paid', 'مدفوع') : phrase(lang, 'Unpaid', 'غير مدفوع')}</dd></div>
      <div><dt>${phrase(lang, 'Amount', 'المبلغ')}</dt><dd>${money(total, lang)}</dd></div>
    </dl>
    <ul class="pm-staff-line-items" aria-label="${phrase(lang, 'Order items', 'أصناف الطلب')}">${lines}</ul>
    <div class="pm-staff-next">
      <span class="pm-ops-kicker">${phrase(lang, 'Next action', 'الإجراء التالي')}</span>
      ${canReady ? `<button class="pm-button pm-staff-primary" type="button" data-pm-action="mark-ready" value="${esc(order.id)}">${phrase(lang, 'Mark ready', 'تحديد كجاهز')}</button>` : ''}
      ${canCollect ? `<button class="pm-button pm-staff-primary" type="button" data-pm-action="mark-collected" value="${esc(order.id)}">${phrase(lang, 'Mark collected', 'تأكيد الاستلام')}</button>` : ''}
      ${order.status === 'collected' ? `<p class="pm-staff-complete">${phrase(lang, 'Collection recorded. No further queue action.', 'تم تسجيل الاستلام. لا يوجد إجراء آخر في قائمة الانتظار.')}</p>` : ''}
    </div>
    <p class="pm-muted pm-staff-reward-note">${phrase(lang, `Reward rule shown for context: ${text(scenario?.reward, lang) || 'merchant-defined'}. Readiness or collection does not award loyalty.`, `قاعدة المكافأة للسياق: ${text(scenario?.reward, lang) || 'يحددها التاجر'}. الجاهزية أو الاستلام لا يمنحان مكافأة.`)}</p>
    <button class="pm-button pm-staff-secondary" type="button" data-pm-action="go-customer" value="${esc(order.id)}">${phrase(lang, 'View customer tracker', 'عرض تتبع العميل')}</button>
  </aside>`;
}

export function renderStaff(props = {}) {
  const lang = props.lang === 'ar' ? 'ar' : 'en';
  const orders = safeOrders(props.orders);
  const filter = props.staffFilter || 'active';
  const query = String(props.staffQuery || '').trim().toLocaleLowerCase();
  const matches = order => !query || `#${order.id} ${(order.items || []).map(item => `${text(item.name,'en')} ${text(item.name,'ar')}`).join(' ')}`.toLocaleLowerCase().includes(query);
  const visible = orders.filter(order => (filter === 'active' ? order.status !== 'collected' : order.status === filter) && matches(order));
  const selected = visible.find(order => String(order.id) === String(props.selectedOrderId)) || visible[0];
  const columns = filter === 'collected' ? ['collected'] : ['received', 'preparing', 'ready'];
  const filters = ['active','received','preparing','ready','collected'];
  const toolbar = `<div class="pm-staff-toolbar">
    <div class="pm-staff-location"><span class="pm-ops-kicker">${phrase(lang, 'Merchant workspace', 'مساحة عمل التاجر')}</span><strong>${esc(text(props.scenario?.merchant, lang) || 'Merchant')}</strong><span>${esc(text(orders[0]?.branch,lang))}</span></div>
    <div class="pm-staff-search pm-field"><label for="pm-staff-query">${phrase(lang, 'Search order or item', 'ابحث بالطلب أو الصنف')}</label><input id="pm-staff-query" type="search" data-pm-control="staff-query" value="${esc(props.staffQuery || '')}" placeholder="${phrase(lang, '#1042 or item', '#١٠٤٢ أو صنف')}"></div>
  </div>
  <div class="pm-staff-filters" role="group" aria-label="${phrase(lang, 'Filter queue', 'تصفية قائمة الانتظار')}">${filters.map(value => `<button type="button" data-pm-action="staff-filter" value="${value}" aria-pressed="${filter === value}">${value === 'active' ? phrase(lang, 'Active', 'النشطة') : value === 'collected' ? phrase(lang, 'History', 'السجل') : esc(text(statusCopy[value], lang))}<span>${number(orders.filter(order => value === 'active' ? order.status !== 'collected' : order.status === value).length, lang)}</span></button>`).join('')}</div>`;
  const board = `<div class="pm-staff-board-wrap" role="region" aria-label="${phrase(lang, 'Order queue. Scroll within board on small screens.', 'قائمة الطلبات. مرّر داخل اللوحة على الشاشات الصغيرة.')}">
    <div class="pm-staff-board">${columns.map(status => {
      const cards = visible.filter(order => order.status === status);
      return `<section class="pm-staff-column pm-staff-column-${status}" aria-labelledby="pm-staff-col-${status}"><header><h3 id="pm-staff-col-${status}">${esc(text(statusCopy[status], lang))}</h3><span>${number(cards.length, lang)}</span></header><div class="pm-staff-stack">${cards.length ? cards.map(order => orderCard(order, selected?.id, lang)).join('') : `<p class="pm-staff-empty">${phrase(lang, 'No matching orders', 'لا توجد طلبات مطابقة')}</p>`}</div></section>`;
    }).join('')}</div>
  </div>`;
  const body = `<div class="pm-staff-shell">${toolbar}<div class="pm-staff-layout"><div>${board}</div>${detailDrawer(selected, props.scenario, lang)}</div></div>`;
  return workspaceChrome(lang, phrase(lang, 'Staff order board', 'لوحة طلبات الفريق'), phrase(lang, 'Staff browser workspace', 'مساحة الموظف عبر المتصفح'), body, 'pm-staff');
}

function metricCard(label, value, note, modifier = '') {
  return `<article class="pm-merchant-metric ${modifier}"><span>${label}</span><strong>${value}</strong>${note ? `<small>${note}</small>` : ''}</article>`;
}

function duration(minutes,lang){const total=Math.round((Number(minutes)||0)*60),m=Math.floor(total/60),s=total%60;return `${number(m,lang)}${phrase(lang,'m','د')}${s?` ${number(s,lang)}${phrase(lang,'s','ث')}`:''}`;}

function overview(props, lang) {
  const metrics = props.metrics || {};
  const history = Array.isArray(props.history) ? props.history : [];
  const maxSales = Math.max(1, ...history.map(row => Number(row.salesAED) || 0));
  const bars = history.map((row, index) => {
    const sales = Number(row.salesAED) || 0;
    const height = Math.max(6, Math.round((sales / maxSales) * 100));
    return `<div class="pm-merchant-bar-item"><div class="pm-merchant-bar-track"><span class="pm-merchant-bar" style="--pm-bar:${height}%" title="${esc(text(row.label, lang))}: ${money(sales, lang)}"></span></div><span>${esc(text(row.label, lang))}</span><small>${number(row.orders, lang)}</small></div>`;
  }).join('');
  const table = history.map(row => `<tr><th scope="row">${esc(text(row.label, lang))}</th><td>${number(row.orders, lang)}</td><td>${money(row.salesAED, lang)}</td></tr>`).join('');
  return `<div class="pm-merchant-overview">
    <section aria-labelledby="pm-merchant-snapshot-title"><div class="pm-merchant-section-head"><div><span class="pm-ops-kicker">${phrase(lang, 'Fictional period snapshot', 'لقطة افتراضية للفترة')}</span><h3 id="pm-merchant-snapshot-title">${phrase(lang, 'Business summary', 'ملخص الأعمال')}</h3></div><p>${phrase(lang, 'Illustrative values, not measured traction.', 'قيم توضيحية وليست نتائج نمو مقاسة.')}</p></div>
      <div class="pm-merchant-kpis">${metricCard(phrase(lang, 'Orders', 'الطلبات'), number(metrics.ordersTotal, lang), phrase(lang, 'Selected period', 'الفترة المحددة'))}${metricCard(phrase(lang, 'Sales', 'المبيعات'), money(metrics.salesAED, lang), phrase(lang, 'Illustrative gross sales', 'مبيعات إجمالية توضيحية'))}${metricCard(phrase(lang, 'Repeat share', 'نسبة التكرار'), `${number(metrics.repeatShare, lang)}%`, phrase(lang, 'Descriptive, not incremental sales', 'وصفي، وليس مبيعات إضافية'))}</div>
    </section>
    <section class="pm-merchant-live" aria-labelledby="pm-merchant-live-title"><div class="pm-merchant-section-head"><div><span class="pm-ops-kicker">${phrase(lang, 'Live operating view', 'عرض التشغيل المباشر')}</span><h3 id="pm-merchant-live-title">${phrase(lang, 'Queue now', 'قائمة الانتظار الآن')}</h3></div><button class="pm-button pm-merchant-link" type="button" data-pm-action="go-staff">${phrase(lang, 'Open staff board', 'فتح لوحة الفريق')}</button></div>
      <div class="pm-merchant-live-grid">${metricCard(phrase(lang, 'Active orders', 'طلبات نشطة'), number(metrics.activeOrders, lang), phrase(lang, 'Across visible queue', 'عبر قائمة الانتظار'), 'is-live')}${metricCard(phrase(lang, 'Ready', 'جاهزة'), number(metrics.readyOrders, lang), phrase(lang, 'Waiting for collection', 'بانتظار الاستلام'), 'is-ready')}${metricCard(phrase(lang, 'Late', 'متأخرة'), number(metrics.delayedOrders, lang), phrase(lang, 'Preparing over 12 min', 'تجهيز أكثر من ١٢ دقيقة'), 'is-late')}${metricCard(phrase(lang, 'Avg. prep', 'متوسط التجهيز'), duration(metrics.avgPrepMinutes,lang), phrase(lang, 'Current sample', 'العينة الحالية'))}</div>
    </section>
    <section class="pm-merchant-history" aria-labelledby="pm-merchant-history-title"><div class="pm-merchant-section-head"><div><span class="pm-ops-kicker">${phrase(lang, 'Historical snapshot', 'لقطة تاريخية')}</span><h3 id="pm-merchant-history-title">${phrase(lang, 'Sales and order volume', 'المبيعات وحجم الطلبات')}</h3></div><p>${phrase(lang, 'Bar height shows sales; labels show orders.', 'ارتفاع العمود يمثل المبيعات؛ والرقم يمثل الطلبات.')}</p></div>
      <div class="pm-merchant-chart" role="img" aria-label="${phrase(lang, 'Historical sales bar chart. Exact values available in data table below.', 'مخطط أعمدة للمبيعات التاريخية. القيم الدقيقة متاحة في جدول البيانات أدناه.')}">${bars || `<p class="pm-muted">${phrase(lang, 'No history supplied.', 'لا توجد بيانات تاريخية.')}</p>`}</div>
      <details class="pm-merchant-table"><summary>${phrase(lang, 'View exact chart data', 'عرض بيانات المخطط الدقيقة')}</summary><div class="pm-merchant-table-scroll" tabindex="0" role="region" aria-label="${phrase(lang, 'Historical data table', 'جدول البيانات التاريخية')}"><table><thead><tr><th scope="col">${phrase(lang, 'Period', 'الفترة')}</th><th scope="col">${phrase(lang, 'Orders', 'الطلبات')}</th><th scope="col">${phrase(lang, 'Sales', 'المبيعات')}</th></tr></thead><tbody>${table}</tbody></table></div></details>
    </section>
  </div>`;
}

function loyalty(props, lang) {
  const metrics = props.metrics || {};
  const visits=props.rewardReady?8:7;
  const reward = text(props.scenario?.reward, lang) || phrase(lang, 'Merchant-defined reward', 'مكافأة يحددها التاجر');
  return `<div class="pm-merchant-loyalty">
    <section class="pm-merchant-loyalty-hero"><div><span class="pm-ops-kicker">${phrase(lang, 'Sample loyalty programme', 'برنامج ولاء تجريبي')}</span><h3>${esc(text(props.scenario?.merchant, lang) || 'Merchant')} ${phrase(lang, 'rewards', 'للمكافآت')}</h3><p>${phrase(lang, 'Programme preview only. Rewards follow verified paid purchases. Readiness and collection do not earn stamps.', 'معاينة للبرنامج فقط. المكافآت تتبع المشتريات المدفوعة المثبتة. الجاهزية والتسليم لا يمنحان أختامًا.')}</p></div><div class="pm-merchant-stamp" aria-label="${phrase(lang, `Sample progress: ${visits} of eight`, `تقدم توضيحي: ${visits} من ثمانية`)}"><strong>${number(visits,lang)} / ${number(8,lang)}</strong><span>${phrase(lang, 'sample progress', 'تقدم تجريبي')}</span></div></section>
    <div class="pm-merchant-loyalty-grid">${metricCard(phrase(lang, 'Enrolled members', 'الأعضاء المسجلون'), number(metrics.loyaltyMembers, lang), phrase(lang, 'Fictional current total', 'إجمالي حالي افتراضي'))}${metricCard(phrase(lang, 'Rewards available', 'مكافآت متاحة'), number(metrics.rewardsAvailable, lang), phrase(lang, 'Current state', 'الحالة الحالية'))}${metricCard(phrase(lang, 'Redemptions', 'عمليات الاستبدال'), number(metrics.redemptions, lang), phrase(lang, 'Selected period', 'الفترة المحددة'))}</div>
    <section class="pm-merchant-rule pm-card"><span class="pm-ops-kicker">${phrase(lang, 'Reward shown to customer', 'المكافأة المعروضة للعميل')}</span><h4>${esc(reward)}</h4><p>${phrase(lang, 'Illustrative programme configuration. Merchant funding, expiry, refund treatment, and eligibility require explicit rules.', 'إعداد توضيحي للبرنامج. التمويل والانتهاء ومعالجة الاسترداد والأهلية تحتاج قواعد صريحة.')}</p></section>
  </div>`;
}

export function renderMerchant(props = {}) {
  const lang = props.lang === 'ar' ? 'ar' : 'en';
  const tab = props.merchantTab === 'loyalty' ? 'loyalty' : 'overview';
  const period = props.merchantPeriod === '4w' ? '4w' : '7d';
  const tabs = `<div class="pm-merchant-nav"><div role="tablist" aria-label="${phrase(lang, 'Merchant workspace sections', 'أقسام مساحة عمل التاجر')}"><button type="button" role="tab" aria-selected="${tab === 'overview'}" data-pm-action="merchant-tab" value="overview">${phrase(lang, 'Overview', 'نظرة عامة')}</button><button type="button" role="tab" aria-selected="${tab === 'loyalty'}" data-pm-action="merchant-tab" value="loyalty">${phrase(lang, 'Loyalty', 'الولاء')}</button></div><div class="pm-field pm-merchant-period"><label for="pm-merchant-period">${phrase(lang, 'Reporting period', 'فترة التقرير')}</label><select id="pm-merchant-period" data-pm-control="merchant-period"><option value="7d"${period === '7d' ? ' selected' : ''}>${phrase(lang, 'Last 7 days', 'آخر ٧ أيام')}</option><option value="4w"${period === '4w' ? ' selected' : ''}>${phrase(lang, 'Last 4 weeks', 'آخر ٤ أسابيع')}</option></select></div></div>`;
  const body = `<div class="pm-merchant-shell"><header class="pm-merchant-title"><div><span class="pm-ops-kicker">${phrase(lang, 'Merchant workspace', 'مساحة عمل التاجر')}</span><h2>${esc(text(props.scenario?.merchant, lang) || 'Merchant')}</h2><p>${esc(text(props.orders?.[0]?.branch,lang))} · ${phrase(lang,'Sample analytics','تحليلات توضيحية')}</p></div><span class="pm-chip">${esc(text(props.scenario?.name, lang) || phrase(lang, 'Retail', 'تجزئة'))}</span></header>${tabs}${tab === 'overview' ? overview(props, lang) : loyalty(props, lang)}</div>`;
  return workspaceChrome(lang, phrase(lang, 'Merchant operations', 'عمليات التاجر'), phrase(lang, 'Analytics workspace · sample data', 'مساحة تحليلات · بيانات تجريبية'), body, 'pm-merchant');
}
