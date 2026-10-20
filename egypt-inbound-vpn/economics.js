(function () {
  'use strict';

  window.NileModules = window.NileModules || {};

  window.NileModules.economics = function (N) {
    var root = document.getElementById('economics-root');
    if (!root) return;

    var source = (N.data && N.data.economics) || {};
    var unit = source.unitEconomicsModel || source.unitEconomics || source;
    var acquisition = source.paidAcquisitionTestSpec || source.paidAcquisition || {};
    var canonicalPlans = unit.plans || [];
    var fixed = unit.fixedMonthlyOpEx || {};
    var fixedTotal = Number(fixed.totalUsd) || 1050;
    var fixedItems = fixed.breakdown || [];
    var defaults = unit.defaultAcquisitionAssumptions || {};

    var esc = function (value) {
      return N.escape(String(value == null ? '' : value).replace(/[\u2013\u2014]/g, '-'));
    };
    var money = function (value) { return N.money(Number(value) || 0); };
    var state = {
      subscribers: 3000,
      annualMix: 60,
      fee: 15,
      cac: 10.5,
      model: 'brief',
      budget: 'canonical',
      angle: 'banking'
    };

    var models = {
      brief: {
        label: 'Requested brief',
        monthly: 4.99,
        annual: 39.99,
        monthlyVariable: 0.78,
        annualVariable: 0.78,
        monthlyInfra: 0.53,
        annualInfra: 0.53,
        note: 'Monthly + $39.99 annual mix. Uses canonical Standard plan cost ($0.78/user/month) as baseline; Family sales excluded from P&L until household usage is measured.'
      },
      canonical: {
        label: 'Seed-derived 50/50 scenario',
        monthly: 6.99,
        annual: 59.99,
        monthlyVariable: 1.615,
        annualVariable: 2.45,
        monthlyInfra: 1.315,
        annualInfra: 2.10,
        note: 'Monthly cohort assumes 50% $4.99 Standard + 50% $8.99 Banking. Annual cohort uses $59.99 Banking, recognised as $5.00/month ($59.99 / 12; seed rounds monthly equivalent to $4.99). Cost follows selected annual mix: $1.615 monthly mix vs. $2.45 annual Banking.'
      }
    };

    var defaultHooks = [
      { id: 'banking', tab: 'Banking', headline: 'بنكك المصري من أي مكان', hook: 'تطبيق البنك الأهلي أو بنك مصر أو إنستا باي بيعلق أو بيقفل حسابك وانت في السعودية أو الإمارات؟', value: 'Dedicated 1:1 Egyptian IP pinned exclusively to you; no shared VPN fraud lockouts.', tag: 'Canonical hook' },
      { id: 'government', tab: 'Government', headline: 'خلص ورق أهلك ومصالحك الحكومية وانت برا', hook: 'بوابة مصر الرقمية أو مخالفات المرور أو شحن خط وي وفودافون مش بيفتحوا برا مصر؟', value: 'Instant access to digital.gov.eg, ppo.gov.eg, and My WE with a live 15-minute verified status board.', tag: 'Canonical hook' },
      { id: 'ramadan', tab: 'Ramadan + football', headline: 'رمضان والدوري المصري زي ما في البيت', hook: 'اتفرج على ماتشات الأهلي والزمالك ومسلسلات رمضان على Watch iT بجودة عالية ومن غير إعلانات مزعجة.', value: '10 Gbps Marseille Virtual Egypt streaming servers with zero forced ads and zero buffering.', tag: 'Canonical hook' },
      { id: 'speed', tab: 'Zero-ad speed', headline: 'سرعة من غير مطاردة إعلانات', hook: 'اتصل بمصر من غير 30 إعلان في خمس دقايق ومن غير تطبيقات تتبعك.', value: 'Proposed angle: ad-free, tracker-free access. Validate speed and conversion claims before launch.', tag: 'Proposed · validate' }
    ];

    var seedHooks = acquisition.positioningAngles || [];
    var hooks = defaultHooks.map(function (fallback, i) {
      var seed = seedHooks[i];
      if (!seed) return fallback;
      return {
        id: fallback.id,
        tab: fallback.tab,
        headline: seed.arabicHeadline || fallback.headline,
        hook: seed.hook || fallback.hook,
        value: seed.valueProp || fallback.value,
        tag: fallback.tag
      };
    });

    root.innerHTML = [
      '<div class="e-shell">',
        '<div class="e-scenario-bar">',
          '<div><strong>Economics scenario</strong><span class="tiny muted">Switch assumptions; controls remain fixed.</span></div>',
          '<div class="segmented e-model-switch" aria-label="Economics model">',
            '<button class="button primary" type="button" data-model="brief" aria-pressed="true">Requested brief</button>',
            '<button class="button" type="button" data-model="canonical" aria-pressed="false">Canonical seed</button>',
          '</div>',
        '</div>',

        '<div class="e-lab">',
          '<form class="panel e-controls" aria-label="Unit economics assumptions">',
            range('subs', 'Paid subscribers', 500, 25000, 100, 3000, '500-25,000', 'e-subs-out'),
            range('annual', 'Annual plan mix', 20, 85, 1, 60, 'Share billed annually', 'e-annual-out'),
            range('fee', 'Store fee regime', 10, 15, 5, 15, '10% blended web or 15% store; eligibility requires validation', 'e-fee-out'),
            range('cac', 'Paid CAC', 6, 20, 0.5, 10.5, '$6-$20 per subscriber', 'e-cac-out'),
          '</form>',

          '<section class="panel e-stage" aria-label="Live profit and loss projection">',
            '<div class="e-kpis metrics" aria-live="polite">',
              metric('Recognised MRR', 'e-mrr', 'Subscription revenue recognised monthly'),
              metric('Store fees', 'e-fees', 'Applied to gross recognised revenue'),
              metric('Network / IP cost', 'e-infra', '$700 fixed + server/IP cost per user'),
              metric('Net operating margin', 'e-net', 'Before paid UA, tax and founder salaries'),
            '</div>',
            '<div class="e-chart-head"><div><h3>Revenue, cost, and operating profit</h3><p class="tiny muted">Subscriber scale · monthly projection</p></div><div class="e-legend" aria-hidden="true"><span class="e-revenue">Revenue</span><span class="e-cost">Cost</span><span class="e-profit">Profit</span></div></div>',
            '<div class="e-chart-wrap"><svg id="e-chart" class="e-chart" viewBox="0 0 720 272" role="img" aria-labelledby="e-chart-title e-chart-desc"><title id="e-chart-title">Monthly economics by paid subscriber count</title><desc id="e-chart-desc">Revenue, total cost, and operating profit lines. Includes computed break-even and the 220-subscriber brief reference.</desc></svg></div>',
            '<div class="e-cohort metrics">',
              metric('LTV : CAC', 'e-ltv', 'Assumes 4% monthly churn'),
              metric('CAC payback', 'e-payback', 'Contribution payback before fixed OpEx'),
              metric('Computed break-even', 'e-break-even', 'Subscribers at zero operating profit'),
              metric('Annual upfront cash', 'e-cash', 'Cash collected now; not recognised MRR'),
            '</div>',
            '<div class="e-targets" aria-label="Brief reference targets"><span><b>5.5×</b> LTV:CAC brief target</span><span><b>1.9 months</b> payback brief target</span><small>Reference markers only; live values above show projection.</small></div>',
            '<p class="e-model-note tiny" id="e-model-note"></p>',
          '</section>',
        '</div>',

        '<section class="e-section" aria-labelledby="e-pricing-title">',
          '<div class="e-section-head"><div><span class="pill">Offer architecture</span><h3 id="e-pricing-title">Three launch prices. Two modeling lenses.</h3></div><p class="muted">Pricing cards remain requested offer. Switch model above to audit canonical seed economics.</p></div>',
          '<div class="e-pricing">',
            priceCard('Monthly', '$4.99', '/ month', 'Low-friction entry', ['Standard Egypt access', 'Cancel monthly']),
            priceCard('Annual diaspora pass', '$39.99', '/ year', 'Hero offer · $3.33/month', ['Annual commitment', '3-day trial proposed'], true),
            priceCard('Family & multi-home', '$59.99', '/ year', 'Household offer', ['Multi-device positioning', 'Usage cost needs validation']),
          '</div>',
          '<details class="panel e-details"><summary>Canonical plan facts and formula assumptions</summary><div class="e-detail-grid">',
            '<div><h4>Canonical plans</h4><div id="e-canonical-plans"></div></div>',
            '<div><h4>Fixed monthly OpEx · '+esc(money(fixedTotal))+'</h4><ul id="e-fixed-list"></ul></div>',
            '<div><h4>Recognition and cash</h4><p>Recognised MRR spreads annual price across 12 months. Annual upfront cash shows post-fee cash collected at purchase. Profit uses recognised revenue, never upfront cash.</p><p>Net operating profit = recognised revenue − store fee − variable costs − $'+esc(fixedTotal.toFixed(0))+' fixed OpEx.</p><p>Network / IP cost is a subtotal: $700 fixed network capacity plus server and IP variable costs. Total cost adds store fees, support/refund reserves and the remaining $350 fixed overhead. CAC affects payback; ongoing acquisition spend, tax and founder salaries are excluded.</p></div>',
            '<div><h4>LTV and acquisition</h4><p>LTV uses monthly contribution ÷ assumed 4% monthly churn. LTV:CAC and payback are projections, not achieved ratios. Family sales and tax are excluded.</p></div>',
          '</div></details>',
        '</section>',

        '<section class="e-section e-acquisition" aria-labelledby="e-ua-title">',
          '<div class="e-section-head"><div><span class="pill">$1,500 validation sprint</span><h3 id="e-ua-title">Buy evidence before scale.</h3></div><div class="segmented e-budget-switch" aria-label="Campaign budget split"><button class="button primary" type="button" data-budget="canonical" aria-pressed="true">Canonical paid social</button><button class="button" type="button" data-budget="handover" aria-pressed="false">Handover store-led</button></div></div>',
          '<div class="e-ua-grid">',
            '<article class="panel e-budget"><div class="e-budget-bars" id="e-budget-bars"></div><div class="e-funnel" aria-label="Acquisition funnel projection"><div><strong>$0.80</strong><span>target CPI</span></div><i aria-hidden="true">→</i><div><strong>1,875</strong><span>installs</span></div><i aria-hidden="true">→</i><div><strong>5%</strong><span>paid</span></div><i aria-hidden="true">→</i><div><strong>≈94</strong><span>subscribers</span></div><i aria-hidden="true">→</i><div><strong>$16</strong><span>seed CAC</span></div></div><p class="tiny muted">Seed test assumption. Pause creative when CPI exceeds $1.50; do not infer CAC from installs until paid conversion matures.</p></article>',
            '<article class="panel e-ad-lab"><div class="segmented e-hook-switch" aria-label="Arabic ad preview"></div><div class="e-phone-ad" dir="rtl"><span class="pill" id="e-hook-tag"></span><p class="e-arabic-kicker">NileGate · نايل جيت</p><h4 id="e-hook-headline"></h4><p id="e-hook-copy"></p><div class="e-ad-proof" id="e-hook-value"></div><button class="button primary" id="e-preview-cta" type="button" lang="ar">جرّب ٣ أيام</button></div><p class="tiny muted" style="margin-top:12px">Creative preview only. Claims require validation before publication.</p></article>',
          '</div>',
          '<details class="panel e-details"><summary>ASO keyword test set</summary><div class="e-keywords" id="e-keywords"></div></details>',
        '</section>',
      '</div>'
    ].join('');

    function range(id, label, min, max, step, value, help, outputId) {
      return '<div class="e-field"><div class="e-label-row"><label for="e-'+id+'">'+esc(label)+'</label><output class="mono" id="'+outputId+'" for="e-'+id+'"></output></div><input id="e-'+id+'" type="range" min="'+min+'" max="'+max+'" step="'+step+'" value="'+value+'" aria-describedby="e-'+id+'-help"><p class="tiny muted" id="e-'+id+'-help">'+esc(help)+'</p></div>';
    }

    function metric(label, id, help) {
      return '<div class="metric e-metric"><span>'+esc(label)+'</span><strong class="mono" id="'+id+'">-</strong><small>'+esc(help)+'</small></div>';
    }

    function priceCard(name, price, cadence, note, features, featured) {
      return '<article class="panel e-price'+(featured ? ' e-price-featured' : '')+'">'+(featured ? '<span class="pill">Hero plan</span>' : '<span class="e-price-spacer"></span>')+'<h4>'+esc(name)+'</h4><div class="e-price-number mono">'+esc(price)+' <small>'+esc(cadence)+'</small></div><p class="muted">'+esc(note)+'</p><ul>'+features.map(function (x) { return '<li>'+esc(x)+'</li>'; }).join('')+'</ul></article>';
    }

    function renderFacts() {
      var plansHost = root.querySelector('#e-canonical-plans');
      var fallbacks = [
        { name: 'Standard · $4.99/month', totalVariableCost: 0.78, monthlyContributionMargin: 3.46, marginPct: 81.6 },
        { name: 'Banking sticky · $8.99/month', totalVariableCost: 2.45, monthlyContributionMargin: 5.19, marginPct: 67.9 },
        { name: 'Annual banking · $59.99/year', netUpfrontAfter15PctFee: 50.99, day1NetCashAfterAnnualInfraReserve: 25.19 }
      ];
      var plans = canonicalPlans.length ? canonicalPlans : fallbacks;
      plansHost.innerHTML = plans.map(function (plan) {
        var price = plan.monthlyPriceUsd ? money(plan.monthlyPriceUsd)+'/mo' : money(plan.annualPriceUsd || 59.99)+'/yr';
        var facts = plan.totalVariableCost != null
          ? 'Variable '+money(plan.totalVariableCost)+' · contribution '+money(plan.monthlyContributionMargin)+' · '+esc(plan.marginPct)+'%'
          : 'Net upfront '+money(plan.netUpfrontAfter15PctFee)+' · day-one cash after reserve '+money(plan.day1NetCashAfterAnnualInfraReserve);
        return '<div class="e-fact"><strong>'+esc(plan.name)+'</strong><span class="mono">'+esc(price)+'</span><small>'+facts+'</small></div>';
      }).join('');

      var items = fixedItems.length ? fixedItems : [
        { item: '2× Marseille 10Gbps + /24 GeoFeed lease', costUsd: 320 },
        { item: '3× Cairo relay pools + first 100 sticky IPs', costUsd: 380 },
        { item: 'Offshore control plane + monitoring', costUsd: 150 },
        { item: 'IP intelligence subscriptions', costUsd: 100 },
        { item: 'Entity maintenance + accounting', costUsd: 100 }
      ];
      root.querySelector('#e-fixed-list').innerHTML = items.map(function (item) { return '<li><span>'+esc(item.item)+'</span><strong class="mono">'+esc(money(item.costUsd))+'</strong></li>'; }).join('');
      var words = (acquisition.asoKeywords || ['vpn مصر','ip مصري','egypt vpn','egyptian ip address','vpn مصري مجاني','تشغيل البنك الاهلي خارج مصر','تشغيل انستا باي خارج مصر','بوابة مصر الرقمية من الخارج']);
      root.querySelector('#e-keywords').innerHTML = words.map(function (word) { return '<span class="pill" dir="auto">'+esc(word)+'</span>'; }).join('');
    }

    function calc(subscribers) {
      var model = models[state.model];
      var annualShare = state.annualMix / 100;
      var monthlyShare = 1 - annualShare;
      var monthlyEquivalent = (monthlyShare * model.monthly) + (annualShare * model.annual / 12);
      var gross = subscribers * monthlyEquivalent;
      var fees = gross * state.fee / 100;
      var variablePerSubscriber = (monthlyShare * model.monthlyVariable) + (annualShare * model.annualVariable);
      var infraPerSubscriber = (monthlyShare * model.monthlyInfra) + (annualShare * model.annualInfra);
      var variable = subscribers * variablePerSubscriber;
      var infra = 700 + subscribers * infraPerSubscriber;
      var totalCost = fees + variable + fixedTotal;
      var net = gross - totalCost;
      var contribution = monthlyEquivalent * (1 - state.fee / 100) - variablePerSubscriber;
      var breakEven = contribution > 0 ? Math.ceil(fixedTotal / contribution) : Infinity;
      var ltv = contribution > 0 ? contribution / 0.04 : 0;
      return {
        gross: gross, fees: fees, variable: variable, infra: infra, totalCost: totalCost,
        net: net, margin: gross ? net / gross * 100 : 0, contribution: contribution,
        breakEven: breakEven, ltvCac: state.cac ? ltv / state.cac : 0,
        payback: contribution > 0 ? state.cac / contribution : Infinity,
        cash: subscribers * annualShare * model.annual * (1 - state.fee / 100)
      };
    }

    function update() {
      var result = calc(state.subscribers);
      textOut('e-subs-out', state.subscribers.toLocaleString('en-US'));
      textOut('e-annual-out', state.annualMix+'%');
      textOut('e-fee-out', state.fee+'%');
      textOut('e-cac-out', '$' + state.cac.toFixed(2));
      textOut('e-mrr', money(result.gross));
      textOut('e-fees', '−'+money(result.fees));
      textOut('e-infra', money(result.infra));
      textOut('e-net', (result.net < 0 ? '−' : '')+money(Math.abs(result.net))+' · '+result.margin.toFixed(1)+'%');
      textOut('e-ltv', result.ltvCac.toFixed(1)+'×');
      textOut('e-payback', result.payback.toFixed(1)+' months');
      textOut('e-break-even', isFinite(result.breakEven) ? result.breakEven.toLocaleString('en-US')+' paid' : 'Not reached');
      textOut('e-cash', money(result.cash));
      textOut('e-model-note', models[state.model].label+': '+models[state.model].note);
      drawChart(result.breakEven);
    }

    function textOut(id, value) {
      var el = root.querySelector('#'+id);
      if (el) el.textContent = value;
    }

    function drawChart(breakEven) {
      var svg = root.querySelector('#e-chart');
      var width = 720, height = 272, left = 42, right = 18, top = 18, bottom = 38;
      var plotW = width-left-right, plotH = height-top-bottom;
      var maxSubs = 25000;
      var samples = [];
      for (var i=0; i<=40; i++) samples.push(calc(maxSubs*i/40));
      var maxY = Math.max.apply(null, samples.map(function (d) { return Math.max(d.gross, d.totalCost, Math.abs(d.net)); })) * 1.08;
      var x = function (subs) { return left + (subs/maxSubs)*plotW; };
      var minY = -fixedTotal * 2;
      var y = function (value) { return top + ((maxY - value)/(maxY - minY))*plotH; };
      var line = function (key) { return samples.map(function (d, i) { return (i ? 'L' : 'M')+x(maxSubs*i/40).toFixed(1)+','+y(d[key]).toFixed(1); }).join(' '); };
      var currentX = x(state.subscribers);
      var breakX = x(Math.min(maxSubs, breakEven));
      var refX = x(220);
      var yZero = y(0);
      svg.innerHTML = '<title id="e-chart-title">Monthly economics by paid subscriber count</title><desc id="e-chart-desc">Revenue, total cost, and operating profit including losses below break-even. Computed break-even is '+esc(breakEven)+' paid subscribers. Brief reference is 220.</desc>'+
        '<g class="e-grid"><line x1="'+left+'" y1="'+top+'" x2="'+left+'" y2="'+yZero+'"/><line x1="'+left+'" y1="'+yZero+'" x2="'+(width-right)+'" y2="'+yZero+'"/><line x1="'+left+'" y1="'+y(maxY/2)+'" x2="'+(width-right)+'" y2="'+y(maxY/2)+'"/><text x="'+(left-6)+'" y="'+(top+4)+'" text-anchor="end">$'+Math.round(maxY/1000)+'k</text><text x="'+(left-6)+'" y="'+(yZero+4)+'" text-anchor="end">$0</text><text x="'+left+'" y="'+(height-12)+'">0</text><text x="'+x(12500)+'" y="'+(height-12)+'" text-anchor="middle">12.5k</text><text x="'+x(25000)+'" y="'+(height-12)+'" text-anchor="end">25k subscribers</text></g>'+
        '<path class="e-line e-line-revenue" d="'+line('gross')+'"/><path class="e-line e-line-cost" d="'+line('totalCost')+'"/><path class="e-line e-line-profit" d="'+line('net')+'"/>'+
        '<g class="e-marker e-marker-ref"><line x1="'+refX+'" y1="'+top+'" x2="'+refX+'" y2="'+yZero+'"/><text x="'+(refX+6)+'" y="'+(top+13)+'">brief ref · 220</text></g>'+
        '<g class="e-marker e-marker-break"><line x1="'+breakX+'" y1="'+top+'" x2="'+breakX+'" y2="'+yZero+'"/><text x="'+(breakX+6)+'" y="'+(top+29)+'">computed · '+esc(breakEven)+'</text></g>'+
        '<g class="e-marker e-marker-current"><line x1="'+currentX+'" y1="'+top+'" x2="'+currentX+'" y2="'+yZero+'"/><circle cx="'+currentX+'" cy="'+y(calc(state.subscribers).gross)+'" r="4"/><text x="'+(currentX > 570 ? currentX-7 : currentX+7)+'" y="'+(yZero-8)+'" text-anchor="'+(currentX > 570 ? 'end' : 'start')+'">'+state.subscribers.toLocaleString('en-US')+' selected</text></g>';
    }

    function renderBudget() {
      var canonical = [
        { name: 'Meta · Arabic expat', amount: 750 },
        { name: 'TikTok Spark Ads', amount: 450 },
        { name: 'Google App Campaigns', amount: 300 }
      ];
      var handover = [
        { name: 'Apple Search Ads', amount: 600 },
        { name: 'Meta · KSA/UAE/Kuwait', amount: 600 },
        { name: 'Google App Campaigns', amount: 300 }
      ];
      var rows = state.budget === 'canonical' ? canonical : handover;
      root.querySelector('#e-budget-bars').innerHTML = '<div class="e-budget-title"><strong>'+(state.budget === 'canonical' ? 'Canonical seed split' : 'Handover alternate split')+'</strong><span class="mono">$1,500 · 3 weeks</span></div>'+rows.map(function (row) {
        return '<div class="e-budget-row"><div><span>'+esc(row.name)+'</span><strong class="mono">'+esc(money(row.amount))+'</strong></div><div class="e-bar"><i style="--e-share:'+(row.amount/15)+'%"></i></div></div>';
      }).join('');
    }

    function renderHook() {
      var item = hooks.filter(function (hook) { return hook.id === state.angle; })[0] || hooks[0];
      textOut('e-hook-tag', item.tag);
      textOut('e-hook-headline', item.headline);
      textOut('e-hook-copy', item.hook);
      textOut('e-hook-value', item.value);
      root.querySelectorAll('[data-angle]').forEach(function (button) {
        var active = button.getAttribute('data-angle') === state.angle;
        button.classList.toggle('primary', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }

    function bind() {
      root.querySelector('#e-preview-cta').addEventListener('click', function () { N.detail('Trial offer preview', '<p lang="ar" dir="rtl">تجربة ٣ أيام على الاشتراك السنوي المقترح. ده عرض توضيحي، مش اشتراك فعلي.</p><p>The canonical annual banking offer includes a 3-day trial. The diaspora and Family prices are brief proposals. Store terms, cancellation and billing disclosures must be finalized before any campaign runs.</p>'); });
      var subs = root.querySelector('#e-subs');
      var annual = root.querySelector('#e-annual');
      var fee = root.querySelector('#e-fee');
      var cac = root.querySelector('#e-cac');
      subs.addEventListener('input', function () { state.subscribers = Number(subs.value); update(); });
      annual.addEventListener('input', function () { state.annualMix = Number(annual.value); update(); });
      fee.addEventListener('input', function () { state.fee = Number(fee.value); update(); });
      cac.addEventListener('input', function () { state.cac = Number(cac.value); update(); });

      root.querySelectorAll('[data-model]').forEach(function (button) { button.addEventListener('click', function () {
        state.model = button.getAttribute('data-model');
        setPressed('[data-model]', 'data-model', state.model);
        update();
      }); });
      root.querySelectorAll('[data-budget]').forEach(function (button) { button.addEventListener('click', function () {
        state.budget = button.getAttribute('data-budget');
        setPressed('[data-budget]', 'data-budget', state.budget);
        renderBudget();
      }); });
      root.querySelectorAll('[data-angle]').forEach(function (button) { button.addEventListener('click', function () {
        state.angle = button.getAttribute('data-angle');
        renderHook();
      }); });
    }

    function setPressed(selector, attribute, value) {
      root.querySelectorAll(selector).forEach(function (button) {
        var active = button.getAttribute(attribute) === value;
        button.classList.toggle('primary', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    }

    root.querySelector('.e-hook-switch').innerHTML = hooks.map(function (hook, i) { return '<button class="button'+(i === 0 ? ' primary' : '')+'" type="button" data-angle="'+esc(hook.id)+'" aria-pressed="'+(i === 0 ? 'true' : 'false')+'">'+esc(hook.tab)+'</button>'; }).join('');
    renderFacts();
    renderBudget();
    renderHook();
    bind();
    update();
  };
})();
