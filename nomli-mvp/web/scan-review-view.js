import {
  FOOD_CATEGORIES,
  getFoodCategory,
  inferFoodCategory,
} from "./food-categories.js";
import { currencyDigits, formatMinorInput } from "./scan-money.js";
import { renderIngredientLinkFields } from "./cook-linking.js";

const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

const UNITS = [
  "g",
  "kg",
  "ml",
  "l",
  "count",
  "pieces",
  "bunches",
  "cloves",
  "slices",
];
const STORAGE = ["Fridge", "Freezer", "Pantry", "Spices"];
const CURRENCIES = [
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

function options(values, selected, emptyLabel) {
  return `${emptyLabel === undefined ? "" : `<option value="">${esc(emptyLabel)}</option>`}${values
    .map(
      (value) =>
        `<option value="${esc(value)}"${value === selected ? " selected" : ""}>${esc(value)}</option>`,
    )
    .join("")}`;
}

function moneyValue(minor, currency) {
  if (minor == null || currencyDigits(currency) === null) return "";
  try {
    return formatMinorInput(minor, currency);
  } catch {
    return "";
  }
}

function inventoryOptions(items, selected) {
  return Object.entries(items ?? {})
    .map(
      ([id, item]) =>
        `<option value="${esc(id)}"${id === selected ? " selected" : ""}>Merge into ${esc(item?.name || "Unnamed item")}</option>`,
    )
    .join("");
}

function artwork(category) {
  const index = category.atlasIndex;
  const x = ((index % 4) * 100) / 3;
  const y = (Math.floor(index / 4) * 100) / 3;
  return `<span class="food-category-art" data-food-art="${esc(category.id)}" style="--food-x:${x}%;--food-y:${y}%" role="img" aria-label="${esc(category.en)}"></span>`;
}

function categoryOptions(selected) {
  return FOOD_CATEGORIES.map(
    (category) =>
      `<option value="${esc(category.id)}"${category.id === selected ? " selected" : ""}>${esc(category.en)} — ${esc(category.ar)}</option>`,
  ).join("");
}

function renderCard(line, index, draft, items, scanLinePhoto, lineArtwork) {
  const id = String(line.lineId ?? index);
  const inferred = inferFoodCategory({
    name: line.name,
    ingredientId: line.ingredientId,
    categoryId: line.categoryId,
  });
  const category = getFoodCategory(line.categoryId) ?? inferred.category;
  const storage = STORAGE.includes(line.storage)
    ? line.storage
    : inferred.suggestedStorage;
  const match =
    line.ingredientId && items?.[line.ingredientId] ? line.ingredientId : "";
  const photo =
    typeof scanLinePhoto === "function" ? scanLinePhoto(line) || "" : "";
  const warnings = Array.isArray(line.warnings)
    ? line.warnings.filter(Boolean)
    : [];
  return `<section class="scan-review-card" data-scan-card data-line-id="${esc(id)}"${index ? " hidden" : ""}>
    <header class="scan-card-head">
      <div data-scan-card-visual>${lineArtwork?.(line) || artwork(category)}</div>
      <div><p class="scan-card-kicker">Item ${index + 1}</p><h3 data-scan-card-title tabindex="-1" dir="auto">${esc(line.name || "Unnamed item")}</h3></div>
      <label class="scan-keep"><input type="checkbox" name="include-${esc(id)}" checked><span>Keep item</span></label>
    </header>
    <p data-scan-skipped hidden>This item will be skipped. Continue to the next item.</p>
    <div class="scan-card-fields">
      <label class="field">Name<input name="name-${esc(id)}" value="${esc(line.name)}" type="text" maxlength="200" dir="auto" required></label>
      <div class="scan-review-pair">
        <label class="field">Quantity<input name="quantity-${esc(id)}" value="${esc(line.quantity ?? "")}" type="text" maxlength="128" inputmode="decimal" dir="ltr" data-scan-quantity required></label>
        <label class="field">Unit<select name="unit-${esc(id)}" required>${options(UNITS, line.unit, "Choose unit")}</select></label>
      </div>
      <div class="scan-review-pair">
        <label class="field">Category<select name="category-${esc(id)}" data-picker-kind="food-category" required>${categoryOptions(category.id)}</select></label>
        <label class="field">Storage<select name="storage-${esc(id)}" required>${options(STORAGE, storage, "Choose location")}</select></label>
      </div>
    </div>
    <p class="scan-card-hint">Category and storage are suggested. Change anytime.</p>
    <details class="scan-card-more"><summary>More details</summary>
      <div class="scan-card-advanced">
        ${photo}
        <label class="field">Expiry (optional)<input name="expiry-${esc(id)}" value="${esc(line.expiry)}" type="date"></label>
        <div class="cook-link-fields">${renderIngredientLinkFields({ prefix: `cook-${id}-`, name: line.name, ingredientId: line.ingredientId, unit: line.unit, gramsPerUnit: line.gramsPerUnit })}</div>
        <label class="field">Line cost (${esc(draft.currency || "choose currency")}, optional)<input name="cost-${esc(id)}" value="${esc(moneyValue(line.lineTotalMinor, draft.currency))}" type="text" maxlength="128" inputmode="decimal" dir="ltr" data-scan-money></label>
        <label class="field">Inventory action<select name="target-${esc(id)}"><option value="">Create new item</option>${inventoryOptions(items, match)}</select></label>
        ${warnings.length ? `<p class="scan-review-warning" role="note">${esc(warnings.join(" "))}</p>` : ""}
      </div>
    </details>
  </section>`;
}

function receiptFields(draft) {
  if (draft.kind !== "receipt") return "";
  const currencies = [...CURRENCIES];
  if (draft.currency && !currencies.includes(draft.currency))
    currencies.push(draft.currency);
  const missingFinance = !draft.currency || draft.totalMinor == null;
  return `<details class="scan-receipt-details"${missingFinance ? " open" : ""}><summary>Receipt details</summary>
    <div class="scan-card-advanced">
      <label class="field">Merchant / source<input name="scanMerchant" value="${esc(draft.merchant)}" type="text" maxlength="200" dir="auto"></label>
      <label class="field">Receipt date (optional)<input name="scanReceiptDate" value="${esc(draft.receiptDate)}" type="date"></label>
      <label class="field">Currency<select name="scanCurrency">${options(currencies.filter(Boolean), draft.currency, "Choose currency")}</select></label>
      <label class="field">Receipt total<input name="scanTotal" value="${esc(moneyValue(draft.totalMinor, draft.currency))}" type="text" maxlength="128" inputmode="decimal" dir="ltr" data-scan-money></label>
      <label class="field">Additional tax<input name="scanTax" value="${esc(moneyValue(draft.taxMinor, draft.currency))}" type="text" maxlength="128" inputmode="decimal" dir="ltr" data-scan-money></label>
      <label class="field">Receipt discount<input name="scanDiscount" value="${esc(moneyValue(draft.discountMinor, draft.currency))}" type="text" maxlength="128" inputmode="decimal" dir="ltr" data-scan-money></label>
      <p class="scan-money-warning" data-money-warning role="status"></p>
    </div>
  </details>`;
}

export function renderScanReview({
  draft = {},
  items = {},
  scanLinePhoto,
  lineArtwork,
} = {}) {
  const lines = Array.isArray(draft.lines) ? draft.lines : [];
  const cards = lines
    .map((line, index) =>
      renderCard(line, index, draft, items, scanLinePhoto, lineArtwork),
    )
    .join("");
  const jumps = lines
    .map(
      (line, index) =>
        `<button type="button" class="scan-jump" data-scan-jump="${index}" value="${index}" dir="auto">${index + 1}. ${esc(line.name || "Unnamed item")}</button>`,
    )
    .join("");
  return `<form class="scan-review-wizard" data-form="scan-import" novalidate aria-describedby="scan-number-help" data-money-currency="${esc(draft.currency)}">
    <p class="sr-only" id="scan-number-help">Arabic and English digits are accepted. Names follow their written direction.</p>
    <p class="notice notice-warning" data-error role="alert" hidden></p>
    <div class="scan-review-progress"><span data-scan-step role="status">${lines.length ? `Item 1 of ${lines.length}` : "Review & save"}</span><span><b data-scan-count>${lines.length}</b> items</span></div>
    <details class="scan-item-jump"><summary>All items</summary><div data-scan-jump-list>${jumps}</div></details>
    <div class="scan-review-panels">${cards || '<p class="empty">Scanner returned no food lines.</p>'}
      <section class="scan-review-summary" data-scan-summary hidden>
        <h3 data-scan-summary-title tabindex="-1">Review &amp; save</h3>
        <p>Confirm items before updating your kitchen.</p>
        ${draft.kind === "receipt" ? '<p class="scan-receipt-summary" data-scan-receipt-summary></p><label class="checkbox-field scan-finance-choice"><input type="checkbox" name="excludeFinance"><span>Inventory only · skip receipt spending</span></label>' : ""}
        <label class="checkbox-field scan-confirm"><input type="checkbox" name="confirmed" required><span>Add these reviewed items to my kitchen</span></label>
        <div class="scan-summary-list" data-scan-summary-list></div>
        ${receiptFields(draft)}
        ${Array.isArray(draft.warnings) && draft.warnings.length ? `<details class="scan-draft-warnings"><summary>Scan warnings</summary><p>${esc(draft.warnings.join(" "))}</p></details>` : ""}
      </section>
    </div>
    <footer class="scan-review-nav">
      <button class="btn btn-quiet" type="button" data-scan-nav="back" disabled>Back</button>
      <button class="btn btn-quiet" type="button" data-scan-nav="items">Items</button>
      <button class="btn btn-primary" type="button" data-scan-nav="next"${lines.length ? "" : " hidden"}>Next item</button>
      <button class="btn btn-primary scan-save" type="submit" data-scan-save hidden disabled>Add ${lines.length} ${lines.length === 1 ? "item" : "items"}</button>
    </footer>
  </form>`;
}
