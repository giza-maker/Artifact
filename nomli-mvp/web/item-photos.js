// Local ingredient thumbnails. State/backups retain IDs only; media stays on device.
export const PHOTO_MAX_BYTES = 32768;
const SOURCE_MAX_BYTES = 4 * 1024 * 1024;
export const isPhotoId = (id) =>
  typeof id === "string" && /^p_[a-f0-9]{32}$/.test(id);
const types = new Set(["image/jpeg", "image/png", "image/webp"]);
export async function validatePhotoBlob(blob, thumbnail = false) {
  if (
    !(blob instanceof Blob) ||
    !types.has(blob.type) ||
    !blob.size ||
    blob.size > (thumbnail ? PHOTO_MAX_BYTES : SOURCE_MAX_BYTES)
  )
    throw new TypeError("Unsupported or oversized ingredient photo.");
  const b = new Uint8Array(await blob.slice(0, 12).arrayBuffer());
  const jpeg = b[0] === 255 && b[1] === 216 && b[2] === 255;
  const png = [137, 80, 78, 71, 13, 10, 26, 10].every((v, i) => b[i] === v);
  const webp =
    String.fromCharCode(...b.slice(0, 4)) === "RIFF" &&
    String.fromCharCode(...b.slice(8, 12)) === "WEBP";
  if (
    !(blob.type === "image/jpeg"
      ? jpeg
      : blob.type === "image/png"
        ? png
        : webp) ||
    (thumbnail && blob.type !== "image/jpeg")
  )
    throw new TypeError("Photo content does not match its image type.");
  return blob;
}
async function sourceBlob(source) {
  if (source instanceof Blob) return validatePhotoBlob(source);
  if (source?.data && types.has(source.mimeType)) {
    if (
      typeof source.data !== "string" ||
      source.data.length > Math.ceil(SOURCE_MAX_BYTES / 3) * 4 ||
      !/^[A-Za-z0-9+/]*={0,2}$/.test(source.data)
    )
      throw new TypeError("Invalid photo data.");
    const bytes = Uint8Array.from(atob(source.data), (c) => c.charCodeAt(0));
    return validatePhotoBlob(new Blob([bytes], { type: source.mimeType }));
  }
  // Only Capacitor's own local file translation. Never fetch arbitrary URLs.
  if (typeof source?.webPath === "string") {
    const url = new URL(source.webPath);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.hostname !== "localhost" ||
      url.port ||
      url.username ||
      url.password ||
      !url.pathname.startsWith("/_capacitor_file_/")
    )
      throw new TypeError("Photo path is not a local camera file.");
    const response = await fetch(url.href, { redirect: "error" });
    if (!response.ok) throw new Error("Could not read camera photo.");
    return validatePhotoBlob(await response.blob());
  }
  throw new TypeError("Unsupported ingredient photo source.");
}
export const loadItemPhotoSource = sourceBlob;
function dataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
export async function prepareItemPhoto(source) {
  const blob = await sourceBlob(source);
  const url = URL.createObjectURL(blob);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    if (!img.naturalWidth || !img.naturalHeight)
      throw new Error("Photo has no image dimensions.");
    const scale = Math.min(
      1,
      256 / Math.max(img.naturalWidth, img.naturalHeight),
    );
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Photo processing unavailable.");
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    for (const quality of [0.8, 0.65, 0.5, 0.35, 0.2]) {
      const result = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/jpeg", quality),
      );
      if (result && result.size <= PHOTO_MAX_BYTES)
        return validatePhotoBlob(result, true);
    }
    throw new Error("Could not make a small ingredient thumbnail.");
  } finally {
    URL.revokeObjectURL(url);
  }
}
export function createItemPhotoStore({
  native = globalThis.window?.NomliNative,
  indexedDB = globalThis.indexedDB,
  prepare = prepareItemPhoto,
} = {}) {
  let database;
  function db() {
    database ??= new Promise((resolve, reject) => {
      if (!indexedDB)
        return reject(new Error("Local photo storage unavailable."));
      const request = indexedDB.open("nomli-item-photos-v1", 1);
      request.onupgradeneeded = () =>
        request.result.createObjectStore("photos");
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error("Photo storage blocked."));
    });
    return database;
  }
  async function operation(mode, action) {
    const database = await db();
    return new Promise((resolve, reject) => {
      const tx = database.transaction("photos", mode);
      const req = action(tx.objectStore("photos"));
      tx.oncomplete = () => resolve(req.result);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error || new Error("Photo storage failed."));
    });
  }
  return {
    prepare,
    async save(source) {
      const blob = await validatePhotoBlob(await prepare(source), true);
      const id =
        "p_" +
        Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) =>
          b.toString(16).padStart(2, "0"),
        ).join("");
      if (native?.isNative)
        await native.saveItemPhoto({
          photoId: id,
          data: (await dataUrl(blob)).split(",")[1],
        });
      else await operation("readwrite", (store) => store.add(blob, id));
      return id;
    },
    async getSource(id) {
      if (!isPhotoId(id)) return null;
      try {
        if (native?.isNative) {
          const result = await native.getItemPhoto({ photoId: id });
          if (!result?.data) return null;
          const blob = await sourceBlob({
            data: result.data,
            mimeType: "image/jpeg",
          });
          await validatePhotoBlob(blob, true);
          return dataUrl(blob);
        }
        const blob = await operation("readonly", (store) => store.get(id));
        return blob ? dataUrl(await validatePhotoBlob(blob, true)) : null;
      } catch {
        return null;
      }
    },
    async remove(id) {
      if (!isPhotoId(id)) throw new TypeError("Invalid photo ID.");
      if (native?.isNative) await native.removeItemPhoto({ photoId: id });
      else await operation("readwrite", (store) => store.delete(id));
    },
    async clear() {
      if (native?.isNative) await native.clearItemPhotos();
      else await operation("readwrite", (store) => store.clear());
    },
  };
}
export const itemPhotos = createItemPhotoStore();
