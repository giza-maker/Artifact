import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import recipesCatalog from "../content/recipes.json" with { type: "json" };
import { validateCookingMedia } from "../scripts/validate-cooking-media.mjs";

const digest = (buffer) =>
  crypto.createHash("sha256").update(buffer).digest("hex");

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "nomli-cooking-media-"));
  const mediaRoot = path.join(root, "media", "cooking");
  fs.mkdirSync(mediaRoot, { recursive: true });
  const entries = [];
  let serial = 0;
  for (const recipe of recipesCatalog.recipes) {
    recipe.steps.forEach((sourceText, stepIndex) => {
      serial += 1;
      const stem = `${recipe.id}-step-${stepIndex + 1}`;
      const poster = Buffer.concat([
        Buffer.from("RIFF\u0004\u0000\u0000\u0000WEBP"),
        Buffer.from(`poster-${serial}`),
      ]);
      const video = Buffer.concat([
        Buffer.from([0, 0, 0, 12]),
        Buffer.from("ftypisom"),
        Buffer.from(`video-${serial}`),
      ]);
      fs.writeFileSync(path.join(mediaRoot, `${stem}.webp`), poster);
      fs.writeFileSync(path.join(mediaRoot, `${stem}.mp4`), video);
      entries.push({
        recipeId: recipe.id,
        stepIndex,
        poster: `media/cooking/${stem}.webp`,
        video: `media/cooking/${stem}.mp4`,
        posterSha256: digest(poster),
        videoSha256: digest(video),
        posterBytes: poster.length,
        videoBytes: video.length,
        duration: 5,
        width: 960,
        height: 540,
        fps: 24,
        audio: false,
        endpoint: "test/video-generator",
        requestId: `request-${serial}`,
        sourceText,
        prompt: `Distinct cooking prompt ${serial}`,
      });
    });
  }
  return { root, manifest: { schemaVersion: 1, entries } };
}

function validate(fixture) {
  return validateCookingMedia({
    manifest: fixture.manifest,
    recipes: recipesCatalog.recipes,
    publicRoot: fixture.root,
  });
}

function convertFirstEntryToSequence(fixture) {
  const entry = fixture.manifest.entries[0];
  fs.rmSync(path.join(fixture.root, ...entry.video.split("/")));
  const stem = `${entry.recipeId}-step-${entry.stepIndex + 1}`;
  const sequence = Buffer.concat([
    Buffer.from("RIFF\u0004\u0000\u0000\u0000WEBP"),
    Buffer.from("sequence-1"),
  ]);
  const relative = `media/cooking/${stem}-sequence.webp`;
  fs.writeFileSync(path.join(fixture.root, ...relative.split("/")), sequence);
  delete entry.video;
  delete entry.videoSha256;
  delete entry.videoBytes;
  Object.assign(entry, {
    kind: "sequence",
    sequence: relative,
    sequenceSha256: digest(sequence),
    sequenceBytes: sequence.length,
    columns: 2,
    rows: 2,
    frames: 4,
    fps: 0,
    duration: 4.8,
    sheetWidth: 1920,
    sheetHeight: 1080,
  });
  return entry;
}

function withFixture(run) {
  const fixture = makeFixture();
  try {
    return run(fixture);
  } finally {
    fs.rmSync(fixture.root, { recursive: true, force: true });
  }
}

test("accepts exact canonical 60-step media coverage", () =>
  withFixture((fixture) => {
    assert.deepEqual(validate(fixture), {
      entries: 60,
      files: 120,
      totalBytes: 2442,
    });
  }));

test("rejects missing and duplicate canonical steps", () => {
  withFixture((fixture) => {
    fixture.manifest.entries.pop();
    assert.throws(() => validate(fixture), /expected 60 entries, got 59/);
  });
  withFixture((fixture) => {
    fixture.manifest.entries[59] = { ...fixture.manifest.entries[0] };
    assert.throws(() => validate(fixture), /duplicate entry/);
  });
});

test("rejects source text that differs from canonical recipe", () =>
  withFixture((fixture) => {
    fixture.manifest.entries[0].sourceText = "Rewritten instruction";
    assert.throws(
      () => validate(fixture),
      /sourceText does not match canonical recipe/,
    );
  }));

test("rejects tampered media bytes", () =>
  withFixture((fixture) => {
    const entry = fixture.manifest.entries[0];
    fs.appendFileSync(
      path.join(fixture.root, ...entry.video.split("/")),
      "tamper",
    );
    assert.throws(() => validate(fixture), /videoBytes mismatch/);
  }));

test("rejects traversal and noncanonical asset paths", () =>
  withFixture((fixture) => {
    fixture.manifest.entries[0].poster = "media/cooking/../escape.webp";
    assert.throws(() => validate(fixture), /unexpected poster path/);
  }));

test("accepts mixed clip and generated sequence entries", () =>
  withFixture((fixture) => {
    convertFirstEntryToSequence(fixture);
    const result = validate(fixture);
    assert.equal(result.entries, 60);
    assert.equal(result.files, 120);
  }));

test("rejects invalid sequence layout", () =>
  withFixture((fixture) => {
    const entry = convertFirstEntryToSequence(fixture);
    entry.columns = 4;
    assert.throws(
      () => validate(fixture),
      /sequence layout must be 2x2 with 4 frames/,
    );
  }));

test("rejects sequence traversal and noncanonical paths", () =>
  withFixture((fixture) => {
    const entry = convertFirstEntryToSequence(fixture);
    entry.sequence = "media/cooking/../escape.webp";
    assert.throws(() => validate(fixture), /unexpected sequence path/);
  }));

test("rejects incorrect sequence hash", () =>
  withFixture((fixture) => {
    const entry = convertFirstEntryToSequence(fixture);
    entry.sequenceSha256 = "0".repeat(64);
    assert.throws(() => validate(fixture), /sequence SHA-256 mismatch/);
  }));
