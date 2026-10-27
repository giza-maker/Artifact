import test from "node:test";
import assert from "node:assert/strict";
import { createNativeVoiceBridge } from "../web/native-voice.js";
const deferred = () => {
  let resolve, reject;
  const promise = new Promise((yes, no) => {
    resolve = yes;
    reject = no;
  });
  return { promise, resolve, reject };
};
const tick = () => new Promise(setImmediate);
const options = (requestId) => ({ requestId, language: "ar-EG" });
function service(overrides = {}) {
  const starts = [],
    cancels = [];
  return {
    starts,
    cancels,
    addListener: async () => ({ remove: async () => {} }),
    start: async (o) => {
      starts.push(o.requestId);
      return { ...o, transcript: "٢ كيلو أرز", cancelled: false };
    },
    cancel: async (o) => {
      cancels.push(o.requestId);
    },
    status: async () => ({ available: true }),
    ...overrides,
  };
}
test("stalled listener removal cannot stall result or next turn", async () => {
  const p = service({
    addListener: async () => ({ remove: () => new Promise(() => {}) }),
  });
  const b = createNativeVoiceBridge({ loadPlugin: async () => p });
  assert.equal((await b.startVoice(options("one"))).transcript, "٢ كيلو أرز");
  assert.equal((await b.startVoice(options("two"))).cancelled, false);
});
test("cancel delayed registration; new capture survives late old registration", async () => {
  const oldRegistration = deferred();
  let registrations = 0,
    removals = 0;
  const p = service({
    addListener: async () =>
      ++registrations === 1
        ? oldRegistration.promise
        : { remove: async () => removals++ },
  });
  const b = createNativeVoiceBridge({ loadPlugin: async () => p });
  const old = b.startVoice(options("old"));
  await tick();
  await b.cancelVoice(options("old"));
  assert.equal((await b.startVoice(options("new"))).cancelled, false);
  oldRegistration.resolve({ remove: async () => removals++ });
  assert.equal((await old).cancelled, true);
  assert.deepEqual(p.starts, ["new"]);
  assert.equal(removals, 2);
});
test("late old cancel cannot cancel new turn; native pending turn frees JS ownership", async () => {
  const oldNative = deferred(),
    newNative = deferred();
  const p = service({
    start: (o) =>
      o.requestId === "old" ? oldNative.promise : newNative.promise,
  });
  const b = createNativeVoiceBridge({ loadPlugin: async () => p });
  const old = b.startVoice(options("old"));
  await tick();
  await b.cancelVoice(options("old"));
  const next = b.startVoice(options("new"));
  await tick();
  await b.cancelVoice(options("old"));
  assert.deepEqual(p.cancels, ["old"]);
  oldNative.resolve({
    ...options("old"),
    transcript: "late",
    cancelled: false,
  });
  assert.equal((await old).cancelled, true);
  await assert.rejects(b.startVoice(options("old")), (e) => e.code === "busy");
  newNative.resolve({ ...options("new"), transcript: "new", cancelled: false });
  assert.equal((await next).transcript, "new");
  await assert.rejects(
    b.startVoice(options("old")),
    (e) => e.code === "cancelled",
  );
});
test("service rejection frees ownership even when listener removal rejects", async () => {
  let attempts = 0;
  const p = service({
    addListener: async () => ({
      remove: async () => {
        throw Error("remove");
      },
    }),
    start: async (o) => {
      if (++attempts === 1)
        throw Object.assign(Error("network"), { code: "network" });
      return { ...o, transcript: "ok", cancelled: false };
    },
  });
  const b = createNativeVoiceBridge({ loadPlugin: async () => p });
  await assert.rejects(
    b.startVoice(options("one")),
    (e) => e.code === "network",
  );
  assert.equal((await b.startVoice(options("two"))).transcript, "ok");
  await tick();
});
test("unsupported web never loads plugin", async () => {
  const b = createNativeVoiceBridge({
    isNative: () => false,
    loadPlugin: () => {
      throw Error("must not load");
    },
  });
  assert.deepEqual(await b.voiceStatus(), { available: false });
  await assert.rejects(
    b.startVoice(options("web")),
    (e) => e.code === "unavailable",
  );
});
test("cancel lazy load prevents old microphone start", async () => {
  const loading = deferred(),
    p = service();
  const b = createNativeVoiceBridge({ loadPlugin: () => loading.promise });
  const old = b.startVoice(options("old"));
  await b.cancelVoice(options("old"));
  loading.resolve(p);
  assert.equal((await old).cancelled, true);
  assert.deepEqual(p.starts, []);
});
