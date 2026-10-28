import { reviewScanDraft } from "./scan-domain.js";

const CONFIG_KEY = "scan-config-v1";
const WEB_CONFIG_KEY = "nomli-scan-config-v1";
export const SCAN_LIMITS = Object.freeze({ imageBytes: 4 * 1024 * 1024, pdfBytes: 2 * 1024 * 1024, responseBytes: 750 * 1024 });
const KINDS = new Set(["groceries", "receipt", "expiry"]);

export class ScanClientError extends Error {
  constructor(code, message) { super(message); this.name = "ScanClientError"; this.code = code; }
}
const fail = (code, message) => { throw new ScanClientError(code, message); };
const aborted = () => new DOMException("Scan cancelled.", "AbortError");

export function validateScanConfig(config, { allowEmpty = false } = {}) {
  const apiUrl = String(config?.apiUrl || "").trim();
  const deviceToken = String(config?.deviceToken || "").trim();
  if (allowEmpty && !apiUrl && !deviceToken) return { apiUrl: "", deviceToken: "" };
  let url;
  try { url = new URL(apiUrl); } catch { fail("invalid_config", "Enter the scanner's HTTPS base URL."); }
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if ((url.protocol !== "https:" && !(local && url.protocol === "http:")) || url.username || url.password || url.search || url.hash || !["", "/"].includes(url.pathname))
    fail("invalid_config", "Use an HTTPS base URL without a path, credentials or query. Local development may use HTTP localhost.");
  if (!/^[A-Za-z0-9._-]{32,256}$/.test(deviceToken) || /^(AIza|sk-)/.test(deviceToken))
    fail("invalid_config", "Enter the scanner's device access code, at least 32 characters. Provider API keys belong on the server.");
  return { apiUrl: url.origin, deviceToken };
}

function environment(options = {}) {
  const native = options.native ?? globalThis.window?.NomliNative;
  let storage = options.storage;
  if (!storage) { try { storage = globalThis.window?.localStorage; } catch { /* surfaced when saving */ } }
  return { native, storage };
}

export async function getScanConfig(options = {}) {
  const { native, storage } = environment(options);
  const raw = native?.isNative ? await native.loadDraft(CONFIG_KEY) : storage?.getItem(WEB_CONFIG_KEY);
  if (!raw) return { apiUrl: "", deviceToken: "" };
  try { return validateScanConfig(typeof raw === "string" ? JSON.parse(raw) : raw, { allowEmpty: true }); }
  catch { fail("invalid_config", "Saved scanner connection is invalid. Open Scan connection and save it again."); }
}

export async function saveScanConfig(value, options = {}) {
  const config = validateScanConfig(value, { allowEmpty: true });
  const { native, storage } = environment(options);
  if (native?.isNative) await native.saveDraft(CONFIG_KEY, config);
  else if (storage?.setItem) storage.setItem(WEB_CONFIG_KEY, JSON.stringify(config));
  else fail("storage_unavailable", "Scanner connection could not be saved on this device.");
  return config;
}

async function boundedBytes(response, limit) {
  const declared = Number(response.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > limit) fail("file_too_large", "File or scan response exceeds the size limit.");
  const reader = response.body?.getReader();
  if (!reader) fail("invalid_response", "No file or scan response was received.");
  const chunks = []; let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) { await reader.cancel(); fail("file_too_large", "File or scan response exceeds the size limit."); }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return bytes;
}

function fileType(bytes) {
  if (bytes.length >= 3 && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return "image/jpeg";
  if (bytes.length >= 8 && [137,80,78,71,13,10,26,10].every((x,i) => bytes[i] === x)) return "image/png";
  if (bytes.length >= 12 && new TextDecoder().decode(bytes.slice(0,4)) === "RIFF" && new TextDecoder().decode(bytes.slice(8,12)) === "WEBP") return "image/webp";
  if (bytes.length >= 5 && new TextDecoder().decode(bytes.slice(0,5)) === "%PDF-") return "application/pdf";
  fail("unsupported_file", "Choose a JPEG, PNG, WebP or PDF. Other image formats need conversion first.");
}

function base64(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 32768) binary += String.fromCharCode(...bytes.subarray(i, i + 32768));
  return btoa(binary);
}

export async function prepareScanFile({ file, nativePhoto, signal, fetchImpl = globalThis.fetch } = {}) {
  if (signal?.aborted) throw aborted();
  let bytes, declaredType = "", fileName = "scan.jpg";
  if (file) {
    if (!Number.isFinite(file.size) || file.size > SCAN_LIMITS.imageBytes) fail("file_too_large", "Images must be 4 MiB or less; PDFs 2 MiB or less.");
    if (typeof file.arrayBuffer !== "function") fail("invalid_file", "Select a readable file.");
    bytes = new Uint8Array(await file.arrayBuffer());
    declaredType = file.type || ""; fileName = file.name || fileName;
  } else if (typeof nativePhoto?.data === "string") {
    const data = nativePhoto.data;
    if (data.length > Math.ceil(SCAN_LIMITS.imageBytes / 3) * 4 || data.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(data)) fail("invalid_file", "Captured file data is invalid or too large.");
    try { bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0)); } catch { fail("invalid_file", "Captured file data is invalid."); }
    declaredType = nativePhoto.mimeType || ""; fileName = nativePhoto.fileName || fileName;
  } else if (typeof nativePhoto?.webPath === "string") {
    let source;
    try { source = new URL(nativePhoto.webPath); } catch { fail("invalid_file", "Captured photo is unavailable. Try taking it again."); }
    if (!["https:", "http:"].includes(source.protocol) || source.hostname !== "localhost" || !source.pathname.startsWith("/_capacitor_file_/")) fail("invalid_file", "Captured photo must come from this device's camera.");
    const response = await fetchImpl(source.href, { signal, credentials: "omit", redirect: "error" });
    if (!response.ok) fail("invalid_file", "Captured photo could not be opened. Try again.");
    bytes = await boundedBytes(response, SCAN_LIMITS.imageBytes);
    declaredType = response.headers.get("content-type")?.split(";")[0] || "";
  } else fail("invalid_file", "Choose a photo or receipt first.");
  if (signal?.aborted) throw aborted();
  const mimeType = fileType(bytes);
  if (declaredType && declaredType !== "application/octet-stream" && declaredType !== mimeType) fail("mime_mismatch", "File contents do not match its image/document type.");
  if (bytes.length > (mimeType === "application/pdf" ? SCAN_LIMITS.pdfBytes : SCAN_LIMITS.imageBytes)) fail("file_too_large", "Images must be 4 MiB or less; PDFs 2 MiB or less (up to 3 pages).");
  fileName = String(fileName).replace(/[\\/\x00-\x1f]/g, "-").slice(0, 200);
  return { data: base64(bytes), mimeType, fileName, bytes };
}

