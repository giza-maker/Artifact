import test from "node:test";
import assert from "node:assert/strict";
import {
  initialPhotoCrop,
  cropAtZoom,
  renderPhotoCrop,
  preparePhotoRegion,
  photoCropRegion,
} from "../web/item-photo-crop.js";
const jpeg = (size) =>
  new Blob([new Uint8Array([255, 216, 255]), new Uint8Array(size - 3)], {
    type: "image/jpeg",
  });

test("accepted proposal crop exposes independent normalized region for reopening", async () => {
  const priorImage = globalThis.Image,
    priorDocument = globalThis.document;
  globalThis.Image = class {
    naturalWidth = 1600;
    naturalHeight = 1200;
    async decode() {}
  };
  globalThis.document = {
    createElement: () => ({
      getContext: () => ({ fillRect() {}, drawImage() {} }),
      toBlob: (callback) => callback(jpeg(100)),
    }),
  };
  try {
    const blob = await preparePhotoRegion({
      source: jpeg(50),
      region: { x: 0.5, y: 0.25, width: 0.25, height: 0.25 },
    });
    const region = photoCropRegion(blob);
    assert.deepEqual(region, {
      x: 0.5,
      y: 250 / 1200,
      width: 0.25,
      height: 400 / 1200,
    });
    assert.deepEqual(initialPhotoCrop(1600, 1200, region), {
      x: 800,
      y: 250,
      side: 400,
    });
    region.x = 0;
    assert.equal(photoCropRegion(blob).x, 0.5);
    assert.equal(photoCropRegion(jpeg(50)), null);
    assert.equal(photoCropRegion(null), null);
  } finally {
    globalThis.Image = priorImage;
    globalThis.document = priorDocument;
  }
});
test("square crop uses full-resolution region and clamps fractional edge boxes", () => {
  assert.deepEqual(
    initialPhotoCrop(1600, 1200, {
      x: 0.5,
      y: 0.25,
      width: 0.25,
      height: 0.25,
    }),
    { x: 800, y: 250, side: 400 },
  );
  const edge = initialPhotoCrop(1600, 1200, {
    x: 0.95,
    y: 0.9,
    width: 0.2,
    height: 0.2,
  });
  assert.ok(edge.x >= 0 && edge.y >= 0);
  assert.ok(edge.x + edge.side <= 1600 && edge.y + edge.side <= 1200);
  assert.equal(edge.side, 150);
  assert.deepEqual(initialPhotoCrop(800, 400), { x: 200, y: 0, side: 400 });
});
test("bad regions and dimensions reject; zoom remains bounded within source", () => {
  for (const region of [
    { x: NaN, y: 0, width: 0.5, height: 0.5 },
    { x: 1, y: 0, width: 0.1, height: 0.5 },
    { x: 0, y: 0, width: 0, height: 0.5 },
  ])
    assert.throws(() => initialPhotoCrop(800, 400, region));
  assert.throws(() => initialPhotoCrop(0, 100));
  const zoomed = cropAtZoom(800, 400, { x: 0, y: 0, side: 400 }, 99);
  assert.equal(zoomed.side, 50);
  assert.deepEqual(cropAtZoom(800, 400, zoomed, 0), { x: 0, y: 0, side: 400 });
});
test("final render samples original crop coordinates; square output never upscales", async () => {
  const image = {};
  let draw;
  const canvas = {
    getContext: () => ({
      fillRect() {},
      drawImage(...args) {
        draw = args;
      },
    }),
    toBlob(callback, type) {
      assert.equal(type, "image/jpeg");
      callback(jpeg(100));
    },
  };
  const result = await renderPhotoCrop(
    image,
    { x: 700, y: 100, side: 600 },
    () => canvas,
  );
  assert.equal(canvas.width, 256);
  assert.equal(canvas.height, 256);
  assert.deepEqual(draw, [image, 700, 100, 600, 600, 0, 0, 256, 256]);
  assert.equal(result.type, "image/jpeg");
  await renderPhotoCrop(image, { x: 0, y: 0, side: 80 }, () => canvas);
  assert.equal(canvas.width, 80);
});
test("compression retries oversized JPEGs and rejects unusable canvas output", async () => {
  let tries = 0;
  const canvas = {
    getContext: () => ({ fillRect() {}, drawImage() {} }),
    toBlob(callback) {
      callback(jpeg(++tries === 1 ? 32769 : 32768));
    },
  };
  assert.equal(
    (await renderPhotoCrop({}, { x: 0, y: 0, side: 300 }, () => canvas)).size,
    32768,
  );
  assert.equal(tries, 2);
  canvas.toBlob = (callback) => callback(null);
  await assert.rejects(
    renderPhotoCrop({}, { x: 0, y: 0, side: 300 }, () => canvas),
    /thumbnail limit/,
  );
  await assert.rejects(
    preparePhotoRegion({ source: jpeg(50), region: null }),
    /required/,
  );
});
