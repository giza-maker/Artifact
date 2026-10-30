"use strict";

const STORAGE_KEY = "nomli-recovery-v1";
const DB_NAME = "nomli-recovery-assets-v1";
const DB_STORE = "assets";
const MAX_SNAPSHOT_BYTES = 1024 * 1024;
const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
const MAX_PDF_BYTES = 2 * 1024 * 1024;
const ID_RE = /^r_[a-f0-9]{32}$/;
const ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const FORBIDDEN_KEYS = new Set(["__proto__", "prototype", "constructor"]);
const SECRET_KEY =
  /^(?:api[-_]?key|authorization|cookie|credential|device[-_]?token|access[-_]?token|refresh[-_]?token|password|passphrase|secret|scan[-_]?config)$/i;
const encoder = new TextEncoder();

function fail(message) {
  throw new TypeError(message);
}

function plain(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value))
    fail(`${label} must be a plain object.`);
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null)
    fail(`${label} must be a plain object.`);
  return value;
}

function inspect(value, depth = 0, key = "") {
  if (depth > 16) fail("Recovery snapshot is too deeply nested.");
  if (value === null || typeof value === "boolean") return;
  if (typeof value === "number") {
    if (!Number.isFinite(value))
      fail("Recovery snapshot contains a non-finite number.");
    return;
  }
  if (typeof value === "string") {
    if (value.length > 262144)
      fail("Recovery snapshot contains an oversized string.");
    if (
      /^data:(?:image\/(?:jpeg|png|webp)|application\/pdf);base64,/i.test(value)
    )
      fail("Recovery snapshot must not embed raw media bytes.");
    if (
      /^(?:data|bytes|base64)$/i.test(key) &&
      value.length > 1024 &&
      /^[A-Za-z0-9+/]+={0,2}$/.test(value)
    )
      fail("Recovery snapshot must not embed raw media bytes.");
    return;
  }
  if (typeof value !== "object")
    fail("Recovery snapshot contains an unsupported value.");
  if (Array.isArray(value)) {
    if (value.length > 2000)
      fail("Recovery snapshot contains an oversized list.");
    value.forEach((entry) => inspect(entry, depth + 1));
    return;
  }
  plain(value, "Recovery value");
  const keys = Object.keys(value);
  if (keys.length > 8000)
    fail("Recovery snapshot contains too many properties.");
  for (const childKey of keys) {
    if (FORBIDDEN_KEYS.has(childKey))
      fail("Recovery snapshot contains a forbidden property name.");
    if (SECRET_KEY.test(childKey))
      fail(
        "Recovery snapshot must not contain credentials or secret configuration.",
      );
    inspect(value[childKey], depth + 1, childKey);
  }
}

function cloneAndValidate(value, now) {
  plain(value, "Recovery snapshot");
  const allowed = new Set(["version", "updatedAt", "chat", "review", "scan"]);
  if (Object.keys(value).some((key) => !allowed.has(key)))
    fail("Recovery snapshot contains an unknown root property.");
  if (value.version !== 1) fail("Unsupported recovery snapshot version.");
  for (const field of ["chat", "review", "scan"])
    if (value[field] !== null) plain(value[field], `Recovery ${field}`);
  inspect(value);
  const date = now instanceof Date ? now : new Date(now);
  if (Number.isNaN(date.valueOf())) fail("Recovery timestamp is invalid.");
  const snapshot = JSON.parse(
    JSON.stringify({
      version: 1,
      updatedAt: date.toISOString(),
      chat: value.chat,
      review: value.review,
      scan: value.scan,
    }),
  );
  const text = JSON.stringify(snapshot);
  if (encoder.encode(text).length > MAX_SNAPSHOT_BYTES)
    fail("Recovery snapshot exceeds 1 MiB limit.");
  return { snapshot, text };
}

function parseSnapshot(raw) {
  if (raw == null || raw === "" || raw === "null") return null;
  const text = typeof raw === "string" ? raw : JSON.stringify(raw);
  if (encoder.encode(text).length > MAX_SNAPSHOT_BYTES)
    fail("Recovery snapshot exceeds 1 MiB limit.");
  const value = typeof raw === "string" ? JSON.parse(raw) : raw;
  plain(value, "Recovery snapshot");
  if (
    value.version !== 1 ||
    !ISO_RE.test(value.updatedAt) ||
    !Number.isFinite(Date.parse(value.updatedAt))
  )
    fail("Recovery snapshot envelope is invalid.");
  const allowed = new Set(["version", "updatedAt", "chat", "review", "scan"]);
  if (Object.keys(value).some((key) => !allowed.has(key)))
    fail("Recovery snapshot contains an unknown root property.");
  for (const field of ["chat", "review", "scan"])
    if (value[field] !== null) plain(value[field], `Recovery ${field}`);
  inspect(value);
  return JSON.parse(JSON.stringify(value));
}

