import test from "node:test";
import assert from "node:assert/strict";
import { createScanHandler } from "../server/scan-proxy.mjs";
import { PDFDocument, PDFName } from "pdf-lib";
import { request as httpRequest } from "node:http";
import { createDevServer } from "../server/dev-server.mjs";

const token = "x".repeat(32);
const png = Buffer.from([137,80,78,71,13,10,26,10,0]);
const raw = { version: 1, kind: "receipt", merchant: "Shop", currency: null, receiptDate: null, totalMinor: null, taxMinor: 0, discountMinor: 0, lines: [{ lineId: "1", name: "Milk", ingredientId: null, quantity: null, unit: null, lineTotalMinor: null, expiry: null, expiryProvenance: null, storage: null, warnings: [] }], warnings: [] };
const upstream = (value = raw) => async () => Response.json({ candidates: [{ content: { parts: [{ text: JSON.stringify(value) }] } }] });
const env = { NOMLI_DEVICE_TOKEN: token, LOCAL_DEV: "true", SCAN_PROVIDER: "gemini", GEMINI_API_KEY: "key", ALLOWED_ORIGINS: "https://localhost" };
const req = (body, extra = {}) => new Request("https://scan.test/api/v1/scan-drafts", { method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "application/json", ...extra }, body: JSON.stringify(body) });
const valid = { kind: "receipt", fileName: "receipt.png", mimeType: "image/png", data: png.toString("base64") };

test("rejects authentication before body validation or provider call", async () => {
  let calls = 0; const handler = createScanHandler({ fetchImpl: async () => { calls++; return Response.json({}); } });
  const request = new Request("https://scan.test/api/v1/scan-drafts", { method: "POST", body: "not-json" });
  const res = await handler(request, env);
  assert.equal(res.status, 401); assert.equal(calls, 0);
});

test("rejects MIME mismatch, unknown fields, and oversized decoded files", async () => {
  const handler = createScanHandler({ fetchImpl: upstream() });
  assert.equal((await handler(req({ ...valid, mimeType: "image/jpeg" }), env)).status, 415);
  assert.equal((await handler(req({ ...valid, surprise: true }), env)).status, 422);
  const huge = { ...valid, data: Buffer.alloc(4 * 1024 * 1024 + 1, 1).toString("base64") };
  assert.equal((await handler(req(huge), env)).status, 413);
  assert.equal((await handler(req({ ...valid, data: Buffer.from([137]).toString("base64") }), env)).status, 415);
});

test("requires JSON Content-Type", async () => {
  const request = new Request("https://scan.test/api/v1/scan-drafts", { method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "text/plain" }, body: JSON.stringify(valid) });
  assert.equal((await createScanHandler({ fetchImpl: upstream() })(request, env)).status, 415);
});

test("accepts PDFs through three pages; rejects four-page, encrypted, and corrupt PDFs", async () => {
  const makePdf = async (pages, encrypted = false) => { const pdf = await PDFDocument.create(); for (let i = 0; i < pages; i++) pdf.addPage(); if (encrypted) pdf.context.trailerInfo.Encrypt = pdf.context.register(pdf.context.obj({ Filter: PDFName.of("Standard") })); return Buffer.from(await pdf.save({ useObjectStreams: false })); };
  const pdfReq = (bytes) => req({ kind: "receipt", fileName: "receipt.pdf", mimeType: "application/pdf", data: bytes.toString("base64") });
  let providerBody; const taxed = { ...raw, currency: "GBP", totalMinor: 1189, taxMinor: 189, lines: [{ ...raw.lines[0], lineTotalMinor: 1000 }] };
  const capture = async (_url, init) => { providerBody = JSON.parse(init.body); return Response.json({ candidates: [{ content: { parts: [{ text: JSON.stringify(taxed) }] } }] }); };
  let res = await createScanHandler({ fetchImpl: capture })(pdfReq(await makePdf(3)), env); assert.equal(res.status, 200); const draft = (await res.json()).draft; assert.equal(draft.taxMinor, 189); assert.equal(draft.discountMinor, 0);
  assert.equal(providerBody.generationConfig.responseMimeType, undefined); assert.equal(providerBody.generationConfig.responseJsonSchema, undefined);
  assert.equal(providerBody.generationConfig.responseFormat.text.mimeType, "APPLICATION_JSON"); assert.ok(providerBody.generationConfig.responseFormat.text.schema.required.includes("taxMinor")); assert.match(providerBody.contents[0].parts[1].text, /VAT already included.*must not be added again/);
  assert.equal(providerBody.contents[0].parts[0].inline_data.mime_type, "application/pdf");
  const geminiLine = providerBody.generationConfig.responseFormat.text.schema.properties.lines.items.properties;
  assert.deepEqual(geminiLine.storage.anyOf, [{ type: "string" }, { type: "null" }]);
  res = await createScanHandler({ fetchImpl: upstream() })(pdfReq(await makePdf(4)), env); assert.equal(res.status, 422); assert.equal((await res.json()).error.code, "pdf_page_limit");
  res = await createScanHandler({ fetchImpl: upstream() })(pdfReq(await makePdf(1, true)), env); assert.equal(res.status, 422); assert.equal((await res.json()).error.code, "invalid_pdf");
  res = await createScanHandler({ fetchImpl: upstream() })(pdfReq(Buffer.from("%PDF-corrupt")), env); assert.equal(res.status, 422); assert.equal((await res.json()).error.code, "invalid_pdf");
});

