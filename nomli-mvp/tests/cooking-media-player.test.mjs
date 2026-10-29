import assert from "node:assert/strict";
import test from "node:test";
import { renderCookingStepMedia } from "../web/cooking-media-view.js";
import { mountCookingMedia } from "../web/cooking-media-player.js";

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
const icon = (name) => `<i data-icon="${name}"></i>`;

test("step media renders local video, accessible copy, and stable dimensions", () => {
  const html = renderCookingStepMedia(
    {
      poster: "images/steps/onions.webp",
      video: "videos/steps/onions.mp4",
      alt: "Onions turning translucent in a pan",
      lookFor: "soft edges with no browning",
      title: "Soften the onions",
      recipeId: "lentil-soup",
      stepIndex: 1,
      playbackKey: "session-a:recipe:1",
    },
    { esc, icon },
  );

  assert.match(html, /<figure class="cook-step-media has-video"/);
  assert.match(html, /muted playsinline loop preload="none"/);
  assert.match(html, /aria-label="Onions turning translucent in a pan"/);
  assert.match(html, /width="390" height="220"/);
  assert.match(html, /Visual demonstration/);
  assert.match(html, /Look for:<\/b> soft edges with no browning/);
  assert.match(html, /Play demo/);
  assert.match(html, /data-cook-media-key="session-a:recipe:1"/);
  assert.match(html, /data-cook-media-pause-icon hidden/);
});

test("step media refuses remote media URLs", () => {
  assert.equal(
    renderCookingStepMedia(
      { poster: "https://example.com/a.webp" },
      { esc, icon },
    ),
    "",
  );
  const html = renderCookingStepMedia(
    { poster: "images/a.webp", video: "//cdn.example.com/a.mp4" },
    { esc, icon },
  );
  assert.doesNotMatch(html, /<video/);
});

test("sequence media renders four matched cells with specific accessible guidance", () => {
  const html = renderCookingStepMedia(
    {
      kind: "sequence",
      poster: "media/cooking/fold-poster.webp",
      sequence: "media/cooking/fold-sequence.webp",
      alt: "Four stages showing dough folded from left edge to center",
      lookFor: "a taut top without tearing",
      title: "Fold the dough",
      recipeId: "flatbread",
      stepIndex: 3,
    },
    { esc, icon },
  );

  assert.match(html, /has-sequence/);
  assert.match(html, /Illustrated steps/);
  assert.match(
    html,
    /aria-label="Four stages showing dough folded from left edge to center"/,
  );
  assert.equal(
    (
      html.match(
        /cook-step-media__sequence-stage cook-step-media__sequence-stage--/g,
      ) ?? []
    ).length,
    4,
  );
  assert.match(html, /Play steps/);
  assert.doesNotMatch(html, /<video/);
});

class Target {
  constructor() {
    this.listeners = new Map();
  }
  addEventListener(type, fn) {
    this.listeners.set(type, fn);
  }
  removeEventListener(type, fn) {
    if (this.listeners.get(type) === fn) this.listeners.delete(type);
  }
  emit(type, event = {}) {
    this.listeners.get(type)?.(event);
  }
}