function deadline(promise, milliseconds, message, onTimeout) {
  let timer;
  return Promise.race([
    Promise.resolve().then(() => promise()),
    new Promise((_, reject) => {
      timer = setTimeout(() => {
        onTimeout?.();
        reject(new Error(message));
      }, milliseconds);
    }),
  ]).finally(() => clearTimeout(timer));
}

function bytesToBase64(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 32768)
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 32768));
  return btoa(binary);
}

function base64ToBytes(value) {
  if (
    typeof value !== "string" ||
    value.length > Math.ceil(MAX_IMAGE_BYTES / 3) * 4 + 4 ||
    value.length % 4 !== 0 ||
    !/^[A-Za-z0-9+/]*={0,2}$/.test(value)
  )
    fail("Native recovery asset is invalid.");
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index++)
    bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function assetType(bytes, declared) {
  const starts = (...signature) =>
    signature.every((byte, index) => bytes[index] === byte);
  let actual = null;
  if (bytes.length >= 3 && starts(0xff, 0xd8, 0xff)) actual = "image/jpeg";
  else if (
    bytes.length >= 8 &&
    starts(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a)
  )
    actual = "image/png";
  else if (
    bytes.length >= 12 &&
    String.fromCharCode(...bytes.subarray(0, 4)) === "RIFF" &&
    String.fromCharCode(...bytes.subarray(8, 12)) === "WEBP"
  )
    actual = "image/webp";
  else if (
    bytes.length >= 5 &&
    String.fromCharCode(...bytes.subarray(0, 5)) === "%PDF-"
  )
    actual = "application/pdf";
  if (!actual || actual !== declared)
    fail("Recovery asset content does not match its MIME type.");
  const limit = actual === "application/pdf" ? MAX_PDF_BYTES : MAX_IMAGE_BYTES;
  if (!bytes.length || bytes.length > limit)
    fail(
      `Recovery asset exceeds ${actual === "application/pdf" ? "2" : "4"} MiB limit.`,
    );
  return actual;
}

