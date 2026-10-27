import test from "node:test";
import assert from "node:assert/strict";
// Real Capacitor proxy + production native.js. Only the Android transport is simulated.
const calls = [];
const preferences = new Map();
const headers = [
  {
    name: "NomliScan",
    methods: [
      "saveItemPhoto",
      "getItemPhoto",
      "removeItemPhoto",
      "clearItemPhotos",
      "pickScanFile",
    ].map((name) => ({ name, rtype: "promise" })),
  },
  { name: "NomliVoice", methods: [{ name: "status", rtype: "promise" }] },
  {
    name: "NomliBackup",
    methods: ["exportBackup", "importBackup"].map((name) => ({
      name,
      rtype: "promise",
    })),
  },
  {
    name: "Preferences",
    methods: ["get", "set"].map((name) => ({ name, rtype: "promise" })),
  },
];
globalThis.window = globalThis;
globalThis.androidBridge = {};
globalThis.document = { body: { classList: { add() {} } } };
globalThis.Capacitor = {
  isNativePlatform: () => true,
  PluginHeaders: headers,
  nativePromise: async (plugin, method, options) => {
    calls.push({ plugin, method });
    if (plugin === "Preferences") {
      if (method === "set") {
        preferences.set(options.key, options.value);
        return {};
      }
      return { value: preferences.get(options.key) ?? null };
    }
    if (method === "status") return { available: true };
    if (method === "getItemPhoto")
      return { data: "/9j/", mimeType: "image/jpeg" };
    if (method === "pickScanFile") return { cancelled: true };
    if (method === "importBackup") return { cancelled: true };
    return {};
  },
};
await import("../web/native.js");
const completes = async (promise) => {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(
          () => reject(Error("Native plugin bootstrap did not settle")),
          250,
        );
      }),
    ]);
  } finally {
    clearTimeout(timer);
  }
};
test("production native Preferences still roundtrip through real Capacitor proxy", async () => {
  await completes(
    window.NomliNative.saveDraft("bootstrap-test", { items: {} }),
  );
  assert.deepEqual(
    await completes(window.NomliNative.loadDraft("bootstrap-test")),
    { items: {} },
  );
});
test("production photo, voice and backup loaders never await a Capacitor proxy as a thenable", async () => {
  const id = "p_" + "a".repeat(32);
  await completes(
    window.NomliNative.saveItemPhoto({ photoId: id, data: "/9j/" }),
  );
  assert.equal(
    (await completes(window.NomliNative.getItemPhoto({ photoId: id })))
      .mimeType,
    "image/jpeg",
  );
  await completes(window.NomliNative.removeItemPhoto({ photoId: id }));
  await completes(window.NomliNative.clearItemPhotos());
  assert.equal(
    (await completes(window.NomliNative.pickScanFile())).cancelled,
    true,
  );
  assert.equal(
    (await completes(window.NomliNative.voiceStatus())).available,
    true,
  );
  await completes(window.NomliNative.exportBackup("{}", "test.json"));
  assert.equal(
    (await completes(window.NomliNative.importBackup())).cancelled,
    true,
  );
  assert.deepEqual(
    calls.filter((x) => x.plugin === "NomliScan").map((x) => x.method),
    [
      "saveItemPhoto",
      "getItemPhoto",
      "removeItemPhoto",
      "clearItemPhotos",
      "pickScanFile",
    ],
  );
  assert.ok(
    calls.some((x) => x.plugin === "NomliVoice" && x.method === "status"),
  );
  assert.ok(
    calls.some(
      (x) => x.plugin === "NomliBackup" && x.method === "exportBackup",
    ),
  );
});
