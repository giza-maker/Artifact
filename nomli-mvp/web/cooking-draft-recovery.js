const MAX_TEXT = 2000;
const ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const plain = (value) =>
  value !== null &&
  typeof value === "object" &&
  !Array.isArray(value) &&
  (Object.getPrototypeOf(value) === Object.prototype ||
    Object.getPrototypeOf(value) === null);
const validId = (value) => typeof value === "string" && ID.test(value);
const finite = (value) =>
  typeof value === "number" && Number.isFinite(value) && value >= 0;
const conversion = (value) => (finite(value) && value > 0 ? value : null);
const unit = (value) =>
  ({ piece: "pieces", slice: "slices", clove: "cloves", bunch: "bunches" })[
    String(value ?? "")
      .trim()
      .toLowerCase()
  ] ??
  String(value ?? "")
    .trim()
    .toLowerCase();

function chatSignature(chat) {
  if (!Array.isArray(chat)) return "[]";
  return JSON.stringify(
    chat
      .slice(-6)
      .map((entry) => [
        typeof entry?.q === "string" ? entry.q : "",
        typeof entry?.a === "string" ? entry.a : "",
      ]),
  );
}

function repliesAddedAfter(signature, chat) {
  let before;
  try {
    before = JSON.parse(signature);
  } catch {
    return [];
  }
  if (!Array.isArray(before)) return [];
  const now = JSON.parse(chatSignature(chat));
  if (!before.length) return now;
  for (
    let overlap = Math.min(before.length, now.length);
    overlap > 0;
    overlap--
  ) {
    if (
      JSON.stringify(before.slice(-overlap)) ===
      JSON.stringify(now.slice(0, overlap))
    )
      return now.slice(overlap);
  }
  return [];
}

export function captureAssistantDraft({
  question,
  pending = false,
  chat = [],
} = {}) {
  if (
    typeof question !== "string" ||
    !question.trim() ||
    question.length > MAX_TEXT ||
    typeof pending !== "boolean" ||
    !Array.isArray(chat)
  )
    return null;
  const record = {
    kind: "assistant-question",
    version: 1,
    question,
    pending,
    chatSignature: chatSignature(chat),
    chatLength: chat.length,
  };
  return validateAssistantDraft(record) ? record : null;
}

export function validateAssistantDraft(record) {
  if (
    !plain(record) ||
    Object.keys(record).some(
      (key) =>
        ![
          "kind",
          "version",
          "question",
          "pending",
          "chatSignature",
          "chatLength",
        ].includes(key),
    ) ||
    record.kind !== "assistant-question" ||
    record.version !== 1 ||
    typeof record.question !== "string" ||
    !record.question.trim() ||
    record.question.length > MAX_TEXT ||
    typeof record.pending !== "boolean" ||
    typeof record.chatSignature !== "string" ||
    record.chatSignature.length > 122000 ||
    !Number.isSafeInteger(record.chatLength) ||
    record.chatLength < 0
  )
    return false;
  let baseline;
  try {
    baseline = JSON.parse(record.chatSignature);
  } catch {
    return false;
  }
  return (
    Array.isArray(baseline) &&
    baseline.length <= 20 &&
    baseline.length <= record.chatLength &&
    baseline.every(
      (pair) =>
        Array.isArray(pair) &&
        pair.length === 2 &&
        typeof pair[0] === "string" &&
        pair[0].length <= 2000 &&
        typeof pair[1] === "string" &&
        pair[1].length <= 6000,
    )
  );
}

export function restoreAssistantDraft(record, { chat = [] } = {}) {
  const empty = { question: "", interrupted: false, notice: "" };
  if (!validateAssistantDraft(record) || !Array.isArray(chat)) return empty;

  if (record.pending && chatSignature(chat) !== record.chatSignature) {
    const normalized = record.question.trim();
    const completed = repliesAddedAfter(record.chatSignature, chat).some(
      ([question, answer]) =>
        question.trim() === normalized && answer.length > 0,
    );
    if (completed) return empty;
  }
  return {
    question: record.question,
    interrupted: record.pending,
    notice: record.pending
      ? "Your interrupted question was restored. Tap Send to try again."
      : "Your unsent question was restored. Tap Send when ready.",
  };
}

function allocationSnapshot(allocation) {
  return {
    id: allocation.id,
    ingredientId: allocation.ingredientId,
    qty: allocation.qty,
    unit: unit(allocation.unit),
    gramsPerUnit: conversion(allocation.gramsPerUnit),
  };
}

function validAllocation(value) {
  return (
    plain(value) &&
    Object.keys(value).every((key) =>
      ["id", "ingredientId", "qty", "unit", "gramsPerUnit"].includes(key),
    ) &&
    validId(value.id) &&
    validId(value.ingredientId) &&
    finite(value.qty) &&
    typeof value.unit === "string" &&
    value.unit.length > 0 &&
    value.unit.length <= 40 &&
    (value.gramsPerUnit === null ||
      (finite(value.gramsPerUnit) && value.gramsPerUnit > 0))
  );
}

