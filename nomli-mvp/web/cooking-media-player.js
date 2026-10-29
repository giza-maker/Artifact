const mountedRoots = new WeakMap();
const playbackIntent = new Map();
const MAX_PLAYBACK_INTENTS = 80;

function rememberIntent(key, intent) {
  if (!key) return;
  playbackIntent.delete(key);
  playbackIntent.set(key, intent);
  while (playbackIntent.size > MAX_PLAYBACK_INTENTS) {
    playbackIntent.delete(playbackIntent.keys().next().value);
  }
}

function inertCleanup() {
  const cleanup = () => {};
  cleanup.suspend = () => {};
  cleanup.resume = () => {};
  return cleanup;
}

export function mountCookingMedia(root, dependencies = {}) {
  if (!root?.querySelector) return inertCleanup();
  mountedRoots.get(root)?.();

  const doc =
    dependencies.document ?? root.ownerDocument ?? globalThis.document;
  const Observer =
    dependencies.IntersectionObserver ?? globalThis.IntersectionObserver;
  const matchMedia =
    dependencies.matchMedia ?? globalThis.matchMedia?.bind(globalThis);
  const figure = root.matches?.("[data-cook-step-media]")
    ? root
    : root.querySelector("[data-cook-step-media]");
  const video = figure?.querySelector("[data-cook-media-video]");
  const sequence = figure?.querySelector("[data-cook-media-sequence]");
  const sequenceSource = figure?.querySelector(
    "[data-cook-media-sequence-source]",
  );
  const control = figure?.querySelector("[data-cook-media-control]");
  const label = figure?.querySelector("[data-cook-media-label]");
  const playIcon = figure?.querySelector("[data-cook-media-play-icon]");
  const pauseIcon = figure?.querySelector("[data-cook-media-pause-icon]");
  const retry = figure?.querySelector("[data-cook-media-retry]");
  const status = figure?.querySelector("[data-cook-media-status]");
  if (!figure || (!video && !sequence) || !control) return inertCleanup();
  const sequenceMode = Boolean(sequence);
  const playbackKey = figure.getAttribute?.("data-cook-media-key") || "";
  const remembered = playbackIntent.get(playbackKey);

  const reducedQuery = matchMedia?.("(prefers-reduced-motion: reduce)");
  let reduced = Boolean(reducedQuery?.matches);
  let inView = !Observer;
  let manualPaused = Boolean(remembered?.manualPaused);
  let explicitPlay = Boolean(remembered?.explicitPlay);
  let failed = false;
  let disposed = false;
  let suspended = false;

  if (video) video.muted = true;

  const setStatus = (message) => {
    if (status) status.textContent = message;
  };
  const setControl = (playing) => {
    if (label)
      label.textContent = sequenceMode
        ? playing
          ? "Pause steps"
          : failed
            ? "Retry steps"
            : "Play steps"
        : playing
          ? "Pause demo"
          : failed
            ? "Replay demo"
            : "Play demo";
    if (playIcon) playIcon.hidden = playing;
    if (pauseIcon) pauseIcon.hidden = !playing;
    control.setAttribute("aria-pressed", String(playing));
  };
  const pause = (
    message = sequenceMode ? "Illustrated steps paused." : "Video paused.",
  ) => {
    video?.pause();
    figure.classList.remove("is-playing");
    figure.classList.remove("is-explicitly-playing");
    setControl(false);
    setStatus(message);
  };
  const allowed = () =>
    !disposed &&
    !suspended &&
    !failed &&
    inView &&
    doc?.visibilityState !== "hidden" &&
    !manualPaused &&
    (!reduced || explicitPlay);
  const play = async () => {
    if (!allowed())
      return pause(
        reduced && !explicitPlay
          ? "Motion reduced. Play the demo when ready."
          : "Video paused.",
      );
    if (video) video.muted = true;
    try {
      if (video) await video.play();
      if (!allowed()) return pause();
      figure.classList.add("is-playing");
      if (explicitPlay) figure.classList.add("is-explicitly-playing");
      setControl(true);
      setStatus(
        sequenceMode ? "Illustrated steps playing." : "Video playing silently.",
      );
    } catch {
      pause(
        sequenceMode
          ? "Illustrated steps could not play. Retry when ready."
          : "Video could not play. Retry when ready.",
      );
    }
  };
  const sync = () => (allowed() ? play() : pause());
  const onControl = () => {
    if (
      sequenceMode ? figure.classList.contains("is-playing") : !video.paused
    ) {
      manualPaused = true;
      explicitPlay = false;
      rememberIntent(playbackKey, { manualPaused, explicitPlay });
      pause(
        sequenceMode
          ? "Illustrated steps paused by you."
          : "Video paused by you.",
      );
      return;
    }
    if (failed) return onRetry();
    manualPaused = false;
    explicitPlay = true;
    rememberIntent(playbackKey, { manualPaused, explicitPlay });
    failed = false;
    figure.classList.remove("has-error");
    if (retry) retry.hidden = true;
    play();
  };
  const onError = () => {
    failed = true;
    pause(
      sequenceMode
        ? "Illustrated steps unavailable. The step photo remains visible. Retry when ready."
        : "Video unavailable. The step photo remains visible. Retry video when ready.",
    );
    figure.classList.add("has-error");
    if (retry) retry.hidden = false;
  };
  const onRetry = () => {
    failed = false;
    manualPaused = false;
    explicitPlay = true;
    rememberIntent(playbackKey, { manualPaused, explicitPlay });
    figure.classList.remove("has-error");
    if (retry) retry.hidden = true;
    if (video) video.load?.();
    else if (sequenceSource) sequenceSource.src = sequenceSource.src;
    play();
  };
  const onVisibility = () => sync();
  const onMotion = (event) => {
    reduced = event.matches;
    if (reduced) {
      explicitPlay = false;
      rememberIntent(playbackKey, { manualPaused, explicitPlay });
    }
    sync();
  };

  control.addEventListener("click", onControl);
  retry?.addEventListener("click", onRetry);
  video?.addEventListener("error", onError);
  sequenceSource?.addEventListener("error", onError);
  doc?.addEventListener?.("visibilitychange", onVisibility);
  reducedQuery?.addEventListener?.("change", onMotion);

  const observer = Observer
    ? new Observer(
        (entries) => {
          const entry = entries.find((item) => item.target === figure);
          if (!entry) return;
          inView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
          sync();
        },
        { threshold: 0.25 },
      )
    : null;
  observer?.observe(figure);
  setControl(false);
  if (reduced)
    setStatus(
      "Motion reduced. A still demonstration is shown. Play the demo when ready.",
    );
  else if (!observer) sync();

  const cleanup = () => {
    if (disposed) return;
    disposed = true;
    pause("Video paused.");
    observer?.disconnect();
    control.removeEventListener("click", onControl);
    retry?.removeEventListener("click", onRetry);
    video?.removeEventListener("error", onError);
    sequenceSource?.removeEventListener("error", onError);
    doc?.removeEventListener?.("visibilitychange", onVisibility);
    reducedQuery?.removeEventListener?.("change", onMotion);
    if (mountedRoots.get(root) === cleanup) mountedRoots.delete(root);
  };
  cleanup.suspend = () => {
    if (disposed || suspended) return;
    suspended = true;
    pause("Video paused while another view is open.");
  };
  cleanup.resume = () => {
    if (disposed || !suspended) return;
    suspended = false;
    sync();
  };
  mountedRoots.set(root, cleanup);
  return cleanup;
}
