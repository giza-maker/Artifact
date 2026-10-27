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
  const b = createNativeVoiceBridge({
    loadPlugin: async () => ({ plugin: p }),
  });
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
  const b = createNativeVoiceBridge({
    loadPlugin: async () => ({ plugin: p }),
  });
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
  const b = createNativeVoiceBridge({
    loadPlugin: async () => ({ plugin: p }),
  });
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
  const b = createNativeVoiceBridge({
    loadPlugin: async () => ({ plugin: p }),
  });
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
  loading.resolve({ plugin: p });
  assert.equal((await old).cancelled, true);
  assert.deepEqual(p.starts, []);
});

test("status preserves bridge failures separately from unavailable speech service", async () => {
  for (const loadPlugin of [
    async () => {
      throw Error("PRIVATE registration");
    },
    async () => ({
      plugin: service({
        status: async () => {
          throw Error("PRIVATE native status");
        },
      }),
    }),
    async () => ({ plugin: service({ status: async () => ({}) }) }),
  ]) {
    const bridge = createNativeVoiceBridge({ loadPlugin });
    await assert.rejects(
      bridge.voiceStatus(),
      (error) =>
        error.code === "bridge_unavailable" &&
        !error.message.includes("PRIVATE"),
    );
  }
  const unavailable = createNativeVoiceBridge({
    loadPlugin: async () => ({
      plugin: service({ status: async () => ({ available: false }) }),
    }),
  });
  assert.deepEqual(await unavailable.voiceStatus(), { available: false });
});

test("wrapped proxy never exposes its then property to promise resolution", async () => {
  let thenReads = 0;
  const plugin = new Proxy(service(), {
    get(target, key, receiver) {
      if (key === "then") {
        thenReads++;
        throw Error("Plugin proxy must never be awaited");
      }
      return Reflect.get(target, key, receiver);
    },
  });
  const bridge = createNativeVoiceBridge({
    loadPlugin: async () => ({ plugin }),
  });
  assert.equal((await bridge.voiceStatus()).available, true);
  assert.equal(
    (await bridge.startVoice(options("wrapped"))).transcript,
    "٢ كيلو أرز",
  );
  assert.equal(thenReads, 0);
});

test("invalid plugin handles reject with bridge diagnostics and release capture ownership", async () => {
  for (const handle of [
    null,
    undefined,
    [],
    {},
    { plugin: null },
    { plugin: {} },
    { plugin: "invalid" },
  ]) {
    const bridge = createNativeVoiceBridge({ loadPlugin: async () => handle });
    await assert.rejects(
      bridge.startVoice(options("bad")),
      (error) => error.code === "bridge_unavailable",
    );
    await assert.rejects(
      bridge.startVoice(options("next")),
      (error) => error.code === "bridge_unavailable",
    );
    await assert.rejects(
      bridge.voiceStatus(),
      (error) => error.code === "bridge_unavailable",
    );
  }
});
