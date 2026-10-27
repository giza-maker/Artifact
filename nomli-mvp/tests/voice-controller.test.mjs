import test from "node:test";
import assert from "node:assert/strict";
import {
  createVoiceController,
  VOICE_LANGUAGES,
} from "../web/voice-controller.js";

const deferred = () => {
  let resolve, reject;
  const promise = new Promise((a, b) => {
    resolve = a;
    reject = b;
  });
  return { promise, resolve, reject };
};
const tick = () => new Promise((resolve) => setImmediate(resolve));
function fixture(overrides = {}) {
  const result = deferred();
  const calls = [];
  let request,
    timeout,
    id = 0;
  const native = {
    isNative: true,
    voiceStatus: async () => ({ available: true }),
    startVoice: (args) => {
      request = args;
      calls.push(["start", args.requestId]);
      return result.promise;
    },
    stopVoice: (args) => calls.push(["stop", args.requestId]),
    cancelVoice: (args) => calls.push(["cancel", args.requestId]),
    ...overrides,
  };
  const controller = createVoiceController({
    getNative: () => native,
    makeId: () => `id-${++id}`,
    setTimer: (fn) => {
      timeout = fn;
      return id;
    },
    clearTimer: () => {},
  });
  return {
    controller,
    native,
    calls,
    result,
    request: () => request,
    timeout: () => timeout(),
    complete: (text = "hello", extra = {}) =>
      result.resolve({
        requestId: request.requestId,
        language: request.language,
        cancelled: false,
        transcript: text,
        ...extra,
      }),
  };
}

test("stop processes then reviews; wrong and regressive events ignored", async () => {
  const f = fixture();
  const done = f.controller.start("en-US");
  await tick();
  f.request().onState({ requestId: "wrong", state: "listening" });
  assert.equal(f.controller.snapshot().phase, "starting");
  f.request().onState({ requestId: "id-1", state: "listening" });
  await f.controller.stop();
  assert.equal(f.controller.snapshot().phase, "processing");
  f.request().onState({ requestId: "id-1", state: "listening" });
  assert.equal(f.controller.snapshot().phase, "processing");
  f.complete();
  await done;
  assert.equal(f.controller.snapshot().phase, "review");
  assert.deepEqual(f.calls, [
    ["start", "id-1"],
    ["stop", "id-1"],
  ]);
});

test("cancel pending availability settles and never starts plugin", async () => {
  const status = deferred();
  const f = fixture({ voiceStatus: () => status.promise });
  const done = f.controller.start("en-US");
  await f.controller.cancel();
  await done;
  status.resolve({ available: true });
  await tick();
  assert.equal(f.controller.snapshot().phase, "idle");
  assert.deepEqual(f.calls, [["cancel", "id-1"]]);
});

test("late old plugin result/events cannot change new capture; cancellation IDs isolated", async () => {
  const f = fixture();
  const first = f.controller.start("en-US");
  await tick();
  const old = f.request();
  await f.controller.cancel();
  await first;
  const second = f.controller.start("ar-EG");
  await tick();
  old.onState({ requestId: old.requestId, state: "processing" });
  f.result.resolve({
    requestId: old.requestId,
    language: "en-US",
    transcript: "old",
    cancelled: false,
  });
  await second; // Shared fake result deliberately mismatches new request.
  assert.equal(f.controller.snapshot().phase, "error");
  assert.deepEqual(
    f.calls.filter(([name]) => name === "cancel"),
    [
      ["cancel", "id-1"],
      ["cancel", "id-2"],
    ],
  );
});

test("timeout settles stalled capture and ignores late result", async () => {
  const f = fixture();
  const done = f.controller.start("en-US");
  await tick();
  f.timeout();
  await done;
  assert.equal(f.controller.snapshot().phase, "error");
  assert.match(f.controller.snapshot().error, /timed out/);
  f.complete();
  await tick();
  assert.equal(f.controller.snapshot().phase, "error");
});

test("stalled native cancellation never blocks new capture", async () => {
  const stalled = deferred();
  const f = fixture({ cancelVoice: () => stalled.promise });
  const first = f.controller.start("en-US");
  await tick();
  await f.controller.cancel();
  await first;
  const second = f.controller.start("ar-EG");
  await tick();
  assert.equal(f.controller.snapshot().requestId, "id-2");
  f.complete("عندي ٣ بيضات");
  await second;
  assert.equal(f.controller.snapshot().phase, "review");
  stalled.resolve();
  await tick();
  assert.equal(f.controller.snapshot().transcript, "عندي ٣ بيضات");
});

