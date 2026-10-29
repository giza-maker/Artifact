import test from "node:test";
import assert from "node:assert/strict";
import { createCookingSpeechController } from "../web/cooking-speech.js";

const deferred = () => {
  let resolve, reject;
  const promise = new Promise((yes, no) => {
    resolve = yes;
    reject = no;
  });
  return { promise, resolve, reject };
};
const tick = () => new Promise((resolve) => setImmediate(resolve));

function fixture(overrides = {}) {
  const turns = [];
  const calls = [];
  const timers = new Map();
  let timerId = 0;
  const native = {
    isNative: true,
    speakCookingStep(options) {
      const turn = deferred();
      turns.push(turn);
      calls.push(["speak", options]);
      return turn.promise;
    },
    async stopCookingSpeech() {
      calls.push(["stop"]);
    },
    ...overrides,
  };
  const changes = [];
  const controller = createCookingSpeechController({
    native,
    onChange: (state) => changes.push(state),
    setTimer: (fn) => {
      const id = ++timerId;
      timers.set(id, fn);
      return id;
    },
    clearTimer: (id) => timers.delete(id),
    timeoutMs: 50,
    stopTimeoutMs: 50,
  });
  return {
    controller,
    native,
    calls,
    turns,
    changes,
    timeout: () => [...timers.values()][0]?.(),
  };
}

test("validates input and never fakes browser speech", async () => {
  const browser = fixture({ isNative: false });
  await browser.controller.speak("Heat the pan.");
  assert.equal(browser.controller.snapshot().phase, "error");
  assert.match(browser.controller.snapshot().error, /Android app/);
  assert.equal(browser.calls.length, 0);

  const f = fixture();
  for (const value of ["", " ", "x".repeat(3001)]) {
    await f.controller.speak(value);
    assert.match(f.controller.snapshot().error, /1–3000/);
  }
  await f.controller.speak("Valid", " ");
  assert.match(f.controller.snapshot().error, /language is required/);
  assert.equal(f.calls.length, 0);
});

test("moves starting to speaking, passes language, then returns idle on completion", async () => {
  const f = fixture();
  const done = f.controller.speak("  Stir for one minute.  ", "en-US");
  assert.equal(f.controller.snapshot().phase, "speaking");
  assert.deepEqual(f.calls[0], [
    "speak",
    { text: "Stir for one minute.", language: "en-US" },
  ]);
  assert.deepEqual(
    f.changes.map((x) => x.phase),
    ["starting", "speaking"],
  );
  f.turns[0].resolve({ stopped: false });
  await done;
  assert.equal(f.controller.snapshot().phase, "idle");
});

test("preserves actionable native failure", async () => {
  const f = fixture();
  const done = f.controller.speak("Bake until golden.");
  f.turns[0].reject(
    Object.assign(
      new Error("Speech data for this language is not installed."),
      {
        code: "language_missing_data",
      },
    ),
  );
  await done;
  assert.equal(f.controller.snapshot().phase, "error");
  assert.equal(
    f.controller.snapshot().error,
    "Speech data for this language is not installed.",
  );
});

test("stop works while speak promise is pending and late completion is ignored", async () => {
  const f = fixture();
  const speaking = f.controller.speak("Simmer gently.");
  await f.controller.stop();
  assert.equal(f.controller.snapshot().phase, "idle");
  assert.deepEqual(
    f.calls.map((x) => x[0]),
    ["speak", "stop"],
  );
  f.turns[0].resolve({ stopped: true });
  await speaking;
  assert.equal(f.controller.snapshot().phase, "idle");
});

test("late speak rejection after successful stop cannot resurrect an error", async () => {
  const f = fixture();
  const speaking = f.controller.speak("Turn off the heat.");
  await f.controller.stop();
  f.turns[0].reject(new Error("late playback failure"));
  await speaking;
  assert.equal(f.controller.snapshot().phase, "idle");
  assert.equal(f.controller.snapshot().error, "");
});

test("repeated route and visibility cleanup shares one stop and still reaches idle", async () => {
  const spoken = deferred();
  const stopped = deferred();
  let stopCalls = 0;
  let visibilityListener;
  const visibilityTarget = {
    hidden: false,
    addEventListener(_name, listener) {
      visibilityListener = listener;
    },
    removeEventListener() {},
  };
  const controller = createCookingSpeechController({
    native: {
      isNative: true,
      speakCookingStep: () => spoken.promise,
      stopCookingSpeech: () => {
        stopCalls++;
        return stopped.promise;
      },
    },
    visibilityTarget,
  });
  const speaking = controller.speak("Cover and simmer.");
  const routeStop = controller.stop();
  const duplicateStop = controller.stop();
  assert.equal(duplicateStop, routeStop);
  visibilityTarget.hidden = true;
  visibilityListener();
  assert.equal(controller.snapshot().phase, "stopping");
  assert.equal(stopCalls, 1);
  stopped.resolve();
  spoken.resolve({ stopped: true });
  await Promise.all([routeStop, duplicateStop, speaking]);
  assert.equal(controller.snapshot().phase, "idle");
  assert.equal(controller.snapshot().error, "");
});

