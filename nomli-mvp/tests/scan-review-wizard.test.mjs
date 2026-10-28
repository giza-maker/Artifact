import test from "node:test";
import assert from "node:assert/strict";
import {
  createScanReviewState,
  reduceScanReviewState,
} from "../web/scan-review-wizard.js";

test("empty and large review sets have bounded navigation", () => {
  const empty = createScanReviewState(0);
  assert.deepEqual(empty, { index: 0, reviewed: [] });
  assert.equal(
    reduceScanReviewState(empty, { type: "show", index: 99 }).index,
    0,
  );

  let large = createScanReviewState(500);
  large = reduceScanReviewState(large, { type: "show", index: 999 });
  assert.equal(large.index, 500);
  assert.equal(large.reviewed.length, 500);
});

test("review advances through cards and preserves earlier review state", () => {
  let state = createScanReviewState(3);
  state = reduceScanReviewState(state, { type: "review", index: 0 });
  assert.deepEqual(state, { index: 1, reviewed: [true, false, false] });
  state = reduceScanReviewState(state, { type: "show", index: 0 });
  state = reduceScanReviewState(state, { type: "show", index: 1 });
  assert.deepEqual(state.reviewed, [true, false, false]);
});

test("edits invalidate only their owning card, including skipped cards", () => {
  let state = createScanReviewState(2);
  state = reduceScanReviewState(state, { type: "review", index: 0 });
  state = reduceScanReviewState(state, { type: "review", index: 1 });
  assert.deepEqual(state, { index: 2, reviewed: [true, true] });
  state = reduceScanReviewState(state, { type: "edit", index: 0 });
  assert.deepEqual(state, { index: 2, reviewed: [false, true] });
});

test("summary index does not imply every card was reviewed", () => {
  let state = createScanReviewState(3);
  state = reduceScanReviewState(state, { type: "show", index: 3 });
  assert.equal(state.index, 3);
  assert.equal(state.reviewed.every(Boolean), false);
  state = reduceScanReviewState(state, { type: "review", index: 0 });
  state = reduceScanReviewState(state, { type: "review", index: 1 });
  state = reduceScanReviewState(state, { type: "review", index: 2 });
  assert.equal(state.index, 3);
  assert.equal(state.reviewed.every(Boolean), true);
});
