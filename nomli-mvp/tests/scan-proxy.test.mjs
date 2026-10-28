import { FOOD_CATEGORY_IDS, scanProviderSchema } from "../server/scan-schema.mjs";
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
const req = (body, extra = {}, signal) => new Request("https://scan.test/api/v1/scan-drafts", { method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "application/json", ...extra }, body: JSON.stringify(body), signal });
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
  const capture = async (_url, init) => { providerBody = JSON.parse(init.body); assert.equal(init.redirect, "manual"); return Response.json({ candidates: [{ content: { parts: [{ text: JSON.stringify(taxed) }] } }] }); };
  let res = await createScanHandler({ fetchImpl: capture })(pdfReq(await makePdf(3)), env); assert.equal(res.status, 200); const draft = (await res.json()).draft; assert.equal(draft.taxMinor, 189); assert.equal(draft.discountMinor, 0);
  assert.equal(providerBody.generationConfig.responseMimeType, undefined); assert.equal(providerBody.generationConfig.responseJsonSchema, undefined);
  assert.equal(providerBody.generationConfig.responseFormat.text.mimeType, "APPLICATION_JSON"); assert.ok(providerBody.generationConfig.responseFormat.text.schema.required.includes("taxMinor")); assert.match(providerBody.contents[0].parts[1].text, /VAT already included.*must not be added again/);
  assert.match(providerBody.contents[0].parts[1].text, /Arabic right-to-left.*English left-to-right/);
  assert.match(providerBody.contents[0].parts[1].text, /Arabic-Indic.*Persian.*canonical JSON numbers/);
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

test("retries transient provider busy response once on configured Gemini fallback", async () => {
  const urls = [];
  const handler = createScanHandler({ fetchImpl: async (url) => { urls.push(url); return urls.length === 1 ? new Response("busy private detail", { status: 503 }) : upstream()(); } });
  const response = await handler(req(valid), { ...env, GEMINI_MODEL: "gemini-primary", GEMINI_SCAN_FALLBACK_MODEL: "gemini-fallback" });
  assert.equal(response.status, 200); assert.equal(urls.length, 2);
  assert.match(urls[0], /models\/gemini-primary:generateContent$/); assert.match(urls[1], /models\/gemini-fallback:generateContent$/);
});

test("uses receipt-specific Gemini model without changing grocery or expiry models", async () => {
  const urls = [];
  const handler = createScanHandler({ fetchImpl: async (url) => { urls.push(url); return upstream()(); } });
  const models = { ...env, GEMINI_MODEL: "gemini-3.5-flash-lite", GEMINI_RECEIPT_MODEL: "gemini-3.1-flash-lite" };
  for (const kind of ["receipt", "groceries", "expiry"]) {
    const response = await handler(req({ ...valid, kind }), models); assert.equal(response.status, 200);
  }
  assert.match(urls[0], /models\/gemini-3\.1-flash-lite:generateContent$/);
  assert.match(urls[1], /models\/gemini-3\.5-flash-lite:generateContent$/);
  assert.match(urls[2], /models\/gemini-3\.5-flash-lite:generateContent$/);
});

test("ignores malformed receipt-specific Gemini model", async () => {
  let called;
  const handler = createScanHandler({ fetchImpl: async (url) => { called = url; return upstream()(); } });
  const response = await handler(req(valid), { ...env, GEMINI_MODEL: "gemini-3.5-flash-lite", GEMINI_RECEIPT_MODEL: "bad/model?key=leak" });
  assert.equal(response.status, 200); assert.match(called, /models\/gemini-3\.5-flash-lite:generateContent$/); assert.doesNotMatch(called, /bad|leak/);
});

test("uses configured Gemini fallback after first-attempt timeout", async () => {
  const urls = [];
  const handler = createScanHandler({ fetchImpl: async (url, init) => { urls.push(url); if (urls.length === 2) return upstream()(); return await new Promise((_resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })), { once: true })); } });
  const original = globalThis.setTimeout; globalThis.setTimeout = (fn) => original(fn, 1);
  try {
    const response = await handler(req(valid), { ...env, GEMINI_MODEL: "gemini-primary", GEMINI_SCAN_FALLBACK_MODEL: "gemini-fallback" });
    assert.equal(response.status, 200); assert.match(urls[1], /models\/gemini-fallback:generateContent$/);
  } finally { globalThis.setTimeout = original; }
});

test("does not retry provider quota or authentication rejection", async () => {
  let calls = 0;
  const handler = createScanHandler({ fetchImpl: async () => { calls++; return new Response("private quota detail", { status: 429 }); } });
  const response = await handler(req(valid), { ...env, GEMINI_SCAN_FALLBACK_MODEL: "gemini-fallback" });
  assert.equal(response.status, 502); assert.equal((await response.json()).error.code, "provider_error"); assert.equal(calls, 1);
});

