"use strict";
(function () {
  const D = window.NOMLI_DATA;
  const KEY = "nomli-investor-prototype-v3";
  const $ = (s) => document.querySelector(s);
  const view = $("#view"),
    modal = $("#modal");
  const esc = (v) =>
    String(v == null ? "" : v).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const money = (c) =>
    "SAR " +
    (c / 100).toLocaleString("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const num = (n) => Number(Number(n).toFixed(2)).toString();
  const datePlus = (days) =>
    new Date(Date.parse(D.date + "T12:00:00Z") + days * 86400000)
      .toISOString()
      .slice(0, 10);
  const daysLeft = (item) =>
    Math.round(
      (Date.parse(item.expiry + "T12:00:00Z") -
        Date.parse(D.date + "T12:00:00Z")) /
        86400000,
    );
  const recipe = (id) => D.recipes.find((r) => r.id === id) || D.recipes[0];
  const lesson = (id) => D.lessons.find((l) => l.id === id) || D.lessons[0];
  const coreRecipeId = () =>
    S.profile.allergies.includes("wheat") ? "salad" : "bruschetta";
  const btn = (label, action, id = "", cls = "btn-secondary") => {
    const lists = {
      favorite: "favorites",
      cheer: "cheers",
      "save-post": "savedPosts",
      follow: "follows",
    };
    const pressed = lists[action]
      ? ` aria-pressed="${S[lists[action]].includes(id)}"`
      : "";
    return `<button type="button" class="btn ${cls}" data-action="${action}" data-id="${esc(id)}"${pressed}>${esc(label)}</button>`;
  };
  const tag = (status) =>
    `<span class="badge ${status === "Demo" ? "badge-demo" : status === "Exploratory" ? "badge-explore" : "badge-planned"}">${esc(status)}</span>`;
  const heading = (eyebrow, title, text = "", actions = "") =>
    `<header class="page-heading"><div><p class="eyebrow">${eyebrow}</p><h1 data-title tabindex="-1">${title}</h1>${text ? `<p class="muted">${text}</p>` : ""}</div><div class="actions">${actions}</div></header>`;
  const notice = (text) => `<p class="notice">${text}</p>`;
  const options = (values, selected) =>
    values
      .map(
        (x) =>
          `<option value="${esc(x)}"${x === selected ? " selected" : ""}>${esc(x)}</option>`,
      )
      .join("");
  const field = (label, name, value, type = "text", extra = "") =>
    `<label class="field">${label}<input name="${name}" type="${type}" value="${esc(value)}" ${extra}></label>`;
  const select = (label, name, values, selected) =>
    `<div class="field"><label for="field-${name}">${label}</label><select name="${name}" id="field-${name}">${options(values, selected)}</select></div>`;

  function fresh() {
    const items = {};
    Object.entries(D.items).forEach(([id, item]) => {
      items[id] = { ...item, expiry: datePlus(item.days), estimated: true };
    });
    return {
      version: 3,
      route: "home",
      profile: {
        done: false,
        level: "Beginner",
        goal: "Learn the basics",
        household: 2,
        time: 15,
        cuisine: "Any",
        allergies: [],
      },
      items,
      tools: Object.fromEntries(D.tools.map((t) => [t.id, t.on])),
      storage: "All",
      sort: "expiry",
      scanSaved: false,
      reviewed: false,
      adjustments: [],
      servings: {},
      swaps: {},
      favorites: [],
      matchOnly: true,
      recipe: "bruschetta",
      lessons: Object.fromEntries(
        D.lessons.map((l) => [
          l.id,
          { read: false, quiz: false, practice: false },
        ]),
      ),
      currentLesson: "balance",
      xp: 440,
      ledger: [],
      meals: [],
      cooking: null,
      shopping: [],
      receiptDraft: null,
      receipts: [],
      budget: 160000,
      accepted: false,
      heatAccepted: false,
      posts: [],
      cheers: [],
      savedPosts: [],
      follows: [],
      replies: {},
      blocked: [],
      reports: [],
      chat: [],
      tour: new URLSearchParams(location.search).has("investor"),
      accountPreview: false,
    };
  }
  let storageAvailable = true;
  function load() {
    try {
      const p = JSON.parse(sessionStorage.getItem(KEY));
      const arrays = [
        "ledger",
        "meals",
        "receipts",
        "favorites",
        "shopping",
        "posts",
        "cheers",
        "savedPosts",
        "follows",
        "blocked",
        "reports",
        "chat",
        "adjustments",
      ];
      const valid =
        p &&
        p.version === 3 &&
        p.profile &&
        Array.isArray(p.profile.allergies) &&
        p.items &&
        p.tools &&
        p.lessons &&
        p.servings &&
        p.swaps &&
        p.replies &&
        arrays.every((k) => Array.isArray(p[k])) &&
        D.lessons.every(
          (l) =>
            p.lessons[l.id] &&
            ["read", "quiz", "practice"].every(
              (k) => typeof p.lessons[l.id][k] === "boolean",
            ),
        ) &&
        Object.keys(D.items).every(
          (id) =>
            p.items[id] &&
            Number.isFinite(p.items[id].qty) &&
            p.items[id].qty >= 0 &&
            validDate(p.items[id].expiry),
        ) &&
        Number.isFinite(p.xp) &&
        p.xp >= 0 &&
        p.xp < 1000000 &&
        Number.isFinite(p.budget) &&
        p.budget > 0;
      if (valid) return p;
    } catch (_) {
      storageAvailable = false;
    }
    return fresh();
  }
  let S = load(),
    toastTimer,
    lastFocus;
  const routes = [
    "home",
    "kitchen",
    "cook",
    "recipe",
    "cooking",
    "review",
    "complete",
    "school",
    "lesson",
    "play",
    "hub",
    "shopping",
    "expenses",
    "profile",
    "features",
  ];
  const hash = location.hash.slice(1);
  if (routes.includes(hash)) S.route = hash;
  if (new URLSearchParams(location.search).has("embed"))
    document.body.classList.add("embedded");
  function persist() {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(S));
    } catch (_) {
      storageAvailable = false;
    }
  }
  function toast(text) {
    $("#toast").textContent = text;
    $("#toast").hidden = false;
    $("#announcer").textContent = text;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      $("#toast").hidden = true;
    }, 4500);
  }
  function navigate(route) {
    if (!routes.includes(route)) return;
    S.route = route;
    try {
      if (location.hash !== "#" + route)
        history.pushState(null, "", "#" + route);
    } catch (_) {
      location.hash = route;
    }
    render();
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
  function closeModal() {
    modal.close();
    if (lastFocus && lastFocus.isConnected) lastFocus.focus();
  }
  function openModal(title, body) {
    if (!modal.open) lastFocus = document.activeElement;
    if (modal.open) modal.close();
    $("#modal-content").innerHTML =
      `<header class="modal-heading"><h2 id="modal-title">${title}</h2>${btn("Close", "modal-close", "", "btn-quiet")}</header><div class="modal-body">${body}</div>`;
    modal.querySelectorAll("form").forEach((f) => (f.noValidate = true));
    modal.showModal();
  }
  let errorSequence = 0;
  function formError(form, text) {
    const box = form.querySelector("[data-error]");
    box.textContent = text;
    box.hidden = false;
    if (!box.id) box.id = "nomli-error-" + ++errorSequence;
    $("#announcer").textContent = text;
    const target =
      [...form.elements].find((el) => el.willValidate && !el.validity.valid) ||
      form.querySelector("input,select,textarea");
    if (target) {
      target.setAttribute("aria-invalid", "true");
      target.setAttribute("aria-describedby", box.id);
      target.focus();
    }
  }
  function errors() {
    return `<p class="notice notice-warning" data-error role="alert" hidden></p>`;
  }
  function level() {
    let i = 0;
    D.levels.forEach((l, n) => {
      if (S.xp >= l[0]) i = n;
    });
    return {
      name: D.levels[i][1],
      min: D.levels[i][0],
      next: D.levels[i + 1]?.[0] || D.levels[i][0],
      index: i,
    };
  }
  function levelBlock() {
    const l = level(),
      max = l.next - l.min || 1;
    return `<div class="stat-row"><b>${esc(l.name)}</b><span>${S.xp} XP${l.next > S.xp ? ` / ${l.next}` : ""}</span></div><progress class="progress" max="${max}" value="${Math.min(max, S.xp - l.min)}" aria-label="Experience toward next level">${S.xp} XP</progress>`;
  }
  function reward(key, amount) {
    if (S.ledger.includes(key)) return 0;
    S.ledger.push(key);
    S.xp += amount;
    return amount;
  }
  function milestones(id) {
    return Object.values(S.lessons[id]).filter(Boolean).length;
  }
  function lessonComplete(id) {
    return milestones(id) === 3;
  }
  function spend() {
    return (
      124000 +
      S.receipts.reduce(
        (sum, r) => sum + r.lines.reduce((a, l) => a + l.cents, 0),
        0,
      )
    );
  }
  function tourState() {
    return [
      S.profile.done,
      S.reviewed,
      S.lessons.balance.quiz,
      S.meals.some((m) => !m.undone),
      S.meals.some((m) => m.claimed && !m.undone),
      S.posts.length > 0,
    ];
  }
  function renderTour() {
    const box = $("#tour");
    box.hidden = !S.tour;
    if (!S.tour) return;
    const done = tourState(),
      steps = [
        "Set a sample profile",
        "Review your kitchen",
        "Read and check the salt concept",
        "Cook and confirm inventory",
        "Collect the reward",
        "Share the practice meal",
      ];
    const next = done.findIndex((x) => !x),
      i = next < 0 ? 5 : next;
    box.innerHTML = `<div><span class="eyebrow">INVESTOR PATH · MANAGE → LEARN → PLAY</span><h2>${next < 0 ? "Core journey complete" : `${i + 1}/6 · ${steps[i]}`}</h2><p class="muted">${next < 0 ? "Core journey complete. Explore optional features or reset." : "Follow the linked sample journey. Receipts and budgets are optional."}</p></div><div class="actions">${btn(next < 0 ? "Optional features" : "Continue tour", "tour-next", "", "btn-primary")}${btn("Hide guide", "tour-toggle", "", "btn-quiet")}</div><details class="tour-details"><summary>View the six-step path</summary><ol class="checklist">${steps.map((t, n) => `<li>${done[n] ? "✓ " : ""}${t}</li>`).join("")}</ol></details>`;
  }
  function renderNav() {
    const active = ["recipe", "cooking", "review", "complete"].includes(S.route)
      ? "cook"
      : S.route === "lesson"
        ? "school"
        : S.route;
    const nav = (items) =>
      items
        .map(
          ([id, label]) =>
            `<button type="button" class="nav-item" data-route="${id}"${active === id ? ' aria-current="page"' : ""}>${label}</button>`,
        )
        .join("");
    $("#desktop-nav").innerHTML = nav(D.nav);
    $("#bottom-nav").innerHTML = nav([
      ["home", "Home"],
      ["kitchen", "Kitchen"],
      ["cook", "Cook"],
      ["school", "School"],
      ["play", "Play"],
    ]);
  }
  function render(focus = true) {
    const active = document.activeElement;
    const preserve =
      active &&
      view.contains(active) &&
      (["favorite", "cheer", "save-post", "follow", "storage"].includes(
        active.dataset.action,
      ) ||
        active.dataset.change)
        ? {
            action: active.dataset.action,
            change: active.dataset.change,
            id: active.dataset.id,
          }
        : null;
    const screens = {
      home: homeView,
      kitchen: kitchenView,
      cook: cookView,
      recipe: recipeView,
      cooking: cookingView,
      review: reviewView,
      complete: completeView,
      school: schoolView,
      lesson: lessonView,
      play: playView,
      hub: hubView,
      shopping: shoppingView,
      expenses: expensesView,
      profile: profileView,
      features: featuresView,
    };
    view.innerHTML = (screens[S.route] || homeView)();
    view.querySelectorAll("form").forEach((f) => (f.noValidate = true));
    renderNav();
    renderTour();
    persist();
    if (focus) {
      const restored = preserve
        ? [...view.querySelectorAll("button,select,input")].find(
            (el) =>
              el.dataset.action === preserve.action &&
              el.dataset.change === preserve.change &&
              el.dataset.id === preserve.id,
          )
        : null;
      (restored || view.querySelector("[data-title]"))?.focus({
        preventScroll: true,
      });
    }
  }
  function homeView() {
    const first = recipe(coreRecipeId()),
      a = assess(first);
    return (
      heading(
        "LEARN. MANAGE. PLAY.",
        "Make room for a better cooking habit.",
        "A sample kitchen, a practical skill and a reason to come back.",
        btn(
          S.profile.done ? "Edit sample profile" : "Set up my kitchen",
          "onboard",
          "",
          "btn-primary",
        ),
      ) +
      (!S.profile.done
        ? notice(
            "Start with a cooking level, a goal and five sample ingredients. No full pantry setup or account needed.",
          )
        : notice(
            `${esc(S.profile.level)} · ${esc(S.profile.goal)} · ${S.profile.household} people · ${S.profile.time} minutes. ${btn("My preferences", "go", "profile", "btn-quiet")}`,
          )) +
      `<div class="grid grid-3 pillar-grid"><section class="card"><p class="eyebrow">01 / LEARN</p><h2>A little technique.<br>A better dinner.</h2><p>Chef Zara and three free starter lessons turn instructions into guided practice.</p><div class="skill-row"><span>Salt & texture</span><b>${milestones("balance")}/3 milestones</b></div>${btn("Open Chef School", "go", "school", "btn-primary")}</section><section class="card"><p class="eyebrow">02 / MANAGE</p><h2>Your real kitchen,<br>in one place.</h2><p>Ingredients, dates, equipment, recipes, shopping and spending stay connected.</p><div class="skill-row"><span>In stock</span><b>${Object.values(S.items).filter((i) => i.qty > 0).length} items</b></div>${btn("Open Kitchen", "go", "kitchen", "btn-primary")}</section><section class="card"><p class="eyebrow">03 / PLAY</p><h2>Small wins.<br>A lasting habit.</h2><p>Daily quests, useful unlocks and sample community moments reward the practice.</p>${levelBlock()}${btn("See quests & progress", "go", "play", "btn-primary")}</section></div><div class="grid grid-2"><section class="card"><div class="card-header"><h2>Tonight’s suggestion</h2>${tag("Demo")}</div>${recipeCard(first, a)}<p class="muted">Matched from ingredient readiness, expiry, skill, time and cuisine. This is a demo ranking, not an AI recommendation.</p></section><section class="card"><h2>Your next useful step</h2><ul class="feature-list"><li>${S.reviewed ? "Kitchen dates reviewed" : "Review the sample scan and confirm dates"}</li><li>${lessonComplete("balance") ? "Salt technique practised in a meal" : "Learn why salting tomatoes changes the texture"}</li><li>${S.posts.length ? "Practice meal shared to the sample Hub" : "Finish a meal, collect the reward and share the result"}</li></ul><div class="actions">${btn("Start investor path", "tour-start", "", "btn-primary")}${btn("Explore all planned features", "go", "features")}</div><p class="muted">${storageAvailable ? "Sample state stays in this browser tab through refresh. Reset demo clears it." : "Browser storage is unavailable: this preview keeps sample state in memory and refresh resets it."} No real user information is needed.</p></section></div>`
    );
  }
  function onboarding() {
    openModal(
      "Make this sample kitchen yours",
      `<p class="muted">Choose fictional demo preferences. Nothing is submitted to a server.</p><form data-form="onboard">${errors()}<div class="field-grid">${select("Cooking confidence", "level", ["Beginner", "Comfortable", "Confident"], S.profile.level)}${select("My goal", "goal", ["Learn the basics", "Cook efficiently", "Waste less"], S.profile.goal)}${field("Household size", "household", S.profile.household, "number", 'min="1" max="6" required')}${select("Time for dinner", "time", ["10", "15", "30"], String(S.profile.time))}${select("Cuisine preference", "cuisine", ["Any", "Mediterranean", "MENA-inspired", "Everyday"], S.profile.cuisine)}</div><fieldset><legend>Sample allergen exclusions</legend>${["egg", "milk", "wheat"].map((x) => `<label class="checkbox-field"><input type="checkbox" name="allergies" value="${x}"${S.profile.allergies.includes(x) ? " checked" : ""}>${x[0].toUpperCase() + x.slice(1)}</label>`).join("")}</fieldset><p class="notice notice-warning">These demo tags are incomplete. Check product labels and cross-contact information; prototype filtering is not a food-safety guarantee.</p><label class="checkbox-field"><input type="checkbox" name="starter"${!S.profile.done ? " checked" : ""}>Start with five ingredients: tomatoes, basil, bread, garlic and olive oil. Salt is a sample pantry staple.</label><button class="btn btn-primary" type="submit">Use this sample profile</button></form>`,
    );
  }
  function kitchenView() {
    let rows = Object.entries(S.items).filter(
      ([, i]) => S.storage === "All" || i.storage === S.storage,
    );
    rows.sort((a, b) =>
      S.sort === "name"
        ? a[1].name.localeCompare(b[1].name)
        : S.sort === "quantity"
          ? a[1].qty - b[1].qty
          : daysLeft(a[1]) - daysLeft(b[1]),
    );
    return (
      heading(
        "MANAGE / KITCHEN",
        "Know what’s here. Use it well.",
        "Edit quantities, storage and dates. Dates are illustrative and do not determine food safety.",
        btn("Review sample scan", "scan-review", "", "btn-primary") +
          btn("Add ingredient", "item-edit", "new"),
      ) +
      `<div class="pill-row">${["All", "Fridge", "Freezer", "Pantry", "Spices"].map((s) => `<button class="pill" data-action="storage" data-id="${s}" aria-pressed="${S.storage === s}">${s}</button>`).join("")}</div><div class="grid grid-2"><section class="card"><div class="card-header"><h2>Groceries</h2><label class="field">Sort<select data-change="sort">${options(["expiry", "name", "quantity"], S.sort)}</select></label></div><div class="stack">${rows.map(([id, i]) => `<div class="item-row"><div><b>${esc(i.name)}</b><p class="muted">${num(i.qty)} ${esc(i.unit)} · ${i.storage}</p><span class="badge">${i.qty <= 0 ? "Out of stock" : daysLeft(i) < 0 ? "Past sample date" : `${daysLeft(i)} days to sample date`}</span>${i.estimated ? '<small class="muted">Date needs review</small>' : ""}</div><div class="actions">${btn("Edit / adjust", "item-edit", id, "btn-quiet")}${i.qty <= i.low ? btn("Restock", "shopping-add", id, "btn-quiet") : ""}</div></div>`).join("") || '<p class="empty">Nothing in this storage area. Add an ingredient or change the filter.</p>'}</div></section><div class="stack"><section class="card"><h2>Equipment you own</h2><p class="muted">Turn off the toaster, then open bruschetta to see the cooking method adapt.</p><div class="field-grid">${D.tools.map((t) => `<label class="checkbox-field"><input type="checkbox" data-change="tool" data-id="${t.id}"${S.tools[t.id] ? " checked" : ""}>${t.name}</label>`).join("")}</div>${btn("See matched recipes", "go", "cook", "btn-primary")}</section><section class="card"><h2>Recent stock changes</h2>${
        S.adjustments.length
          ? `<ul class="timeline">${S.adjustments
              .slice(-5)
              .reverse()
              .map((x) => `<li>${esc(x)}</li>`)
              .join("")}</ul>`
          : '<p class="muted">Manual corrections, consumed items and discarded items will appear here.</p>'
      }<div class="actions">${btn("Shopping list", "go", "shopping")}${btn("Receipts & expenses", "go", "expenses")}</div></section></div></div>`
    );
  }
  function scanReview() {
    if (S.scanSaved) {
      openModal(
        "Sample scan already reviewed",
        notice(
          "This sample was already added once. Edit existing ingredients to make corrections.",
        ) + btn("Open inventory", "go", "kitchen", "btn-primary"),
      );
      return;
    }
    openModal(
      "Review the sample scan",
      `<p class="muted">Simulated scan: no camera or barcode service. Confirm quantities and correct the estimated dates before adding.</p><form data-form="scan">${errors()}${[
        ["tomatoes", 4],
        ["basil", 1],
        ["eggs", 6],
      ]
        .map(
          ([id, qty]) =>
            `<fieldset><legend>${D.items[id].name} · sample estimate</legend><div class="field-grid">${field(`Quantity (${D.items[id].unit})`, `qty-${id}`, qty, "number", 'min="0.01" max="10000" step="0.01" required')}${field("Review date", `expiry-${id}`, datePlus(D.items[id].days), "date", "required")}</div></fieldset>`,
        )
        .join(
          "",
        )}<label class="checkbox-field"><input type="checkbox" name="confirmed" required>I reviewed the sample quantities and dates.</label><button class="btn btn-primary">Confirm sample inventory</button></form>`,
    );
  }
  function itemForm(id) {
    const i = S.items[id] || {
      name: "",
      qty: 1,
      unit: "pieces",
      storage: "Fridge",
      expiry: datePlus(3),
    };
    openModal(
      id === "new" ? "Add an ingredient" : "Edit or adjust stock",
      `<form data-form="item" data-id="${esc(id)}">${errors()}${field("Ingredient name", "name", i.name, "text", 'maxlength="48" required')}<div class="field-grid">${field("New quantity on hand", "qty", i.qty, "number", 'min="0" max="100000" step="0.01" required')}${select("Unit", "unit", ["pieces", "slices", "cloves", "bunches", "ml", "g"], i.unit)}${select("Storage", "storage", ["Fridge", "Freezer", "Pantry", "Spices"], i.storage)}${field("Reviewed sample date", "expiry", i.expiry, "date", "required")}${select("Reason", "reason", ["Correction / purchase", "Consumed", "Discarded"], "Correction / purchase")}</div><p class="muted">Recipe quantities use the listed units. A different unit is flagged until corrected; no automatic conversion is implied.</p><button class="btn btn-primary">Save ingredient</button></form>`,
    );
  }
  function resolved(r) {
    const scale = (S.servings[r.id] || r.servings) / r.servings,
      sw = S.swaps[r.id] || {};
    return r.ingredients.map((base) => {
      const chosen = base.swaps?.find((x) => x.id === sw[base.id]);
      return {
        base: base.id,
        id: chosen ? chosen.id : base.id,
        qty: Number(((chosen ? chosen.qty : base.qty) * scale).toFixed(2)),
        swaps: base.swaps,
      };
    });
  }
  function method(r) {
    if (r.id === "salad")
      return {
        ok: !!S.tools.knife,
        text: S.tools.knife
          ? "Knife and board; no heated appliance needed."
          : "Needs a knife and board for preparation.",
      };
    if (r.id === "bruschetta") {
      if (!S.tools.knife)
        return { ok: false, text: "Needs a knife and board for preparation." };
      if (S.tools.toaster)
        return {
          ok: true,
          text: "Toaster for the bread; knife and board for preparation.",
        };
      if (S.tools.oven && S.tools.tray)
        return {
          ok: true,
          text: "Adapted: crisp the bread on a tray in the oven.",
        };
      if (S.tools.pan && S.tools.hob)
        return {
          ok: true,
          text: "Adapted: toast the bread in a dry pan on the hob.",
        };
      if (S.tools.airfryer)
        return { ok: true, text: "Adapted: crisp the bread in the air fryer." };
      return {
        ok: false,
        text: "Switch on a toaster, an oven with tray, a pan with hob, or an air fryer.",
      };
    }
    if (S.tools.pan && S.tools.hob)
      return { ok: true, text: "Frying pan on the hob." };
    if (r.id === "skillet" && S.tools.oven && S.tools.tray)
      return { ok: true, text: "Adapted: use a baking tray in the oven." };
    return {
      ok: false,
      text:
        "Needs a frying pan and hob" +
        (r.id === "skillet" ? ", or an oven and tray." : "."),
    };
  }
  function assess(r) {
    const ing = resolved(r),
      allergenMap = { bread: ["wheat"], eggs: ["egg"], butter: ["milk"] };
    let ready = 0,
      urgent = 0;
    const missing = [];
    ing.forEach((x) => {
      if (x.id === "skip") {
        ready++;
        return;
      }
      const i = S.items[x.id];
      if (
        i &&
        i.unit === D.items[x.id].unit &&
        i.qty >= x.qty &&
        daysLeft(i) >= 0
      ) {
        ready++;
        if (daysLeft(i) <= 3) urgent++;
      } else missing.push(x);
    });
    const allergens = [
      ...new Set(ing.flatMap((x) => allergenMap[x.id] || [])),
    ].filter((x) => S.profile.allergies.includes(x));
    const timeFit = r.time <= S.profile.time,
      skillFit = r.difficulty === "Beginner" || S.profile.level !== "Beginner",
      cuisineFit =
        S.profile.cuisine === "Any" || S.profile.cuisine === r.cuisine;
    return {
      ing,
      ready,
      missing,
      allergens,
      method: method(r),
      timeFit,
      skillFit,
      cuisineFit,
      score:
        (ready / ing.length) * 100 +
        urgent * 3 +
        (timeFit ? 10 : 0) +
        (skillFit ? 5 : 0) +
        (cuisineFit ? 5 : 0),
    };
  }
  function recipeCard(r, a) {
    return `<article class="recipe-card"><img class="recipe-image" src="${r.image}" alt="Illustrative ${esc(r.name)}" width="320" height="284" loading="lazy"><div class="recipe-body"><h3>${r.name}</h3><p class="recipe-meta">${r.time} min · ${r.difficulty} · ${S.servings[r.id] || r.servings} servings</p><p><b>Learn:</b> ${r.objective}</p><p class="muted">${a.ready}/${a.ing.length} ingredients ready · ${a.timeFit ? "Fits your time" : "More time needed"} · ${a.skillFit ? "Fits your confidence" : "Learning stretch"}</p><div class="actions">${btn("View recipe", "recipe", r.id, "btn-primary")}${btn(S.favorites.includes(r.id) ? "Saved" : "Save", "favorite", r.id, "btn-quiet")}</div></div></article>`;
  }
  function cookView() {
    let recipes = D.recipes
      .map((r) => ({ r, a: assess(r) }))
      .filter(({ a }) => !S.matchOnly || !a.allergens.length)
      .sort((a, b) => b.a.score - a.a.score);
    return (
      heading(
        "MANAGE + LEARN / COOK",
        "A good match for your kitchen.",
        "Ingredient readiness, dates, cooking confidence, available time and cuisine all shape this sample order.",
      ) +
      `<label class="checkbox-field"><input type="checkbox" data-change="matches"${S.matchOnly ? " checked" : ""}>Apply sample allergen exclusions (${S.profile.allergies.join(", ") || "none"})</label>${notice("Allergen tags are limited prototype examples. Check ingredient labels and cross-contact; these filters do not establish safety.")}<div class="grid grid-3">${recipes.map(({ r, a }) => recipeCard(r, a)).join("") || '<p class="empty">No sample recipes match the selected exclusions. Review preferences or show all recipes to inspect the blockers.</p>'}</div><div class="grid grid-2"><section class="card"><h2>Saved recipes</h2>${S.favorites.length ? S.favorites.map((id) => btn(recipe(id).name, "recipe", id, "btn-quiet")).join("") : "<p class='muted'>Save a recipe to return to it later.</p>"}</section><section class="card"><h2>Previously cooked</h2>${
        S.meals
          .filter((m) => !m.undone)
          .map(
            (m) =>
              `<p>${recipe(m.rid).name} · ${m.claimed ? "Reward collected" : "Reward ready"}</p>`,
          )
          .join("") ||
        '<p class="muted">Your completed sample meals will appear here.</p>'
      }</section></div>`
    );
  }
  function recipeView() {
    const r = recipe(S.recipe),
      a = assess(r),
      blocked = a.missing.length || a.allergens.length || !a.method.ok;
    return (
      heading(
        "LEARN + MANAGE / RECIPE",
        r.name,
        r.objective,
        btn("All recipes", "go", "cook") +
          btn("Ask Chef Zara", "coach", r.id, "btn-primary"),
      ) +
      `<div class="grid grid-2"><section class="card"><img class="post-image" src="${r.image}" alt="Illustrative ${esc(r.name)}"><p>${r.time} min · ${r.difficulty} · ${r.cuisine}</p>${select("Servings", "servings", ["1", "2", "3", "4", "5", "6"], String(S.servings[r.id] || r.servings)).replace('<select name="servings"', '<select name="servings" data-change="servings"')}<h2>Ingredients</h2><ul class="feature-list">${a.ing
        .map((x) => {
          if (x.id === "skip")
            return `<li>Optional finish skipped ${swapSelect(r, x)}</li>`;
          const i = S.items[x.id],
            ok = !a.missing.includes(x);
          return `<li><b>${esc(i.name)}</b> · ${num(x.qty)} ${esc(D.items[x.id].unit)}<p class="muted">${ok ? "In stock" : i.unit !== D.items[x.id].unit ? "Unit mismatch: edit the stock unit" : daysLeft(i) < 0 ? "Past sample date: review before cooking" : `Have ${num(i.qty)} ${esc(i.unit)}; resolve the shortfall`}</p>${swapSelect(r, x)}</li>`;
        })
        .join(
          "",
        )}</ul>${a.missing.length ? btn("Add missing items to shopping", "shopping-missing", r.id) : ""}</section><div class="stack"><section class="card"><h2>Your kitchen context</h2><p>${esc(S.profile.level)} · ${S.profile.household} people · ${S.profile.time} minutes available</p><p>${a.method.text}</p>${!a.method.ok ? btn("Change equipment", "go", "kitchen") : ""}${a.allergens.length ? `<p class="notice notice-warning">Blocked by sample allergy preference: ${a.allergens.join(", ")}. Review the ingredient or choose another recipe.</p>` : ""}<p class="muted">${a.timeFit ? "Fits" : "Exceeds"} your time preference. ${a.skillFit ? "Matches" : "Stretches"} your selected confidence.</p></section><section class="coach"><p class="eyebrow">CHEF ZARA · SCRIPTED PROTOTYPE</p><h2>A small lesson in every meal.</h2><p>${r.objective}</p><p class="muted">Learn the reason, practise the technique, then see the lesson milestone change.</p>${btn("Open linked starter lesson", "lesson", r.lesson, "btn-primary")}${btn("Why this technique?", "coach", r.id)}</section><section class="card"><h2>Ready to cook?</h2>${blocked ? notice("Resolve ingredient, unit, date, allergy or equipment blockers above. Saving a shopping-list item does not add stock.") : "<p>Ingredients and equipment are ready for this sample recipe.</p>"}<button class="btn btn-primary" data-action="cook-start"${blocked ? " disabled" : ""}>Start guided cooking</button></section></div></div>`
    );
  }
  function swapSelect(r, x) {
    if (!x.swaps) return "";
    return `<div class="field"><label for="swap-${x.base}">Choose a finish or substitution</label><select id="swap-${x.base}" data-change="swap" data-id="${x.base}"><option value="original"${!(S.swaps[r.id] || {})[x.base] ? " selected" : ""}>Original ingredient</option>${x.swaps.map((sw) => `<option value="${sw.id}"${(S.swaps[r.id] || {})[x.base] === sw.id ? " selected" : ""}>${sw.id === "skip" ? "Skip optional finish" : D.items[sw.id].name}</option>`).join("")}</select></div>`;
  }
  function schoolView() {
    return (
      heading(
        "LEARN / CHEF SCHOOL",
        "A skill you can use tonight.",
        "Three free starter lessons are available from the beginning. Reading and quizzes show understanding; cooking records self-reported guided practice.",
      ) +
      `<div class="grid grid-3">${D.lessons.map((l) => `<article class="card"><span class="badge badge-demo">Free starter · ${l.minutes} min</span><h2>${l.name}</h2><p>${l.objective}</p><div class="stat-row"><span>${l.skill}</span><b>${milestones(l.id)}/3 milestones</b></div><progress class="progress" max="3" value="${milestones(l.id)}" aria-label="${l.skill} guided milestones">${milestones(l.id)}/3</progress><p class="muted">${lessonComplete(l.id) ? "Guided lesson completed. Real-world mastery is not verified." : "Concept, knowledge check and recipe practice; milestones can be completed in any order"}</p>${btn("Open lesson", "lesson", l.id, "btn-primary")}</article>`).join("")}</div><section class="card"><h2>Your learning path</h2><ol class="curriculum"><li><b>Starter · available now in this demo</b><p>Salt and texture, knife setup, gentle heat. Three free introductory lessons.</p></li><li><b>Developing · later planned</b><p>Pan sauces, timing a whole meal and ingredient-led substitutions. Starter practice is the proposed prerequisite.</p>${btn("Preview next stage", "preview", "school")}</li><li><b>Advanced · later planned</b><p>Fresh pasta and multi-course preparation. Verified assessments and certificates remain exploratory.</p></li></ol><p class="notice">At 500 XP, the demo opens a Heat-control challenge. Basic Chef School access never depends on reaching 500 XP.</p></section>`
    );
  }
  function lessonView() {
    const l = lesson(S.currentLesson),
      p = S.lessons[l.id],
      target = l.id === "balance" ? coreRecipeId() : l.recipe;
    return (
      heading(
        "LEARN / FREE STARTER LESSON",
        l.name,
        l.objective,
        btn("Chef School", "go", "school"),
      ) +
      `<div class="grid grid-2"><section class="card"><p class="eyebrow">1 / UNDERSTAND</p><h2>The technique and the reason</h2><p>${l.instruction}</p>${btn(p.read ? "Concept read" : "I’ve read the concept", "lesson-read", l.id, "btn-primary")}<p class="eyebrow">2 / CHECK UNDERSTANDING</p>${p.read ? `<form data-form="quiz" data-id="${l.id}">${errors()}<fieldset><legend>${l.question}</legend>${l.answers.map((answer, i) => `<label class="checkbox-field"><input type="radio" name="answer" value="${i}" required>${answer}</label>`).join("")}</fieldset><button class="btn btn-secondary">Check my answer</button></form>` : notice("Read the concept to open the knowledge check.")}${p.quiz ? '<p class="success">Knowledge check complete. Your next step is practical use.</p>' : ""}</section><div class="stack"><section class="card"><p class="eyebrow">3 / PRACTISE IN A MEAL</p><h2>${recipe(target).name}</h2><p>Follow the guided recipe, acknowledge the technique checkpoint and confirm the ingredients used. The practice milestone updates after meal completion.</p>${btn("Practise with this recipe", "recipe", target, "btn-primary")}<p class="muted">${p.practice ? "One guided recipe practice recorded. This is self-reported, not verified mastery." : "No recipe practice recorded yet."}</p></section><section class="card"><h2>Skill progress, separate from XP</h2><progress class="progress" max="3" value="${milestones(l.id)}" aria-label="${l.skill} milestones">${milestones(l.id)}/3</progress><ul class="checklist"><li>${p.read ? "✓" : "○"} Concept read</li><li>${p.quiz ? "✓" : "○"} Knowledge check passed</li><li>${p.practice ? "✓" : "○"} Guided recipe practice</li></ul><p>${milestones(l.id)}/3 guided milestones. ${S.xp} XP tracks activity rewards separately.</p>${btn("Ask Zara to explain", "coach", l.recipe)}</section></div></div>`
    );
  }
  function coaching(rid, key) {
    const r = recipe(rid),
      a = assess(r);
    const answers = {
      why: lesson(r.lesson).instruction,
      missing: a.missing.length
        ? `You are short of ${a.missing
            .filter((x) => x.id !== "skip")
            .map((x) => S.items[x.id].name)
            .join(
              ", ",
            )}. Try a listed substitution, reduce servings, or add items to shopping. A shopping list does not change inventory.`
        : "The listed quantities are available. You can still compare substitutions in the recipe.",
      salty:
        "Pause seasoning. Taste a small portion, then consider combining it with an unseasoned portion rather than adding more salt. This is an illustrative coaching reply.",
      heat: `Watch the food rather than a fixed appliance number. If it colours too quickly, lower the heat and reassess. Current method: ${a.method.text}`,
      repeat: S.cooking
        ? recipe(S.cooking.rid).steps[S.cooking.step]?.text ||
          "The guided cooking steps are complete."
        : r.objective,
    };
    return answers[key] || answers.why;
  }
  function coachModal(rid, prompt) {
    const r = recipe(rid);
    if (S.chatRecipe !== rid) {
      S.chat = [];
      S.chatRecipe = rid;
    }
    if (prompt) {
      const labels = {
        why: "Explain the technique",
        missing: "I’m missing an ingredient",
        salty: "It tastes too salty",
        heat: "The heat is too high",
        repeat: "Repeat the current step",
      };
      S.chat.push(
        { role: "You", text: labels[prompt] },
        { role: "Zara", text: coaching(rid, prompt) },
      );
      S.chat = S.chat.slice(-10);
      persist();
    }
    openModal(
      "Chef Zara · scripted coach",
      `<p class="badge badge-demo">Simulation · no AI service connected</p><p class="muted">Context: ${esc(S.profile.level)} · ${esc(r.name)} · ${Object.values(S.items).filter((i) => i.qty > 0).length} ingredients in stock · ${S.profile.time} minutes. Exclusions: ${S.profile.allergies.join(", ") || "none"}.</p><div class="chat-log">${S.chat.length ? S.chat.map((m) => `<div class="chat-message"><b>${m.role}</b><p>${esc(m.text)}</p></div>`).join("") : "<div class='chat-message'><b>Zara</b><p>I can explain the technique, offer a listed substitution or talk through the next step. Choose a sample question.</p></div>"}</div><div class="actions">${[
        ["why", "Explain the technique"],
        ["missing", "Missing ingredient"],
        ["salty", "Too salty"],
        ["heat", "Heat too high"],
        ["repeat", "Repeat step"],
      ]
        .map(
          ([k, label]) =>
            `<button class="btn btn-secondary" data-action="coach-prompt" data-id="${rid}" data-prompt="${k}">${label}</button>`,
        )
        .join(
          "",
        )}</div><p class="notice notice-warning">Sample guidance is not food-safety validation. Check labels, cross-contact and food condition. Real coaching needs evaluated safety guardrails.</p>${btn("Preview voice & languages", "preview", "voice")}`,
    );
  }
  function cookingView() {
    const c = S.cooking;
    if (!c)
      return heading(
        "COOK",
        "Choose a recipe first.",
        "",
        btn("Recipes", "go", "cook"),
      );
    const r = recipe(c.rid),
      step = r.steps[c.step];
    return (
      heading(
        "LEARN + MANAGE / GUIDED COOKING",
        `${c.step + 1}/${r.steps.length} · ${step.title}`,
        r.name,
        btn("Leave cooking", "leave-cooking"),
      ) +
      `<div class="grid grid-2"><section class="card"><img class="post-image" src="${r.image}" alt="Illustrative recipe image"><h2>${step.title}</h2><p>${step.text}</p><p class="notice">${method(r).text}</p>${step.technique ? `<div class="coach"><p class="eyebrow">PRACTICAL TECHNIQUE CHECKPOINT</p><p>${r.objective}</p>${r.id === "bruschetta" ? "<p class='muted'>Presenter shortcut: the two-minute rest is compressed to a click in this simulation. No real timer or doneness check.</p>" : ""}<label class="checkbox-field"><input type="checkbox" data-change="technique"${c.technique ? " checked" : ""}>I practised this technique in the sample flow.</label></div>` : ""}${c.step === 0 && ["bruschetta", "salad"].includes(r.id) ? `<label class="checkbox-field"><input type="checkbox" data-change="knife-practice"${c.knifePractice ? " checked" : ""}>I practised stable-board, deliberate cutting in this sample.</label>` : ""}<div class="actions">${btn("Repeat", "repeat-step")}${btn("Explain", "coach", r.id)}${btn(c.step === r.steps.length - 1 ? "Review ingredients used" : "Next step", "cook-next", "", "btn-primary")}</div></section><section class="card"><h2>What you’re learning</h2><p>${r.skill}: ${r.objective}</p><p>${esc(S.profile.level)} · ${S.servings[r.id] || r.servings} servings · scripted coaching.</p><ol class="step-list">${r.steps.map((s, i) => `<li>${i < c.step ? "✓ " : ""}${s.title}</li>`).join("")}</ol><p class="muted">The practice milestone records an acknowledged demo activity, not independently demonstrated cooking ability.</p></section></div>`
    );
  }
  function reviewView() {
    const c = S.cooking;
    if (!c) return cookView();
    const r = recipe(c.rid),
      ing = resolved(r).filter((x) => x.id !== "skip");
    return (
      heading(
        "MANAGE / CONFIRM CONSUMPTION",
        "Check what went into the meal.",
        "Correct the quantities before applying the inventory change.",
      ) +
      `<form class="card" data-form="consumption">${errors()}<div class="table-wrap"><table class="receipt-table"><thead><tr><th>Ingredient</th><th>On hand</th><th>Used</th></tr></thead><tbody>${ing.map((x) => `<tr><th scope="row">${esc(S.items[x.id].name)}<small>${esc(S.items[x.id].unit)}</small></th><td>${num(S.items[x.id].qty)}</td><td><label class="field"><span class="sr-only">${esc(S.items[x.id].name)} quantity used</span><input name="used-${x.id}" type="number" min="0" max="${S.items[x.id].qty}" step="0.01" value="${x.qty}" required></label></td></tr>`).join("")}</tbody></table></div><div class="actions"><button class="btn btn-primary">Apply changes & complete meal</button>${btn("Back to recipe", "go", "recipe")}</div></form>`
    );
  }
  function latestMeal() {
    return [...S.meals].reverse().find((m) => !m.undone);
  }
  function completeView() {
    const m = latestMeal();
    if (!m) return cookView();
    const r = recipe(m.rid);
    return (
      heading(
        "LEARN + PLAY / MEAL COMPLETE",
        "A meal made. A technique practised.",
        r.name,
      ) +
      `<div class="grid grid-2"><section class="card"><img class="post-image" src="${r.image}" alt="Illustrative finished meal"><h2>Inventory updated</h2><ul class="feature-list">${m.used.map((x) => `<li>${esc(S.items[x.id].name)}: ${num(x.qty)} ${esc(S.items[x.id].unit)} used</li>`).join("")}</ul>${!m.claimed ? btn("Undo inventory change", "undo-meal", m.id) : ""}<p class="muted">${m.claimed ? "Reward already collected for this event. Adjust any later stock correction in Kitchen." : "Undo is available before reward collection. You can correct the deduction and apply it again."}</p></section><div class="stack"><section class="card"><h2>${r.skill} progress</h2><p>${milestones(r.lesson)}/3 guided milestones. ${m.technique ? "One self-reported practice recorded." : "Technique checkpoint was not acknowledged; no practice milestone added."}</p><progress class="progress" max="3" value="${milestones(r.lesson)}" aria-label="Linked lesson progress">${milestones(r.lesson)}/3</progress>${btn("View lesson result", "lesson", r.lesson)}</section><section class="card"><h2>Your reward</h2><p>First completion of each recipe: 40 XP. First acknowledged salt technique: 20 XP. Replays do not repeat these rewards.</p>${levelBlock()}${m.claimed ? '<p class="success">Reward collected. The ledger prevents collecting it twice or again after refresh.</p>' : btn("Collect reward", "claim-meal", m.id, "btn-primary")}<div class="actions">${m.claimed ? btn(m.shared ? "View shared sample" : "Share illustrative meal", "share", m.id) : '<p class="muted">Collect the reward before sharing the sample result.</p>'}${btn("Quests & achievements", "go", "play")}</div></section></div></div>`
    );
  }
  function playView() {
    const meals = S.meals.filter((m) => !m.undone),
      linked =
        Number(lessonComplete("balance")) +
        Number(meals.length > 0) +
        Number(S.posts.length > 0),
      badges = [
        ["Pantry keeper", S.reviewed, "Review a sample scan"],
        ["First plate", meals.length > 0, "Complete a guided meal"],
        [
          "Technique explorer",
          lessonComplete("balance"),
          "Complete all three salt-and-texture milestones",
        ],
        [
          "Shared practice",
          S.posts.length > 0,
          "Share one illustrative finished meal",
        ],
        [
          "Steady heat",
          S.ledger.includes("challenge:heat"),
          "Complete the unlocked Heat-control challenge",
        ],
      ];
    return (
      heading(
        "PLAY / QUESTS & PROGRESS",
        "A reason to cook. A reason to learn.",
        "Rewards track activity. Guided skill milestones track learning separately.",
      ) +
      `<section class="card">${levelBlock()}<p class="muted">440 XP is seeded sample progress. All new rewards come from this demo’s once-only ledger.</p></section><div class="grid grid-3"><section class="card"><span class="badge">Ingredient quest · Beginner</span><h2>Rescue the basil</h2><p>Cook a compatible basil recipe before the sample date. Complete the guided recipe and confirm inventory use.</p><p><b>40 XP</b> for the first recipe completion.</p>${btn("Open daily recipe", "recipe", coreRecipeId(), "btn-primary")}${btn("Replace daily quest", "quest-replace")}</section><section class="card"><span class="badge">Learning quest · Beginner</span><h2>Salt with a reason</h2><p>Read the concept, pass the knowledge check and acknowledge the salting technique during the compatible tomato recipe practice.</p><p><b>20 XP</b> for the first salt technique practice; ${milestones("balance")}/3 lesson milestones.</p>${btn("Open learning quest", "lesson", "balance", "btn-primary")}</section><section class="card"><span class="badge">Weekly challenge · 3 linked actions</span><h2>Learn. Cook. Share.</h2><p>Finish the salt lesson, complete one meal and share the illustrative result.</p><progress class="progress" max="3" value="${linked}" aria-label="Weekly challenge actions">${linked}/3</progress><p>${linked}/3 actions · 30 XP, once.</p>${!S.accepted ? btn("Accept challenge", "challenge-accept", "", "btn-primary") : linked === 3 && !S.ledger.includes("weekly") ? btn("Claim 30 XP", "challenge-claim", "", "btn-primary") : `<p>${S.ledger.includes("weekly") ? "Reward collected" : "Challenge accepted. Continue the linked actions."}</p>`}</section></div><div class="grid grid-2"><section class="card"><h2>Achievements with a reason</h2>${badges.map(([name, earned, why]) => `<div class="skill-row"><span><b>${name}</b><small>${why}</small></span><span class="badge">${earned ? "Earned in demo" : "Not yet"}</span></div>`).join("")}<h3>A flexible habit</h3><p>Proposed goal: cook on three days each week, with rest days allowed. Two earlier days are seeded examples; today’s first completed meal fills the third. This is a policy preview, not verified attendance.</p></section><section class="card"><h2>Levels that open something useful</h2><ol class="curriculum">${D.levels.map(([xp, name], i) => `<li><b>${name}</b> · ${xp.toLocaleString()} XP${i === 1 ? " · Heat-control practice challenge" : ""}${i > 1 ? " · later capability preview" : ""}</li>`).join("")}</ol>${S.xp >= 500 ? btn("Open Heat-control challenge", "heat-challenge", "", "btn-primary") : notice("At 500 XP, a Heat-control challenge opens. Your three starter lessons are already free.")}${btn("Preview advanced play features", "preview", "play")}</section></div>`
    );
  }
  function samplePosts() {
    return [
      {
        id: "sample-meal",
        author: "Sample cook",
        title: "Bruschetta practice",
        text: "Trying the salt-and-drain technique before assembly.",
        image: "../images/plate-320.webp",
        kind: "Meal · illustrative image",
      },
      {
        id: "sample-skill",
        author: "Sample learner",
        title: "One skill, three milestones",
        text: "Read the concept, checked understanding, then practised in a guided meal.",
        kind: "Technique · simulated progress",
      },
      {
        id: "sample-level",
        author: "Sample member",
        title: "Apprentice Cook",
        text: "A sample 500 XP milestone opens the Heat-control challenge.",
        kind: "Milestone · simulated achievement",
      },
    ];
  }
  function hubView() {
    const posts = [
      ...S.posts.map((p) => ({
        id: p.id,
        author: "You · demo profile",
        title: recipe(p.rid).name,
        text: "Guided practice completed in the Nomli prototype.",
        image: recipe(p.rid).image,
        kind: "Sample share · illustrative image",
      })),
      ...samplePosts(),
    ].filter((p) => !S.blocked.includes(p.id));
    return (
      heading(
        "PLAY / FOOD HUB",
        "Share the meal. Share what you learned.",
        "Every person, post, photo and reaction here is illustrative. No image authenticity check or real community service is connected.",
        btn("Community & safety preview", "preview", "community"),
      ) +
      `<div class="grid grid-2">${posts.map((p) => `<article class="card post"><div class="card-header"><div><b>${esc(p.author)}</b><p class="muted">${p.kind}</p></div>${btn(S.follows.includes(p.id) ? "Following" : "Follow sample", "follow", p.id, "btn-quiet")}</div>${p.image ? `<img class="post-image" src="${p.image}" alt="Illustrative meal image; not user-submitted proof">` : ""}<h2>${esc(p.title)}</h2><p>${esc(p.text)}</p><div class="actions">${btn(S.cheers.includes(p.id) ? "Cheered" : "Cheer", "cheer", p.id, "btn-quiet")}${btn("Reply", "reply", p.id, "btn-quiet")}${btn(S.savedPosts.includes(p.id) ? "Saved" : "Save", "save-post", p.id, "btn-quiet")}${btn("Report / block", "report", p.id, "btn-quiet")}</div>${(S.replies[p.id] || []).map((t) => `<p class="notice"><b>You · sample reply:</b> ${esc(t)}</p>`).join("")}</article>`).join("")}</div>${S.blocked.length ? btn("Restore blocked sample posts", "restore-posts") : ""}<p class="notice">Posting entitlements are a founder decision still to validate. This prototype opens all social interactions without a subscription or payment.</p>`
    );
  }
  function shoppingView() {
    return (
      heading(
        "MANAGE / SHOPPING",
        "Close the gaps in your kitchen.",
        "Adding to this list does not change inventory or place an order.",
        btn("Add low-stock suggestions", "shopping-low", "", "btn-primary"),
      ) +
      `<section class="card"><h2>Your restock list</h2>${S.shopping.length ? S.shopping.map((x) => `<div class="item-row"><label class="checkbox-field"><input type="checkbox" data-change="shopping-tick" data-id="${x.id}"${x.got ? " checked" : ""}><span><b>${esc(S.items[x.id]?.name || x.id)}</b><small>${esc(x.reason)}</small></span></label>${btn("Remove", "shopping-remove", x.id, "btn-quiet")}</div>`).join("") : '<p class="empty">No missing items yet. Add a recipe shortfall or low-stock suggestion.</p>'}<div class="actions">${btn("Open receipts & spending", "go", "expenses", "btn-primary")}${btn("Preview grocery ordering", "preview", "ordering")}${btn("Family meal-plan preview", "preview", "planning")}</div><p class="muted">Checked items are a shopping-list acknowledgement. Use a receipt sample or inventory edit to add stock.</p></section>`
    );
  }
  function expenseLines() {
    return S.receipts.flatMap((r) => r.lines);
  }
  function expensesView() {
    const total = spend(),
      remaining = S.budget - total,
      weeks = [28000, 35000, 31000, total - 94000],
      cats = { Produce: 38000, "Dairy & eggs": 31000, Pantry: 55000 };
    expenseLines().forEach((l) => {
      const c = S.items[l.id]?.category || "Pantry";
      cats[c] = (cats[c] || 0) + l.cents;
    });
    return (
      heading(
        "MANAGE / OPTIONAL EXPENSE BRANCH",
        "See what your kitchen costs.",
        "Illustrative SAR currency. Localization and real receipt extraction are later planned; no financial account is connected.",
      ) +
      `<div class="grid grid-3"><section class="card metric"><span>October grocery spend</span><b class="metric-value">${money(total)}</b><p class="muted">SAR 1,240 seeded history + reviewed sample receipts.</p></section><section class="card metric"><span>Monthly budget</span><b class="metric-value">${money(S.budget)}</b><p>${money(Math.abs(remaining))} ${remaining >= 0 ? "remaining" : "over budget"}</p><progress class="progress" max="${S.budget}" value="${Math.min(total, S.budget)}" aria-label="Grocery budget used">${money(total)}</progress></section><section class="card metric"><span>Compared with September</span><b class="metric-value">${((total / 110000 - 1) * 100).toFixed(1)}% higher</b><p class="muted">September sample: ${money(110000)}. These figures are not actual household results.</p></section></div><div class="grid grid-2"><section class="card"><h2>Weekly spending</h2><div class="bar-chart">${weeks.map((w, i) => `<div class="bar-column"><span style="height:${Math.round((100 * w) / Math.max(...weeks))}px" aria-hidden="true"></span><b>Week ${i + 1}</b><small>${money(w)}</small></div>`).join("")}</div><h3>By category</h3>${Object.entries(
        cats,
      )
        .map(
          ([name, value]) =>
            `<div class="stat-row"><span>${name}</span><b>${money(value)}</b></div>`,
        )
        .join(
          "",
        )}<p class="muted">Category and weekly totals reconcile to ${money(total)}.</p></section><section class="card"><h2>Set a grocery budget</h2><form data-form="budget">${errors()}${field("Monthly budget (SAR)", "budget", (S.budget / 100).toFixed(2), "number", 'min="1" max="100000" step="0.01" required')}<button class="btn btn-primary">Save budget</button></form><h2>Review a receipt sample</h2><p class="muted">No camera, files or OCR accessed. Edit known item names, quantities and line prices before applying the sample.</p><div class="actions">${btn("Paper receipt sample", "receipt", "paper")}${btn("Digital / PDF sample", "receipt", "digital")}</div><h3>Purchase history</h3><div class="item-row"><span>Seeded October purchases</span><b>${money(124000)}</b></div>${S.receipts.map((r) => `<div class="item-row"><span>${esc(r.name)}<small>${r.lines.length} reviewed lines · added once</small></span><b>${money(r.lines.reduce((s, l) => s + l.cents, 0))}</b></div>`).join("")}</section></div>`
    );
  }
  function receiptForm(source) {
    if (S.receipts.some((r) => r.source === source)) {
      openModal(
        "Sample already saved",
        notice(
          "Each sample receipt can update inventory and spending once per demo. Its purchase remains in history through refresh.",
        ) + btn("View expenses", "go", "expenses", "btn-primary"),
      );
      return;
    }
    const receipt = D.receipts[source];
    S.receiptDraft = source;
    openModal(
      "Review " + receipt.name.toLowerCase(),
      `<p class="badge badge-demo">Simulated extraction · ${receipt.store}</p><p class="muted">Edit each known ingredient, quantity and line total. Changing the display name retains its inventory identity. All values are illustrative.</p><form data-form="receipt" data-source="${source}">${errors()}${receipt.lines.map((l) => `<fieldset><legend>${esc(D.items[l.id].name)}</legend><div class="field-grid">${field("Item name", `name-${l.id}`, S.items[l.id].name, "text", 'maxlength="48" required')}${field(`Quantity (${D.items[l.id].unit})`, `qty-${l.id}`, l.qty, "number", 'min="0.01" max="10000" step="0.01" required')}${field("Line total (SAR)", `price-${l.id}`, (l.cents / 100).toFixed(2), "number", 'min="0" max="100000" step="0.01" required')}${field("Reviewed date for combined stock", `expiry-${l.id}`, S.items[l.id].qty > 0 ? S.items[l.id].expiry : datePlus(D.items[l.id].days), "date", "required")}</div></fieldset>`).join("")}<p class="notice">Scanned total: ${money(receipt.lines.reduce((s, l) => s + l.cents, 0))}. <b data-revised-total>Reviewed total: ${money(receipt.lines.reduce((s, l) => s + l.cents, 0))}</b></p><p class="muted">This prototype keeps one stock record per ingredient. Review its combined date; separate purchase batches are later planned.</p><label class="checkbox-field"><input type="checkbox" name="confirm" required>I reviewed names, quantities, combined-stock dates and the revised total.</label><button class="btn btn-primary">Save receipt to kitchen & expenses</button></form>`,
    );
  }
  function profileView() {
    return (
      heading(
        "PERSONALIZATION / DEMO PROFILE",
        "A kitchen shaped around you.",
        "Sample choices influence recipe ordering, exclusions, coaching context and household suggestions.",
        btn("Edit preferences", "onboard", "", "btn-primary"),
      ) +
      `<div class="grid grid-2"><section class="card"><h2>Cooking preferences</h2><dl class="feature-list"><dt>Confidence</dt><dd>${esc(S.profile.level)}</dd><dt>Goal</dt><dd>${esc(S.profile.goal)}</dd><dt>Household</dt><dd>${S.profile.household} people</dd><dt>Time</dt><dd>${S.profile.time} minutes</dd><dt>Cuisine</dt><dd>${esc(S.profile.cuisine)}</dd><dt>Sample exclusions</dt><dd>${S.profile.allergies.join(", ") || "None"}</dd></dl>${btn("Review equipment", "go", "kitchen")}</section><section class="card"><h2>Account, consent & privacy</h2><p>This demo has no sign-in or personal-information submission. Its sample state is stored only in this browser tab’s session storage and can be reset.</p><div class="actions">${btn("Preview account setup", "preview", "account")}${btn("Preview privacy choices", "preview", "privacy")}${btn("Preview upgrade flow", "preview", "upgrade")}${btn("Clear demo state", "reset-ask")}</div></section></div>`
    );
  }
  function featuresView() {
    return (
      heading(
        "COMPLETE PRODUCT MAP",
        "What’s demonstrated. What comes next.",
        "Every planned capability has a visible representation. A preview is not a production implementation.",
      ) +
      `<div class="pill-row">${tag("Demo")}${tag("MVP planned")}${tag("Later planned")}${tag("Exploratory")}</div><div class="grid grid-2">${D.features.map(([pillar, name, status, detail]) => `<article class="card"><div class="card-header"><span class="eyebrow">${pillar}</span>${tag(status)}</div><h2>${name}</h2><p>${detail}</p>${status !== "Demo" ? btn("Open concept preview", "preview", previewKey(name)) : btn("Explore journey", "go", pillar === "Learn" ? "school" : pillar === "Play" ? "play" : "kitchen")}</article>`).join("")}</div>`
    );
  }
  function previewKey(name) {
    if (/Voice|multilingual/.test(name)) return "voice";
    if (/family|Shared/.test(name)) return "family";
    if (/planning|dietary/.test(name)) return "planning";
    if (/Offline/.test(name)) return "offline";
    if (/Certificate|mastery/.test(name)) return "certificates";
    if (/checkout/.test(name)) return "upgrade";
    if (/ordering/.test(name)) return "ordering";
    if (/Sign-in/.test(name)) return "account";
    if (/Photo authenticity|leaderboard|Community|mentor|challenges/.test(name))
      return "play";
    if (/school/.test(name)) return "school";
    if (/currency|localization/.test(name)) return "localization";
    return "production";
  }
  function heatChallenge() {
    const p = S.lessons.heat;
    openModal(
      "Heat-control challenge · unlocked",
      `<p>Pass the free gentle-heat knowledge check and complete its guided recipe practice. This challenge is an optional application task; starter lessons remain free.</p><ul class="checklist"><li>${p.read && p.quiz ? "✓" : "○"} Read and pass the heat lesson</li><li>${p.practice ? "✓" : "○"} Acknowledge heat-control practice during cooking</li></ul><p>Reward: 20 XP, once, and the Steady heat achievement.</p>${!S.heatAccepted ? btn("Accept Heat-control challenge", "heat-accept", "", "btn-primary") : S.ledger.includes("challenge:heat") ? '<p class="success">Challenge reward collected.</p>' : lessonComplete("heat") ? btn("Claim Heat-control reward", "heat-claim", "", "btn-primary") : notice("Challenge accepted. Complete the two checks to claim the reward.")}${btn("Open heat lesson", "lesson", "heat")}${btn("Open linked recipe", "recipe", "omelette")}`,
    );
  }
  function preview(id) {
    const previews = {
      voice: [
        "Voice & multilingual coaching",
        "Later planned",
        "A future coaching session could offer a language selector, spoken steps and hands-free Repeat / Next controls. This screen does not access a microphone or translate text.",
        '<div class="field-grid">' +
          select(
            "Concept language",
            "language",
            ["English", "Arabic — planned"],
            "English",
          ) +
          "</div>" +
          btn("Try scripted step explanation", "coach", S.recipe),
      ],
      family: [
        "Shared family kitchen",
        "Later planned",
        "Five illustrative household places, shared groceries and a weekly family quest. No invites or real household sharing are sent.",
        '<div class="pill-row"><span class="pill">You · sample</span><span class="pill">Member 2</span><span class="pill">Member 3</span><span class="pill">Member 4</span><span class="pill">Member 5</span></div>' +
          btn("View shared-inventory concept", "go", "kitchen"),
      ],
      planning: [
        "Weekly meal-planning concept",
        "Later planned",
        "A future plan could consider preferences, inventory and time. Dietary validation and household coordination are not implemented.",
        '<ol class="timeline"><li>Monday · tomato & basil bruschetta</li><li>Wednesday · basil omelette</li><li>Friday · tomato & egg skillet</li></ol>' +
          btn("Open a sample recipe", "recipe", "bruschetta"),
      ],
      offline: [
        "Offline recipe library",
        "Later planned",
        "This meeting prototype can run from its local package. Production offline recipe downloads, account syncing and conflict handling are separate planned work.",
        btn("Open sample recipe", "recipe", "bruschetta"),
      ],
      school: [
        "Developing & advanced school",
        "Later planned",
        "Proposed path: starter lessons → heat-control practice → pan sauces → meal timing → fresh pasta. Prerequisites and subscription access need curriculum validation.",
        btn("Return to free starter lessons", "go", "school"),
      ],
      certificates: [
        "Assessment & certificates",
        "Exploratory",
        "Current progress means concept read, knowledge check and self-reported practice. No certificate or verified mastery is issued. Real assessment requires a future evaluation method.",
        btn("View demonstrated milestones", "go", "school"),
      ],
      ordering: [
        "Grocery ordering concept",
        "Exploratory",
        "A future integration could send a reviewed shopping list to a chosen grocery provider. No merchant is connected, no checkout opens and no order is placed.",
        btn("Return to shopping list", "go", "shopping"),
      ],
      account: [
        "Account setup concept",
        "MVP planned",
        "A production journey would include sign-in, account recovery and consent. This preview uses a sample profile; do not enter credentials or personal details.",
        btn("Continue with sample profile", "onboard", "", "btn-primary"),
      ],
      privacy: [
        "Privacy & consent concept",
        "MVP planned",
        "No analytics, camera, microphone or account connection is active in this demo. Future controls need a production privacy policy and data-management implementation.",
        '<ul class="checklist"><li>Session-only sample state</li><li>Reset clears local demo choices</li><li>No external data submission</li></ul>' +
          btn("Clear this sample session", "reset-ask"),
      ],
      upgrade: [
        "Subscription preview",
        "Later planned",
        "Prices and entitlements remain unvalidated hypotheses. Billing starts only when the corresponding features ship. Selecting a concept plan never takes payment.",
        '<div class="tier-grid">' +
          [
            ["Free", "$0", "Three starter lessons and core kitchen loop"],
            ["Plus", "$5.99/mo", "Planned full-school depth"],
            ["Pro", "$12.99/mo", "Voice and offline features later"],
            ["Family", "$19.99/mo", "Shared household features later"],
          ]
            .map(
              ([name, price, desc]) =>
                `<article class="card"><h3>${name}</h3><b>${price}</b><p>${desc}</p>${btn("Preview " + name, "plan-select", name)}</article>`,
            )
            .join("") +
          "</div>",
      ],
      community: [
        "Community safety concept",
        "Later planned",
        "Follow, reply, save, report and block here are local simulations. Production moderation queues, privacy controls and abuse handling require staffed policies and backend services.",
        btn("Return to sample Hub", "go", "hub"),
      ],
      play: [
        "Advanced play & community",
        "Later planned",
        "Illustrative future capabilities: family quests, community leaderboards, custom challenges and mentor profiles. There are no real rankings or participants, and no photo-authenticity verification.",
        '<ol class="timeline"><li>Sample family quest · cook together</li><li>Sample community challenge · practise heat control</li><li>Advanced level · propose a custom challenge</li></ol>',
      ],
      localization: [
        "Regional localization",
        "Later planned",
        "SAR is the current illustrative spending currency. Real currency formats, Arabic layouts, multilingual lessons and localized grocery catalogs require dedicated localization.",
        btn("Return to spending sample", "go", "expenses"),
      ],
      production: [
        "Production implementation",
        "MVP / later planned",
        "This capability is represented in the prototype. Shipping it requires backend integrations, evaluated data, security, accessibility testing and staged validation. The feature map identifies its current stage.",
        btn("View all feature statuses", "go", "features"),
      ],
    };
    const p = previews[id] || previews.production;
    openModal(p[0], tag(p[1]) + `<p>${p[2]}</p>` + p[3]);
  }
  function addShopping(id, reason) {
    if (!S.items[id]) return;
    if (!S.shopping.some((x) => x.id === id))
      S.shopping.push({ id, reason, got: false });
  }
  function applyConsumption(form, fd) {
    const c = S.cooking;
    if (!c || c.applied) return;
    const r = recipe(c.rid),
      a = assess(r);
    if (a.allergens.length || !a.method.ok) {
      formError(
        form,
        "Resolve allergy preferences and equipment before applying this sample meal.",
      );
      return;
    }
    const used = [];
    for (const x of a.ing.filter((x) => x.id !== "skip")) {
      const raw = fd.get("used-" + x.id),
        qty = Number(raw);
      if (
        raw === "" ||
        !Number.isFinite(qty) ||
        qty < 0 ||
        qty > S.items[x.id].qty ||
        Math.abs(qty * 100 - Math.round(qty * 100)) > 0.000001
      ) {
        formError(
          form,
          "Enter quantities between zero and the amount on hand.",
        );
        return;
      }
      used.push({ id: x.id, qty });
    }
    if (!used.some((x) => x.qty > 0)) {
      formError(
        form,
        "Record at least one ingredient used before completing the meal.",
      );
      return;
    }
    const before = JSON.parse(JSON.stringify(S.items));
    used.forEach((x) => {
      S.items[x.id].qty = Number((S.items[x.id].qty - x.qty).toFixed(2));
    });
    const lessonBefore = JSON.parse(JSON.stringify(S.lessons));
    if (c.technique) {
      S.lessons[r.lesson].practice = true;
    }
    if (c.knifePractice) S.lessons.knife.practice = true;
    const m = {
      id: "meal-" + (S.meals.length + 1),
      rid: r.id,
      used,
      before,
      lessonBefore,
      technique: c.technique,
      knifePractice: !!c.knifePractice,
      claimed: false,
      shared: false,
      undone: false,
    };
    S.meals.push(m);
    c.applied = true;
    S.adjustments.push(
      "Cooked " + r.name + ": reviewed ingredient deduction applied.",
    );
    navigate("complete");
    toast(
      "Inventory updated and guided practice recorded. Review the result before collecting XP.",
    );
  }
  function claimMeal(id) {
    const m = S.meals.find((x) => x.id === id);
    if (!m || m.undone || m.claimed) return;
    const old = level().index;
    let amount = reward("meal:" + m.rid, 40);
    if (recipe(m.rid).lesson === "balance" && m.technique)
      amount += reward("technique:balance", 20);
    m.claimed = true;
    render();
    toast(
      amount
        ? `${amount} XP collected once. Total: ${S.xp} XP.`
        : "This recipe’s reward was already collected. No repeat XP.",
    );
    if (level().index > old)
      openModal(
        "Apprentice Cook · 500 XP reached",
        `<p>You have unlocked the Heat-control practice challenge. Your three starter lessons remain free from the beginning.</p>${levelBlock()}${btn("Open the new challenge", "heat-challenge", "", "btn-primary")}${btn("Continue to share the meal", "share", m.id)}`,
      );
  }
  function tourNext() {
    const done = tourState(),
      i = done.findIndex((x) => !x);
    if (i === 0) return onboarding();
    if (i === 1) return scanReview();
    if (i === 2) {
      S.currentLesson = "balance";
      return navigate("lesson");
    }
    if (i === 3) {
      S.recipe = coreRecipeId();
      return navigate("recipe");
    }
    if (i === 4) {
      const m = latestMeal();
      return m ? claimMeal(m.id) : navigate("cook");
    }
    if (i === 5) {
      const m = latestMeal();
      return m ? shareMeal(m.id) : navigate("hub");
    }
    navigate("features");
  }
  function shareMeal(id) {
    const m = S.meals.find((x) => x.id === id);
    if (!m || m.undone) return;
    if (!m.claimed)
      return toast("Collect the meal reward before sharing its sample result.");
    if (!m.shared) {
      S.posts.unshift({ id: "own-" + m.id, rid: m.rid });
      m.shared = true;
    }
    closeModalIfOpen();
    navigate("hub");
    toast(
      "Illustrative finished meal shared to the local sample feed. No public post was sent.",
    );
  }
  function closeModalIfOpen() {
    if (modal.open) modal.close();
  }
  function handleAction(action, id, el) {
    if (action === "modal-close") return closeModal();
    if (action === "go") {
      closeModalIfOpen();
      return navigate(id);
    }
    if (action === "menu")
      return openModal(
        "Explore Nomli",
        `<div class="stack">${D.nav.map(([r, label]) => btn(label, "go", r, "btn-quiet")).join("")}</div>`,
      );
    if (action === "onboard") return onboarding();
    if (action === "tour-toggle") {
      S.tour = !S.tour;
      render();
      return;
    }
    if (action === "tour-start") {
      S.tour = true;
      render();
      return tourNext();
    }
    if (action === "tour-next") return tourNext();
    if (action === "reset-ask")
      return openModal(
        "Reset this sample session?",
        `<p>Clear demo preferences, ingredients, learning milestones, receipts, posts and XP rewards. Return to the seeded 440 XP starting state.</p>${btn("Reset sample session", "reset-confirm", "", "btn-primary")}${btn("Keep exploring", "modal-close")}`,
      );
    if (action === "reset-confirm") {
      closeModalIfOpen();
      const tour = S.tour;
      S = fresh();
      S.tour = tour;
      navigate("home");
      toast("Demo reset. All sample journeys are ready for rehearsal.");
      return;
    }
    if (action === "storage") {
      S.storage = id;
      render();
      return;
    }
    if (action === "scan-review") return scanReview();
    if (action === "item-edit") return itemForm(id);
    if (action === "shopping-add") {
      addShopping(id, "Low stock or manual addition");
      persist();
      toast("Added to shopping. Inventory has not changed.");
      return;
    }
    if (action === "shopping-low") {
      Object.entries(S.items)
        .filter(([, i]) => i.qty <= i.low)
        .forEach(([k]) => addShopping(k, "Low stock"));
      render();
      toast("Low-stock suggestions added once.");
      return;
    }
    if (action === "shopping-missing") {
      assess(recipe(id)).missing.forEach((x) =>
        addShopping(x.id, "Missing for " + recipe(id).name),
      );
      persist();
      toast(
        "Missing ingredients added to shopping; they are still unavailable until stocked.",
      );
      return;
    }
    if (action === "shopping-remove") {
      S.shopping = S.shopping.filter((x) => x.id !== id);
      render();
      return;
    }
    if (action === "favorite") {
      toggle(S.favorites, id);
      render();
      return;
    }
    if (action === "recipe") {
      closeModalIfOpen();
      S.recipe = id;
      navigate("recipe");
      return;
    }
    if (action === "lesson") {
      closeModalIfOpen();
      S.currentLesson = id;
      navigate("lesson");
      return;
    }
    if (action === "lesson-read") {
      S.lessons[id].read = true;
      render();
      toast("Concept read. Open the knowledge check next.");
      return;
    }
    if (action === "coach") return coachModal(id || S.recipe);
    if (action === "coach-prompt") return coachModal(id, el.dataset.prompt);
    if (action === "cook-start") {
      const r = recipe(S.recipe),
        a = assess(r);
      if (a.missing.length || a.allergens.length || !a.method.ok)
        return toast("Resolve the recipe blockers first.");
      S.cooking = { rid: r.id, step: 0, technique: false };
      navigate("cooking");
      return;
    }
    if (action === "cook-next") {
      const c = S.cooking,
        r = recipe(c.rid);
      if (r.steps[c.step].technique && !c.technique)
        return toast("Acknowledge the technique checkpoint before moving on.");
      if (c.step < r.steps.length - 1) {
        c.step++;
        render();
      } else navigate("review");
      return;
    }
    if (action === "repeat-step") {
      toast(recipe(S.cooking.rid).steps[S.cooking.step].text);
      return;
    }
    if (action === "leave-cooking")
      return openModal(
        "Leave guided cooking?",
        `<p>No ingredients have been deducted. You can reopen this recipe and start the sample steps again.</p>${btn("Return to recipe", "go", "recipe", "btn-primary")}${btn("Keep cooking", "modal-close")}`,
      );
    if (action === "claim-meal") {
      claimMeal(id);
      return;
    }
    if (action === "undo-meal") {
      const m = S.meals.find((x) => x.id === id);
      if (!m || m.claimed || m.undone) return;
      m.used.forEach((x) => {
        S.items[x.id].qty = Number((S.items[x.id].qty + x.qty).toFixed(2));
      });
      m.undone = true;
      D.lessons.forEach((l) => {
        S.lessons[l.id].practice = S.meals.some(
          (other) =>
            !other.undone &&
            other.technique &&
            (recipe(other.rid).lesson === l.id ||
              (l.id === "knife" && other.knifePractice)),
        );
      });
      S.cooking = {
        rid: m.rid,
        step: recipe(m.rid).steps.length - 1,
        technique: m.technique,
        knifePractice: !!m.knifePractice,
      };
      navigate("review");
      toast(
        "Ingredient deduction and practice milestone undone. Correct and apply again.",
      );
      return;
    }
    if (action === "share") {
      shareMeal(id);
      return;
    }
    if (action === "quest-replace")
      return openModal(
        "Replace the daily recipe quest",
        `<p>Choose another sample recipe. The learning quest stays available separately.</p>${D.recipes.map((r) => btn(r.name, "recipe", r.id)).join("")}`,
      );
    if (action === "challenge-accept") {
      S.accepted = true;
      render();
      toast("Weekly challenge accepted. Complete the three linked actions.");
      return;
    }
    if (action === "challenge-claim") {
      if (
        !S.accepted ||
        !lessonComplete("balance") ||
        !S.meals.some((m) => !m.undone) ||
        !S.posts.length
      )
        return;
      const amount = reward("weekly", 30);
      render();
      toast(
        amount
          ? "Weekly challenge: 30 XP collected once."
          : "Weekly reward already collected.",
      );
      return;
    }
    if (action === "heat-challenge") {
      if (S.xp < 500)
        return toast(
          "Reach 500 XP to open this challenge. Starter lessons are already available.",
        );
      return heatChallenge();
    }
    if (action === "heat-accept") {
      if (S.xp < 500) return;
      S.heatAccepted = true;
      persist();
      return heatChallenge();
    }
    if (action === "heat-claim") {
      if (S.xp < 500 || !S.heatAccepted || !lessonComplete("heat")) return;
      const amount = reward("challenge:heat", 20);
      closeModalIfOpen();
      render();
      toast(
        amount
          ? "Heat-control challenge complete: 20 XP and Steady heat achievement."
          : "Challenge reward already collected.",
      );
      return;
    }
    if (action === "cheer") {
      toggle(S.cheers, id);
      render();
      toast(
        S.cheers.includes(id) ? "Sample cheer added." : "Sample cheer removed.",
      );
      return;
    }
    if (action === "save-post") {
      toggle(S.savedPosts, id);
      render();
      return;
    }
    if (action === "follow") {
      toggle(S.follows, id);
      render();
      toast("Sample following state updated locally.");
      return;
    }
    if (action === "reply")
      return openModal(
        "Reply to a sample post",
        `<form data-form="reply" data-id="${esc(id)}">${errors()}<label class="field">Illustrative reply<textarea name="reply" rows="3" maxlength="180" required placeholder="Try: I practised this technique too."></textarea></label><p class="muted">No public comment or message will be sent.</p><button class="btn btn-primary">Add sample reply</button></form>`,
      );
    if (action === "report")
      return openModal(
        "Report or block · simulation",
        `<p>Choose a local sample action. No moderation team or server receives this report.</p>${btn("Report inappropriate sample", "report-confirm", id)}${btn("Block this sample post", "block-post", id)}`,
      );
    if (action === "report-confirm") {
      S.reports.push(id);
      closeModal();
      persist();
      toast(
        "Sample report recorded locally. Production moderation is planned.",
      );
      return;
    }
    if (action === "block-post") {
      if (!S.blocked.includes(id)) S.blocked.push(id);
      closeModal();
      render();
      toast("Sample post hidden. Restore it from the feed controls.");
      return;
    }
    if (action === "restore-posts") {
      S.blocked = [];
      render();
      return;
    }
    if (action === "receipt") return receiptForm(id);
    if (action === "preview") return preview(id);
    if (action === "plan-select") {
      closeModal();
      toast(id + " concept selected. No subscription or payment was created.");
      return;
    }
  }
  function toggle(list, id) {
    const n = list.indexOf(id);
    if (n < 0) list.push(id);
    else list.splice(n, 1);
  }
  document.addEventListener("click", (event) => {
    const el = event.target.closest("[data-action],[data-route]");
    if (!el || el.disabled) return;
    if (el.dataset.route) {
      closeModalIfOpen();
      navigate(el.dataset.route);
    } else handleAction(el.dataset.action, el.dataset.id || "", el);
  });
  document.addEventListener("input", (event) => {
    const form = event.target.closest('[data-form="receipt"]');
    if (!form) return;
    const prices = [...form.querySelectorAll('[name^="price-"]')].map((input) =>
      Number(input.value),
    );
    const total = form.querySelector("[data-revised-total]");
    if (total)
      total.textContent = prices.every((p) => Number.isFinite(p) && p >= 0)
        ? "Reviewed total: " +
          money(prices.reduce((sum, p) => sum + Math.round(p * 100), 0))
        : "Check the line prices";
  });
  document.addEventListener("change", (event) => {
    const el = event.target,
      what = el.dataset.change;
    if (!what) return;
    if (what === "tool") {
      S.tools[el.dataset.id] = el.checked;
      persist();
      toast(
        "Equipment updated. Recipe readiness and cooking method use this setting.",
      );
    }
    if (what === "sort") {
      S.sort = el.value;
      render();
    }
    if (what === "matches") {
      S.matchOnly = el.checked;
      render();
    }
    if (what === "servings") {
      S.servings[S.recipe] = Number(el.value);
      render();
    }
    if (what === "swap") {
      S.swaps[S.recipe] ||= {};
      if (el.value === "original") delete S.swaps[S.recipe][el.dataset.id];
      else S.swaps[S.recipe][el.dataset.id] = el.value;
      render();
    }
    if (what === "technique") {
      S.cooking.technique = el.checked;
      persist();
    }
    if (what === "knife-practice") {
      S.cooking.knifePractice = el.checked;
      persist();
    }
    if (what === "shopping-tick") {
      S.shopping.find((x) => x.id === el.dataset.id).got = el.checked;
      persist();
      toast("Shopping checklist updated. Inventory unchanged.");
    }
  });
  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!form.dataset.form) return;
    event.preventDefault();
    const fd = new FormData(form),
      kind = form.dataset.form;
    if (kind === "onboard") {
      const count = Number(fd.get("household"));
      if (!Number.isInteger(count) || count < 1 || count > 6)
        return formError(form, "Choose a household size from one to six.");
      S.profile = {
        done: true,
        level: fd.get("level"),
        goal: fd.get("goal"),
        household: count,
        time: Number(fd.get("time")),
        cuisine: fd.get("cuisine"),
        allergies: fd.getAll("allergies"),
      };
      if (fd.get("starter")) {
        [
          ["tomatoes", 4],
          ["basil", 1],
          ["bread", 4],
          ["garlic", 4],
          ["oil", 250],
        ].forEach(([id, q]) => {
          S.items[id].qty = Math.max(S.items[id].qty, q);
        });
      }
      closeModal();
      navigate("home");
      toast(
        "Sample preferences saved. Five ingredients give you a quick first recipe.",
      );
    }
    if (kind === "scan") {
      if (S.scanSaved) return;
      const ids = ["tomatoes", "basil", "eggs"];
      for (const id of ids) {
        const q = Number(fd.get("qty-" + id)),
          date = fd.get("expiry-" + id);
        if (
          !Number.isFinite(q) ||
          q <= 0 ||
          q > 10000 ||
          Math.abs(q * 100 - Math.round(q * 100)) > 0.000001 ||
          !validDate(date)
        )
          return formError(
            form,
            "Review positive quantities and valid sample dates.",
          );
      }
      if (!fd.get("confirmed"))
        return formError(
          form,
          "Confirm the sample dates and quantities first.",
        );
      ids.forEach((id) => {
        S.items[id].qty = Math.max(
          S.items[id].qty,
          Number(fd.get("qty-" + id)),
        );
        S.items[id].expiry = fd.get("expiry-" + id);
        S.items[id].estimated = false;
      });
      S.scanSaved = true;
      S.reviewed = true;
      S.adjustments.push(
        "Sample scan reviewed: tomatoes, basil and eggs confirmed.",
      );
      closeModal();
      navigate("kitchen");
      toast(
        "Sample inventory reviewed. Existing larger receipt quantities were preserved.",
      );
    }
    if (kind === "item") {
      const name = String(fd.get("name")).trim(),
        q = Number(fd.get("qty")),
        date = fd.get("expiry");
      if (
        !name ||
        name.length > 48 ||
        fd.get("qty") === "" ||
        !Number.isFinite(q) ||
        q < 0 ||
        q > 100000 ||
        Math.abs(q * 100 - Math.round(q * 100)) > 0.000001 ||
        !validDate(date)
      )
        return formError(
          form,
          "Enter a name, non-negative quantity and valid sample date.",
        );
      const id =
          form.dataset.id === "new"
            ? "custom-" + Object.keys(S.items).length
            : form.dataset.id,
        old = S.items[id] || { low: 0, category: "Pantry" };
      S.items[id] = {
        ...old,
        name,
        qty: q,
        unit: fd.get("unit"),
        storage: fd.get("storage"),
        expiry: date,
        estimated: false,
      };
      S.adjustments.push(
        name +
          ": " +
          num(q) +
          " " +
          fd.get("unit") +
          " on hand · " +
          fd.get("reason"),
      );
      closeModal();
      navigate("kitchen");
      toast("Inventory correction saved.");
    }
    if (kind === "quiz") {
      const l = lesson(form.dataset.id);
      if (fd.get("answer") === null)
        return formError(form, "Choose one answer.");
      if (Number(fd.get("answer")) !== l.correct)
        return formError(
          form,
          "Not quite. Re-read the reason above, then try again. No progress or XP was added.",
        );
      S.lessons[l.id].quiz = true;
      closeModalIfOpen();
      render();
      toast(
        "Knowledge check passed. Practise in the linked recipe to complete the lesson.",
      );
    }
    if (kind === "consumption") applyConsumption(form, fd);
    if (kind === "budget") {
      const raw = fd.get("budget"),
        amount = Number(raw),
        cents = Math.round(amount * 100);
      if (
        raw === "" ||
        !Number.isFinite(amount) ||
        amount < 1 ||
        amount > 100000 ||
        Math.abs(amount * 100 - cents) > 0.000001
      )
        return formError(
          form,
          "Enter SAR 1–100,000 with at most two decimal places.",
        );
      S.budget = cents;
      render();
      toast(
        "Budget saved. " +
          money(Math.abs(S.budget - spend())) +
          (S.budget >= spend() ? " remaining." : " over budget."),
      );
    }
    if (kind === "receipt") {
      const source = form.dataset.source;
      if (S.receipts.some((r) => r.source === source)) {
        closeModal();
        return toast(
          "Sample already saved. No duplicate stock or spending added.",
        );
      }
      const lines = [];
      for (const l of D.receipts[source].lines) {
        if (S.items[l.id].unit !== D.items[l.id].unit)
          return formError(
            form,
            "Correct the ingredient unit in Kitchen before adding this receipt.",
          );
        const name = String(fd.get("name-" + l.id)).trim(),
          qty = Number(fd.get("qty-" + l.id)),
          amount = Number(fd.get("price-" + l.id)),
          cents = Math.round(amount * 100);
        if (
          !name ||
          name.length > 48 ||
          !Number.isFinite(qty) ||
          qty <= 0 ||
          qty > 10000 ||
          Math.abs(qty * 100 - Math.round(qty * 100)) > 0.000001 ||
          fd.get("price-" + l.id) === "" ||
          !Number.isFinite(amount) ||
          amount < 0 ||
          amount > 100000 ||
          Math.abs(amount * 100 - cents) > 0.000001
        )
          return formError(
            form,
            "Check each name, positive quantity and line price (maximum two decimals).",
          );
        const expiry = fd.get("expiry-" + l.id);
        if (!validDate(expiry))
          return formError(form, "Review each stock date before saving.");
        lines.push({ id: l.id, name, qty, cents, expiry });
      }
      if (!fd.get("confirm"))
        return formError(
          form,
          "Confirm the revised line totals before saving.",
        );
      lines.forEach((l) => {
        S.items[l.id].name = l.name;
        S.items[l.id].expiry = l.expiry;
        S.items[l.id].estimated = false;
        S.items[l.id].qty = Number((S.items[l.id].qty + l.qty).toFixed(2));
        S.shopping.forEach((x) => {
          if (x.id === l.id) x.got = true;
        });
      });
      S.receipts.push({ source, name: D.receipts[source].name, lines });
      S.adjustments.push(
        D.receipts[source].name +
          ": " +
          lines.length +
          " groceries added once.",
      );
      closeModal();
      navigate("expenses");
      toast(
        "Reviewed receipt saved once. Inventory and spending updated together.",
      );
    }
    if (kind === "reply") {
      const text = String(fd.get("reply")).trim();
      if (!text || text.length > 180)
        return formError(
          form,
          "Write a sample reply of one to 180 characters.",
        );
      (S.replies[form.dataset.id] ||= []).push(text);
      closeModal();
      render();
      toast("Sample reply added locally. Nothing was publicly posted.");
    }
  });
  function validDate(date) {
    return (
      /^\d{4}-\d{2}-\d{2}$/.test(date) &&
      Number.isFinite(Date.parse(date + "T12:00:00Z")) &&
      new Date(Date.parse(date + "T12:00:00Z")).toISOString().slice(0, 10) ===
        date &&
      Math.abs(
        Date.parse(date + "T12:00:00Z") - Date.parse(D.date + "T12:00:00Z"),
      ) <
        86400000 * 3650
    );
  }
  function restoreRoute() {
    const route = location.hash.slice(1) || "home";
    if (routes.includes(route) && route !== S.route) {
      S.route = route;
      render();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }
  window.addEventListener("hashchange", restoreRoute);
  window.addEventListener("popstate", restoreRoute);
  modal.addEventListener("cancel", () => {
    if (lastFocus?.isConnected) setTimeout(() => lastFocus.focus(), 0);
  });
  render(false);
})();
