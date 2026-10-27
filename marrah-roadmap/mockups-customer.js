const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[character]));

const textFor = (value, lang) => {
  if (value && typeof value === 'object') return value[lang] ?? value.en ?? value.ar ?? '';
  return value ?? '';
};

const copy = (lang, en, ar) => lang === 'ar' ? ar : en;

const statusIndex = status => ({received: 0, preparing: 1, ready: 2, collected: 3}[status] ?? 0);

const money = (value, lang) => new Intl.NumberFormat(lang==='ar'?'ar-AE':'en-AE', {
  style:'currency',currency:'AED',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(Number.isFinite(value) ? value : 0);

export function renderCustomer(props = {}) {
  const lang = props.lang === 'ar' ? 'ar' : 'en';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const scenario = props.scenario ?? {};
  const order = props.order ?? {};
  const items = Array.isArray(order.items) ? order.items : [];
  const customerTab = props.customerTab === 'rewards' ? 'rewards' : 'order';
  const channel = ['onscreen', 'whatsapp', 'sms'].includes(props.channel) ? props.channel : 'onscreen';
  const currentStatus = ['received', 'preparing', 'ready', 'collected'].includes(order.status) ? order.status : 'received';
  const currentStep = statusIndex(currentStatus);
  const total = items.reduce((sum, item) => sum + (Number(item.qty) || 0) * (Number(item.unit) || 0), 0);
  const merchant = textFor(scenario.merchant, lang) || copy(lang, 'Marrah Store', 'متجر مرّة');
  const branch = textFor(order.branch, lang);
  const visits = props.rewardReady ? 8 : 7;
  const reward = textFor(scenario.reward, lang) || copy(lang, 'A reward on your next visit', 'مكافأة في زيارتك القادمة');
  const prepLabel = textFor(scenario.prepLabel, lang) || copy(lang, 'Ready in about', 'جاهز خلال نحو');
  const statusLabels = [
    [copy(lang, 'Confirmed', 'مؤكد'), copy(lang, 'We have your order', 'تم تأكيد طلبك')],
    [prepLabel, copy(lang, 'Sample estimate: 4–6 minutes', 'تقدير توضيحي: ٤–٦ دقائق')],
    [copy(lang, 'Ready', 'جاهز'), copy(lang, 'Show code at collection', 'أظهر الرمز عند الاستلام')],
    [copy(lang, 'Collected', 'تم التسليم'), copy(lang, 'Thanks for visiting', 'شكرًا لزيارتك')]
  ];
  const statusLine = currentStatus === 'preparing'
    ? statusLabels[1][1]
    : statusLabels[currentStep][1];

  const orderPanel = `
    <section class="pm-customer-panel" id="pm-customer-order-panel" role="tabpanel" aria-labelledby="pm-customer-order-tab">
      <div class="pm-customer-order-head">
        <div>
          <p class="pm-customer-eyebrow">${copy(lang, 'Tracking page', 'صفحة التتبع')}</p>
          <h3>${copy(lang, 'Order', 'الطلب')} #${escapeHtml(order.id || '1042')}</h3>
          <p>${escapeHtml(branch)}</p>
        </div>
        ${order.paid ? `<span class="pm-customer-paid">${copy(lang, 'Paid', 'مدفوع')}</span>` : ''}
      </div>
      <div class="pm-customer-current" aria-live="polite">
        <span class="pm-customer-status-dot" aria-hidden="true"></span>
        <div><strong>${escapeHtml(statusLabels[currentStep][0])}</strong><span>${escapeHtml(statusLine)}</span></div>
      </div>
      <ol class="pm-customer-progress" aria-label="${copy(lang, 'Order progress', 'تقدم الطلب')}">
        ${statusLabels.map(([label], index) => `<li class="${index <= currentStep ? 'is-complete' : ''} ${index === currentStep ? 'is-current' : ''}"${index === currentStep ? ' aria-current="step"' : ''}><span aria-hidden="true">${index < currentStep ? '✓' : index + 1}</span><small>${escapeHtml(label)}</small></li>`).join('')}
      </ol>
      ${currentStatus === 'ready' ? `<div class="pm-customer-code"><span>${copy(lang, 'Collection code', 'رمز الاستلام')}</span><strong dir="ltr">${escapeHtml(String(order.id||'1042').slice(-3))}</strong><small>${copy(lang, 'Show this screen at the counter', 'أظهر هذه الشاشة عند المنضدة')}</small></div>` : ''}
      <div class="pm-customer-receipt">
        <h4>${copy(lang, 'Your items', 'مشترياتك')}</h4>
        <ul>${items.map(item => `<li><span><b>${escapeHtml(Number(item.qty) || 0)}×</b> ${escapeHtml(textFor(item.name, lang))}</span><span>${escapeHtml(money((Number(item.qty) || 0) * (Number(item.unit) || 0),lang))}</span></li>`).join('')}</ul>
        <div class="pm-customer-total"><strong>${copy(lang, 'Total', 'الإجمالي')}</strong><strong>${escapeHtml(money(total,lang))}</strong></div>
      </div>
      <div class="pm-customer-collection"><span aria-hidden="true">↗</span><div><strong>${copy(lang, 'Collection', 'الاستلام')}</strong><p>${copy(lang, 'Ask at the counter when your order is ready.', 'توجه إلى المنضدة عندما يصبح طلبك جاهزًا.')}</p></div></div>
      <fieldset class="pm-customer-channel">
        <legend>${copy(lang, 'Order updates', 'تحديثات الطلب')}</legend>
        <p>${copy(lang, 'Preview a channel. No message will be sent.', 'عاين قناة التحديث. لن يتم إرسال أي رسالة.')}</p>
        <div>
          ${[['onscreen', copy(lang, 'On screen', 'على الشاشة')], ['whatsapp', 'WhatsApp'], ['sms', copy(lang, 'SMS', 'رسالة نصية')]].map(([value, label]) => `<button type="button" data-pm-action="channel" data-pm-value="${value}" aria-pressed="${channel === value}">${escapeHtml(label)}</button>`).join('')}
        </div>
      </fieldset>
    </section>`;

  const rewardsPanel = `
    <section class="pm-customer-panel pm-customer-rewards" id="pm-customer-rewards-panel" role="tabpanel" aria-labelledby="pm-customer-rewards-tab">
      <p class="pm-customer-eyebrow">${copy(lang, 'Sample member at', 'عضو توضيحي لدى')} ${escapeHtml(merchant)}</p>
      <h3>${props.rewardReady ? copy(lang, 'A little thank-you is ready', 'هدية شكر صغيرة جاهزة') : copy(lang, 'One more visit', 'زيارة واحدة متبقية')}</h3>
      <p class="pm-customer-reward-intro">${props.rewardReady ? escapeHtml(reward) : copy(lang, 'Complete eight paid visits to preview the reward state.', 'أكمل ثماني زيارات مدفوعة لمعاينة حالة المكافأة.')}</p>
      <div class="pm-customer-stamp-card">
        <div class="pm-customer-stamp-top"><span>${copy(lang, 'Paid visits', 'زيارات مدفوعة')}</span><strong>${visits}/8</strong></div>
        <ol aria-label="${copy(lang, `${visits} of 8 paid visits`, `${visits} من 8 زيارات مدفوعة`)}">
          ${Array.from({length: 8}, (_, index) => `<li class="${index < visits ? 'is-earned' : ''}"><span aria-hidden="true">${index < visits ? '✓' : index + 1}</span><span class="pm-customer-sr">${index < visits ? copy(lang, `Visit ${index + 1} complete`, `الزيارة ${index + 1} مكتملة`) : copy(lang, `Visit ${index + 1} not complete`, `الزيارة ${index + 1} غير مكتملة`)}</span></li>`).join('')}
        </ol>
        ${props.rewardReady ? `<div class="pm-customer-reward-ready"><span>${copy(lang, 'Reward available', 'المكافأة متاحة')}</span><strong>${escapeHtml(reward)}</strong><small>${copy(lang, 'Concept preview. Redemption is not active.', 'معاينة تصورية. الاستبدال غير مفعّل.')}</small></div>` : ''}
      </div>
      <button class="pm-button pm-customer-primary" type="button" data-pm-action="wallet-preview" aria-expanded="${props.walletExpanded ? 'true' : 'false'}" aria-controls="pm-customer-wallet-card">${props.walletExpanded?copy(lang,'Hide Wallet preview','إخفاء معاينة المحفظة'):copy(lang, 'Preview Wallet card', 'معاينة بطاقة المحفظة')}</button>
      <div class="pm-customer-wallet ${props.walletExpanded ? 'is-open' : ''}" id="pm-customer-wallet-card" ${props.walletExpanded ? '' : 'hidden'}>
        <span>${copy(lang, 'Wallet card concept', 'تصور بطاقة المحفظة')}</span>
        <strong>${escapeHtml(merchant)}</strong>
        <small>${visits}/8 · ${copy(lang, 'Demo pass, not issued', 'بطاقة تجريبية، غير مُصدرة')}</small>
      </div>
      <button class="pm-button pm-customer-secondary" type="button" data-pm-action="reward-scenario">${props.rewardReady?copy(lang,'Back to one visit away','العودة لحالة زيارة واحدة متبقية'):copy(lang, 'Preview reward-ready state', 'معاينة حالة المكافأة الجاهزة')}</button>
    </section>`;

  return `<div class="pm-customer" id="pm-customer-root" lang="${lang}" dir="${dir}">
    <div class="pm-customer-phone" aria-label="${copy(lang, 'Interactive customer phone concept', 'تصور تفاعلي لهاتف العميل')}">
      <div class="pm-customer-hardware" aria-hidden="true"><span></span></div>
      <div class="pm-customer-screen">
        <div class="pm-customer-browser"><span aria-hidden="true">‹</span><div><span aria-hidden="true">●</span> marrah.example</div><span aria-hidden="true">⋯</span></div>
        <header class="pm-customer-appbar">
          <div class="pm-customer-brand"><span class="pm-customer-mark" aria-hidden="true">M</span><div><strong>${escapeHtml(merchant)}</strong><small>${copy(lang, 'Customer preview', 'معاينة العميل')}</small></div></div>
          <span class="pm-customer-demo">DEMO / معاينة</span>
        </header>
        <nav class="pm-customer-tabs" role="tablist" aria-label="${copy(lang, 'Customer view', 'واجهة العميل')}">
          <button id="pm-customer-order-tab" type="button" role="tab" aria-selected="${customerTab === 'order'}" aria-controls="pm-customer-order-panel" tabindex="${customerTab === 'order' ? '0' : '-1'}" data-pm-action="customer-tab" data-pm-value="order">${copy(lang, 'Order', 'الطلب')}</button>
          <button id="pm-customer-rewards-tab" type="button" role="tab" aria-selected="${customerTab === 'rewards'}" aria-controls="pm-customer-rewards-panel" tabindex="${customerTab === 'rewards' ? '0' : '-1'}" data-pm-action="customer-tab" data-pm-value="rewards">${copy(lang, 'Rewards', 'المكافآت')}</button>
        </nav>
        <div class="pm-customer-content">${orderPanel.replace('role="tabpanel"',`role="tabpanel"${customerTab==='order'?'':' hidden'}`)}${rewardsPanel.replace('role="tabpanel"',`role="tabpanel"${customerTab==='rewards'?'':' hidden'}`)}</div>
        <footer class="pm-customer-footer"><span>${copy(lang, 'Local sample data only', 'بيانات تجريبية محلية فقط')}</span><button type="button" data-pm-action="go-staff">${copy(lang, 'View staff screen', 'عرض شاشة الموظف')} <span aria-hidden="true">→</span></button></footer>
      </div>
    </div>
  </div>`;
}
