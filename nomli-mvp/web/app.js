"use strict";
import { createTimerNotifications } from "./timer-notifications.js";
(function leanNomli() {
  const D = window.NOMLI_DATA;
  const KEY = "nomli-kitchen-mvp-v1";
  const $ = (q, root = document) => root.querySelector(q);
  const esc = (v) =>
    String(v ?? "").replace(
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
  const icon = (name) =>
    `<svg class="ui-icon" aria-hidden="true"><use href="icons.svg#${name}"/></svg>`;
  const money = (cents) => `SAR ${(cents / 100).toFixed(2)}`;
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
  const num = (n) => Number(Number(n).toFixed(2)).toString();
  const recipe = (id) => D.recipes.find((r) => r.id === id) || D.recipes[0];
  const nav = [
    ["kitchen", "refrigerator", "Kitchen"],
    ["scan", "scan", "Scan"],
    ["cook", "chef-hat", "Cook"],
    ["assistant", "sparkle", "Zara"],
  ];
  const routes = [
    "kitchen",
    "scan",
    "cook",
    "assistant",
    "recipe",
    "cooking",
    "review",
    "shopping",
    "expenses",
    "profile",
  ];
  const view = $("#view"),
    modal = $("#modal");
  let toastTimer,
    timerHandle,
    lastFocus,
    scanEpoch = 0;
  let scanTimers = [];

  function seed() {
    return {
      version: 1,
      route: "kitchen",
      items: Object.fromEntries(
        Object.entries(D.items).map(([id, x]) => [
          id,
          { ...x, expiry: datePlus(x.days), estimated: false },
        ]),
      ),
      tools: Object.fromEntries(D.tools.map((x) => [x.id, x.on])),
      sort: "expiry",
      storage: "All",
      servings: {},
      swaps: {},
      matchOnly: false,
      recipe: D.recipes[0].id,
      cooking: null,
      meals: [],
      shopping: [],
      receipts: [],
      budget: 160000,
      profile: { allergies: [], cuisine: "Any", time: 20, household: 2 },
      chat: [],
    };
  }
  function validState(x) {
    return (
      x &&
      x.version === 1 &&
      x.items &&
      x.tools &&
      x.profile &&
      Array.isArray(x.profile.allergies) &&
      x.servings &&
      x.swaps &&
      Number.isSafeInteger(x.budget) &&
      x.budget > 0 &&
      Array.isArray(x.meals) &&
      Array.isArray(x.shopping) &&
      Array.isArray(x.receipts) &&
      Array.isArray(x.chat) &&
      Object.keys(D.items).every(
        (id) =>
          x.items[id] &&
          Number.isFinite(x.items[id].qty) &&
          x.items[id].qty >= 0,
      )
    );
  }
  function load() {
    try {
      const x = JSON.parse(localStorage.getItem(KEY));
      return validState(x) ? x : seed();
    } catch (_) {
      return seed();
    }
  }
  let S = load();
  const timerNotifications = createTimerNotifications(
    () => window.NomliNative,
    save,
  );
  function cancelCookingNotification() {
    timerNotifications.cancel(S.cooking).catch(() => {});
  }
  const hash = location.hash.slice(1);
  if (routes.includes(hash)) S.route = hash;
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (_) {}
  }
  function announce(text) {
    $("#announcer").textContent = text;
    $("#toast").textContent = text;
    $("#toast").hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => ($("#toast").hidden = true), 3500);
  }
  function heading(kicker, title, text = "", actions = "") {
    return `<header class="page-heading"><div><p class="eyebrow">${esc(kicker)}</p><h1 data-title tabindex="-1">${esc(title)}</h1>${text ? `<p class="muted">${esc(text)}</p>` : ""}</div><div class="actions">${actions}</div></header>`;
  }
  function button(label, action, id = "", cls = "btn-secondary") {
    return `<button type="button" class="btn ${cls}" data-action="${action}" data-id="${esc(id)}">${icon(action === "go" ? nav.find((x) => x[0] === id)?.[1] || "caret-right" : { "scan-mode": "camera", "item-edit": "pencil", "shopping-add": "plus", "cook-start": "play", "cook-next": "arrow-right", "modal-close": "x" }[action] || "caret-right")}<span>${esc(label)}</span></button>`;
  }
  function field(label, name, value, type = "text", extra = "") {
    if (type === "date") extra += ' min="2020-01-01" max="2100-12-31"';
    return `<label class="field">${esc(label)}<input name="${name}" type="${type}" value="${esc(value)}" ${extra}></label>`;
  }
  function options(values, selected) {
    return values
      .map(
        (x) => `<option${x === selected ? " selected" : ""}>${esc(x)}</option>`,
      )
      .join("");
  }
  function errors() {
    return '<p class="notice notice-warning" data-error role="alert" hidden></p>';
  }
  function formError(form, text) {
    const box = $("[data-error]", form);
    box.textContent = text;
    box.hidden = false;
    $("#announcer").textContent = text;
    const target =
      [...form.elements].find((x) => x.willValidate && !x.validity.valid) ||
      $("input,select", form);
    if (target) {
      target.setAttribute("aria-invalid", "true");
      target.setAttribute(
        "aria-describedby",
        box.id || (box.id = "form-error"),
      );
      target.focus();
    }
  }
  function cancelScan() {
    scanEpoch++;
    scanTimers.forEach(clearTimeout);
    scanTimers = [];
  }
  function openModal(title, body, screen = "") {
    cancelScan();
    lastFocus = document.activeElement;
    modal.dataset.screen = screen;
    $("#modal-content").innerHTML =
      `<header class="modal-heading"><h2 id="modal-title">${esc(title)}</h2><button class="icononly" data-action="modal-close" aria-label="Close">${icon("x")}</button></header><div class="modal-body">${body}</div>`;
    if (!modal.open) modal.showModal();
    $("[data-action='modal-close']", modal)?.focus();
  }
  function closeModal() {
    cancelScan();
    if (modal.open) modal.close();
    lastFocus?.focus?.();
  }
  function navigate(route) {
    if (!routes.includes(route)) return;
    S.route = route;
    save();
    history.pushState(null, "", "#" + route);
    render();
    $(".app-scroll")?.scrollTo(0, 0);
  }
  function renderNav() {
    const active = ["recipe", "cooking", "review"].includes(S.route)
      ? "cook"
      : ["shopping", "expenses", "profile"].includes(S.route)
        ? "kitchen"
        : S.route;
    $("#bottom-nav").innerHTML = nav
      .map(
        ([id, ic, label]) =>
          `<button type="button" class="nav-item" data-route="${id}"${active === id ? ' aria-current="page"' : ""}>${icon(ic)}<span>${label}</span></button>`,
      )
      .join("");
  }
  function photo(id) {
    return (
      D.items[id]?.photo ||
      {
        tomatoes: "tomato-128.webp",
        basil: "basil-128.webp",
        eggs: "eggs-128.webp",
      }[id]
    );
  }
  function itemRow(id, item) {
    const urgent = item.qty > 0 && daysLeft(item) <= 2;
    return `<div class="inventory-row">${photo(id) ? `<img class="inventory-photo" src="images/${photo(id)}" alt="">` : `<span class="inventory-icon">${icon(item.storage === "Freezer" ? "refrigerator" : "fork-knife")}</span>`}<div class="inventory-copy"><b>${esc(item.name)}</b><span>${num(item.qty)} ${esc(item.unit)} <small>${esc(item.storage)}</small></span><small class="${urgent ? "use-soon" : "muted"}">${item.qty <= 0 ? "Out of stock" : daysLeft(item) + " days left"}${item.estimated ? " · review date" : ""}</small></div><button class="icononly" data-action="item-edit" data-id="${id}" aria-label="Edit ${esc(item.name)}">${icon("pencil")}</button>${item.qty <= item.low ? `<button class="icononly" data-action="shopping-add" data-id="${id}" aria-label="Add ${esc(item.name)} to shopping">${icon("plus")}</button>` : ""}</div>`;
  }
  function kitchenView() {
    let rows = Object.entries(S.items).filter(
      ([, x]) => S.storage === "All" || x.storage === S.storage,
    );
    rows.sort((a, b) =>
      S.sort === "name"
        ? a[1].name.localeCompare(b[1].name)
        : S.sort === "quantity"
          ? a[1].qty - b[1].qty
          : daysLeft(a[1]) - daysLeft(b[1]),
    );
    const soon = Object.values(S.items).filter(
      (x) => x.qty > 0 && daysLeft(x) <= 2,
    ).length;
    return (
      heading(
        "YOUR KITCHEN",
        "Stocked and ready",
        `${Object.values(S.items).filter((x) => x.qty > 0).length} ingredients on hand${soon ? ` · ${soon} use soon` : ""}`,
        button("Add ingredient", "item-edit", "new", "btn-primary"),
      ) +
      `<button class="scan-banner" data-action="go" data-id="scan"><img src="images/fridge-vf-480.webp" alt=""><span>${icon("scan")}<b>Review a sample scan</b><small>Fridge, barcode, expiry or receipt</small></span>${icon("arrow-right")}</button><section class="card"><div class="card-header"><h2>Inventory</h2><button class="icononly" data-action="item-edit" data-id="new" aria-label="Add ingredient">${icon("plus")}</button></div><div class="inventory-sort"><label>Storage <select data-change="storage">${options(["All", "Fridge", "Freezer", "Pantry", "Spices"], S.storage)}</select></label><label>Sort <select data-change="sort">${options(["expiry", "name", "quantity"], S.sort)}</select></label></div>${rows.map(([id, x]) => itemRow(id, x)).join("")}</section><div class="quick-grid">${[
        ["shopping", "shopping-cart", "Shopping", "Restock list"],
        ["expenses", "wallet", "Spending", "Receipts & budget"],
        ["profile", "gear", "Preferences", "Diet, time & tools"],
      ]
        .map(
          ([r, ic, t, s]) =>
            `<button data-action="go" data-id="${r}">${icon(ic)}<b>${t}</b><small>${s}</small></button>`,
        )
        .join("")}</div>`
    );
  }
  function scanView() {
    const native = window.NomliNative?.isNative
      ? `<section class="card"><h2>Device tools</h2><p class="muted">Capture is real. Recognition service is not configured; results will not alter inventory.</p><div class="actions">${button("Take photo", "native-camera")}${button("Scan barcode", "native-barcode")}</div></section>`
      : "";
    return (
      heading(
        "EDITABLE REVIEW",
        "Scan simulations",
        "Choose a fixed sample, then review every quantity and date before saving.",
      ) +
      `<div class="grid grid-2">${[
        ["fridge", "scan", "Fridge groceries", "Three detected ingredients"],
        ["barcode", "barcode", "Barcode", "One matched product"],
        ["expiry", "calendar-blank", "Expiry label", "One proposed date"],
        ["paper", "receipt", "Paper receipt", "Three extracted lines"],
        ["digital", "upload-simple", "Digital receipt", "Sample PDF lines"],
      ]
        .map(
          ([id, ic, t, s]) =>
            `<button class="card feature-button" data-action="scan-mode" data-id="${id}">${icon(ic)}<b>${t}</b><small>${s}</small></button>`,
        )
        .join(
          "",
        )}</div>${native}<p class="details">Simulation only. No camera, file, OCR, barcode database or recognition service is used.</p>`
    );
  }
  function selectedIngredient(r, ing) {
    return S.swaps[r.id + ":" + ing.id] || ing.id;
  }
  function scaled(r, qty) {
    return (
      (qty * (S.servings[r.id] || S.profile.household || r.servings)) /
      r.servings
    );
  }
  function selectedAllergens(r) {
    const ingredientAllergens = { bread: "wheat", eggs: "egg", butter: "milk" };
    return [
      ...new Set(
        r.ingredients
          .map((ing) => ingredientAllergens[selectedIngredient(r, ing)])
          .filter(Boolean),
      ),
    ];
  }
  function assessment(r) {
    const missing = [],
      missingTools = (r.requiredTools || []).filter((id) => !S.tools[id]);
    r.ingredients.forEach((ing) => {
      const id = selectedIngredient(r, ing);
      if (id === "skip") return;
      const need = scaled(
        r,
        id === ing.id ? ing.qty : ing.swaps?.find((x) => x.id === id)?.qty || 0,
      );
      if (!S.items[id] || S.items[id].qty + 1e-9 < need)
        missing.push({ id, need, have: S.items[id]?.qty || 0 });
    });
    const excluded = selectedAllergens(r).filter((a) =>
      S.profile.allergies.includes(a),
    );
    return {
      missing,
      missingTools,
      excluded,
      ready:
        missing.length === 0 &&
        missingTools.length === 0 &&
        excluded.length === 0,
    };
  }
  function cookView() {
    const eligible = D.recipes
      .filter(
        (r) =>
          (S.profile.cuisine === "Any" || r.cuisine === S.profile.cuisine) &&
          r.time <= S.profile.time &&
          !assessment(r).excluded.length,
      )
      .map((r) => ({ r, a: assessment(r) }));
    const shown = S.matchOnly ? eligible.filter((x) => x.a.ready) : eligible;
    return (
      heading(
        "USE WHAT YOU HAVE",
        "What can I cook?",
        "Matches check quantities, selected swaps, exclusions and available tools.",
      ) +
      (S.cooking
        ? `<section class="card resume-card"><p class="eyebrow">COOKING IN PROGRESS</p><h2>${esc(recipe(S.cooking.rid).name)}</h2>${button("Resume cooking", "go", "cooking", "btn-primary")}</section>`
        : "") +
      `<label class="checkbox-field"><input type="checkbox" data-change="match"${S.matchOnly ? " checked" : ""}>Only show recipes I can make now</label><div class="recipe-grid">${shown.map(({ r, a }) => `<article class="recipe-card"><img src="${r.image}" alt="${esc(r.name)}"><div><span class="badge ${a.ready ? "badge-demo" : "badge-planned"}">${a.ready ? "READY" : a.missingTools.length ? "TOOL NEEDED" : "MISSING " + a.missing.length}</span><h2>${esc(r.name)}</h2><p>${r.time} min · ${esc(r.cuisine)} · ${esc(r.difficulty)}</p>${button("View recipe", "recipe", r.id, "btn-primary")}</div></article>`).join("") || '<p class="empty">No exact match. Turn off match-only or adjust preferences.</p>'}</div>`
    );
  }
  function recipeView() {
    const r = recipe(S.recipe),
      serv = S.servings[r.id] || S.profile.household || r.servings,
      a = assessment(r);
    return (
      heading(
        "RECIPE",
        r.name,
        `${r.time} min · ${r.difficulty}`,
        button("Ask Zara", "go", "assistant"),
      ) +
      `<article class="featured-meal"><img src="${r.image}" alt="${esc(r.name)}"></article><section class="card"><div class="card-header"><h2>Ingredients</h2><label>Servings <select data-change="servings" data-id="${r.id}">${options([1, 2, 3, 4, 6], serv)}</select></label></div>${r.ingredients
        .map((ing) => {
          const chosen = selectedIngredient(r, ing),
            choice = chosen === "skip" ? { name: "Skip" } : S.items[chosen];
          const need = scaled(
            r,
            chosen === ing.id
              ? ing.qty
              : ing.swaps?.find((x) => x.id === chosen)?.qty || 0,
          );
          return `<div class="item-row"><div><b>${esc(choice.name)}</b><small>${num(need)} ${esc(choice.unit || "")} needed · ${num(choice.qty || 0)} available</small></div>${ing.swaps ? `<label><span class="sr-only">Swap ${esc(S.items[ing.id].name)}</span><select data-change="swap" data-id="${r.id}:${ing.id}">${[ing.id, ...ing.swaps.map((x) => x.id)].map((id) => `<option value="${id}"${id === chosen ? " selected" : ""}>${id === "skip" ? "Skip" : esc(S.items[id].name)}</option>`).join("")}</select></label>` : ""}</div>`;
        })
        .join(
          "",
        )}${a.ready ? button("Start cooking", "cook-start", r.id, "btn-primary") : `<p class="notice">Not enough reviewed stock for selected servings.</p>${button("Add missing to shopping", "shopping-missing", r.id)}`}</section>`
    );
  }
  function timerSeconds() {
    if (!S.cooking) return 0;
    if (S.cooking.running && S.cooking.deadline)
      return Math.max(0, Math.ceil((S.cooking.deadline - Date.now()) / 1000));
    return Math.max(0, S.cooking.seconds || 0);
  }
  function cookingView() {
    const c = S.cooking,
      r = recipe(c?.rid);
    if (!c) return cookView();
    const step = r.steps[c.step],
      seconds = timerSeconds();
    return (
      heading(
        `STEP ${c.step + 1} OF ${r.steps.length}`,
        step.title,
        step.text,
        button("Ask Zara", "go", "assistant"),
      ) +
      `<article class="featured-meal"><img src="${r.image}" alt=""></article><section class="card timer-card"><h2 data-timer>${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}</h2><div class="actions">${button(c.running ? "Pause timer" : "Start 2-minute timer", "timer-wall")}${button(c.step === r.steps.length - 1 ? "Review ingredients used" : "Next step", "cook-next", r.id, "btn-primary")}</div><p class="details">Timer uses elapsed clock time and survives backgrounding. Check food safety and doneness yourself.</p></section>`
    );
  }
  function reviewView() {
    const c = S.cooking,
      r = recipe(c?.rid);
    if (!c) return cookView();
    return (
      heading(
        "CONFIRM USE",
        "Update your kitchen",
        "Review actual amounts used before saving.",
      ) +
      `<form data-form="meal">${errors()}${r.ingredients
        .map((ing) => {
          const id = selectedIngredient(r, ing);
          if (id === "skip") return "";
          const q = scaled(
            r,
            id === ing.id
              ? ing.qty
              : ing.swaps?.find((x) => x.id === id)?.qty || 0,
          );
          return field(
            `${S.items[id].name} used (${S.items[id].unit})`,
            `used-${id}`,
            q,
            "number",
            `min="0" max="${S.items[id].qty}" step="0.01" required`,
          );
        })
        .join(
          "",
        )}<label class="checkbox-field"><input type="checkbox" name="confirmed" required>I checked amounts against current stock.</label><button class="btn btn-primary">Save meal and update inventory</button></form>`
    );
  }
  function shoppingView() {
    return (
      heading(
        "KITCHEN UTILITY",
        "Shopping list",
        "Checked items remain until removed.",
        button("Back to kitchen", "go", "kitchen"),
      ) +
      `<section class="card">${S.shopping.length ? S.shopping.map((x) => `<div class="item-row"><label class="checkbox-field"><input type="checkbox" data-change="shopping-check" data-id="${x.id}"${x.got ? " checked" : ""}><span><b>${esc(S.items[x.id]?.name || x.id)}</b><small>${esc(x.reason)}</small></span></label>${button("Remove", "shopping-remove", x.id, "btn-quiet")}</div>`).join("") : '<p class="empty">Nothing to buy yet.</p>'}</section>`
    );
  }
  function expensesView() {
    const receiptTotal = S.receipts
        .flatMap((r) => r.lines)
        .reduce((n, x) => n + x.cents, 0),
      total = 124000 + receiptTotal;
    return (
      heading(
        "KITCHEN UTILITY",
        "Grocery spending",
        "Editable sample receipts save once and use integer cents.",
        button("Back to kitchen", "go", "kitchen"),
      ) +
      `<section class="card spend-hero"><small>OCTOBER SAMPLE</small><h2>${money(total)}</h2><p>${money(Math.max(0, S.budget - total))} left of ${money(S.budget)}</p><form data-form="budget">${errors()}${field("Monthly sample budget (SAR)", "budget", (S.budget / 100).toFixed(2), "number", 'min="1" max="1000000" step="0.01" required')}<button class="btn btn-secondary">Update budget</button></form></section><div class="receipt-shortcuts"><button data-action="scan-mode" data-id="paper">${icon("camera")}Paper receipt</button><button data-action="scan-mode" data-id="digital">${icon("upload-simple")}Digital receipt</button></div><section class="card purchase-history">${S.receipts.map((r) => `<div class="item-row"><div><b>${esc(r.name)}</b><small>${r.lines.length} reviewed items · 25 Oct</small></div><strong>${money(r.lines.reduce((n, x) => n + x.cents, 0))}</strong></div>`).join("") || '<p class="empty">No sample receipts saved.</p>'}</section>`
    );
  }
  function profileView() {
    return (
      heading(
        "KITCHEN UTILITY",
        "Preferences & tools",
        "Used for recipe filtering and contextual suggestions.",
        button("Back to kitchen", "go", "kitchen"),
      ) +
      `<form class="card" data-form="profile">${errors()}<label class="field">Cuisine<select name="cuisine">${options(["Any", "Mediterranean", "Everyday", "MENA-inspired"], S.profile.cuisine)}</select></label>${field("Maximum cooking time (minutes)", "time", S.profile.time, "number", 'min="5" max="180" required')}${field("Household servings", "household", S.profile.household, "number", 'min="1" max="12" required')}<fieldset><legend>Exclude allergens</legend>${["wheat", "egg", "milk"].map((x) => `<label class="checkbox-field"><input type="checkbox" name="allergy" value="${x}"${S.profile.allergies.includes(x) ? " checked" : ""}>${x}</label>`).join("")}</fieldset><fieldset><legend>Available tools</legend>${D.tools.map((x) => `<label class="checkbox-field"><input type="checkbox" name="tool" value="${x.id}"${S.tools[x.id] ? " checked" : ""}>${esc(x.name)}</label>`).join("")}</fieldset><button class="btn btn-primary">Save preferences</button></form>`
    );
  }
  function assistantAnswer(q) {
    if (S.cooking && /step|next|help|how|heat|cooking/i.test(q)) {
      const r = recipe(S.cooking.rid),
        step = r.steps[S.cooking.step];
      return `${r.name}, step ${S.cooking.step + 1}: ${step.title}. ${step.text} Return to cooking to continue.`;
    }
    const text = q.toLowerCase(),
      ready = D.recipes.filter((r) => assessment(r).ready),
      expiring = Object.values(S.items).filter(
        (x) => x.qty > 0 && daysLeft(x) <= 2,
      );
    if (/expir|soon|fresh/.test(text))
      return expiring.length
        ? `Use ${expiring.map((x) => x.name).join(" and ")} soon.`
        : "Nothing reviewed expires within two days.";
    if (/buy|shop|missing/.test(text))
      return S.shopping.length
        ? `Shopping list: ${S.shopping.map((x) => S.items[x.id]?.name).join(", ")}.`
        : "Shopping list is clear.";
    if (/cook|recipe|dinner|meal/.test(text))
      return ready.length
        ? `You can make ${ready.map((x) => x.name).join(", ")}. Open Cook to review servings and swaps.`
        : "No complete match yet. Open Cook to see missing stock or tools.";
    return "I can help with recipes, use-soon ingredients, or your shopping list. This response is a fixed local script.";
  }
  function assistantView() {
    const expiring = Object.entries(S.items)
        .filter(([, x]) => x.qty > 0 && daysLeft(x) <= 2)
        .map(([, x]) => x.name),
      ready = D.recipes.filter((r) => assessment(r).ready);
    const tips = [
      expiring.length
        ? `Use ${expiring.join(" and ")} soon.`
        : "No reviewed ingredient expires within two days.",
      ready.length
        ? `${ready[0].name} is ready from current stock.`
        : "No recipe fully matches current stock and tools.",
      S.shopping.length
        ? `${S.shopping.length} item${S.shopping.length === 1 ? "" : "s"} waiting on shopping list.`
        : "Shopping list is clear.",
    ];
    return (
      heading(
        "SCRIPTED ASSISTANT",
        "Zara",
        "Suggestions use local prototype state. No live AI, speech recognition or external service.",
      ) +
      (S.cooking
        ? `<section class="card"><p class="eyebrow">CURRENT RECIPE</p><h2>${esc(recipe(S.cooking.rid).name)}</h2>${button("Back to cooking", "go", "cooking", "btn-primary")}</section>`
        : "") +
      `<article class="chef-card card"><img class="avatar" src="images/zara-96.webp" alt="Zara"><div><b>Kitchen check-in</b><p>${esc(tips[0])}</p></div></article><section class="card"><h2>Useful now</h2><ul class="feature-list">${tips.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>${ready.length ? button(`Open ${ready[0].name}`, "recipe", ready[0].id, "btn-primary") : button("Browse cookbook", "go", "cook")}</section><section class="card"><h2>Ask Zara</h2><form data-form="assistant">${errors()}${field("Question", "question", "", "text", 'maxlength="140" placeholder="What can I cook tonight?" required')}<div class="actions"><button class="btn btn-primary">Send question</button>${button("Use sample voice transcript", "assistant-voice")}</div></form>${S.chat
        .slice(-3)
        .map(
          (x) =>
            `<div class="chat-bubble"><b>${esc(x.q)}</b><p>${esc(x.a)}</p></div>`,
        )
        .join(
          "",
        )}<p class="details">Voice control inserts a fixed sample transcript for review. Microphone is not accessed. Answers are scripted, not generated.</p></section>`
    );
  }
  const screens = {
    kitchen: kitchenView,
    scan: scanView,
    cook: cookView,
    assistant: assistantView,
    recipe: recipeView,
    cooking: cookingView,
    review: reviewView,
    shopping: shoppingView,
    expenses: expensesView,
    profile: profileView,
  };
  function render() {
    clearInterval(timerHandle);
    timerHandle = null;
    view.dataset.screen = S.route;
    view.innerHTML = (screens[S.route] || kitchenView)();
    view.setAttribute("aria-busy", "false");
    renderNav();
    $("[data-title]", view)?.focus({ preventScroll: true });
    if (S.cooking?.running) startTimer();
  }
  function itemForm(id) {
    const item =
      id === "new"
        ? {
            name: "",
            qty: 1,
            unit: "pieces",
            storage: "Fridge",
            expiry: datePlus(3),
          }
        : S.items[id];
    openModal(
      id === "new" ? "Add ingredient" : "Edit ingredient",
      `<form data-form="item" data-id="${id}">${errors()}${field("Ingredient name", "name", item.name, "text", 'maxlength="48" required')}${field("Quantity on hand", "qty", item.qty, "number", 'min="0" max="100000" step="0.01" required')}<label class="field">Unit<select name="unit">${options(["pieces", "slices", "cloves", "bunches", "ml", "g"], item.unit)}</select></label><label class="field">Storage<select name="storage">${options(["Fridge", "Freezer", "Pantry", "Spices"], item.storage)}</select></label>${field("Reviewed date", "expiry", item.expiry, "date", "required")}<button class="btn btn-primary">Save ingredient</button></form>`,
    );
  }
  function scanMode(mode) {
    const receipt = ["paper", "digital"].includes(mode),
      digital = mode === "digital";
    let scene;
    if (mode === "fridge")
      scene =
        '<img src="images/fridge-vf-480.webp" alt="Sample stocked refrigerator">';
    else if (mode === "paper")
      scene =
        '<img src="images/receipt-camera.webp" alt="Sample paper grocery receipt">';
    else if (digital)
      scene = `<div class="sample-receipt"><b>${esc(D.receipts.digital.store)}</b><small>grocery-receipt.pdf · sample</small>${D.receipts.digital.lines.map((x) => `<p><span>${esc(S.items[x.id].name)}</span><b>${money(x.cents)}</b></p>`).join("")}</div>`;
    else if (mode === "barcode")
      scene =
        '<img src="images/fridge-vf-480.webp" alt="Sample kitchen background"><div class="product-label"><b>SOURDOUGH BREAD</b><span>4 slices · sample pack</span><div class="barcode-lines" aria-label="Illustrative barcode"></div><small>SYN-NOMLI-BREAD · fictional</small></div>';
    else
      scene = `<img src="images/fridge-vf-480.webp" alt="Sample kitchen background"><div class="date-label"><b>FREE-RANGE EGGS</b><span>BEST BEFORE</span><strong>${datePlus(5)}</strong><small>Sample package label</small></div>`;
    openModal(
      {
        fridge: "Scan fridge",
        barcode: "Scan barcode",
        expiry: "Read expiry label",
        paper: "Scan paper receipt",
        digital: "Import digital receipt",
      }[mode],
      `<p class="camera-caption">${digital ? "Select fixed sample PDF" : "Frame fixed sample, then capture"}.</p><div class="camera-view ${receipt ? "receipt-camera" : ""} ${digital ? "digital-camera" : ""}" data-camera>${scene}<div class="camera-brackets"></div><div class="scan-beam" hidden></div><span class="scan-status" data-scan-status>Sample ${digital ? "file" : "camera"} · ready</span></div><div class="capture-actions"><button class="capture-button" data-action="scan-capture" data-id="${mode}" aria-label="${digital ? "Import sample PDF" : "Capture sample"}">${icon(digital ? "upload-simple" : "camera")}</button><p>${digital ? "Import sample PDF" : "Tap to capture"}</p></div><p class="details">Finite simulation. No camera, file, OCR or recognition service is accessed.</p>`,
      "camera",
    );
  }
  function scanReview(mode) {
    if (mode === "paper" || mode === "digital") return receiptForm(mode);
    const ids =
      mode === "fridge"
        ? ["tomatoes", "basil", "eggs"]
        : [mode === "barcode" ? "bread" : "eggs"];
    openModal(
      `Review ${mode} result`,
      `<p class="badge badge-demo">Simulated result · editable</p><form data-form="scan" data-mode="${mode}">${errors()}${ids.map((id) => `<fieldset><legend>${esc(S.items[id].name)}</legend>${field(`Quantity (${S.items[id].unit})`, `qty-${id}`, mode === "fridge" ? Math.max(S.items[id].qty, { tomatoes: 3, basil: 1, eggs: 6 }[id]) : Math.max(S.items[id].qty, 1), "number", 'min="0.01" max="10000" step="0.01" required')}${field("Reviewed date", `expiry-${id}`, datePlus(mode === "expiry" ? 5 : D.items[id].days), "date", "required")}</fieldset>`).join("")}<label class="checkbox-field"><input type="checkbox" name="confirmed" required>I reviewed every quantity and date.</label><button class="btn btn-primary">Save reviewed stock</button></form><p class="details">Nothing changes until confirmation.</p>`,
    );
  }
  function captureScan(mode) {
    const epoch = ++scanEpoch,
      beam = $(".scan-beam", modal),
      status = $("[data-scan-status]", modal),
      capture = $("[data-action='scan-capture']", modal);
    if (!status || capture?.disabled) return;
    if (capture) capture.disabled = true;
    if (beam) beam.hidden = false;
    status.textContent = "Capturing fixed sample…";
    scanTimers.push(
      setTimeout(() => {
        if (epoch !== scanEpoch || !modal.open) return;
        status.textContent =
          mode === "barcode"
            ? "Matching sample barcode…"
            : mode === "expiry"
              ? "Reading sample date…"
              : ["paper", "digital"].includes(mode)
                ? "Extracting sample lines…"
                : "Finding sample groceries…";
      }, 650),
    );
    scanTimers.push(
      setTimeout(() => {
        if (epoch !== scanEpoch || !modal.open) return;
        status.textContent = "Ready for your review";
      }, 1300),
    );
    scanTimers.push(
      setTimeout(() => {
        if (epoch !== scanEpoch || !modal.open) return;
        scanReview(mode);
      }, 1750),
    );
  }
  function receiptForm(source) {
    if (S.receipts.some((r) => r.source === source)) {
      openModal(
        "Receipt already saved",
        `<p>This fixed ${esc(source)} sample has already updated stock and spending. Saving it twice is blocked.</p>${button("View spending", "go", "expenses", "btn-primary")}`,
      );
      return;
    }
    const r = D.receipts[source];
    openModal(
      `Review ${r.name.toLowerCase()}`,
      `<p class="badge badge-demo">Simulated extraction · ${esc(r.store)}</p><form data-form="receipt" data-source="${source}">${errors()}${r.lines.map((l) => `<fieldset><legend>${esc(S.items[l.id].name)}</legend>${field("Item name", `name-${l.id}`, S.items[l.id].name, "text", 'maxlength="48" required')}${field(`Quantity (${S.items[l.id].unit})`, `qty-${l.id}`, l.qty, "number", 'min="0.01" max="10000" step="0.01" required')}${field("Line total (SAR)", `price-${l.id}`, (l.cents / 100).toFixed(2), "number", 'min="0" max="100000" step="0.01" required')}${field("Reviewed combined-stock date", `expiry-${l.id}`, S.items[l.id].expiry, "date", "required")}</fieldset>`).join("")}<p class="notice">Original sample total: ${money(r.lines.reduce((n, x) => n + x.cents, 0))}. <b data-revised-total>Reviewed total: ${money(r.lines.reduce((n, x) => n + x.cents, 0))}</b></p><label class="checkbox-field"><input type="checkbox" name="confirmed" required>I reviewed items, quantities, dates and total.</label><button class="btn btn-primary">Save once to kitchen & spending</button></form>`,
      "camera",
    );
  }
  function startTimer() {
    clearInterval(timerHandle);
    timerHandle = setInterval(() => {
      if (!S.cooking?.running) return;
      const seconds = timerSeconds();
      S.cooking.seconds = seconds;
      if (seconds === 0) {
        cancelCookingNotification();
        S.cooking.running = false;
        S.cooking.deadline = null;
        clearInterval(timerHandle);
        announce("Timer finished.");
      }
      save();
      const el = $("[data-timer]");
      if (el)
        el.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    }, 500);
  }

  document.addEventListener(
    "click",
    (event) => {
      const el = event.target.closest('[data-action="assistant-voice"]');
      if (!el) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const input = $("[name='question']", el.closest("form"));
      if (input) {
        input.value = "What can I cook with what I have?";
        input.focus();
      }
      announce(
        "Sample transcript ready for review. Microphone was not accessed.",
      );
    },
    true,
  );

  document.addEventListener(
    "click",
    async (event) => {
      const el = event.target.closest("[data-action]");
      if (!el) return;
      const action = el.dataset.action;
      if (!["scan-capture", "timer-wall", "assistant-voice"].includes(action))
        return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (action === "scan-capture") return captureScan(el.dataset.id);
      if (action === "assistant-voice") {
        const q = "What can I cook with what I have?";
        S.chat.push({
          q: `Sample voice transcript: ${q}`,
          a: assistantAnswer(q),
        });
        save();
        render();
        return announce(
          "Sample transcript added. Microphone was not accessed.",
        );
      }
      if (!S.cooking) return;
      if (S.cooking.running) {
        cancelCookingNotification();
        S.cooking.seconds = timerSeconds();
        S.cooking.running = false;
        S.cooking.deadline = null;
      } else {
        const seconds = S.cooking.seconds > 0 ? S.cooking.seconds : 120;
        S.cooking.seconds = seconds;
        S.cooking.deadline = Date.now() + seconds * 1000;
        S.cooking.running = true;
        timerNotifications
          .schedule(S.cooking, seconds)
          .catch(() =>
            announce(
              "Device notifications unavailable. Keep Nomli open to see the timer alert.",
            ),
          );
      }
      save();
      render();
    },
    true,
  );

  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target.closest("form[data-form]");
      if (!form) return;
      const kind = form.dataset.form;
      if (kind === "receipt") {
        const incompatible = D.receipts[form.dataset.source].lines.find(
          (line) => S.items[line.id].unit !== D.items[line.id].unit,
        );
        if (incompatible) {
          event.preventDefault();
          event.stopImmediatePropagation();
          return formError(
            form,
            `${S.items[incompatible.id].name} uses ${S.items[incompatible.id].unit}, but this sample receipt uses ${D.items[incompatible.id].unit}. Correct its unit in Kitchen first.`,
          );
        }
        return;
      }
      if (!["assistant", "budget", "meal"].includes(kind)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!form.checkValidity())
        return formError(form, "Review required fields before saving.");
      const fd = new FormData(form);
      if (kind === "assistant") {
        const q = String(fd.get("question")).trim();
        S.chat.push({ q, a: assistantAnswer(q) });
        save();
        return render();
      }
      if (kind === "budget") {
        const raw = String(fd.get("budget"));
        if (!/^\d+(?:\.\d{1,2})?$/.test(raw))
          return formError(
            form,
            "Use a budget with no more than two decimal places.",
          );
        S.budget = Math.round(Number(raw) * 100);
        save();
        announce("Budget updated.");
        return render();
      }
      if (!S.cooking)
        return formError(form, "Cooking session is no longer active.");
      const r = recipe(S.cooking.rid),
        used = [];
      for (const ing of r.ingredients) {
        const id = selectedIngredient(r, ing);
        if (id === "skip") continue;
        const qty = Number(fd.get("used-" + id));
        if (!Number.isFinite(qty) || qty < 0 || qty > S.items[id].qty)
          return formError(
            form,
            `${S.items[id].name} use must be between 0 and ${num(S.items[id].qty)} ${S.items[id].unit}.`,
          );
        used.push({ id, qty });
      }
      used.forEach((x) => {
        S.items[x.id].qty -= x.qty;
      });
      S.meals.push({ id: `meal-${Date.now()}`, rid: r.id, used, date: D.date });
      cancelCookingNotification();
      S.cooking = null;
      save();
      announce("Meal saved. Inventory updated.");
      navigate("kitchen");
    },
    true,
  );

  document.addEventListener("click", async (e) => {
    const el = e.target.closest("[data-action],[data-route]");
    if (!el) return;
    if (el.dataset.route) return navigate(el.dataset.route);
    const a = el.dataset.action,
      id = el.dataset.id || "";
    if (a === "go") {
      closeModal();
      return navigate(id);
    }
    if (a === "modal-close") return closeModal();
    if (a === "menu")
      return openModal(
        "Kitchen utilities",
        button("Shopping list", "go", "shopping") +
          button("Spending", "go", "expenses") +
          button("Preferences & tools", "go", "profile") +
          button("Reset local demo", "reset-ask"),
      );
    if (a === "reset-ask")
      return openModal(
        "Reset local demo",
        `<p>Restore stocked sample inventory and clear meals, receipts, shopping and preferences?</p>${button("Reset demo", "reset-confirm", "", "btn-primary")}`,
      );
    if (a === "reset-confirm") {
      cancelCookingNotification();
      S = seed();
      save();
      closeModal();
      return navigate("kitchen");
    }
    if (a === "item-edit") return itemForm(id);
    if (a === "shopping-add") {
      if (!S.shopping.some((x) => x.id === id))
        S.shopping.push({ id, reason: "Low stock", got: false });
      save();
      render();
      return announce("Added to shopping list.");
    }
    if (a === "shopping-remove") {
      S.shopping = S.shopping.filter((x) => x.id !== id);
      save();
      return render();
    }
    if (a === "shopping-missing") {
      assessment(recipe(id)).missing.forEach((x) => {
        if (!S.shopping.some((y) => y.id === x.id))
          S.shopping.push({
            id: x.id,
            reason: `Need ${num(x.need - x.have)} ${S.items[x.id].unit}`,
            got: false,
          });
      });
      save();
      return navigate("shopping");
    }
    if (a === "scan-mode") return scanMode(id);
    if (a === "recipe") {
      S.recipe = id;
      save();
      return navigate("recipe");
    }
    if (a === "cook-start") {
      cancelCookingNotification();
      S.recipe = id;
      S.cooking = { rid: id, step: 0, seconds: 120, running: false };
      save();
      return navigate("cooking");
    }
    if (a === "timer") {
      S.cooking.running = !S.cooking.running;
      save();
      return render();
    }
    if (a === "cook-next") {
      cancelCookingNotification();
      S.cooking.running = false;
      S.cooking.deadline = null;
      const r = recipe(id);
      if (S.cooking.step < r.steps.length - 1) {
        S.cooking.step++;
        S.cooking.seconds = 120;
        S.cooking.running = false;
        save();
        return render();
      }
      return navigate("review");
    }
    if (a === "assistant-prompt") {
      const answers = {
        cook:
          D.recipes
            .filter((r) => assessment(r).ready)
            .map((r) => r.name)
            .join(", ") || "No complete match yet.",
        expiry:
          Object.values(S.items)
            .filter((x) => x.qty > 0 && daysLeft(x) <= 2)
            .map((x) => x.name)
            .join(", ") || "Nothing within two days.",
        shopping:
          S.shopping.map((x) => S.items[x.id]?.name).join(", ") ||
          "Shopping list is clear.",
      };
      S.chat.push({ q: el.textContent.trim(), a: answers[id] });
      save();
      return render();
    }
    if (a === "native-camera" || a === "native-barcode") {
      try {
        const result =
          await window.NomliNative?.[
            a === "native-camera" ? "camera" : "barcode"
          ]?.();
        openModal(
          a === "native-camera" ? "Photo captured" : "Barcode captured",
          `${a === "native-camera" && result?.webPath ? `<img class="captured-photo" src="${esc(result.webPath)}" alt="Your captured grocery photo">` : `<p class="captured-code">${esc(result?.ScanResult || "No barcode result")}</p>`}<p class="notice">Capture saved for preview. Recognition and product lookup still need connecting; stock has not changed.</p>`,
        );
      } catch (err) {
        announce(err?.message || "Device action cancelled.");
      }
      return;
    }
  });
  document.addEventListener("change", (e) => {
    const el = e.target.closest("[data-change]");
    if (!el) return;
    const what = el.dataset.change;
    if (what === "storage") S.storage = el.value;
    if (what === "sort") S.sort = el.value;
    if (what === "match") S.matchOnly = el.checked;
    if (what === "servings") S.servings[el.dataset.id] = Number(el.value);
    if (what === "swap") S.swaps[el.dataset.id] = el.value;
    if (what === "shopping-check") {
      const x = S.shopping.find((x) => x.id === el.dataset.id);
      if (x) x.got = el.checked;
    }
    save();
    render();
  });
  document.addEventListener("input", (e) => {
    const form = e.target.closest('[data-form="receipt"]');
    if (!form || !e.target.name.startsWith("price-")) return;
    const cents = [...form.querySelectorAll('[name^="price-"]')].reduce(
      (n, x) => n + Math.round(Number(x.value || 0) * 100),
      0,
    );
    $("[data-revised-total]", form).textContent =
      "Reviewed total: " + money(cents);
  });
  document.addEventListener("submit", (e) => {
    const form = e.target.closest("form[data-form]");
    if (!form) return;
    e.preventDefault();
    if (!form.checkValidity())
      return formError(form, "Review required fields before saving.");
    const fd = new FormData(form),
      kind = form.dataset.form;
    if (kind === "item") {
      const id =
        form.dataset.id === "new" ? `custom-${Date.now()}` : form.dataset.id;
      if (!String(fd.get("name")).trim())
        return formError(form, "Enter an ingredient name.");
      if (D.items[id] && fd.get("unit") !== D.items[id].unit)
        return formError(
          form,
          `Keep ${D.items[id].unit} for this linked demo ingredient. Add a separate ingredient for another unit.`,
        );
      S.items[id] = {
        ...(S.items[id] || {}),
        name: String(fd.get("name")).trim(),
        qty: Number(fd.get("qty")),
        unit: fd.get("unit"),
        storage: fd.get("storage"),
        expiry: fd.get("expiry"),
        low: 0,
        category: "Other",
        estimated: false,
      };
    }
    if (kind === "scan") {
      [...form.querySelectorAll("fieldset")].forEach((fs) => {
        const id = $("[name^='qty-']", fs).name.slice(4);
        S.items[id].qty = Number(fd.get("qty-" + id));
        S.items[id].expiry = fd.get("expiry-" + id);
        S.items[id].estimated = false;
      });
    }
    if (kind === "receipt") {
      const source = form.dataset.source;
      if (S.receipts.some((r) => r.source === source))
        return formError(form, "This sample receipt was already saved.");
      const lines = D.receipts[source].lines.map((l) => ({
        id: l.id,
        name: String(fd.get("name-" + l.id)).trim(),
        qty: Number(fd.get("qty-" + l.id)),
        cents: Math.round(Number(fd.get("price-" + l.id)) * 100),
        expiry: fd.get("expiry-" + l.id),
      }));
      if (lines.some((x) => !Number.isSafeInteger(x.cents) || x.cents < 0))
        return formError(
          form,
          "Enter valid line totals with no more than two decimals.",
        );
      lines.forEach((l) => {
        S.items[l.id].name = l.name;
        S.items[l.id].qty += l.qty;
        S.items[l.id].expiry = l.expiry;
        S.items[l.id].estimated = false;
        S.shopping = S.shopping.filter((x) => x.id !== l.id);
      });
      S.receipts.push({ source, name: D.receipts[source].name, lines });
    }
    if (kind === "profile") {
      S.profile.cuisine = fd.get("cuisine");
      S.profile.time = Number(fd.get("time"));
      S.profile.household = Number(fd.get("household"));
      S.profile.allergies = fd.getAll("allergy");
      S.tools = Object.fromEntries(
        D.tools.map((x) => [x.id, fd.getAll("tool").includes(x.id)]),
      );
    }
    save();
    closeModal();
    if (kind === "receipt") {
      announce("Reviewed receipt saved once. Stock and spending updated.");
      return navigate("expenses");
    }
    if (kind === "meal") {
      announce("Meal saved. Inventory updated.");
      return navigate("kitchen");
    }
    announce("Saved.");
    render();
  });
  function syncHash() {
    const r = location.hash.slice(1);
    if (r === "home") {
      navigate("kitchen");
      return;
    }
    if (routes.includes(r)) {
      S.route = r;
      save();
      render();
    }
  }
  modal.addEventListener("cancel", cancelScan);
  modal.addEventListener("close", () => {
    cancelScan();
    if (lastFocus?.isConnected) lastFocus.focus();
  });
  window.addEventListener("popstate", syncHash);
  window.addEventListener("hashchange", syncHash);
  render();
})();