function makeId() {
  const bytes = new Uint8Array(16);
  globalThis.crypto.getRandomValues(bytes);
  return `r_${Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

function openAssets(indexedDB) {
  if (!indexedDB?.open)
    return Promise.reject(new Error("Recovery asset storage is unavailable."));
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(DB_STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(
        request.error || new Error("Could not open recovery asset storage."),
      );
    request.onblocked = () =>
      reject(new Error("Recovery asset storage is blocked."));
  });
}

async function idbRequest(indexedDB, mode, action) {
  const db = await openAssets(indexedDB);
  try {
    return await new Promise((resolve, reject) => {
      const transaction = db.transaction(DB_STORE, mode);
      let result;
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () =>
        reject(
          transaction.error || new Error("Recovery asset transaction failed."),
        );
      transaction.onabort = () =>
        reject(
          transaction.error || new Error("Recovery asset transaction aborted."),
        );
      result = action(transaction.objectStore(DB_STORE));
      if (result && typeof result === "object" && "onsuccess" in result) {
        result.onsuccess = () => {
          result = result.result;
        };
      }
    });
  } finally {
    db.close();
  }
}

export function createRecoveryStore({
  native = globalThis.window?.NomliNative,
  plugin = null,
  storage = globalThis.localStorage,
  indexedDB = globalThis.indexedDB,
  now = () => new Date(),
  writeTimeoutMs = 8000,
} = {}) {
  const nativeMode = Boolean(native?.isNative);
  const timeout = Number.isFinite(writeTimeoutMs)
    ? Math.max(1, Math.min(30000, writeTimeoutMs))
    : 8000;
  let snapshotTail = Promise.resolve();
  let nativeWriteUncertain = false;

  function nativeRead(method, options) {
    if (typeof plugin?.[method] !== "function")
      return Promise.reject(
        new Error("Native recovery storage plugin is unavailable."),
      );
    return deadline(
      () => plugin[method](options),
      timeout,
      "Recovery storage read timed out. Reopen Nomli and try again.",
    );
  }
  function nativeWrite(method, options) {
    if (nativeWriteUncertain)
      return Promise.reject(
        new Error(
          "Recovery storage write outcome is unknown. Reopen Nomli before writing again.",
        ),
      );
    if (typeof plugin?.[method] !== "function")
      return Promise.reject(
        new Error("Native recovery storage plugin is unavailable."),
      );
    return deadline(
      () => plugin[method](options),
      timeout,
      "Recovery storage write timed out. Reopen Nomli before writing again.",
      () => {
        nativeWriteUncertain = true;
      },
    );
  }
  function enqueueSnapshot(text) {
    const write = () =>
      nativeMode
        ? nativeWrite("saveSnapshot", { text })
        : Promise.resolve().then(() => {
            if (!storage?.setItem)
              throw new Error("Recovery storage is unavailable.");
            storage.setItem(STORAGE_KEY, text);
          });
    const result = snapshotTail.then(write, write);
    snapshotTail = result.catch(() => {});
    return result;
  }

  async function load() {
    let raw;
    try {
      raw = nativeMode
        ? (await nativeRead("loadSnapshot")).text
        : storage?.getItem(STORAGE_KEY);
      return { snapshot: parseSnapshot(raw), notice: null };
    } catch (error) {
      const reason = [
        "Native recovery storage plugin is unavailable.",
        "Recovery storage read timed out. Reopen Nomli and try again.",
      ].includes(error?.message)
        ? ` ${error.message}`
        : "";
      return {
        snapshot: null,
        notice: `Saved drafts could not be read and were left unchanged. Reopen Nomli or discard saved drafts. Your inventory is safe.${reason}`,
      };
    }
  }
  function save(value) {
    try {
      return enqueueSnapshot(cloneAndValidate(value, now()).text);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  const clear = () => enqueueSnapshot("null");

  async function saveAsset(blob) {
    if (!(blob instanceof Blob)) fail("Recovery asset must be a Blob.");
    const bytes = new Uint8Array(await blob.arrayBuffer());
    const mimeType = assetType(bytes, blob.type);
    const id = makeId();
    if (nativeMode)
      await nativeWrite("saveAsset", {
        id,
        data: bytesToBase64(bytes),
        mimeType,
      });
    else
      await idbRequest(indexedDB, "readwrite", (store) =>
        store.add(new Blob([bytes], { type: mimeType }), id),
      );
    return id;
  }
  async function loadAsset(id) {
    if (!ID_RE.test(id)) fail("Recovery asset ID is invalid.");
    if (nativeMode) {
      const result = await nativeRead("loadAsset", { id });
      if (!result?.data) return null;
      const bytes = base64ToBytes(result.data);
      assetType(bytes, result.mimeType);
      return new Blob([bytes], { type: result.mimeType });
    }
    const result = await idbRequest(indexedDB, "readonly", (store) =>
      store.get(id),
    );
    if (!(result instanceof Blob)) return null;
    const bytes = new Uint8Array(await result.arrayBuffer());
    assetType(bytes, result.type);
    return new Blob([bytes], { type: result.type });
  }
  async function removeAsset(id) {
    if (!ID_RE.test(id)) fail("Recovery asset ID is invalid.");
    if (nativeMode) await nativeWrite("removeAsset", { id });
    else await idbRequest(indexedDB, "readwrite", (store) => store.delete(id));
  }
  async function pruneAssets(keepIds) {
    if (
      !Array.isArray(keepIds) ||
      keepIds.some((id) => !ID_RE.test(id)) ||
      new Set(keepIds).size !== keepIds.length
    )
      fail("Recovery asset keep list is invalid.");
    if (nativeMode)
      return nativeWrite("pruneAssets", { keepIds: [...keepIds] });
    const keep = new Set(keepIds);
    return idbRequest(indexedDB, "readwrite", (store) => {
      const request = store.openCursor();
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) return;
        if (!keep.has(cursor.key)) cursor.delete();
        cursor.continue();
      };
      return undefined;
    });
  }

  return Object.freeze({
    load,
    save,
    clear,
    saveAsset,
    loadAsset,
    removeAsset,
    pruneAssets,
  });
}
