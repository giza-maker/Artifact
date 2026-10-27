import test from "node:test";
import assert from "node:assert/strict";
import { attachScanPhoto } from "../web/scan-item-photos.js";
const photoId = "p_" + "a".repeat(32);
const oldId = "p_" + "b".repeat(32);
const fixture = () => ({
  state: {
    items: { a: { name: "Milk" }, b: { name: "Dates", photoId: oldId } },
  },
  importedItemIds: ["a", "b"],
  replayed: false,
});
test("reviewed grocery photo attaches without replacing an existing merge photo", () => {
  const before = fixture();
  const after = attachScanPhoto(before, { kind: "groceries", photoId });
  assert.equal(after.state.items.a.photoId, photoId);
  assert.equal(after.state.items.b.photoId, oldId);
  assert.equal(before.state.items.a.photoId, undefined);
});
test("receipts, expiry and replay never assign grocery thumbnails", () => {
  for (const kind of ["receipt", "expiry"]) {
    const before = fixture();
    assert.equal(attachScanPhoto(before, { kind, photoId }), before);
  }
  const replay = { ...fixture(), replayed: true };
  assert.equal(attachScanPhoto(replay, { kind: "groceries", photoId }), replay);
});
test("invalid or absent stock photo targets reject without changing source", () => {
  const before = fixture();
  assert.throws(() =>
    attachScanPhoto(before, {
      kind: "groceries",
      photoId: "https://example.com/photo",
    }),
  );
  assert.throws(() =>
    attachScanPhoto(
      { ...before, importedItemIds: ["missing"] },
      { kind: "groceries", photoId },
    ),
  );
  assert.equal(before.state.items.a.photoId, undefined);
});