test("duplicate starts gate capture; stopping permission phase cancels", async () => {
  const status = deferred();
  const f = fixture({ voiceStatus: () => status.promise });
  const done = f.controller.start("en-US");
  await f.controller.start("ar-SA");
  await f.controller.stop();
  await done;
  await tick();
  assert.equal(
    f.calls.some(([name]) => name === "start"),
    false,
  );
  assert.equal(f.controller.snapshot().phase, "idle");
});

test("supported locales fixed; unsupported locale and browser never capture", async () => {
  assert.deepEqual(
    VOICE_LANGUAGES.map((x) => x.id),
    ["en-US", "ar-SA", "ar-EG"],
  );
  const f = fixture({ isNative: false });
  await f.controller.start("en-US");
  assert.equal(f.controller.snapshot().phase, "error");
  await f.controller.start("fr-FR");
  assert.match(f.controller.snapshot().error, /Unsupported/);
  assert.equal(
    f.calls.some(([name]) => name === "start"),
    false,
  );
});

test("invalid results reject empty, overlong, wrong locale/ID and cancelled shape", async () => {
  for (const [text, extra] of [
    ["", {}],
    [" ", {}],
    ["x".repeat(2001), {}],
    ["ok", { language: "ar-EG" }],
    ["ok", { requestId: "other" }],
    ["ok", { cancelled: "false" }],
  ]) {
    const f = fixture();
    const done = f.controller.start("en-US");
    await tick();
    f.complete(text, extra);
    await done;
    assert.equal(f.controller.snapshot().phase, "error");
    assert.equal(f.controller.snapshot().transcript, "");
  }
});

test("native rejection and stop errors settle UI", async () => {
  const f = fixture();
  const done = f.controller.start("en-US");
  await tick();
  f.result.reject(new Error("Permission denied"));
  await done;
  assert.equal(
    f.controller.snapshot().error,
    "Voice capture failed. Try again, or type your question.",
  );
  const g = fixture({
    stopVoice: () => {
      throw new Error("Stop failed");
    },
  });
  const pending = g.controller.start("en-US");
  await tick();
  g.request().onState({ requestId: "id-1", state: "listening" });
  await g.controller.stop();
  await pending;
  assert.equal(
    g.controller.snapshot().error,
    "Voice capture failed. Try again, or type your question.",
  );
});

test("Arabic unchanged; explicit edit and append preserve draft; replace explicit", async () => {
  const f = fixture();
  const done = f.controller.start("ar-EG");
  await tick();
  assert.throws(
    () => f.controller.useTranscript("draft", { mode: "append" }),
    /not ready/,
  );
  const arabic = "عندي ٣ بيضات و١/٢ كوب لبن";
  f.complete(arabic);
  await done;
  assert.equal(f.controller.snapshot().transcript, arabic);
  f.controller.editTranscript(`${arabic}؟`);
  assert.throws(
    () => f.controller.useTranscript("x".repeat(2000), { mode: "append" }),
    /2000/,
  );
  assert.equal(f.controller.snapshot().phase, "review");
  assert.equal(
    f.controller.useTranscript("typed draft", { mode: "append" }),
    `typed draft\n${arabic}؟`,
  );
  assert.equal(f.controller.snapshot().phase, "idle");
  const next = f.controller.start("ar-SA");
  await tick();
  await next;
  assert.equal(f.controller.snapshot().phase, "error"); // Fake old result cannot be reused.
  const g = fixture();
  const ready = g.controller.start("ar-SA");
  await tick();
  g.complete(arabic);
  await ready;
  assert.equal(
    g.controller.useTranscript("draft", { mode: "replace" }),
    arabic,
  );
});

test("cancelled result discards review; capture invokes only native methods", async () => {
  const f = fixture();
  const done = f.controller.start("en-US");
  await tick();
  f.complete("ignored", { cancelled: true });
  await done;
  assert.equal(f.controller.snapshot().phase, "idle");
  assert.equal(f.controller.snapshot().transcript, "");
  assert.deepEqual(f.calls, [["start", "id-1"]]);
});