test("stops after fallback also reports provider busy", async () => {
  let calls = 0;
  const handler = createScanHandler({ fetchImpl: async () => { calls++; return new Response("still busy", { status: 503 }); } });
  const response = await handler(req(valid), { ...env, GEMINI_MODEL: "gemini-primary", GEMINI_SCAN_FALLBACK_MODEL: "gemini-fallback" });
  assert.equal(response.status, 503); assert.equal((await response.json()).error.code, "provider_busy"); assert.equal(calls, 2);
});

test("ignores invalid or same Gemini fallback model without URL injection", async () => {
  for (const fallback of ["other/model?key=leak", "gemini-primary", "x".repeat(101)]) {
    const urls = [];
    const handler = createScanHandler({ fetchImpl: async (url) => { urls.push(url); return new Response("busy", { status: 503 }); } });
    const response = await handler(req(valid), { ...env, GEMINI_MODEL: "gemini-primary", GEMINI_SCAN_FALLBACK_MODEL: fallback });
    assert.equal(response.status, 503); assert.equal(urls.length, 1); assert.match(urls[0], /models\/gemini-primary:generateContent$/); assert.doesNotMatch(urls[0], /leak|other/);
  }
});

test("retries one timed-out provider attempt within the original deadline", async () => {
  let calls = 0;
  const handler = createScanHandler({ fetchImpl: async (_url, init) => { calls++; return await new Promise((_resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })))); } });
  const original = globalThis.setTimeout; globalThis.setTimeout = (fn) => original(fn, 1);
  try { const res = await handler(req(valid), env); assert.equal(res.status, 504); assert.equal(calls, 2); } finally { globalThis.setTimeout = original; }
});

test("returns a valid draft when the bounded retry recovers", async () => {
  let calls = 0;
  const handler = createScanHandler({ fetchImpl: async (_url, init) => {
    calls++;
    if (calls === 2) return upstream()();
    return await new Promise((_resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })), { once: true }));
  } });
  const original = globalThis.setTimeout; globalThis.setTimeout = (fn) => original(fn, 1);
  try { const res = await handler(req(valid), env); assert.equal(res.status, 200); assert.equal(calls, 2); } finally { globalThis.setTimeout = original; }
});

test("does not start a retry after the global deadline is exhausted", async () => {
  let calls = 0; let now = 1000;
  const handler = createScanHandler({ fetchImpl: async (_url, init) => { calls++; return await new Promise((_resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })), { once: true })); } });
  const originalTimeout = globalThis.setTimeout; const originalNow = Date.now;
  globalThis.setTimeout = (fn) => originalTimeout(() => { now += 60_001; fn(); }, 1); Date.now = () => now;
  try { const res = await handler(req(valid), env); assert.equal(res.status, 504); assert.equal(calls, 1); } finally { globalThis.setTimeout = originalTimeout; Date.now = originalNow; }
});

test("does not accept a valid provider response after request cancellation", async () => {
  let calls = 0; const controller = new AbortController();
  const handler = createScanHandler({ fetchImpl: async () => { calls++; controller.abort(); return upstream()(); } });
  const response = await handler(req(valid, {}, controller.signal), env);
  assert.equal(response.status, 499); assert.equal(calls, 1);
});

test("rejects provider redirects without retry or logging private response data", async () => {
  let calls = 0; const logs = []; const originalWarn = console.warn;
  console.warn = (value) => logs.push(String(value));
  try {
    const handler = createScanHandler({ fetchImpl: async (_url, init) => { calls++; assert.equal(init.redirect, "manual"); return new Response("private receipt body", { status: 302, headers: { location: "https://private.test/?token=private-token" } }); } });
    const response = await handler(req(valid), env);
    assert.equal(response.status, 502); assert.equal(calls, 1);
  } finally { console.warn = originalWarn; }
  const output = logs.join("\n");
  assert.doesNotMatch(output, /private receipt body|private-token|private\.test/);
});

test("provider metrics logs whitelist enums and nonnegative safe integers", async () => {
  const logs = []; const originalInfo = console.info;
  console.info = (value) => logs.push(String(value));
  try {
    const envelope = { candidates: [{ finishReason: "PRIVATE_RECEIPT_TEXT", content: { parts: [{ text: JSON.stringify(raw) }] } }], usageMetadata: { promptTokenCount: "secret", candidatesTokenCount: -1, thoughtsTokenCount: Number.MAX_SAFE_INTEGER + 1 } };
    const response = await createScanHandler({ fetchImpl: async () => Response.json(envelope) })(req(valid), env);
    assert.equal(response.status, 200);
  } finally { console.info = originalInfo; }
  const entry = JSON.parse(logs.at(-1));
  assert.equal(entry.finishReason, null); assert.equal(entry.promptTokens, null); assert.equal(entry.candidateTokens, null); assert.equal(entry.thoughtTokens, null);
  assert.doesNotMatch(logs.join("\n"), /PRIVATE_RECEIPT_TEXT|secret/);
});