test("reentrant route and modal cleanup shares stop without stranding stopping", async () => {
  const spoken = deferred();
  const stopped = deferred();
  let controller;
  let modalStop;
  let stopCalls = 0;
  controller = createCookingSpeechController({
    native: {
      isNative: true,
      speakCookingStep: () => spoken.promise,
      stopCookingSpeech: () => {
        stopCalls++;
        return stopped.promise;
      },
    },
    onChange: (state) => {
      if (state.phase === "stopping") modalStop = controller.stop();
    },
  });
  const speaking = controller.speak("Rest before serving.");
  const routeStop = controller.stop();
  assert.equal(modalStop, routeStop);
  assert.equal(stopCalls, 1);
  stopped.resolve();
  spoken.resolve({ stopped: true });
  await Promise.all([routeStop, modalStop, speaking]);
  assert.equal(controller.snapshot().phase, "idle");
});

test("dispose during route stop does not issue a second native stop", async () => {
  const spoken = deferred();
  const stopped = deferred();
  let stopCalls = 0;
  const controller = createCookingSpeechController({
    native: {
      isNative: true,
      speakCookingStep: () => spoken.promise,
      stopCookingSpeech: () => {
        stopCalls++;
        return stopped.promise;
      },
    },
  });
  const speaking = controller.speak("Plate the dish.");
  const stopping = controller.stop();
  controller.dispose();
  assert.equal(stopCalls, 1);
  assert.equal(controller.snapshot().phase, "idle");
  stopped.resolve();
  spoken.resolve({ stopped: true });
  await Promise.all([stopping, speaking]);
  assert.equal(controller.snapshot().phase, "idle");
});

test("old completion cannot overwrite a newer speech turn", async () => {
  const f = fixture();
  const first = f.controller.speak("First step");
  await f.controller.stop();
  const second = f.controller.speak("Second step");
  f.turns[0].reject(new Error("late old failure"));
  await first;
  assert.equal(f.controller.snapshot().phase, "speaking");
  assert.equal(f.controller.snapshot().error, "");
  f.turns[1].resolve({ stopped: false });
  await second;
  assert.equal(f.controller.snapshot().phase, "idle");
});

test("timeout stops native speech, settles call, and ignores late completion", async () => {
  const f = fixture();
  const speaking = f.controller.speak("A long cooking instruction");
  f.timeout();
  await speaking;
  assert.equal(f.controller.snapshot().phase, "error");
  assert.match(f.controller.snapshot().error, /timed out/);
  assert.deepEqual(
    f.calls.map((x) => x[0]),
    ["speak", "stop"],
  );
  f.turns[0].resolve({ stopped: true });
  await tick();
  assert.equal(f.controller.snapshot().phase, "error");
});

test("timeout wins when native stop synchronously resolves pending speak", async () => {
  const spoken = deferred();
  const native = {
    isNative: true,
    speakCookingStep: () => spoken.promise,
    stopCookingSpeech: () => {
      spoken.resolve({ stopped: true });
    },
  };
  let deadline;
  const controller = createCookingSpeechController({
    native,
    setTimer: (fn) => {
      deadline = fn;
      return 1;
    },
    clearTimer: () => {},
  });
  const speaking = controller.speak("Keep stirring.");
  deadline();
  await speaking;
  assert.equal(controller.snapshot().phase, "error");
  assert.match(controller.snapshot().error, /timed out/);
});

test("bounded stop permits a newer speech turn after native stop stalls", async () => {
  const stopped = deferred();
  const f = fixture({
    stopCookingSpeech: () => {
      f.calls.push(["stop"]);
      return stopped.promise;
    },
  });
  const first = f.controller.speak("First instruction");
  const stopping = f.controller.stop();
  assert.equal(f.controller.snapshot().phase, "stopping");
  f.timeout();
  await stopping;
  assert.equal(f.controller.snapshot().phase, "error");
  const second = f.controller.speak("Second instruction");
  assert.equal(f.controller.snapshot().phase, "speaking");
  f.turns[0].resolve({ stopped: true });
  await first;
  f.turns[1].resolve({ stopped: false });
  await second;
  assert.equal(f.controller.snapshot().phase, "idle");
});

test("late old stop failure cannot overwrite newer speech generation", async () => {
  const stopped = deferred();
  const f = fixture({
    stopCookingSpeech: () => stopped.promise,
  });
  const first = f.controller.speak("Old instruction");
  const stopping = f.controller.stop();
  f.timeout();
  await stopping;
  const second = f.controller.speak("Current instruction");
  stopped.reject(new Error("late old stop failure"));
  f.turns[0].resolve({ stopped: true });
  await first;
  await tick();
  assert.equal(f.controller.snapshot().phase, "speaking");
  assert.equal(f.controller.snapshot().error, "");
  f.turns[1].resolve({ stopped: false });
  await second;
  assert.equal(f.controller.snapshot().phase, "idle");
});

test("stop failure is visible; dispose detaches optional visibility listener", async () => {
  const listeners = new Map();
  const visibilityTarget = {
    hidden: false,
    addEventListener(name, fn) {
      listeners.set(name, fn);
    },
    removeEventListener(name, fn) {
      if (listeners.get(name) === fn) listeners.delete(name);
    },
  };
  const native = {
    isNative: true,
    speakCookingStep: () => new Promise(() => {}),
    stopCookingSpeech: async () => {
      throw new Error("Could not stop speech.");
    },
  };
  const controller = createCookingSpeechController({
    native,
    visibilityTarget,
  });
  controller.speak("Boil water.");
  await controller.stop();
  assert.equal(controller.snapshot().error, "Could not stop speech.");
  assert.equal(listeners.has("visibilitychange"), true);
  controller.dispose();
  assert.equal(listeners.size, 0);
  assert.equal(controller.snapshot().phase, "idle");
});
