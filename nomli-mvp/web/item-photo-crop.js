import {
  loadItemPhotoSource,
  validatePhotoBlob,
  PHOTO_MAX_BYTES,
} from "./item-photos.js";

const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
const decodedSources = new WeakMap();
const cropRegions = new WeakMap();
export function photoCropRegion(blob) {
  const region =
    blob && typeof blob === "object" ? cropRegions.get(blob) : null;
  return region ? { ...region } : null;
}
function recordCrop(blob, crop, width, height) {
  cropRegions.set(blob, {
    x: crop.x / width,
    y: crop.y / height,
    width: crop.side / width,
    height: crop.side / height,
  });
  return blob;
}
async function decodeSource(source) {
  const cacheable = source && typeof source === "object";
  if (cacheable && decodedSources.has(source))
    return decodedSources.get(source);
  const pending = (async () => {
    const blob = await loadItemPhotoSource(source);
    const url = URL.createObjectURL(blob);
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      return image;
    } finally {
      URL.revokeObjectURL(url);
    }
  })();
  if (cacheable) decodedSources.set(source, pending);
  try {
    return await pending;
  } catch (error) {
    if (cacheable) decodedSources.delete(source);
    throw error;
  }
}
export async function preparePhotoRegion({ source, region }) {
  if (!region) throw new TypeError("Ingredient crop region is required.");
  const image = await decodeSource(source);
  const crop = initialPhotoCrop(
    image.naturalWidth,
    image.naturalHeight,
    region,
  );
  return recordCrop(
    await renderPhotoCrop(image, crop),
    crop,
    image.naturalWidth,
    image.naturalHeight,
  );
}
// Pure geometry shared by pointer, range controls and final full-resolution render.
export function initialPhotoCrop(width, height, region = null) {
  if (
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width < 1 ||
    height < 1
  )
    throw new TypeError("Invalid photo dimensions.");
  const maximum = Math.min(width, height);
  let side = maximum,
    centerX = width / 2,
    centerY = height / 2;
  if (region !== null) {
    if (
      !region ||
      !["x", "y", "width", "height"].every((key) =>
        Number.isFinite(region[key]),
      ) ||
      region.width <= 0 ||
      region.height <= 0
    )
      throw new TypeError("Invalid photo crop region.");
    const x = clamp(region.x, 0, 1),
      y = clamp(region.y, 0, 1);
    const rw = clamp(region.width, 0, 1 - x) * width,
      rh = clamp(region.height, 0, 1 - y) * height;
    if (rw <= 0 || rh <= 0)
      throw new TypeError("Photo crop region is outside image.");
    // Include the whole proposed ingredient box when a square can contain it.
    side = clamp(Math.max(rw, rh), maximum / 8, maximum);
    centerX = x * width + rw / 2;
    centerY = y * height + rh / 2;
  }
  return {
    x: clamp(centerX - side / 2, 0, width - side),
    y: clamp(centerY - side / 2, 0, height - side),
    side,
  };
}
export function cropAtZoom(width, height, crop, zoom) {
  const side = Math.min(width, height) / clamp(zoom, 1, 8);
  return {
    side,
    x: clamp(crop.x + crop.side / 2 - side / 2, 0, width - side),
    y: clamp(crop.y + crop.side / 2 - side / 2, 0, height - side),
  };
}
export async function renderPhotoCrop(
  image,
  crop,
  makeCanvas = () => document.createElement("canvas"),
) {
  const canvas = makeCanvas();
  canvas.width = canvas.height = Math.max(
    1,
    Math.min(256, Math.floor(crop.side)),
  );
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Photo cropping unavailable.");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(
    image,
    crop.x,
    crop.y,
    crop.side,
    crop.side,
    0,
    0,
    canvas.width,
    canvas.height,
  );
  for (const quality of [0.85, 0.7, 0.55, 0.4, 0.25, 0.1]) {
    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", quality),
    );
    if (blob && blob.size <= PHOTO_MAX_BYTES)
      return validatePhotoBlob(blob, true);
  }
  throw new Error(
    "Photo could not fit local thumbnail limit. Zoom in and retry.",
  );
}

