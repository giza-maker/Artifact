export function renderMealCompletion({ meal, recipe, esc, icon, button }) {
  if (!meal || meal.status !== "completed" || !recipe) return "";
  return `<section class="meal-completion" aria-labelledby="meal-complete-title">
    <div class="meal-completion-photo"><img src="${esc(recipe.image || recipe.cardImage)}" alt="${esc(recipe.name)}" width="960" height="540"><span class="meal-completion-check" aria-hidden="true">${icon("check")}</span></div>
    <p class="meal-completion-kicker">COOKED BY YOU</p>
    <h1 id="meal-complete-title" data-title tabindex="-1">Look what you made.</h1>
    <p class="meal-completion-name">${esc(recipe.name)}</p>
    <p class="meal-completion-note">Meal saved. Your Kitchen is up to date.</p>
    <div class="meal-completion-actions">${button("Back to Kitchen", "go", "kitchen", "btn-primary")}${button("Find another meal", "meal-complete-dismiss", "", "btn-quiet")}</div>
    <div class="meal-completion-undo">${button("Undo ingredient use", "meal-undo-ask", meal.id, "btn-quiet")}</div>
  </section>`;
}
