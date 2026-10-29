import test from "node:test";
import assert from "node:assert/strict";
import {
  getCookingChatPanelContext,
  renderCookingChatPanelContext,
} from "../web/cooking-chat-panel.js";

const recipe = { id: "r1", name: "Lentil soup", steps: [{}, {}, {}] };
const session = { id: "s1", rid: "r1", phase: "cooking", step: 1 };

test("returns exact phase context and rejects invalid sessions", () => {
  assert.deepEqual(
    getCookingChatPanelContext({ ...session, phase: "prep" }, recipe, 9),
    {
      recipeName: "Lentil soup",
      phase: "Preparation",
      timer: null,
    },
  );
  assert.deepEqual(
    getCookingChatPanelContext({ ...session, phase: "review" }, recipe, 9),
    {
      recipeName: "Lentil soup",
      phase: "Final review",
      timer: null,
    },
  );
  assert.equal(getCookingChatPanelContext(null, recipe, 9), null);
  assert.equal(
    getCookingChatPanelContext({ ...session, phase: "bad" }, recipe, 9),
    null,
  );
  assert.equal(
    getCookingChatPanelContext(session, { ...recipe, id: "other" }, 9),
    null,
  );
});

test("clamps cooking progress and running timer seconds", () => {
  assert.deepEqual(
    getCookingChatPanelContext(
      { ...session, step: 99, running: true },
      recipe,
      -8,
    ),
    {
      recipeName: "Lentil soup",
      phase: "Step 3 of 3",
      timer: { seconds: 0, label: "0:00" },
    },
  );
  assert.deepEqual(
    getCookingChatPanelContext(
      { ...session, step: -4, running: true },
      recipe,
      125.9,
    ),
    {
      recipeName: "Lentil soup",
      phase: "Step 1 of 3",
      timer: { seconds: 125, label: "2:05" },
    },
  );
});

test("renderer escapes context and exposes timer semantics", () => {
  const html = renderCookingChatPanelContext({
    session: { ...session, running: true },
    recipe: { ...recipe, name: '<img src=x onerror="bad">' },
    seconds: 65,
    icon: (name) => `<svg data-icon="${name}" aria-hidden="true"></svg>`,
  });
  assert.match(html, /class="cooking-chat-panel-context"/);
  assert.match(html, /role="timer"/);
  assert.match(html, /Cooking timer, 1:05 remaining/);
  assert.match(html, /data-icon="timer"/);
  assert.match(html, /&lt;img src=x onerror=&quot;bad&quot;&gt;/);
  assert.doesNotMatch(html, /<img src=x/);
});

test("completed timer is announced inside the sheet and does not become a preparation timer", () => {
  const done = renderCookingChatPanelContext({
    session: { ...session, running: false },
    recipe,
    seconds: 0,
  });
  assert.match(done, /role="status"/);
  assert.match(done, /Timer finished/);
  assert.doesNotMatch(done, /remaining/);
  const prep = renderCookingChatPanelContext({
    session: { ...session, phase: "prep", running: false },
    recipe,
    seconds: 0,
  });
  assert.doesNotMatch(prep, /Timer finished|role="timer"/);
});