let active = false;
export async function cropItemPhoto({
  source,
  title = "Crop ingredient photo",
  region = null,
}) {
  if (active) throw new Error("Another photo crop is already open.");
  active = true;
  const previousFocus = document.activeElement;
  let url, dialog;
  try {
    const blob = await loadItemPhotoSource(source);
    url = URL.createObjectURL(blob);
    const image = new Image();
    image.src = url;
    await image.decode();
    const width = image.naturalWidth,
      height = image.naturalHeight;
    const initial = initialPhotoCrop(width, height, region);
    let crop = { ...initial },
      saving = false,
      pointer = null;
    dialog = document.createElement("dialog");
    dialog.className = "photo-crop-dialog";
    dialog.setAttribute("aria-labelledby", "photo-crop-title");
    dialog.setAttribute("aria-describedby", "photo-crop-help");
    dialog.innerHTML = `<div class="photo-crop-body"><header><h2 id="photo-crop-title"></h2><button type="button" data-crop="cancel" aria-label="Cancel photo crop">×</button></header><p id="photo-crop-help">Move photo to frame this ingredient. Use sliders or drag the photo.</p><div class="photo-crop-window"><img alt="Ingredient photo crop preview" draggable="false"><span class="photo-crop-guide" aria-hidden="true"></span></div><div class="photo-crop-zoom"><button type="button" data-crop="out" aria-label="Zoom out">−</button><label>Zoom<input data-crop="zoom" type="range" min="1" max="8" step="0.01"></label><button type="button" data-crop="in" aria-label="Zoom in">+</button></div><div class="photo-crop-position"><label>Horizontal position<input data-crop="x" type="range" min="0" max="100" step="0.1"></label><label>Vertical position<input data-crop="y" type="range" min="0" max="100" step="0.1"></label></div><p class="photo-crop-error" role="alert"></p><footer><button type="button" data-crop="reset">Reset crop</button><button type="button" data-crop="cancel">Cancel</button><button type="button" data-crop="save">Use photo</button></footer></div>`;
    dialog.querySelector("h2").textContent = title;
    const preview = dialog.querySelector("img");
    preview.src = url;
    const viewport = dialog.querySelector(".photo-crop-window");
    const zoom = dialog.querySelector('[data-crop="zoom"]'),
      x = dialog.querySelector('[data-crop="x"]'),
      y = dialog.querySelector('[data-crop="y"]');
    let viewportSize = 1;
    function update() {
      const scale = viewportSize / crop.side;
      // Image intrinsic dimensions assigned once; only compositor transform changes while dragging.
      preview.style.transform = `translate(${-crop.x * scale}px,${-crop.y * scale}px) scale(${scale})`;
      zoom.value = Math.min(width, height) / crop.side;
      x.value = width === crop.side ? 50 : (crop.x / (width - crop.side)) * 100;
      y.value =
        height === crop.side ? 50 : (crop.y / (height - crop.side)) * 100;
      x.disabled = width === crop.side;
      y.disabled = height === crop.side;
      zoom.setAttribute(
        "aria-valuetext",
        `${Number(zoom.value).toFixed(1)} times`,
      );
    }
    preview.style.width = `${width}px`;
    preview.style.height = `${height}px`;
    document.body.append(dialog);
    dialog.showModal();
    viewportSize = viewport.getBoundingClientRect().width;
    update();
    const observer = new ResizeObserver((entries) => {
      viewportSize = entries[0].contentRect.width;
      update();
    });
    observer.observe(viewport);
    try {
      return await new Promise((resolve) => {
        function finish(result) {
          if (saving) return;
          dialog.close();
          resolve(result);
        }
        dialog.addEventListener("cancel", (event) => {
          event.preventDefault();
          finish(null);
        });
        dialog.addEventListener("close", () => {
          if (!saving) resolve(null);
        });
        dialog.addEventListener("input", (event) => {
          if (saving) return;
          if (event.target === zoom)
            crop = cropAtZoom(width, height, crop, Number(zoom.value));
          if (event.target === x)
            crop.x = (Number(x.value) / 100) * (width - crop.side);
          if (event.target === y)
            crop.y = (Number(y.value) / 100) * (height - crop.side);
          update();
        });
        dialog.addEventListener("click", async (event) => {
          const action = event.target.closest("[data-crop]")?.dataset.crop;
          if (saving) return;
          if (action === "cancel") return finish(null);
          if (action === "reset") {
            crop = { ...initial };
            update();
          }
          if (action === "in" || action === "out") {
            crop = cropAtZoom(
              width,
              height,
              crop,
              Number(zoom.value) + (action === "in" ? 0.25 : -0.25),
            );
            update();
          }
          if (action === "save") {
            saving = true;
            dialog.setAttribute("aria-busy", "true");
            dialog.querySelectorAll("button,input").forEach((el) => {
              el.disabled = true;
            });
            try {
              const result = await renderPhotoCrop(image, crop);
              saving = false;
              finish(recordCrop(result, crop, width, height));
            } catch {
              dialog.querySelector(".photo-crop-error").textContent =
                "Photo could not be cropped. Adjust crop and retry.";
            } finally {
              saving = false;
              dialog.removeAttribute("aria-busy");
              dialog.querySelectorAll("button,input").forEach((el) => {
                el.disabled = false;
              });
              update();
            }
          }
        });
        viewport.addEventListener("pointerdown", (event) => {
          if (
            saving ||
            pointer ||
            (event.pointerType === "mouse" && event.button !== 0)
          )
            return;
          pointer = {
            id: event.pointerId,
            x: event.clientX,
            y: event.clientY,
            crop: { ...crop },
          };
          viewport.setPointerCapture(event.pointerId);
        });
        viewport.addEventListener("pointermove", (event) => {
          if (!pointer || pointer.id !== event.pointerId || saving) return;
          crop.x = clamp(
            pointer.crop.x -
              ((event.clientX - pointer.x) * crop.side) / viewportSize,
            0,
            width - crop.side,
          );
          crop.y = clamp(
            pointer.crop.y -
              ((event.clientY - pointer.y) * crop.side) / viewportSize,
            0,
            height - crop.side,
          );
          update();
        });
        for (const type of ["pointerup", "pointercancel", "lostpointercapture"])
          viewport.addEventListener(type, () => {
            pointer = null;
          });
        dialog
          .querySelector('[data-crop="save"]')
          .focus({ preventScroll: true });
      });
    } finally {
      observer.disconnect();
    }
  } finally {
    dialog?.remove();
    if (url) URL.revokeObjectURL(url);
    active = false;
    if (previousFocus?.isConnected)
      previousFocus.focus({ preventScroll: true });
  }
}
