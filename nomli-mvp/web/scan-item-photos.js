import { isPhotoId } from "./item-photos.js";

// A receipt is evidence of a purchase, never an ingredient photograph.
export function attachScanPhoto(result, { kind, photoId } = {}) {
  if (kind !== "groceries" || result.replayed || !photoId) return result;
  if (!isPhotoId(photoId)) throw new TypeError("Invalid ingredient photo.");
  const items = { ...result.state.items };
  for (const id of result.importedItemIds) {
    if (!Object.hasOwn(items, id))
      throw new TypeError("Photo target is missing.");
    if (!items[id].photoId) items[id] = { ...items[id], photoId };
  }
  return { ...result, state: { ...result.state, items } };
}
