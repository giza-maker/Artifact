import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const COMMON_REQUIRED_FIELDS = [
  "recipeId",
  "stepIndex",
  "poster",
  "posterSha256",
  "posterBytes",
  "duration",
  "width",
  "height",
  "fps",
  "audio",
  "endpoint",
  "requestId",
  "sourceText",
  "prompt",
];
const CLIP_REQUIRED_FIELDS = ["video", "videoSha256", "videoBytes"];
const SEQUENCE_REQUIRED_FIELDS = [
  "sequence",
  "sequenceSha256",
  "sequenceBytes",
  "columns",
  "rows",
  "frames",
  "sheetWidth",
  "sheetHeight",
];
const SHA256 = /^[a-f0-9]{64}$/;
const MAX_TOTAL_BYTES = 60 * 1024 * 1024;
const MAX_VIDEO_BYTES = 2 * 1024 * 1024;
const MAX_POSTER_BYTES = 200 * 1024;
const MAX_SEQUENCE_BYTES = 800 * 1024;

function fail(message) {
  throw new Error(`Cooking media validation failed: ${message}`);
}

function check(condition, message) {
  if (!condition) fail(message);
}

function sha256(buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

function checkWebp(buffer, source) {
  check(buffer.length >= 12, `${source}: truncated WebP`);
  check(
    buffer.toString("ascii", 0, 4) === "RIFF",
    `${source}: missing RIFF magic`,
  );
  check(
    buffer.toString("ascii", 8, 12) === "WEBP",
    `${source}: missing WEBP magic`,
  );
}

function checkMp4(buffer, source) {
  check(buffer.length >= 12, `${source}: truncated MP4`);
  const boxSize = buffer.readUInt32BE(0);
  check(
    buffer.toString("ascii", 4, 8) === "ftyp",
    `${source}: missing MP4 ftyp box`,
  );
  check(
    boxSize >= 8 && boxSize <= buffer.length,
    `${source}: invalid MP4 ftyp box size`,
  );
}

function resolveAsset(publicRoot, relativePath, expectedPath, key, kind) {
  check(
    relativePath === expectedPath,
    `${key}: unexpected ${kind} path ${relativePath}`,
  );
  check(
    relativePath.startsWith("media/cooking/") &&
      !relativePath.includes("\\") &&
      !relativePath.split("/").includes(".."),
    `${key}: unsafe ${kind} path`,
  );
  const absolute = path.resolve(publicRoot, ...relativePath.split("/"));
  const mediaRoot = path.resolve(publicRoot, "media", "cooking");
  check(
    absolute.startsWith(`${mediaRoot}${path.sep}`),
    `${key}: ${kind} escapes media/cooking`,
  );
  check(fs.existsSync(absolute), `${key}: missing ${relativePath}`);
  const stat = fs.lstatSync(absolute);
  check(
    stat.isFile() && !stat.isSymbolicLink(),
    `${key}: ${relativePath} must be a regular file`,
  );
  return { absolute, stat };
}

function inventoryFiles(root) {
  if (!fs.existsSync(root)) return [];
  const output = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) output.push(...inventoryFiles(absolute));
    else if (entry.isFile() && /\.(?:webp|mp4)$/i.test(entry.name))
      output.push(absolute);
  }
  return output;
}

