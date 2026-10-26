import test from "node:test";
import assert from "node:assert/strict";
import { getScanConfig, saveScanConfig, validateScanConfig, prepareScanFile, scanFile, testScanConnection } from "../web/scan-client.js";

const config = { apiUrl: "https://scanner.example.test", deviceToken: "n".repeat(48) };
const jpeg = new Uint8Array([255,216,255,224,0,0,1,2]);
const file = () => new File([jpeg], "groceries.jpg", { type: "image/jpeg" });
const raw = { version: 1, kind: "groceries", merchant: null, currency: null, receiptDate: null, totalMinor: null, lines: [{ lineId: "line-1", name: "Tomatoes", ingredientId: null, quantity: null, unit: null, lineTotalMinor: null, expiry: null, expiryProvenance: null, storage: null, warnings: ["Quantity unclear."] }], warnings: [] };
async function hash() {
  const bytes = new Uint8Array([...new TextEncoder().encode("groceries:"), ...jpeg]);
  return Buffer.from(await crypto.subtle.digest("SHA-256", bytes)).toString("hex");
}

test("connection requires secure base URL and a device code, never a provider key", () => {
  assert.deepEqual(validateScanConfig(config), config);
  assert.throws(() => validateScanConfig({ ...config, apiUrl: "http://remote.example" }));
  assert.throws(() => validateScanConfig({ ...config, apiUrl: "https://user:pass@scanner.example" }));
  assert.throws(() => validateScanConfig({ ...config, apiUrl: config.apiUrl + "/?key=x" }));
  assert.throws(() => validateScanConfig({ ...config, deviceToken: "AIza" + "a".repeat(40) }));
  assert.equal(validateScanConfig({ ...config, apiUrl: "http://127.0.0.1:8787/" }).apiUrl, "http://127.0.0.1:8787");
});

test("config stays in a separate native preference and failed saves reject", async () => {
  const entries = new Map();
  const native = { isNative: true, saveDraft: async (key, value) => entries.set(key, value), loadDraft: async (key) => entries.get(key) };
  await saveScanConfig(config, { native });
  assert.deepEqual([...entries.keys()], ["scan-config-v1"]);
  assert.deepEqual(await getScanConfig({ native }), config);
  await assert.rejects(saveScanConfig(config, { storage: { setItem() { throw Error("disk full"); } } }), /disk full/);
});

test("file preparation validates actual signatures, sizes, and native sources", async () => {
  assert.equal((await prepareScanFile({ file: file() })).mimeType, "image/jpeg");
  assert.equal((await prepareScanFile({ nativePhoto: { data: Buffer.from(jpeg).toString("base64"), mimeType: "image/jpeg", fileName: "phone.jpg" } })).bytes.length, jpeg.length);
  await assert.rejects(prepareScanFile({ file: new File([jpeg], "bad.png", { type: "image/png" }) }), /do not match/);
  await assert.rejects(prepareScanFile({ file: new File(["<svg/>"], "bad.jpg", { type: "image/jpeg" }) }), /Choose a JPEG/);
  await assert.rejects(prepareScanFile({ file: { size: 5 * 1024 * 1024 } }), /4 MiB/);
  await assert.rejects(prepareScanFile({ nativePhoto: { webPath: "https://attacker.example/photo" } }), /this device/);
});

test("real request carries selected bytes; response must match exact content fingerprint", async () => {
  let calls = 0;
  const fetchImpl = async (url, options) => {
    calls++;
    assert.equal(url, config.apiUrl + "/api/v1/scan-drafts");
    assert.equal(options.headers.authorization, "Bearer " + config.deviceToken);
    const payload = JSON.parse(options.body);
    assert.deepEqual(Buffer.from(payload.data, "base64"), Buffer.from(jpeg));
    assert.equal(payload.kind, "groceries");
    return Response.json({ draft: { ...raw, fingerprint: await hash() } });
  };
  const draft = await scanFile({ file: file(), kind: "groceries", config, fetchImpl });
  assert.equal(calls, 1);
  assert.equal(draft.lines[0].quantity, null);
  assert.ok(draft.lines[0].warnings.includes("Quantity unclear."));
  await assert.rejects(scanFile({ file: file(), kind: "groceries", config, fetchImpl: async () => Response.json({ draft: { ...raw, fingerprint: "0".repeat(64) } }) }), /does not match/);
});

test("health distinguishes ready state and scan failures do not retry", async () => {
  assert.equal((await testScanConnection(config, { fetchImpl: async () => Response.json({ ready: false, provider: "gemini", model: "test" }) })).ready, false);
  let calls = 0;
  await assert.rejects(scanFile({ file: file(), kind: "groceries", config, fetchImpl: async () => { calls++; return Response.json({ error: { code: "unauthorized" } }, { status: 401 }); } }), /access code was rejected/);
  assert.equal(calls, 1);
});

test("cancellation stops before sending file", async () => {
  const controller = new AbortController(); controller.abort(); let calls = 0;
  await assert.rejects(scanFile({ file: file(), kind: "groceries", config, signal: controller.signal, fetchImpl: async () => { calls++; } }), { name: "AbortError" });
  assert.equal(calls, 0);
});

test("cancelled scan never returns a late completed response", async () => {
  const controller = new AbortController();
  await assert.rejects(scanFile({ file: file(), kind: "groceries", config, signal: controller.signal, fetchImpl: async () => {
    const response = Response.json({ draft: { ...raw, fingerprint: await hash() } });
    controller.abort();
    return response;
  } }), { name: "AbortError" });
});