function validSession(session) {
  return (
    plain(session) &&
    validId(session.id) &&
    validId(session.rid) &&
    Number.isInteger(session.servings) &&
    session.servings >= 1 &&
    session.servings <= 12 &&
    Array.isArray(session.allocations) &&
    session.allocations.length <= 500 &&
    session.allocations.every((entry) =>
      validAllocation(allocationSnapshot(entry)),
    ) &&
    new Set(session.allocations.map((entry) => entry.id)).size ===
      session.allocations.length
  );
}

export function cookingReviewKey(session) {
  if (!validSession(session)) return null;
  return JSON.stringify({
    id: session.id,
    rid: session.rid,
    servings: session.servings,
    allocations: session.allocations.map(allocationSnapshot),
  });
}

function namedControl(form, name) {
  if (!form?.elements) return null;
  if (typeof form.elements.namedItem === "function")
    return form.elements.namedItem(name);
  return (
    Array.from(form.elements).find((entry) => entry?.name === name) ?? null
  );
}

export function captureCookingReview(form, session) {
  const key = cookingReviewKey(session);
  if (!key || session.phase !== "review" || !form?.elements) return null;
  const values = Object.create(null);
  const stock = Object.create(null);
  for (const allocation of session.allocations) {
    const control = namedControl(form, `used-${allocation.id}`);
    if (
      !control ||
      typeof control.value !== "string" ||
      control.value.length > MAX_TEXT
    )
      return null;
    values[allocation.id] = control.value;
    const available = Number(control.max);
    stock[allocation.id] =
      Number.isFinite(available) && available >= 0 ? available : null;
  }
  return {
    kind: "cooking-review",
    version: 1,
    key,
    sessionId: session.id,
    recipeId: session.rid,
    servings: session.servings,
    allocations: session.allocations.map(allocationSnapshot),
    values,
    stock,
  };
}

export function validateCookingReview(record) {
  if (
    !plain(record) ||
    Object.keys(record).some(
      (key) =>
        ![
          "kind",
          "version",
          "key",
          "sessionId",
          "recipeId",
          "servings",
          "allocations",
          "values",
          "stock",
        ].includes(key),
    ) ||
    record.kind !== "cooking-review" ||
    record.version !== 1 ||
    typeof record.key !== "string" ||
    record.key.length > 100000 ||
    !validId(record.sessionId) ||
    !validId(record.recipeId) ||
    !Number.isInteger(record.servings) ||
    record.servings < 1 ||
    record.servings > 12 ||
    !Array.isArray(record.allocations) ||
    record.allocations.length > 500 ||
    !record.allocations.every(validAllocation) ||
    new Set(record.allocations.map((entry) => entry.id)).size !==
      record.allocations.length ||
    !plain(record.values) ||
    !plain(record.stock)
  )
    return false;
  const ids = record.allocations.map((entry) => entry.id);
  if (
    Object.keys(record.values).length !== ids.length ||
    Object.keys(record.stock).length !== ids.length ||
    ids.some(
      (id) =>
        !own(record.values, id) ||
        typeof record.values[id] !== "string" ||
        record.values[id].length > MAX_TEXT ||
        !own(record.stock, id) ||
        (record.stock[id] !== null && !finite(record.stock[id])),
    )
  )
    return false;
  const reconstructed = {
    id: record.sessionId,
    rid: record.recipeId,
    servings: record.servings,
    allocations: record.allocations,
  };
  return cookingReviewKey(reconstructed) === record.key;
}

export function restoreCookingReview(
  form,
  record,
  { session, items = {}, meals = [] } = {},
) {
  const rejected = {
    restored: false,
    notice: "Saved cooking review is no longer current.",
  };
  const confirmation = namedControl(form, "confirmed");
  if (confirmation) confirmation.checked = false;
  if (
    !validateCookingReview(record) ||
    !form?.elements ||
    !validSession(session) ||
    session.phase !== "review" ||
    cookingReviewKey(session) !== record.key ||
    !plain(items) ||
    !Array.isArray(meals) ||
    meals.some(
      (meal) =>
        meal?.cookingSessionId === record.sessionId &&
        ["completed", "undone"].includes(meal?.status),
    )
  )
    return rejected;

  let stockChanged = false;
  for (const allocation of record.allocations) {
    const live = items[allocation.id];
    const control = namedControl(form, `used-${allocation.id}`);
    if (
      !plain(live) ||
      !control ||
      live.ingredientId !== allocation.ingredientId ||
      unit(live.unit) !== allocation.unit ||
      conversion(live.gramsPerUnit) !== allocation.gramsPerUnit ||
      !finite(live.qty)
    )
      return rejected;
    if (record.stock[allocation.id] !== live.qty) stockChanged = true;
  }

  for (const allocation of record.allocations) {
    const control = namedControl(form, `used-${allocation.id}`);
    control.value = record.values[allocation.id];
    if (typeof control.setCustomValidity === "function")
      control.setCustomValidity(
        record.stock[allocation.id] !== items[allocation.id].qty
          ? "Stock changed since this amount was entered. Review actual use against current stock."
          : "",
      );
  }
  if (confirmation) confirmation.checked = false;
  return {
    restored: true,
    notice: stockChanged
      ? "Draft restored, but stock changed. Review every amount against current stock before saving."
      : "Cooking review draft restored. Confirm actual use before saving.",
  };
}
