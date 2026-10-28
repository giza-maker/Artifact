"use strict";
import { requestAssistantReply } from "./assistant-client.js";
import { VOICE_LANGUAGES, createVoiceController } from "./voice-controller.js";
import {
  buildAssistantContext,
  reviewAssistantProposal,
  applyAssistantProposal,
} from "./assistant-domain.js";
import { createTimerNotifications } from "./timer-notifications.js";
import { retireReplacedTimer } from "./timer-transition.js";
import { initMobileSelects } from "./mobile-select.js";
import {
  FOOD_CATEGORIES,
  getFoodCategory,
  inferFoodCategory,
} from "./food-categories.js";
import {
  foodArtworkStyle,
  getCategoryArtwork,
  getFoodArtwork,
} from "./food-art.js";
import { renderScanReview } from "./scan-review-view.js";
import { initScanReviewWizard } from "./scan-review-wizard.js";
import "./scan-review.css";
import { itemPhotos } from "./item-photos.js";
import { attachScanPhotos } from "./scan-item-photos.js";
import {
  cropItemPhoto,
  preparePhotoRegion,
  photoCropRegion,
} from "./item-photo-crop.js";
import "./item-photo-crop.css";
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
  parseScanQuantity,
  parseReviewedScanMoney,
  validateScanReviewFields,
} from "./scan-review-fields.js";
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
import { resolveCookingIdentity } from "./food-identity.js";
import { syncCookingInventory } from "./cooking-inventory-sync.js";
import {
  getRecipeRequirementStockStatus,
  getRecipeStockHints,
  linkRecipeStock,
} from "./recipe-stock-hints.js";
import { applyRecipeStockMeasurement } from "./recipe-stock-measurement.js";
import { parseLocalizedDecimal } from "./localized-number.js";
import packageInfo from "../package.json" with { type: "json" };
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
  let scanWizard = null;
  let scanRetry = null;
  let scanConfig = { apiUrl: "", deviceToken: "" };
  let assistantDraft = "",
    assistantError = "",
    assistantAbort = null,
    assistantEpoch = 0;
  let assistantReply = null,
    assistantContext = null,
    assistantReview = null;
  const liveChats = new WeakSet();
  const photoSources = new Map();
  let itemPhotoDraft = null,
    scanPhotoDraft = null,
    voiceExpanded = false,
    assistantSentQuestion = "";
  let voiceLanguage = "en-US";
  let voiceUseError = "";
  function clearVoiceUseError() {
    voiceUseError = "";
    const error = $("#voice-use-error");
    if (error) {
      error.hidden = true;
      error.textContent = "";
    }
  }
  const voice = createVoiceController({
    getNative: () => window.NomliNative,
    onChange(state) {
      if (typeof S === "undefined" || S.route !== "assistant") return;
      if (
        state.phase === "review" &&
        document.activeElement?.id === "voice-transcript"
      )
        return;
      const focused = document.activeElement;
      const thread = $(".zara-thread");
      const scroll = thread ? thread.scrollTop : null;
      const hadViewFocus = view.contains(focused);
      const focusId = focused?.id;
      const focusAction = focused?.dataset?.action;
      const selection =
        focusId === "assistant-question"
          ? [focused.selectionStart, focused.selectionEnd]
          : null;
      view.innerHTML = viewMarkup();
      mountView({ chatScroll: scroll });
      const target =
        (focusId
          ? document.getElementById(focusId)
          : focusAction
            ? $(`[data-action="${focusAction}"]`, view)
            : null) ||
        (hadViewFocus
          ? $(
              '#voice-transcript,[data-action="voice-finish"],[data-action="voice-cancel"],[data-action="voice-start"]',
              view,
            )
          : null);
      target?.focus({ preventScroll: true });
      if (selection && target) target.setSelectionRange(...selection);
    },
  });
  const voicePending = () =>
    ["starting", "listening", "processing", "review"].includes(
      voice.snapshot().phase,
    );
  function cancelVoice() {
    clearVoiceUseError();
    if (voice.snapshot().phase !== "idle") void voice.cancel();
  }
  function cancelAssistant(clear = true) {
    cancelVoice();
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
  let recipeStockLinkReview = null;
  let recipeStockMeasurementReview = null;
  let saveQueue = Promise.resolve();
  let operationBusy = false;
  let storageError = "";
  let synchronizedItemCount = 0;
  if (!recoveryRequired) {
    const repaired = syncCookingInventory(S);
    if (repaired.state !== S) {
      try {
        await store.save(repaired.state);
        S = repaired.state;
        synchronizedItemCount = repaired.linkedItemIds.length;
      } catch {
        storageError =
          "Cooking links could not be saved. Your original inventory is unchanged. Reopen Nomli to retry.";
      }
    }
  }
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
      // Retire the native alert before a save can drop its durable owner.
      await retireReplacedTimer(before.cooking, S.cooking, timerNotifications);
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
    const glyph =
      action === "go"
        ? nav.find((x) => x[0] === id)?.[1]
        : {
            "scan-mode": "camera",
            "item-edit": "pencil",
            "shopping-add": "plus",
            "cook-start": "play",
            "cook-next": "arrow-right",
            "modal-close": "x",
          }[action];
    return `<button type="button" class="btn ${cls}" data-action="${action}" data-id="${esc(id)}">${glyph ? icon(glyph) : ""}<span>${esc(label)}</span></button>`;
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
  function formError(form, text, focusTarget = null) {
    const box = $("[data-error]", form);
    if (!box) return announce(text);
    box.textContent = text;
    box.hidden = false;
    $("#announcer").textContent = text;
    const target =
      focusTarget ||
      [...form.elements].find((x) => x.willValidate && !x.validity.valid) ||
      $("input,select", form);
    if (target) {
      if (scanWizard && form.matches(".scan-review-wizard")) {
        const cards = [...form.querySelectorAll("[data-scan-card]")];
        const index = cards.indexOf(target.closest("[data-scan-card]"));
        scanWizard.show(index < 0 ? cards.length : index);
      }
      for (
        let ancestor = target.parentElement;
        ancestor && ancestor !== form;
        ancestor = ancestor.parentElement
      ) {
        if (ancestor.tagName === "DETAILS") ancestor.open = true;
      }
      target.setAttribute("aria-invalid", "true");
      target.setAttribute(
        "aria-describedby",
        box.id || (box.id = "form-error"),
      );
      initMobileSelects(form);
      const proxy = target.nextElementSibling;
      (proxy?.matches(".mobile-select-trigger") ? proxy : target).focus();
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
    scanWizard?.destroy();
    scanWizard = null;
    scanRetry = null;
    if (modal.dataset.screen === "item-edit" && screen !== "item-edit")
      releaseItemPhoto();
    if (modal.dataset.screen === "scan-review" && screen !== "scan-review")
      releaseScanPhoto();
    cancelScan();
    cancelAssistant(false);
    lastFocus = document.activeElement;
    modal.dataset.screen = screen;
    $("#modal-content").innerHTML =
      `<header class="modal-heading"><h2 id="modal-title">${esc(title)}</h2><button class="icononly" data-action="modal-close" aria-label="Close">${icon("x")}</button></header><div class="modal-body">${body}</div>`;
    if (!modal.open) modal.showModal();
    initMobileSelects(modal);
    hydratePhotos(modal);
    $("[data-action='modal-close']", modal)?.focus();
  }
  function closeModal() {
    scanWizard?.destroy();
    scanWizard = null;
    cancelScan();
    scanRetry = null;
    if (modal.open) modal.close();
    lastFocus?.focus?.();
  }
  function releaseItemPhoto() {
    if (itemPhotoDraft?.previewUrl)
      URL.revokeObjectURL(itemPhotoDraft.previewUrl);
    itemPhotoDraft = null;
  }
  function releaseScanPhoto() {
    if (scanPhotoDraft?.previewUrl)
      URL.revokeObjectURL(scanPhotoDraft.previewUrl);
    for (const crop of scanPhotoDraft?.crops?.values() || []) {
      if (crop.previewUrl) URL.revokeObjectURL(crop.previewUrl);
      if (
        crop.photoId &&
        !Object.values(S.items).some((item) => item.photoId === crop.photoId)
      )
        void itemPhotos.remove(crop.photoId).catch(() => {});
    }
    scanPhotoDraft = null;
  }
  function hydratePhotos(root) {
    root.querySelectorAll("img[data-photo-id]").forEach((img) => {
      const id = img.dataset.photoId;
      if (!photoSources.has(id)) photoSources.set(id, itemPhotos.getSource(id));
      photoSources.get(id).then((source) => {
        if (!source || !img.isConnected || img.dataset.photoId !== id) return;
        img.src = source;
        img.hidden = false;
        img.parentElement.classList.add("has-photo");
      });
    });
  }
  function mountView({ chatScroll = null } = {}) {
    initMobileSelects(view);
    hydratePhotos(view);
    document.body.classList.toggle("zara-route", S.route === "assistant");
    const thread = $(".zara-thread", view);
    if (thread) thread.scrollTop = chatScroll ?? thread.scrollHeight;
  }
  function navigate(route) {
    if (!routes.includes(route)) return;
    cancelAssistant();
    voiceExpanded = false;
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
  function photo(id, item = S.items[id] || {}) {
    const path =
      item.photo ||
      D.items[id]?.photo ||
      {
        tomatoes: "tomato-128.webp",
        basil: "basil-128.webp",
        eggs: "eggs-128.webp",
        tomato: "tomato-128.webp",
        basil_leaf: "basil-128.webp",
        egg: "eggs-128.webp",
      }[item.ingredientId || id];
    return typeof path === "string" &&
      /^(?:\/?images\/)?[\w/-]+\.(?:webp|png|jpe?g)$/.test(path) &&
      !path.includes("..")
      ? path.startsWith("images/") || path.startsWith("/images/")
        ? path
        : `images/${path}`
      : null;
  }
  function itemThumbnail(id, item) {
    const fallback = photo(id, item);
    return `<span class="ingredient-thumb${fallback ? " has-photo" : ""}">${fallback ? `<img src="${esc(fallback)}" alt="" loading="lazy" decoding="async">` : categoryArtwork(inferFoodCategory(item).category, item)}${item.photoId ? `<img data-photo-id="${esc(item.photoId)}" alt="" hidden decoding="async">` : ""}</span>`;
  }
  function categoryArtwork(category, item) {
    const art = item
      ? getFoodArtwork({ ...item, categoryId: category?.id })
      : getCategoryArtwork(category);
    return `<span class="food-category-art" data-food-art="${esc(art.categoryId)}" data-food-art-id="${esc(art.id)}" style="${esc(foodArtworkStyle(art))}" aria-hidden="true"></span>`;
  }
  function editedArtworkItem(item, name) {
    const editedName = String(name ?? "");
    return {
      ...item,
      name: editedName,
      ingredientId:
        editedName === String(item?.name ?? "") ? item?.ingredientId : null,
    };
  }
  function categoryField(item, name = "categoryId") {
    const category = inferFoodCategory(item).category;
    return `<label class="field">Category<select name="${name}" data-picker-kind="food-category"${getFoodCategory(item.categoryId) ? ' data-user-touched="1"' : ""}>${FOOD_CATEGORIES.map((entry) => `<option value="${entry.id}"${entry.id === category.id ? " selected" : ""}>${esc(entry.en)} — ${esc(entry.ar)}</option>`).join("")}</select></label>`;
  }
  function refreshCookingMatch(scope, { nameChanged = false } = {}) {
    if (!scope) return;
    const select = $('select[name$="ingredientId"]', scope);
    if (!select) return;
    const scanCard = scope.matches("[data-scan-card]");
    const name = $(
      scanCard ? 'input[name^="name-"]' : 'input[name="name"]',
      scope,
    )?.value;
    const categoryId = $(
      scanCard ? 'select[name^="category-"]' : 'select[name="categoryId"]',
      scope,
    )?.value;
    if (nameChanged && select.dataset.cookOptout !== "1") {
      select.dataset.cookAuto = "1";
      delete select.dataset.userTouched;
    }
    if (select.dataset.cookAuto === "1" && !select.dataset.userTouched) {
      select.value =
        resolveCookingIdentity({ name, categoryId }).ingredientId || "";
      initMobileSelects(scope);
    }
    const linked = getIngredient(select.value);
    const status = $("[data-cook-link-status]", scope);
    if (status)
      status.textContent = linked
        ? `Cook uses ${linked.name.en} · linked after save`
        : "Kitchen item · cooking match optional in More details";
    const help = $("[data-cook-link-help]", scope);
    if (help)
      help.textContent = linked
        ? `Cook will use ${linked.name.en} after saving. Review or change anytime.`
        : "Choose the product type to use this item in recipes. No weights are guessed.";
  }
  function recipeAction(r) {
    return button("View recipe", "recipe", r.id, "btn-quiet").replace(
      "<button ",
      `<button aria-label="Open ${esc(r.name)}" `,
    );
  }
  function itemRow(id, item) {
    const category = inferFoodCategory(item).category;
    const left = daysLeft(item),
      urgent = item.qty > 0 && left !== null && left <= 2;
    const freshness = !item.expiry
      ? "No expiry recorded"
      : `${left < 0 ? `${Math.abs(left)} days past date` : `${left} days left`} · ${item.expiryProvenance || (item.estimated ? "estimated" : "user")}`;
    return `<div class="inventory-row">${itemThumbnail(id, item)}<div class="inventory-copy"><b dir="auto">${esc(item.name)}</b><span>${num(item.qty)} ${esc(item.unit)} <small>${esc(item.storage)}</small></span><small class="${urgent ? "use-soon" : "muted"}">${esc(freshness)}</small><small class="cook-link-label">${esc(category.en)}${getIngredient(item.ingredientId) ? ` · ${icon("check-circle")} Linked for cooking` : ""}</small></div><button class="icononly" data-action="item-edit" data-id="${esc(id)}" aria-label="Edit ${esc(item.name)}">${icon("pencil")}</button></div>`;
  }
  function inventoryRowsMarkup() {
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
    return rows.length
      ? rows.map(([id, x]) => itemRow(id, x)).join("")
      : `<div class="inventory-empty">${icon("refrigerator")}<h3>${Object.keys(S.items).length ? "No ingredients match" : "Your inventory is empty"}</h3><p>${Object.keys(S.items).length ? "Clear search or filters." : "Add first ingredient. Expiry stays optional and never gets invented."}</p>${Object.keys(S.items).length ? "" : button("Add first ingredient", "item-edit", "new", "btn-primary")}</div>`;
  }
  function kitchenView() {
    const soon = Object.values(S.items).filter(
      (x) => x.qty > 0 && daysLeft(x) !== null && daysLeft(x) <= 2,
    ).length;
    const markup =
      heading(
        "INVENTORY",
        "Your kitchen",
        `${Object.values(S.items).filter((x) => x.qty > 0).length} ingredients${soon ? ` · ${soon} to use soon` : ""}`,
        `<button class="icononly kitchen-add" data-action="item-edit" data-id="new" aria-label="Add ingredient">${icon("plus")}</button>`,
      ) +
      `<button class="scan-banner" data-action="go" data-id="scan"><img src="images/fridge-vf-480.webp" alt=""><span>${icon("scan")}<b>Scan groceries or receipts</b><small>Protected connection · review before save</small></span>${icon("arrow-right")}</button><section class="card inventory-card"><div class="card-header"><h2>Inventory</h2><button class="icononly" data-action="item-edit" data-id="new" aria-label="Add ingredient">${icon("plus")}</button></div><div class="inventory-tools"><label class="field"><span class="sr-only">Search</span><input type="search" data-change="search" value="${esc(S.search || "")}" placeholder="Search ingredients"></label><div class="inventory-sort"><label>Storage <select data-change="storage">${options(["All", "Fridge", "Freezer", "Pantry", "Spices"], S.storage)}</select></label><label>Sort <select data-change="sort">${options(["expiry", "name", "quantity"], S.sort)}</select></label></div></div><div data-inventory-list>${inventoryRowsMarkup()}</div></section><div class="quick-grid">${[
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
        "SCAN",
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
      ([, x]) =>
        x.qty > 0 && !getIngredient(x.ingredientId) && !x.cookingLinkDisabled,
    );
    return (
      heading(
        "USE WHAT YOU HAVE",
        "What can I cook?",
        "Find your next meal.",
        `<button class="icononly" data-action="go" data-id="profile" aria-label="Cooking preferences">${icon("gear")}</button>`,
      ) +
      (S.cooking
        ? `<section class="card resume-card"><p class="eyebrow">${S.cooking.phase === "prep" ? "PREPARATION SAVED" : S.cooking.phase === "review" ? "READY TO REVIEW" : "COOKING IN PROGRESS"}</p><h2>${esc(S.cooking.recipeName || recipe(S.cooking.rid).name)}</h2><p>${servingText(S.cooking.servings)} · stock unchanged</p>${button("Resume cooking", "cook-resume", "", "btn-primary")}</section>`
        : "") +
      (unlinked.length
        ? `<section class="notice cook-link-notice"><b>${unlinked.length} item${unlinked.length === 1 ? " needs" : "s need"} a cooking match to use in recipes</b>${button("Link", "cook-link-next", unlinked[0][0], "btn-quiet")}</section>`
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
        )}</select></label><label class="checkbox-field cook-stock-toggle"><input type="checkbox" data-change="match"${S.matchOnly ? " checked" : ""}><span class="switch-track" aria-hidden="true"></span><span>Ingredients I have</span></label></div><p class="details">${shown.length} of ${D.recipes.length} recipes · ${esc(S.profile.cuisine)} cuisine. Check product labels for allergens.</p><div class="recipe-grid">${shown.map(({ r, a }) => `<article class="recipe-card${r.image ? "" : " recipe-no-photo"}">${r.image ? `<img src="${r.cardImage || r.image}" alt="${esc(r.name)}" loading="lazy" decoding="async" width="560" height="420">` : `<span class="recipe-art" aria-hidden="true">${icon("fork-knife")}</span>`}<div><span class="badge ${a.stockReady ? "badge-demo" : "badge-planned"}">${a.stockReady ? "INGREDIENTS READY" : "MISSING " + a.missing.length}</span><h2>${esc(r.name)}</h2><p>${r.time} min · ${esc(r.cuisine)} · ${servingText(servingsFor(r))}</p>${recipeAction(r)}</div></article>`).join("") || '<p class="empty">No match for these filters. Turn off ingredients-only, choose a longer time, or adjust preferences.</p>'}</div>` +
      mealHistory()
    );
  }
  function recipeView() {
    const r = recipe(S.recipe),
      serv = servingsFor(r),
      a = assessment(r);
    const requirementStatuses = new Map(
      a.requirements.map((requirement) => [
        requirement,
        getRecipeRequirementStockStatus(S, a, requirement),
      ]),
    );
    const needsMeasurement = [...requirementStatuses.values()].some(
      ({ status }) => status === "needs-measurement",
    );
    const hasTrueMissing = [...requirementStatuses.values()].some(
      ({ status }) => status === "missing" || status === "partial",
    );
    const measurementItemIds = new Set(
      [...requirementStatuses.values()].flatMap(({ measurementItems }) =>
        measurementItems.map(({ itemId }) => itemId),
      ),
    );
    const stockHints = getRecipeStockHints(S, a).filter(
      ({ itemId }) => !measurementItemIds.has(itemId),
    );
    const incompatibleReviewItems = a.incompatibleItems.filter(
      ({ id }) => !measurementItemIds.has(id),
    );
    const reasons = {
      unlinked: "Not connected to this recipe ingredient",
      "opted-out": "Cooking use was turned off",
      expired: "Past its recorded date",
      units: "Quantity units need review",
      identity: "Linked to a different cooking ingredient",
    };
    const stockHelp = stockHints.length
      ? `<section class="notice" aria-label="Kitchen items to review"><h3>Already in your Kitchen?</h3><p>These items need a match or quantity review before this recipe can use them.</p>${stockHints.map((h) => `<div class="item-row"><div><b dir="auto">${esc(h.name)}</b><small>${num(h.qty)} ${esc(h.unit)} · ${esc(reasons[h.reason])}</small></div>${h.canLink ? `<button type="button" class="btn btn-quiet" data-action="recipe-stock-link" data-id="${esc(h.itemId)}" data-ingredient="${esc(h.ingredientId)}" aria-label="Use ${esc(h.name)} as ${esc(ingredientLabel(h.ingredientId))}">Use as ${esc(ingredientLabel(h.ingredientId))}</button>` : button("Review item", "item-edit", h.itemId, "btn-quiet")}</div>`).join("")}</section>`
      : "";
    return (
      heading(
        "RECIPE",
        r.name,
        `${r.time} min · ${esc(r.cuisine)} · ${r.difficulty}`,
        `<button class="icononly" data-action="go" data-id="cook" aria-label="Back to recipes">${icon("arrow-left")}</button>`,
      ) +
      (r.image
        ? `<article class="featured-meal"><img src="${r.image}" alt="${esc(r.name)}"></article>`
        : "") +
      `<section class="card"><div class="card-header"><h2>Ingredients</h2><label>Servings <select data-change="servings" data-id="${r.id}">${options(
        Array.from({ length: 12 }, (_, i) => i + 1),
        serv,
      )}</select></label></div>${a.requirements
        .map((x) => {
          const status = requirementStatuses.get(x);
          const candidate = status.measurementItems.find(
            (item) => item.canMeasure,
          );
          const stockText =
            status.status === "needs-measurement"
              ? `${status.measurementItems.map((item) => `${num(item.qty)} ${item.qty === 1 ? (normalizeCookUnit(item.unit) === "bunches" ? "bunch" : normalizeCookUnit(item.unit).replace(/s$/, "")) : item.unit}`).join(", ")} in Kitchen · weight needed`
              : `${num(status.qtyHave)} from Kitchen${status.qtyMissing ? ` · ${num(status.qtyMissing)} missing` : " · ready"}`;
          const action = candidate
            ? `<button type="button" class="btn btn-quiet" data-action="recipe-stock-measure" data-id="${esc(candidate.itemId)}" aria-label="Enter measured weight for ${esc(candidate.name)}"><span>Enter weight</span></button>`
            : status.status === "needs-measurement"
              ? '<span class="badge">Weight needed</span>'
              : icon(
                  status.status === "ready" ? "check-circle" : "shopping-cart",
                );
          const source =
            status.status === "needs-measurement"
              ? `<small>Kitchen item: ${esc(status.measurementItems.map((item) => item.name).join(", "))}</small>`
              : "";
          return `<div class="item-row"><div><b>${esc(x.name)}</b><small>${num(x.qty)} ${esc(x.unit)} needed · ${esc(stockText)}</small>${source}${x.allocations.length ? `<small>From: ${esc([...new Set(x.allocations.map((lot) => lot.name))].slice(0, 3).join(", "))}</small>` : ""}</div>${action}</div>`;
        })
        .join(
          "",
        )}${stockHelp}${a.blockedItems.length ? '<p class="notice">Items past their recorded date were excluded from this plan.</p>' : ""}${incompatibleReviewItems.length ? `<section class="notice"><b>Some units need review</b><p>Mass, volume and count are different. Correct stock units in Kitchen.</p>${incompatibleReviewItems.map((x) => button(`Review ${x.name}`, "item-edit", x.id, "btn-quiet")).join("")}</section>` : ""}${a.excluded.length ? `<p class="notice notice-warning">Matches your exclusions: ${esc(a.excluded.map(toolLabel).join(", "))}. Choose another recipe.</p>` : ""}${S.cooking ? `<p class="notice">Finish or cancel your current session before starting another.</p>${button("Resume current session", "cook-resume")}` : a.stockReady && !a.excluded.length ? button("Prepare ingredients", "cook-start", r.id, "btn-primary") : `${needsMeasurement ? '<p class="notice">Enter weights to continue. Measured weights update recipe availability without changing Kitchen quantities.</p>' : ""}${hasTrueMissing ? button("Add missing to shopping", "shopping-missing", r.id) : ""}${button("Review inventory links", "go", "kitchen")}`}</section><section class="card"><h2>Before you start</h2><p>${r.prepMinutes} min preparation · ${r.cookMinutes} min cooking</p><p class="details">Tools: ${esc(r.requiredTools.map(toolLabel).join(", "))}. Confirm these during preparation.</p><p class="details">Listed allergens: ${esc(r.allergens.map(toolLabel).join(", ") || "none listed")}. Check actual product labels and preparation conditions.</p></section>`
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
  function voiceView() {
    const state = voice.snapshot(),
      native = window.NomliNative;
    if (!native?.isNative)
      return `<section class="voice-panel"><h3>Speak to Zara</h3><p class="details">Voice capture is available in the Android app on supported phones. Type your question below instead.</p></section>`;
    const busy = ["starting", "listening", "processing"].includes(state.phase);
    const status = {
      idle: "Tap Speak, then Finish.",
      starting: "Starting microphone · allow phone permission if asked.",
      listening: "Listening · tap Finish when done.",
      processing: "Processing speech · please wait.",
      review: "Review transcript. Use or discard it before sending a question.",
      error: "Voice capture failed. Your typed question is kept.",
    }[state.phase];
    return `<section class="voice-panel" aria-labelledby="voice-title"><h3 id="voice-title">Speak to Zara</h3><p id="voice-disclosure" class="details">Your phone’s speech service may process audio online and may need internet or language packs. Nomli receives text. Nothing goes to Zara until you tap Send question.</p><label for="voice-language">Speech language</label><select id="voice-language" aria-describedby="voice-disclosure">${VOICE_LANGUAGES.map((language) => `<option value="${esc(language.id)}"${voiceLanguage === language.id ? " selected" : ""}>${esc(language.id === "en-US" ? "English (US)" : language.label)}</option>`).join("")}</select><p id="voice-status" class="voice-status" role="status" aria-live="polite"><span class="voice-indicator ${busy ? "is-active" : ""}" aria-hidden="true"></span>${esc(status)}</p>${state.error ? `<p id="voice-error" class="notice notice-warning" role="alert">${esc(state.error)} Type your question or try Speak again.</p>` : ""}<div class="actions">${!busy && state.phase !== "review" ? `<button type="button" class="btn btn-secondary" data-action="voice-start" aria-describedby="voice-disclosure voice-status${state.error ? " voice-error" : ""}"${assistantAbort ? " disabled" : ""}>Speak</button>` : ""}${state.phase === "listening" ? button("Finish", "voice-finish", "", "btn-primary") : ""}${busy ? button("Cancel voice", "voice-cancel", "", "btn-quiet") : ""}</div>${state.phase === "review" ? `<label for="voice-transcript">Transcript · edit before using</label><textarea id="voice-transcript" rows="4" dir="auto" maxlength="2000" aria-invalid="${!state.transcript.trim()}" aria-describedby="voice-status voice-edit-status voice-use-error">${esc(state.transcript)}</textarea><p id="voice-use-error" class="notice notice-warning" role="alert"${voiceUseError ? "" : " hidden"}>${esc(voiceUseError)}</p><p id="voice-edit-status" class="details">${state.transcript.trim() ? `${state.transcript.length}/2000 characters` : "Enter 1–2000 characters before using transcript."}</p><div class="actions"><button type="button" class="btn btn-secondary" data-action="voice-use"${state.transcript.trim() ? "" : " disabled"}>Use transcript${assistantDraft.trim() ? " · append to question" : ""}</button>${assistantDraft.trim() ? button("Replace question with transcript", "voice-replace", "", "btn-quiet").replace("<button ", `<button${state.transcript.trim() ? "" : " disabled"} `) : ""}${button("Discard transcript", "voice-cancel", "", "btn-quiet")}</div>` : ""}</section>`;
  }
  function assistantView() {
    const connected = Boolean(scanConfig.apiUrl && scanConfig.deviceToken);
    const newest = S.chat.at(-1);
    const savedReply =
      assistantReply &&
      newest?.q === assistantSentQuestion &&
      newest?.a === assistantReply.answer;
    const proposalCards = () =>
      assistantReply
        ? assistantReply.warnings
            .map((text) => `<p class="chat-warning">${esc(text)}</p>`)
            .join("") +
          assistantReply.proposals
            .map(
              (proposal, i) =>
                `<article class="zara-proposal"><span>${icon(proposal.type === "set_quantity" ? "refrigerator" : "chef-hat")}</span><div><b>${esc(proposal.type === "set_quantity" ? S.items[proposal.itemId]?.name : recipe(proposal.recipeId).name)}</b><p>${esc(proposal.reason)}</p>${button("Review change", "assistant-review", String(i), "btn-secondary")}</div></article>`,
            )
            .join("")
        : "";
    const pair = (q, a, actions = "", unsaved = false) =>
      `<article class="message message-user"><span class="sr-only">You</span><p dir="auto">${esc(q)}</p></article><article class="message message-zara"><img class="message-avatar" src="images/zara-96.webp" alt="" width="28" height="28"><div class="message-content"><span class="message-name">Zara${unsaved ? " · not saved" : ""}</span><p dir="auto">${esc(a)}</p>${actions}</div></article>`;
    const history = S.chat
      .slice(-20)
      .map((entry, i, rows) =>
        pair(
          entry.q,
          entry.a,
          savedReply && i === rows.length - 1 ? proposalCards() : "",
        ),
      )
      .join("");
    const live =
      assistantReply && !savedReply
        ? pair(
            assistantSentQuestion,
            assistantReply.answer,
            proposalCards(),
            true,
          )
        : "";
    const pending = assistantAbort
      ? `<article class="message message-user"><span class="sr-only">You</span><p dir="auto">${esc(assistantSentQuestion)}</p></article><div class="message message-zara" role="status"><img class="message-avatar" src="images/zara-96.webp" alt="" width="28" height="28"><div class="zara-typing"><span></span><span></span><span></span><b class="sr-only">Zara is thinking</b></div></div>`
      : "";
    const context = S.cooking
      ? `<button class="zara-context-link" data-action="cook-resume">${icon("chef-hat")}<span>${esc(recipe(S.cooking.rid).name)} · ${S.cooking.phase === "prep" ? "preparation" : `Step ${S.cooking.step + 1}`}</span>${icon("caret-right")}</button>`
      : `<p class="zara-context-summary">${icon("refrigerator")} ${Object.values(S.items).filter((item) => item.qty > 0).length} ingredients in your kitchen</p>`;
    const empty =
      !S.chat.length && !assistantReply && !assistantAbort
        ? `<section class="zara-welcome"><img src="images/zara-192.webp" alt="" width="76" height="76"><h2>What’s cooking?</h2><p>Let’s make something with what’s in your kitchen.</p><div class="zara-suggestions">${["What can I cook?", "Help with the current step", "What can I substitute?", "What should I use soon?"].map((q, i) => button(q, "assistant-suggestion", String(i), "btn-quiet")).join("")}</div></section>`
        : "";
    return `<section class="zara-shell"><header class="zara-header"><img src="images/zara-96.webp" alt="" width="44" height="44"><div><h1 data-title tabindex="-1">Zara</h1><p>Your kitchen companion</p></div><button class="icononly" data-action="assistant-info" aria-label="Chat settings and privacy">${icon("dots-three")}</button></header>${context}<div class="zara-thread" role="log" aria-label="Conversation with Zara" aria-live="polite" aria-relevant="additions">${empty}${history}${live}${pending}</div><section class="zara-compose-area">${!connected ? `<div class="zara-connect"><p>Connect your kitchen to chat with Zara.</p>${button("Connect Zara", "scan-settings", "", "btn-secondary")}</div>` : ""}${voiceExpanded || voicePending() ? `<div class="zara-voice-drawer"><button class="icononly voice-drawer-close" data-action="voice-panel-close" aria-label="Close voice controls">${icon("x")}</button>${voiceView()}</div>` : ""}${assistantError ? `<p class="chat-error" role="alert">${esc(assistantError)}</p>` : ""}<form data-form="assistant" class="zara-composer" aria-busy="${Boolean(assistantAbort)}"><label class="sr-only" for="assistant-question">Question</label><textarea id="assistant-question" name="question" placeholder="Ask about your kitchen…" rows="1" maxlength="2000" dir="auto" required aria-describedby="assistant-status"${assistantAbort || voicePending() ? " readonly" : ""}>${esc(assistantDraft)}</textarea>${window.NomliNative?.isNative ? `<button type="button" class="composer-mic" data-action="voice-toggle" aria-label="Voice message" aria-expanded="${voiceExpanded || voicePending()}"${assistantAbort ? " disabled" : ""}>${icon("microphone")}</button>` : ""}<button class="composer-send" aria-label="${assistantError ? "Retry question" : "Send question"}"${assistantAbort || voicePending() || !connected ? " disabled" : ""}>${icon("arrow-right")}</button></form><p id="assistant-status" class="zara-send-note" role="status">${assistantAbort ? `Zara is thinking. ${button("Cancel", "assistant-cancel", "", "btn-quiet")}` : voicePending() ? "Use or discard your transcript before sending." : "Uses your kitchen context · review advice before acting"}</p></section></section>`;
  }
  async function sendAssistant(question) {
    if (assistantAbort || voicePending()) return;
    assistantDraft = question.trim();
    const sentQuestion = assistantDraft;
    assistantSentQuestion = sentQuestion;
    voiceExpanded = false;
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
      } else {
        assistantDraft = sentQuestion;
        assistantReply = reply;
        assistantContext = context;
        assistantError =
          "Reply received, but could not be saved on this device.";
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
  function viewMarkup() {
    return `${storageError ? `<section class="notice notice-warning recovery-notice" role="alert"><b>Storage error</b><p>${esc(storageError)}</p></section>` : ""}${recoveryRequired ? `<section class="notice notice-warning recovery-notice" role="alert"><b>Stored data needs recovery.</b><p>${esc(loadResult.notice || "Import a valid backup or explicitly clear local data. Current data will not be overwritten automatically.")}</p></section>` : ""}${(screens[S.route] || kitchenView)()}`;
  }
  function render() {
    const editingQuestion = document.activeElement?.id === "assistant-question";
    clearInterval(timerHandle);
    timerHandle = null;
    view.dataset.screen = S.route;
    view.innerHTML = viewMarkup();
    mountView();
    view.setAttribute("aria-busy", "false");
    renderNav();
    if (S.route === "assistant" && editingQuestion)
      $("#assistant-question")?.focus({ preventScroll: true });
    else $("[data-title]", view)?.focus({ preventScroll: true });
    if (S.cooking?.running) startTimer();
  }
  function photoEditor(id, item) {
    const draft = itemPhotoDraft;
    const hasPhoto = !draft?.remove && Boolean(draft?.blob || item.photoId);
    return `<section class="photo-editor" aria-label="Ingredient photo"><span class="photo-editor-preview">${draft?.previewUrl ? `<img src="${esc(draft.previewUrl)}" alt="New ingredient photo">` : draft?.remove ? icon("camera") : itemThumbnail(id, item)}</span><div><b>${hasPhoto ? "Your ingredient photo" : "Make it yours"}</b><p>Photo stays on this device.</p><div class="actions">${button(hasPhoto ? "Change photo" : "Add photo", "item-photo", id, "btn-secondary")}${hasPhoto ? button("Remove", "item-photo-remove", id, "btn-quiet") : ""}</div></div></section>`;
  }
  async function chooseIngredientPhoto() {
    if (window.NomliNative?.isNative) return window.NomliNative.camera();
    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/jpeg,image/png,image/webp";
      input.addEventListener(
        "change",
        () => resolve(input.files?.[0] || null),
        { once: true },
      );
      input.addEventListener("cancel", () => resolve(null), { once: true });
      input.click();
    });
  }
  function itemForm(id) {
    releaseItemPhoto();
    itemPhotoDraft = { id, blob: null, previewUrl: null, remove: false };
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
      `<form data-form="item" data-id="${id}">${errors()}${photoEditor(id, item)}${categoryField(item)}${field("Ingredient name", "name", item.name, "text", 'maxlength="200" dir="auto" required')}${field("Quantity on hand", "qty", item.qty, "number", 'min="0" max="1000000000" step="any" inputmode="decimal" required')}<label class="field">Unit<select name="unit">${options(["g", "kg", "ml", "l", "count", "pieces", "bunches", "slices", "cloves"], item.unit)}</select></label><div class="cook-link-fields">${renderIngredientLinkFields({ name: item.name, ingredientId: item.ingredientId, unit: item.unit, gramsPerUnit: item.gramsPerUnit, autoMatch: true, categoryId: item.categoryId, cookingLinkDisabled: item.cookingLinkDisabled })}</div><label class="field">Location<select name="storage">${options(["Fridge", "Freezer", "Pantry", "Spices"], item.storage)}</select></label>${field("Expiry (optional)", "expiry", item.expiry || "", "date")}<label class="field">Expiry source<select name="expiryProvenance">${options(["user", "printed", "estimated"], item.expiryProvenance || (item.estimated ? "estimated" : "user"))}</select><small>Used only when expiry is entered.</small></label><div class="modal-actions">${id === "new" ? "" : button("Delete ingredient", "item-delete", id, "btn-quiet")}<button class="btn btn-primary">Save ingredient</button></div></form>`,
      "item-edit",
    );
  }
  async function exportBackup() {
    cancelVoice();
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
      announce("Backup exported. Ingredient photos stay on this device.");
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
    cancelVoice();
    try {
      const text = await chooseBackupText();
      if (text == null) return;
      const candidate = store.parseBackup(text);
      importCandidate = candidate;
      openModal(
        "Preview backup",
        `<form data-form="backup"><p>This will replace current local data with <b>${Object.keys(candidate.items).length} ingredients</b>, ${candidate.shopping.length} shopping entries and ${candidate.receipts.length} receipts.</p>${errors()}${field("Type REPLACE to confirm", "confirmation", "", "text", 'autocomplete="off" required pattern="REPLACE"')}<button class="btn btn-primary">Replace local data</button></form><p class="details">Nothing changes until explicit confirmation. Ingredient photos are stored separately on this device and are not included in this backup.</p>`,
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
    scanRetry = null;
    const kind =
      source === "expiry"
        ? "expiry"
        : source.startsWith("receipt")
          ? "receipt"
          : "groceries";
    scanAbort?.abort();
    releaseScanPhoto();
    openModal(
      "Reading scan",
      `<section class="scan-live" aria-busy="true"><span class="scan-spinner" aria-hidden="true">${icon("circle-notch")}</span><h3>Securely reading ${kind === "receipt" ? "receipt" : kind === "expiry" ? "label" : "groceries"}</h3><p class="muted" data-scan-progress role="status">Sending your source and reading printed details. You can cancel safely.</p><button class="btn btn-secondary" data-action="scan-cancel">Cancel</button></section>`,
      "scan-reading",
    );
    const controller = new AbortController();
    const ownerEpoch = ++scanEpoch;
    scanAbort = controller;
    for (const [delay, message] of [
      [
        15000,
        "Scanner is still working. Your kitchen stays unchanged until you review and save.",
      ],
      [
        40000,
        "Recognition is taking longer than usual. You can wait or cancel safely.",
      ],
    ])
      scanTimers.push(
        setTimeout(() => {
          if (scanEpoch === ownerEpoch && !controller.signal.aborted) {
            const status = $("[data-scan-progress]", modal);
            if (status) status.textContent = message;
          }
        }, delay),
      );
    try {
      if (kind === "groceries") {
        try {
          const blob = await itemPhotos.prepare(
            payload.file || payload.nativePhoto,
          );
          if (controller.signal.aborted || scanEpoch !== ownerEpoch) return;
          scanPhotoDraft = {
            source: payload.file || payload.nativePhoto,
            previewUrl: URL.createObjectURL(blob),
            crops: new Map(),
          };
        } catch {
          if (controller.signal.aborted || scanEpoch !== ownerEpoch) return;
          scanPhotoDraft = {
            error:
              "Photo preview unavailable. You can add a photo from Edit ingredient after saving.",
          };
        }
      }
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
      if (kind === "groceries" && scanPhotoDraft?.source) {
        const owner = scanPhotoDraft;
        for (const line of scanDraft.lines) {
          if (
            controller.signal.aborted ||
            scanEpoch !== ownerEpoch ||
            scanPhotoDraft !== owner
          )
            return;
          if (!line.photoRegion) continue;
          try {
            const blob = await preparePhotoRegion({
              source: owner.source,
              region: line.photoRegion,
            });
            if (
              controller.signal.aborted ||
              scanEpoch !== ownerEpoch ||
              scanPhotoDraft !== owner
            )
              return;
            owner.crops.set(line.lineId, {
              blob,
              previewUrl: URL.createObjectURL(blob),
              photoId: null,
              region: photoCropRegion(blob),
            });
          } catch {
            /* A failed suggestion never attaches the full scene to an ingredient. */
          }
        }
      }
      if (
        controller.signal.aborted ||
        scanAbort !== controller ||
        scanEpoch !== ownerEpoch
      )
        return;
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
        `<section class="notice notice-warning" role="alert"><b>Nothing was changed</b><p>${esc(error?.message || "Scanner request failed.")}</p></section><div class="form-actions">${button("Retry same scan", "scan-retry", "", "btn-primary")}${button("Try another source", "go", "scan", "btn-secondary")}${button("Connection", "scan-settings", "", "btn-quiet")}</div>`,
      );
      scanRetry = { source, payload };
    } finally {
      if (scanAbort === controller) scanAbort = null;
    }
  }
  function scanPhotoReview() {
    if (scanPhotoDraft?.error)
      return `<p class="details">${esc(scanPhotoDraft.error)}</p>`;
    if (!scanPhotoDraft?.source) return "";
    return `<section class="scan-photo-preview"><img src="${esc(scanPhotoDraft.previewUrl)}" alt="Your grocery scan"><div><b>Individual ingredient photos</b><small>Check each crop below. Saved only on this device. Existing photos stay when merging.</small></div></section>`;
  }
  function scanLinePhoto(line) {
    if (!scanPhotoDraft?.source) return "";
    const crop = scanPhotoDraft.crops.get(line.lineId);
    return `<div class="scan-line-photo" data-photo-line="${esc(line.lineId)}"><span>${crop?.previewUrl ? `<img src="${esc(crop.previewUrl)}" alt="Crop for ${esc(line.name || "ingredient")}">` : icon("camera")}</span><div><b>${crop ? "Ingredient crop" : "No photo crop"}</b><small>${crop ? "Review this ingredient’s thumbnail." : "Choose just this ingredient from your photo."}</small><div class="actions">${button(crop ? "Adjust crop" : "Choose crop", "scan-photo-crop", line.lineId, "btn-quiet")}${crop ? button("Remove", "scan-photo-remove", line.lineId, "btn-quiet") : ""}</div></div></div>`;
  }
  function updateScanSummary(form) {
    const fd = new FormData(form);
    const included = scanDraft.lines.filter((line) =>
      fd.has(`include-${line.lineId}`),
    );
    const list = $("[data-scan-summary-list]", form);
    list.innerHTML = scanDraft.lines
      .map((line, index) => {
        const keep = fd.has(`include-${line.lineId}`);
        const category =
          getFoodCategory(fd.get(`category-${line.lineId}`)) ||
          getFoodCategory("other");
        const name = String(
          fd.get(`name-${line.lineId}`) || line.name || "Unnamed item",
        );
        return `<button type="button" class="scan-summary-item${keep ? "" : " is-skipped"}" data-scan-jump="${index}" value="${index}">${categoryArtwork(category, editedArtworkItem(line, name))}<span><b dir="auto">${esc(name)}</b><small>${keep ? `<bdi dir="ltr">${esc(fd.get(`quantity-${line.lineId}`))} ${esc(fd.get(`unit-${line.lineId}`))}</bdi> · ${esc(fd.get(`storage-${line.lineId}`))}` : "Skipped"}</small></span><span class="scan-summary-edit">Edit</span></button>`;
      })
      .join("");
    const saveButton = $("[data-scan-save]", form);
    saveButton.textContent = `Add ${included.length} ${included.length === 1 ? "item" : "items"}`;
    saveButton.disabled = !included.length || !form.elements.confirmed.checked;
    const choice = form.elements.excludeFinance;
    if (choice) {
      let financeComplete = included.length === scanDraft.lines.length;
      let total = null;
      try {
        const currency = String(fd.get("scanCurrency") || "");
        total = parseMinorAmount(String(fd.get("scanTotal") || ""), currency);
        const tax = parseMinorAmount(String(fd.get("scanTax") || ""), currency);
        const discount = parseMinorAmount(
          String(fd.get("scanDiscount") || ""),
          currency,
        );
        const subtotal = included.reduce(
          (sum, line) =>
            sum +
            parseMinorAmount(
              String(fd.get(`cost-${line.lineId}`) || ""),
              currency,
            ),
          0,
        );
        financeComplete &&= subtotal + tax - discount === total;
      } catch {
        financeComplete = false;
      }
      if (!choice.dataset.userTouched) choice.checked = !financeComplete;
      const receiptLabel = $("[data-scan-receipt-summary]", form);
      receiptLabel.textContent = choice.checked
        ? "Inventory only · no spending will be added"
        : total === null
          ? "Review receipt spending"
          : `Receipt total · ${formatMoneyMinor(total, String(fd.get("scanCurrency")))}`;
    }
  }
  function showScanReview() {
    if (!scanDraft) return;
    if (scanDraft.kind === "expiry") return showLegacyScanReview();
    openModal(
      "Review items",
      renderScanReview({
        draft: scanDraft,
        items: S.items,
        scanLinePhoto,
        lineArtwork: (line) =>
          scanPhotoDraft?.crops?.get(line.lineId)?.previewUrl
            ? `<img src="${esc(scanPhotoDraft.crops.get(line.lineId).previewUrl)}" alt="Your ingredient crop">`
            : "",
      }),
      "scan-review",
    );
    const form = $('[data-form="scan-import"]', modal);
    scanWizard = initScanReviewWizard(form, {
      onInvalid: (field, message) => formError(form, message, field),
      onSummary: () => updateScanSummary(form),
    });
  }
  function showLegacyScanReview() {
    const draft = scanDraft;
    if (!draft) return;
    const currency = draft.currency || "Not provided";
    const moneyDigits = currencyDigits(draft.currency);
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
          return `<fieldset class="scan-line" data-line-id="${esc(line.lineId)}"><legend>Label ${index + 1}</legend><label class="checkbox-field scan-include"><input type="checkbox" name="include-${esc(line.lineId)}" checked><span>Include expiry update</span></label>${field("Detected item", `name-${line.lineId}`, line.name || "", "text", 'maxlength="200" dir="auto" required')}${field("Printed expiry", `expiry-${line.lineId}`, line.expiry || "", "date", "required")}<label class="field">Apply to existing ingredient<select name="target-${esc(line.lineId)}" required><option value="">Choose ingredient</option>${Object.entries(
            S.items,
          )
            .map(
              ([id, item]) =>
                `<option value="${esc(id)}"${id === match ? " selected" : ""}>${esc(item.name)}</option>`,
            )
            .join(
              "",
            )}</select></label>${line.warnings?.length ? `<p class="scan-line-warning">${esc(line.warnings.join(" "))}</p>` : ""}</fieldset>`;
        return `<fieldset class="scan-line" data-line-id="${esc(line.lineId)}"><legend>Line ${index + 1}</legend>${scanLinePhoto(line)}<label class="checkbox-field scan-include"><input type="checkbox" name="include-${esc(line.lineId)}" checked><span>Include food item</span></label>${field("Name", `name-${line.lineId}`, line.name || "", "text", 'maxlength="200" dir="auto" required')}
      <div class="field-grid">${field("Quantity", `quantity-${line.lineId}`, line.quantity ?? "", "text", 'maxlength="128" inputmode="decimal" dir="ltr" data-scan-quantity required')}<label class="field">Unit<select name="unit-${esc(line.lineId)}" required><option value="">Choose unit</option>${["g", "kg", "ml", "l", "count", "pieces", "bunches", "cloves", "slices"].map((unit) => `<option value="${unit}"${unit === line.unit ? " selected" : ""}>${unit}</option>`).join("")}</select></label></div>
      <div class="cook-link-fields">${renderIngredientLinkFields({ prefix: `cook-${line.lineId}-`, name: line.name, unit: line.unit })}</div>
        <div class="field-grid"><label class="field">Location<select name="storage-${esc(line.lineId)}" required><option value="">Choose location</option>${options(["Fridge", "Freezer", "Pantry", "Spices"], line.storage || "")}</select></label>${field("Expiry (optional)", `expiry-${line.lineId}`, line.expiry || "", "date")}</div>
      <div class="field-grid">${field(`Line cost (${draft.currency || "choose currency"}, optional)`, `cost-${line.lineId}`, line.lineTotalMinor == null || moneyDigits === null ? "" : formatMinorInput(line.lineTotalMinor, draft.currency), "text", 'maxlength="128" inputmode="decimal" dir="ltr" data-scan-money')}<label class="field">Inventory action<select name="target-${esc(line.lineId)}"><option value="">Create new item</option>${Object.entries(
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
      `<form data-form="scan-import" aria-describedby="scan-number-help" data-money-currency="${esc(draft.currency || "")}">${errors()}<p class="details" id="scan-number-help">Arabic and English digits accepted: <bdi dir="ltr">١٢٫٥٠ / 12.50</bdi>. Names follow Arabic or English text direction automatically.</p>${scanPhotoReview()}<div class="scan-result-meta"><span><b>${draft.lines.length}</b> extracted lines</span><span><b>${esc(currency)}</b> currency</span>${draft.merchant ? `<span><bdi dir="auto"><b>${esc(draft.merchant)}</b></bdi> merchant</span>` : ""}</div>${draft.kind === "receipt" ? `<fieldset class="scan-receipt-meta"><legend>Receipt details</legend><div class="field-grid">${field("Merchant / source", "scanMerchant", draft.merchant || "", "text", 'maxlength="200" dir="auto"')}${field("Receipt date (optional)", "scanReceiptDate", draft.receiptDate || "", "date")}</div><div class="field-grid"><label class="field">Currency<select name="scanCurrency">${moneyCurrencies.map((code) => `<option value="${code}"${code === (draft.currency || "") ? " selected" : ""}>${code || "Choose currency"}</option>`).join("")}</select></label>${field(`Receipt total (${draft.currency || "choose currency"})`, "scanTotal", draft.totalMinor == null || moneyDigits === null ? "" : formatMinorInput(draft.totalMinor, draft.currency), "text", 'maxlength="128" inputmode="decimal" dir="ltr" data-scan-money')}</div><div class="field-grid">${field(`Additional tax (${draft.currency || "choose currency"})`, "scanTax", draft.taxMinor == null || moneyDigits === null ? "" : formatMinorInput(draft.taxMinor, draft.currency), "text", 'maxlength="128" inputmode="decimal" dir="ltr" data-scan-money')}${field(`Receipt-level discount (${draft.currency || "choose currency"})`, "scanDiscount", draft.discountMinor == null || moneyDigits === null ? "" : formatMinorInput(draft.discountMinor, draft.currency), "text", 'maxlength="128" inputmode="decimal" dir="ltr" data-scan-money')}</div><p class="details">Enter only tax added after line prices. Leave tax at zero when VAT is already included. Discount is subtracted from the line subtotal.</p>${moneyDigits === null && draft.currency ? '<p class="scan-line-warning">Unsupported currency. Choose a supported currency and re-enter all monetary amounts.</p>' : ""}<p class="scan-money-warning" data-money-warning role="status"></p><label class="checkbox-field"><input type="checkbox" name="excludeFinance"><span>Save inventory only; exclude this receipt from spending</span></label><p class="details">Choose this when excluding receipt lines or when currency and totals are incomplete or do not match.</p></fieldset>` : ""}${draft.warnings?.length ? `<section class="notice notice-warning"><b>Review needed</b><p>${esc(draft.warnings.join(" "))}</p></section>` : ""}<div class="scan-lines">${lines || '<p class="empty">Scanner returned no food lines.</p>'}</div><label class="checkbox-field scan-confirm"><input type="checkbox" name="confirmed" required><span>I checked every included line and chose create or merge.</span></label><button class="btn btn-primary" ${draft.lines.length ? "" : "disabled"}>Add reviewed items</button><p class="details">One confirmed save updates inventory${draft.kind === "receipt" ? " and receipt spending unless you explicitly exclude finance" : ""}. Cancel leaves both unchanged.</p></form>`,
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
        if (S.cooking?.running)
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
    if (event.target.matches('[data-change="search"]')) {
      S.search = event.target.value.trim();
      const list = $("[data-inventory-list]", view);
      if (list) {
        list.innerHTML = inventoryRowsMarkup();
        hydratePhotos(list);
      }
      backgroundSave();
    }
    if (event.target.id === "voice-transcript") {
      const text = event.target.value;
      if (text.trim() && text.length <= 2000) clearVoiceUseError();
      try {
        voice.editTranscript(text);
      } catch {
        /* Empty drafts stay editable until valid. */
      }
      const valid = Boolean(text.trim()) && text.length <= 2000;
      event.target.setAttribute("aria-invalid", String(!valid));
      $("#voice-edit-status").textContent = valid
        ? `${text.length}/2000 characters`
        : "Enter 1–2000 characters before using transcript.";
      document
        .querySelectorAll(
          '[data-action="voice-use"],[data-action="voice-replace"]',
        )
        .forEach((control) => {
          control.disabled = !valid;
        });
    }
    if (event.target.id === "assistant-question") {
      assistantDraft = event.target.value;
      clearVoiceUseError();
      event.target.style.height = "auto";
      event.target.style.height =
        Math.min(112, event.target.scrollHeight) + "px";
    }
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
        navigate(S.route);
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
        S = syncCookingInventory(result.state).state;
      }, "Meal saved. Inventory updated.");
      if (saved) {
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
    if (a === "assistant-info") {
      if (assistantAbort) return;
      return openModal(
        "Zara & your kitchen",
        `<section class="zara-about"><img src="images/zara-192.webp" alt="" width="64" height="64"><h3>Help for your everyday cooking</h3><p>On Send, your question, kitchen inventory, preferences, tools, current recipe and latest six exchanges go to Gemini through your protected connection.</p><p>Up to 20 exchanges stay on this device and appear in backups. Always review cooking advice before acting. Stock changes need a separate confirmation.</p><div class="stack">${button("Scan connection", "scan-settings", "", "btn-secondary")}${S.chat.length ? button("Clear conversation", "assistant-clear", "", "btn-quiet") : ""}</div></section>`,
        "assistant-info",
      );
    }
    if (a === "voice-toggle") {
      if (assistantAbort) return;
      voiceExpanded = !voiceExpanded;
      if (!voiceExpanded) cancelVoice();
      render();
      return;
    }
    if (a === "voice-panel-close") {
      cancelVoice();
      voiceExpanded = false;
      render();
      return;
    }
    if (a === "scan-photo-crop" || a === "scan-photo-remove") {
      const owner = scanPhotoDraft;
      const line = scanDraft?.lines.find((line) => line.lineId === id);
      const form = el.closest('form[data-form="scan-import"]');
      if (
        !owner?.source ||
        !line ||
        !form ||
        !new FormData(form).has(`include-${id}`)
      )
        return;
      const prior = owner.crops.get(id);
      if (a === "scan-photo-remove") {
        if (prior?.previewUrl) URL.revokeObjectURL(prior.previewUrl);
        if (
          prior?.photoId &&
          !Object.values(S.items).some((item) => item.photoId === prior.photoId)
        )
          void itemPhotos.remove(prior.photoId).catch(() => {});
        owner.crops.delete(id);
      } else {
        setBusy(true, modal);
        try {
          const blob = await cropItemPhoto({
            source: owner.source,
            title: `Crop ${line.name || "ingredient"}`,
            region: prior?.region || line.photoRegion || null,
          });
          if (!blob || owner !== scanPhotoDraft || !form.isConnected) return;
          if (prior?.previewUrl) URL.revokeObjectURL(prior.previewUrl);
          if (
            prior?.photoId &&
            !Object.values(S.items).some(
              (item) => item.photoId === prior.photoId,
            )
          )
            void itemPhotos.remove(prior.photoId).catch(() => {});
          owner.crops.set(id, {
            blob,
            previewUrl: URL.createObjectURL(blob),
            photoId: null,
            region: photoCropRegion(blob),
          });
        } catch {
          formError(
            form,
            "Photo could not be cropped. Retry or save without this photo.",
          );
        } finally {
          setBusy(false, modal);
          if (el.isConnected) el.focus({ preventScroll: true });
        }
      }
      const tile = [...form.querySelectorAll("[data-photo-line]")].find(
        (tile) => tile.dataset.photoLine === id,
      );
      const card = tile?.closest("[data-scan-card]");
      if (card) {
        const visual = $("[data-scan-card-visual]", card);
        const crop = owner.crops.get(id);
        const category =
          getFoodCategory(form.elements.namedItem(`category-${id}`)?.value) ||
          inferFoodCategory(line).category;
        if (visual)
          visual.innerHTML = crop?.previewUrl
            ? `<img src="${esc(crop.previewUrl)}" alt="Your ingredient crop">`
            : categoryArtwork(
                category,
                editedArtworkItem(
                  line,
                  form.elements.namedItem(`name-${id}`)?.value || line.name,
                ),
              );
        form.elements.confirmed.checked = false;
      }
      if (tile) {
        tile.outerHTML = scanLinePhoto(line);
        [...form.querySelectorAll("[data-photo-line]")]
          .find((tile) => tile.dataset.photoLine === id)
          ?.querySelector("button")
          ?.focus({ preventScroll: true });
      }
      return;
    }
    if (a === "item-photo") {
      const owner = itemPhotoDraft;
      const form = el.closest('form[data-form="item"]');
      if (!owner || owner.id !== id || !form) return;
      setBusy(true, modal);
      try {
        const source = await chooseIngredientPhoto();
        if (
          !source ||
          source.cancelled ||
          owner !== itemPhotoDraft ||
          !form.isConnected
        )
          return;
        const blob = await cropItemPhoto({
          source,
          title: "Crop ingredient photo",
        });
        if (!blob || owner !== itemPhotoDraft || !form.isConnected) return;
        if (owner.previewUrl) URL.revokeObjectURL(owner.previewUrl);
        Object.assign(owner, {
          blob,
          previewUrl: URL.createObjectURL(blob),
          remove: false,
        });
        $(".photo-editor", form).outerHTML = photoEditor(id, S.items[id] || {});
      } catch {
        if (form.isConnected)
          formError(
            form,
            "Photo could not be prepared. Choose a JPEG, PNG or WebP under 4 MiB.",
          );
      } finally {
        setBusy(false, modal);
        if (form.isConnected)
          $('[data-action="item-photo"]', form)?.focus({ preventScroll: true });
      }
      return;
    }
    if (a === "item-photo-remove") {
      if (itemPhotoDraft?.id !== id) return;
      if (itemPhotoDraft.previewUrl)
        URL.revokeObjectURL(itemPhotoDraft.previewUrl);
      Object.assign(itemPhotoDraft, {
        blob: null,
        previewUrl: null,
        remove: true,
      });
      $(".photo-editor", modal).outerHTML = photoEditor(id, S.items[id] || {});
      return;
    }
    if (a === "voice-start") {
      clearVoiceUseError();
      if (!assistantAbort && !voicePending()) void voice.start(voiceLanguage);
      return;
    }
    if (a === "voice-finish") return void voice.stop();
    if (a === "voice-cancel") return cancelVoice();
    if (a === "voice-use" || a === "voice-replace") {
      try {
        const transcript = $("#voice-transcript").value;
        if (
          a === "voice-use" &&
          (assistantDraft ? `${assistantDraft}\n${transcript}` : transcript)
            .length > 2000
        )
          throw new Error(
            "Question plus transcript exceeds 2000 characters. Shorten one, or choose Replace.",
          );
        clearVoiceUseError();
        voice.editTranscript(transcript);
        assistantDraft = voice.useTranscript(assistantDraft, {
          mode: a === "voice-replace" ? "replace" : "append",
        });
        voiceExpanded = false;
        view.innerHTML = viewMarkup();
        mountView();
        $("#assistant-question")?.focus();
      } catch (error) {
        voiceUseError = error.message;
        const box = $("#voice-use-error");
        if (box) {
          box.textContent = voiceUseError;
          box.hidden = false;
        }
      }
      return;
    }
    if (a === "assistant-cancel") {
      cancelAssistant();
      assistantError = "Request cancelled. Your question is kept.";
      return render();
    }
    if (a === "assistant-suggestion" || a === "assistant-prompt") {
      if (assistantAbort || voicePending()) return;
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
        closeModal();
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
    if (a === "recipe-stock-link") {
      const ingredientId = el.dataset.ingredient;
      const r = recipe(S.recipe);
      const hint = getRecipeStockHints(S, assessment(r)).find(
        (entry) => entry.itemId === id && entry.ingredientId === ingredientId,
      );
      if (!hint?.canLink)
        return announce("This Kitchen match changed. Review the item again.");
      const snapshot = JSON.stringify(S.items[id]);
      openModal(
        `Use as ${ingredientLabel(ingredientId)}?`,
        `${errors()}<p dir="auto"><b>${esc(hint.name)}</b></p><p>${num(hint.qty)} ${esc(hint.unit)} in Kitchen.</p><p>Connect this item to <b>${esc(ingredientLabel(ingredientId))}</b> for recipes. Stock quantities stay unchanged. Cooking still requires a separate deduction review.</p>${button("Use ingredient", "recipe-stock-link-confirm", "", "btn-primary")}${button("Cancel", "modal-close", "", "btn-quiet")}`,
      );
      recipeStockLinkReview = {
        itemId: id,
        ingredientId,
        snapshot,
        recipeId: r.id,
      };
      return;
    }
    if (a === "recipe-stock-link-confirm") {
      const review = recipeStockLinkReview;
      if (!review) return;
      if (
        await commit(() => {
          const r = recipe(S.recipe);
          if (
            r.id !== review.recipeId ||
            JSON.stringify(S.items[review.itemId]) !== review.snapshot
          )
            throw new Error(
              "Kitchen item changed. Close this review and check the match again.",
            );
          S = linkRecipeStock(S, assessment(r), { ...review, confirmed: true });
        }, "Kitchen item connected. Recipe availability updated.")
      ) {
        recipeStockLinkReview = null;
        closeModal();
        render();
      }
      return;
    }
    if (a === "recipe-stock-measure") {
      const r = recipe(S.recipe);
      const candidate = assessment(r)
        .requirements.flatMap(
          (requirement) =>
            getRecipeRequirementStockStatus(S, assessment(r), requirement)
              .measurementItems,
        )
        .find((item) => item.itemId === id);
      if (!candidate?.canMeasure)
        return announce(
          "This Kitchen item changed or is allocated to active cooking.",
        );
      recipeStockMeasurementReview = {
        itemId: id,
        recipeId: r.id,
        snapshot: JSON.stringify(S.items[id]),
      };
      const singular =
        normalizeCookUnit(candidate.unit) === "bunches"
          ? "bunch"
          : normalizeCookUnit(candidate.unit).replace(/s$/, "");
      const quantityUnit = candidate.qty === 1 ? singular : candidate.unit;
      openModal(
        `Measure ${candidate.name}`,
        `<form data-form="recipe-stock-measurement">${errors()}<p><b>${num(candidate.qty)} ${esc(quantityUnit)} ${esc(candidate.name)}</b> in Kitchen. Weigh one actual ${esc(singular)}; stock quantity stays unchanged.</p><label class="field">Grams in one ${esc(singular)}<input name="gramsPerUnit" type="text" inputmode="decimal" maxlength="128" required aria-describedby="measurement-help" autocomplete="off"></label><small id="measurement-help">Enter measured grams only. No value is guessed.</small><div class="modal-actions"><button class="btn btn-primary">Save measurement</button>${button("Cancel", "modal-close", "", "btn-quiet")}</div></form>`,
        "recipe-stock-measurement",
      );
      $('[name="gramsPerUnit"]', modal)?.focus();
      return;
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
          button("Reset local inventory", "reset-ask") +
          `<p class="details">Nomli Test · v${esc(packageInfo.version)}</p>`,
      );
    if (a === "backup-export") return exportBackup();
    if (a === "backup-import") return importBackup();
    if (a === "reset-ask")
      return openModal(
        "Clear local data",
        `<p>Clear inventory, meals, receipts, shopping and assistant history on this device?</p>${button("Clear local data", "reset-confirm", "", "btn-primary")}`,
      );
    if (a === "reset-confirm") {
      if (
        await commit(
          () => {
            S.items = {};
            S.meals = [];
            S.shopping = [];
            S.receipts = [];
            S.chat = [];
            S.cooking = null;
            S = syncCookingInventory(S).state;
          },
          "Local data cleared.",
          true,
        )
      ) {
        setBusy(true, document);
        try {
          await itemPhotos.clear();
          photoSources.clear();
        } catch {
          announce(
            "Inventory cleared. Photo cleanup failed; use Clear local data again to retry.",
          );
        } finally {
          setBusy(false, document);
        }
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
      const removedPhoto = S.items[id]?.photoId;
      if (
        await commit(() => {
          delete S.items[id];
          S.shopping = S.shopping.filter((x) => x.id !== id);
        }, "Ingredient deleted.")
      ) {
        if (
          removedPhoto &&
          !Object.values(S.items).some((item) => item.photoId === removedPhoto)
        ) {
          photoSources.delete(removedPhoto);
          void itemPhotos.remove(removedPhoto).catch(() => {});
        }
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
          const assessed = assessment(recipe(id));
          for (const x of assessed.missing.filter((requirement) => {
            const status = getRecipeRequirementStockStatus(
              S,
              assessed,
              requirement,
            );
            return status.status === "missing" || status.status === "partial";
          })) {
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
    if (a === "scan-retry") {
      const retry = scanRetry;
      if (retry) return runScan(retry.source, retry.payload);
      return navigate("scan");
    }
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
          S = syncCookingInventory(S).state;
        }, "Session cancelled. Inventory unchanged.")
      ) {
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
    const cookingSelect = e.target.matches('select[name$="ingredientId"]');
    if (cookingSelect) {
      e.target.dataset.userTouched = "1";
      e.target.dataset.cookOptout = e.target.value ? "0" : "1";
      refreshCookingMatch(
        e.target.closest("[data-scan-card]") || e.target.form,
      );
    }
    const scanForm = e.target.closest(".scan-review-wizard");
    if (scanForm && e.target.name === "excludeFinance") {
      scanForm.elements.confirmed.checked = false;
      e.target.dataset.userTouched = "1";
      updateScanSummary(scanForm);
      validateScanReviewFields(scanForm);
      return;
    }
    if (
      e.target.matches(
        'select[name="categoryId"], .scan-review-wizard select[name^="category-"]',
      )
    ) {
      e.target.dataset.userTouched = "1";
      const card = e.target.closest("[data-scan-card]");
      if (card) {
        const category = getFoodCategory(e.target.value);
        if (!category) return;
        const visual = $("[data-scan-card-visual]", card);
        if (visual && !visual.querySelector("img")) {
          const line = scanDraft?.lines?.find(
            (line) => String(line.lineId) === String(card.dataset.lineId),
          );
          visual.innerHTML = categoryArtwork(
            category,
            editedArtworkItem(line, $('input[name^="name-"]', card)?.value),
          );
        }
        const storage = $('select[name^="storage-"]', card);
        if (storage && !storage.dataset.userTouched)
          storage.value = inferFoodCategory({
            name: $('input[name^="name-"]', card).value,
            categoryId: category.id,
          }).suggestedStorage;
        initMobileSelects(card);
      }
      const itemForm = e.target.closest('form[data-form="item"]');
      if (itemForm) {
        const preview = $(".photo-editor-preview .ingredient-thumb", itemForm);
        const category = getFoodCategory(e.target.value);
        if (preview && category && !preview.querySelector("img"))
          preview.innerHTML = categoryArtwork(
            category,
            editedArtworkItem(
              S.items[itemForm.dataset.id],
              itemForm.elements.name?.value,
            ),
          );
      }
      refreshCookingMatch(card || itemForm);
      return;
    }
    if (scanForm && e.target.matches('select[name^="storage-"]'))
      e.target.dataset.userTouched = "1";
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
      const row =
        unitSelect.closest(".scan-line, [data-scan-card]") || itemFormElement;
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
          input.setCustomValidity("");
          input.removeAttribute("aria-invalid");
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
        if (form.matches(".scan-review-wizard")) updateScanSummary(form);
      }
      return;
    }
    const include = e.target.closest(
      '.scan-line input[name^="include-"], [data-scan-card] input[name^="include-"]',
    );
    if (include) {
      include
        .closest("fieldset, [data-scan-card]")
        .querySelectorAll(
          "input:not([name^='include-']), select, [data-action^='scan-photo-']",
        )
        .forEach((control) => {
          const rowUnit = include
            .closest("fieldset, [data-scan-card]")
            .querySelector('select[name^="unit-"]')?.value;
          control.disabled =
            !include.checked ||
            (control.name?.endsWith("gramsPerUnit") &&
              !["count", "pieces", "bunches", "cloves", "slices"].includes(
                rowUnit,
              ));
        });
      const card = include.closest("[data-scan-card]");
      if (card) {
        card.classList.toggle("is-skipped", !include.checked);
        const message = $("[data-scan-skipped]", card);
        if (message) message.hidden = include.checked;
        initMobileSelects(card);
      }
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
    const cookingCard = e.target.closest("[data-scan-card]");
    if (cookingCard && e.target.name.startsWith("name-"))
      refreshCookingMatch(cookingCard, { nameChanged: true });
    const itemFormElement = e.target.closest('form[data-form="item"]');
    if (itemFormElement && e.target.name === "name") {
      const select = itemFormElement.elements.categoryId;
      if (select && !select.dataset.userTouched) {
        select.value = inferFoodCategory({ name: e.target.value }).category.id;
        initMobileSelects(itemFormElement);
      }
      refreshCookingMatch(itemFormElement, { nameChanged: true });
      const preview = $(
        ".photo-editor-preview .ingredient-thumb",
        itemFormElement,
      );
      if (preview && !preview.querySelector("img")) {
        const category =
          getFoodCategory(select?.value) || getFoodCategory("other");
        preview.innerHTML = categoryArtwork(
          category,
          editedArtworkItem(
            S.items[itemFormElement.dataset.id],
            e.target.value,
          ),
        );
      }
    }
    if (e.target.matches('[data-form="scan-import"] input')) {
      e.target.setCustomValidity("");
      if (e.target.hasAttribute("aria-invalid")) {
        const box = $("[data-error]", e.target.form);
        if (box) box.hidden = true;
        e.target.removeAttribute("aria-describedby");
      }
      e.target.removeAttribute("aria-invalid");
      if (e.target.closest("[data-scan-summary]")) {
        if (e.target.name !== "confirmed")
          e.target.form.elements.confirmed.checked = false;
        updateScanSummary(e.target.form);
      }
    }
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
    if (form.dataset.form === "scan-import") {
      if (scanWizard && !scanWizard.canFinish()) {
        scanWizard.show(scanWizard.firstUnreviewed(), { focus: true });
        return announce("Check this item, then tap Next item.");
      }
      if (scanWizard && $("[data-scan-summary]", form)?.hidden) {
        scanWizard.show(form.querySelectorAll("[data-scan-card]").length, {
          focus: true,
        });
        return announce("Confirm the final review, then tap Add items.");
      }
      validateScanReviewFields(form);
    }
    if (!form.checkValidity())
      return formError(
        form,
        form.dataset.form === "scan-import"
          ? [...form.elements].find(
              (input) => input.willValidate && !input.validity.valid,
            )?.validationMessage || "Review required fields before saving."
          : "Review required fields before saving.",
      );
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
      const mergeTargets = Object.create(null);
      const reviewedLinks = Object.create(null);
      const excludeFinance = fd.has("excludeFinance");
      const reviewedCurrency =
        scanDraft.kind === "receipt"
          ? String(fd.get("scanCurrency") || "")
              .trim()
              .toUpperCase() || null
          : scanDraft.currency;
      try {
        for (const fieldName of ["scanTotal", "scanTax", "scanDiscount"]) {
          const amount = String(fd.get(fieldName) ?? "");
          if (amount !== "")
            parseReviewedScanMoney(amount, reviewedCurrency, {
              excludeFinance,
            });
        }
        for (const line of scanDraft.lines) {
          const cost = String(fd.get(`cost-${line.lineId}`) ?? "");
          if (cost !== "")
            parseReviewedScanMoney(cost, reviewedCurrency, { excludeFinance });
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
          if (scanDraft.kind !== "expiry") {
            const linkSelect = form.elements.namedItem(
              `cook-${line.lineId}-ingredientId`,
            );
            reviewedLinks[line.lineId].cookingLinkDisabled =
              linkSelect?.dataset.cookOptout === "1";
          }
          return {
            ...line,
            name: String(fd.get(`name-${line.lineId}`) || "").trim(),
            categoryId:
              getFoodCategory(fd.get(`category-${line.lineId}`))?.id ?? null,
            quantity: parseScanQuantity(quantityText),
            unit: String(fd.get(`unit-${line.lineId}`) || "") || null,
            storage: String(fd.get(`storage-${line.lineId}`) || "") || null,
            expiry: String(fd.get(`expiry-${line.lineId}`) || "") || null,
            expiryProvenance: fd.get(`expiry-${line.lineId}`)
              ? "printed"
              : null,
            lineTotalMinor:
              costText === ""
                ? null
                : parseReviewedScanMoney(costText, reviewedCurrency, {
                    excludeFinance,
                  }),
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
            ? parseReviewedScanMoney(receiptTotalText, reviewedCurrency, {
                excludeFinance,
              })
            : scanDraft.kind === "receipt"
              ? null
              : scanDraft.totalMinor,
        taxMinor:
          scanDraft.kind === "receipt" && receiptTaxText !== ""
            ? parseReviewedScanMoney(receiptTaxText, reviewedCurrency, {
                excludeFinance,
              })
            : scanDraft.kind === "receipt"
              ? null
              : scanDraft.taxMinor,
        discountMinor:
          scanDraft.kind === "receipt" && receiptDiscountText !== ""
            ? parseReviewedScanMoney(receiptDiscountText, reviewedCurrency, {
                excludeFinance,
              })
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
          ["FINANCE_REVIEW_REQUIRED", "TOTAL_MISMATCH"].includes(error?.code)
            ? form.elements.excludeFinance
            : null,
        );
      }
      const linePhotoIds = new Map();
      if (scanPhotoDraft?.source && !result.replayed) {
        setBusy(true, form);
        try {
          for (const line of editedDraft.lines) {
            if (excludedLineIds.includes(line.lineId)) continue;
            const crop = scanPhotoDraft.crops.get(line.lineId);
            if (!crop?.blob) continue;
            crop.photoId ||= await itemPhotos.save(crop.blob);
            linePhotoIds.set(line.lineId, crop.photoId);
          }
        } catch {
          return formError(
            form,
            "A thumbnail could not be saved. Retry, or remove its crop to save ingredients only.",
          );
        } finally {
          setBusy(false, form);
        }
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
        result = attachScanPhotos(result, {
          kind: editedDraft.kind,
          lines: editedDraft.lines,
          excludedLineIds,
          photoIds: linePhotoIds,
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
      if (
        await commit(
          () => {
            S = syncCookingInventory(structuredClone(candidate)).state;
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
          if (S.cooking?.running && timerSeconds() > 0)
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
    if (kind === "recipe-stock-measurement") {
      const review = recipeStockMeasurementReview;
      if (!review)
        return formError(form, "Measurement review expired. Open it again.");
      let gramsPerUnit;
      try {
        gramsPerUnit = Number(
          parseLocalizedDecimal(String(fd.get("gramsPerUnit") || "")),
        );
      } catch (error) {
        return formError(
          form,
          error?.message || "Enter measured grams.",
          form.elements.gramsPerUnit,
        );
      }
      const saved = await commit(() => {
        if (recipe(S.recipe).id !== review.recipeId)
          throw new Error("Recipe changed. Open the measurement again.");
        S = applyRecipeStockMeasurement(S, { ...review, gramsPerUnit });
      }, "Measurement saved. Recipe availability updated.");
      if (saved) {
        recipeStockMeasurementReview = null;
        closeModal();
        render();
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
      const updated = {
        ...prior,
        ...cookingLink,
        cookingLinkDisabled:
          !cookingLink.ingredientId &&
          form.elements.ingredientId?.dataset.cookOptout === "1",
        categoryId: getFoodCategory(fd.get("categoryId"))?.id || "other",
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
      if (provenance === "printed") updated.printedExpiry = expiry;
      else if (prior.printedExpiry !== expiry) delete updated.printedExpiry;
      let addedPhoto = null;
      const photoDraft = itemPhotoDraft;
      if (photoDraft?.blob) {
        setBusy(true, modal);
        try {
          addedPhoto = await itemPhotos.save(photoDraft.blob);
          updated.photoId = addedPhoto;
        } catch {
          return formError(
            form,
            "Photo could not be saved on this device. Try again or remove the new photo.",
          );
        } finally {
          setBusy(false, modal);
        }
      } else if (photoDraft?.remove) delete updated.photoId;
      if (
        await commit(() => {
          S.items[id] = updated;
        }, "Ingredient saved.")
      ) {
        if (
          prior.photoId &&
          prior.photoId !== updated.photoId &&
          !Object.values(S.items).some((item) => item.photoId === prior.photoId)
        ) {
          photoSources.delete(prior.photoId);
          void itemPhotos.remove(prior.photoId).catch(() => {});
        }
        closeModal();
        render();
      } else if (addedPhoto) void itemPhotos.remove(addedPhoto).catch(() => {});
      return;
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
  modal.addEventListener("cancel", (event) => {
    if (operationBusy) return event.preventDefault();
    cancelScan();
  });
  modal.addEventListener("close", () => {
    cancelScan();
    if (modal.dataset.screen === "item-edit") releaseItemPhoto();
    if (["scan-review", "scan-reading"].includes(modal.dataset.screen))
      releaseScanPhoto();
    if (lastFocus?.isConnected) lastFocus.focus();
  });
  document.addEventListener("change", (event) => {
    if (event.target.id !== "voice-language") return;
    voiceLanguage = event.target.value;
    cancelVoice();
  });
  document.addEventListener("nomli:picker-open", (event) => {
    if (event.target.id !== "voice-language" || !voicePending()) return;
    event.preventDefault();
    cancelVoice();
    queueMicrotask(() => $("#voice-language")?.nextElementSibling?.click());
  });
  document.addEventListener("visibilitychange", () => {
    void voice.handleVisibility(document.hidden);
  });
  window.addEventListener("pagehide", cancelVoice);
  window.addEventListener("popstate", syncHash);
  window.addEventListener("hashchange", syncHash);
  render();
  if (synchronizedItemCount)
    announce(
      `${synchronizedItemCount} Kitchen item${synchronizedItemCount === 1 ? "" : "s"} connected to Cook. Quantities unchanged.`,
    );
})();
