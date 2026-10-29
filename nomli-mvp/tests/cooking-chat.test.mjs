import test from "node:test";
import assert from "node:assert/strict";
import {
  getCookingChatReturn,
  renderCookingChatCoach,
  renderCookingChatReturn,
  renderCookingChatShortcut,
  shouldPreserveCookingChat,
} from "../web/cooking-chat.js";

const recipe = { id: "r1", name: "Very long lentil soup", steps: [{}, {}, {}] };
const session = { id: "s1", rid: "r1", phase: "cooking", step: 1 };
const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const icon = (name) => `<svg data-icon="${name}" aria-hidden="true"></svg>`;

test("preserves only valid cooking or review assistant round trips", () => {
  assert.equal(
    shouldPreserveCookingChat({ from: "cooking", to: "assistant", session }),
    true,
  );
  assert.equal(
    shouldPreserveCookingChat({ from: "assistant", to: "cooking", session }),
    true,
  );
  const review = { ...session, phase: "review" };
  assert.equal(
    shouldPreserveCookingChat({
      from: "review",
      to: "assistant",
      session: review,
    }),
    true,
  );
  assert.equal(
    shouldPreserveCookingChat({
      from: "assistant",
      to: "review",
      session: review,
    }),
    true,
  );
  assert.equal(
    shouldPreserveCookingChat({
      from: "assistant",
      to: "cooking",
      session: review,
    }),
    false,
  );
  assert.equal(
    shouldPreserveCookingChat({ from: "kitchen", to: "assistant", session }),
    false,
  );
  assert.equal(
    shouldPreserveCookingChat({
      from: "cooking",
      to: "assistant",
      session: null,
    }),
    false,
  );
  assert.equal(
    shouldPreserveCookingChat({
      from: "cooking",
      to: "assistant",
      session: { id: "s", rid: "r", phase: "__proto__" },
    }),
    false,
  );
});

test("returns phase-specific labels and clamps cooking progress", () => {
  assert.deepEqual(
    getCookingChatReturn({ ...session, phase: "prep" }, recipe),
    {
      route: "cooking",
      label: "Resume preparation",
      detail: "Very long lentil soup · Preparation",
    },
  );
  assert.deepEqual(getCookingChatReturn({ ...session, step: 99 }, recipe), {
    route: "cooking",
    label: "Resume cooking",
    detail: "Very long lentil soup · Step 3 of 3",
  });
  assert.equal(getCookingChatReturn(session, { ...recipe, id: "other" }), null);
});

test("return renderer escapes content and exposes clear action", () => {
  const html = renderCookingChatReturn({
    session,
    recipe: { ...recipe, name: '<img src=x onerror="bad">' },
    esc,
    icon,
  });
  assert.match(html, /type="button"/);
  assert.match(html, /data-action="cook-resume"/);
  assert.match(html, /data-icon="arrow-left"/);
  assert.match(html, /<strong>Resume cooking<\/strong><small>/);
  assert.doesNotMatch(html, /<img src=x/);
  assert.match(html, /&lt;img src=x onerror=&quot;bad&quot;&gt;/);
});

test("shortcut and coach expose pending chat state", () => {
  const shortcut = renderCookingChatShortcut({
    chat: { pending: true },
    esc,
    icon,
  });
  assert.match(shortcut, /data-action="cook-chat"/);
  assert.match(shortcut, /aria-label="Chat with Zara, replying"/);
  assert.match(shortcut, /Replying/);
  assert.match(shortcut, /cook-chat-shortcut__badge/);

  const coach = renderCookingChatCoach({ chat: { hasReply: true }, esc, icon });
  assert.match(coach, /data-cooking-chat-coach/);
  assert.match(coach, /Zara’s reply is ready/);
  assert.match(coach, /data-action="cook-chat"/);
  assert.match(coach, />Continue chat</);

  const emptyCoach = renderCookingChatCoach({ esc, icon });
  assert.match(emptyCoach, /data-action="cook-ask"/);
  assert.match(emptyCoach, />Ask Zara</);
});
