import test from "node:test";
import assert from "node:assert/strict";
import { webcrypto } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createRecoveryStore } from "../web/recovery-store.js";

if (!globalThis.crypto) globalThis.crypto = webcrypto;

const memory = (entries = {}) => {
  const values = new Map(Object.entries(entries));
  return {
    values,
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
};
const snapshot = (overrides = {}) => ({
  version: 1,
  updatedAt: "2000-01-01T00:00:00.000Z",
  chat: null,
  review: null,
  scan: null,
  ...overrides,
});
const clock = () => new Date("2026-10-30T01:02:03.004Z");

test("browser snapshot saves, restarts, and clears with tombstone", async () => {
  const storage = memory();
  const store = createRecoveryStore({ storage, now: clock });
  await store.save(
    snapshot({ chat: { messages: [{ role: "user", text: "Rice?" }] } }),
  );
  const restarted = createRecoveryStore({ storage });
  assert.deepEqual((await restarted.load()).snapshot, {
    ...snapshot(),
    updatedAt: "2026-10-30T01:02:03.004Z",
    chat: { messages: [{ role: "user", text: "Rice?" }] },
  });
  await store.clear();
  assert.equal(storage.values.get("nomli-recovery-v1"), "null");
  assert.deepEqual(await restarted.load(), { snapshot: null, notice: null });
});

test("native source saves and survives wrapper restart", async () => {
  let text = null;
  const plugin = {
    saveSnapshot: async (value) => {
      text = value.text;
    },
    loadSnapshot: async () => ({ text }),
  };
  const options = { native: { isNative: true }, plugin, now: clock };
  await createRecoveryStore(options).save(snapshot({ review: { step: 2 } }));
  assert.equal(
    (await createRecoveryStore(options).load()).snapshot.review.step,
    2,
  );
});

test("snapshot writes serialize immutable values and clear cannot overtake", async () => {
  const events = [];
  let release;
  const gate = new Promise((resolve) => {
    release = resolve;
  });
  let first = true;
  const plugin = {
    loadSnapshot: async () => ({ text: null }),
    saveSnapshot: async ({ text }) => {
      if (first) {
        first = false;
        await gate;
      }
      events.push(text);
    },
  };
  const store = createRecoveryStore({
    native: { isNative: true },
    plugin,
    now: clock,
  });
  const value = snapshot({ chat: { turn: 1 } });
  const one = store.save(value);
  value.chat.turn = 99;
  const two = store.save(snapshot({ chat: { turn: 2 } }));
  const clear = store.clear();
  release();
  await Promise.all([one, two, clear]);
  assert.equal(JSON.parse(events[0]).chat.turn, 1);
  assert.equal(JSON.parse(events[1]).chat.turn, 2);
  assert.equal(events[2], "null");
});

test("corrupt records stay untouched and return notice", async () => {
  const storage = memory({ "nomli-recovery-v1": "{broken" });
  const loaded = await createRecoveryStore({ storage }).load();
  assert.equal(loaded.snapshot, null);
  assert.match(loaded.notice, /left unchanged/);
  assert.equal(storage.values.get("nomli-recovery-v1"), "{broken");
});

test("unsafe, secret, raw-media, nonfinite, and oversized snapshots reject", async () => {
  const store = createRecoveryStore({ storage: memory(), now: clock });
  const cases = [
    snapshot({ chat: { apiKey: "secret" } }),
    snapshot({ scan: { image: "data:image/jpeg;base64,/9j/" } }),
    snapshot({ review: { score: Infinity } }),
    snapshot({ chat: { text: "x".repeat(262145) } }),
  ];
  for (const value of cases) await assert.rejects(store.save(value));
  const polluted = JSON.parse(
    '{"version":1,"updatedAt":"2026-10-30T00:00:00.000Z","chat":{"__proto__":{}},"review":null,"scan":null}',
  );
  await assert.rejects(store.save(polluted), /forbidden/);
  assert.equal(await store.load().then((result) => result.snapshot), null);
});

test("native write timeout quarantines late writes until reopen", async () => {
  let release;
  let calls = 0;
  const plugin = {
    loadSnapshot: async () => ({ text: null }),
    saveSnapshot: async () => {
      calls++;
      await new Promise((resolve) => {
        release = resolve;
      });
    },
  };
  const store = createRecoveryStore({
    native: { isNative: true },
    plugin,
    writeTimeoutMs: 10,
  });
  await assert.rejects(store.save(snapshot()), /timed out.*Reopen Nomli/);
  await assert.rejects(store.clear(), /outcome is unknown/);
  assert.equal(calls, 1);
  release();
  await new Promise((resolve) => setImmediate(resolve));
  await assert.rejects(store.save(snapshot()), /outcome is unknown/);
  assert.equal(calls, 1);
});

test("native load timeout is bounded without poisoning a later write", async () => {
  let writes = 0;
  const plugin = {
    loadSnapshot: async () => new Promise(() => {}),
    saveSnapshot: async () => {
      writes++;
    },
  };
  const store = createRecoveryStore({
    native: { isNative: true },
    plugin,
    writeTimeoutMs: 10,
  });
  assert.match((await store.load()).notice, /read timed out/);
  await store.clear();
  assert.equal(writes, 1);
});

test("native mode never falls back to browser storage without plugin", async () => {
  const storage = memory();
  const store = createRecoveryStore({ native: { isNative: true }, storage });
  assert.match((await store.load()).notice, /plugin is unavailable/);
  await assert.rejects(store.save(snapshot()), /plugin is unavailable/);
  assert.equal(storage.values.size, 0);
});

test("native assets remain separate, validate magic and limits, and roundtrip", async () => {
  const assets = new Map();
  const plugin = {
    loadSnapshot: async () => ({ text: null }),
    saveSnapshot: async () => {},
    saveAsset: async ({ id, data, mimeType }) =>
      assets.set(id, { data, mimeType }),
    loadAsset: async ({ id }) => assets.get(id) || {},
    removeAsset: async ({ id }) => {
      assets.delete(id);
    },
    pruneAssets: async ({ keepIds }) => {
      for (const id of assets.keys())
        if (!keepIds.includes(id)) assets.delete(id);
    },
  };
  const store = createRecoveryStore({ native: { isNative: true }, plugin });
  const jpeg = new Blob([Uint8Array.of(0xff, 0xd8, 0xff, 0xd9)], {
    type: "image/jpeg",
  });
  const id = await store.saveAsset(jpeg);
  assert.match(id, /^r_[a-f0-9]{32}$/);
  assert.equal((await store.loadAsset(id)).type, "image/jpeg");
  assert.equal(
    JSON.stringify(await store.load()).includes(assets.get(id).data),
    false,
  );
  await assert.rejects(
    store.saveAsset(new Blob(["not png"], { type: "image/png" })),
    /content/,
  );
  await assert.rejects(
    store.saveAsset(
      new Blob([new Uint8Array(2 * 1024 * 1024 + 1).fill(1)], {
        type: "application/pdf",
      }),
    ),
  );
  const second = await store.saveAsset(jpeg);
  await store.pruneAssets([id]);
  assert.equal(assets.has(id), true);
  assert.equal(assets.has(second), false);
  await store.removeAsset(id);
  assert.equal(await store.loadAsset(id), null);
});

test("browser asset reads revalidate stored Blob content", async () => {
  const badBlob = new Blob(["not a png"], { type: "image/png" });
  const indexedDB = {
    open: () => {
      const request = {};
      queueMicrotask(() => {
        request.result = {
          createObjectStore: () => {},
          close: () => {},
          transaction: () => {
            const transaction = {};
            transaction.objectStore = () => ({
              get: () => {
                const get = { onsuccess: null };
                queueMicrotask(() => {
                  get.result = badBlob;
                  get.onsuccess();
                  queueMicrotask(() => transaction.oncomplete());
                });
                return get;
              },
            });
            return transaction;
          },
        };
        request.onupgradeneeded();
        request.onsuccess();
      });
      return request;
    },
  };
  const store = createRecoveryStore({ indexedDB, storage: memory() });
  await assert.rejects(
    store.loadAsset(`r_${"ab".repeat(16)}`),
    /content does not match/,
  );
});

test("Android recovery reads through AtomicFile and deletes owned sidecars", async () => {
  const source = await readFile(
    new URL(
      "../android/app/src/main/java/com/nomli/mvp/NomliRecoveryPlugin.java",
      import.meta.url,
    ),
    "utf8",
  );
  assert.match(source, /atomic\.openRead\(\)/);
  assert.match(source, /new AtomicFile\(file\)\.delete\(\)/);
  assert.equal(source.includes('file.getPath() + ".bak"'), true);
  assert.equal(source.includes('file.getPath() + ".new"'), true);
});