test("player honors visibility, manual pause, reduced motion, errors, and cleanup", async () => {
  const figure = new Target();
  figure.classList = {
    values: new Set(),
    add(v) {
      this.values.add(v);
    },
    remove(v) {
      this.values.delete(v);
    },
  };
  const video = new Target();
  video.paused = true;
  video.playCount = 0;
  video.pauseCount = 0;
  video.play = async () => {
    video.paused = false;
    video.playCount += 1;
  };
  video.pause = () => {
    video.paused = true;
    video.pauseCount += 1;
  };
  video.load = () => {};
  const control = new Target();
  control.attrs = {};
  control.setAttribute = (key, value) => {
    control.attrs[key] = value;
  };
  const retry = new Target();
  retry.hidden = true;
  const label = { textContent: "" };
  const playIcon = { hidden: false };
  const pauseIcon = { hidden: true };
  const status = { textContent: "" };
  figure.querySelector = (selector) =>
    ({
      "[data-cook-media-video]": video,
      "[data-cook-media-control]": control,
      "[data-cook-media-label]": label,
      "[data-cook-media-play-icon]": playIcon,
      "[data-cook-media-pause-icon]": pauseIcon,
      "[data-cook-media-retry]": retry,
      "[data-cook-media-status]": status,
    })[selector];
  const root = { matches: () => false, querySelector: () => figure };
  const doc = new Target();
  doc.visibilityState = "visible";
  const motion = new Target();
  motion.matches = false;
  let observer;
  class Observer {
    constructor(cb) {
      this.cb = cb;
      observer = this;
    }
    observe(target) {
      this.target = target;
    }
    disconnect() {
      this.disconnected = true;
    }
  }

  const cleanup = mountCookingMedia(root, {
    document: doc,
    IntersectionObserver: Observer,
    matchMedia: () => motion,
  });
  observer.cb([{ target: figure, isIntersecting: true, intersectionRatio: 1 }]);
  await Promise.resolve();
  assert.equal(video.playCount, 1);
  assert.equal(label.textContent, "Pause demo");
  assert.equal(pauseIcon.hidden, false);

  control.emit("click");
  observer.cb([
    { target: figure, isIntersecting: false, intersectionRatio: 0 },
  ]);
  observer.cb([{ target: figure, isIntersecting: true, intersectionRatio: 1 }]);
  await Promise.resolve();
  assert.equal(
    video.playCount,
    1,
    "manual pause survives intersection changes",
  );

  motion.emit("change", { matches: true });
  assert.equal(
    video.paused,
    true,
    "new reduced-motion preference pauses autoplay",
  );
  control.emit("click");
  await Promise.resolve();
  assert.equal(video.playCount, 2, "explicit play overrides reduced motion");

  video.emit("error");
  assert.equal(retry.hidden, false);
  assert.match(status.textContent, /step photo remains visible/i);
  let loaded = false;
  video.load = () => {
    loaded = true;
  };
  control.emit("click");
  await Promise.resolve();
  assert.equal(
    loaded,
    true,
    "Replay control reloads failed video before playing",
  );
  assert.equal(retry.hidden, true);

  cleanup();
  assert.equal(observer.disconnected, true);
  assert.equal(control.listeners.size, 0);
});

test("cleanup wins a pending play promise", async () => {
  let resolvePlay;
  const video = new Target();
  video.paused = true;
  video.play = () =>
    new Promise((resolve) => {
      resolvePlay = () => {
        video.paused = false;
        resolve();
      };
    });
  video.pause = () => {
    video.paused = true;
  };
  const control = new Target();
  control.setAttribute = () => {};
  const figure = new Target();
  figure.classList = { add() {}, remove() {} };
  figure.querySelector = (selector) =>
    ({
      "[data-cook-media-video]": video,
      "[data-cook-media-control]": control,
    })[selector] ?? null;
  const root = { matches: () => false, querySelector: () => figure };
  const doc = new Target();
  doc.visibilityState = "visible";
  let observer;
  class Observer {
    constructor(cb) {
      this.cb = cb;
      observer = this;
    }
    observe() {}
    disconnect() {}
  }
  const cleanup = mountCookingMedia(root, {
    document: doc,
    IntersectionObserver: Observer,
    matchMedia: () => ({ matches: false }),
  });
  observer.cb([{ target: figure, isIntersecting: true, intersectionRatio: 1 }]);
  cleanup();
  resolvePlay();
  await Promise.resolve();
  assert.equal(video.paused, true);
});

test("suspend wins pending play and resume preserves manual pause", async () => {
  const pending = [];
  const video = new Target();
  video.paused = true;
  video.playCount = 0;
  video.play = () => {
    video.playCount += 1;
    return new Promise((resolve) =>
      pending.push(() => {
        video.paused = false;
        resolve();
      }),
    );
  };
  video.pause = () => {
    video.paused = true;
  };
  const control = new Target();
  control.setAttribute = () => {};
  const figure = new Target();
  figure.classList = { add() {}, remove() {} };
  figure.querySelector = (selector) =>
    ({
      "[data-cook-media-video]": video,
      "[data-cook-media-control]": control,
    })[selector] ?? null;
  const root = { matches: () => false, querySelector: () => figure };
  const doc = new Target();
  doc.visibilityState = "visible";
  let observer;
  class Observer {
    constructor(cb) {
      this.cb = cb;
      observer = this;
    }
    observe() {}
    disconnect() {}
  }
  const cleanup = mountCookingMedia(root, {
    document: doc,
    IntersectionObserver: Observer,
    matchMedia: () => ({ matches: false }),
  });

  observer.cb([{ target: figure, isIntersecting: true, intersectionRatio: 1 }]);
  cleanup.suspend();
  pending.shift()();
  await Promise.resolve();
  assert.equal(video.paused, true, "pending play is paused after suspension");

  cleanup.resume();
  assert.equal(video.playCount, 2, "resume restarts eligible autoplay");
  pending.shift()();
  await Promise.resolve();
  control.emit("click");
  assert.equal(video.paused, true);

  cleanup.suspend();
  cleanup.resume();
  await Promise.resolve();
  assert.equal(video.playCount, 2, "resume does not override manual pause");
  cleanup();
});

