import { isPhotoId } from "./item-photos.js";
// Line order is the same ownership mapping returned by commitScanDraft.
export function attachScanPhotos(
  result,
  { kind, lines = [], excludedLineIds = [], photoIds = new Map() } = {},
) {
  if (kind !== "groceries" || result.replayed) return result;
  if (!(photoIds instanceof Map))
    throw new TypeError("Invalid ingredient photo map.");
  if (!photoIds.size) return result;
  const included = lines.filter(
    (line) => !excludedLineIds.includes(line.lineId),
  );
  if (
    included.length !== result.importedItemIds.length ||
    new Set(included.map((line) => line.lineId)).size !== included.length
  )
    throw new TypeError("Photo line ownership is invalid.");
  for (const [lineId, photoId] of photoIds)
    if (!isPhotoId(photoId) || !included.some((line) => line.lineId === lineId))
      throw new TypeError("Invalid ingredient photo.");
  const items = { ...result.state.items };
  for (const [index, id] of result.importedItemIds.entries()) {
    if (!Object.hasOwn(items, id))
      throw new TypeError("Photo target is missing.");
    const photoId = photoIds.get(included[index].lineId);
    if (photoId && !items[id].photoId) items[id] = { ...items[id], photoId };
  }
  return { ...result, state: { ...result.state, items } };
}
