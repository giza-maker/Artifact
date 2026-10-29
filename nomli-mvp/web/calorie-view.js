const finiteNumber = (value) =>
  typeof value === "number" && Number.isFinite(value) ? value : null;

const formatted = (value, num) => {
  const safe = finiteNumber(value);
  return safe === null ? "Unknown" : num(Math.round(safe));
};

const glyph = (icon, name) => (typeof icon === "function" ? icon(name) : "");

export function renderCalorieDashboard({
  date,
  today,
  summary,
  esc,
  num,
  icon,
}) {
  const entries = Array.isArray(summary?.entries) ? summary.entries : [];
  const total = finiteNumber(summary?.totalKcal) ?? 0;
  const goal = finiteNumber(summary?.goalKcal);
  const remaining = finiteNumber(summary?.remainingKcal);
  const over = Math.max(0, finiteNumber(summary?.overGoalKcal) ?? 0);
  const hasGoal = goal !== null;
  const progressValue =
    goal !== null && goal > 0
      ? Math.round(Math.min(Math.max(total, 0), goal))
      : 0;
  const progressMax = goal !== null ? Math.round(goal) : 0;
  const goalStatus =
    over > 0
      ? `${formatted(over, num)} kcal over goal`
      : remaining !== null
        ? `${formatted(Math.max(0, remaining), num)} kcal remaining`
        : "Goal progress unavailable";

  const diary = entries.length
    ? `<ul class="calorie-diary-list">${entries
        .map((entry) => {
          const id = esc(entry?.id ?? "");
          const name = esc(entry?.name ?? "Unnamed food");
          const kcal = finiteNumber(entry?.kcal);
          const servings = finiteNumber(entry?.servings);
          const entryTotal =
            kcal !== null && servings !== null ? kcal * servings : null;
          const sourceLabel =
            entry?.source === "manual"
              ? "Entered calories"
              : entry?.source === "recipe"
                ? "Recipe estimate"
                : "Food estimate";
          return `<li class="calorie-diary-item">
          <div class="calorie-entry-copy"><b dir="auto">${name}</b><span class="calorie-entry-meta"><strong>${formatted(entryTotal, num)} kcal</strong><span>${servings === null ? "Servings unknown" : `${num(servings)} ${servings === 1 ? "serving" : "servings"}`}</span><span class="calorie-estimate-tag">${sourceLabel}</span></span></div>
          <div class="calorie-entry-actions"><button type="button" class="btn btn-quiet calorie-entry-button" data-action="calorie-edit" data-id="${id}" aria-label="Edit ${name}">${glyph(icon, "pencil")}<span>Edit</span></button><button type="button" class="btn btn-quiet calorie-entry-button calorie-entry-delete" data-action="calorie-delete" data-id="${id}" aria-label="Delete ${name}">${glyph(icon, "trash")}<span>Delete</span></button></div>
        </li>`;
        })
        .join("")}</ul>`
    : `<div class="calorie-empty">${glyph(icon, "fork-knife")}<h2>No food logged</h2><p>Add food or a complete recipe estimate to start this day’s diary.</p><button type="button" class="btn btn-primary" data-action="calorie-add">Add first food</button></div>`;

  return `<section class="calorie-dashboard">
    <header class="calorie-heading"><div><p class="calorie-kicker">DAILY ENERGY</p><h1 data-title tabindex="-1">Calories</h1></div><button type="button" class="btn btn-primary calorie-add" data-action="calorie-add">${glyph(icon, "plus")}<span>Add food</span></button></header>
    <form class="calorie-date-form" data-form="calorie-date"><label for="calorie-date-input">Diary date</label><div class="calorie-date-controls"><input id="calorie-date-input" name="date" type="date" value="${esc(date)}" required><button class="btn btn-secondary" type="submit">View</button>${date !== today ? `<button class="btn btn-quiet" type="button" data-action="calorie-today">Today</button>` : ""}</div></form>
    <section class="card calorie-summary" aria-labelledby="calorie-total-label"><p id="calorie-total-label">${date === today ? "Logged today" : "Logged on this date"}</p><p class="calorie-total"><strong>${formatted(total, num)}</strong><span>kcal</span></p>${hasGoal ? `<div class="calorie-goal-progress"><div><span>Daily goal: ${formatted(goal, num)} kcal</span><strong>${goalStatus}</strong></div>${goal > 0 ? `<progress value="${progressValue}" max="${progressMax}" aria-label="${esc(goalStatus)}"></progress>` : `<p class="calorie-goal-zero">Goal is set to 0 kcal.</p>`}</div>` : `<p class="calorie-no-goal">No daily goal set. Logging works without one.</p>`}<button type="button" class="btn btn-secondary calorie-goal-button" data-action="calorie-goal">${glyph(icon, "target")}<span>${hasGoal ? "Edit goal" : "Set goal"}</span></button></section>
    <section class="calorie-diary" aria-labelledby="calorie-diary-title"><div class="calorie-section-heading"><div><p class="calorie-kicker">FOOD DIARY</p><h2 id="calorie-diary-title">Entries</h2></div><span>${entries.length} ${entries.length === 1 ? "item" : "items"}</span></div>${diary}</section>
    <footer class="calorie-footer"><p>Food logging never changes Kitchen stock.</p><p>Recipe calories are estimates; check packaged-food labels.</p><button type="button" class="btn btn-quiet" data-action="calorie-info">${glyph(icon, "list")}<span>Nutrition sources</span></button></footer>
  </section>`;
}

