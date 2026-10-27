import test from "node:test";
import assert from "node:assert/strict";
import { attachScanPhotos } from "../web/scan-item-photos.js";
const p = (digit) => "p_" + digit.repeat(32);
const lines = [{ lineId: "milk" }, { lineId: "dates" }, { lineId: "excluded" }];
const options = {
  kind: "groceries",
  lines,
  excludedLineIds: ["excluded"],
  photoIds: new Map([
    ["milk", p("a")],
    ["dates", p("b")],
  ]),
};
const fixture = () => ({
  state: { items: { a: { name: "Milk" }, b: { name: "Dates" } } },
  importedItemIds: ["a", "b"],
  replayed: false,
});
test("individual crops follow included scan lines, never shared across ingredients", () => {
  const before = fixture();
  const after = attachScanPhotos(before, options);
  assert.equal(after.state.items.a.photoId, p("a"));
  assert.equal(after.state.items.b.photoId, p("b"));
  assert.equal(before.state.items.a.photoId, undefined);
});
test("existing merge photo stays; repeated merge takes first crop only", () => {
  const before = fixture();
  before.state.items.b.photoId = p("c");
  assert.equal(attachScanPhotos(before, options).state.items.b.photoId, p("c"));
  const merged = { ...fixture(), importedItemIds: ["a", "a"] };
  assert.equal(attachScanPhotos(merged, options).state.items.a.photoId, p("a"));
});
test("receipt expiry and replay never assign ingredient crops", () => {
  for (const kind of ["receipt", "expiry"]) {
    const before = fixture();
    assert.equal(attachScanPhotos(before, { ...options, kind }), before);
  }
  const replay = { ...fixture(), replayed: true };
  assert.equal(attachScanPhotos(replay, options), replay);
});
test("excluded, invalid or absent photo targets reject immutably", () => {
  const before = fixture();
  for (const photoIds of [
    new Map([["excluded", p("a")]]),
    new Map([["milk", "https://example.com/photo"]]),
    new Map([["__proto__", p("a")]]),
  ])
    assert.throws(() => attachScanPhotos(before, { ...options, photoIds }));
  assert.throws(() =>
    attachScanPhotos({ ...before, importedItemIds: ["a", "missing"] }, options),
  );
  assert.throws(() =>
    attachScanPhotos({ ...before, importedItemIds: ["a"] }, options),
  );
  assert.equal(before.state.items.a.photoId, undefined);
});
