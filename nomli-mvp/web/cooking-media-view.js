const LOCAL_MEDIA_URL =
  /^(?:\.\/|[a-zA-Z0-9_-]+\/)[a-zA-Z0-9_./%-]+(?:\?[a-zA-Z0-9_=&%-]+)?$/;

function localMediaUrl(value, esc) {
  const url = String(value ?? "").trim();
  return url && LOCAL_MEDIA_URL.test(url) && !url.includes("..")
    ? esc(url)
    : "";
}

export function renderCookingStepMedia(media, { esc, icon }) {
  if (!media) return "";

  const poster = localMediaUrl(media.poster, esc);
  const video = localMediaUrl(media.video, esc);
  const sequence =
    media.kind === "sequence" ? localMediaUrl(media.sequence, esc) : "";
  if (!poster) return "";

  const identity = `${media.recipeId ?? "recipe"}-${media.stepIndex ?? 0}`
    .replace(/[^a-zA-Z0-9_-]/g, "-")
    .toLowerCase();
  const descriptionId = `cook-step-media-description-${identity}`;
  const statusId = `cook-step-media-status-${identity}`;
  const playbackKey = media.playbackKey
    ? ` data-cook-media-key="${esc(media.playbackKey)}"`
    : "";
  const alt = esc(
    media.alt || `${media.title || "Cooking step"} demonstration`,
  );
  const lookFor = media.lookFor
    ? `<span class="cook-step-media__cue"><b>Look for:</b> ${esc(media.lookFor)}</span>`
    : "";
  const describedBy = `${media.lookFor ? `${descriptionId} ` : ""}${statusId}`;
  const videoMarkup =
    video && !sequence
      ? `<video class="cook-step-media__video" muted playsinline loop preload="none" poster="${poster}" aria-label="${alt}" aria-describedby="${describedBy}" data-cook-media-video><source src="${video}"></video>`
      : "";
  const sequenceMarkup = sequence
    ? `<div class="cook-step-media__sequence" role="img" aria-label="${alt}" aria-describedby="${describedBy}" data-cook-media-sequence>${[0, 1, 2, 3].map((index) => `<span class="cook-step-media__sequence-stage cook-step-media__sequence-stage--${index + 1}" style="background-image:url('${sequence}')" aria-hidden="true"></span>`).join("")}<img class="cook-step-media__sequence-source" src="${sequence}" alt="" data-cook-media-sequence-source></div>`
    : "";
  const hasMotion = Boolean(video || sequence);
  const playLabel = sequence ? "Play steps" : "Play demo";
  const control = hasMotion
    ? `<button type="button" class="cook-step-media__control" data-cook-media-control aria-describedby="${statusId}"><span data-cook-media-play-icon>${icon("play")}</span><span data-cook-media-pause-icon hidden>${icon("pause")}</span><span data-cook-media-label>${playLabel}</span></button>`
    : "";
  const retry = hasMotion
    ? `<button type="button" class="cook-step-media__retry" data-cook-media-retry hidden>${sequence ? "Retry steps" : "Retry video"}</button>`
    : "";

  return `<figure class="cook-step-media${sequence ? " has-sequence" : video ? " has-video" : " is-still"}" data-cook-step-media data-cook-media-kind="${sequence ? "sequence" : video ? "video" : "still"}"${playbackKey}>
    <div class="cook-step-media__frame">
      <img class="cook-step-media__poster" src="${poster}" alt="${hasMotion ? "" : alt}"${hasMotion ? ' aria-hidden="true"' : ""} width="390" height="220">
      ${videoMarkup}${sequenceMarkup}
      ${control}${retry}
    </div>
    ${lookFor ? `<figcaption id="${descriptionId}">${lookFor}</figcaption>` : ""}
    <p class="sr-only" id="${statusId}" data-cook-media-status aria-live="polite">${sequence ? "Illustrated steps paused." : video ? "Video paused." : "Still image demonstration."}</p>
  </figure>`;
}
