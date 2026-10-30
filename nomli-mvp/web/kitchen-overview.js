const STORAGE_OPTIONS = ["All", "Fridge", "Freezer", "Pantry", "Spices"];
const SORT_OPTIONS = ["expiry", "name", "quantity"];

function kitchenTools(icon) {
  return [
    ["shopping", "shopping-cart", "Shopping", "Restock list"],
    ["expenses", "wallet", "Spending", "Receipts and budget"],
    ["calories", "fire", "Calories", "Food diary and portions"],
    ["profile", "gear", "Preferences", "Diet, time and tools"],
  ]
    .map(
      ([id, glyph, title, description]) =>
        `<button type="button" data-action="go" data-id="${id}">${icon(glyph)}<span><b>${title}</b><small>${description}</small></span>${icon("arrow-right")}</button>`,
    )
    .join("");
}

export function renderKitchenOverview({
  items = {},
  soon = 0,
  search = "",
  storage = "All",
  sort = "expiry",
  recentImportCount = 0,
  rowsHtml = "",
  esc,
  icon,
  button,
  options,
}) {
  const records =
    items && typeof items === "object" ? Object.values(items) : [];
  const isEmpty = records.length === 0;
  const activeCount = records.filter((item) => Number(item?.qty) > 0).length;
  const soonCount = Math.max(0, Math.trunc(Number(soon) || 0));
  const importedCount = Math.max(0, Math.trunc(Number(recentImportCount) || 0));
  const tools = `<details class="kitchen-tools"><summary>${icon("dots-three")}<span><b>Kitchen tools</b><small>Shopping, spending, calories and preferences</small></span>${icon("caret-right")}</summary><div class="kitchen-tools-list">${kitchenTools(icon)}</div></details>`;

  if (isEmpty) {
    return `<section class="kitchen-overview kitchen-overview-empty" aria-labelledby="kitchen-title">
      <header class="kitchen-overview-heading"><p class="eyebrow">KITCHEN</p><h1 id="kitchen-title" data-title tabindex="-1">Your kitchen</h1><p>Scan groceries to build inventory, or add one item manually.</p></header>
      <section class="kitchen-empty-state" aria-labelledby="kitchen-empty-title">
        <span class="kitchen-empty-icon" aria-hidden="true">${icon("refrigerator")}</span>
        <div><h2 id="kitchen-empty-title">Start with what you have</h2><p>Review every scanned item before it is saved. Expiry dates stay optional.</p></div>
        <div class="kitchen-empty-actions">${button("Scan groceries", "go", "scan", "btn-primary")}${button("Add manually", "item-edit", "new", "btn-secondary")}</div>
      </section>
      ${tools}
    </section>`;
  }

  const soonCue = soonCount
    ? `<p class="kitchen-soon-cue">${icon("clock")}<span><b>${soonCount} ${soonCount === 1 ? "item" : "items"} to use soon</b></span></p>`
    : "";
  const importSuccess = importedCount
    ? `<section class="kitchen-import-success" aria-label="Import complete">${icon("check-circle")}<div><b>${importedCount} ${importedCount === 1 ? "item" : "items"} reviewed</b><p>Ready to choose a meal?</p></div>${button("Find a meal", "go", "cook", "btn-secondary")}</section>`
    : "";

  return `<section class="kitchen-overview kitchen-overview-stocked" aria-labelledby="kitchen-title">
    <header class="kitchen-overview-heading"><div><p class="eyebrow">KITCHEN</p><h1 id="kitchen-title" data-title tabindex="-1">Your kitchen</h1><p>${activeCount} ${activeCount === 1 ? "ingredient" : "ingredients"} in stock</p></div><div class="kitchen-intake-actions">${button("Scan", "go", "scan", "btn-secondary")}${button("Add", "item-edit", "new", "btn-secondary")}</div></header>
    ${importSuccess}
    ${soonCue}
    <section class="kitchen-inventory" aria-label="Inventory">
      <div class="inventory-tools"><label class="field"><span class="sr-only">Search inventory</span><input type="search" data-change="search" value="${esc(search || "")}" placeholder="Search ingredients" autocomplete="off"></label><div class="inventory-sort"><label>Storage <select data-change="storage">${options(STORAGE_OPTIONS, storage)}</select></label><label>Sort <select data-change="sort">${options(SORT_OPTIONS, sort)}</select></label></div></div>
      <div data-inventory-list>${rowsHtml}</div>
    </section>
    ${tools}
  </section>`;
}
