import { getCookingStepGuide } from "./cooking-guide.js";
import { getCookingStepMedia } from "./cooking-media.js";

export function renderScanHome({ connected, heading, button, icon }) {
  const sources = [
    [
      "receipt-paper",
      "receipt",
      "Paper receipt",
      "Take a photo or upload a file",
    ],
    ["groceries", "camera", "Grocery photo", "Capture ingredients together"],
    [
      "receipt-digital",
      "upload-simple",
      "Digital receipt",
      "Choose an image or PDF",
    ],
    ["expiry", "calendar-blank", "Expiry date", "Read a date from the package"],
  ];
  return `<section class="scan-home">${heading("", "Add groceries", "Scan groceries, a receipt or an expiry date, then review each item before saving.")}
    ${!connected ? `<div class="nomli-connection-note">${icon("sparkle")}<div><b>Connect once, scan anytime</b><p>One connection enables scanning and Zara on this device.</p></div>${button("Connect Nomli", "scan-settings", "", "btn-secondary")}</div>` : ""}
    <div class="scan-source-list" aria-label="Choose what to scan">${sources.map(([id, glyph, title, copy]) => `<button type="button" data-action="scan-choose" data-id="${id}" class="scan-source-option"><span class="scan-source-icon">${icon(glyph)}</span><span><b>${title}</b><small>${copy}</small></span>${icon("arrow-right")}</button>`).join("")}</div>
    <p class="scan-review-promise">${icon("check-circle")} You review every item before anything is saved.</p>
    <div class="scan-manual-alternative"><span>No photo?</span>${button("Add an ingredient manually", "item-edit", "new", "btn-quiet")}</div>
    ${connected ? button("Connection settings", "scan-settings", "", "btn-quiet connection-settings-link") : ""}
  </section>`;
}

export function renderConnectionSetup({
  config,
  native,
  esc,
  errorsHtml,
  field,
}) {
  const apiUrl =
    config.apiUrl || "https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev";
  return `<form data-form="scan-config" class="nomli-connect-form">${errorsHtml}
    <p>Connect scanning and Zara together. Your kitchen stays on this device; photos and questions are sent only when you choose.</p>
    ${native ? '<button type="button" class="btn btn-primary" data-action="scan-setup-qr">Scan your setup QR</button><p class="connection-or">Or enter your setup code</p>' : ""}
    ${field("Setup code", "deviceToken", config.deviceToken || "", "password", 'autocomplete="off" minlength="32" maxlength="256" required aria-describedby="setup-code-help"')}
    <p id="setup-code-help" class="details">Use your Nomli device code. Your existing connection needs no new code.</p>
    <details class="connection-advanced"><summary>Connection details</summary>${field("Service address", "apiUrl", apiUrl, "url", 'autocomplete="url" required')}<p class="details">Change this only if your setup instructions specify another service. API keys stay on the server.</p></details>
    <div class="form-actions"><button type="button" class="btn btn-secondary" data-action="scan-test">Check connection</button><button class="btn ${native ? "btn-secondary" : "btn-primary"}" type="submit">${config.deviceToken ? "Save connection" : "Connect Nomli"}</button></div>
    <p class="scan-connection-status" data-connection-status role="status" aria-live="polite"></p>
  </form>`;
}

export function renderZaraWelcome({
  panel,
  session,
  inventoryCount,
  readyRecipe,
  soonNames = [],
  esc,
  icon,
  button,
}) {
  const prompt = (title, question, id) =>
    `<button type="button" class="btn btn-quiet" data-action="assistant-prompt" data-id="context-${id}" data-question="${esc(question)}">${esc(title)}</button>`;
  if (panel)
    return `<section class="zara-welcome zara-welcome-context"><h2>Need a hand?</h2><p>Ask about this step, timing or ingredients.</p><div class="zara-suggestions">${["Explain this step", "What should I look for?", "Help with timing", "What can I substitute?"].map((q, i) => prompt(q, q, i)).join("")}</div></section>`;
  if (!inventoryCount && !session)
    return `<section class="zara-welcome zara-welcome-context"><h2>What can I help you cook?</h2><p>Add what is in your kitchen, browse recipes or ask a question.</p><div class="zara-local-actions">${button("Scan groceries", "go", "scan", "btn-primary")}${button("Add an ingredient", "item-edit", "new", "btn-secondary")}${button("Explore recipes", "go", "cook", "btn-quiet")}</div></section>`;
  const title = session
    ? "Let’s keep cooking"
    : readyRecipe
      ? "Dinner is within reach"
      : "Make more of your kitchen";
  const description = session
    ? "Your current recipe is saved. Resume it or ask for help here."
    : readyRecipe
      ? `Your recorded ingredients cover ${readyRecipe.name}.`
      : "Find a meal, work around a missing ingredient, or plan your next shop.";
  return `<section class="zara-welcome zara-welcome-context"><h2>${title}</h2><p>${esc(description)}</p><div class="zara-local-actions">${session ? button("Resume cooking", "cook-resume", "", "btn-primary") : readyRecipe ? button(`View ${readyRecipe.name}`, "recipe", readyRecipe.id, "btn-secondary") : button("Find a meal", "go", "cook", "btn-secondary")}</div>${soonNames.length ? `<p class="zara-use-soon">${icon("clock")} Use soon: <span dir="auto">${esc(soonNames.slice(0, 3).join(", "))}</span></p>` : ""}<div class="zara-suggestions">${prompt(session ? "Help with this step" : "Plan dinner", session ? "Explain the current cooking step and what I should look for." : "Suggest a dinner using my available kitchen ingredients and explain anything missing.", 0)}${prompt(soonNames.length ? "Use these first" : "Find a substitution", soonNames.length ? `How can I use ${soonNames.slice(0, 3).join(", ")} in a meal?` : "Help me find a substitution for a missing recipe ingredient.", 1)}</div></section>`;
}

export function renderRecipeIntro({
  recipe,
  readiness,
  primaryHtml,
  esc,
  button,
  icon,
}) {
  return `<section class="recipe-overview">${recipe.image ? `<img class="recipe-overview-photo" src="${esc(recipe.image)}" alt="${esc(recipe.name)}" width="960" height="540">` : ""}
    <div class="recipe-plan-start"><div><h2>${esc(readiness.title)}</h2><p>${esc(readiness.description)}</p></div><div class="recipe-plan-actions">${primaryHtml}${button(`Preview ${recipe.steps.length} steps`, "recipe-preview", recipe.id, "btn-secondary")}</div></div>
    <p class="recipe-prep-facts">${icon("clock")} ${recipe.prepMinutes} min prep <span aria-hidden="true">·</span> ${recipe.cookMinutes} min cooking</p>
  </section>`;
}

export function renderRecipePreview({ recipe, esc }) {
  return `<section class="recipe-preview"><p class="recipe-preview-note">Preview only. Your kitchen stock won’t change.</p><ol>${recipe.steps
    .map((_, index) => {
      const guide = getCookingStepGuide(recipe, index),
        media = getCookingStepMedia(recipe, index);
      return `<li>${media ? `<img src="${esc(media.poster)}" alt="${esc(media.alt)}" loading="lazy" width="960" height="540">` : ""}<div><p class="eyebrow">STEP ${index + 1} OF ${recipe.steps.length}</p><h3>${esc(guide.title)}</h3>${guide.instructions.map((text) => `<p>${esc(text)}</p>`).join("")}${media?.lookFor ? `<p class="recipe-preview-cue"><b>Look for:</b> ${esc(media.lookFor)}</p>` : ""}</div></li>`;
    })
    .join("")}</ol></section>`;
}
