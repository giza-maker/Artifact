import { validateScanReviewFields } from "./scan-review-fields.js";

const CARD_SELECTOR = "[data-scan-card]";
const SUMMARY_SELECTOR = "[data-scan-summary]";
const FIELD_SELECTOR = "input, select, textarea";

export function createScanReviewState(count) {
  const size = Math.max(0, Number.isFinite(count) ? Math.trunc(count) : 0);
  return { index: size ? 0 : size, reviewed: Array(size).fill(false) };
}

export function reduceScanReviewState(state, action) {
  const reviewed = [...state.reviewed];
  const summaryIndex = reviewed.length;
  switch (action.type) {
    case "show":
      return {
        index: Math.min(
          summaryIndex,
          Math.max(0, Math.trunc(action.index) || 0),
        ),
        reviewed,
      };
    case "edit":
      if (action.index >= 0 && action.index < summaryIndex)
        reviewed[action.index] = false;
      return { index: state.index, reviewed };
    case "review": {
      if (action.index >= 0 && action.index < summaryIndex)
        reviewed[action.index] = true;
      return {
        index: Math.min(summaryIndex, Math.max(0, action.index + 1)),
        reviewed,
      };
    }
    default:
      return { index: state.index, reviewed };
  }
}

export function initScanReviewWizard(
  form,
  { onInvalid = () => {}, onSummary = () => {} } = {},
) {
  if (!form?.querySelectorAll || !form?.addEventListener)
    throw new TypeError("Scan review form is required.");

  let cards = [];
  let summary = null;
  let state = createScanReviewState(0);
  let destroyed = false;

  const closest = (target, selector) => target?.closest?.(selector) || null;

  function syncReviewAttributes() {
    cards.forEach((card, index) => {
      card.dataset.scanReviewed = String(Boolean(state.reviewed[index]));
    });
    form.dataset.scanReviewComplete = String(
      state.reviewed.length === cards.length && state.reviewed.every(Boolean),
    );
    form.dataset.scanFirstUnreviewed = String(firstUnreviewed());
  }

  function render({ focus = false } = {}) {
    if (destroyed) return;
    const atSummary = state.index === cards.length;
    cards.forEach((card, index) => {
      card.hidden = index !== state.index;
    });
    if (summary) summary.hidden = !atSummary;

    const stepText = atSummary
      ? "Review & save"
      : `Item ${state.index + 1} of ${cards.length}`;
    form.querySelectorAll("[data-scan-step]").forEach((node) => {
      node.textContent = stepText;
    });
    form.querySelectorAll("[data-scan-count]").forEach((node) => {
      node.textContent = String(cards.length);
    });
    form.querySelectorAll('[data-scan-nav="back"]').forEach((button) => {
      button.disabled = state.index === 0;
    });
    form.querySelectorAll('[data-scan-nav="next"]').forEach((button) => {
      button.hidden = atSummary;
      button.textContent =
        state.index === cards.length - 1 ? "Review & save" : "Next item";
    });
    form.querySelectorAll("[data-scan-save]").forEach((button) => {
      button.hidden = !atSummary;
    });
    form.querySelectorAll("[data-scan-jump]").forEach((button) => {
      const index = Number.parseInt(button.value, 10);
      button.setAttribute(
        "aria-current",
        index === state.index ? "step" : "false",
      );
    });
    syncReviewAttributes();

    if (atSummary) onSummary();
    if (focus) {
      const visible = atSummary ? summary : cards[state.index];
      visible
        ?.querySelector(
          atSummary ? "[data-scan-summary-title]" : "[data-scan-card-title]",
        )
        ?.focus();
    }
  }

  function show(index, options) {
    state = reduceScanReviewState(state, { type: "show", index });
    render(options);
    return state.index;
  }

  function firstUnreviewed() {
    return state.reviewed.findIndex((reviewed) => !reviewed);
  }

  function canFinish() {
    return cards.length > 0 && firstUnreviewed() === -1;
  }

  function isReviewed() {
    return canFinish();
  }

  function revealInvalid(field) {
    const card = closest(field, CARD_SELECTOR);
    const cardIndex = cards.indexOf(card);
    if (cardIndex >= 0) show(cardIndex);
    else if (summary && summary.contains(field)) show(cards.length);
    onInvalid(field, field?.validationMessage || "Check this field.");
  }

  function invalidFieldIn(card) {
    validateScanReviewFields(form, { stockOnly: true });
    return [...card.querySelectorAll(FIELD_SELECTOR)].find(
      (field) =>
        !field.disabled &&
        field.willValidate &&
        field.validity?.valid === false,
    );
  }

  function next() {
    if (state.index >= cards.length) return;
    const invalid = invalidFieldIn(cards[state.index]);
    if (invalid) {
      revealInvalid(invalid);
      return;
    }
    state = reduceScanReviewState(state, {
      type: "review",
      index: state.index,
    });
    render({ focus: true });
  }

  function refresh() {
    const oldCards = cards;
    const oldReviewed = new Map(
      oldCards.map((card, index) => [card, state.reviewed[index]]),
    );
    cards = [...form.querySelectorAll(CARD_SELECTOR)];
    summary = form.querySelector(SUMMARY_SELECTOR);
    const reviewed = cards.map(
      (card) => oldReviewed.get(card) ?? card.dataset.scanReviewed === "true",
    );
    state = {
      index: Math.min(state.index, cards.length),
      reviewed,
    };
    if (!cards.length) state.index = 0;
    render();
    return cards.length;
  }

  function handleClick(event) {
    const jump = closest(event.target, "[data-scan-jump]");
    if (jump && form.contains(jump)) {
      event.preventDefault();
      const menu = jump.closest(".scan-item-jump");
      if (menu) menu.open = false;
      show(Number.parseInt(jump.value, 10), { focus: true });
      return;
    }
    const nav = closest(event.target, "[data-scan-nav]");
    if (!nav || !form.contains(nav)) return;
    event.preventDefault();
    if (nav.dataset.scanNav === "next") next();
    else if (nav.dataset.scanNav === "back")
      show(Math.max(0, state.index - 1), { focus: true });
    else if (nav.dataset.scanNav === "items") {
      const menu = form.querySelector(".scan-item-jump");
      if (menu) {
        menu.open = !menu.open;
        menu.scrollIntoView({ block: "nearest" });
        if (menu.open) menu.querySelector("[data-scan-jump]")?.focus();
      } else
        show(firstUnreviewed() < 0 ? 0 : firstUnreviewed(), { focus: true });
    }
  }

  function handleEdit(event) {
    const cardIndex = cards.indexOf(closest(event.target, CARD_SELECTOR));
    if (cardIndex < 0) return;
    if (form.elements.confirmed) form.elements.confirmed.checked = false;
    state = reduceScanReviewState(state, { type: "edit", index: cardIndex });
    syncReviewAttributes();
  }

  function destroy() {
    if (destroyed) return;
    destroyed = true;
    form.removeEventListener("click", handleClick);
    form.removeEventListener("input", handleEdit);
    form.removeEventListener("change", handleEdit);
  }

  form.addEventListener("click", handleClick);
  form.addEventListener("input", handleEdit);
  form.addEventListener("change", handleEdit);
  refresh();

  return {
    show,
    revealInvalid,
    refresh,
    destroy,
    isReviewed,
    firstUnreviewed,
    canFinish,
  };
}
