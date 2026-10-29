import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";

// Deterministic local packaging of completed media jobs. Provider submission is
// separate; rerunning this script never creates or charges a generation job.
const root = process.cwd();
const jobs = JSON.parse(
  await fs.readFile(
    process.argv[2] || ".tools/cooking-media/jobs.json",
    "utf8",
  ),
);
const visuals = JSON.parse(
  await fs.readFile("content/cooking-visuals.json", "utf8"),
).visuals;
const target = path.join(root, "web/public/media/cooking");
await fs.mkdir(target, { recursive: true });
const cache = path.join(root, ".tools/cooking-media");
await fs.mkdir(cache, { recursive: true });
const prior = await fs
  .readFile(path.join(cache, "processed.json"), "utf8")
  .then(JSON.parse)
  .catch(() => ({}));
const previousManifest = await fs
  .readFile(path.join(target, "MANIFEST.json"), "utf8")
  .then(JSON.parse)
  .catch(() => ({ entries: [] }));
const entries = previousManifest.entries.filter((x) => x.kind === "sequence");
const approvedSequences = new Set(
  entries.map((x) => `${x.recipeId}:${x.stepIndex}`),
);
const queue = jobs.filter(
  (x) =>
    x.status === "COMPLETED" &&
    x.url &&
    !approvedSequences.has(`${x.recipeId}:${x.stepIndex}`),
);
const digest = (b) => createHash("sha256").update(b).digest("hex");
const probe = (file) =>
  JSON.parse(
    execFileSync(
      "ffprobe",
      [
        "-v",
        "error",
        "-show_entries",
        "format=duration:stream=codec_name,codec_type,width,height,r_frame_rate",
        "-of",
        "json",
        file,
      ],
      { encoding: "utf8" },
    ),
  );
async function prepare(job) {
  const { recipeId, stepIndex } = job;
  if (
    !/^[a-z0-9_]+$/.test(recipeId) ||
    !Number.isInteger(stepIndex) ||
    stepIndex < 0
  )
    throw Error("Invalid cooking identity");
  const visual = visuals.find(
    (x) => x.recipeId === recipeId && x.stepIndex === stepIndex,
  );
  if (!visual) throw Error("Cooking source missing");
  const key = `${recipeId}-step-${stepIndex + 1}`;
  const raw = path.join(cache, `${key}-${job.request_id}.mp4`);
  const rawExists = await fs
    .stat(raw)
    .then((s) => s.size > 1024)
    .catch(() => false);
  if (!rawExists) {
    const url = new URL(job.url);
    if (url.protocol !== "https:" || !url.hostname.endsWith(".fal.media"))
      throw Error("Unexpected media host");
    const response = await fetch(url, { signal: AbortSignal.timeout(180000) });
    if (!response.ok) throw Error(`Media download failed: ${response.status}`);
    const data = Buffer.from(await response.arrayBuffer());
    if (data.length > 30000000 || data.length < 1024)
      throw Error("Unexpected source media size");
    await fs.writeFile(raw, data);
  }
  const videoFile = path.join(target, key + ".mp4"),
    posterFile = path.join(target, key + ".webp");
  const ready =
    prior[key] === job.request_id &&
    (await fs
      .stat(videoFile)
      .then(() => true)
      .catch(() => false)) &&
    (await fs
      .stat(posterFile)
      .then(() => true)
      .catch(() => false));
  if (!ready) {
    execFileSync("ffmpeg", [
      "-hide_banner",
      "-loglevel",
      "error",
      "-y",
      "-i",
      raw,
      "-t",
      "5",
      "-vf",
      "scale=960:540:force_original_aspect_ratio=increase,crop=960:540,setsar=1,fps=24",
      "-c:v",
      "libx264",
      "-crf",
      "26",
      "-preset",
      "medium",
      "-threads",
      "2",
      "-pix_fmt",
      "yuv420p",
      "-an",
      "-sn",
      "-dn",
      "-movflags",
      "+faststart",
      videoFile,
    ]);
    execFileSync("ffmpeg", [
      "-hide_banner",
      "-loglevel",
      "error",
      "-y",
      "-ss",
      "1.0",
      "-i",
      videoFile,
      "-frames:v",
      "1",
      "-c:v",
      "libwebp",
      "-quality",
      "82",
      "-compression_level",
      "5",
      posterFile,
    ]);
  }
  const metadata = probe(videoFile),
    stream = metadata.streams.find((x) => x.codec_type === "video");
  const [fpsN, fpsD] = stream.r_frame_rate.split("/").map(Number);
  if (metadata.streams.some((x) => x.codec_type === "audio"))
    throw Error("Cooking clips must be silent");
  const [video, poster] = await Promise.all([
    fs.readFile(videoFile),
    fs.readFile(posterFile),
  ]);
  entries.push({
    recipeId,
    stepIndex,
    poster: `media/cooking/${key}.webp`,
    video: `media/cooking/${key}.mp4`,
    posterSha256: digest(poster),
    videoSha256: digest(video),
    posterBytes: poster.length,
    videoBytes: video.length,
    duration: Number(metadata.format.duration),
    width: stream.width,
    height: stream.height,
    fps: fpsN / fpsD,
    audio: false,
    endpoint: job.endpoint_id,
    requestId: job.request_id,
    sourceUrl: job.url,
    sourceText: visual.sourceText,
    prompt: job.prompt,
    seed: job.seed,
  });
  prior[key] = job.request_id;
  await fs.writeFile(
    path.join(cache, "processed.json"),
    JSON.stringify(prior, null, 2) + "\n",
  );
  console.log(
    JSON.stringify({ prepared: key, bytes: video.length + poster.length }),
  );
}
// Two encoders avoid saturating the development computer.
await Promise.all(
  Array.from({ length: 2 }, async () => {
    while (queue.length) await prepare(queue.shift());
  }),
);
entries.sort(
  (a, b) => a.recipeId.localeCompare(b.recipeId) || a.stepIndex - b.stepIndex,
);
await fs.writeFile(
  path.join(target, "MANIFEST.json"),
  JSON.stringify(
    {
      schemaVersion: 1,
      created: "2026-10-29",
      description:
        "Generated step demonstrations, packaged silently for offline playback. Illustrative process visuals; recipe instructions remain the source of quantities and cooking requirements.",
      entries,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify({
    entries: entries.length,
    bytes: entries.reduce((s, x) => s + x.videoBytes + x.posterBytes, 0),
  }),
);
