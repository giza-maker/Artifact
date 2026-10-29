import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";

const root = process.cwd(),
  sourceRoot = path.join(root, ".tools/cooking-media/own-source");
const files = (await fs.readdir(sourceRoot)).filter((n) =>
  n.endsWith("-generation.json"),
);
const records = [];
for (const file of files) {
  const value = JSON.parse(
    await fs.readFile(path.join(sourceRoot, file), "utf8"),
  );
  records.push(...(Array.isArray(value) ? value : value.assets));
}
const selected = new Map(
  records.map((r) => [`${r.recipeId}:${r.stepIndex}`, r]),
);
const manifestFile = "web/public/media/cooking/MANIFEST.json";
const manifest = JSON.parse(await fs.readFile(manifestFile, "utf8"));
const visuals = JSON.parse(
  await fs.readFile("content/cooking-visuals.json", "utf8"),
).visuals;
const outputRoot = path.join(root, "web/public/media/cooking");
await fs.mkdir(path.join(root, ".tools/cooking-media/rejected"), {
  recursive: true,
});
const digest = (b) => createHash("sha256").update(b).digest("hex");
const sourceList = [];
for (const [key, record] of selected) {
  const { recipeId, stepIndex } = record;
  if (!/^[a-z0-9_]+$/.test(recipeId) || !Number.isInteger(stepIndex))
    throw Error("Invalid sequence identity");
  const visual = visuals.find(
    (x) => x.recipeId === recipeId && x.stepIndex === stepIndex,
  );
  if (!visual) throw Error("Unknown sequence source");
  const stem = `${recipeId}-step-${stepIndex + 1}`,
    source = path.join(sourceRoot, stem + ".png");
  await fs.access(source);
  const sequence = path.join(outputRoot, stem + "-sequence.webp"),
    poster = path.join(outputRoot, stem + ".webp");
  // Crop each generated grid cell by three pixels to omit tiny divider lines;
  // then pack equal 960x540 cells. This is sprite export, not new generation.
  const filter =
    "[0:v]split=4[a][b][c][d];[a]crop=iw/2-6:ih/2-6:3:3,scale=960:540,setsar=1[t0];[b]crop=iw/2-6:ih/2-6:iw/2+3:3,scale=960:540,setsar=1[t1];[c]crop=iw/2-6:ih/2-6:3:ih/2+3,scale=960:540,setsar=1[t2];[d]crop=iw/2-6:ih/2-6:iw/2+3:ih/2+3,scale=960:540,setsar=1[t3];[t0][t1][t2][t3]xstack=inputs=4:layout=0_0|960_0|0_540|960_540[out]";
  execFileSync("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    source,
    "-filter_complex",
    filter,
    "-map",
    "[out]",
    "-frames:v",
    "1",
    "-c:v",
    "libwebp",
    "-quality",
    "84",
    sequence,
  ]);
  execFileSync("ffmpeg", [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    sequence,
    "-vf",
    "crop=960:540:0:0",
    "-frames:v",
    "1",
    "-c:v",
    "libwebp",
    "-quality",
    "84",
    poster,
  ]);
  const [sheetBytes, posterBytes] = await Promise.all([
    fs.readFile(sequence),
    fs.readFile(poster),
  ]);
  const original =
    record.originalPath || record.original || record.source || "";
  const requestId =
    record.requestId || path.win32.basename(original).replace(/\.png$/, "");
  const entry = {
    recipeId,
    stepIndex,
    kind: "sequence",
    poster: `media/cooking/${stem}.webp`,
    sequence: `media/cooking/${stem}-sequence.webp`,
    posterSha256: digest(posterBytes),
    sequenceSha256: digest(sheetBytes),
    posterBytes: posterBytes.length,
    sequenceBytes: sheetBytes.length,
    duration: 4.8,
    width: 960,
    height: 540,
    fps: 0,
    audio: false,
    columns: 2,
    rows: 2,
    frames: 4,
    sheetWidth: 1920,
    sheetHeight: 1080,
    endpoint: "OpenAI built-in image_gen",
    requestId,
    sourceText: visual.sourceText,
    prompt: record.prompt,
  };
  const index = manifest.entries.findIndex(
    (e) => `${e.recipeId}:${e.stepIndex}` === key,
  );
  if (index < 0) throw Error("Missing existing step");
  manifest.entries[index] = entry;
  sourceList.push({
    recipeId,
    stepIndex,
    sourceImage: stem + ".png",
    generator: "OpenAI built-in image_gen",
    requestId,
    prompt: record.prompt,
  });
  const oldVideo = path.join(outputRoot, stem + ".mp4");
  if (
    await fs
      .stat(oldVideo)
      .then(() => true)
      .catch(() => false)
  )
    await fs.rename(
      oldVideo,
      path.join(root, ".tools/cooking-media/rejected", stem + ".mp4"),
    );
  console.log(
    JSON.stringify({
      prepared: stem,
      kind: "sequence",
      bytes: sheetBytes.length + posterBytes.length,
    }),
  );
}
await fs.writeFile(manifestFile, JSON.stringify(manifest, null, 2) + "\n");
await fs.writeFile(
  "content/cooking-sequences.json",
  JSON.stringify({ schemaVersion: 1, steps: sourceList }, null, 2) + "\n",
);
console.log(
  JSON.stringify({
    sequences: sourceList.length,
    clips: manifest.entries.filter((e) => e.kind !== "sequence").length,
  }),
);