test("CORS allows exact configured origin and rejects others", async () => {
  const handler = createScanHandler({ fetchImpl: upstream() });
  const ok = await handler(req(valid, { origin: "https://localhost" }), env);
  assert.equal(ok.headers.get("access-control-allow-origin"), "https://localhost");
  assert.equal((await handler(req(valid, { origin: "https://evil.test" }), env)).status, 403);
});

test("normalizes provider output and creates server fingerprint", async () => {
  const draft = (await (await createScanHandler({ fetchImpl: upstream() })(req(valid), env)).json()).draft;
  assert.match(draft.fingerprint, /^[a-f0-9]{64}$/); assert.equal(draft.kind, "receipt");
  assert.equal(draft.lines[0].storage, null); assert.ok(draft.lines[0].warnings.includes("Quantity requires review."));
  const other = (await (await createScanHandler({ fetchImpl: upstream() })(req({ ...valid, kind: "groceries" }), env)).json()).draft;
  assert.notEqual(other.fingerprint, draft.fingerprint);
});

test("provider cannot assign storage or an ungrounded ingredient identity", async () => {
  const invented = { ...raw, lines: [{ ...raw.lines[0], storage: "Fridge", ingredientId: "invented" }] };
  const res = await createScanHandler({ fetchImpl: upstream(invented) })(req(valid), env);
  assert.equal(res.status, 200);
  const { draft } = await res.json();
  assert.equal(draft.lines[0].storage, null); assert.equal(draft.lines[0].ingredientId, null);
});

test("sanitizes provider HTTP and schema errors", async () => {
  const badHttp = createScanHandler({ fetchImpl: async () => new Response("secret upstream detail", { status: 500 }) });
  const a = await badHttp(req(valid), env); assert.equal(a.status, 502); assert.doesNotMatch(await a.text(), /secret/);
  const badSchema = createScanHandler({ fetchImpl: upstream({ hacked: true }) });
  assert.equal((await badSchema(req(valid), env)).status, 502);
  const extra = createScanHandler({ fetchImpl: upstream({ ...raw, hacked: true }) });
  assert.equal((await extra(req(valid), env)).status, 502);
});

test("maps upstream abort to timeout without retry", async () => {
  let calls = 0;
  const handler = createScanHandler({ fetchImpl: async (_url, init) => { calls++; return await new Promise((_resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })))); } });
  const original = globalThis.setTimeout; globalThis.setTimeout = (fn) => original(fn, 1);
  try { const res = await handler(req(valid), env); assert.equal(res.status, 504); assert.equal(calls, 1); } finally { globalThis.setTimeout = original; }
});

test("deadline remains active while reading upstream body", async () => {
  let calls = 0;
  const handler = createScanHandler({ fetchImpl: async (_url, init) => { calls++; return new Response(new ReadableStream({ start(controller) { init.signal.addEventListener("abort", () => controller.error(Object.assign(new Error("aborted"), { name: "AbortError" }))); } })); } });
  const original = globalThis.setTimeout; globalThis.setTimeout = (fn) => original(fn, 1);
  try { const res = await handler(req(valid), env); assert.equal(res.status, 504); assert.equal(calls, 1); } finally { globalThis.setTimeout = original; }
});

