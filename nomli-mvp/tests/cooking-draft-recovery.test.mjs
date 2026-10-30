import test from "node:test";
import assert from "node:assert/strict";

import {
  captureAssistantDraft,
  captureCookingReview,
  cookingReviewKey,
  restoreAssistantDraft,
  restoreCookingReview,
  validateAssistantDraft,
  validateCookingReview,
} from "../web/cooking-draft-recovery.js";

function session(overrides = {}) {
  return {
    id: "cook-1",
    rid: "lentil-soup",
    servings: 4,
    phase: "review",
    allocations: [
      {
        id: "lentils-1",
        ingredientId: "lentils",
        qty: 1.5,
        unit: "kg",
        gramsPerUnit: null,
      },
      {
        id: "onion-1",
        ingredientId: "onion",
        qty: 2,
        unit: "pieces",
        gramsPerUnit: 80,
      },
    ],
    ...overrides,
  };
}

function control(name, value = "", extra = {}) {
  return {
    name,
    value,
    checked: false,
    max: "",
    validationMessage: "",
    setCustomValidity(message) {
      this.validationMessage = message;
    },
    ...extra,
  };
}

function form(values = {}) {
  const controls = [
    control("used-lentils-1", values.lentils ?? "١٫٢٥", { max: "3" }),
    control("used-onion-1", values.onion ?? "bad input", { max: "7" }),
    control("confirmed", "on", { checked: true }),
  ];
  controls.namedItem = (name) => controls.find((entry) => entry.name === name) ?? null;
  return { elements: controls };
}

const items = {
  "lentils-1": { ingredientId: "lentils", qty: 3, unit: "kg" },
  "onion-1": {
    ingredientId: "onion",
    qty: 7,
    unit: "pieces",
    gramsPerUnit: 80,
  },
};

test("assistant draft restores only for explicit Send and suppresses completed pending question", () => {
  const chat = [{ q: "old", a: "answer" }];
  const pending = captureAssistantDraft({ question: "  هل أضيف ملح؟  ", pending: true, chat });
  assert.equal(pending.question, "  هل أضيف ملح؟  ");
  assert.deepEqual(restoreAssistantDraft(pending, { chat }), {
    question: "  هل أضيف ملح؟  ",
    interrupted: true,
    notice: "Your interrupted question was restored. Tap Send to try again.",
  });
  assert.deepEqual(
    restoreAssistantDraft(pending, {
      chat: [...chat, { q: "هل أضيف ملح؟", a: "نعم" }],
    }),
    { question: "", interrupted: false, notice: "" },
  );

  const repeated = captureAssistantDraft({ question: "old", pending: true, chat });
  assert.equal(
    restoreAssistantDraft(repeated, {
      chat: [...chat, { q: "different", a: "new answer" }],
    }).question,
    "old",
  );

  const unsent = captureAssistantDraft({ question: "old", pending: false, chat });
  assert.equal(restoreAssistantDraft(unsent, { chat }).question, "old");
  assert.equal(captureAssistantDraft({ question: " ", chat }), null);
  assert.equal(captureAssistantDraft({ question: "x".repeat(2001), chat }), null);

  const corrupt = { ...pending, pending: true, chatSignature: '[["q",42]]' };
  assert.equal(validateAssistantDraft(corrupt), false);
  assert.deepEqual(restoreAssistantDraft(corrupt, { chat }), {
    question: "",
    interrupted: false,
    notice: "",
  });
  assert.equal(
    validateAssistantDraft({
      ...pending,
      chatSignature: JSON.stringify(Array(21).fill(["q", "a"])),
    }),
    false,
  );
});

test("matching review survives restart, preserves raw text, and clears confirmation", () => {
  const source = form();
  const record = captureCookingReview(source, session());
  assert.equal(validateCookingReview(record), true);
  assert.equal(cookingReviewKey(session({ seconds: 1 })), cookingReviewKey(session({ seconds: 999 })));

  const target = form({ lentils: "0", onion: "0" });
  const result = restoreCookingReview(target, structuredClone(record), {
    session: session({ running: true, seconds: 30 }),
    items,
    meals: [],
  });
  assert.equal(result.restored, true);
  assert.equal(target.elements.namedItem("used-lentils-1").value, "١٫٢٥");
  assert.equal(target.elements.namedItem("used-onion-1").value, "bad input");
  assert.equal(target.elements.namedItem("confirmed").checked, false);
});

test("review rejects stale session, allocations, item identity, unit, deletion, and completed meals", () => {
  const record = captureCookingReview(form(), session());
  const attempts = [
    { session: session({ id: "cook-2" }), items, meals: [] },
    { session: session({ allocations: session().allocations.slice(0, 1) }), items, meals: [] },
    { session: session(), items: { ...items, "lentils-1": { ...items["lentils-1"], unit: "g" } }, meals: [] },
    { session: session(), items: { ...items, "lentils-1": { ...items["lentils-1"], ingredientId: "rice" } }, meals: [] },
    { session: session(), items: { "onion-1": items["onion-1"] }, meals: [] },
    { session: session(), items, meals: [{ id: "cook-1", cookingSessionId: "cook-1", status: "completed" }] },
    { session: session({ phase: "cooking" }), items, meals: [] },
  ];
  for (const options of attempts) {
    const target = form({ lentils: "0", onion: "0" });
    assert.equal(restoreCookingReview(target, record, options).restored, false);
    assert.equal(target.elements.namedItem("confirmed").checked, false);
  }
});

test("quantity drift restores without clamping and warns; tampering is rejected", () => {
  const record = captureCookingReview(form({ lentils: "9" }), session());
  const target = form({ lentils: "0" });
  const changedItems = {
    ...items,
    "lentils-1": { ...items["lentils-1"], qty: 1 },
  };
  const restored = restoreCookingReview(target, record, {
    session: session(),
    items: changedItems,
    meals: [],
  });
  assert.equal(restored.restored, true);
  assert.match(restored.notice, /stock changed/i);
  assert.equal(target.elements.namedItem("used-lentils-1").value, "9");
  assert.match(target.elements.namedItem("used-lentils-1").validationMessage, /stock changed/i);

  for (const bad of [
    { ...record, sessionId: "../bad" },
    { ...record, values: { ...record.values, "lentils-1": "x".repeat(2001) } },
    { ...record, allocations: [...record.allocations, record.allocations[0]] },
    { ...record, credentials: "secret" },
  ]) assert.equal(validateCookingReview(bad), false);
});
