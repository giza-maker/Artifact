const MAX_TEXT_LENGTH = 3000;
const DEFAULT_TIMEOUT_MS = 120000;
const DEFAULT_STOP_TIMEOUT_MS = 5000;

function messageOf(error) {
  const message =
    typeof error?.message === "string" ? error.message.trim() : "";
  return message || "Cooking speech failed. Try Read step again.";
}

export function createCookingSpeechController({
  native,
  onChange = () => {},
  setTimer = setTimeout,
  clearTimer = clearTimeout,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  stopTimeoutMs = DEFAULT_STOP_TIMEOUT_MS,
  visibilityTarget = globalThis.document ?? null,
} = {}) {
  let state = { phase: "idle", error: "" };
  let generation = 0;
  let disposed = false;
  let timer = null;
  let stopOperation = null;

  const emit = (next) => {
    state = Object.freeze({ ...next });
    onChange(state);
  };
  const snapshot = () => ({ ...state });
  const clearDeadline = () => {
    if (timer !== null) clearTimer(timer);
    timer = null;
  };
  const stopNative = async () => {
    if (typeof native?.stopCookingSpeech === "function")
      await native.stopCookingSpeech();
  };
  const withTimeout = (promise, milliseconds, message) => {
    let timeout;
    const deadline = new Promise((_, reject) => {
      timeout = setTimer(() => reject(new Error(message)), milliseconds);
    });
    return Promise.race([Promise.resolve(promise), deadline]).finally(() =>
      clearTimer(timeout),
    );
  };

  async function speak(text, language = "en-US") {
    if (disposed) throw new Error("Cooking speech controller is disposed.");
    if (
      state.phase === "starting" ||
      state.phase === "speaking" ||
      state.phase === "stopping"
    )
      return snapshot();
    if (
      native?.isNative !== true ||
      typeof native?.speakCookingStep !== "function"
    ) {
      emit({
        phase: "error",
        error: "Read aloud requires the Nomli Android app.",
      });
      return snapshot();
    }
    const cleanText = typeof text === "string" ? text.trim() : "";
    if (!cleanText || cleanText.length > MAX_TEXT_LENGTH) {
      emit({
        phase: "error",
        error: "Cooking step must contain 1–3000 characters.",
      });
      return snapshot();
    }
    const cleanLanguage = typeof language === "string" ? language.trim() : "";
    if (!cleanLanguage) {
      emit({ phase: "error", error: "Cooking speech language is required." });
      return snapshot();
    }

    const mine = ++generation;
    clearDeadline();
    emit({ phase: "starting", error: "" });
    let rejectTimeout;
    const timedOut = new Promise((_, reject) => {
      rejectTimeout = reject;
    });
    timer = setTimer(() => {
      if (mine !== generation || disposed) return;
      rejectTimeout(
        new Error("Cooking speech timed out. Try Read step again."),
      );
      Promise.resolve()
        .then(stopNative)
        .catch(() => {});
    }, timeoutMs);

    try {
      const pending = native.speakCookingStep({
        text: cleanText,
        language: cleanLanguage,
      });
      if (mine === generation && !disposed)
        emit({ phase: "speaking", error: "" });
      await Promise.race([Promise.resolve(pending), timedOut]);
      if (mine === generation && !disposed) emit({ phase: "idle", error: "" });
    } catch (error) {
      if (mine === generation && !disposed)
        emit({ phase: "error", error: messageOf(error) });
    } finally {
      if (mine === generation) clearDeadline();
    }
    return snapshot();
  }

  function stop() {
    if (disposed) return Promise.resolve(snapshot());
    if (state.phase === "stopping")
      return stopOperation ?? Promise.resolve(snapshot());
    const wasActive = state.phase === "starting" || state.phase === "speaking";
    const mine = ++generation;
    clearDeadline();
    if (!wasActive) return Promise.resolve(snapshot());
    let settleOperation;
    const operation = new Promise((resolve) => {
      settleOperation = resolve;
    });
    stopOperation = operation;
    emit({ phase: "stopping", error: "" });
    (async () => {
      try {
        await withTimeout(
          stopNative(),
          stopTimeoutMs,
          "Cooking speech could not stop. Try again.",
        );
        if (mine === generation && !disposed)
          emit({ phase: "idle", error: "" });
      } catch (error) {
        if (mine === generation && !disposed)
          emit({ phase: "error", error: messageOf(error) });
      } finally {
        if (stopOperation === operation) stopOperation = null;
      }
      settleOperation(snapshot());
    })();
    return operation;
  }

  const onVisibility = () => {
    if (visibilityTarget?.hidden) stop();
  };
  visibilityTarget?.addEventListener?.("visibilitychange", onVisibility);

  function dispose() {
    if (disposed) return;
    visibilityTarget?.removeEventListener?.("visibilitychange", onVisibility);
    const wasActive =
      state.phase === "starting" ||
      state.phase === "speaking" ||
      state.phase === "stopping";
    disposed = true;
    generation++;
    clearDeadline();
    if (wasActive && !stopOperation) stopNative().catch(() => {});
    state = Object.freeze({ phase: "idle", error: "" });
  }

  return Object.freeze({ snapshot, speak, stop, dispose });
}