async function fingerprint(kind, bytes) {
  const prefix = new TextEncoder().encode(`${kind}:`);
  const all = new Uint8Array(prefix.length + bytes.length); all.set(prefix); all.set(bytes, prefix.length);
  return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", all)), (x) => x.toString(16).padStart(2, "0")).join("");
}

async function request(config, path, { signal, fetchImpl = globalThis.fetch, timeoutMs = 70000, payload } = {}) {
  const connection = validateScanConfig(config);
  const controller = new AbortController();
  const onAbort = () => controller.abort();
  if (signal?.aborted) throw aborted();
  signal?.addEventListener("abort", onAbort, { once: true });
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(connection.apiUrl + path, {
      method: payload ? "POST" : "GET", credentials: "omit", cache: "no-store", redirect: "error",
      headers: { authorization: `Bearer ${connection.deviceToken}`, ...(payload ? { "content-type": "application/json" } : {}) },
      ...(payload ? { body: JSON.stringify(payload) } : {}), signal: controller.signal,
    });
    let body;
    try { body = JSON.parse(new TextDecoder().decode(await boundedBytes(response, SCAN_LIMITS.responseBytes))); }
    catch (error) { if (error?.name === "AbortError") throw error; fail("invalid_response", "Scanner returned an unreadable response."); }
    if (controller.signal.aborted) throw aborted();
    if (!response.ok) {
      const code = body?.error?.code || `http_${response.status}`;
      const messages = { unauthorized: "Scanner access code was rejected. Check Scan connection.", not_configured: "Scanner's provider key is not configured yet.", rate_limit_exceeded: "Scan limit reached. Wait a minute and try again.", provider_timeout: "Recognition service timed out. Retry this scan; nothing was saved.", provider_error: "Recognition provider could not process this file. Check its key, quota and model.", origin_not_allowed: "This app's origin is not allowed by the scanner connection." };
      const error = new ScanClientError(code, messages[code] || String(body?.error?.message || "Scan request failed.").slice(0, 300));
      error.httpStatus = response.status;
      throw error;
    }
    return body;
  } catch (error) {
    if (error?.name === "AbortError") {
      if (signal?.aborted) throw aborted();
      fail("timeout", "Scanner timed out. Check connection and try again.");
    }
    if (error instanceof ScanClientError) throw error;
    fail("network_error", "Scanner connection failed. Check internet and the saved URL.");
  } finally { clearTimeout(timer); signal?.removeEventListener("abort", onAbort); }
}

export async function testScanConnection(config, options = {}) {
  const result = await request(config, "/api/v1/health", options);
  if (typeof result.ready !== "boolean") fail("invalid_response", "Scanner health response is invalid.");
  return { ready: result.ready, provider: typeof result.provider === "string" ? result.provider : "", model: typeof result.model === "string" ? result.model : "" };
}

export async function scanFile({ file, nativePhoto, kind, config, signal, fetchImpl = globalThis.fetch, timeoutMs } = {}) {
  validateScanConfig(config);
  if (!KINDS.has(kind)) fail("invalid_kind", "Choose groceries, a receipt or an expiry label.");
  const prepared = await prepareScanFile({ file, nativePhoto, signal, fetchImpl });
  const { bytes, ...payload } = prepared;
  const regionRequest = kind === "groceries" && payload.mimeType.startsWith("image/");
  const categoryRequest = kind !== "expiry";
  let result;
  try {
    result = await request(config, "/api/v1/scan-drafts", { signal, fetchImpl, timeoutMs, payload: { kind, ...payload, ...(regionRequest ? { imageRegions: true } : {}), ...(categoryRequest ? { foodCategories: true } : {}) } });
  } catch (error) {
    // Older paired Workers reject unknown request fields before provider work.
    if ((!regionRequest && !categoryRequest) || error.httpStatus !== 422 || error.code !== "invalid_request") throw error;
    result = await request(config, "/api/v1/scan-drafts", { signal, fetchImpl, timeoutMs, payload: { kind, ...payload } });
  }
  const expectedFingerprint = await fingerprint(kind, bytes);
  if (signal?.aborted) throw aborted();
  if (result?.draft?.kind !== kind || result?.draft?.fingerprint !== expectedFingerprint) fail("invalid_response", "Scanner result does not match the selected file. Nothing was saved.");
  return reviewScanDraft(result.draft);
}
