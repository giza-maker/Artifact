const PHASES = new Set(["prep", "cooking", "review"]);

const isText = (value) => typeof value === "string" && value.trim().length > 0;

const validSession = (session) =>
  Boolean(
    session &&
      typeof session === "object" &&
      isText(session.id) &&
      isText(session.rid) &&
      PHASES.has(session.phase),
  );

const returnRoute = (session) =>
  session.phase === "review" ? "review" : "cooking";

export function shouldPreserveCookingChat({ from, to, session } = {}) {
  if (!validSession(session)) return false;
  const route = returnRoute(session);
  return (
    (from === route && to === "assistant") ||
    (from === "assistant" && to === route)
  );
}

export function getCookingChatReturn(session, recipe) {
  if (
    !validSession(session) ||
    !recipe ||
    recipe.id !== session.rid ||
    !isText(recipe.name)
  )
    return null;

  const route = returnRoute(session);
  if (session.phase === "prep") {
    return {
      route,
      label: "Resume preparation",
      detail: `${recipe.name} · Preparation`,
    };
  }
  if (session.phase === "review") {
    return { route, label: "Resume review", detail: `${recipe.name} · Review` };
  }

  const total = Array.isArray(recipe.steps) ? recipe.steps.length : 0;
  const rawStep = Number.isFinite(Number(session.step))
    ? Math.trunc(Number(session.step))
    : 0;
  const step = total ? Math.min(Math.max(rawStep, 0), total - 1) + 1 : 1;
  const boundedTotal = Math.max(total, 1);
  return {
    route,
    label: "Resume cooking",
    detail: `${recipe.name} · Step ${step} of ${boundedTotal}`,
  };
}

const glyph = (icon, name) => (typeof icon === "function" ? icon(name) : "");
const escapeWith = (esc, value) =>
  typeof esc === "function" ? esc(String(value)) : String(value);

export function renderCookingChatReturn({ session, recipe, esc, icon } = {}) {
  const target = getCookingChatReturn(session, recipe);
  if (!target) return "";
  const label = escapeWith(esc, target.label);
  const detail = escapeWith(esc, target.detail);
  return `<button type="button" class="zara-cooking-return" data-action="cook-resume" aria-label="${label}: ${detail}">${glyph(icon, "arrow-left")}<span><strong>${label}</strong><small>${detail}</small></span></button>`;
}

function chatState(chat = {}) {
  if (chat.pending) return { label: "Chat", detail: "Replying", active: true };
  if (chat.hasReply)
    return { label: "Continue chat", detail: "Reply ready", active: true };
  if (chat.hasDraft)
    return { label: "Continue chat", detail: "Question draft", active: true };
  if (chat.hasConversation)
    return { label: "Continue chat", detail: "With Zara", active: false };
  return { label: "Chat", detail: "With Zara", active: false };
}

export function renderCookingChatShortcut({ chat = {}, esc, icon } = {}) {
  const state = chatState(chat);
  const label = escapeWith(esc, state.label);
  const detail = escapeWith(esc, state.detail);
  const accessible = escapeWith(
    esc,
    `${state.label} with Zara${state.detail === "Replying" ? ", replying" : state.detail === "Reply ready" ? ", reply ready" : ""}`,
  );
  return `<button type="button" class="cook-chat-shortcut" data-action="cook-chat" aria-label="${accessible}">${glyph(icon, "chat-circle")}<span><strong>Zara</strong><small>${detail}</small></span>${state.active ? '<i class="cook-chat-shortcut__badge" aria-hidden="true"></i>' : ""}</button>`;
}

export function renderCookingChatCoach({ chat = {}, esc, icon } = {}) {
  const continuing = Boolean(
    chat.pending || chat.hasConversation || chat.hasReply || chat.hasDraft,
  );
  const title = chat.pending
    ? "Zara is working on your reply"
    : chat.hasReply
      ? "Zara’s reply is ready"
      : continuing
        ? "Keep cooking with Zara"
        : "Zara’s here if you need a hand";
  const help = chat.pending
    ? "Keep cooking while Zara replies."
    : chat.hasReply
      ? "Open chat when you’re ready."
      : "Ask about this step or a substitution.";
  const action = continuing ? "cook-chat" : "cook-ask";
  const actionLabel = continuing ? "Continue chat" : "Ask Zara";
  return `<aside class="cook-coach" data-cooking-chat-coach><img src="images/zara-96.webp" alt="" width="40" height="40"><div><b>${escapeWith(esc, title)}</b><p>${escapeWith(esc, help)}</p></div><button type="button" class="btn btn-secondary" data-action="${action}">${glyph(icon, "chat-circle")}<span>${escapeWith(esc, actionLabel)}</span></button></aside>`;
}
