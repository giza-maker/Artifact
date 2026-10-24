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
  const icon = (name, cls = "") =>
    `<svg class="ui-icon ${cls}" aria-hidden="true"><use href="icons.svg#${name}"/></svg>`;
  const navIcons = {
    home: "house",
    kitchen: "refrigerator",
    cook: "chef-hat",
    school: "graduation-cap",
    play: "target",
    hub: "users",
    shopping: "shopping-cart",
    expenses: "wallet",
    profile: "gear",
    features: "sparkle",
  };
  const itemPhoto = (id) =>
    ({
      tomatoes: "tomato-128.webp",
      basil: "basil-128.webp",
      eggs: "eggs-128.webp",
    })[id];
  const lessonPhoto = (id) =>
    ({
      balance: "prep-close-640.webp",
      knife: "prep-800.webp",
      heat: "recipe-skillet.webp",
    })[id];
  const actionIcons = {
    "scan-review": "camera",
    "scan-open": "camera",
    "item-edit": "plus",
    recipe: "arrow-right",
    coach: "sparkle",
    lesson: "graduation-cap",
    receipt: "receipt",
    "claim-meal": "trophy",
    share: "upload-simple",
    favorite: "bookmark",
    cheer: "heart",
    reply: "chat-circle",
    "save-post": "bookmark",
    "shopping-add": "plus",
    "cook-next": "arrow-right",
    "cook-start": "play",
    "repeat-step": "arrows-clockwise",
    "heat-challenge": "fire",
    "modal-close": "x",
  };
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
    return `<button type="button" class="btn ${cls}" data-action="${action}" data-id="${esc(id)}"${pressed}>${icon(action === "go" ? navIcons[id] || "caret-right" : actionIcons[action] || "caret-right")}<span>${esc(label)}</span></button>`;
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
  if (new URLSearchParams(location.search).has("investor")) S.tour = true;
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
  if (new URLSearchParams(location.search).has("embed")) {
    document.body.classList.add("embedded");
    S.tour = false;
    if (!hash) S.route = "home";
  }
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
    $(".app-scroll")?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
  function closeModal() {
    modal.close();
    if (lastFocus && lastFocus.isConnected) lastFocus.focus();
  }
  let modalVersion = 0;
  function openModal(title, body) {
    modalVersion++;
    delete modal.dataset.screen;
    if (!modal.open) lastFocus = document.activeElement;
    if (modal.open) modal.close();
    $("#modal-content").innerHTML =
      `<header class="modal-heading"><h2 id="modal-title">${title}</h2><button class="icononly" data-action="modal-close" aria-label="Close">${icon("x")}</button></header><div class="modal-body">${body}</div>`;
    modal.querySelectorAll("form").forEach((f) => (f.noValidate = true));
    modal.showModal();
    $(".modal-body")?.scrollTo(0, 0);
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
    $("#bottom-nav").innerHTML = [
      ["home", "Home"],
      ["kitchen", "Kitchen"],
      ["cook", "Cook"],
      ["school", "School"],
      ["play", "Play"],
    ]
      .map(
        ([id, label]) =>
          `<button type="button" class="nav-item" data-route="${id}"${active === id ? ' aria-current="page"' : ""}>${icon(navIcons[id])}<span>${label}</span></button>`,
      )
      .join("");
  }
  let renderedRoute;

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
    const changed = renderedRoute !== S.route;
    view.dataset.screen = S.route;
    view.innerHTML = (screens[S.route] || homeView)();
    if (changed && !matchMedia("(prefers-reduced-motion: reduce)").matches)
      view.animate(
        [{ transform: "translateY(8px)" }, { transform: "translateY(0)" }],
        { duration: 260, easing: "cubic-bezier(.2,.7,.2,1)" },
      );
    renderedRoute = S.route;
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
    const r = recipe(coreRecipeId());
    return `<div class="home-greeting"><div><p class="eyebrow">GOOD EVENING</p><h1 data-title tabindex="-1">What’s cooking?</h1></div><button class="xp-mini" data-action="go" data-id="play">${icon("lightning")}${S.xp} XP</button></div>
    <div class="home-quick"><button data-action="scan-open" data-id="fridge">${icon("scan")}<span>Scan kitchen</span></button><button data-action="go" data-id="school">${icon("graduation-cap")}<span>Learn a skill</span></button><button data-action="scan-open" data-id="paper">${icon("receipt")}<span>Add receipt</span></button></div>

    <div class="section-heading"><h2>Tonight’s quest</h2><button class="text-link" data-action="go" data-id="play">See all ${icon("caret-right")}</button></div>
    <article class="featured-meal"><img src="${r.image}" alt="${r.name}" width="640" height="568"><div class="meal-overlay"><span class="badge quest-badge">${icon("target")} DAILY QUEST</span><h2>${r.name}</h2><div class="meal-meta"><span>${icon("clock")}${r.time} min</span><span>${icon("lightning")}40 XP</span><button class="btn btn-primary" data-action="recipe" data-id="${r.id}">Let’s cook ${icon("arrow-right")}</button></div></div></article>
    <button class="chef-card card" data-action="coach" data-id="${r.id}"><img class="avatar" src="../images/zara-96.webp" alt="Chef Zara"><div><b>Chef Zara <span class="tiny-label">YOUR COOKING COACH</span></b><p>${S.reviewed ? "Your kitchen is ready. Let’s turn those ingredients into a little win." : "A quick kitchen scan. A delicious dinner. Ready when you are."}</p></div>${icon("caret-right")}</button>
    <div class="expiry-strip">${["basil", "tomatoes", "eggs"].map((id) => `<button data-action="go" data-id="kitchen"><img src="../images/${itemPhoto(id)}" alt=""><b>${D.items[id].name}</b><span>${S.items[id].qty > 0 ? `${daysLeft(S.items[id])} days left` : "Scan to add"}</span></button>`).join("")}</div>
    <div class="section-heading"><h2>A little better, every day</h2><button class="text-link" data-action="go" data-id="school">Chef School ${icon("caret-right")}</button></div>
    <button class="lesson-card" data-action="lesson" data-id="balance"><img class="lesson-photo" src="../images/prep-close-640.webp" alt="Tomatoes and herbs on a preparation board"><span class="lesson-copy"><small class="eyebrow">YOUR NEXT SKILL</small><h3>Salt, texture & balance</h3><span class="details">3 min lesson • ${milestones("balance")}/3 milestones</span><progress class="progress" value="${milestones("balance")}" max="3" aria-label="Salt lesson progress"></progress></span></button>
    <div class="section-heading"><h2>Your kitchen, connected</h2></div><div class="home-links">${[
      ["kitchen", "refrigerator", "Kitchen", "Food & equipment"],
      ["expenses", "wallet", "Spending", "Receipts & budgets"],
      ["hub", "users", "Food Hub", "Share your wins"],
      ["profile", "gear", "For you", "Goals & preferences"],
    ]
      .map(
        ([route, ic, title, sub]) =>
          `<button data-action="go" data-id="${route}">${icon(ic)}<b>${title}</b><small>${sub}</small></button>`,
      )
      .join("")}</div>
    ${!S.profile.done ? `<button class="setup-nudge" data-action="onboard">${icon("sparkle")}Make Nomli yours <span>Set your cooking goals</span>${icon("caret-right")}</button>` : ""}`;
  }

  function onboarding() {
    openModal(
      "Make this sample kitchen yours",
      `<p class="muted">Choose fictional demo preferences. Nothing is submitted to a server.</p><form data-form="onboard">${errors()}<div class="field-grid">${select("Cooking confidence", "level", ["Beginner", "Comfortable", "Confident"], S.profile.level)}${select("My goal", "goal", ["Learn the basics", "Cook efficiently", "Waste less"], S.profile.goal)}${field("Household size", "household", S.profile.household, "number", 'min="1" max="6" required')}${select("Time for dinner", "time", ["10", "15", "30"], String(S.profile.time))}${select("Cuisine preference", "cuisine", ["Any", "Mediterranean", "MENA-inspired", "Everyday"], S.profile.cuisine)}</div><fieldset><legend>Sample allergen exclusions</legend>${["egg", "milk", "wheat"].map((x) => `<label class="checkbox-field"><input type="checkbox" name="allergies" value="${x}"${S.profile.allergies.includes(x) ? " checked" : ""}>${x[0].toUpperCase() + x.slice(1)}</label>`).join("")}</fieldset><p class="notice notice-warning">These demo tags are incomplete. Check product labels and cross-contact information; prototype filtering is not a food-safety guarantee.</p><label class="checkbox-field"><input type="checkbox" name="starter"${!S.profile.done ? " checked" : ""}>Start with five ingredients: tomatoes, basil, bread, garlic and olive oil. Salt is a sample pantry staple.</label><button class="btn btn-primary" type="submit">Use this sample profile</button></form>`,
    );
  }
  function kitchenView() {
    const rows = Object.entries(S.items)
      .filter(([, i]) => S.storage === "All" || i.storage === S.storage)
      .sort((a, b) =>
        S.sort === "name"
          ? a[1].name.localeCompare(b[1].name)
          : S.sort === "quantity"
            ? a[1].qty - b[1].qty
            : daysLeft(a[1]) - daysLeft(b[1]),
      );
    return (
      heading(
        "YOUR KITCHEN",
        "Fresh starts here.",
        "A little less guessing. A lot less waste.",
      ) +
      `<button class="scan-banner" data-action="scan-open" data-id="fridge"><img src="../images/fridge-vf-480.webp" alt=""><span>${icon("scan")}<b>What’s in your fridge?</b><small>Scan groceries, barcodes & dates</small></span>${icon("arrow-right")}</button>
    <div class="pill-row">${["All", "Fridge", "Freezer", "Pantry", "Spices"].map((x) => `<button class="pill" data-action="storage" data-id="${x}" aria-pressed="${S.storage === x}">${x}</button>`).join("")}</div>
    <div class="card"><div class="card-header"><h2>My groceries <small>${rows.filter(([, i]) => i.qty > 0).length} in stock</small></h2><button class="icononly" data-action="item-edit" data-id="new" aria-label="Add ingredient">${icon("plus")}</button></div><div class="inventory-sort"><label for="inventory-sort">Sort by</label><select id="inventory-sort" data-change="sort">${options(["expiry", "name", "quantity"], S.sort)}</select></div>
    ${rows.map(([id, i]) => `<div class="inventory-row">${itemPhoto(id) ? `<img class="inventory-photo" src="../images/${itemPhoto(id)}" alt="">` : `<span class="inventory-icon">${icon(i.storage === "Freezer" ? "refrigerator" : "fork-knife")}</span>`}<div class="inventory-copy"><b>${esc(i.name)}</b><span>${num(i.qty)} ${esc(i.unit)} <small>${i.storage}</small></span><small class="${i.qty > 0 && daysLeft(i) < 3 ? "use-soon" : "muted"}">${i.qty <= 0 ? "Out of stock" : `${daysLeft(i)} days left`}${i.estimated ? " • review date" : ""}</small></div><button class="icononly" data-action="item-edit" data-id="${id}" aria-label="Edit ${esc(i.name)}">${icon("pencil")}</button>${i.qty <= i.low ? `<button class="icononly" data-action="shopping-add" data-id="${id}" aria-label="Restock ${esc(i.name)}">${icon("plus")}</button>` : ""}</div>`).join("") || '<p class="empty">No ingredients here yet.</p>'}</div>
    <section class="card"><div class="card-header"><h2>${icon("chef-hat")} My equipment</h2></div><p class="muted">Recipes adapt to the tools you own.</p><div class="equipment-grid">${D.tools.map((t) => `<label class="equipment-toggle"><input type="checkbox" data-change="tool" data-id="${t.id}"${S.tools[t.id] ? " checked" : ""}><span>${t.name}</span>${icon("check")}</label>`).join("")}</div>${btn("Find something to cook", "go", "cook", "btn-primary")}</section>
    <div class="actions">${btn("Shopping list", "go", "shopping")}${btn("Receipts & spending", "go", "expenses")}</div><details class="card"><summary>Recent stock changes</summary><ul class="timeline">${
      S.adjustments
        .slice(-5)
        .reverse()
        .map((x) => `<li>${esc(x)}</li>`)
        .join("") || "<li>Your stock updates will appear here.</li>"
    }</ul><p class="details">Dates shown are samples. Always check food condition and packaging.</p></details>`
    );
  }
  let cameraMode = "fridge";
  function scanCamera(mode = "fridge") {
    cameraMode = ["fridge", "barcode", "expiry", "paper", "digital"].includes(
      mode,
    )
      ? mode
      : "fridge";
    const receipt = ["paper", "digital"].includes(cameraMode),
      digital = cameraMode === "digital";
    const titles = {
      fridge: "Scan your kitchen",
      barcode: "Scan a barcode",
      expiry: "Read an expiry date",
      paper: "Scan a receipt",
      digital: "Add an e-receipt",
    };
    const lineReceipt = D.receipts[digital ? "digital" : "paper"];
    const paper = `<div class="sample-receipt"><b>${esc(lineReceipt.store)}</b><small>GROCERY RECEIPT • 24 OCT 2026</small><hr>${lineReceipt.lines.map((l) => `<p><span>${D.items[l.id].name}</span><b>${money(l.cents)}</b></p>`).join("")}<hr><p><b>TOTAL</b><b>${money(lineReceipt.lines.reduce((a, l) => a + l.cents, 0))}</b></p><div class="barcode-lines"></div><small>Sample receipt for this demonstration</small></div>`;
    let scene = receipt
      ? paper
      : `<img src="../images/fridge-vf-800.webp" alt="Sample camera view into a stocked fridge">`;
    if (cameraMode === "paper")
      scene =
        '<img src="../images/receipt-camera.webp" alt="Sample market grocery receipt, total SAR 50.50">';
    if (cameraMode === "barcode")
      scene += `<div class="product-label"><img src="../images/tomato-256.webp" alt="Tomatoes"><b>VINE TOMATOES</b><span>4 pieces</span><div class="barcode-lines"></div><small>DEMO 628 104 004</small></div>`;
    if (cameraMode === "expiry")
      scene += `<div class="date-label"><b>FRESH BASIL</b><span>BEST BEFORE</span><strong>25 OCT 2026</strong><small>Sample package label</small></div>`;
    openModal(
      titles[cameraMode],
      `<p class="camera-caption">${digital ? "Select the sample PDF to preview receipt import." : receipt ? "Keep all four corners inside the frame." : cameraMode === "barcode" ? "Center the barcode inside the frame." : cameraMode === "expiry" ? "Point at the printed date on the pack." : "Hold steady. We’ll find what’s fresh."}</p><div class="camera-view ${receipt ? "receipt-camera" : ""} ${digital ? "digital-camera" : ""}" data-camera>${scene}<div class="camera-brackets"></div><div class="scan-beam" hidden></div><span class="scan-status" data-scan-status>${digital ? "grocery-receipt.pdf • sample" : "Sample camera • ready"}</span>${cameraMode === "fridge" ? '<span class="recognition-box recognition-basil" hidden>Basil</span><span class="recognition-box recognition-tomato" hidden>Tomatoes</span><span class="recognition-box recognition-eggs" hidden>Eggs</span>' : ""}</div>
    ${
      receipt
        ? `<div class="scan-modes receipt-modes">${[
            ["paper", "camera", "Paper receipt"],
            ["digital", "upload-simple", "Digital / PDF"],
          ]
            .map(
              ([id, ic, label]) =>
                `<button data-action="scan-open" data-id="${id}" aria-pressed="${cameraMode === id}">${icon(ic)}${label}</button>`,
            )
            .join("")}</div>`
        : `<div class="scan-modes">${[
            ["fridge", "scan", "Groceries"],
            ["barcode", "barcode", "Barcode"],
            ["expiry", "calendar-blank", "Expiry date"],
          ]
            .map(
              ([id, ic, label]) =>
                `<button data-action="scan-open" data-id="${id}" aria-pressed="${cameraMode === id}">${icon(ic)}${label}</button>`,
            )
            .join("")}</div>`
    }
    <div class="capture-actions"><button class="capture-button" data-action="scan-capture" aria-label="${digital ? "Import sample PDF" : "Capture sample " + (receipt ? "receipt" : "scan")}">${icon(digital ? "upload-simple" : "camera")}</button><p>${digital ? "Import sample PDF" : "Tap to capture"}</p></div><p class="details camera-disclosure">Interactive simulation. Camera, files and OCR are not accessed. You review every result.</p>`,
    );
    modal.dataset.screen = "camera";
  }
  function captureScan() {
    const button = modal.querySelector('[data-action="scan-capture"]');
    if (!button || button.disabled) return;
    const version = modalVersion,
      mode = cameraMode;
    button.disabled = true;
    modal.querySelector("[data-camera]").classList.add("is-processing");
    modal.querySelector(".scan-beam").hidden = false;
    const status = modal.querySelector("[data-scan-status]");
    status.textContent = ["paper", "digital"].includes(mode)
      ? "Reading items & prices…"
      : "Looking for a match…";
    status.setAttribute("role", "status");
    const delay = matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 350
      : 1800;
    setTimeout(() => {
      if (!modal.open || modalVersion !== version) return;
      modal
        .querySelectorAll(".recognition-box")
        .forEach((x) => (x.hidden = false));
      status.textContent =
        mode === "fridge"
          ? "3 ingredients found"
          : mode === "barcode"
            ? "Tomatoes matched"
            : mode === "expiry"
              ? "25 October 2026 detected"
              : "3 receipt lines extracted";
    }, delay * 0.55);
    setTimeout(() => {
      if (!modal.open || modalVersion !== version) return;
      if (["paper", "digital"].includes(mode)) receiptForm(mode);
      else if (mode === "fridge") scanReview();
      else singleScanReview(mode);
    }, delay);
  }
  function singleScanReview(mode) {
    const id = mode === "barcode" ? "tomatoes" : "basil",
      item = S.items[id];
    openModal(
      mode === "barcode" ? "Tomatoes found" : "Date found",
      `<div class="scan-result-heading"><img src="../images/${itemPhoto(id)}" alt=""><div><span class="badge">${mode === "barcode" ? "Barcode matched" : "Date read"}</span><h3>${item.name}</h3></div>${icon("check-circle")}</div><form data-form="single-scan" data-id="${id}">${errors()}${field("Quantity on hand (" + item.unit + ")", "qty", Math.max(item.qty, mode === "barcode" ? 4 : 1), "number", 'min="0.01" max="10000" step="0.01" required')}${field("Review date", "expiry", datePlus(D.items[id].days), "date", "required")}<label class="checkbox-field"><input type="checkbox" name="confirmed" required>I checked the quantity and date.</label><button class="btn btn-primary">Save to my kitchen ${icon("check")}</button></form><p class="details">Simulated recognition. The reviewed result updates this ingredient only.</p>`,
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
      "3 ingredients found",
      `<p class="muted">Check the quantities and dates, then add them to your kitchen.</p><form data-form="scan">${errors()}${[
        ["tomatoes", 4],
        ["basil", 1],
        ["eggs", 6],
      ]
        .map(
          ([id, qty]) =>
            `<fieldset><legend><img src="../images/${itemPhoto(id)}" alt="">${D.items[id].name}</legend><div class="field-grid">${field(`Quantity (${D.items[id].unit})`, `qty-${id}`, qty, "number", 'min="0.01" max="10000" step="0.01" required')}${field("Review date", `expiry-${id}`, datePlus(D.items[id].days), "date", "required")}</div></fieldset>`,
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
    return `<article class="recipe-card"><img class="recipe-image" src="${r.image}" alt="Illustrative ${esc(r.name)}" width="320" height="284" loading="lazy"><div class="recipe-body"><h3>${r.name}</h3><p class="recipe-meta">${r.time} min · ${r.difficulty} · ${S.servings[r.id] || r.servings} servings</p><span class="recipe-match">${icon("check-circle")}${a.ready}/${a.ing.length} ingredients ready</span><p class="details">${r.objective}</p><div class="actions">${btn("View recipe", "recipe", r.id, "btn-primary")}${btn(S.favorites.includes(r.id) ? "Saved" : "Save", "favorite", r.id, "btn-quiet")}</div></div></article>`;
  }
  function cookView() {
    let recipes = D.recipes
      .map((r) => ({ r, a: assess(r) }))
      .filter(({ a }) => !S.matchOnly || !a.allergens.length)
      .sort((a, b) => b.a.score - a.a.score);
    return (
      heading(
        "COOK SOMETHING GOOD",
        "Made for your kitchen.",
        "Matched to what you have, and what you want to learn.",
      ) +
      `<label class="checkbox-field"><input type="checkbox" data-change="matches"${S.matchOnly ? " checked" : ""}>Apply sample allergen exclusions (${S.profile.allergies.join(", ") || "none"})</label><details class="details"><summary>About recipe matching & allergens</summary><p>Limited sample tags. Check packaging and cross-contact. These filters do not establish food safety.</p></details><div class="grid grid-3">${recipes.map(({ r, a }) => recipeCard(r, a)).join("") || '<p class="empty">No sample recipes match the selected exclusions. Review preferences or show all recipes to inspect the blockers.</p>'}</div><div class="grid grid-2"><section class="card"><h2>Saved recipes</h2>${S.favorites.length ? S.favorites.map((id) => btn(recipe(id).name, "recipe", id, "btn-quiet")).join("") : "<p class='muted'>Save a recipe to return to it later.</p>"}</section><section class="card"><h2>Previously cooked</h2>${
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
      `<div class="recipe-cover"><img src="${r.image}" alt="${esc(r.name)}"><button class="icononly" data-action="go" data-id="cook" aria-label="All recipes">${icon("arrow-left")}</button><button class="icononly" data-action="favorite" data-id="${r.id}" aria-label="Save recipe" aria-pressed="${S.favorites.includes(r.id)}">${icon("bookmark")}</button></div>` +
      heading("TONIGHT’S GOOD IDEA", r.name) +
      `<div class="meal-meta recipe-facts"><span>${icon("clock")}${r.time} min</span><span>${icon("chef-hat")}${r.difficulty}</span><span>${icon("lightning")}40 XP</span></div>
    <button class="chef-card card" data-action="coach" data-id="${r.id}"><img class="avatar" src="../images/zara-96.webp" alt="Chef Zara"><div><b>A little help from Zara</b><p>${r.objective}</p></div>${icon("caret-right")}</button>
    <div class="recipe-servings">${select("How many are eating?", "servings", ["1", "2", "3", "4", "5", "6"], String(S.servings[r.id] || r.servings)).replace('<select name="servings"', '<select name="servings" data-change="servings"')}<span class="recipe-match">${icon("check-circle")}${a.ready}/${a.ing.length} ready</span></div>
    <section class="card"><h2>Let’s get everything ready</h2><ul class="ingredients-list">${a.ing
      .map((x) => {
        if (x.id === "skip")
          return `<li>Optional finish skipped ${swapSelect(r, x)}</li>`;
        const i = S.items[x.id],
          ok = !a.missing.includes(x);
        return `<li><div class="ingredient-line"><span>${itemPhoto(x.id) ? `<img src="../images/${itemPhoto(x.id)}" alt="">` : icon("fork-knife")}<b>${esc(i.name)}</b></span><strong>${num(x.qty)} ${esc(D.items[x.id].unit)}</strong></div><small class="${ok ? "muted" : "use-soon"}">${ok ? "In your kitchen" : i.unit !== D.items[x.id].unit ? "Check stock unit" : daysLeft(i) < 0 ? "Review the sample date" : `Have ${num(i.qty)} ${esc(i.unit)}`}</small>${swapSelect(r, x)}</li>`;
      })
      .join(
        "",
      )}</ul>${a.missing.length ? btn("Add missing ingredients", "shopping-missing", r.id) : ""}</section>
    <section class="card"><h2>${icon("graduation-cap")} One meal. One new skill.</h2><p>${r.objective}</p>${btn("Learn the technique", "lesson", r.lesson)}</section>
    <details class="card recipe-context"><summary>Equipment & kitchen match</summary><p>${a.method.text}</p><p class="details">${esc(S.profile.level)} • ${S.profile.time} minutes available • ${a.timeFit ? "Fits your time" : "Allow more time"}</p>${btn("Edit equipment", "go", "kitchen")}</details>
    ${a.allergens.length ? notice("Sample allergy exclusion: " + a.allergens.join(", ") + ". Choose another recipe or review ingredients.") : ""}
    <div class="cook-cta">${blocked ? '<p class="details">Review missing ingredients, dates, units or equipment before starting.</p>' : ""}<button class="btn btn-primary" data-action="cook-start"${blocked ? " disabled" : ""}>${icon("play")}Start guided cooking</button></div>`
    );
  }

  function swapSelect(r, x) {
    if (!x.swaps) return "";
    return `<div class="field"><label for="swap-${x.base}">Choose a finish or substitution</label><select id="swap-${x.base}" data-change="swap" data-id="${x.base}"><option value="original"${!(S.swaps[r.id] || {})[x.base] ? " selected" : ""}>Original ingredient</option>${x.swaps.map((sw) => `<option value="${sw.id}"${(S.swaps[r.id] || {})[x.base] === sw.id ? " selected" : ""}>${sw.id === "skip" ? "Skip optional finish" : D.items[sw.id].name}</option>`).join("")}</select></div>`;
  }
  function schoolView() {
    const complete = D.lessons.filter((l) => lessonComplete(l.id)).length;
    return (
      heading(
        "CHEF SCHOOL",
        "Small skills. Big difference.",
        "Learn the why. Try it tonight.",
      ) +
      `<div class="school-hero"><img src="../images/prep-800.webp" alt="Fresh ingredients, a knife and a preparation board"><div><span class="badge">FREE STARTER PATH</span><h2>Good cooking starts<br>with the little things.</h2><p>3 lessons • 10 minutes of learning</p></div></div><div class="school-progress"><span>${icon("graduation-cap")}Your foundations</span><b>${complete}/3 lessons</b><progress class="progress" value="${D.lessons.reduce((a, l) => a + milestones(l.id), 0)}" max="9" aria-label="Starter learning milestones"></progress></div>
    <div class="lesson-list">${D.lessons.map((l, i) => `<button class="lesson-card" data-action="lesson" data-id="${l.id}"><img class="lesson-photo" src="../images/${lessonPhoto(l.id)}" alt=""><span class="lesson-copy"><small class="eyebrow">LESSON ${i + 1} • ${l.minutes} MIN</small><h3>${l.name}</h3><span class="details">${l.skill}</span><progress class="progress" max="3" value="${milestones(l.id)}" aria-label="${l.skill} milestones"></progress><span class="lesson-state">${lessonComplete(l.id) ? "Completed" : milestones(l.id) ? "Continue learning" : "Start lesson"} ${icon(lessonComplete(l.id) ? "check-circle" : "arrow-right")}</span></span></button>`).join("")}</div>
    <div class="section-heading"><h2>Your next chapter</h2><span class="badge">COMING LATER</span></div><section class="card next-chapter">${icon("chef-hat")}<div><h3>From good to confident</h3><p>Pan sauces. Meal timing. Fresh pasta.</p></div>${btn("Preview learning path", "preview", "school")}</section><p class="details">Progress records a read concept, knowledge check and self-reported recipe practice. Starter lessons are free; 500 XP opens an extra Heat-control challenge.</p>`
    );
  }

  function lessonView() {
    const l = lesson(S.currentLesson),
      p = S.lessons[l.id],
      target = l.id === "balance" ? coreRecipeId() : l.recipe;
    return (
      heading(
        "CHEF SCHOOL / STARTER LESSON",
        l.name,
        l.objective,
        btn("Chef School", "go", "school"),
      ) +
      `<img class="lesson-cover" src="../images/${lessonPhoto(l.id)}" alt="${esc(l.skill)} cooking practice"><div class="grid grid-2"><section class="card"><p class="eyebrow">1 / UNDERSTAND</p><h2>The technique and the reason</h2><p>${l.instruction}</p>${btn(p.read ? "Concept read" : "I’ve read the concept", "lesson-read", l.id, "btn-primary")}<p class="eyebrow">2 / CHECK UNDERSTANDING</p>${p.read ? `<form data-form="quiz" data-id="${l.id}">${errors()}<fieldset><legend>${l.question}</legend>${l.answers.map((answer, i) => `<label class="checkbox-field"><input type="radio" name="answer" value="${i}" required>${answer}</label>`).join("")}</fieldset><button class="btn btn-secondary">Check my answer</button></form>` : notice("Read the concept to open the knowledge check.")}${p.quiz ? '<p class="success">Knowledge check complete. Your next step is practical use.</p>' : ""}</section><div class="stack"><section class="card"><p class="eyebrow">3 / PRACTISE IN A MEAL</p><h2>${recipe(target).name}</h2><p>Follow the guided recipe, acknowledge the technique checkpoint and confirm the ingredients used. The practice milestone updates after meal completion.</p>${btn("Practise with this recipe", "recipe", target, "btn-primary")}<p class="muted">${p.practice ? "One guided recipe practice recorded. This is self-reported, not verified mastery." : "No recipe practice recorded yet."}</p></section><section class="card"><h2>Skill progress, separate from XP</h2><progress class="progress" max="3" value="${milestones(l.id)}" aria-label="${l.skill} milestones">${milestones(l.id)}/3</progress><ul class="checklist"><li>${p.read ? "✓" : "○"} Concept read</li><li>${p.quiz ? "✓" : "○"} Knowledge check passed</li><li>${p.practice ? "✓" : "○"} Guided recipe practice</li></ul><p>${milestones(l.id)}/3 guided milestones. ${S.xp} XP tracks activity rewards separately.</p>${btn("Ask Zara to explain", "coach", l.recipe)}</section></div></div>`
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
      "A little help from Zara",
      `<p class="muted">Context: ${esc(S.profile.level)} · ${esc(r.name)} · ${Object.values(S.items).filter((i) => i.qty > 0).length} ingredients in stock · ${S.profile.time} minutes. Exclusions: ${S.profile.allergies.join(", ") || "none"}.</p><div class="coach-intro"><img src="../images/zara-96.webp" alt="Chef Zara"><div><b>Chef Zara</b><span>Your cooking coach</span></div><span class="badge">SAMPLE CHAT</span></div><div class="chat-log">${S.chat.length ? S.chat.map((m) => `<div class="chat-message"><b>${m.role}</b><p>${esc(m.text)}</p></div>`).join("") : "<div class='chat-message'><b>Zara</b><p>I can explain the technique, offer a listed substitution or talk through the next step. Choose a sample question.</p></div>"}</div><div class="actions">${[
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
    if (!c) return cookView();
    const r = recipe(c.rid),
      step = r.steps[c.step],
      photo =
        r.id === "bruschetta" && c.step < 2
          ? "../images/prep-close-640.webp"
          : r.image;
    return `<div class="cooking-toolbar"><button class="icononly" data-action="leave-cooking" aria-label="Leave cooking">${icon("arrow-left")}</button><b>COOK WITH ZARA</b><span class="badge">${c.step + 1} of ${r.steps.length}</span></div><progress class="progress" value="${c.step + 1}" max="${r.steps.length}" aria-label="Guided cooking steps"></progress><img class="cooking-photo" src="${photo}" alt="${c.step < 2 ? "Illustrative food preparation" : esc(r.name)}"><h1 class="cooking-title" data-title tabindex="-1">${step.title}</h1><p class="step-instruction">${step.text}</p>
    <button class="chef-card card" data-action="coach" data-id="${r.id}"><img class="avatar" src="../images/zara-96.webp" alt="Chef Zara"><div><b>Need a hand?</b><p>I can explain the why, or guide your next move.</p></div>${icon("chat-circle")}</button>
    ${step.technique ? `<section class="card technique-check"><span class="badge">${icon("graduation-cap")}A SKILL FOR NEXT TIME</span><p>${r.objective}</p><label class="checkbox-field"><input type="checkbox" data-change="technique"${c.technique ? " checked" : ""}>I practised this technique in the sample flow.</label></section>` : ""}
    ${c.step === 0 && ["bruschetta", "salad"].includes(r.id) ? `<label class="checkbox-field knife-check"><input type="checkbox" data-change="knife-practice"${c.knifePractice ? " checked" : ""}>I practised stable-board, deliberate cutting in this sample.</label>` : ""}
    <div class="cooking-actions">${btn("Repeat", "repeat-step")}${btn(c.step === r.steps.length - 1 ? "Review ingredients used" : "Next step", "cook-next", "", "btn-primary")}</div>
    <details class="card"><summary>Recipe & equipment</summary><p>${r.name} • ${S.servings[r.id] || r.servings} servings</p><p>${method(r).text}</p><ol class="step-list">${r.steps.map((x, i) => `<li>${i < c.step ? "✓ " : ""}${x.title}</li>`).join("")}</ol></details><p class="details">Demo timing is compressed. Practice is self-reported; no live doneness or safety check.</p>`;
  }

  function reviewView() {
    const c = S.cooking;
    if (!c) return cookView();
    const ing = resolved(recipe(c.rid)).filter((x) => x.id !== "skip");
    return (
      heading(
        "FINISHING TOUCHES",
        "A quick kitchen update.",
        "Check what you used. We’ll keep your stock in sync.",
      ) +
      `<form class="card" data-form="consumption">${errors()}${ing.map((x) => `<div class="consumption-row"><div><strong>${esc(S.items[x.id].name)}</strong><small>${num(S.items[x.id].qty)} ${esc(S.items[x.id].unit)} on hand</small></div><label class="field"><span class="sr-only">${esc(S.items[x.id].name)} quantity used</span><span>Used (${esc(S.items[x.id].unit)})</span><input name="used-${x.id}" type="number" min="0" max="${S.items[x.id].qty}" step="0.01" value="${x.qty}" required></label></div>`).join("")}<div class="actions"><button class="btn btn-primary">Apply changes & complete meal</button>${btn("Back to recipe", "go", "recipe")}</div></form>`
    );
  }
  function latestMeal() {
    return [...S.meals].reverse().find((m) => !m.undone);
  }
  function completeView() {
    const m = latestMeal();
    if (!m) return cookView();
    const r = recipe(m.rid);
    const amount = m.claimed
      ? m.rewardAmount || 0
      : (!S.ledger.includes("meal:" + m.rid) ? 40 : 0) +
        (r.lesson === "balance" &&
        m.technique &&
        !S.ledger.includes("technique:balance")
          ? 20
          : 0);
    return (
      heading("DINNER, DONE.", "Look at you, chef.", r.name) +
      `<div class="success-meal"><img src="${r.image}" alt="${esc(r.name)}"><span class="badge">${icon("check-circle")}QUEST COMPLETE</span></div><section class="card reward-summary"><span class="reward-icon">${icon("trophy")}</span><strong>+${amount} XP</strong><p>${amount ? "A meal made. A little better than yesterday." : "Another good practice. This recipe’s XP was already collected."}</p>${m.claimed ? '<span class="badge">Reward collected</span>' : btn("Collect reward", "claim-meal", m.id, "btn-primary")}${levelBlock()}</section><section class="card"><div class="card-header"><h2>${icon("graduation-cap")}${r.skill}</h2><b>${milestones(r.lesson)}/3</b></div><progress class="progress" value="${milestones(r.lesson)}" max="3" aria-label="Linked lesson progress"></progress><p class="details">${m.technique ? "Practical checkpoint recorded. Keep building the habit." : "Complete the lesson’s practical checkpoint to record this skill."}</p>${btn("See my learning progress", "lesson", r.lesson)}</section><div class="actions">${btn(m.photo ? "Dish photo added" : "Add a dish photo", "meal-photo", m.id)}${m.claimed ? btn(m.shared ? "View shared sample" : "Share to Food Hub", "share", m.id, "btn-primary") : ""}</div><details class="card"><summary>Your kitchen has been updated</summary><ul class="feature-list">${m.used.map((x) => `<li>${esc(S.items[x.id].name)}: ${num(x.qty)} ${esc(S.items[x.id].unit)} used</li>`).join("")}</ul>${!m.claimed ? btn("Undo inventory change", "undo-meal", m.id) : '<p class="details">Need a later correction? Edit the ingredient in Kitchen.</p>'}</details>`
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
        "YOUR DAILY DOSE OF PROGRESS",
        "A little win, every day.",
        "Cook something. Learn something. Make it a habit.",
      ) +
      `<section class="card level-hero"><div class="level-emblem">${icon("trophy")}</div><div><small>YOUR COOKING JOURNEY</small>${levelBlock()}<p class="details">${Math.max(0, 500 - S.xp)} XP to the next chapter</p></div></section>
    <div class="habit-strip"><span>${icon("fire")}This week</span>${["M", "T", "W", "T", "F", "S", "S"].map((d, i) => `<span class="habit-day ${i < 2 || (i === 5 && meals.length) ? "is-done" : ""}">${i < 2 || (i === 5 && meals.length) ? icon("check") : d}</span>`).join("")}</div><p class="details">Sample flexible goal: cook 3 days a week. Two earlier days are illustrative.</p>
    <div class="section-heading"><h2>Today’s quests</h2><span class="badge">2 WAYS TO GROW</span></div><article class="featured-meal quest-meal"><img src="${recipe(coreRecipeId()).image}" alt="${recipe(coreRecipeId()).name}"><div class="meal-overlay"><span class="badge quest-badge">${icon("target")}INGREDIENT QUEST</span><h2>Rescue the basil</h2><p>Good food, before it goes.</p><div class="meal-meta"><span>${icon("clock")}12 min</span><span>${icon("lightning")}40 XP</span><button class="btn btn-primary" data-action="recipe" data-id="${coreRecipeId()}">Start ${icon("arrow-right")}</button></div></div></article><button class="text-link quest-replace" data-action="quest-replace">Try a different quest</button>
    <section class="card learning-quest"><span class="badge">${icon("graduation-cap")}LEARNING QUEST • 20 XP</span><h2>Salt with a reason</h2><p>Learn why a pinch changes the texture.</p><progress class="progress" value="${milestones("balance")}" max="3" aria-label="Learning quest milestones"></progress><div class="stat-row"><span>${milestones("balance")}/3 milestones</span>${btn("Open lesson", "lesson", "balance", "btn-primary")}</div></section>
    <section class="card"><span class="badge">WEEKLY CHALLENGE • 30 XP</span><h2>Learn. Cook. Share.</h2><p>One lesson. One meal. One moment shared.</p><progress class="progress" value="${linked}" max="3" aria-label="Weekly challenge actions"></progress><p class="details">${linked}/3 actions complete</p>${!S.accepted ? btn("Accept challenge", "challenge-accept", "", "btn-primary") : linked === 3 && !S.ledger.includes("weekly") ? btn("Claim 30 XP", "challenge-claim", "", "btn-primary") : `<span class="badge">${S.ledger.includes("weekly") ? "Reward collected" : "Challenge accepted"}</span>`}</section>
    <div class="section-heading"><h2>Little badges. Big meaning.</h2></div><div class="achievement-grid">${badges.map(([name, earned, why], i) => `<div class="achievement ${earned ? "is-earned" : ""}"><span>${icon(["refrigerator", "fork-knife", "graduation-cap", "users", "fire"][i])}</span><b>${name}</b><small>${earned ? "Earned" : why}</small></div>`).join("")}</div>
    <section class="card"><h2>Your next level</h2>${S.xp >= 500 ? btn("Heat-control challenge", "heat-challenge", "", "btn-primary") : "<p>At 500 XP, your Heat-control practice challenge opens. Starter School is already free.</p>"}<details><summary>Explore the six-level path</summary><ol class="curriculum">${D.levels.map(([xp, name], i) => `<li><b>${name}</b> ${xp.toLocaleString()} XP${i > 1 ? " • later planned" : ""}</li>`).join("")}</ol>${btn("More ways to play", "preview", "play")}</details></section><p class="details">440 XP starts the sample session. Rewards are once per eligible action. Learning milestones are self-reported practice, separate from points.</p>`
    );
  }
  function samplePosts() {
    return [
      {
        id: "sample-meal",
        author: "Noor A.",
        title: "Bruschetta practice",
        text: "Trying the salt-and-drain technique before assembly.",
        image: "../images/plate-320.webp",
        kind: "Meal · illustrative image",
      },
      {
        id: "sample-skill",
        author: "Mariam H.",
        title: "One skill, three milestones",
        text: "Read the concept, checked understanding, then practised in a guided meal.",
        kind: "Technique · simulated progress",
      },
      {
        id: "sample-level",
        author: "Omar K.",
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
        "FOOD HUB",
        "Good food brings us together.",
        "A sample community of small wins and shared ideas.",
        btn("Community & safety preview", "preview", "community"),
      ) +
      `<div class="grid grid-2">${posts.map((p) => `<article class="card post"><div class="card-header post-meta"><span class="post-avatar">${esc(p.author.slice(0, 1))}</span><div><b>${esc(p.author)}</b><p class="muted">${p.kind}</p></div>${btn(S.follows.includes(p.id) ? "Following" : "Follow", "follow", p.id, "btn-quiet")}</div>${p.image ? `<img class="post-image" src="${p.image}" alt="Illustrative meal image; not user-submitted proof">` : ""}<h2>${esc(p.title)}</h2><p>${esc(p.text)}</p><div class="actions">${btn(S.cheers.includes(p.id) ? "Cheered" : "Cheer", "cheer", p.id, "btn-quiet")}${btn("Reply", "reply", p.id, "btn-quiet")}${btn(S.savedPosts.includes(p.id) ? "Saved" : "Save", "save-post", p.id, "btn-quiet")}${btn("Report / block", "report", p.id, "btn-quiet")}</div>${(S.replies[p.id] || []).map((t) => `<p class="notice"><b>You · sample reply:</b> ${esc(t)}</p>`).join("")}</article>`).join("")}</div>${S.blocked.length ? btn("Restore blocked sample posts", "restore-posts") : ""}<p class="notice">Sample profiles, photos and reactions. Nothing is posted publicly. Posting access and moderation remain planned product decisions.</p>`
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
        "GROCERIES, ALL ACCOUNTED FOR",
        "Spending, made simple.",
        "A clearer picture of what goes into your kitchen.",
      ) +
      `<section class="card spend-hero"><div class="stat-row"><span>October 2026</span><span class="badge">SAMPLE SAR</span></div><p class="spend-label">Grocery spending</p><div class="spend-total">${money(total)}</div><progress class="progress" max="${S.budget}" value="${Math.min(total, S.budget)}" aria-label="Grocery budget used"></progress><div class="stat-row"><b>${money(Math.abs(remaining))} ${remaining >= 0 ? "left" : "over budget"}</b><small>of ${money(S.budget)}</small></div><details class="budget-edit"><summary>Edit monthly budget ${icon("pencil")}</summary><form data-form="budget">${errors()}${field("Monthly budget (SAR)", "budget", (S.budget / 100).toFixed(2), "number", 'min="1" max="100000" step="0.01" required')}<button class="btn btn-primary">Save budget</button></form></details></section>
    <div class="receipt-shortcuts"><button data-action="scan-open" data-id="paper">${icon("camera")}Scan a receipt</button><button data-action="scan-open" data-id="digital">${icon("upload-simple")}Add an e-receipt</button></div>
    <section class="card"><div class="card-header"><h2>Your month, at a glance</h2><span class="badge">+${((total / 110000 - 1) * 100).toFixed(1)}%</span></div><div class="bar-chart">${weeks.map((w, i) => `<div class="bar-column"><span style="height:${Math.round((100 * w) / Math.max(...weeks))}px" aria-hidden="true"></span><b>Week ${i + 1}</b><small>${money(w)}</small></div>`).join("")}</div><p class="details">Compared with September’s ${money(110000)} sample.</p><h3>Where it went</h3>${Object.entries(
      cats,
    )
      .map(
        ([name, value], i) =>
          `<div class="category-row"><span class="inventory-icon">${icon(["fork-knife", "refrigerator", "shopping-cart"][i])}</span><div><b>${name}</b><progress class="progress" max="${total}" aria-label="${name} spending" value="${value}"></progress></div><strong>${money(value)}</strong></div>`,
      )
      .join("")}</section>
    <div class="section-heading"><h2>Recent shops</h2><span class="badge">${S.receipts.length} RECEIPTS ADDED</span></div><section class="card purchase-history">${S.receipts
      .slice()
      .reverse()
      .map(
        (r) =>
          `<div class="item-row"><span class="inventory-icon">${icon("receipt")}</span><div><b>${esc(r.name)}</b><small>${r.lines.length} reviewed items • 24 Oct</small></div><strong>${money(r.lines.reduce((a, l) => a + l.cents, 0))}</strong></div>`,
      )
      .join(
        "",
      )}<div class="item-row"><span class="inventory-icon">${icon("shopping-cart")}</span><div><b>Earlier this month</b><small>Seeded sample purchases</small></div><strong>${money(124000)}</strong></div></section><p class="details">Receipt recognition is simulated. Saving a reviewed receipt updates groceries and spending together, once per sample.</p>`
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
      `<p class="badge badge-demo">Simulated extraction · ${receipt.store}</p><p class="muted">Check items, quantities and prices before adding them to your kitchen.</p><form data-form="receipt" data-source="${source}">${errors()}${receipt.lines.map((l) => `<fieldset><legend>${esc(D.items[l.id].name)}</legend><div class="field-grid">${field("Item name", `name-${l.id}`, S.items[l.id].name, "text", 'maxlength="48" required')}${field(`Quantity (${D.items[l.id].unit})`, `qty-${l.id}`, l.qty, "number", 'min="0.01" max="10000" step="0.01" required')}${field("Line total (SAR)", `price-${l.id}`, (l.cents / 100).toFixed(2), "number", 'min="0" max="100000" step="0.01" required')}${field("Reviewed date for combined stock", `expiry-${l.id}`, S.items[l.id].qty > 0 ? S.items[l.id].expiry : datePlus(D.items[l.id].days), "date", "required")}</div></fieldset>`).join("")}<p class="notice">Scanned total: ${money(receipt.lines.reduce((s, l) => s + l.cents, 0))}. <b data-revised-total>Reviewed total: ${money(receipt.lines.reduce((s, l) => s + l.cents, 0))}</b></p><details class="details"><summary>How stock dates work</summary><p>New and existing quantities share one date in this demo. Review the combined stock date; separate batches are planned.</p></details><label class="checkbox-field"><input type="checkbox" name="confirm" required>I reviewed names, quantities, combined-stock dates and the revised total.</label><button class="btn btn-primary">Save receipt to kitchen & expenses</button></form>`,
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
    m.rewardAmount = amount;
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
        `<div class="reward-celebration">${icon("trophy")}<span>LEVEL 2</span><h3>Apprentice Cook!</h3><p>A little practice. A real step forward.</p></div><p>You have unlocked the Heat-control practice challenge. Your three starter lessons remain free from the beginning.</p>${levelBlock()}${btn("Open the new challenge", "heat-challenge", "", "btn-primary")}${btn("Continue to share the meal", "share", m.id)}`,
      );
  }
  function tourNext() {
    const done = tourState(),
      i = done.findIndex((x) => !x);
    if (i === 0) return onboarding();
    if (i === 1) return scanCamera("fridge");
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
        `<div class="app-menu">${D.nav.map(([r, label]) => btn(label, "go", r, "btn-quiet")).join("")}</div><div class="menu-footer">${btn("Reset demo", "reset-ask")}${btn("Set cooking goals", "onboard")}</div><a class="text-link" href="../index.html" target="_top">Back to Nomli overview</a>`,
      );
    if (action === "meal-photo") {
      const meal = S.meals.find((m) => m.id === id);
      if (!meal) return;
      openModal(
        "Your finished dish",
        `<div class="camera-view dish-camera"><img src="${recipe(meal.rid).image}" alt="Sample finished dish"><div class="camera-brackets"></div><span class="scan-status">Sample camera • ready</span></div><p class="muted">A little moment worth sharing.</p>${btn("Use this sample photo", "photo-confirm", id, "btn-primary")}<p class="details">This demo attaches an illustrative photo. No camera or authenticity verification.</p>`,
      );
      return;
    }
    if (action === "photo-confirm") {
      const meal = S.meals.find((m) => m.id === id);
      if (meal) meal.photo = true;
      closeModal();
      render();
      toast("Sample dish photo attached.");
      return;
    }
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
    if (action === "scan-review" || action === "scan-open")
      return scanCamera(id || "fridge");
    if (action === "scan-capture") return captureScan();
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
        $(".app-scroll")?.scrollTo(0, 0);
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
    if (action === "receipt") return scanCamera(id);
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
    if (kind === "single-scan") {
      const id = form.dataset.id,
        q = Number(fd.get("qty")),
        date = fd.get("expiry");
      if (
        !D.items[id] ||
        !Number.isFinite(q) ||
        q <= 0 ||
        q > 10000 ||
        Math.abs(q * 100 - Math.round(q * 100)) > 0.000001 ||
        !validDate(date) ||
        !fd.get("confirmed")
      )
        return formError(
          form,
          "Check quantity (up to two decimals), date and confirmation.",
        );
      S.items[id].qty = q;
      S.items[id].expiry = date;
      S.items[id].estimated = false;
      S.adjustments.push(S.items[id].name + ": reviewed camera sample saved.");
      closeModal();
      navigate("kitchen");
      toast("Reviewed ingredient saved to your kitchen.");
      return;
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
      $(".app-scroll")?.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }
  window.addEventListener("hashchange", restoreRoute);
  window.addEventListener("popstate", restoreRoute);
  modal.addEventListener("cancel", () => {
    if (lastFocus?.isConnected) setTimeout(() => lastFocus.focus(), 0);
  });
  window.addEventListener("message", (event) => {
    if (
      event.origin !== location.origin ||
      event.source !== parent ||
      !event.data ||
      typeof event.data !== "object"
    )
      return;
    if (
      event.data.type === "nomli:navigate" &&
      routes.includes(event.data.route)
    ) {
      closeModalIfOpen();
      navigate(event.data.route);
    }
    if (event.data.type === "nomli:scan") scanCamera(event.data.mode);
  });
  render(false);
})();