test("deadline remains active while reading upstream body", async () => {
  let calls = 0;
  const handler = createScanHandler({ fetchImpl: async (_url, init) => { calls++; return new Response(new ReadableStream({ start(controller) { init.signal.addEventListener("abort", () => controller.error(Object.assign(new Error("aborted"), { name: "AbortError" }))); } })); } });
  const original = globalThis.setTimeout; globalThis.setTimeout = (fn) => original(fn, 1);
  try { const res = await handler(req(valid), env); assert.equal(res.status, 504); assert.equal(calls, 2); } finally { globalThis.setTimeout = original; }
});

test("request cancellation aborts immediately without provider retry", async () => {
  let calls = 0; let began;
  const started = new Promise((resolve) => { began = resolve; });
  const handler = createScanHandler({ fetchImpl: async (_url, init) => { calls++; began(); return await new Promise((_resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })), { once: true })); } });
  const controller = new AbortController();
  const pending = handler(req(valid, {}, controller.signal), env); await started; controller.abort();
  const response = await pending; assert.equal(response.status, 499); assert.equal(calls, 1);
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

test("opt-in food categories add only nullable whitelisted review metadata", async () => {
  let providerBody;
  const categorized = { ...raw, lines: [{ ...raw.lines[0], categoryId: "dairy" }] };
  const fetchImpl = async (_url, init) => { providerBody = JSON.parse(init.body); return upstream(categorized)(); };
  let response = await createScanHandler({ fetchImpl })(req({ ...valid, foodCategories: true }), env);
  assert.equal(response.status, 200);
  const { draft } = await response.json();
  assert.equal(draft.lines[0].categoryId, "dairy");
  assert.equal(draft.lines[0].ingredientId, null);
  assert.equal(draft.lines[0].storage, null);
  const category = providerBody.generationConfig.responseFormat.text.schema.properties.lines.items.properties.categoryId;
  assert.equal(category.anyOf[0].type, "string");
  assert.equal(Object.hasOwn(category.anyOf[0], "enum"), false);
  for (const id of FOOD_CATEGORY_IDS) assert.ok(providerBody.contents[0].parts[1].text.includes(id));
  assert.deepEqual(scanProviderSchema(false, false, true).properties.lines.items.properties.categoryId.anyOf[0].enum, FOOD_CATEGORY_IDS);
  assert.ok(providerBody.generationConfig.responseFormat.text.schema.properties.lines.items.required.includes("categoryId"));
  assert.match(providerBody.contents[0].parts[1].text, /editable broad food category/);
  assert.match(providerBody.contents[0].parts[1].text, /human confirmation/);
  assert.match(providerBody.contents[0].parts[1].text, /Never infer or populate ingredientId, allergy information, pack weight, quantity, unit, or storage from categoryId/);

  response = await createScanHandler({ fetchImpl: upstream({ ...raw, lines: [{ ...raw.lines[0], categoryId: "private_catalog_id" }] }) })(req({ ...valid, foodCategories: true }), env);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).draft.lines[0].categoryId, null);
});

test("food-category capability validates flags and composes with image regions", async () => {
  for (const foodCategories of [null, 1, "true", {}, []]) {
    const response = await createScanHandler({ fetchImpl: upstream() })(req({ ...valid, foodCategories }), env);
    assert.equal(response.status, 422);
  }
  let response = await createScanHandler({ fetchImpl: upstream() })(req({ ...valid, kind: "expiry", foodCategories: true }), env);
  assert.equal(response.status, 422);

  const box = { x: .1, y: .2, width: .3, height: .4 };
  let providerBody;
  const combined = { ...raw, kind: "groceries", lines: [{ ...raw.lines[0], photoRegion: box, categoryId: "fruit" }] };
  response = await createScanHandler({ fetchImpl: async (_url, init) => { providerBody = JSON.parse(init.body); return upstream(combined)(); } })(req({ ...valid, kind: "groceries", imageRegions: true, foodCategories: true }), env);
  assert.equal(response.status, 200);
  const { draft } = await response.json();
  assert.deepEqual(draft.lines[0].photoRegion, box);
  assert.equal(draft.lines[0].categoryId, "fruit");
  const properties = providerBody.generationConfig.responseFormat.text.schema.properties.lines.items.properties;
  assert.ok(properties.photoRegion);
  assert.ok(properties.categoryId);

  response = await createScanHandler({ fetchImpl: upstream() })(req({ ...valid, foodCategories: false }), env);
  assert.equal(response.status, 200);
  assert.equal(Object.hasOwn((await response.json()).draft.lines[0], "categoryId"), false);
});