export function renderRecipeCalories({ estimate, recipeId, esc, num, icon }) {
  const complete = estimate?.complete === true;
  const total = finiteNumber(estimate?.totalKcal);
  const perServing = finiteNumber(estimate?.perServingKcal);
  const known = finiteNumber(estimate?.knownKcal);
  const missing = Array.isArray(estimate?.missing) ? estimate.missing : [];
  const missingLabels = missing.map((item) => {
    const raw =
      item && typeof item === "object" ? item.ingredientId : String(item ?? "");
    const humanized = String(raw ?? "")
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return humanized || "unknown ingredient";
  });

  if (complete && total !== null && perServing !== null) {
    return `<section class="nutrition-recipe nutrition-recipe-complete" aria-label="Recipe calorie estimate"><div class="nutrition-recipe-heading"><div><p class="nutrition-label">ESTIMATED ENERGY</p><p class="nutrition-per-serving"><strong>${formatted(perServing, num)}</strong> kcal <span>per serving</span></p></div>${glyph(icon, "fire")}</div><p class="nutrition-total">${formatted(total, num)} kcal total, scaled to this recipe’s servings.</p><button type="button" class="btn btn-secondary nutrition-log-button" data-action="calorie-recipe" data-id="${esc(recipeId)}">${glyph(icon, "plus")}<span>Log this recipe</span></button></section>`;
  }

  const knownCopy =
    known !== null && known > 0
      ? `${formatted(known, num)} kcal counted from known ingredients.`
      : "No known ingredient calories are available yet.";
  return `<section class="nutrition-recipe nutrition-recipe-incomplete" aria-label="Incomplete recipe calorie estimate"><div class="nutrition-recipe-heading"><div><p class="nutrition-label">ESTIMATED ENERGY</p><p class="nutrition-incomplete-title">Estimate incomplete</p></div>${glyph(icon, "bell")}</div><p>${knownCopy}</p>${missingLabels.length ? `<p class="nutrition-missing">Missing calorie data for ${esc(missingLabels.join(", "))}.</p>` : `<p class="nutrition-missing">Some calorie data is missing.</p>`}<p class="nutrition-help">Partial estimates cannot be logged as a complete meal. Enter your own calorie value instead.</p><button type="button" class="btn btn-secondary" data-action="calorie-manual" data-id="${esc(recipeId)}">Enter calories manually</button></section>`;
}
