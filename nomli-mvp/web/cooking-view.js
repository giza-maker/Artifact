import { getCookingStepGuide, getCurrentStepAmounts } from "./cooking-guide.js";
import { getCookingStepMedia } from "./cooking-media.js";
import { renderCookingStepMedia } from "./cooking-media-view.js";
import {
  renderCookingChatShortcut,
  renderCookingChatCoach,
} from "./cooking-chat.js";

export function renderCookingExperience({
  recipe: r,
  session: c,
  items,
  seconds,
  speech,
  canRead,
  timerOpen = false,
  chat = {},
  esc: e,
  num,
  icon,
  ingredientLabel,
  toolLabel,
  thumbnail,
  errors,
}) {
  const action = (label, name, id = "", primary = false) =>
    `<button type="button" class="btn ${primary ? "btn-primary" : "btn-quiet"}" data-action="${name}" data-id="${e(id)}">${e(label)}</button>`;
  const top = `<header class="cook-session-top"><button type="button" class="btn btn-quiet" data-action="go" data-id="cook">${icon("arrow-left")}Recipes</button><p>${c.servings} servings</p><div data-cooking-chat-shortcut>${renderCookingChatShortcut({ chat, esc: e, icon })}</div></header>`;
  const hero = r.image
    ? `<div class="cook-hero"><img src="${e(r.image)}" alt="${e(r.name)}" width="560" height="320"><p class="cook-hero-caption">${e(r.name)}</p></div>`
    : "";
  const thumb = (requirement) => {
    const lot = c.allocations.find(
      (x) => x.ingredientId === requirement.ingredientId,
    );
    return thumbnail(
      lot?.id ?? requirement.ingredientId,
      items[lot?.id] ?? {
        name: ingredientLabel(requirement.ingredientId),
        ingredientId: requirement.ingredientId,
      },
    );
  };
  const time = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  const title = (kicker, text, description = "") =>
    `<header class="cook-step-card"><p class="cook-step-kicker">${e(kicker)}</p><h1 class="cook-step-title" data-title tabindex="-1">${e(text)}</h1>${description ? `<p class="cook-screen-description">${e(description)}</p>` : ""}</header>`;

  if (c.phase === "prep") {
    return `<section class="cooking-experience cook-preparing">${top}${hero}${title("BEFORE THE HEAT", "Gather your ingredients", "Tap each card as you measure and get it ready.")}
      <form data-form="cook-prep" id="cook-preparation-form">${errors()}
      <div class="cook-prep-progress"><p><b>Ready to cook?</b><span id="cook-prep-count" role="status">${c.prepared.length} of ${c.requirements.length} ready</span></p><progress id="cook-prep-progress" value="${c.prepared.length}" max="${c.requirements.length}" aria-label="Ingredients prepared"></progress></div>
      <div class="cook-prep-grid" role="group" aria-label="Ingredients to measure">${c.requirements.map((x) => `<label class="cook-prep-item"><input type="checkbox" name="prepared" value="${e(x.ingredientId)}"${c.prepared.includes(x.ingredientId) ? " checked" : ""} required><span class="cook-prep-art">${thumb(x)}</span><span class="cook-prep-name">${e(ingredientLabel(x.ingredientId))}</span><span class="cook-prep-quantity">${num(x.qty)} ${e(x.unit)}</span></label>`).join("")}</div>
      <section class="cook-tools-list"><h2>Get your tools</h2><p>${e(r.requiredTools.map(toolLabel).join(" · "))}</p><label class="checkbox-field"><input type="checkbox" name="toolsConfirmed"${c.toolsConfirmed ? " checked" : ""} required><span>I have these tools ready.</span></label></section>
      <p class="cook-flow-note">Your Kitchen stays unchanged until you confirm what you used.</p>
      <div class="cook-action-dock">${action("Cancel", "cook-cancel-ask")}<button type="submit" class="btn btn-primary">Start cooking ${icon("arrow-right")}</button></div></form></section>`;
  }

  if (c.phase === "review") {
    return `<section class="cooking-experience cook-finishing">${top}
      <header class="cook-review-summary">${r.image ? `<img src="${e(r.cardImage || r.image)}" alt="${e(r.name)}" width="96" height="96">` : ""}<div><p class="cook-step-kicker">FINAL CHECK</p><h1 data-title tabindex="-1">How much did you use?</h1><p>${e(r.name)} · ${c.servings} servings</p></div></header>
      <form data-form="meal" id="cook-meal-review">${errors()}<p class="cook-flow-note">Nothing deducted yet. Enter 0 for anything you did not use.</p>
      <ul class="cook-review-list">${c.allocations.map((x) => `<li class="cook-review-lot">${thumbnail(x.id, items[x.id] ?? { name: x.name, ingredientId: x.ingredientId })}<div class="cook-review-info"><b class="cook-review-name">${e(ingredientLabel(x.ingredientId))}</b><small title="${e(x.name)}" dir="auto">${e(x.name)}</small><small>${num(items[x.id]?.qty ?? 0)} ${e(x.unit)} available${items[x.id] ? "" : " · item removed"}</small></div><label class="cook-review-amount"><span class="sr-only">${e(x.name)} used (${e(x.unit)})</span><input name="used-${e(x.id)}" type="text" dir="ltr" maxlength="128" value="${x.qty}" min="0" max="${items[x.id]?.qty ?? 0}" step="any" inputmode="decimal" required><span class="cook-review-unit">${e(x.unit)}</span></label></li>`).join("")}</ul>
      <section class="cook-review-confirm"><label class="checkbox-field"><input type="checkbox" name="confirmed" required><span>I checked actual use against current stock.</span></label><p>You can undo this meal’s deduction from Recent meals.</p></section>
      <div class="cook-action-dock">${action("Back", "cook-back")}<button type="submit" class="btn btn-primary">Save meal & update Kitchen</button></div><div class="cook-actions-secondary">${action("Cancel without deduction", "cook-cancel-ask")}</div></form></section>`;
  }

  const guide = getCookingStepGuide(r, c.step);
  const stepMedia = getCookingStepMedia(r, c.step);
  if (stepMedia) stepMedia.playbackKey = `${c.id}:${r.id}:${c.step}`;
  const next =
    c.step + 1 < r.steps.length ? getCookingStepGuide(r, c.step + 1) : null;
  const amounts = getCurrentStepAmounts(r, c.step, c);
  const speaking = ["starting", "speaking", "stopping"].includes(speech.phase);
  const speechText =
    speech.error ||
    (speaking
      ? "Reading this step. You can stop at any time."
      : canRead
        ? "Read aloud uses your phone’s speech service."
        : "Read aloud is available in the Android app.");
  return `<section class="cooking-experience cook-active">${top}
    <ol class="cook-progress" aria-label="Step ${c.step + 1} of ${r.steps.length}">${r.steps.map((_, i) => `<li class="${i === c.step ? "is-current" : i < c.step ? "is-done" : ""}"${i === c.step ? ' aria-current="step"' : ""}>${i < c.step ? `${icon("check")}<span class="sr-only">Step ${i + 1} complete</span>` : i + 1}</li>`).join("")}</ol>
    <header class="cook-guide-heading"><p class="cook-step-kicker">${e(r.name)} · STEP ${c.step + 1} OF ${r.steps.length}</p><h1 class="cook-step-title" data-title tabindex="-1">${e(guide.title)}</h1></header>
    ${renderCookingStepMedia(stepMedia, { esc: e, icon })}
    <article class="cook-step-card cook-instruction-card">
      <div class="cook-step-instructions">${guide.instructions.map((text) => `<p>${e(text)}</p>`).join("")}</div>
      ${guide.heatCue ? `<p class="cook-heat">${icon("fire")}${e(guide.heatCue)}</p>` : ""}
      <div class="cook-step-tools"><button type="button" class="btn btn-secondary" data-action="cook-read" aria-describedby="cook-speech-status"${!canRead || speech.phase === "stopping" ? " disabled" : ""}>${icon(speaking ? "pause" : "speaker-high")}<span data-cook-read-label>${speaking ? "Stop reading" : "Read step"}</span></button>${action("All steps", "cook-roadmap")}</div>
      ${amounts.length ? `<details class="cook-ingredient-context"><summary>Ingredients for this step <span>${amounts.length}</span></summary><p class="cook-amount-note">Whole recipe amounts from your prep. Follow the instruction for portions; ingredients may already be mixed.</p><ul class="cook-step-ingredients">${amounts.map((x) => `<li class="cook-ingredient-chip">${thumb(x)}<div><b>${e(ingredientLabel(x.ingredientId))}</b><span class="quantity">${num(x.qty)} ${e(x.unit)} total</span></div></li>`).join("")}</ul></details>` : ""}
    </article>
    <p id="cook-speech-status" class="cook-speech-status${speech.error ? " is-error" : ""}" role="${speech.error ? "alert" : "status"}">${e(speechText)}</p>
    <details class="cook-timer-panel"${c.running || guide.timerPresets.length || timerOpen ? " open" : ""}><summary>${icon("timer")}<span>Timer</span><b data-timer-summary>${c.running || timerOpen ? time : guide.timerPresets.length ? "Recipe timings" : "Set your own"}</b></summary>
      <div class="cook-timer-content"><div class="cook-timer-face" data-timer role="timer" aria-label="Cooking timer">${time}</div><p class="cook-timer-state" data-cook-timer-state>${c.running ? "Running · check your food as you go" : seconds === 0 ? "Timer finished · check your food" : "Starts only when you tap Start timer"}</p>
      <div class="cook-timer-presets">${guide.timerPresets.map((preset) => `<button type="button" data-action="cook-timer-preset" data-id="${preset.seconds}">${e(preset.label)}</button>`).join("")}</div>
      ${action(c.running ? "Pause timer" : "Start timer", "timer-wall", "", true)}
      <details class="cook-timer-settings"><summary>Change timer</summary><form data-form="cook-timer">${errors()}<div class="field-grid"><label class="field">Timer minutes<input type="number" name="minutes" value="${Math.max(1, Math.ceil(seconds / 60))}" min="1" max="180" step="1" required inputmode="numeric"></label><button class="btn btn-secondary">Set timer</button></div></form></details></div></details>
    ${renderCookingChatCoach({ chat, esc: e, icon })}
    <div class="cook-next-preview"><small>${next ? "UP NEXT" : "LAST STEP"}</small><p>${e(next?.title ?? "Review what you used, then update your Kitchen.")}</p></div>
    <div class="cook-action-dock">${c.step ? action("Previous", "cook-prev") : action("Exit", "go", "cook")}${action(next ? "Done · next step" : "Finish & review", "cook-next", r.id, true)}</div>
    </section>`;
}
