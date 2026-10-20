(function () {
  "use strict";

  window.NileModules = window.NileModules || {};

  var entityOptions = [
    { id: "us", name: "US LLC", place: "Delaware / Wyoming", note: "US company path; confirm tax, banking, and beneficial-owner filings with counsel." },
    { id: "uk", name: "UK Ltd", place: "United Kingdom", note: "UK company path; confirm Companies House, tax, and banking duties with counsel." },
    { id: "uae", name: "UAE FZCO", place: "Dubai free zone", note: "UAE company path; confirm free-zone scope, substance, and banking duties with counsel." }
  ];

  var risk = {
    Q1: ["Critical", "Potential service-provider classification and 180-day retention exposure."],
    Q2: ["Critical", "Potential NTRA permit or hosting-license dependency."],
    Q3: ["High", "Allocation of duties between foreign publisher and Cairo host."],
    Q4: ["High", "Cross-border and local personal-data treatment."],
    Q5: ["Medium", "Disclosure precision and false-advertising exposure."],
    Q6: ["High", "Datacenter inquiry handling and abuse response."],
    Q7: ["Medium", "Static-IP lease terms and B2B rider requirements."]
  };

  function e(N, value) { return N.escape(String(value == null ? "" : value)); }
  function arch(N) { return N.data.architecture || {}; }
  function econ(N) { return N.data.economics || {}; }

  function legalMarkup(N) {
    var data = arch(N);
    var compliance = data.corporateAndStoreCompliance || {};
    var badge = compliance.googlePlayVerifiedBadge || {};
    var copy = compliance.storeSafeCopyRules || [];
    var questions = data.egyptianLegalQuestions || [];
    return '<div class="l-shell">' +
      '<div class="l-compact-status"><div><span class="l-status-dot" aria-hidden="true"></span><strong>Legal review required</strong><span>Proposed risk triage · no approval or immunity guarantee</span></div><span class="pill">7 counsel questions</span></div>' +
      '<section class="l-layout" aria-label="Compliance explorer">' +
        '<div class="panel l-entity"><div class="l-section-head"><div><span class="tiny">Pillar 01</span><h3>Jurisdiction picker</h3></div><span class="pill">D‑U‑N‑S required</span></div>' +
          '<fieldset class="segmented l-entity-picker"><legend class="sr-only">Choose proposed company structure</legend>' + entityOptions.map(function (x, i) { return '<label><input type="radio" name="l-entity" value="' + x.id + '"' + (i === 0 ? ' checked' : '') + '><span>' + e(N, x.name) + '</span></label>'; }).join('') + '</fieldset>' +
          '<div id="l-entity-result" class="l-entity-result" aria-live="polite"></div>' +
          '<div class="l-store-path" aria-label="Store approval pipeline"><div><span>1</span><b>Organization</b><small>Publisher identity + D‑U‑N‑S</small></div><i aria-hidden="true">→</i><div><span>2</span><b>Apple 5.4</b><small>VPN app submission</small></div><i aria-hidden="true">→</i><div><span>3</span><b>Play VpnService</b><small>Declaration + walkthrough</small></div><i aria-hidden="true">→</i><div class="l-later"><span>4</span><b>MASA L2</b><small>Later Verified badge</small></div></div>' +
          '<div class="l-badge"><div><span class="pill">Later milestone</span><h4>' + e(N, badge.badgeName || "Google Play Verified VPN Shield") + '</h4></div><details><summary>Inspect current badge criteria</summary><ul><li>MASA Level 2 independent assessment</li><li>Organization developer account</li><li>At least 10,000 installs and 250 reviews</li><li>At least 90 days on Google Play</li><li>Meet target API requirements</li><li>Meet security and privacy requirements</li><li>Independent security review</li><li>Encrypted data in transit declared in Data Safety</li></ul></details><details><summary>Seed-only planning claim</summary><p class="tiny">The seed additionally requires zero policy strikes. The linked official badge page does not explicitly state that rule; counsel and store-policy review must verify it.</p></details></div>' +
          '<nav class="l-references" aria-label="Primary store policy references"><a href="https://developer.apple.com/app-store/review/guidelines/#vpn-apps" target="_blank" rel="noreferrer">Apple review guideline 5.4 ↗</a><a href="https://support.google.com/googleplay/android-developer/answer/12564964" target="_blank" rel="noreferrer">Google Play VpnService policy ↗</a><a href="https://support.google.com/googleplay/answer/11416267?hl=en" target="_blank" rel="noreferrer">Google Play VPN badge criteria ↗</a><span class="pill">Review needed</span></nav>' +
        '</div>' +
        '<div class="panel l-copy"><div class="l-section-head"><div><span class="tiny">Pillar 02</span><h3>Store copy guardrail</h3></div><span class="mono" id="l-copy-count">01 / 04</span></div><div class="segmented l-copy-face" role="group" aria-label="Choose copy review state"><button type="button" data-copy-face="reject" aria-pressed="true">Rejected</button><button type="button" data-copy-face="approve" aria-pressed="false">Proposed direction</button></div><div class="l-copy-stage" id="l-copy-stage" aria-live="polite"></div><div class="l-copy-nav"><button class="button" type="button" data-copy-prev>← Previous</button><div class="l-copy-dots" aria-hidden="true"></div><button class="button primary" type="button" data-copy-next>Next →</button></div></div>' +
      '</section>' +
      '<section class="panel l-counsel"><div class="l-section-head"><div><span class="tiny">Pillar 03</span><h3>Seven questions counsel must clear</h3><p class="muted">Select a question to inspect proposed severity, statute, and architectural mitigation.</p></div><span class="pill">Proposed risk triage</span></div><div class="l-question-grid">' + questions.map(function (q, i) { var sev = risk[q.id] || ["Review", "Counsel review required."]; return '<button type="button" class="l-question" data-question="' + i + '"><span class="mono">' + e(N, q.id) + '</span><b>' + e(N, q.statute) + '</b><small class="l-severity l-' + sev[0].toLowerCase() + '">' + e(N, sev[0]) + ' proposed risk</small></button>'; }).join('') + '</div></section>' +
      '<p class="tiny l-disclaimer">Architecture can reduce exposure and abuse surface. Offshore incorporation, allowlisting, and RAM-only relays do not erase all traces, guarantee exemption, or replace written advice from qualified Egyptian and entity-jurisdiction counsel.</p>' +
    '</div>';
  }

  function bindLegal(N, root) {
    var data = arch(N);
    var copy = ((data.corporateAndStoreCompliance || {}).storeSafeCopyRules || []);
    var questions = data.egyptianLegalQuestions || [];
    var copyIndex = 0, copyFace = 'reject';
    var entityResult = root.querySelector('#l-entity-result');
    function showEntity(id) {
      var item = entityOptions.filter(function (x) { return x.id === id; })[0] || entityOptions[0];
      entityResult.innerHTML = '<div><span class="tiny">Candidate structure</span><strong>' + e(N, item.name) + '</strong><span>' + e(N, item.place) + '</span></div><p>' + e(N, item.note) + '</p><p class="l-entity-caveat">Organization verification supports submission eligibility. Final acceptance remains subject to store review.</p>';
    }
    function showCopy() {
      if (!copy.length) return;
      var item = copy[copyIndex];
      root.querySelector('#l-copy-count').textContent = String(copyIndex + 1).padStart(2, '0') + ' / ' + String(copy.length).padStart(2, '0');
      root.querySelector('#l-copy-stage').innerHTML = copyFace === 'reject' ? '<article class="l-copy-card l-reject"><span>Rejected framing</span><blockquote>“' + e(N, item.avoid) + '”</blockquote><p>Likely policy or positioning risk. Review against current store rules.</p></article>' : '<article class="l-copy-card l-approve"><span>Proposed store-safe direction · review required</span><blockquote>“' + e(N, item.useInstead) + '”</blockquote><p>' + e(N, item.reason) + '</p></article>';
      root.querySelectorAll('[data-copy-face]').forEach(function (button) { var on = button.dataset.copyFace === copyFace; button.setAttribute('aria-pressed', String(on)); button.classList.toggle('is-active', on); });
      root.querySelector('.l-copy-dots').innerHTML = copy.map(function (_, i) { return '<i class="' + (i === copyIndex ? 'is-active' : '') + '"></i>'; }).join('');
    }
    root.querySelectorAll('input[name="l-entity"]').forEach(function (input) { input.addEventListener('change', function () { showEntity(input.value); }); });
    root.querySelector('[data-copy-prev]').addEventListener('click', function () { copyIndex = (copyIndex - 1 + copy.length) % copy.length; showCopy(); });
    root.querySelector('[data-copy-next]').addEventListener('click', function () { copyIndex = (copyIndex + 1) % copy.length; showCopy(); });
    root.querySelectorAll('[data-copy-face]').forEach(function (button) { button.addEventListener('click', function () { copyFace = button.dataset.copyFace; showCopy(); }); });
    root.querySelectorAll('[data-question]').forEach(function (button) {
      button.addEventListener('click', function () {
        var q = questions[Number(button.dataset.question)];
        var sev = risk[q.id] || ["Review", "Counsel review required."];
        N.detail(q.id + ' · ' + q.statute, '<div class="l-detail"><span class="pill">' + e(N, sev[0]) + ' proposed risk</span><h3>Question for counsel</h3><p>' + e(N, q.question) + '</p><h3>Why this tier</h3><p>' + e(N, sev[1]) + '</p><h3>Proposed architectural mitigation</h3><p>' + e(N, q.architecturalMitigation) + '</p><p class="tiny">Mitigation proposal only. It does not establish legal immunity or guarantee a regulator’s interpretation.</p></div>');
      });
    });
    showEntity('us'); showCopy();
  }

  window.NileModules.legal = function (N) {
    var root = document.querySelector('#act4 #legal-root');
    if (!root) return;
    root.innerHTML = legalMarkup(N);
    bindLegal(N, root);
  };

  var categories = {
    "FR-01": "Routing", "FR-02": "Crypto & stealth", "FR-03": "Routing", "FR-04": "Routing", "FR-05": "Performance",
    "FR-06": "Privacy", "FR-07": "Privacy", "FR-08": "Routing", "FR-09": "Compliance", "FR-10": "Compliance",
    "NFR-01": "Privacy", "NFR-02": "Privacy", "NFR-03": "Performance", "NFR-04": "Privacy", "NFR-05": "Performance", "NFR-06": "Compliance"
  };
  var categoryList = ["All", "Crypto & stealth", "Routing", "Kill-switch", "Privacy", "Performance", "Compliance"];
  var hardBlockers = ["SC-01", "SC-03", "SC-06", "SC-12"];
  var briefRoadmap = [
    { phase: "Phase 1", weeks: "Weeks 1–3", title: "Entity & validation", note: "Audit candidate IPs, form publisher entity, secure D‑U‑N‑S, and obtain written counsel opinion." },
    { phase: "Phase 2", weeks: "Weeks 4–7", title: "Core infra & AmneziaWG daemon", note: "Build two-tier routing, stealth fallback, Cairo allowlists, sticky assignment, and synthetic checks." },
    { phase: "Phase 3", weeks: "Weeks 8–12", title: "Cross-platform apps & banking split-tunnel", note: "Ship Android and iOS paths, banking readiness, IPv6/DNS protection, privacy tests, and closed beta." },
    { phase: "Phase 4", weeks: "Weeks 13–16", title: "MASA L2 audit & diaspora launch", note: "Complete MASA work, store review, paid validation, launch-gate evidence, and diaspora rollout." }
  ];

  function launchMarkup(N) {
    var data = econ(N);
    var reqs = data.prdRequirements || [];
    var gates = data.launchScorecard || [];
    return '<div class="r-shell">' +
      '<div class="metrics r-compact-metrics"><div class="metric"><span>Requirements</span><strong>16</strong><small>10 FR · 6 NFR</small></div><div class="metric"><span>Launch gates</span><strong>12</strong><small>4 proposed blockers</small></div></div>' +
      '<section class="panel r-roadmap"><div class="r-section-head"><div><span class="tiny">Roadmap</span><h3>Four-phase delivery path</h3></div><fieldset class="segmented"><legend class="sr-only">Choose roadmap view</legend><label><input type="radio" name="r-roadmap" value="brief" checked><span>16-week brief</span></label><label><input type="radio" name="r-roadmap" value="canonical"><span>Canonical 12-week</span></label></fieldset></div><div id="r-roadmap-track" class="r-roadmap-track"></div><div id="r-roadmap-detail" class="r-roadmap-detail" aria-live="polite"></div></section>' +
      '<section class="panel r-prd"><div class="r-section-head"><div><span class="tiny">Product contract</span><h3>All 16 requirements</h3><p class="muted">Category counts update against the full 10 FR + 6 NFR seed.</p></div><span class="pill" id="r-filter-count">4 of 16 shown</span></div><div class="r-filters" role="group" aria-label="Filter requirements">' + categoryList.map(function (x, i) { return '<button type="button" class="button' + (i === 0 ? ' primary' : '') + '" data-filter="' + e(N, x) + '" aria-pressed="' + (i === 0 ? 'true' : 'false') + '">' + e(N, x) + ' <span></span></button>'; }).join('') + '</div><div id="r-prd-grid" class="r-prd-grid"></div><button type="button" class="button r-show-all" id="r-show-all" aria-controls="r-prd-grid">Show all 16 requirements</button><aside class="r-supplement"><div><span class="pill">Supplemental design gate</span><h4>Kill-switch behavior</h4></div><p>The seed has no kill-switch requirement. Define failure states, always-on behavior, reconnect rules, and platform acceptance before adding a numbered FR.</p></aside></section>' +
      '<section class="panel r-gate"><div class="r-section-head"><div><span class="tiny">Evidence simulator</span><h3>External go / no-go gate</h3><p class="muted">Equal-weight gate completion. Four blockers are proposed design choices. Toggles simulate readiness; evidence remains required.</p></div><div class="r-score" aria-live="polite"><strong id="r-score-value">0 / 100</strong><span id="r-score-status">Simulation: not completed audit</span></div></div><div class="r-gate-actions"><button type="button" class="button primary" data-preset="all">Simulate all pass</button><button type="button" class="button" data-preset="blocker">Hard-blocker demo</button><button type="button" class="button" data-preset="reset">Reset</button></div><fieldset class="r-gate-grid"><legend class="sr-only">Launch-gate scenario toggles</legend>' + gates.map(function (g) { var hard = hardBlockers.indexOf(g.id) > -1; return '<label class="r-gate-item"><input type="checkbox" value="' + e(N, g.id) + '"><span class="r-check" aria-hidden="true">✓</span><span><b><span class="mono">' + e(N, g.id) + '</span> ' + e(N, g.dimension) + '</b><small>' + e(N, g.target) + '</small></span>' + (hard ? '<em>Proposed blocker</em>' : '') + '</label>'; }).join('') + '</fieldset></section>' +
    '</div>';
  }

  function bindLaunch(N, root) {
    var data = econ(N), reqs = data.prdRequirements || [], canonical = data.roadmapPhases || [], gates = data.launchScorecard || [];
    var mode = 'brief', selectedPhase = 0, filter = 'All', showAll = false;
    function phases() { return mode === 'brief' ? briefRoadmap : canonical; }
    function showRoadmap() {
      var list = phases();
      root.querySelector('#r-roadmap-track').innerHTML = list.map(function (p, i) { return '<button type="button" class="r-phase' + (i === selectedPhase ? ' is-active' : '') + '" data-phase="' + i + '"><span>' + e(N, p.weeks) + '</span><b>' + e(N, p.phase) + '</b><small>' + e(N, p.title) + '</small></button>'; }).join('');
      var p = list[selectedPhase] || list[0];
      var deliverables = p.deliverables || [];
      root.querySelector('#r-roadmap-detail').innerHTML = '<div><span class="pill">' + e(N, p.weeks) + '</span><h4>' + e(N, p.title) + '</h4><p>' + e(N, p.note || p.gateCriteria || '') + '</p></div>' + (deliverables.length ? '<button type="button" class="button" data-deliverables>Inspect ' + deliverables.length + ' deliverables</button>' : '<span class="tiny">Planning brief derived from the canonical phase plan.</span>');
      root.querySelectorAll('[data-phase]').forEach(function (b) { b.addEventListener('click', function () { selectedPhase = Number(b.dataset.phase); showRoadmap(); root.querySelector('[data-phase="' + selectedPhase + '"]').focus({preventScroll:true}); }); });
      var inspect = root.querySelector('[data-deliverables]');
      if (inspect) inspect.addEventListener('click', function () { N.detail(p.phase + ' · ' + p.weeks, '<div class="r-detail"><h3>' + e(N, p.title) + '</h3><ol>' + deliverables.map(function (x) { return '<li>' + e(N, x) + '</li>'; }).join('') + '</ol><h3>Gate criteria</h3><p>' + e(N, p.gateCriteria) + '</p></div>'); });
    }
    function catFor(r) { return categories[r.id] || 'Compliance'; }
    function showRequirements() {
      var visible = reqs.filter(function (r) { return filter === 'All' || catFor(r) === filter; });
      var shown = showAll ? visible : visible.slice(0, 4);
      root.querySelector('#r-filter-count').textContent = shown.length + ' of ' + visible.length + ' shown';
      root.querySelector('#r-prd-grid').innerHTML = shown.map(function (r) { return '<details class="r-requirement"><summary><span class="mono">' + e(N, r.id) + '</span><b>' + e(N, r.title) + '</b><span class="pill">' + e(N, r.priority) + '</span></summary><div><span class="tiny">' + e(N, r.type) + ' · ' + e(N, catFor(r)) + '</span><p>' + e(N, r.spec) + '</p></div></details>'; }).join('');
      if (!shown.length) {
        root.querySelector('#r-prd-grid').innerHTML = '<div class="r-empty"><p>No canonical kill-switch requirement. Inspect the supplemental design gate below.</p><button class="button" type="button" id="r-filter-reset">Return to all requirements</button></div>';
        root.querySelector('#r-filter-reset').addEventListener('click', function () { root.querySelector('[data-filter="All"]').click(); root.querySelector('[data-filter="All"]').focus(); });
      }
      var showButton = root.querySelector('#r-show-all');
      showButton.hidden = visible.length <= 4;
      showButton.textContent = showAll ? 'Show first 4' : 'Show all ' + visible.length + ' requirements';
      showButton.setAttribute('aria-expanded', String(showAll));
      root.querySelectorAll('[data-filter]').forEach(function (b) { var c = reqs.filter(function (r) { return b.dataset.filter === 'All' || catFor(r) === b.dataset.filter; }).length; b.querySelector('span').textContent = c; });
    }
    function score() {
      var checked = Array.from(root.querySelectorAll('.r-gate-item input:checked')).map(function (x) { return x.value; });
      var count = checked.length;
      var value = Math.round(count / gates.length * 100);
      var missingHard = hardBlockers.filter(function (x) { return checked.indexOf(x) < 0; });
      var status = count === 12 ? 'Scenario: ready · evidence still required' : (missingHard.length ? 'Blocked · hard blocker ' + missingHard.join(', ') : 'Blocked · requires 12 / 12');
      root.querySelector('#r-score-value').textContent = value + ' / 100';
      root.querySelector('#r-score-status').textContent = count === 0 ? 'Simulation: not completed audit' : status;
      root.querySelector('.r-gate').classList.toggle('is-ready', count === 12);
    }
    root.querySelectorAll('input[name="r-roadmap"]').forEach(function (x) { x.addEventListener('change', function () { mode = x.value; selectedPhase = 0; document.querySelector('#launch-title').innerHTML = (mode === 'brief' ? 'Sixteen weeks.' : 'Twelve weeks.') + '<br><span class="muted">Twelve reasons to be ready.</span>'; showRoadmap(); }); });
    root.querySelectorAll('[data-filter]').forEach(function (b) { b.addEventListener('click', function () { filter = b.dataset.filter; showAll = false; root.querySelectorAll('[data-filter]').forEach(function (x) { var on = x === b; x.classList.toggle('primary', on); x.setAttribute('aria-pressed', String(on)); }); showRequirements(); }); });
    root.querySelector('#r-show-all').addEventListener('click', function () { showAll = !showAll; showRequirements(); });
    root.querySelectorAll('.r-gate-item input').forEach(function (x) { x.addEventListener('change', score); });
    root.querySelectorAll('[data-preset]').forEach(function (b) { b.addEventListener('click', function () { var preset = b.dataset.preset; root.querySelectorAll('.r-gate-item input').forEach(function (x, i) { x.checked = preset === 'all' || (preset === 'blocker' && i < 11); }); score(); }); });
    showRoadmap(); showRequirements(); score();
  }

  window.NileModules.launch = function (N) {
    var root = document.querySelector('#act6 #launch-root');
    if (!root) return;
    root.innerHTML = launchMarkup(N);
    bindLaunch(N, root);
  };
}());
