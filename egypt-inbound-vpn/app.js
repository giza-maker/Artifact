(function () {
  'use strict';
  const data = window.NILE_SEEDS;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clean = value => String(value ?? '').replace(/—/g, ' · ');
  const money = value => new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',minimumFractionDigits:Math.abs(value)<100?2:0,maximumFractionDigits:Math.abs(value)<100?2:0}).format(value);
  const dialog = $('#detail-dialog');
  let detailOpener = null;
  function detail(title, html) {
    if (!dialog.open) detailOpener = document.activeElement;
    $('#detail-title').textContent = clean(title);
    $('#detail-body').innerHTML = html;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    $('#detail-title').tabIndex = -1;
    $('#detail-title').focus({preventScroll:true});
  }
  $('#detail-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {if(detailOpener?.isConnected) detailOpener.focus({preventScroll:true});});
  dialog.addEventListener('click', event => { if (event.target === dialog && event.clientX < dialog.getBoundingClientRect().left) dialog.close(); });
  const N = {data, escape, money, detail, $, clean};
  window.Nile = N;

  const state = {mode:'hybrid',app:'bank',origin:'Riyadh',lens:'ads',rival:0,traffic:'stream',protocol:'wg',repaired:false};
  const appInfo = {
    watchit:{title:'Watch iT',icon:'W.',category:'streaming_sports',kind:'stream',domain:'watchit.com',arabic:'حكايات من البيت'},
    shahid:{title:'Shahid VIP',icon:'ش',category:'streaming_sports',kind:'stream',domain:'shahid.mbc.net',arabic:'ليالي مصرية'},
    bank:{title:'NBE / InstaPay',icon:'N',category:'banking_fintech',kind:'local',domain:'alahlynet.com.eg',arabic:'أهلاً بيك في بيتك'},
    gov:{title:'Digital Egypt',icon:'م',category:'gov_portals',kind:'local',domain:'digital.gov.eg',arabic:'مصر الرقمية'},
    game:{title:'Gaming / EGP stores',icon:'+',category:'price_arbitrage',kind:'card',domain:'store.steampowered.com',arabic:'حسابك المصري'},
    telecom:{title:'My WE / family',icon:'we',category:'telecom_family',kind:'telecom',domain:'te.eg',arabic:'خليك قريب من أهلك'}
  };
  const category = () => data.research.stage1UseCases.find(item => item.id === appInfo[state.app].category);
  const press = (selector, value, key) => $$(selector).forEach(b => {const on = b.dataset[key] === value;b.classList.toggle('active', on);b.setAttribute('aria-pressed', String(on));});
  function renderAccess() {
    const app = appInfo[state.app];
    const blocked = state.mode === 'direct' || (state.mode === 'generic' && app.kind === 'local');
    const cairo = state.mode === 'hybrid' && app.kind === 'local';
    const route = state.mode === 'direct' ? state.origin + ' · foreign IP' : cairo ? 'Cairo · dedicated ISP IP' : state.mode === 'generic' ? 'Virtual Cairo · shared DC' : 'Marseille · EG geofeed';
    const latency = state.origin === 'Toronto' ? 175 : state.origin === 'London' ? 28 : 42;
    $('#phone-app-name').textContent = app.title;
    $('#phone-app-icon').textContent = app.icon;
    let scene = '';
    if (blocked) {
      const asn = state.mode === 'generic';
      scene = `<div class="block-symbol">×</div><h3>${asn ? 'Egyptian flag.<br>Datacenter identity.' : 'You’re outside<br>the service region.'}</h3><p>${asn ? 'The bank sees a shared commercial ASN, even when the IP geolocates to Egypt.' : 'Your foreign IP does not pass this simulated location check.'}</p><span class="http-code">${asn ? 'ASN / WAF DENY' : 'HTTP 403 · GEO RESTRICTION'}</span><span class="route-chip">${escape(route)}</span>`;
    } else if (app.kind === 'stream') {
      scene = `<div class="poster-art ${state.app === 'shahid' ? 'shahid-scene' : ''}"><strong lang="ar">${app.arabic}</strong></div><div class="player-controls"><span>Egyptian catalog · preview</span><span class="play-circle" aria-hidden="true">▷</span></div><div class="watch-progress"></div><div class="player-controls"><span>1080p60</span><span>≥ 15 Mbps target</span></div><p class="phone-pass-note">An existing streaming subscription may still be required.</p>`;
    } else if (state.app === 'bank') {
      scene = `<p class="phone-greeting">Secure Egyptian banking · illustrative account</p><div class="phone-arabic" lang="ar" dir="rtl">${app.arabic}</div><div class="bank-card"><span class="tiny">Sample balance</span><div class="balance mono">EGP 24,850</div><span class="mono">•••• &nbsp; •••• &nbsp; 4829</span><i class="card-chip" aria-hidden="true"></i></div><div class="phone-action-grid"><span class="phone-action"><span>↗</span>Transfer</span><span class="phone-action"><span>▤</span>Pay a bill</span><span class="phone-action"><span>+</span>Top up</span></div><p class="phone-pass-note">Egyptian SIM + OTP + device binding remain required.</p>`;
    } else if (state.app === 'gov') {
      scene = `<div class="gov-emblem" aria-hidden="true">م</div><div class="phone-arabic" lang="ar" dir="rtl">مصر الرقمية</div><div class="gov-items"><div class="gov-item">Civil registry <span>Route ready ✓</span></div><div class="gov-item">Traffic fines <span>Route ready ✓</span></div><div class="gov-item">Licensing <span>Route ready ✓</span></div></div><p class="phone-pass-note">National ID and Egyptian SIM required for verification.</p>`;
    } else if (state.app === 'game') {
      scene = `<div class="game-tile">+<strong>Egyptian IP route ready</strong></div><span class="route-chip">${escape(route)}</span><div class="game-notice">Payment card + account region still checked. IP alone rarely qualifies.</div><p class="phone-pass-note">Regional price arbitrage is excluded from proposed store positioning.</p>`;
    } else {
      scene = `<p class="phone-greeting">My WE · sample self-service</p><div class="phone-arabic" dir="rtl" lang="ar">${app.arabic}</div><span class="tiny muted">Home internet renewal</span><div class="telecom-balance">240 <small>EGP</small></div><div class="gov-items"><div class="gov-item">Renew home internet <span>✓</span></div><div class="gov-item">Recharge Egyptian SIM <span>✓</span></div></div><p class="phone-pass-note">Keep roaming SIM active every 60–90 days to preserve bank OTP access.</p>`;
    }
    $('#phone-scene').className = 'phone-scene' + (blocked ? ' phone-error' : '');
    $('#phone-scene').innerHTML = scene;
    $('#phone-security').className = 'phone-security' + (blocked ? ' blocked' : '');
    $('#phone-security').innerHTML = `<span>${blocked ? '× Access check failed' : '✓ Egyptian route ready'}</span><span>${state.mode === 'hybrid' ? 'IPv6 contained' : state.mode === 'generic' ? 'Shared ASN' : 'Foreign IP'}</span>`;
    $('#route-label').textContent = route;
    $('#route-latency').textContent = blocked ? 'Blocked' : latency + ' ms*';
    $('.route-badge .status-dot').style.background = blocked ? 'var(--red)' : 'var(--gold)';
    $('.access-explanation').classList.toggle('blocked', blocked);
    $('#access-mark').textContent = blocked ? '×' : '✓';
    $('#access-title').textContent = blocked ? state.mode === 'generic' ? 'ASN blocked: location is only half the check.' : 'Foreign IP: simulated location check denied.' : state.app === 'game' ? 'Network route ready. Purchase eligibility stays separate.' : cairo ? 'One user. One clean Egyptian ISP identity.' : 'Egyptian route ready for streaming and everyday services.';
    $('#access-reason').textContent = blocked ? state.mode === 'generic' ? 'Shared datacenter IPs can trigger reputation, velocity and fraud checks on banking and government endpoints.' : `${state.origin} is outside the modeled Egyptian service region. Switch connection to see what changes.` : state.app === 'game' ? 'Egyptian card BIN and account-region rules remain. We exclude arbitrage from acquisition and store claims.' : cairo ? 'Banking tier uses an exclusive Cairo IP plus IPv6 containment. Egyptian SIM, OTP and account controls remain.' : 'Marseille handles high-bandwidth traffic; Egyptian DNS stays inside the tunnel. Service acceptance must be validated.';
    $('#topology-origin').textContent = state.origin + ' · native app';
    press('[data-app]', state.app, 'app');
  }
  $$('input[name=connection]').forEach(input => input.addEventListener('change', () => {state.mode = input.value;renderAccess();}));
  $$('[data-app]').forEach(button => button.addEventListener('click', () => {state.app = button.dataset.app;renderAccess();}));
  $$('[data-origin]').forEach(button => button.addEventListener('click', () => {state.origin = button.dataset.origin;press('[data-origin]', state.origin, 'origin');renderAccess();}));
  $('#service-inspect').addEventListener('click', () => {
    const item = category();
    detail(item.title, `<p class="pill">Canonical research · ${escape(item.ipAloneUnlocks)}</p><h3>What the IP check does</h3><p>${escape(item.blockingMechanism)}</p><h3>What still depends on the account</h3><p>${escape(item.nonIpDependencies)}</p><h3>Proposed routing response</h3><p>${escape(item.ourSolution)}</p><h3>Services in this category</h3>${item.services.map(s => `<details><summary>${escape(s.name)} · ${escape(s.domain)}</summary><div><p>${escape(s.category)}</p></div></details>`).join('')}<p class="tiny muted">All outcomes are concept simulations. *28–42 ms is a brief illustration for nearby paths; Toronto uses a separate 175 ms illustration. Regional SLA targets appear in Architecture.</p>`);
  });
  $('#market-open').addEventListener('click', () => {
    const tam = data.research.meta.diasporaTam;
    const regions = [['Saudi Arabia',tam.saudiArabia],['Kuwait',tam.kuwait],['UAE',tam.uae],['Qatar / Bahrain / Oman',tam.qatarBahrainOman],['Europe / UK',tam.europeUk],['North America',tam.northAmerica]];
    detail('The connection back home.', `<p>Canonical seed estimates 14 million Egyptians abroad. Its listed country subtotals total 4.684 million, so they are a partial breakdown, not the whole addressable market.</p><div class="notebook-card"><strong class="mono">14,000,000</strong><p>Canonical diaspora estimate. No external demographic citation included.</p></div>${regions.map(([name,n]) => `<details><summary>${name} <span class="mono">${n.toLocaleString('en-US')}</span></summary><div><svg viewBox="0 0 400 28" role="img" aria-label="${escape(name)} ${n.toLocaleString('en-US')} estimated Egyptians"><path d="M0 14H400" stroke="#334055"/><circle cx="${Math.max(8,n/tam.saudiArabia*390)}" cy="14" r="6" fill="#e5b869"/></svg><p>Country estimate from canonical research seed.</p></div></details>`).join('')}<h3>Alternate market lens from handover</h3><p>9.5M–11M diaspora, 6.5M Gulf, 2.8M Europe/UK/North America, plus 15.8M tourists. These figures conflict with the seed and are not combined into a larger TAM.</p><h3>Five canonical jobs to be done</h3>${data.research.stage1UseCases.map(item => `<details><summary>${item.rank}. ${escape(item.title)}</summary><div><p lang="ar" dir="rtl">${escape(item.arabicTitle)}</p><p>${escape(item.nonIpDependencies)}</p><p>${escape(item.ourSolution)}</p></div></details>`).join('')}<p>Retail digital accounts remain subject to provider terms, identity checks and payment eligibility. Banking is a premium $8.99/month seed plan, not part of the $4.99 Standard offer.</p>`);
  });

  const apk = data.research.primaryCompetitorTeardown;
  $('#apk-details').addEventListener('click', () => detail('Inside the supplied APK record.', `<p class="pill danger">Seed forensic allegations · independent validation required</p><p class="mono">${escape(apk.packageName)}<br>v${escape(apk.version)}</p><div class="notebook-card"><strong>${escape(apk.installs)} installs</strong><p>${apk.rating}★ · ${apk.reviewsCount.toLocaleString()} reviews<br>Updated ${apk.lastUpdated}</p></div><p>${escape(apk.developer)}</p>${Object.entries(apk.technicalForensics).map(([k,v]) => `<details><summary>${escape(label(k))}</summary><div>${Array.isArray(v) ? v.map(s => `<p>${escape(s)}</p>`).join('') : `<p>${escape(v)}</p>`}</div></details>`).join('')}<p>No APK hash, raw capture, test date or third-party report was supplied. These findings are attributed research, not a fresh audit by NileGate.</p>`));
  function scanner() {
    const value = Number($('#scanner-range').value);
    $('#scanner-output').value = value + '%';
    $('#xray-layer').style.top = value + '%';
    $('#scan-line').style.top = value + '%';
    $('.xray-workbench').classList.toggle('xray-off', !$('#xray-enabled').checked);
    $('.toggle span').textContent = $('#xray-enabled').checked ? 'X-ray on' : 'X-ray off';
  }
  $('#scanner-range').addEventListener('input', scanner);
  $('#xray-enabled').addEventListener('change', scanner);
  function renderLens() {
    press('[data-lens]', state.lens, 'lens');
    const root = $('#forensic-lens');
    if (state.lens === 'ads') {
      root.innerHTML = `<div class="lens-headline"><strong>~30</strong><span>forced ads<br>in five minutes</span></div><p class="lens-description">Six embedded ad / analytics SDKs. Every connection step becomes a monetization event in the supplied teardown.</p><div class="ad-timeline" aria-label="Thirty modeled ad interruptions over five minutes">${Array.from({length:30},(_,i) => `<i style="height:${35+(i*23%54)}px" title="Ad ${i+1} · ${(i+1)*10}s"></i>`).join('')}</div><div class="timeline-labels"><span>0:00</span><span>1:00</span><span>2:00</span><span>3:00</span><span>5:00</span></div><label class="scanner-control" for="ad-session">Scrub the session <output id="ad-count">30 / 30 ads</output><input id="ad-session" type="range" min="0" max="300" step="10" value="300"></label><div class="ad-stages"><span>Launch</span><span>Before connect</span><span>After connect</span><span>Server list</span><span>Disconnect</span></div><p class="lens-footer">AdMob · Meta · AppLovin · Unity · IronSource · Firebase. Research estimate, not a replay of captured traffic.</p>`;
      $('#ad-session').addEventListener('input', e => {const count = Math.floor(Number(e.target.value)/10);$('#ad-count').value = count + ' / 30 ads';$$('.ad-timeline i').forEach((b,i) => b.style.opacity = i < count ? '1' : '.15');});
    } else if (state.lens === 'leaks') {
      root.innerHTML = `<div class="lens-headline"><strong>2</strong><span>IP stacks.<br>Only one tunneled.</span></div><p class="lens-description">An Egyptian flag in the app cannot hide a real Gulf IPv6 address escaping beside the tunnel.</p><div class="leak-viz"><div class="leak-route"><span class="mono">IPv4</span><strong>VPN → Ukraine / Europe</strong><small>Supplied allegation: silent shared-datacenter fallback</small><div class="leak-stream">${'<i></i>'.repeat(11)}</div></div><div class="leak-route leaking" id="ipv6-route"><span class="mono">IPv6</span><strong id="ipv6-title">2a02:… → direct Gulf carrier</strong><small id="ipv6-subtitle">Real origin bypasses tunnel → location disclosed</small><div class="leak-stream">${'<i></i>'.repeat(11)}</div></div></div><button class="button primary" id="repair-ipv6" aria-pressed="false">Apply our IPv6 containment</button><p class="lens-footer">Proposed fix: capture ::/0, encrypted in-tunnel DNS and system kill-switch validation. Device-level leak testing remains a launch gate.</p>`;
      $('#repair-ipv6').addEventListener('click', () => {state.repaired = !state.repaired;$('#ipv6-route').classList.toggle('leaking', !state.repaired);$('#ipv6-title').textContent = state.repaired ? '::/0 → captured and sinkholed' : '2a02:… → direct Gulf carrier';$('#ipv6-subtitle').textContent = state.repaired ? 'Proposed containment: no IPv6 egress to carrier' : 'Real origin bypasses tunnel → location disclosed';$('#repair-ipv6').textContent = state.repaired ? 'Restore competitor leak' : 'Apply our IPv6 containment';$('#repair-ipv6').setAttribute('aria-pressed', String(state.repaired));});
      state.repaired = false;
    } else {
      const codes = ['EG','KR','ID','MY','IN','DE','CA','RU','JP','VN','NG','US','UK','AE','BR'];
      root.innerHTML = `<div class="lens-headline"><strong>15</strong><span>country wrappers.<br>One app-farm pattern.</span></div><div class="clone-hub"><div><strong>SWS Software Enterprise</strong><br><small>Ipoh, Perak · Malaysia</small></div><span class="mono">→ 15</span></div><div class="clone-grid">${apk.clonePortfolio.map((name,i) => `<button data-clone="${i}" aria-pressed="${i===0}" class="${i===0?'active':''}"><span class="clone-code">${codes[i]}</span><span>${i===0?'Egypt':name.replace(/^VPN /,'').split(' - ')[0]}</span></button>`).join('')}</div><p class="clone-detail" id="clone-detail">${escape(apk.clonePortfolio[0])}<br>Same OpenVPN wrapper pattern; supplied portfolio attribution.</p><p class="lens-footer">Only the canonical 15 names appear here. Turkey / Pakistan examples in the handover were not present in the seed.</p>`;
      $$('[data-clone]').forEach(b => b.addEventListener('click', () => {press('[data-clone]',b.dataset.clone,'clone');$('#clone-detail').innerHTML = escape(apk.clonePortfolio[Number(b.dataset.clone)]) + '<br>Same OpenVPN wrapper pattern; supplied portfolio attribution.';}));
    }
  }
  $$('[data-lens]').forEach(b => b.addEventListener('click', () => {state.lens=b.dataset.lens;renderLens();}));
  const canonicalRivals = [
    {name:data.research.rivalComparisonMatrix[0].name,row:0,values:['Fails','None claimed','6 SDKs','Leak alleged']},
    {name:'Hola VPN',row:1,values:['Risky / mixed','Not specified','Heavy telemetry','Not evidenced']},
    {name:data.research.rivalComparisonMatrix[2].name,row:2,values:['Partial','Protocol dependent','Ad-free','Not evidenced']},
    {name:data.research.rivalComparisonMatrix[3].name,row:3,values:['Partial','Stealth / mixed','Mixed by app','Not evidenced']},
    {name:data.research.rivalComparisonMatrix[4].name,row:4,values:['1:1 Cairo target','AWG + WSS design','0 SDKs planned','::/0 sinkhole'],note:'The fifth canonical row is our product, with a supplied score of 95. It is a proposal baseline, not an independently audited competitor.'}
  ];
  const briefRivals = [canonicalRivals[0],{name:'Egypt VPN · Yaman / Technopoint',values:['No seed evidence','No seed evidence','No seed evidence','No seed evidence'],note:'Named in the brief, absent from canonical research. No performance score invented.'},{...canonicalRivals[2],name:'ExpressVPN'},{...canonicalRivals[2],name:'Surfshark'},{name:'Urban VPN',values:['No seed evidence','No seed evidence','No seed evidence','No seed evidence'],note:'Named in the brief, absent from canonical research. No performance score invented.'}];
  function rivals() { return $('#rival-set').value === 'brief' ? briefRivals : canonicalRivals; }
  function renderRivalSelectors() {$('#rival-selectors').innerHTML = rivals().map((r,i) => `<button data-rival="${i}" class="${i===state.rival?'active':''}" aria-pressed="${i===state.rival}">${escape(r.name)}</button>`).join('');$$('[data-rival]').forEach(b => b.addEventListener('click', () => {state.rival=Number(b.dataset.rival);renderComparison();}));renderComparison();}
  function renderComparison() {
    press('[data-rival]',String(state.rival),'rival');
    const r = rivals()[state.rival];
    const row = r.row == null ? null : data.research.rivalComparisonMatrix[r.row];
    const score = row?.overallUnlockScore;
    const dimensions = ['Banking unblock','DPI stealth','Ad-free experience','IPv6 containment'];
    const ours = ['1:1 Cairo target','AWG + WSS design','0 SDKs planned','::/0 sinkhole'];
    $('#comparison-visual').innerHTML = `<div class="comparison-topline"><div><h4>${escape(r.name)}</h4><p>${escape(row?.model || 'Evidence gap in supplied seed')}</p></div><div class="comparison-score"><div class="score-ring"><svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="none" stroke="#263247" stroke-width="2"/><circle cx="40" cy="40" r="34" fill="none" stroke="#e5b869" stroke-width="2" stroke-dasharray="${(score||0)*2.136} 214"/></svg><strong>${score == null ? '?' : score}</strong></div><span>Seed score<br>out of 100</span></div></div><div class="comparison-lenses">${dimensions.map((d,i) => `<div class="comparison-cell"><span>${d}</span><div class="compare-result"><small>Rival</small><strong class="${r.values[i].includes('eviden')?'unknown':r.values[i]==='Ad-free'?'yes':'no'}">${escape(r.values[i])}</strong></div><div class="compare-result"><small>NileGate</small><strong class="yes">${ours[i]}</strong></div></div>`).join('')}</div><p class="comparison-note">${escape(r.note || 'Comparison reproduces supplied research judgments, not independently scored results. Our seed score: 95/100, a proposal claim.')}</p><button class="text-button" id="rival-record">Inspect original comparison record ↗</button>`;
    $('#rival-record').addEventListener('click', () => detail(r.name, row ? `<p>Original seed comparison, retained verbatim. No independent audit supplied.</p>${Object.entries(row).map(([k,v]) => `<dl class="source-leaf"><dt>${escape(label(k))}</dt><dd>${escape(v)}</dd></dl>`).join('')}` : '<p>No canonical comparison row exists for this app. Independent evidence is required before making competitive claims.</p>'));
  }
  $('#rival-set').addEventListener('change', () => {state.rival=0;renderRivalSelectors();});

  function renderTraffic() {
    press('[data-traffic]',state.traffic,'traffic');
    $('#topology-diagram').dataset.traffic = state.traffic;
    const banking = state.traffic === 'bank';
    $('#destination-name').textContent = banking ? 'NBE / Gov' : 'Watch iT';
    $('#destination-symbol').textContent = banking ? '✓' : '▷';
    $('#destination-note').textContent = banking ? 'Allowlisted destinations' : 'Egyptian catalog';
    $('#traffic-state').textContent = banking ? 'Tier 2 active' : 'Tier 1 active';
    $('#traffic-description').textContent = banking ? 'Client policy selects a Cairo relay with one static IP per banking subscriber. nftables restricts egress to approved bank and government destinations.' : 'High-bandwidth video exits in Marseille with an Egyptian geofeed. Cairo stays reserved for sensitive local services.';
    $('#traffic-cost').innerHTML = banking ? '1 subscriber : 1 IP<br><small>$1.75 / IP / month · seed cost</small>' : '$0.015 / GB<br><small>Brief planning input</small>';
  }
  $$('[data-traffic]').forEach(b => b.addEventListener('click', () => {state.traffic=b.dataset.traffic;renderTraffic();}));
  const layers = data.architecture.lockedArchitectureDecision.layers;
  const layerMapping = {client:0,marseille:1,cairo:2,control:3};
  function layerMarkup(layer) {
    return `<p>${escape(layer.purpose || 'Native Android Kotlin and iOS Swift client.')}</p>${Object.entries(layer).filter(([k])=> !['title','purpose','layerId'].includes(k)).map(([k,v]) => `<details><summary>${escape(label(k))}</summary><div>${renderValue(v)}</div></details>`).join('')}`;
  }
  $$('[data-node]').forEach(b => b.addEventListener('click', () => {
    const layer = layers[layerMapping[b.dataset.node]];
    const caveat = b.dataset.node === 'cairo' ? '<div class="notebook-card"><strong>RAM-only is a persistence control.</strong><p>Removing power clears volatile node memory. It cannot erase upstream provider logs, off-node telemetry, live-memory access or the offshore IP mapping. Hourly salt rotation is a brief design input, not implemented evidence.</p></div>' : b.dataset.node === 'marseille' ? '<div class="notebook-card"><strong>A geofeed is not a guarantee.</strong><p>GeoIP databases, service WAFs and ASN reputation must be tested separately. Physical location alone does not establish Egyptian legal exemption.</p></div>' : '';
    detail(layer.title, caveat+layerMarkup(layer));
  }));
  $('#stack-inspect').addEventListener('click', () => detail('Four layers. Separate responsibilities.', `<p>90/10 traffic allocation and Marseille $0.015/GB are handover planning assumptions. The canonical topology is retained below.</p>${layers.map(l => `<details><summary>${escape(l.title)}</summary><div>${layerMarkup(l)}</div></details>`).join('')}<h3>Additional handover design inputs</h3><p>api.nilevpn.com, Cloudflare Anycast, short-lived JWTs under 15 minutes, Redis token state, MRS1 / Equinix MA1 and hourly relay salt rotation are proposed implementation choices. Canonical seed instead names MRS1 / Frankfurt FRA1 and FastAPI/Go + PostgreSQL.</p><p>ASN conflicts are unresolved: Vodafone AS36992 in handover vs. AS36935 in seed; AS24863 is labeled Orange in handover and Link Data Center in seed. Provider contracts and registry evidence must resolve these before deployment.</p>`));
  function renderDpi() {
    press('[data-protocol]',state.protocol,'protocol');
    const enabled = $('#dpi-enabled').checked;
    const blocked = enabled && state.protocol === 'wg';
    const p = state.protocol;
    $('#dpi-canvas').classList.toggle('passing', !blocked);
    $('#dpi-canvas').classList.toggle('firewall-off', !enabled);
    $('#dpi-canvas').classList.toggle('wss', p === 'wss');
    $('#dpi-status').className = 'pill ' + (blocked ? 'danger' : 'success');
    $('#dpi-status').textContent = blocked ? '× Signature detected' : '✓ Packet passes model';
    $('#dpi-switch-label').textContent = enabled ? 'Inspection enabled' : 'Inspection disabled';
    $('#packet-shape').textContent = p === 'wg' ? '148 bytes' : p === 'awg' ? 'H1–H4 + junk' : 'TLS / 443';
    $('#packet-outcome').textContent = blocked ? '× Dropped' : '✓ Delivered';
    $('#handshake-bytes').textContent = p === 'wg' ? '01 00 00 00 · fixed initiation length: 148 bytes' : p === 'awg' ? 'H1–H4 randomized · Jc / Jmin / Jmax padding' : 'TLS → WebSocket → encrypted WireGuard payload';
    $('#dpi-result-title').textContent = !enabled ? 'Without inspection, all three pass this model.' : p === 'wg' ? 'A fingerprint the firewall recognizes.' : p === 'awg' ? 'Change the recognizable packet signature.' : 'Wrap the tunnel in a TLS connection.';
    $('#dpi-result-copy').textContent = !enabled ? 'This switch isolates the modeled DPI effect; reachability still depends on the real carrier and endpoint.' : p === 'wg' ? 'Standard WireGuard’s fixed initiation packet is easy to classify in this illustrative DPI model.' : p === 'awg' ? 'AmneziaWG varies magic headers and packet padding. Resilience depends on configuration and evolving carrier inspection.' : 'WSS uses TCP 443 when UDP fails. TLS metadata can still be classified; WebSocket is not automatically indistinguishable from all HTTPS.';
    $('#dpi-benchmarks').innerHTML = p === 'wg' ? '<div><strong>148 B</strong><span>Standard initiation packet</span></div><div><strong>UDP</strong><span>51820 in this example</span></div>' : p === 'awg' ? '<div><strong>31 ms</strong><span>Brief illustration</span></div><div><strong>185 Mbps</strong><span>Brief illustration</span></div><div><strong>≤ 2s</strong><span>Canonical connect target</span></div>' : '<div><strong>443</strong><span>TLS over TCP</span></div><div><strong>≤ 3.5s</strong><span>Fallback connect target</span></div><div><strong>99.8%</strong><span>Brief ambition, unverified</span></div>';
  }
  $$('[data-protocol]').forEach(b => b.addEventListener('click', () => {state.protocol=b.dataset.protocol;renderDpi();}));
  $('#dpi-enabled').addEventListener('change', renderDpi);
  $('#benchmarks-open').addEventListener('click', () => detail('Performance has to survive peak hour.', `<p>Canonical acceptance targets, not measurements. Test at 20:00–23:00 Cairo from Gulf, Europe and US vantage points.</p>${data.architecture.stage5PerformanceBenchmarks.map(b => `<details><summary>${escape(b.metric)}</summary><div><div class="metrics"><div class="metric"><span>Gulf</span><strong style="font-size:18px">${escape(b.gulfTarget)}</strong></div><div class="metric"><span>Europe</span><strong style="font-size:18px">${escape(b.europeTarget)}</strong></div><div class="metric"><span>North America</span><strong style="font-size:18px">${escape(b.usTarget)}</strong></div></div><p style="margin-top:18px">${escape(b.tool)}</p></div></details>`).join('')}`));

  function label(key) { return clean(key).replace(/([a-z0-9])([A-Z])/g,'$1 $2').replace(/_/g,' ').replace(/^./, c=>c.toUpperCase()); }
  function renderValue(value) {
    if (value === null || typeof value !== 'object') return `<p>${escape(value)}</p>`;
    if (Array.isArray(value)) return value.map((v,i) => typeof v === 'object' ? `<details><summary>${escape(v.title || v.name || v.id || 'Record '+(i+1))}</summary><div>${renderValue(v)}</div></details>` : `<p>${escape(v)}</p>`).join('');
    return Object.entries(value).map(([k,v]) => typeof v === 'object' && v !== null ? `<details><summary>${escape(label(k))}</summary><div>${renderValue(v)}</div></details>` : `<dl class="source-leaf"><dt>${escape(k)}</dt><dd>${escape(v)}</dd></dl>`).join('');
  }
  function flatten(value, path = '') {
    if (value === null || typeof value !== 'object') return [{path,value:String(value)}];
    return Object.entries(value).flatMap(([k,v]) => flatten(v,path ? path+'.'+k : k));
  }
  const records = flatten(data);
  function openSources() {
    detail('Evidence & assumptions.', `<p>Every canonical seed field is embedded locally. Search values or expand the three records. Projections, forensic allegations and proposed architecture do not represent completed validation.</p><div class="source-controls"><label for="source-search">Search all ${records.length} source values</label><input id="source-search" type="search" placeholder="Try IPv6, IPQS, annual, Q7…" autocomplete="off"></div><div class="source-result" id="source-result" aria-live="polite">Three canonical files · preserved without edits</div><div id="source-content">${sourceTree()}</div><h3>Brief and seed diverge</h3><p>14M vs. 9.5M–11M diaspora; $59.99 annual banking vs. $39.99 diaspora / $59.99 Family; 243 vs. 220 break-even reference; 12 vs. 16 weeks; 10 FR + 6 NFR vs. 9 FR + 7 NFR; Meta/TikTok vs. Apple-led UA; grouped vs. named rivals.</p><p>Each lab labels the selected scenario. Four hard-blocker designations, 4% churn and the 16-week schedule are explicit proposal assumptions.</p><h3>Primary policy references</h3><p><a href="https://developer.apple.com/app-store/review/guidelines/#vpn-apps" target="_blank" rel="noreferrer">Apple review guideline 5.4</a> · <a href="https://support.google.com/googleplay/answer/11416267?hl=en" target="_blank" rel="noreferrer">Google Play VPN Verified badge criteria</a></p><p>Policy cross-check: 20 October 2026. Written counsel, provider evidence and real-device tests remain required launch evidence.</p>`);
    $('#source-search').addEventListener('input', e => {const query = e.target.value.trim().toLowerCase();if (!query) {$('#source-content').innerHTML=sourceTree();$('#source-result').textContent='Three canonical files · preserved without edits';return;}const matches=records.filter(r=>r.path.toLowerCase().includes(query)||r.value.toLowerCase().includes(query));$('#source-result').textContent=matches.length+' matching source values';$('#source-content').innerHTML=matches.length ? matches.map(r=>`<dl class="source-leaf"><dt>${escape(r.path)}</dt><dd>${escape(r.value)}</dd></dl>`).join('') : '<p>No matches. Try a broader term.</p>';});
  }
  function sourceTree() { return [['research','research_and_competitors.json'],['architecture','architecture_and_legal.json'],['economics','economics_prd_roadmap.json']].map(([k,name]) => `<details><summary>${name}</summary><div><p><a href="codex-handover/${name}" target="_blank" rel="noreferrer">Open original JSON ↗</a></p>${renderValue(data[k])}</div></details>`).join(''); }
  $('#sources-open').addEventListener('click', openSources);
  $('#summary-open').addEventListener('click', () => {detail('An Egypt-first specialist.', `<p>A paid, zero-ad connection for Egyptians abroad. Streaming exits through Marseille; sensitive local accounts use dedicated Cairo relays.</p><div class="notebook-card"><strong>The wedge</strong><p>Banking, civil services and family errands need a trustworthy Egyptian network identity. Generic shared VPNs can fail reputation checks.</p></div><div class="notebook-card"><strong>The system</strong><p>Marseille 10Gbps capacity + Cairo 1:1 sticky IPs. AmneziaWG primary, TLS 443 fallback. Diskless relays restrict destinations.</p></div><div class="notebook-card"><strong>The commercial test</strong><p>$1,500 over three weeks in KSA, Kuwait and UAE. Canonical base case: $16 CAC, $1,050 fixed monthly OpEx, 243 subscribers at the supplied 50/50 monthly-plan mix.</p></div><div class="notebook-card"><strong>Conditional go</strong><p>Validate IPs and service access, obtain counsel opinion, prove zero leaks, then clear all twelve launch gates. No launch evidence is implied by this proposal.</p></div><button class="button primary" id="summary-sources">Open evidence register ↗</button>`);$('#summary-sources').addEventListener('click',openSources);});

  ['legal','economics','launch'].forEach(name => {if (window.NileModules?.[name]) window.NileModules[name](N);});
  // Preserve original source strings; normalize em dashes only in authored display text.
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node; while ((node=walker.nextNode())) { if (node.parentElement?.tagName !== 'SCRIPT' && node.textContent.includes('—')) node.textContent = clean(node.textContent); }
  const chapters = $$('.act');
  let current = 0;
  function jump(index) {const clamped=Math.min(5,Math.max(0,index));chapters[clamped].scrollIntoView({behavior:motionPaused || reduceMotion.matches?'instant':'smooth',block:'start'});current=clamped;}
  $$('[data-jump]').forEach(b=>b.addEventListener('click',()=>jump(Number(b.dataset.jump)-1)));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let motionPaused = reduceMotion.matches;
  function motion() {document.body.classList.toggle('motion-paused',motionPaused);$('#motion-toggle').textContent=motionPaused?'Resume motion':'Pause motion';$('#motion-toggle').setAttribute('aria-pressed',String(motionPaused));}
  $('#motion-toggle').addEventListener('click',()=>{motionPaused=!motionPaused;motion();});
  reduceMotion.addEventListener('change',()=>{motionPaused=reduceMotion.matches;motion();});
  document.addEventListener('keydown',event=>{if(dialog.open || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.target.closest('input,select,textarea,[contenteditable]'))return;if(/^[1-6]$/.test(event.key)){event.preventDefault();jump(Number(event.key)-1);}else if(event.key==='ArrowRight'){event.preventDefault();jump(current+1);}else if(event.key==='ArrowLeft'){event.preventDefault();jump(current-1);}});
  const visible = new Map();
  const navObserver = new IntersectionObserver(entries=>{entries.forEach(entry=>{visible.set(entry.target.id,entry.isIntersecting);entry.target.classList.toggle('in-view',entry.isIntersecting);});const index=chapters.findIndex(c=>visible.get(c.id));if(index>=0){current=index;$$('.chapter-nav a').forEach((a,i)=>{if(i===index)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}},{rootMargin:'-8% 0px -45% 0px',threshold:0});
  chapters.forEach(c=>navObserver.observe(c));
  document.addEventListener('visibilitychange',()=>document.body.classList.toggle('page-hidden',document.hidden));
  renderAccess();scanner();renderLens();renderRivalSelectors();renderTraffic();renderDpi();motion();
})();
