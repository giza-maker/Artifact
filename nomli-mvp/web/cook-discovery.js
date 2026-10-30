const MODES = new Set(["all", "ready", "near"]);

const defaultEscape = (value) =>
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

const missingCount = (assessment) =>
  Array.isArray(assessment?.missing) ? assessment.missing.length : 0;

const explicitCount = (value) =>
  Number.isInteger(value) && value >= 0 ? value : null;

function discoveryCounts(entry) {
  return {
    missing:
      explicitCount(entry?.missingIngredientCount) ?? missingCount(entry?.a),
    measurements: explicitCount(entry?.measurementCount) ?? 0,
  };
}

export function cookDiscoveryGroup(entry, inventoryCount = 0) {
  if (entry?.a?.stockReady === true) return "ready";
  const { missing, measurements } = discoveryCounts(entry);
  const nearMissing = missing >= 1 && missing <= 2;
  const nearMeasurement =
    missing === 0 && measurements >= 1 && measurements <= 2;
  if (Number(inventoryCount) > 0 && (nearMissing || nearMeasurement))
    return "near";
  return "explore";
}

export function filterCookDiscovery(
  entries,
  { inventoryCount = 0, mode = "all", query = "" } = {},
) {
  const selectedMode = MODES.has(mode) ? mode : "all";
  const needle = String(query).trim().toLocaleLowerCase();
  return (Array.isArray(entries) ? entries : []).filter((entry) => {
    const group = cookDiscoveryGroup(entry, inventoryCount);
    if (selectedMode !== "all" && group !== selectedMode) return false;
    if (!needle) return true;
    const recipe = entry?.r ?? {};
    return [recipe.name, recipe.nameAr, recipe.cuisine]
      .filter(Boolean)
      .some((value) => String(value).toLocaleLowerCase().includes(needle));
  });
}

const countLabel = (count, singular, plural = `${singular}s`) =>
  `${count} ${count === 1 ? singular : plural}`;

const groupCopy = {
  ready: {
    title: "Cook now",
    description: "Kitchen stock covers these recipes.",
  },
  near: {
    title: "Nearly ready",
    description: "A few ingredients or amounts left to check.",
  },
  explore: {
    title: "Explore",
    description: "Browse more ideas for later.",
  },
};

function renderCard(entry, group, { e, icon, servingsFor, recipeAction }) {
  const recipe = entry.r ?? {};
  const image = recipe.cardImage || recipe.image;
  const { missing, measurements } = discoveryCounts(entry);
  const servings = Math.max(1, Number(servingsFor(recipe)) || 1);
  const status =
    group === "ready"
      ? "Ingredients ready"
      : measurements > 0
        ? `Check ${countLabel(measurements, "ingredient amount")}${missing > 0 ? ` · ${countLabel(missing, "ingredient")} missing` : ""}`
        : missing > 0
          ? countLabel(missing, "ingredient") + " missing"
          : "Check ingredient amounts";
  return `<article class="meal-choice-card">
    ${image ? `<img src="${e(image)}" alt="${e(recipe.name)}" loading="lazy" decoding="async" width="560" height="420">` : `<span class="meal-choice-art" aria-hidden="true">${icon("fork-knife")}</span>`}
    <div class="meal-choice-body">
      <p class="meal-choice-status meal-choice-status-${group}">${e(status)}</p>
      <h3>${e(recipe.name)}</h3>
      <p class="meal-choice-meta">${e(recipe.time)} min <span aria-hidden="true">·</span> ${e(recipe.cuisine)} <span aria-hidden="true">·</span> ${e(countLabel(servings, "serving"))}</p>
      ${recipeAction(recipe)}
    </div>
  </article>`;
}