test("uses one global authenticated-device rate-limit key", async () => {
  const keys = []; const production = { ...env, LOCAL_DEV: "false", SCAN_RATE_LIMITER: { limit: async ({ key }) => { keys.push(key); return { success: true }; } } };
  const handler = createScanHandler({ fetchImpl: upstream() });
  await handler(req(valid, { "cf-connecting-ip": "192.0.2.1" }), production);
  await handler(req(valid, { "cf-connecting-ip": "198.51.100.2" }), production);
  assert.deepEqual(keys, ["nomli-device", "nomli-device"]);
});

test("health is authenticated and rate limiter fails closed outside local dev", async () => {
  const handler = createScanHandler({ fetchImpl: upstream() });
  assert.equal((await handler(new Request("https://scan.test/api/v1/health"), env)).status, 401);
  const production = { ...env, LOCAL_DEV: "false" };
  assert.equal((await handler(req(valid), production)).status, 503);
  const invalid = await handler(new Request("https://scan.test/api/v1/health", { headers: { authorization: `Bearer ${token}` } }), { ...env, SCAN_PROVIDER: "other" });
  assert.equal((await invalid.json()).ready, false);
});

test("local dev server aborts Worker request after client disconnect", async () => {
  let started; const began = new Promise((resolve) => { started = resolve; });
  let observedAbort; const aborted = new Promise((resolve) => { observedAbort = resolve; });
  const server = createDevServer({ handler: async (request) => { started(); await new Promise((resolve) => request.signal.addEventListener("abort", () => { observedAbort(); resolve(); }, { once: true })); return Response.json({ late: true }); }, env: {} });
  await new Promise((resolve, reject) => { server.once("error", reject); server.listen(0, "127.0.0.1", resolve); });
  const port = server.address().port;
  const client = httpRequest({ host: "127.0.0.1", port, path: "/api/v1/scan-drafts", method: "POST", headers: { "content-type": "application/json" } });
  client.on("error", () => {}); client.end("{}"); await began; client.destroy();
  await Promise.race([aborted, new Promise((_, reject) => setTimeout(() => reject(new Error("disconnect was not propagated")), 1000))]);
  await new Promise((resolve) => server.close(resolve));
});


test("opt-in grocery regions use bounded nullable metadata without changing legacy shapes", async () => {
  const box = { x: .1, y: .2, width: .3, height: .4 };
  let providerBody;
  const fetchImpl = async (_url, init) => {
    providerBody = JSON.parse(init.body);
    return upstream({ ...raw, lines: [{ ...raw.lines[0], photoRegion: box }] })();
  };
  let response = await createScanHandler({ fetchImpl })(req({ ...valid, kind: "groceries", imageRegions: true }), env);
  assert.equal(response.status, 200);
  assert.deepEqual((await response.json()).draft.lines[0].photoRegion, box);
  assert.ok(providerBody.generationConfig.responseFormat.text.schema.properties.lines.items.properties.photoRegion);
  assert.match(providerBody.contents[0].parts[1].text, /tight bounding box.*actual visible product/);
  for (const region of [null, { ...box, width: 0 }, { ...box, x: .9 }, { ...box, x: "0.1" }, { ...box, extra: 1 }]) {
    response = await createScanHandler({ fetchImpl: upstream({ ...raw, lines: [{ ...raw.lines[0], photoRegion: region }] }) })(req({ ...valid, kind: "groceries", imageRegions: true }), env);
    assert.equal(response.status, 200);
    assert.equal((await response.json()).draft.lines[0].photoRegion, null);
  }
  response = await createScanHandler({ fetchImpl: upstream() })(req({ ...valid, kind: "groceries", imageRegions: true }), env);
  assert.equal(response.status, 200);
  assert.equal(Object.hasOwn((await response.json()).draft.lines[0], "photoRegion"), false);
  response = await createScanHandler({ fetchImpl: upstream() })(req({ ...valid, kind: "groceries" }), env);
  assert.equal(Object.hasOwn((await response.json()).draft.lines[0], "photoRegion"), false);
  for (const kind of ["receipt", "expiry"]) {
    response = await createScanHandler({ fetchImpl: upstream() })(req({ ...valid, kind, imageRegions: true }), env);
    assert.equal(response.status, 422);
    response = await createScanHandler({ fetchImpl: upstream() })(req({ ...valid, kind }), env);
    assert.equal(Object.hasOwn((await response.json()).draft.lines[0], "photoRegion"), false);
  }
});