test("native error codes map to plain copy without exposing provider payload", async () => {
  const codes = [
    "permission_denied",
    "unavailable",
    "no_match",
    "network",
    "language_unavailable",
    "busy",
    "timeout",
    "cancelled",
    "internal",
    "too_long",
    "unknown",
    "__proto__",
  ];
  const typedQuestion = "My typed question ١٢٣";
  for (const code of codes) {
    const f = fixture();
    const done = f.controller.start("en-US");
    await tick();
    f.result.reject(
      Object.assign(
        new Error("PRIVATE provider payload: language_unavailable"),
        { code },
      ),
    );
    await done;
    const message = f.controller.snapshot().error;
    assert.equal(f.controller.snapshot().phase, "error");
    assert.equal(typeof message, "string");
    assert.match(message, /type your question/i);
    assert.doesNotMatch(
      message,
      /PRIVATE|payload|language_unavailable|permission_denied|__proto__/,
    );
    assert.equal(typedQuestion, "My typed question ١٢٣");
    assert.equal(Object.hasOwn(f.controller.snapshot(), "currentDraft"), false);
  }
});

test("review permits delete-all then retyping; blank cannot be used with existing draft", async () => {
  const f = fixture();
  const done = f.controller.start("en-US");
  await tick();
  f.complete();
  await done;
  f.controller.editTranscript("");
  assert.equal(f.controller.snapshot().transcript, "");
  assert.throws(
    () => f.controller.useTranscript("existing draft", { mode: "append" }),
    /1–2000/,
  );
  f.controller.editTranscript("   ");
  assert.throws(
    () => f.controller.useTranscript("existing draft", { mode: "replace" }),
    /1–2000/,
  );
  f.controller.editTranscript("عندي ٣ بيضات");
  assert.equal(
    f.controller.useTranscript("existing draft", { mode: "append" }),
    "existing draft\nعندي ٣ بيضات",
  );
});

test("permission-time WebView hide leaves native capture ownership intact", async () => {
  const f = fixture();
  const done = f.controller.start("en-US");
  await tick();
  assert.equal(f.controller.snapshot().phase, "starting");
  f.controller.handleVisibility(true);
  assert.equal(f.controller.snapshot().phase, "starting");
  assert.deepEqual(f.calls, [["start", "id-1"]]);
  f.controller.handleVisibility(false);
  f.complete("permission granted, speech captured");
  await done;
  assert.equal(f.controller.snapshot().phase, "review");
  assert.equal(
    f.controller.snapshot().transcript,
    "permission granted, speech captured",
  );
});

test("native lifecycle cancellation still settles hidden capture to idle", async () => {
  const f = fixture();
  const done = f.controller.start("ar-EG");
  await tick();
  f.request().onState({ requestId: "id-1", state: "listening" });
  f.controller.handleVisibility(true);
  assert.equal(f.controller.snapshot().phase, "listening");
  f.complete("", { cancelled: true });
  await done;
  assert.equal(f.controller.snapshot().phase, "idle");
  assert.equal(f.controller.snapshot().transcript, "");
});

test("hidden reviewed transcript is discarded without another native capture", async () => {
  const f = fixture();
  const done = f.controller.start("en-US");
  await tick();
  f.complete("private review");
  await done;
  f.controller.handleVisibility(false);
  assert.equal(f.controller.snapshot().phase, "review");
  f.controller.handleVisibility(true);
  assert.equal(f.controller.snapshot().phase, "idle");
  assert.equal(f.controller.snapshot().transcript, "");
  assert.deepEqual(f.calls, [["start", "id-1"]]);
});

test("bridge availability failures show actionable sanitized diagnostics", async () => {
  const f = fixture({
    voiceStatus: async () => {
      throw Object.assign(Error("PRIVATE bridge details"), {
        code: "bridge_unavailable",
      });
    },
  });
  await f.controller.start("en-US");
  assert.equal(f.controller.snapshot().phase, "error");
  assert.match(
    f.controller.snapshot().error,
    /Voice could not start.*Reopen Nomli/,
  );
  assert.doesNotMatch(f.controller.snapshot().error, /PRIVATE|details/);
  assert.equal(
    f.calls.some(([action]) => action === "start"),
    false,
  );
});
