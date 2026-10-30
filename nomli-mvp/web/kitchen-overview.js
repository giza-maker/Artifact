const STORAGE_OPTIONS = ["All", "Fridge", "Freezer", "Pantry", "Spices"];
const SORT_OPTIONS = ["expiry", "name", "quantity"];

function kitchenTools(icon) {
  return [
    ["shopping", "shopping-cart", "Shopping"],
    ["expenses", "wallet", "Spending"],
    ["calories", "fire", "Calories"],
    ["profile", "gear", "Preferences"],
    ["menu", "dots-three", "More options"],
  ]
    .map(
      ([id, glyph, title]) =>
        `<button type="button" data-action="${id === "menu" ? "menu" : "go"}" data-id="${id}">${icon(glyph)}<span>${title}</span>${icon("arrow-right")}</button>`,
    )
    .join("");
}

export function renderKitchenOverview({
  items = {},
  soon = 0,
  search = "",
  storage = "All",
  sort = "expiry",
  category = "all",
  useSoon = false,
  recentImportCount = 0,
  rowsHtml = "",
  groupedRowsHtml = "",
  categoryRailHtml = "",
  esc,
  icon,
  button,
  options,
}) {
  const records =
    items && typeof items === "object" ? Object.values(items) : [];
  const activeCount = records.filter((item) => Number(item?.qty) > 0).length;
  const soonCount = Math.max(0, Math.trunc(Number(soon) || 0));
  const importedCount = Math.max(0, Math.trunc(Number(recentImportCount) || 0));
  const tools = `<details class="kitchen-tools"><summary><span>Utilities</span>${icon("caret-right")}</summary><div class="kitchen-tools-list">${kitchenTools(icon)}</div></details>`;
  if (!records.length)
    return `<section class="kitchen-overview kitchen-overview-empty" aria-labelledby="kitchen-title"><header class="kitchen-overview-heading"><div><p class="eyebrow">NOMLI KITCHEN</p><h1 id="kitchen-title" data-title tabindex="-1">Kitchen</h1><p>A living pantry, ready when you are.</p></div></header><section class="kitchen-empty-state" aria-labelledby="kitchen-empty-title"><span class="kitchen-empty-icon" aria-hidden="true">${icon("refrigerator")}</span><div><h2 id="kitchen-empty-title">Your shelves are waiting</h2><p>Scan groceries or add one ingredient. Dates stay optional.</p></div><div class="kitchen-empty-actions">${button("Add groceries", "go", "scan", "btn-primary")}${button("Add manually", "item-edit", "new", "btn-quiet")}</div></section>${tools}</section>`;
  const importSuccess = importedCount
    ? `<section class="kitchen-import-success" role="status">${icon("check-circle")}<span><b>${importedCount} ${importedCount === 1 ? "item" : "items"} reviewed</b><small>Ready to choose a meal?</small></span>${button("Find a meal", "go", "cook", "btn-quiet")}</section>`
    : "";
  return `<section class="kitchen-overview kitchen-overview-stocked" aria-labelledby="kitchen-title"><header class="kitchen-overview-heading"><div><p class="eyebrow">NOMLI KITCHEN</p><h1 id="kitchen-title" data-title tabindex="-1">Kitchen</h1><p>${activeCount} ${activeCount === 1 ? "ingredient" : "ingredients"} in stock</p></div><button type="button" class="kitchen-search-jump" data-action="inventory-controls" aria-label="Open inventory filters">${icon("magnifying-glass")}</button></header><button type="button" class="kitchen-soon-cue${useSoon ? " is-active" : ""}" data-change="use-soon" aria-pressed="${useSoon ? "true" : "false"}">${icon("clock")}<span>Use soon</span><b>${soonCount}</b>${icon("caret-right")}</button>${categoryRailHtml ? `<nav class="kitchen-category-rail" aria-label="Inventory categories">${categoryRailHtml}</nav>` : ""}${importSuccess}<section class="kitchen-inventory" aria-label="Inventory"><details class="inventory-controls"${search || storage !== "All" || sort !== "expiry" || category !== "all" || useSoon ? " open" : ""}><summary>Search &amp; filter <span>${icon("sliders-horizontal")}</span></summary><div class="inventory-controls-body"><label class="field"><span>Search</span><input type="search" data-change="search" value="${esc(search || "")}" placeholder="Ingredient name" autocomplete="off"></label><div class="inventory-sort"><label>Storage<select data-change="storage">${options(STORAGE_OPTIONS, storage)}</select></label><label>Sort<select data-change="sort">${options(SORT_OPTIONS, sort)}</select></label></div></div></details><div class="inventory-groups" data-inventory-list>${groupedRowsHtml || rowsHtml}</div></section><div class="kitchen-add-actions">${button("Add groceries", "go", "scan", "btn-primary")}${button("Add manually", "item-edit", "new", "btn-quiet")}</div>${tools}</section>`;
}