export function validateCookingMedia({ manifest, recipes, publicRoot }) {
  check(manifest && typeof manifest === "object", "manifest must be an object");
  check(manifest.schemaVersion === 1, "schemaVersion must be 1");
  check(Array.isArray(manifest.entries), "entries must be an array");
  check(Array.isArray(recipes), "recipes must be an array");
  check(typeof publicRoot === "string" && publicRoot, "publicRoot is required");

  const expected = new Map();
  for (const recipe of recipes) {
    check(
      typeof recipe.id === "string" && recipe.id,
      "canonical recipe has invalid ID",
    );
    check(Array.isArray(recipe.steps), `${recipe.id}: canonical steps missing`);
    recipe.steps.forEach((sourceText, stepIndex) => {
      const key = `${recipe.id}/${stepIndex}`;
      check(!expected.has(key), `duplicate canonical step ${key}`);
      expected.set(key, { recipe, stepIndex, sourceText });
    });
  }
  check(
    expected.size === 60,
    `expected 60 canonical steps, got ${expected.size}`,
  );
  check(
    manifest.entries.length === 60,
    `expected 60 entries, got ${manifest.entries.length}`,
  );

  const seen = new Set();
  const referencedFiles = new Set();
  const posterHashes = new Set();
  const videoHashes = new Set();
  const sequenceHashes = new Set();
  let totalBytes = 0;

  for (const entry of manifest.entries) {
    check(
      entry && typeof entry === "object" && !Array.isArray(entry),
      "entry must be an object",
    );
    for (const field of COMMON_REQUIRED_FIELDS)
      check(Object.hasOwn(entry, field), `entry missing ${field}`);
    check(
      Number.isInteger(entry.stepIndex) && entry.stepIndex >= 0,
      `${entry.recipeId}: invalid stepIndex`,
    );
    const key = `${entry.recipeId}/${entry.stepIndex}`;
    check(expected.has(key), `${key}: unknown canonical step`);
    check(!seen.has(key), `${key}: duplicate entry`);
    seen.add(key);
    const canonical = expected.get(key);
    check(
      entry.sourceText === canonical.sourceText,
      `${key}: sourceText does not match canonical recipe`,
    );
    check(
      typeof entry.prompt === "string" && entry.prompt.trim(),
      `${key}: prompt is required`,
    );
    check(
      typeof entry.endpoint === "string" && entry.endpoint.trim(),
      `${key}: endpoint is required`,
    );
    check(
      typeof entry.requestId === "string" && entry.requestId.trim(),
      `${key}: requestId is required`,
    );
    check(
      entry.width === 960 && entry.height === 540,
      `${key}: dimensions must be 960x540`,
    );
    check(entry.audio === false, `${key}: audio must be false`);
    check(SHA256.test(entry.posterSha256), `${key}: invalid posterSha256`);

    const stem = `${entry.recipeId}-step-${entry.stepIndex + 1}`;
    const poster = resolveAsset(
      publicRoot,
      entry.poster,
      `media/cooking/${stem}.webp`,
      key,
      "poster",
    );
    const posterBuffer = fs.readFileSync(poster.absolute);
    checkWebp(posterBuffer, entry.poster);
    check(
      Number.isInteger(entry.posterBytes) &&
        entry.posterBytes === poster.stat.size,
      `${key}: posterBytes mismatch`,
    );
    check(
      entry.posterBytes <= MAX_POSTER_BYTES,
      `${key}: poster exceeds 200KB`,
    );
    check(
      sha256(posterBuffer) === entry.posterSha256,
      `${key}: poster SHA-256 mismatch`,
    );
    check(
      !posterHashes.has(entry.posterSha256),
      `${key}: duplicate poster content`,
    );
    posterHashes.add(entry.posterSha256);
    referencedFiles.add(path.resolve(poster.absolute));
    totalBytes += poster.stat.size;

    const kind = entry.kind ?? "clip";
    check(
      kind === "clip" || kind === "sequence",
      `${key}: invalid kind ${kind}`,
    );
    if (kind === "clip") {
      for (const field of CLIP_REQUIRED_FIELDS)
        check(Object.hasOwn(entry, field), `${key}: clip missing ${field}`);
      check(
        entry.duration >= 4 && entry.duration <= 7,
        `${key}: duration must be 4..7 seconds`,
      );
      check(entry.fps === 24, `${key}: clip fps must be 24`);
      check(SHA256.test(entry.videoSha256), `${key}: invalid videoSha256`);
      const video = resolveAsset(
        publicRoot,
        entry.video,
        `media/cooking/${stem}.mp4`,
        key,
        "video",
      );
      const videoBuffer = fs.readFileSync(video.absolute);
      checkMp4(videoBuffer, entry.video);
      check(
        Number.isInteger(entry.videoBytes) &&
          entry.videoBytes === video.stat.size,
        `${key}: videoBytes mismatch`,
      );
      check(entry.videoBytes <= MAX_VIDEO_BYTES, `${key}: video exceeds 2MB`);
      check(
        sha256(videoBuffer) === entry.videoSha256,
        `${key}: video SHA-256 mismatch`,
      );
      check(
        !videoHashes.has(entry.videoSha256),
        `${key}: duplicate video content`,
      );
      videoHashes.add(entry.videoSha256);
      referencedFiles.add(path.resolve(video.absolute));
      totalBytes += video.stat.size;
    } else {
      for (const field of SEQUENCE_REQUIRED_FIELDS)
        check(Object.hasOwn(entry, field), `${key}: sequence missing ${field}`);
      check(
        !Object.hasOwn(entry, "video") &&
          !Object.hasOwn(entry, "videoSha256") &&
          !Object.hasOwn(entry, "videoBytes"),
        `${key}: sequence must not include MP4 metadata`,
      );
      check(
        entry.duration === 4.8,
        `${key}: sequence duration must be 4.8 seconds`,
      );
      check(entry.fps === 0, `${key}: sequence fps must be 0`);
      check(
        entry.columns === 2 && entry.rows === 2 && entry.frames === 4,
        `${key}: sequence layout must be 2x2 with 4 frames`,
      );
      check(
        entry.sheetWidth === 1920 && entry.sheetHeight === 1080,
        `${key}: sequence sheet dimensions must be 1920x1080`,
      );
      check(
        SHA256.test(entry.sequenceSha256),
        `${key}: invalid sequenceSha256`,
      );
      const sequence = resolveAsset(
        publicRoot,
        entry.sequence,
        `media/cooking/${stem}-sequence.webp`,
        key,
        "sequence",
      );
      const sequenceBuffer = fs.readFileSync(sequence.absolute);
      checkWebp(sequenceBuffer, entry.sequence);
      check(
        Number.isInteger(entry.sequenceBytes) &&
          entry.sequenceBytes === sequence.stat.size,
        `${key}: sequenceBytes mismatch`,
      );
      check(
        entry.sequenceBytes <= MAX_SEQUENCE_BYTES,
        `${key}: sequence exceeds 800KB`,
      );
      check(
        sha256(sequenceBuffer) === entry.sequenceSha256,
        `${key}: sequence SHA-256 mismatch`,
      );
      check(
        !sequenceHashes.has(entry.sequenceSha256),
        `${key}: duplicate sequence content`,
      );
      sequenceHashes.add(entry.sequenceSha256);
      referencedFiles.add(path.resolve(sequence.absolute));
      totalBytes += sequence.stat.size;
    }
  }

  for (const key of expected.keys())
    check(seen.has(key), `${key}: missing entry`);
  check(
    totalBytes <= MAX_TOTAL_BYTES,
    `total media exceeds 60MB (${totalBytes} bytes)`,
  );
  const diskFiles = inventoryFiles(
    path.resolve(publicRoot, "media", "cooking"),
  );
  check(
    diskFiles.length === referencedFiles.size,
    `media inventory has ${diskFiles.length} files; expected ${referencedFiles.size}`,
  );
  for (const file of diskFiles)
    check(
      referencedFiles.has(path.resolve(file)),
      `unreferenced media file ${path.basename(file)}`,
    );

  return { entries: seen.size, files: referencedFiles.size, totalBytes };
}

export function validateCookingMediaFiles({
  manifestPath,
  recipesPath,
  publicRoot,
}) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const catalog = JSON.parse(fs.readFileSync(recipesPath, "utf8"));
  return validateCookingMedia({
    manifest,
    recipes: catalog.recipes,
    publicRoot,
  });
}

const isCli =
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;
if (isCli) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  try {
    const result = validateCookingMediaFiles({
      manifestPath: path.join(
        root,
        "web",
        "public",
        "media",
        "cooking",
        "MANIFEST.json",
      ),
      recipesPath: path.join(root, "content", "recipes.json"),
      publicRoot: path.join(root, "web", "public"),
    });
    console.log(
      `Cooking media valid: ${result.entries} entries, ${result.files} files, ${result.totalBytes} bytes`,
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
