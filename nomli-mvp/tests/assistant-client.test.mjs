import test from "node:test";
import assert from "node:assert/strict";
import { requestAssistantReply } from "../web/assistant-client.js";
import { buildAssistantContext } from "../web/assistant-domain.js";
const config = { apiUrl: "https://example.com", deviceToken: "a".repeat(32) };
const context = buildAssistantContext({
  items: { lot: { name: "Food", qty: 2, unit: "g", storage: "Fridge" } },
  profile: { allergies: [], cuisine: "Any", time: 20, household: 2 },
  tools: {},
  servings: {},
  recipe: null,
  cooking: null,
});
const valid = {
  provider: "gemini",
  model: "gemini-test",
  reply: { answer: "Plain advice", warnings: [], proposals: [] },
};
const opts = (fetchImpl, extra = {}) => ({
  config,
  context,
  question: "What can I cook?",
  fetchImpl,
  ...extra,
});
test("paired request uses bounded recent history and validates response", async () => {
  let sent;
  const result = await requestAssistantReply(
    opts(
      async (url, init) => {
        sent = { url, ...init };
        return Response.json(valid);
      },
      {
        history: Array.from({ length: 10 }, (_, i) => ({
          q: String(i),
          a: "Answer",
        })),
      },
    ),
  );
  assert.equal(result.answer, "Plain advice");
  assert.equal(JSON.parse(sent.body).history.length, 6);
  assert.equal(sent.url, "https://example.com/api/v1/assistant-replies");
  assert.equal(sent.credentials, "omit");
  assert.equal(sent.redirect, "error");
});
test("malformed and unknown proposal IDs rejected", async () => {
  for (const raw of [
    {
      ...valid,
      reply: {
        answer: "x",
        warnings: [],
        proposals: [
          { type: "set_quantity", itemId: "unknown", quantity: 3, reason: "x" },
        ],
      },
    },
    { ...valid, reply: { answer: "x" } },
    { ...valid, provider: "other" },
  ])
    await assert.rejects(
      requestAssistantReply(opts(async () => Response.json(raw))),
      (e) => e.code === "response",
    );
  await assert.rejects(
    requestAssistantReply(opts(async () => new Response("{bad"))),
    (e) => e.code === "response",
  );
});
test("response size bounded by declared and streamed bytes", async () => {
  for (const response of [
    new Response("{}", { headers: { "content-length": "65537" } }),
    new Response("x".repeat(65537)),
  ])
    await assert.rejects(
      requestAssistantReply(opts(async () => response)),
      (e) => e.code === "response",
    );
});
test("request bounds reject before network", async () => {
  let calls = 0;
  await assert.rejects(
    requestAssistantReply(
      opts(
        async () => {
          calls++;
        },
        { question: "x".repeat(2001) },
      ),
    ),
    (e) => e.code === "question",
  );
  await assert.rejects(
    requestAssistantReply(
      opts(
        async () => {
          calls++;
        },
        { context: { large: "x".repeat(200000) } },
      ),
    ),
    (e) => e.code === "request_size",
  );
  assert.equal(calls, 0);
});
test("network and provider details sanitized without retry", async () => {
  let calls = 0;
  await assert.rejects(
    requestAssistantReply(
      opts(async () => {
        calls++;
        throw Error("secret provider token");
      }),
    ),
    (e) => e.code === "network" && !e.message.includes("secret"),
  );
  assert.equal(calls, 1);
  for (const status of [401, 403, 429, 500])
    await assert.rejects(
      requestAssistantReply(
        opts(async () => new Response("secret", { status })),
      ),
      (e) => !e.message.includes("secret"),
    );
});
const abortingFetch = async (_url, { signal }) =>
  new Promise((_resolve, reject) => {
    if (signal.aborted) reject(new DOMException("secret", "AbortError"));
    else
      signal.addEventListener(
        "abort",
        () => reject(new DOMException("secret", "AbortError")),
        { once: true },
      );
  });
test("external cancellation and timeout have separate safe errors", async () => {
  const controller = new AbortController();
  const pending = requestAssistantReply(
    opts(abortingFetch, { signal: controller.signal }),
  );
  controller.abort();
  await assert.rejects(pending, (e) => e.code === "cancelled");
  await assert.rejects(
    requestAssistantReply(opts(abortingFetch, { timeoutMs: 5 })),
    (e) => e.code === "timeout",
  );
});

test("pre-aborted request never fetches; malformed history sanitized", async () => {
  const controller = new AbortController();
  controller.abort();
  let calls = 0;
  await assert.rejects(
    requestAssistantReply(
      opts(
        async () => {
          calls++;
          return Response.json(valid);
        },
        { signal: controller.signal },
      ),
    ),
    (e) => e.code === "cancelled",
  );
  assert.equal(calls, 0);
  await assert.rejects(
    requestAssistantReply(
      opts(
        async () => {
          calls++;
        },
        { history: [null] },
      ),
    ),
    (e) => e.code === "request",
  );
  assert.equal(calls, 0);
});
test("deadline stops stalled response reader and cancels stream", async () => {
  let cancelled = false;
  const body = new ReadableStream({
    pull() {
      return new Promise(() => {});
    },
    cancel() {
      cancelled = true;
    },
  });
  await assert.rejects(
    requestAssistantReply(
      opts(async () => new Response(body), { timeoutMs: 5 }),
    ),
    (e) => e.code === "timeout",
  );
  assert.equal(cancelled, true);
});
test("invalid context rejects before network", async () => {
  let calls = 0;
  await assert.rejects(
    requestAssistantReply(
      opts(
        async () => {
          calls++;
        },
        { context: {} },
      ),
    ),
    (e) => e.code === "request",
  );
  assert.equal(calls, 0);
});
