const PHASES = new Set(["prep", "cooking", "review"]);

const nonEmptyText = (value) =>
  typeof value === "string" && value.trim().length > 0;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const boundedSeconds = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.trunc(number)) : 0;
};

const formatTimer = (seconds) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

export function getCookingChatPanelContext(session, recipe, seconds) {
  if (
    !session ||
    typeof session !== "object" ||
    !nonEmptyText(session.id) ||
    !nonEmptyText(session.rid) ||
    !PHASES.has(session.phase) ||
    !recipe ||
    recipe.id !== session.rid ||
    !nonEmptyText(recipe.name)
  )
    return null;

  let phase = "Preparation";
  if (session.phase === "review") phase = "Final review";
  if (session.phase === "cooking") {
    const total = Math.max(
      1,
      Array.isArray(recipe.steps) ? recipe.steps.length : 0,
    );
    const rawStep = Number(session.step);
    const index = Number.isFinite(rawStep)
      ? Math.min(Math.max(Math.trunc(rawStep), 0), total - 1)
      : 0;
    phase = `Step ${index + 1} of ${total}`;
  }

  const timerSeconds = boundedSeconds(seconds);
  return {
    recipeName: recipe.name.trim(),
    phase,
    timer:
      session.phase === "cooking" && (session.running || timerSeconds === 0)
        ? { seconds: timerSeconds, label: formatTimer(timerSeconds) }
        : null,
  };
}

export function renderCookingChatPanelContext({
  session,
  recipe,
  seconds,
  esc,
  icon,
} = {}) {
  const context = getCookingChatPanelContext(session, recipe, seconds);
  if (!context) return "";
  const escape = typeof esc === "function" ? esc : escapeHtml;
  const glyph = typeof icon === "function" ? icon("timer") : "";
  const timer = context.timer
    ? `<span class="cooking-chat-panel-timer" role="${session.running ? "timer" : "status"}" aria-label="${session.running ? `Cooking timer, ${escape(context.timer.label)} remaining` : "Cooking timer finished"}">${glyph}<span data-cooking-panel-timer>${session.running ? escape(context.timer.label) : "Timer finished"}</span></span>`
    : "";
  return `<aside class="cooking-chat-panel-context" aria-label="Current cooking context"><span class="cooking-chat-panel-context__copy"><strong>${escape(context.recipeName)}</strong><small>${escape(context.phase)}</small></span>${timer}</aside>`;
}