test("sequence playback uses shared visibility, reduced-motion, manual-pause, and cleanup gates", async () => {
  const sequence = new Target();
  const source = new Target();
  source.src = "media/cooking/fold-sequence.webp";
  const control = new Target();
  control.setAttribute = () => {};
  const label = { textContent: "" };
  const classes = new Set();
  const figure = new Target();
  figure.classList = {
    add(value) {
      classes.add(value);
    },
    remove(value) {
      classes.delete(value);
    },
    contains(value) {
      return classes.has(value);
    },
  };
  figure.querySelector = (selector) =>
    ({
      "[data-cook-media-sequence]": sequence,
      "[data-cook-media-sequence-source]": source,
      "[data-cook-media-control]": control,
      "[data-cook-media-label]": label,
    })[selector] ?? null;
  const root = { matches: () => false, querySelector: () => figure };
  const doc = new Target();
  doc.visibilityState = "visible";
  const motion = new Target();
  motion.matches = true;
  let observer;
  class Observer {
    constructor(cb) {
      this.cb = cb;
      observer = this;
    }
    observe() {}
    disconnect() {
      this.disconnected = true;
    }
  }
  const cleanup = mountCookingMedia(root, {
    document: doc,
    IntersectionObserver: Observer,
    matchMedia: () => motion,
  });

  observer.cb([{ target: figure, isIntersecting: true, intersectionRatio: 1 }]);
  await Promise.resolve();
  assert.equal(
    classes.has("is-playing"),
    false,
    "reduced motion keeps sequence still",
  );
  control.emit("click");
  await Promise.resolve();
  assert.equal(classes.has("is-playing"), true);
  assert.equal(classes.has("is-explicitly-playing"), true);
  assert.equal(label.textContent, "Pause steps");

  control.emit("click");
  cleanup.suspend();
  cleanup.resume();
  await Promise.resolve();
  assert.equal(
    classes.has("is-playing"),
    false,
    "manual pause survives lifecycle suspension",
  );

  cleanup();
  assert.equal(observer.disconnected, true);
  assert.equal(source.listeners.size, 0);
});

test("manual pause survives same-key remount but not a different playback key", async () => {
  const mounts = [];
  const makeMount = (key) => {
    const video = new Target();
    video.paused = true;
    video.playCount = 0;
    video.play = async () => {
      video.paused = false;
      video.playCount += 1;
    };
    video.pause = () => {
      video.paused = true;
    };
    const control = new Target();
    control.setAttribute = () => {};
    const classes = new Set();
    const figure = new Target();
    figure.classList = {
      add(value) {
        classes.add(value);
      },
      remove(value) {
        classes.delete(value);
      },
      contains(value) {
        return classes.has(value);
      },
    };
    figure.getAttribute = (name) =>
      name === "data-cook-media-key" ? key : null;
    figure.querySelector = (selector) =>
      ({
        "[data-cook-media-video]": video,
        "[data-cook-media-control]": control,
      })[selector] ?? null;
    const root = { matches: () => false, querySelector: () => figure };
    const doc = new Target();
    doc.visibilityState = "visible";
    let observer;
    class Observer {
      constructor(cb) {
        this.cb = cb;
        observer = this;
      }
      observe() {}
      disconnect() {}
    }
    const cleanup = mountCookingMedia(root, {
      document: doc,
      IntersectionObserver: Observer,
      matchMedia: () => ({ matches: false }),
    });
    const value = {
      video,
      control,
      cleanup,
      show: () =>
        observer.cb([
          { target: figure, isIntersecting: true, intersectionRatio: 1 },
        ]),
    };
    mounts.push(value);
    return value;
  };

  const first = makeMount("session-1:recipe-a:2");
  first.show();
  await Promise.resolve();
  first.control.emit("click");
  first.cleanup();

  const same = makeMount("session-1:recipe-a:2");
  same.show();
  await Promise.resolve();
  assert.equal(
    same.video.playCount,
    0,
    "same-step rerender preserves user pause",
  );

  const different = makeMount("session-1:recipe-a:3");
  different.show();
  await Promise.resolve();
  assert.equal(
    different.video.playCount,
    1,
    "new step starts with default autoplay eligibility",
  );
  same.cleanup();
  different.cleanup();
});
