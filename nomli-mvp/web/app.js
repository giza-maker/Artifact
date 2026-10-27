"use strict";
import { requestAssistantReply } from "./assistant-client.js";
import {
  buildAssistantContext,
  reviewAssistantProposal,
  applyAssistantProposal,
} from "./assistant-domain.js";
import { createTimerNotifications } from "./timer-notifications.js";
import { createStateStore } from "./state-store.js";
import {
  getScanConfig,
  saveScanConfig,
  scanFile,
  testScanConnection,
  validateScanConfig,
} from "./scan-client.js";
import {
  currencyDigits,
  formatMinorInput,
  formatMoneyMinor,
  parseMinorAmount,
} from "./scan-money.js";
import { commitScanDraft, reviewScanDraft } from "./scan-domain.js";
import {
  COOK_INGREDIENTS,
  COOK_RECIPES,
  COOK_TOOLS,
  getIngredient,
  ingredientLabel,
  toolLabel,
} from "./cook-catalog.js";
import {
  assessRecipe,
  startCookingSession,
  commitCookedMeal,
  undoCookedMeal,
  normalizeCookUnit,
} from "./cook-domain.js";
import {
  renderIngredientLinkFields,
  readIngredientLink,
} from "./cook-linking.js";
import { applyScanCookingLinks } from "./scan-cooking-links.js";
(async function leanNomli() {
  const D = { ...window.NOMLI_DATA, recipes: COOK_RECIPES, tools: COOK_TOOLS };
  const store = createStateStore({
    data: D,
    native: window.NomliNative,
    storage: window.localStorage,
    now: () => new Date(),
  });
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
    item?.expiry
      ? Math.round(
          (Date.parse(item.expiry + "T12:00:00Z") - Date.now()) / 86400000,
        )
      : null;
  const num = (n) =>
    Number(n).toLocaleString("en", {
      maximumFractionDigits: 6,
      useGrouping: false,
    });
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
  let scanConfig = { apiUrl: "", deviceToken: "" };
  let assistantDraft = "",
    assistantError = "",
    assistantAbort = null,
    assistantEpoch = 0;
  let assistantReply = null,
    assistantContext = null,
    assistantReview = null;
  const liveChats = new WeakSet();
  function cancelAssistant(clear = true) {
    assistantEpoch++;
    assistantAbort?.abort();
    assistantAbort = null;
    if (clear) {
      assistantReply = null;
      assistantContext = null;
      assistantReview = null;
    }
  }
  let scanDraft = null;
  let scanAbort = null;

  let loadResult;
  try {
    loadResult = await store.load();
  } catch (error) {
    view.setAttribute("aria-busy", "false");
    view.innerHTML = `<section class="card notice notice-warning" role="alert"><h1>Inventory could not load</h1><p>${esc(error?.message || "Local storage is unavailable.")}</p></section>`;
    return;
  }
  let S = loadResult.state;
  let recoveryRequired = Boolean(loadResult.recoveryRequired);
  let importCandidate = null;
  let saveQueue = Promise.resolve();
  let operationBusy = false;
  let storageError = "";
  try {
    scanConfig = await getScanConfig();
  } catch {
    scanConfig = { apiUrl: "", deviceToken: "" };
  }
  const timerNotifications = createTimerNotifications(
    () => window.NomliNative,
    async () => {
      try {
        await save();
      } catch (error) {
        storageError =
          "Timer notification state could not be saved. Keep Nomli open.";
        render();
        announce(storageError);
        throw error;
      }
    },
  );
  function cancelCookingNotification() {
    timerNotifications.cancel(S.cooking).catch(() => {});
  }
  async function retireCookingNotification(session) {
    if (!session) return true;
    session.running = false;
    try {
      await timerNotifications.cancel(session);
      return true;
    } catch {
      announce(
        "Device alert could not be updated. Keep Nomli open to track the timer.",
      );
      return false;
    }
  }
  const hash = location.hash.slice(1);
  if (routes.includes(hash)) S.route = hash;
  function save() {
    const snapshot = structuredClone(S);
    saveQueue = saveQueue.catch(() => {}).then(() => store.save(snapshot));
    return saveQueue;
  }
  function backgroundSave() {
    save()
      .then(() => {
        storageError = "";
      })
      .catch((error) => {
        storageError = `Changes could not be saved: ${error?.message || "storage failed"}`;
        render();
        announce(storageError);
      });
  }
  function setBusy(busy, scope = document) {
    operationBusy = busy;
    scope
      .querySelectorAll("button, input, select, textarea")
      .forEach((control) => {
        if (busy) control.dataset.wasDisabled = control.disabled ? "1" : "0";
        if (!busy && control.dataset.wasDisabled === undefined) return;
        control.disabled = busy || control.dataset.wasDisabled === "1";
        if (!busy) delete control.dataset.wasDisabled;
      });
  }
  async function commit(mutator, success, replace = false) {
    if (operationBusy) return false;
    cancelAssistant();
    setBusy(true, modal.open ? modal : document);
    await saveQueue.catch(() => {});
    const before = structuredClone(S);
    try {
      mutator();
      if (replace) {
        const snapshot = structuredClone(S);
        saveQueue = saveQueue
          .catch(() => {})
          .then(() => store.replace(snapshot));
        await saveQueue;
        recoveryRequired = false;
      } else await save();
      if (success) announce(success);
      storageError = "";
      return true;
    } catch (error) {
      S = before;
      render();
      announce(`Not saved: ${error?.message || "storage failed"}`);
      return false;
    } finally {
      setBusy(false, modal.open ? modal : document);
    }
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
    scanAbort?.abort();
    scanAbort = null;
    scanTimers.forEach(clearTimeout);
    scanTimers = [];
  }
  function openModal(title, body, screen = "") {
    cancelScan();
    cancelAssistant(false);
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
    cancelAssistant();
    S.route = route;
    backgroundSave();
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
    const left = daysLeft(item),
      urgent = item.qty > 0 && left !== null && left <= 2;
    const freshness = !item.expiry
      ? "No expiry recorded"
      : `${left < 0 ? `${Math.abs(left)} days past date` : `${left} days left`} · ${item.expiryProvenance || (item.estimated ? "estimated" : "user")}`;
    return `<div class="inventory-row">${photo(id) ? `<img class="inventory-photo" src="images/${photo(id)}" alt="">` : `<span class="inventory-icon">${icon(item.storage === "Freezer" ? "refrigerator" : "fork-knife")}</span>`}<div class="inventory-copy"><b>${esc(item.name)}</b><span>${num(item.qty)} ${esc(item.unit)} <small>${esc(item.storage)}</small></span><small class="${urgent ? "use-soon" : "muted"}">${esc(freshness)}</small><small class="cook-link-label">${getIngredient(item.ingredientId) ? `Cooking: ${esc(ingredientLabel(item.ingredientId))}` : "Not linked for cooking"}</small></div><button class="icononly" data-action="item-edit" data-id="${id}" aria-label="Edit ${esc(item.name)}">${icon("pencil")}</button></div>`;
  }
  function kitchenView() {
    let rows = Object.entries(S.items).filter(
      ([, x]) =>
        (S.storage === "All" || x.storage === S.storage) &&
        (!S.search || x.name.toLowerCase().includes(S.search.toLowerCase())),
    );
    rows.sort((a, b) =>
      S.sort === "name"
        ? a[1].name.localeCompare(b[1].name)
        : S.sort === "quantity"
          ? a[1].qty - b[1].qty
          : (daysLeft(a[1]) ?? Infinity) - (daysLeft(b[1]) ?? Infinity),
    );
    const soon = Object.values(S.items).filter(
      (x) => x.qty > 0 && daysLeft(x) !== null && daysLeft(x) <= 2,
    ).length;
    const markup =
      heading(
        "YOUR KITCHEN",
        Object.keys(S.items).length
          ? "Your real inventory"
          : "Start your inventory",
        `${Object.values(S.items).filter((x) => x.qty > 0).length} ingredients on hand${soon ? ` · ${soon} use soon` : ""}`,
        button("Add ingredient", "item-edit", "new", "btn-primary"),
      ) +
      `<p class="milestone-banner">Milestone 4 · Scan, cook and ask Zara</p><button class="scan-banner" data-action="go" data-id="scan"><img src="images/fridge-vf-480.webp" alt=""><span>${icon("scan")}<b>Scan groceries or receipts</b><small>Protected connection · review before save</small></span>${icon("arrow-right")}</button><section class="card inventory-card"><div class="card-header"><h2>Inventory</h2><button class="icononly" data-action="item-edit" data-id="new" aria-label="Add ingredient">${icon("plus")}</button></div><div class="inventory-tools"><label class="field">Search<input type="search" data-change="search" value="${esc(S.search || "")}" placeholder="Search ingredients"></label><div class="inventory-sort"><label>Storage <select data-change="storage">${options(["All", "Fridge", "Freezer", "Pantry", "Spices"], S.storage)}</select></label><label>Sort <select data-change="sort">${options(["expiry", "name", "quantity"], S.sort)}</select></label></div></div>${rows.length ? rows.map(([id, x]) => itemRow(id, x)).join("") : `<div class="inventory-empty">${icon("refrigerator")}<h3>${Object.keys(S.items).length ? "No ingredients match" : "Your inventory is empty"}</h3><p>${Object.keys(S.items).length ? "Clear search or filters." : "Add first ingredient. Expiry stays optional and never gets invented."}</p>${Object.keys(S.items).length ? "" : button("Add first ingredient", "item-edit", "new", "btn-primary")}</div>`}</section><div class="quick-grid">${[
        ["shopping", "shopping-cart", "Shopping", "Restock list"],
        ["expenses", "wallet", "Spending", "Receipts & budget"],
        ["profile", "gear", "Preferences", "Diet, time & tools"],
      ]
        .map(
          ([r, ic, t, s]) =>
            `<button data-action="go" data-id="${r}">${icon(ic)}<b>${t}</b><small>${s}</small></button>`,
        )
        .join("")}</div>`;
    return markup;
  }
  function scanView() {
    const connected = Boolean(scanConfig.apiUrl && scanConfig.deviceToken);
    return (
      heading(
        "MILESTONE 2",
        "Scan into your kitchen",
        connected
          ? "Choose a source. Every extracted line stays editable until you confirm."
          : "Connect your protected scanner before choosing a photo or receipt.",
      ) +
      `<p class="milestone-banner">Real scans · optional cooking links</p>
      ${connected ? "" : `<section class="notice notice-warning" role="status"><b>Scanner not connected</b><p>Add HTTPS API URL and device access code in Scan connection. No provider key belongs in this app.</p>${button("Connect scanner", "scan-settings", "", "btn-primary")}</section>`}
      <section class="card scan-source-card" aria-labelledby="scan-source-title"><div class="card-header"><div><p class="eyebrow">SOURCE</p><h2 id="scan-source-title">What are you scanning?</h2></div>${button("Connection", "scan-settings", "", "btn-quiet")}</div>
      <div class="scan-source-grid">
        <button data-action="scan-choose" data-id="groceries" ${connected ? "" : "disabled"}>${icon("camera")}<b>Grocery photo</b><small>Camera or gallery</small></button>
        <button data-action="scan-choose" data-id="expiry" ${connected ? "" : "disabled"}>${icon("calendar-blank")}<b>Expiry label</b><small>Camera or image</small></button>
        <button data-action="scan-choose" data-id="receipt-paper" ${connected ? "" : "disabled"}>${icon("receipt")}<b>Paper receipt</b><small>Photo, image or PDF</small></button>
        <button data-action="scan-choose" data-id="receipt-digital" ${connected ? "" : "disabled"}>${icon("upload-simple")}<b>Digital receipt</b><small>Image or PDF file</small></button>
      </div></section>
      <section class="card scan-guardrail"><h2>Review before saving</h2><p class="muted">Unknown quantities, units and dates stay blank. Exclude non-food lines, correct extracted values, then choose whether each line creates or merges an ingredient.</p></section>`
    );
  }
  function servingsFor(r) {
    return Math.max(
      1,
      Math.min(
        12,
        Math.round(S.servings[r.id] || S.profile.household || r.servings),
      ),
    );
  }
  function servingText(count) {
    return `${count} ${count === 1 ? "serving" : "servings"}`;
  }
  function assessment(r, servings = servingsFor(r)) {
    return assessRecipe(S, r, { servings, ingredients: COOK_INGREDIENTS });
  }
  function mealHistory() {
    const meals = S.meals
      .filter((m) => m.cookingSessionId)
      .slice(-5)
      .reverse();
    if (!meals.length) return "";
    return `<section class="card meal-history"><h2>Recent meals</h2>${meals.map((m) => `<div class="item-row"><div><b>${esc(recipe(m.rid).name)}</b><small>${esc(m.date)} · ${m.status === "undone" ? "Stock restored" : "Stock updated"}</small></div>${m.status === "completed" ? button("Undo use", "meal-undo-ask", m.id, "btn-quiet") : `<span class="badge">Undone</span>`}</div>`).join("")}<p class="details">Undo adds back only this meal's recorded use. Later stock changes stay intact.</p></section>`;
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
    const shown = (
      S.matchOnly ? eligible.filter((x) => x.a.stockReady) : eligible
    ).sort(
      (a, b) => a.a.missing.length - b.a.missing.length || a.r.time - b.r.time,
    );
    const unlinked = Object.entries(S.items).filter(
      ([, x]) => x.qty > 0 && !getIngredient(x.ingredientId),
    );
    return (
      heading(
        "USE WHAT YOU HAVE",
        "What can I cook?",
        "Real stock, reviewed units. Prepare first; deduct only after your final confirmation.",
        button("Preferences", "go", "profile"),
      ) +
      (S.cooking
        ? `<section class="card resume-card"><p class="eyebrow">${S.cooking.phase === "prep" ? "PREPARATION SAVED" : S.cooking.phase === "review" ? "READY TO REVIEW" : "COOKING IN PROGRESS"}</p><h2>${esc(S.cooking.recipeName || recipe(S.cooking.rid).name)}</h2><p>${servingText(S.cooking.servings)} · stock unchanged</p>${button("Resume cooking", "cook-resume", "", "btn-primary")}</section>`
        : "") +
      (unlinked.length
        ? `<section class="notice cook-link-notice"><b>${unlinked.length} item${unlinked.length === 1 ? " needs" : "s need"} a cooking link</b><p>Choose what each product is. Names alone never authorize a stock deduction.</p>${button("Link ingredients", "cook-link-next", unlinked[0][0])}</section>`
        : "") +
      `<div class="cook-filters"><label class="field">Recipe time<select data-change="cook-time">${[
        ...new Set([15, 20, 30, 45, 60, 120, 1440, S.profile.time]),
      ]
        .sort((a, b) => a - b)
        .map(
          (n) =>
            `<option value="${n}"${n === S.profile.time ? " selected" : ""}>${n === 1440 ? "Any duration" : `Up to ${n} minutes`}</option>`,
        )
        .join(
          "",
        )}</select></label><label class="checkbox-field"><input type="checkbox" data-change="match"${S.matchOnly ? " checked" : ""}>Ingredients I have</label></div><p class="details">${shown.length} of ${D.recipes.length} recipes · ${esc(S.profile.cuisine)} cuisine. Exclusions hide matching allergens; always check product labels.</p><div class="recipe-grid">${shown.map(({ r, a }) => `<article class="recipe-card${r.image ? "" : " recipe-no-photo"}">${r.image ? `<img src="${r.cardImage || r.image}" alt="${esc(r.name)}" loading="lazy" decoding="async" width="560" height="420">` : `<span class="recipe-art" aria-hidden="true">${icon("fork-knife")}</span>`}<div><span class="badge ${a.stockReady ? "badge-demo" : "badge-planned"}">${a.stockReady ? "INGREDIENTS READY" : "MISSING " + a.missing.length}</span><h2>${esc(r.name)}</h2><p>${r.time} min · ${esc(r.cuisine)} · ${servingText(servingsFor(r))}</p>${button("View recipe", "recipe", r.id, "btn-primary")}</div></article>`).join("") || '<p class="empty">No match for these filters. Turn off ingredients-only, choose a longer time, or adjust preferences.</p>'}</div>` +
      mealHistory()
    );
  }
  function recipeView() {
    const r = recipe(S.recipe),
      serv = servingsFor(r),
      a = assessment(r);
    return (
      heading(
        "RECIPE",
        r.name,
        `${r.time} min · ${esc(r.cuisine)} · ${r.difficulty}`,
        button("Back to recipes", "go", "cook"),
      ) +
      (r.image
        ? `<article class="featured-meal"><img src="${r.image}" alt="${esc(r.name)}"></article>`
        : "") +
      `<section class="card"><div class="card-header"><h2>Ingredients</h2><label>Servings <select data-change="servings" data-id="${r.id}">${options(
        Array.from({ length: 12 }, (_, i) => i + 1),
        serv,
      )}</select></label></div>${a.requirements.map((x) => `<div class="item-row"><div><b>${esc(x.name)}</b><small>${num(x.qty)} ${esc(x.unit)} needed · ${x.missing ? `${num(x.missing)} missing` : "Covered by linked stock"}</small></div>${icon(x.missing ? "shopping-cart" : "check-circle")}</div>`).join("")}${a.blockedItems.length ? '<p class="notice">Items past their recorded date were excluded from this plan.</p>' : ""}${a.incompatibleItems.length ? `<section class="notice"><b>Some units need review</b><p>Mass, volume and count are different. Enter a measured grams-per-unit value or correct stock units in Kitchen.</p>${a.incompatibleItems.map((x) => button(`Review ${x.name}`, "item-edit", x.id, "btn-quiet")).join("")}</section>` : ""}${a.excluded.length ? `<p class="notice notice-warning">Matches your exclusions: ${esc(a.excluded.map(toolLabel).join(", "))}. Choose another recipe.</p>` : ""}${S.cooking ? `<p class="notice">Finish or cancel your current session before starting another.</p>${button("Resume current session", "cook-resume")}` : a.stockReady && !a.excluded.length ? button("Prepare ingredients", "cook-start", r.id, "btn-primary") : `${button("Add missing to shopping", "shopping-missing", r.id)}${button("Review inventory links", "go", "kitchen")}`}</section><section class="card"><h2>Before you start</h2><p>${r.prepMinutes} min preparation · ${r.cookMinutes} min cooking</p><p class="details">Tools: ${esc(r.requiredTools.map(toolLabel).join(", "))}. Confirm these during preparation.</p><p class="details">Listed allergens: ${esc(r.allergens.map(toolLabel).join(", ") || "none listed")}. Check actual product labels and preparation conditions.</p></section>`
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
    if (c.phase === "prep") return preparationView();
    if (c.phase === "review") return reviewView();
    const step = r.steps[c.step],
      seconds = timerSeconds();
    return (
      heading(
        `${r.name} · STEP ${c.step + 1} OF ${r.steps.length}`,
        step.title,
        step.text,
        button("Recipes", "go", "cook"),
      ) +
      `<section class="card cooking-progress"><div class="step-dots" aria-label="Step ${c.step + 1} of ${r.steps.length}">${r.steps.map((_, i) => `<span class="${i <= c.step ? "is-done" : ""}"></span>`).join("")}</div><p>${servingText(c.servings)} · planned amounts frozen at preparation</p></section><section class="card timer-card"><p class="eyebrow">YOUR COOKING TIMER</p><h2 data-timer role="timer" aria-label="Cooking timer">${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}</h2><form data-form="cook-timer"><div class="field-grid">${field("Timer minutes", "minutes", Math.max(1, Math.ceil(seconds / 60)), "number", 'min="1" max="180" step="1" required')}<button class="btn btn-secondary">Set timer</button></div></form><div class="actions">${button(c.running ? "Pause timer" : "Start timer", "timer-wall")}${c.step ? button("Previous step", "cook-prev") : ""}</div><p class="details">Timer resumes from its saved deadline. Check food doneness yourself; this timer does not verify safety.</p></section><div class="cook-primary-action">${button(c.step === r.steps.length - 1 ? "Review ingredients used" : "Next step", "cook-next", r.id, "btn-primary")}${button("Ask Zara about this step", "go", "assistant")}${button("Cancel session", "cook-cancel-ask", "", "btn-quiet")}</div>`
    );
  }
  function preparationView() {
    const c = S.cooking,
      r = recipe(c?.rid);
    if (!c) return cookView();
    return (
      heading(
        "GET EVERYTHING READY",
        r.name,
        `${servingText(c.servings)} · stock stays unchanged until final review`,
        button("Recipes", "go", "cook"),
      ) +
      `<form data-form="cook-prep" class="card">${errors()}<h2>Gather and measure</h2><p class="muted">Check each ingredient after measuring. Stock is allocated from the earliest recorded dates first.</p>${c.requirements.map((x) => `<label class="checkbox-field prep-item"><input type="checkbox" name="prepared" value="${esc(x.ingredientId)}"${c.prepared.includes(x.ingredientId) ? " checked" : ""} required><span><b>${esc(ingredientLabel(x.ingredientId))}</b><small>${num(x.qty)} ${esc(x.unit)}</small></span></label>`).join("")}<h2>Tools ready?</h2><p>${esc(r.requiredTools.map(toolLabel).join(", "))}</p><label class="checkbox-field"><input type="checkbox" name="toolsConfirmed"${c.toolsConfirmed ? " checked" : ""} required><span>I have these tools ready.</span></label><p class="details">Confirming records these tools as available. Ingredient links and measured conversions determine this plan; no weights are guessed.</p><button class="btn btn-primary">Start cooking</button>${button("Cancel preparation", "cook-cancel-ask", "", "btn-quiet")}</form>`
    );
  }
  function reviewView() {
    const c = S.cooking,
      r = recipe(c?.rid);
    if (!c) return cookView();
    if (c.phase !== "review") return cookingView();
    return (
      heading(
        "CONFIRM USE",
        "Update your kitchen",
        `${r.name} · ${servingText(c.servings)}. Change the planned quantities to what you actually used.`,
      ) +
      `<form data-form="meal" class="card">${errors()}<p class="notice">Nothing deducted yet. Enter zero for an item you did not use.</p>${c.allocations.map((x) => `<div class="cook-use-row">${field(`${x.name} used (${x.unit})`, `used-${x.id}`, x.qty, "number", `min="0" max="${S.items[x.id]?.qty ?? 0}" step="any" inputmode="decimal" required`)}<small>${num(S.items[x.id]?.qty ?? 0)} ${esc(x.unit)} currently on hand${S.items[x.id] ? "" : " · item was removed"}</small></div>`).join("")}<label class="checkbox-field"><input type="checkbox" name="confirmed" required><span>I checked actual use against current stock.</span></label><button class="btn btn-primary">Save meal and deduct once</button>${button("Back to last step", "cook-back")}${button("Cancel without deduction", "cook-cancel-ask", "", "btn-quiet")}<p class="details">A successful save updates every ingredient together. Undo is available in Recent meals.</p></form>`
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
      `<section class="card">${S.shopping.length ? S.shopping.map((x) => `<div class="item-row"><label class="checkbox-field"><input type="checkbox" data-change="shopping-check" data-id="${x.id}"${x.got ? " checked" : ""}><span><b>${esc(S.items[x.id]?.name || ingredientLabel(x.id))}</b><small>${esc(x.reason)}</small></span></label>${button("Remove", "shopping-remove", x.id, "btn-quiet")}</div>`).join("") : '<p class="empty">Nothing to buy yet.</p>'}</section>`
    );
  }
  function expensesView() {
    const totals = S.receipts.reduce((byCurrency, receipt) => {
      if (
        receipt.source !== "scan" ||
        receipt.financeExcluded ||
        !receipt.currency
      )
        return byCurrency;
      byCurrency[receipt.currency] =
        (byCurrency[receipt.currency] || 0) + (receipt.totalMinor || 0);
      return byCurrency;
    }, {});
    const sarTotal = totals.SAR || 0;
    return (
      heading(
        "KITCHEN UTILITY",
        "Grocery spending",
        "Confirmed receipt totals, kept separate by currency.",
        button("Back to kitchen", "go", "kitchen"),
      ) +
      `<section class="card spend-hero"><small>CONFIRMED SCANS</small>${
        Object.keys(totals).length
          ? Object.entries(totals)
              .map(
                ([currency, total]) =>
                  `<h2>${currencyDigits(currency) === null ? `${esc(currency)} · unsupported currency` : esc(formatMoneyMinor(total, currency))}</h2>`,
              )
              .join("")
          : "<h2>No spending yet</h2>"
      }<p>${money(Math.max(0, S.budget - sarTotal))} left of ${money(S.budget)} SAR budget</p><form data-form="budget">${errors()}${field("Monthly budget (SAR)", "budget", (S.budget / 100).toFixed(2), "number", 'min="1" max="1000000" step="0.01" required')}<button class="btn btn-secondary">Update budget</button></form></section><div class="receipt-shortcuts"><button data-action="go" data-id="scan">${icon("camera")}Scan paper receipt</button><button data-action="go" data-id="scan">${icon("upload-simple")}Import digital receipt</button></div><section class="card purchase-history">${
        S.receipts
          .filter((r) => r.source === "scan")
          .map(
            (r) =>
              `<div class="item-row"><div><b>${esc(r.name)}</b><small>${r.lines.length} reviewed items${r.financeExcluded ? " · spending excluded" : ""}</small></div><strong>${r.financeExcluded || !r.currency || currencyDigits(r.currency) === null ? "—" : esc(formatMoneyMinor(r.totalMinor, r.currency))}</strong></div>`,
          )
          .join("") || '<p class="empty">No scanned receipts saved.</p>'
      }</section>`
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
      `<form class="card" data-form="profile">${errors()}<label class="field">Cuisine<select name="cuisine">${options([...new Set(["Any", ...D.recipes.map((r) => r.cuisine), S.profile.cuisine])], S.profile.cuisine)}</select></label>${field("Maximum cooking time (minutes)", "time", S.profile.time, "number", 'min="1" max="1440" required')}${field("Household servings", "household", S.profile.household, "number", 'min="1" max="12" required')}<fieldset><legend>Exclude listed allergens</legend>${[
        ...new Set(COOK_INGREDIENTS.flatMap((x) => x.dietary.allergenTags)),
      ]
        .sort()
        .map(
          (x) =>
            `<label class="checkbox-field"><input type="checkbox" name="allergy" value="${x}"${S.profile.allergies.includes(x) ? " checked" : ""}>${esc(toolLabel(x))}</label>`,
        )
        .join(
          "",
        )}<p class="details">Filters use catalog ingredients, not verified product labels. Review packaged ingredients and preparation conditions yourself.</p></fieldset><fieldset><legend>Available tools</legend>${D.tools.map((x) => `<label class="checkbox-field"><input type="checkbox" name="tool" value="${x.id}"${S.tools[x.id] ? " checked" : ""}>${esc(x.name)}</label>`).join("")}</fieldset><button class="btn btn-primary">Save preferences</button></form>`
    );
  }
  function assistantView() {
    const inventory = Object.values(S.items),
      connected = Boolean(scanConfig.apiUrl && scanConfig.deviceToken);
    const back = S.cooking
      ? S.cooking.phase === "review"
        ? "review"
        : S.cooking.phase === "prep"
          ? "recipe"
          : "cooking"
      : "";
    return (
      heading(
        "LIVE ASSISTANT",
        "Zara",
        "Kitchen advice powered by Gemini. Review advice before acting.",
      ) +
      (back
        ? `<section class="card"><b>${esc(recipe(S.cooking.rid).name)} · ${esc(S.cooking.phase)}</b><p>Advice only during an active session. For substitutions, cancel and replan preparation.</p>${button("Back to current session", "cook-resume")}</section>`
        : "") +
      `<section class="card"><h2>Connection</h2><p>${connected ? "Connection saved · Gemini" : "Connection needed"}</p>${button("Scan connection", "scan-settings")}<p class="details">On Send, inventory, current recipe, preferences, tools and the latest six exchanges go to Gemini through your paired server. Conversation stays on this device; backups include saved conversation. No microphone is used.</p><p>${inventory.filter((x) => x.qty > 0).length} stocked items · ${inventory.filter((x) => !x.ingredientId).length} unlinked items${S.cooking ? ` · step ${S.cooking.step + 1}` : " · no active cooking session"}</p></section>
      <section class="card"><h2>Ask Zara</h2><div class="actions">${["What can I cook?", "Help with the current step", "What can I substitute?", "What should I use soon?"].map((q, i) => button(q, "assistant-suggestion", String(i), "btn-quiet")).join("")}</div><form data-form="assistant" aria-busy="${Boolean(assistantAbort)}"><label for="assistant-question">Question</label><textarea id="assistant-question" name="question" maxlength="2000" rows="3" required aria-describedby="assistant-status"${assistantAbort ? " readonly" : ""}>${esc(assistantDraft)}</textarea><p id="assistant-status" role="status" aria-live="polite">${esc(assistantAbort ? "Sending kitchen context…" : assistantError || "Send only when ready to share context.")}</p><div class="actions"><button class="btn btn-primary"${assistantAbort || !connected ? " disabled" : ""}>${assistantError ? "Retry question" : "Send question"}</button>${assistantAbort ? button("Cancel request", "assistant-cancel") : ""}</div></form>
      ${assistantReply ? `<section class="assistant-live"><h3>Live Gemini reply</h3><p class="assistant-answer">${esc(assistantReply.answer)}</p>${assistantReply.warnings.map((x) => `<p class="notice notice-warning">${esc(x)}</p>`).join("")}${assistantReply.proposals.map((x, i) => `<article class="card assistant-proposal"><h3>${esc(x.type === "set_quantity" ? S.items[x.itemId]?.name : recipe(x.recipeId).name)}</h3><p>${esc(x.reason)}</p>${button("Review proposed change", "assistant-review", String(i))}</article>`).join("")}</section>` : ""}
      ${S.chat
        .filter(
          (x) =>
            !assistantReply ||
            x.a !== assistantReply.answer ||
            x !== S.chat.at(-1),
        )
        .slice(-20)
        .reverse()
        .map(
          (x) =>
            `<article class="chat-bubble"><small>${liveChats.has(x) ? "Live Gemini exchange" : "Saved conversation"}</small><h3>${esc(x.q)}</h3><p class="assistant-answer">${esc(x.a)}</p></article>`,
        )
        .join(
          "",
        )}${S.chat.length ? button("Clear conversation", "assistant-clear", "", "btn-quiet") : ""}</section>`
    );
  }
  async function sendAssistant(question) {
    if (assistantAbort) return;
    assistantDraft = question.trim();
    const sentQuestion = assistantDraft;
    assistantError = "";
    assistantReply = null;
    assistantReview = null;
    try {
      assistantContext = buildAssistantContext(S);
    } catch {
      assistantError =
        "Kitchen context could not be prepared. Review saved inventory and preferences.";
      render();
      return;
    }
    const context = assistantContext,
      epoch = ++assistantEpoch,
      controller = new AbortController();
    assistantAbort = controller;
    render();
    try {
      const reply = await requestAssistantReply({
        config: scanConfig,
        question: sentQuestion,
        history: S.chat,
        context,
        signal: controller.signal,
      });
      if (
        epoch !== assistantEpoch ||
        JSON.stringify(buildAssistantContext(S)) !== JSON.stringify(context)
      )
        return;
      assistantAbort = null;
      assistantReply = reply;
      const entry = { q: sentQuestion, a: reply.answer };
      if (
        await commit(() => {
          S.chat = [...S.chat, entry].slice(-20);
        }, "Zara replied.")
      ) {
        liveChats.add(entry);
        assistantDraft = "";
        assistantReply = reply;
        assistantContext = context;
      }
    } catch (error) {
      if (epoch === assistantEpoch) {
        assistantAbort = null;
        assistantError = error.message;
      }
    } finally {
      if (epoch === assistantEpoch || !assistantAbort) {
        assistantAbort = null;
        render();
      }
    }
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
    view.innerHTML = `${storageError ? `<section class="notice notice-warning recovery-notice" role="alert"><b>Storage error</b><p>${esc(storageError)}</p></section>` : ""}${recoveryRequired ? `<section class="notice notice-warning recovery-notice" role="alert"><b>Stored data needs recovery.</b><p>${esc(loadResult.notice || "Import a valid backup or explicitly clear local data. Current data will not be overwritten automatically.")}</p></section>` : ""}${(screens[S.route] || kitchenView)()}`;
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
            unit: "count",
            storage: "Fridge",
            expiry: null,
            expiryProvenance: null,
          }
        : S.items[id];
    openModal(
      id === "new" ? "Add ingredient" : "Edit ingredient",
      `<form data-form="item" data-id="${id}">${errors()}${field("Ingredient name", "name", item.name, "text", 'maxlength="200" required')}${field("Quantity on hand", "qty", item.qty, "number", 'min="0" max="1000000000" step="any" inputmode="decimal" required')}<label class="field">Unit<select name="unit">${options(["g", "kg", "ml", "l", "count", "pieces", "bunches", "slices", "cloves"], item.unit)}</select></label><div class="cook-link-fields">${renderIngredientLinkFields({ name: item.name, ingredientId: item.ingredientId, unit: item.unit, gramsPerUnit: item.gramsPerUnit })}</div><label class="field">Location<select name="storage">${options(["Fridge", "Freezer", "Pantry", "Spices"], item.storage)}</select></label>${field("Expiry (optional)", "expiry", item.expiry || "", "date")}<label class="field">Expiry source<select name="expiryProvenance">${options(["user", "printed", "estimated"], item.expiryProvenance || (item.estimated ? "estimated" : "user"))}</select><small>Used only when expiry is entered.</small></label><div class="modal-actions">${id === "new" ? "" : button("Delete ingredient", "item-delete", id, "btn-quiet")}<button class="btn btn-primary">Save ingredient</button></div></form>`,
    );
  }
  async function exportBackup() {
    try {
      await saveQueue;
      const text = store.exportBackup(S),
        fileName = `nomli-backup-${new Date().toISOString().slice(0, 10)}.json`;
      if (window.NomliNative?.isNative) {
        const result = await window.NomliNative.exportBackup(text, fileName);
        if (result?.cancelled) return;
      } else {
        const url = URL.createObjectURL(
          new Blob([text], { type: "application/json" }),
        );
        const link = Object.assign(document.createElement("a"), {
          href: url,
          download: fileName,
        });
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 0);
      }
      announce("Backup exported.");
    } catch (error) {
      announce(`Export failed: ${error?.message || "unknown error"}`);
    }
  }
  async function chooseBackupText() {
    if (window.NomliNative?.isNative) {
      const result = await window.NomliNative.importBackup();
      return result?.cancelled ? null : result?.text;
    }
    return new Promise((resolve) => {
      const input = Object.assign(document.createElement("input"), {
        type: "file",
        accept: "application/json,.json",
      });
      let settled = false;
      const settle = (value) => {
        if (!settled) {
          settled = true;
          resolve(value);
        }
      };
      input.addEventListener(
        "change",
        async () => {
          try {
            const file = input.files?.[0];
            if (!file) return settle(null);
            if (file.size > 1024 * 1024)
              throw new Error("Backup exceeds the 1 MiB limit.");
            settle(await file.text());
          } catch (error) {
            settle(Promise.reject(error));
          }
        },
        { once: true },
      );
      window.addEventListener(
        "focus",
        () =>
          setTimeout(() => {
            if (!input.files?.length) settle(null);
          }, 300),
        { once: true },
      );
      input.click();
    });
  }
  async function importBackup() {
    try {
      const text = await chooseBackupText();
      if (text == null) return;
      const candidate = store.parseBackup(text);
      importCandidate = candidate;
      openModal(
        "Preview backup",
        `<form data-form="backup"><p>This will replace current local data with <b>${Object.keys(candidate.items).length} ingredients</b>, ${candidate.shopping.length} shopping entries and ${candidate.receipts.length} receipts.</p>${errors()}${field("Type REPLACE to confirm", "confirmation", "", "text", 'autocomplete="off" required pattern="REPLACE"')}<button class="btn btn-primary">Replace local data</button></form><p class="details">Nothing changes until explicit confirmation.</p>`,
      );
    } catch (error) {
      announce(`Import rejected: ${error?.message || "invalid backup"}`);
    }
  }
  function scanConnectionForm() {
    const suggestedApiUrl =
      scanConfig.apiUrl ||
      "https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev";
    openModal(
      "Scan connection",
      `<form data-form="scan-config">${errors()}${field("HTTPS API URL", "apiUrl", suggestedApiUrl, "url", 'placeholder="https://scanner.example.com" autocomplete="url" required')}${field("Device access code", "deviceToken", scanConfig.deviceToken || "", "password", 'autocomplete="off" minlength="32" maxlength="512" required')}<p class="details">Stored separately on this device. Excluded from Nomli backups and source code. Use a device code, never a provider API key.</p><div class="form-actions">${window.NomliNative?.isNative ? '<button type="button" class="btn btn-secondary" data-action="scan-setup-qr">Scan setup QR</button>' : ""}<button type="button" class="btn btn-secondary" data-action="scan-test">Test connection</button><button class="btn btn-primary">Save connection</button></div><p class="scan-connection-status" data-connection-status role="status" aria-live="polite"></p></form>`,
    );
  }
  function scanSourceDialog(source) {
    const digital = source === "receipt-digital";
    const receipt = source.startsWith("receipt");
    openModal(
      digital ? "Choose digital receipt" : "Choose scan source",
      `<p>${digital ? "Select a receipt image or PDF." : "Use device camera/gallery, or select a file."}</p><div class="scan-choice-actions">${!digital && window.NomliNative?.isNative ? button("Camera or gallery", "scan-native", source, "btn-primary") : ""}${button(digital ? "Choose receipt file" : "Choose file", "scan-browser", source, !digital && window.NomliNative?.isNative ? "btn-secondary" : "btn-primary")}</div><p class="details">${receipt ? "Accepted: JPEG, PNG, WebP (4 MiB) or PDF (2 MiB)." : "Accepted: JPEG, PNG or WebP up to 4 MiB."}</p>`,
    );
  }
  function chooseScanFile(source) {
    return new Promise((resolve) => {
      const receipt = source.startsWith("receipt");
      const input = Object.assign(document.createElement("input"), {
        type: "file",
        accept: receipt
          ? "image/jpeg,image/png,image/webp,application/pdf,.pdf"
          : "image/jpeg,image/png,image/webp",
      });
      input.addEventListener(
        "change",
        () => resolve(input.files?.[0] || null),
        { once: true },
      );
      input.click();
    });
  }
  function assertScanFile(file, receipt) {
    if (!file) throw new Error("No file selected.");
    if (file.size <= 0) throw new Error("Selected file is empty.");
    const maxBytes =
      file.type === "application/pdf" ? 2 * 1024 * 1024 : 4 * 1024 * 1024;
    if (file.size > maxBytes)
      throw new Error(
        file.type === "application/pdf"
          ? "PDF exceeds the 2 MiB limit."
          : "Image exceeds the 4 MiB limit.",
      );
    const allowed = receipt
      ? ["image/jpeg", "image/png", "image/webp", "application/pdf"]
      : ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(file.type))
      throw new Error(
        receipt
          ? "Choose a JPEG, PNG, WebP or PDF."
          : "Choose a JPEG, PNG or WebP image.",
      );
  }
  async function runScan(source, payload) {
    const kind =
      source === "expiry"
        ? "expiry"
        : source.startsWith("receipt")
          ? "receipt"
          : "groceries";
    scanAbort?.abort();
    openModal(
      "Reading scan",
      `<section class="scan-live" aria-busy="true"><span class="scan-spinner" aria-hidden="true">${icon("circle-notch")}</span><h3>Securely reading ${kind === "receipt" ? "receipt" : kind === "expiry" ? "label" : "groceries"}</h3><p class="muted">Uploading to your configured scanner. You can cancel safely.</p><button class="btn btn-secondary" data-action="scan-cancel">Cancel</button></section>`,
    );
    const controller = new AbortController();
    const ownerEpoch = ++scanEpoch;
    scanAbort = controller;
    try {
      const raw = await scanFile({
        ...payload,
        kind,
        config: scanConfig,
        signal: controller.signal,
      });
      if (
        controller.signal.aborted ||
        scanAbort !== controller ||
        scanEpoch !== ownerEpoch
      )
        return;
      scanDraft = reviewScanDraft(raw, {
        catalog: Object.entries(S.items).map(([id, item]) => ({ id, ...item })),
      });
      showScanReview();
    } catch (error) {
      if (
        error?.name === "AbortError" ||
        controller.signal.aborted ||
        scanAbort !== controller ||
        scanEpoch !== ownerEpoch
      )
        return;
      openModal(
        "Scan could not finish",
        `<section class="notice notice-warning" role="alert"><b>Nothing was changed</b><p>${esc(error?.message || "Scanner request failed.")}</p></section><div class="form-actions">${button("Try another source", "go", "scan", "btn-primary")}${button("Connection", "scan-settings", "", "btn-secondary")}</div>`,
      );
    } finally {
      if (scanAbort === controller) scanAbort = null;
    }
  }
  function showScanReview() {
    const draft = scanDraft;
    if (!draft) return;
    const currency = draft.currency || "Not provided";
    const moneyDigits = currencyDigits(draft.currency);
    const amountStep =
      moneyDigits === 0 ? "1" : moneyDigits === 3 ? "0.001" : "0.01";
    const moneyCurrencies = [
      "",
      "SAR",
      "AED",
      "EGP",
      "USD",
      "EUR",
      "GBP",
      "JOD",
      "KWD",
      "BHD",
      "OMR",
      "QAR",
      "JPY",
    ];
    if (draft.currency && !moneyCurrencies.includes(draft.currency))
      moneyCurrencies.push(draft.currency);
    const lines = draft.lines
      .map((line, index) => {
        const match =
          line.ingredientId && S.items[line.ingredientId]
            ? line.ingredientId
            : "";
        if (draft.kind === "expiry")
          return `<fieldset class="scan-line" data-line-id="${esc(line.lineId)}"><legend>Label ${index + 1}</legend><label class="checkbox-field scan-include"><input type="checkbox" name="include-${esc(line.lineId)}" checked><span>Include expiry update</span></label>${field("Detected item", `name-${line.lineId}`, line.name || "", "text", 'maxlength="200" required')}${field("Printed expiry", `expiry-${line.lineId}`, line.expiry || "", "date", "required")}<label class="field">Apply to existing ingredient<select name="target-${esc(line.lineId)}" required><option value="">Choose ingredient</option>${Object.entries(
            S.items,
          )
            .map(
              ([id, item]) =>
                `<option value="${esc(id)}"${id === match ? " selected" : ""}>${esc(item.name)}</option>`,
            )
            .join(
              "",
            )}</select></label>${line.warnings?.length ? `<p class="scan-line-warning">${esc(line.warnings.join(" "))}</p>` : ""}</fieldset>`;
        return `<fieldset class="scan-line" data-line-id="${esc(line.lineId)}"><legend>Line ${index + 1}</legend><label class="checkbox-field scan-include"><input type="checkbox" name="include-${esc(line.lineId)}" checked><span>Include food item</span></label>${field("Name", `name-${line.lineId}`, line.name || "", "text", 'maxlength="200" required')}
      <div class="field-grid">${field("Quantity", `quantity-${line.lineId}`, line.quantity ?? "", "number", 'min="0" max="1000000000" step="any" inputmode="decimal" required')}<label class="field">Unit<select name="unit-${esc(line.lineId)}" required><option value="">Choose unit</option>${["g", "kg", "ml", "l", "count", "pieces", "bunches", "cloves", "slices"].map((unit) => `<option value="${unit}"${unit === line.unit ? " selected" : ""}>${unit}</option>`).join("")}</select></label></div>
      <div class="cook-link-fields">${renderIngredientLinkFields({ prefix: `cook-${line.lineId}-`, name: line.name, unit: line.unit })}</div>
        <div class="field-grid"><label class="field">Location<select name="storage-${esc(line.lineId)}" required><option value="">Choose location</option>${options(["Fridge", "Freezer", "Pantry", "Spices"], line.storage || "")}</select></label>${field("Expiry (optional)", `expiry-${line.lineId}`, line.expiry || "", "date")}</div>
      <div class="field-grid">${field(`Line cost (${draft.currency || "choose currency"}, optional)`, `cost-${line.lineId}`, line.lineTotalMinor == null || moneyDigits === null ? "" : formatMinorInput(line.lineTotalMinor, draft.currency), "number", `min="0" step="${amountStep}" inputmode="decimal" data-scan-money`)}<label class="field">Inventory action<select name="target-${esc(line.lineId)}"><option value="">Create new item</option>${Object.entries(
        S.items,
      )
        .map(
          ([id, item]) =>
            `<option value="${esc(id)}"${id === match ? " selected" : ""}>Merge into ${esc(item.name)}</option>`,
        )
        .join(
          "",
        )}</select></label></div>${line.warnings?.length ? `<p class="scan-line-warning">${esc(line.warnings.join(" "))}</p>` : ""}</fieldset>`;
      })
      .join("");
    openModal(
      "Review scan",
      `<form data-form="scan-import" data-money-currency="${esc(draft.currency || "")}">${errors()}<div class="scan-result-meta"><span><b>${draft.lines.length}</b> extracted lines</span><span><b>${esc(currency)}</b> currency</span>${draft.merchant ? `<span><b>${esc(draft.merchant)}</b> merchant</span>` : ""}</div>${draft.kind === "receipt" ? `<fieldset class="scan-receipt-meta"><legend>Receipt details</legend><div class="field-grid">${field("Merchant / source", "scanMerchant", draft.merchant || "", "text", 'maxlength="200"')}${field("Receipt date (optional)", "scanReceiptDate", draft.receiptDate || "", "date")}</div><div class="field-grid"><label class="field">Currency<select name="scanCurrency">${moneyCurrencies.map((code) => `<option value="${code}"${code === (draft.currency || "") ? " selected" : ""}>${code || "Choose currency"}</option>`).join("")}</select></label>${field(`Receipt total (${draft.currency || "choose currency"})`, "scanTotal", draft.totalMinor == null || moneyDigits === null ? "" : formatMinorInput(draft.totalMinor, draft.currency), "number", `min="0" step="${amountStep}" inputmode="decimal" data-scan-money`)}</div><div class="field-grid">${field(`Additional tax (${draft.currency || "choose currency"})`, "scanTax", draft.taxMinor == null || moneyDigits === null ? "" : formatMinorInput(draft.taxMinor, draft.currency), "number", `min="0" step="${amountStep}" inputmode="decimal" data-scan-money`)}${field(`Receipt-level discount (${draft.currency || "choose currency"})`, "scanDiscount", draft.discountMinor == null || moneyDigits === null ? "" : formatMinorInput(draft.discountMinor, draft.currency), "number", `min="0" step="${amountStep}" inputmode="decimal" data-scan-money`)}</div><p class="details">Enter only tax added after line prices. Leave tax at zero when VAT is already included. Discount is subtracted from the line subtotal.</p>${moneyDigits === null && draft.currency ? '<p class="scan-line-warning">Unsupported currency. Choose a supported currency and re-enter all monetary amounts.</p>' : ""}<p class="scan-money-warning" data-money-warning role="status"></p><label class="checkbox-field"><input type="checkbox" name="excludeFinance"><span>Save inventory only; exclude this receipt from spending</span></label><p class="details">Choose this when excluding receipt lines or when currency and totals are incomplete or do not match.</p></fieldset>` : ""}${draft.warnings?.length ? `<section class="notice notice-warning"><b>Review needed</b><p>${esc(draft.warnings.join(" "))}</p></section>` : ""}<div class="scan-lines">${lines || '<p class="empty">Scanner returned no food lines.</p>'}</div><label class="checkbox-field scan-confirm"><input type="checkbox" name="confirmed" required><span>I checked every included line and chose create or merge.</span></label><button class="btn btn-primary" ${draft.lines.length ? "" : "disabled"}>Add reviewed items</button><p class="details">One confirmed save updates inventory${draft.kind === "receipt" ? " and receipt spending unless you explicitly exclude finance" : ""}. Cancel leaves both unchanged.</p></form>`,
      "scan-review",
    );
  }
  function startTimer() {
    clearInterval(timerHandle);
    timerHandle = setInterval(() => {
      if (!S.cooking?.running) return;
      const seconds = timerSeconds();
      S.cooking.seconds = seconds;
      if (seconds === 0) {
        S.cooking.running = false;
        S.cooking.deadline = null;
        cancelCookingNotification();
        clearInterval(timerHandle);
        backgroundSave();
        announce("Timer finished.");
      }
      const el = $("[data-timer]");
      if (el)
        el.textContent = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
    }, 500);
  }

  document.addEventListener(
    "click",
    async (event) => {
      const el = event.target.closest("[data-action]");
      if (!el) return;
      const action = el.dataset.action;
      if (action !== "timer-wall") return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (operationBusy || !S.cooking || S.cooking.phase !== "cooking") return;
      const oldSession = S.cooking;
      const wasRunning = oldSession.running;
      const seconds = wasRunning
        ? timerSeconds()
        : oldSession.seconds > 0
          ? oldSession.seconds
          : 120;
      if (
        !(await commit(() => {
          S.cooking = {
            ...S.cooking,
            seconds,
            running: !wasRunning,
            deadline: wasRunning ? null : Date.now() + seconds * 1000,
            notificationId: null,
            notificationGeneration:
              (oldSession.notificationGeneration || 0) + 1,
          };
        }, ""))
      )
        return;
      // Settle permission/scheduling before another action can replace this session.
      setBusy(true);
      try {
        const retired = await retireCookingNotification(oldSession);
        if (retired && S.cooking?.running)
          await timerNotifications.schedule(S.cooking, seconds);
      } catch {
        announce(
          "Device notifications unavailable. Keep Nomli open to see the timer alert.",
        );
      } finally {
        setBusy(false);
        render();
      }
    },
    true,
  );

  document.addEventListener("input", (event) => {
    if (event.target.id === "assistant-question")
      assistantDraft = event.target.value;
  });
  document.addEventListener(
    "submit",
    async (event) => {
      const form = event.target.closest('form[data-form="assistant-apply"]');
      if (!form) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (!form.checkValidity()) return form.reportValidity();
      const review = assistantReview;
      if (
        await commit(() => {
          S = applyAssistantProposal(S, review, { confirmed: true });
        }, "Proposed change saved.")
      ) {
        closeModal();
        render();
      } else {
        assistantReview = review;
        assistantContext = review?.context ?? null;
        formError(
          form,
          "Change was not saved. Retry if current stock is unchanged, or cancel and send again.",
        );
      }
    },
    true,
  );
  document.addEventListener(
    "submit",
    async (event) => {
      const form = event.target.closest("form[data-form]");
      if (!form) return;
      const kind = form.dataset.form;
      if (
        !["assistant", "budget", "meal", "cook-prep", "cook-timer"].includes(
          kind,
        )
      )
        return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (operationBusy) return;
      if (!form.checkValidity())
        return formError(form, "Review required fields before saving.");
      const fd = new FormData(form);
      if (kind === "cook-prep") {
        const c = S.cooking;
        if (!c || c.phase !== "prep")
          return formError(form, "Preparation session expired.");
        const prepared = [...new Set(fd.getAll("prepared"))];
        if (
          !fd.has("toolsConfirmed") ||
          c.requirements.some((x) => !prepared.includes(x.ingredientId))
        )
          return formError(
            form,
            "Gather each ingredient and confirm your tools first.",
          );
        const changed = c.allocations.some((x) => {
          const live = S.items[x.id];
          const today = new Date();
          const localDay = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
          return (
            !live ||
            (live.expiry && live.expiry < localDay) ||
            live.ingredientId !== x.ingredientId ||
            normalizeCookUnit(live.unit) !== normalizeCookUnit(x.unit) ||
            (live.gramsPerUnit || null) !== x.gramsPerUnit ||
            live.qty < x.qty
          );
        });
        if (changed || assessment(recipe(c.rid), c.servings).excluded.length)
          return formError(
            form,
            "Stock, units or exclusions changed. Cancel this plan, review inventory and prepare again.",
          );
        if (
          await commit(() => {
            if (S.cooking?.id !== c.id)
              throw new Error("Preparation session expired.");
            S.cooking = {
              ...S.cooking,
              prepared,
              toolsConfirmed: true,
              phase: "cooking",
            };
            for (const tool of recipe(c.rid).requiredTools)
              S.tools[tool] = true;
          }, "Preparation saved. No stock deducted.")
        )
          navigate("cooking");
        return;
      }
      if (kind === "cook-timer") {
        const minutes = Number(fd.get("minutes"));
        if (
          !S.cooking ||
          S.cooking.phase !== "cooking" ||
          !Number.isInteger(minutes) ||
          minutes < 1 ||
          minutes > 180
        )
          return formError(
            form,
            "Choose a whole number from 1 to 180 minutes.",
          );
        const oldSession = S.cooking;
        if (
          await commit(() => {
            S.cooking = {
              ...S.cooking,
              seconds: minutes * 60,
              running: false,
              deadline: null,
              notificationId: null,
              notificationGeneration:
                (oldSession.notificationGeneration || 0) + 1,
            };
          }, "Timer set. Press Start timer when ready.")
        ) {
          await retireCookingNotification(oldSession);
          render();
        }
        return;
      }
      if (kind === "assistant")
        return sendAssistant(String(fd.get("question") || ""));
      if (kind === "budget") {
        const raw = String(fd.get("budget"));
        if (!/^\d+(?:\.\d{1,2})?$/.test(raw))
          return formError(
            form,
            "Use a budget with no more than two decimal places.",
          );
        if (
          await commit(() => {
            S.budget = Math.round(Number(raw) * 100);
          }, "Budget updated.")
        )
          render();
        return;
      }
      if (!S.cooking)
        return formError(form, "Cooking session is no longer active.");
      const completedCooking = S.cooking;
      const used = completedCooking.allocations.map((x) => ({
        id: x.id,
        qty: fd.has(`used-${x.id}`) ? Number(fd.get(`used-${x.id}`)) : NaN,
      }));
      const input = {
        sessionId: completedCooking.id,
        used,
        confirmed: fd.has("confirmed"),
      };
      let result;
      try {
        result = commitCookedMeal(S, input);
      } catch (error) {
        return formError(
          form,
          error.message +
            ". Nothing changed; review current inventory or cancel this session.",
        );
      }
      const saved = await commit(() => {
        result = commitCookedMeal(S, input);
        S = result.state;
      }, "Meal saved. Inventory updated.");
      if (saved) {
        retireCookingNotification(completedCooking);
        navigate("cook");
      }
    },
    true,
  );

  document.addEventListener("click", async (e) => {
    const el = e.target.closest("[data-action],[data-route]");
    if (!el) return;
    if (operationBusy) return;
    if (el.dataset.route) return navigate(el.dataset.route);
    const a = el.dataset.action,
      id = el.dataset.id || "";
    if (a === "assistant-cancel") {
      cancelAssistant();
      assistantError = "Request cancelled. Your question is kept.";
      return render();
    }
    if (a === "assistant-suggestion" || a === "assistant-prompt") {
      if (assistantAbort) return;
      const suggestions = [
        "What can I cook?",
        "Help with the current step",
        "What can I substitute?",
        "What should I use soon?",
      ];
      assistantDraft = suggestions[Number(id)] || el.textContent.trim();
      const input = $("#assistant-question");
      if (input && !assistantAbort) {
        input.value = assistantDraft;
        input.focus();
      }
      return;
    }
    if (a === "assistant-clear") {
      if (
        await commit(() => {
          S.chat = [];
        }, "Conversation cleared.")
      ) {
        assistantDraft = "";
        render();
      }
      return;
    }
    if (a === "assistant-review") {
      try {
        const proposal = assistantReply?.proposals[Number(id)];
        const review = reviewAssistantProposal(S, proposal, {
          context: assistantContext,
        });
        const beforeAfter =
          proposal.type === "set_quantity"
            ? `${S.items[proposal.itemId].name}: ${num(S.items[proposal.itemId].qty)} → ${num(proposal.quantity)} ${S.items[proposal.itemId].unit}`
            : `${recipe(proposal.recipeId).name}: open recipe for ${proposal.servings} servings. Stock and tools still need review before preparation.`;
        openModal(
          "Review Zara proposal",
          `<form data-form="assistant-apply">${errors()}<p>${esc(beforeAfter)}</p><p>${esc(proposal.reason)}</p><label class="checkbox-field"><input type="checkbox" name="confirmed" required><span>I checked this proposed change and confirm it.</span></label><div class="actions"><button class="btn btn-primary">Apply change</button>${button("Cancel", "modal-close")}</div></form>`,
        );
        assistantReview = review;
      } catch {
        assistantReply = null;
        assistantError =
          "Proposal expired or cannot be applied. Send a fresh question.";
        render();
      }
      return;
    }
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
          button("Export backup", "backup-export") +
          button("Import backup", "backup-import") +
          button("Reset local inventory", "reset-ask"),
      );
    if (a === "backup-export") return exportBackup();
    if (a === "backup-import") return importBackup();
    if (a === "reset-ask")
      return openModal(
        "Clear local data",
        `<p>Clear inventory, meals, receipts, shopping and assistant history on this device?</p>${button("Clear local data", "reset-confirm", "", "btn-primary")}`,
      );
    if (a === "reset-confirm") {
      const oldSession = S.cooking;
      if (
        await commit(
          () => {
            S.items = {};
            S.meals = [];
            S.shopping = [];
            S.receipts = [];
            S.chat = [];
            S.cooking = null;
          },
          "Local data cleared.",
          true,
        )
      ) {
        await retireCookingNotification(oldSession);
        closeModal();
        return navigate("kitchen");
      }
    }
    if (a === "item-edit") return itemForm(id);
    if (a === "cook-link-next") return itemForm(id);
    if (a === "item-delete")
      return openModal(
        "Delete ingredient",
        `<p>Delete <b>${esc(S.items[id]?.name || "this ingredient")}</b>? Recipes will treat it as missing.</p>${button("Delete", "item-delete-confirm", id, "btn-primary")}`,
      );
    if (a === "item-delete-confirm") {
      if (
        await commit(() => {
          delete S.items[id];
          S.shopping = S.shopping.filter((x) => x.id !== id);
        }, "Ingredient deleted.")
      ) {
        closeModal();
        render();
      }
      return;
    }
    if (a === "shopping-add") {
      if (
        await commit(() => {
          if (!S.shopping.some((x) => x.id === id))
            S.shopping.push({ id, reason: "Low stock", got: false });
        }, "Added to shopping list.")
      )
        render();
      return;
    }
    if (a === "shopping-remove") {
      if (
        await commit(() => {
          S.shopping = S.shopping.filter((x) => x.id !== id);
        }, "Shopping item removed.")
      )
        render();
      return;
    }
    if (a === "shopping-missing") {
      if (
        await commit(() => {
          for (const x of assessment(recipe(id)).missing) {
            const existing = S.shopping.find((y) => y.id === x.ingredientId);
            const reason = `Need ${num(x.missing)} ${x.unit} for ${recipe(id).name}`;
            if (existing) {
              existing.reason = reason;
              existing.got = false;
            } else S.shopping.push({ id: x.ingredientId, reason, got: false });
          }
        }, "Missing ingredients added to shopping.")
      )
        navigate("shopping");
      return;
    }
    if (a === "scan-settings") return scanConnectionForm();
    if (a === "scan-choose") return scanSourceDialog(id);
    if (a === "scan-cancel") {
      cancelScan();
      closeModal();
      return navigate("scan");
    }
    if (a === "scan-browser") {
      try {
        if (window.NomliNative?.isNative && window.NomliNative?.pickScanFile) {
          const nativePhoto = await window.NomliNative.pickScanFile({
            allowPdf: id.startsWith("receipt"),
          });
          if (!nativePhoto || nativePhoto.cancelled) return;
          return runScan(id, { nativePhoto });
        }
        const file = await chooseScanFile(id);
        if (!file) return;
        assertScanFile(file, id.startsWith("receipt"));
        return runScan(id, { file });
      } catch (error) {
        return announce(error?.message || "File could not be opened.");
      }
    }
    if (a === "scan-native") {
      try {
        const nativePhoto = await window.NomliNative?.camera?.();
        if (!nativePhoto) return;
        return runScan(id, { nativePhoto });
      } catch (error) {
        return announce(error?.message || "Camera or gallery was cancelled.");
      }
    }
    if (a === "scan-setup-qr") {
      const form = el.closest('form[data-form="scan-config"]');
      const status = $("[data-connection-status]", form);
      try {
        const result = await window.NomliNative?.barcode?.({
          instructions: "Scan your private Nomli setup QR",
        });
        if (!document.contains(form)) return;
        if (!result?.ScanResult) {
          status.textContent = "Setup scan cancelled. Nothing changed.";
          return;
        }
        let payload;
        try {
          payload = JSON.parse(result.ScanResult);
        } catch {
          throw new Error("This is not a valid Nomli setup QR.");
        }
        if (payload?.type !== "nomli-scan-setup" || payload?.version !== 1)
          throw new Error("This is not a valid Nomli setup QR.");
        const candidate = validateScanConfig({
          apiUrl: payload.apiUrl,
          deviceToken: payload.deviceToken,
        });
        form.elements.apiUrl.value = candidate.apiUrl;
        form.elements.deviceToken.value = candidate.deviceToken;
        status.textContent = "Setup loaded. Test, then save connection.";
      } catch (error) {
        if (!document.contains(form)) return;
        status.textContent = /cancel/i.test(String(error?.message || ""))
          ? "Setup scan cancelled. Nothing changed."
          : error?.message || "Setup QR could not be read.";
      }
      return;
    }
    if (a === "scan-test") {
      const form = el.closest('form[data-form="scan-config"]');
      const status = $("[data-connection-status]", form);
      const fd = new FormData(form);
      const candidate = {
        apiUrl: String(fd.get("apiUrl") || "").trim(),
        deviceToken: String(fd.get("deviceToken") || ""),
      };
      if (!form.checkValidity())
        return formError(form, "Enter HTTPS API URL and device access code.");
      try {
        validateScanConfig(candidate);
      } catch (error) {
        return formError(
          form,
          error?.message || "Connection details are invalid.",
        );
      }
      const controller = new AbortController();
      const errorBox = $("[data-error]", form);
      if (errorBox) {
        errorBox.hidden = true;
        errorBox.textContent = "";
      }
      for (const field of form.elements) {
        field.removeAttribute?.("aria-invalid");
        if (field.getAttribute?.("aria-describedby") === "form-error")
          field.removeAttribute("aria-describedby");
      }
      el.disabled = true;
      status.textContent = "Testing secure connection…";
      try {
        const result = await testScanConnection(candidate, {
          signal: controller.signal,
        });
        status.textContent = result?.ready
          ? "Scanner is ready."
          : "Scanner responded but is not ready.";
      } catch (error) {
        status.textContent = `Connection failed: ${error?.message || "scanner unavailable"}`;
      } finally {
        el.disabled = false;
      }
      return;
    }
    if (a === "recipe") {
      S.recipe = id;
      backgroundSave();
      return navigate("recipe");
    }
    if (a === "cook-start") {
      const selected = D.recipes.find((x) => x.id === id);
      if (!selected) return announce("Recipe no longer available.");
      if (
        await commit(() => {
          S = startCookingSession(S, selected, {
            servings: servingsFor(selected),
            sessionId: `cook-${crypto.randomUUID()}`,
            ingredients: COOK_INGREDIENTS,
          });
          S.recipe = selected.id;
        }, "Preparation started. No stock deducted.")
      )
        navigate("cooking");
      return;
    }
    if (a === "cook-resume") {
      return navigate(S.cooking?.phase === "review" ? "review" : "cooking");
    }
    if (a === "cook-cancel-ask") {
      if (!S.cooking) return;
      return openModal(
        "Cancel cooking session?",
        `<p>End preparation or cooking? No ingredients have been deducted.</p>${button("Keep cooking", "go", S.cooking.phase === "review" ? "review" : "cooking")}${button("Cancel session", "cook-cancel-confirm", S.cooking.id, "btn-primary")}`,
      );
    }
    if (a === "cook-cancel-confirm") {
      const c = S.cooking;
      if (!c || c.id !== id) return;
      if (
        await commit(() => {
          S.cooking = null;
        }, "Session cancelled. Inventory unchanged.")
      ) {
        await retireCookingNotification(c);
        closeModal();
        navigate("cook");
      }
      return;
    }
    if (["cook-next", "cook-prev", "cook-back"].includes(a)) {
      const c = S.cooking;
      if (!c || !["cooking", "review"].includes(c.phase)) return;
      if (
        await commit(() => {
          const r = recipe(c.rid);
          const end = a === "cook-next" && c.step === r.steps.length - 1;
          S.cooking = {
            ...S.cooking,
            phase: end ? "review" : "cooking",
            step:
              a === "cook-prev"
                ? Math.max(0, c.step - 1)
                : a === "cook-next" && !end
                  ? c.step + 1
                  : c.step,
            seconds: 120,
            running: false,
            deadline: null,
            notificationId: null,
            notificationGeneration: (c.notificationGeneration || 0) + 1,
          };
        }, "")
      ) {
        await retireCookingNotification(c);
        navigate(S.cooking.phase === "review" ? "review" : "cooking");
      }
      return;
    }
    if (a === "meal-undo-ask") {
      const meal = S.meals.find((x) => x.id === id);
      if (!meal) return;
      return openModal(
        "Restore this meal's ingredients?",
        `<p>Add back only the recorded quantities for <b>${esc(D.recipes.find((r) => r.id === meal.rid)?.name || meal.rid)}</b>. Later stock additions or deductions stay intact.</p><ul class="feature-list">${meal.used.map((x) => `<li>${esc(x.name)}: ${num(x.qty)} ${esc(x.unit)}</li>`).join("")}</ul>${button("Restore ingredients", "meal-undo-confirm", id, "btn-primary")}${button("Keep deduction", "modal-close")}`,
      );
    }
    if (a === "meal-undo-confirm") {
      try {
        undoCookedMeal(S, id, { confirmed: true });
      } catch (error) {
        return openModal(
          "Undo could not finish",
          `<section class="notice notice-warning" role="alert"><p>${esc(error.message)}. Restore any deleted item and its original link or units first. Nothing changed.</p></section>${button("Close", "modal-close")}`,
        );
      }
      if (
        await commit(() => {
          S = undoCookedMeal(S, id, { confirmed: true }).state;
        }, "Ingredients restored once.")
      ) {
        closeModal();
        navigate("cook");
      }
      return;
    }
    if (a === "native-camera" || a === "native-barcode") {
      try {
        const result =
          await window.NomliNative?.[
            a === "native-camera" ? "camera" : "barcode"
          ]?.();
        openModal(
          a === "native-camera" ? "Photo captured" : "Barcode captured",
          `${a === "native-camera" && result?.webPath ? `<img class="captured-photo" src="${esc(result.webPath)}" alt="Your captured grocery photo">` : `<p class="captured-code">${esc(result?.ScanResult || "No barcode result")}</p>`}<p class="notice">Captured for preview. Recognition and product lookup still need connecting; stock has not changed.</p>`,
        );
      } catch (err) {
        announce(err?.message || "Device action cancelled.");
      }
      return;
    }
  });
  document.addEventListener("change", (e) => {
    if (operationBusy) return;
    const prepForm = e.target.closest('form[data-form="cook-prep"]');
    if (prepForm && S.cooking?.phase === "prep") {
      S.cooking.prepared = [
        ...new Set(new FormData(prepForm).getAll("prepared")),
      ];
      S.cooking.toolsConfirmed = prepForm.elements.toolsConfirmed.checked;
      backgroundSave();
      return;
    }
    const itemFormElement = e.target.closest('form[data-form="item"]');
    const unitSelect = e.target.matches(
      'select[name="unit"], select[name^="unit-"]',
    )
      ? e.target
      : null;
    if (unitSelect) {
      const row = unitSelect.closest(".scan-line") || itemFormElement;
      const grams = row?.querySelector('input[name$="gramsPerUnit"]');
      if (grams) {
        grams.value = "";
        grams.disabled = ![
          "count",
          "pieces",
          "bunches",
          "cloves",
          "slices",
        ].includes(unitSelect.value);
      }
      if (itemFormElement) {
        const previous =
          unitSelect.dataset.previousUnit ||
          S.items[itemFormElement.dataset.id]?.unit ||
          "count";
        const factors = { g: 1, kg: 1000, ml: 1, l: 1000 };
        const sameDimension =
          (["g", "kg"].includes(previous) &&
            ["g", "kg"].includes(unitSelect.value)) ||
          (["ml", "l"].includes(previous) &&
            ["ml", "l"].includes(unitSelect.value));
        const quantity = itemFormElement.elements.qty;
        if (sameDimension)
          quantity.value =
            (Number(quantity.value) * factors[previous]) /
            factors[unitSelect.value];
        else {
          quantity.value = "";
          announce(
            "Enter the actual quantity in the new unit. No weight was assumed.",
          );
        }
        unitSelect.dataset.previousUnit = unitSelect.value;
      }
      return;
    }
    if (e.target.matches('[data-form="scan-import"] [name="scanCurrency"]')) {
      const form = e.target.closest('form[data-form="scan-import"]');
      const nextCurrency = e.target.value;
      if (nextCurrency !== form.dataset.moneyCurrency) {
        form.querySelectorAll("[data-scan-money]").forEach((input) => {
          input.value = "";
          const digits = currencyDigits(nextCurrency);
          input.step = digits === 0 ? "1" : digits === 3 ? "0.001" : "0.01";
          const label = input.closest("label");
          if (label?.firstChild?.nodeType === Node.TEXT_NODE)
            label.firstChild.nodeValue =
              input.name === "scanTotal"
                ? `Receipt total (${nextCurrency || "choose currency"})`
                : input.name === "scanTax"
                  ? `Additional tax (${nextCurrency || "choose currency"})`
                  : input.name === "scanDiscount"
                    ? `Receipt-level discount (${nextCurrency || "choose currency"})`
                    : `Line cost (${nextCurrency || "choose currency"}, optional)`;
        });
        form.dataset.moneyCurrency = nextCurrency;
        const warning = $("[data-money-warning]", form);
        if (warning)
          warning.textContent = nextCurrency
            ? "Currency changed. Re-enter receipt total and every line cost; prior numbers were cleared to avoid reinterpretation."
            : "Choose a supported currency or exclude this receipt from spending.";
      }
      return;
    }
    const include = e.target.closest('.scan-line input[name^="include-"]');
    if (include) {
      include
        .closest("fieldset")
        .querySelectorAll("input:not([name^='include-']), select")
        .forEach((control) => {
          const rowUnit = include
            .closest("fieldset")
            .querySelector('select[name^="unit-"]')?.value;
          control.disabled =
            !include.checked ||
            (control.name?.endsWith("gramsPerUnit") &&
              !["count", "pieces", "bunches", "cloves", "slices"].includes(
                rowUnit,
              ));
        });
      return;
    }
    const el = e.target.closest("[data-change]");
    if (!el) return;
    const what = el.dataset.change;
    if (what === "storage") S.storage = el.value;
    if (what === "sort") S.sort = el.value;
    if (what === "search") S.search = el.value.trim();
    if (what === "match") S.matchOnly = el.checked;
    if (what === "cook-time") S.profile.time = Number(el.value);
    if (what === "servings") S.servings[el.dataset.id] = Number(el.value);
    if (what === "swap") S.swaps[el.dataset.id] = el.value;
    if (what === "shopping-check") {
      const x = S.shopping.find((x) => x.id === el.dataset.id);
      if (x) x.got = el.checked;
    }
    backgroundSave();
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
  document.addEventListener("submit", async (e) => {
    const form = e.target.closest("form[data-form]");
    if (!form) return;
    e.preventDefault();
    if (!form.checkValidity())
      return formError(form, "Review required fields before saving.");
    const fd = new FormData(form),
      kind = form.dataset.form;
    if (kind === "scan-config") {
      const candidate = {
        apiUrl: String(fd.get("apiUrl") || "").trim(),
        deviceToken: String(fd.get("deviceToken") || ""),
      };
      try {
        validateScanConfig(candidate);
      } catch (error) {
        return formError(
          form,
          error?.message || "Connection details are invalid.",
        );
      }
      setBusy(true, form);
      try {
        await saveScanConfig(candidate);
        cancelAssistant();
        scanConfig = candidate;
      } catch (error) {
        setBusy(false, form);
        return formError(
          form,
          `Connection was not saved: ${error?.message || "device storage failed"}`,
        );
      }
      setBusy(false, form);
      closeModal();
      announce("Scan connection saved on this device.");
      return render();
    }
    if (kind === "scan-import") {
      if (!scanDraft)
        return formError(form, "Scan review expired. Scan the source again.");
      const excludedLineIds = [];
      const mergeTargets = {};
      const reviewedLinks = {};
      const reviewedCurrency =
        scanDraft.kind === "receipt"
          ? String(fd.get("scanCurrency") || "")
              .trim()
              .toUpperCase() || null
          : scanDraft.currency;
      try {
        for (const fieldName of ["scanTotal", "scanTax", "scanDiscount"]) {
          const amount = String(fd.get(fieldName) ?? "");
          if (amount !== "") parseMinorAmount(amount, reviewedCurrency);
        }
        for (const line of scanDraft.lines) {
          const cost = String(fd.get(`cost-${line.lineId}`) ?? "");
          if (cost !== "") parseMinorAmount(cost, reviewedCurrency);
        }
      } catch (error) {
        return formError(
          form,
          error?.message || "Review monetary amounts and currency.",
        );
      }
      let editedLines;
      try {
        editedLines = scanDraft.lines.map((line) => {
          const included = fd.has(`include-${line.lineId}`);
          if (!included) {
            excludedLineIds.push(line.lineId);
            return line;
          }
          const quantityText = String(fd.get(`quantity-${line.lineId}`) ?? "");
          const costText = String(fd.get(`cost-${line.lineId}`) ?? "");
          const target = String(fd.get(`target-${line.lineId}`) || "");
          if (target) mergeTargets[line.lineId] = target;
          if (scanDraft.kind !== "expiry")
            reviewedLinks[line.lineId] = readIngredientLink(fd, {
              prefix: `cook-${line.lineId}-`,
              unit: String(fd.get(`unit-${line.lineId}`) || ""),
            });
          return {
            ...line,
            name: String(fd.get(`name-${line.lineId}`) || "").trim(),
            quantity: quantityText === "" ? null : Number(quantityText),
            unit: String(fd.get(`unit-${line.lineId}`) || "") || null,
            storage: String(fd.get(`storage-${line.lineId}`) || "") || null,
            expiry: String(fd.get(`expiry-${line.lineId}`) || "") || null,
            expiryProvenance: fd.get(`expiry-${line.lineId}`)
              ? "printed"
              : null,
            lineTotalMinor:
              costText === ""
                ? null
                : parseMinorAmount(costText, reviewedCurrency),
          };
        });
      } catch (error) {
        return formError(form, error.message);
      }
      if (excludedLineIds.length === scanDraft.lines.length)
        return formError(form, "Include at least one food item.");
      const receiptTotalText = String(fd.get("scanTotal") ?? "");
      const receiptTaxText = String(fd.get("scanTax") ?? "");
      const receiptDiscountText = String(fd.get("scanDiscount") ?? "");
      const editedDraft = {
        ...scanDraft,
        merchant:
          scanDraft.kind === "receipt"
            ? String(fd.get("scanMerchant") || "").trim() || null
            : scanDraft.merchant,
        receiptDate:
          scanDraft.kind === "receipt"
            ? String(fd.get("scanReceiptDate") || "").trim() || null
            : scanDraft.receiptDate,
        currency: reviewedCurrency,
        totalMinor:
          scanDraft.kind === "receipt" && receiptTotalText !== ""
            ? parseMinorAmount(receiptTotalText, reviewedCurrency)
            : scanDraft.kind === "receipt"
              ? null
              : scanDraft.totalMinor,
        taxMinor:
          scanDraft.kind === "receipt" && receiptTaxText !== ""
            ? parseMinorAmount(receiptTaxText, reviewedCurrency)
            : scanDraft.kind === "receipt"
              ? null
              : scanDraft.taxMinor,
        discountMinor:
          scanDraft.kind === "receipt" && receiptDiscountText !== ""
            ? parseMinorAmount(receiptDiscountText, reviewedCurrency)
            : scanDraft.kind === "receipt"
              ? null
              : scanDraft.discountMinor,
        lines: editedLines,
      };
      let result;
      try {
        result = commitScanDraft(S, editedDraft, {
          confirmed: fd.has("confirmed"),
          excludeFinance: fd.has("excludeFinance"),
          edits: {},
          mergeTargets,
          excludedLineIds,
        });
        result = applyScanCookingLinks(result, {
          draft: editedDraft,
          excludedLineIds,
          links: reviewedLinks,
        });
      } catch (error) {
        return formError(
          form,
          error?.message || "Review could not be committed.",
        );
      }
      const saved = await commit(() => {
        result = commitScanDraft(S, editedDraft, {
          confirmed: fd.has("confirmed"),
          excludeFinance: fd.has("excludeFinance"),
          edits: {},
          mergeTargets,
          excludedLineIds,
        });
        result = applyScanCookingLinks(result, {
          draft: editedDraft,
          excludedLineIds,
          links: reviewedLinks,
        });
        S = result.state;
      }, "");
      if (saved) {
        announce(
          result.replayed
            ? "This reviewed scan was already saved; nothing changed."
            : editedDraft.kind === "receipt" && result.financeExcluded
              ? "Inventory updated. Receipt spending was explicitly excluded."
              : editedDraft.kind === "receipt"
                ? "Reviewed scan saved. Inventory and spending updated once."
                : "Reviewed scan saved. Inventory updated once.",
        );
        scanDraft = null;
        closeModal();
        return navigate(
          editedDraft.kind === "receipt" ? "expenses" : "kitchen",
        );
      }
      return;
    }
    if (kind === "backup") {
      if (fd.get("confirmation") !== "REPLACE")
        return formError(form, "Type REPLACE exactly to continue.");
      const candidate = importCandidate;
      if (!candidate)
        return formError(
          form,
          "Import preview expired. Choose the file again.",
        );
      const oldSession = S.cooking;
      if (
        await commit(
          () => {
            S = structuredClone(candidate);
            if (S.cooking) {
              S.cooking.notificationId = null;
              S.cooking.notificationGeneration =
                (S.cooking.notificationGeneration || 0) + 1;
            }
          },
          "Backup restored.",
          true,
        )
      ) {
        setBusy(true);
        try {
          const retired = await retireCookingNotification(oldSession);
          if (retired && S.cooking?.running && timerSeconds() > 0)
            await timerNotifications.schedule(S.cooking, timerSeconds());
        } catch {
          announce(
            "Backup restored. Device timer alert unavailable; keep Nomli open.",
          );
        } finally {
          setBusy(false);
        }
        importCandidate = null;
        closeModal();
        return navigate("kitchen");
      }
      return;
    }
    if (operationBusy) return;
    const beforeMutation = structuredClone(S);
    if (kind === "item") {
      const id =
        form.dataset.id === "new"
          ? `custom-${crypto.randomUUID()}`
          : form.dataset.id;
      if (!String(fd.get("name")).trim())
        return formError(form, "Enter an ingredient name.");
      const quantity = Number(fd.get("qty"));
      if (!Number.isFinite(quantity) || quantity < 0 || quantity > 1e9)
        return formError(form, "Quantity must be between 0 and 1,000,000,000.");
      let cookingLink;
      try {
        cookingLink = readIngredientLink(fd, { unit: fd.get("unit") });
      } catch (error) {
        return formError(form, error.message);
      }
      const prior = S.items[id] || {};
      const expiry = fd.get("expiry") || null;
      const provenance = expiry ? fd.get("expiryProvenance") : null;
      S.items[id] = {
        ...prior,
        ...cookingLink,
        name: String(fd.get("name")).trim(),
        qty: quantity,
        unit: fd.get("unit"),
        storage: fd.get("storage"),
        expiry,
        expiryProvenance: provenance,
        low: 0,
        category: "Other",
        estimated: provenance === "estimated",
      };
      if (provenance === "printed") S.items[id].printedExpiry = expiry;
      else if (prior.printedExpiry !== expiry) delete S.items[id].printedExpiry;
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
    setBusy(true, form);
    try {
      await save();
    } catch (error) {
      S = beforeMutation;
      setBusy(false, form);
      return formError(
        form,
        `Not saved: ${error?.message || "storage failed"}`,
      );
    }
    setBusy(false, form);
    closeModal();
    if (kind === "meal") {
      announce("Meal saved. Inventory updated.");
      return navigate("kitchen");
    }
    announce(kind === "item" ? "Ingredient saved." : "Saved.");
    render();
  });
  function syncHash() {
    const r = location.hash.slice(1);
    if (r === "home") {
      navigate("kitchen");
      return;
    }
    if (routes.includes(r)) {
      cancelAssistant();
      S.route = r;
      backgroundSave();
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