export function renderCookDiscoveryResults({
  entries,
  inventoryCount,
  mode = "all",
  query = "",
  esc = defaultEscape,
  icon = () => "",
  servingsFor = (recipe) => recipe.servings,
  recipeAction = () => "",
}) {
  const e = typeof esc === "function" ? esc : defaultEscape;
  const safeMode = MODES.has(mode) ? mode : "all";
  const allEntries = Array.isArray(entries) ? entries : [];
  const visible = filterCookDiscovery(allEntries, {
    inventoryCount,
    mode: safeMode,
    query,
  });
  const sections = ["ready", "near", "explore"]
    .map((group) => {
      const matches = visible.filter(
        (entry) => cookDiscoveryGroup(entry, inventoryCount) === group,
      );
      if (!matches.length) return "";
      return `<section class="cook-discovery-group" aria-labelledby="cook-discovery-${group}">
        <header><h2 id="cook-discovery-${group}">${groupCopy[group].title}</h2><span aria-label="${e(countLabel(matches.length, "recipe"))}">${matches.length}</span></header>
        <p class="cook-discovery-group-copy">${groupCopy[group].description}</p>
        <div class="cook-discovery-list">${matches.map((entry) => renderCard(entry, group, { e, icon, servingsFor, recipeAction })).join("")}</div>
      </section>`;
    })
    .join("");
  const emptyMessage = query
    ? "No recipes match this search and filter. Try another name or show all recipes."
    : safeMode === "ready"
      ? "No recipes are ready from recorded stock yet. Show all recipes or scan groceries first."
      : safeMode === "near"
        ? "No nearly-ready recipes found. Show all recipes to keep browsing."
        : "No recipes match these choices. Try a longer recipe time or adjust cooking preferences.";

  return `<div data-cook-discovery-results>
    <p class="cook-discovery-summary">${countLabel(visible.length, "recipe")}<span class="sr-only"> shown out of ${countLabel(allEntries.length, "recipe")}. Check product labels for allergens.</span></p>
    ${sections || `<p class="empty cook-discovery-empty">${emptyMessage}</p>`}
  </div>`;
}

export function renderCookDiscovery({
  entries,
  inventoryCount,
  mode = "all",
  query = "",
  time,
  esc = defaultEscape,
  icon = () => "",
  button,
  servingsFor = (recipe) => recipe.servings,
  recipeAction = () => "",
}) {
  const e = typeof esc === "function" ? esc : defaultEscape;
  const safeMode = MODES.has(mode) ? mode : "all";
  const filterButton = (label, id) => {
    if (typeof button === "function") {
      const markup = button(
        label,
        "cook-browse",
        id,
        `cook-discovery-filter${safeMode === id ? " is-active" : ""}`,
      );
      return String(markup).replace(
        "<button",
        `<button aria-pressed="${safeMode === id}"`,
      );
    }
    return `<button type="button" class="cook-discovery-filter${safeMode === id ? " is-active" : ""}" data-action="cook-browse" data-id="${e(id)}" aria-pressed="${safeMode === id}">${e(label)}</button>`;
  };
  const timeOptions = [
    ...new Set([15, 20, 30, 45, 60, 120, 1440, Number(time)]),
  ]
    .filter((value) => Number.isFinite(value) && value > 0)
    .sort((a, b) => a - b)
    .map(
      (value) =>
        `<option value="${e(value)}"${value === Number(time) ? " selected" : ""}>${value === 1440 ? "Any duration" : `Up to ${e(value)} minutes`}</option>`,
    )
    .join("");
  const emptyInventory = Number(inventoryCount) <= 0;

  return `<section class="cook-discovery" aria-label="Recipe discovery">
    ${emptyInventory ? `<div class="cook-discovery-onboarding" role="note">${icon("camera")}<p><b>Scan or add groceries</b> to see what is ready. You can still browse recipes below.</p></div>` : ""}
    <div class="cook-discovery-controls">
      <label class="cook-discovery-search"><span>Search recipes</span><span class="cook-discovery-search-field"><input type="search" value="${e(query)}" data-change="cook-search" placeholder="Recipe or cuisine" autocomplete="off"></span></label>
      <div class="cook-discovery-filters" role="group" aria-label="Recipe availability">${filterButton("All", "all")}${filterButton("Ready now", "ready")}${filterButton("Nearly ready", "near")}</div>
      <details class="discovery-extra-filters"><summary>More filters</summary><label class="field cook-discovery-time">Recipe time<select data-change="cook-time">${timeOptions}</select></label></details>
    </div>
    ${renderCookDiscoveryResults({ entries, inventoryCount, mode: safeMode, query, esc, icon, servingsFor, recipeAction })}
  </section>`;
}
