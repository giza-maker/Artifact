export const VOICE_LANGUAGES = Object.freeze([
  Object.freeze({ id: "en-US", label: "English" }),
  Object.freeze({ id: "ar-SA", label: "العربية (السعودية)" }),
  Object.freeze({ id: "ar-EG", label: "العربية (مصر)" }),
]);

const busy = new Set(["starting", "listening", "processing"]);
class VoiceValidationError extends Error {}
const nativeErrors = Object.freeze({
  permission_denied:
    "Microphone permission denied. Enable microphone access in device settings, or type your question.",
  unavailable:
    "Voice capture unavailable on this device. Type your question instead.",
  no_match: "No speech recognized. Try again, or type your question.",
  network:
    "Voice capture needs a working connection. Check your connection, or type your question.",
  language_unavailable:
    "Selected voice language unavailable on this device. Choose another language, or type your question.",
  busy: "Microphone busy. Close other recording apps, then try again, or type your question.",
  timeout: "Voice capture timed out. Try again, or type your question.",
  cancelled: "Voice capture cancelled. Try again, or type your question.",
  internal: "Voice capture failed. Try again, or type your question.",
  too_long:
    "Transcript exceeds 2000 characters. Record a shorter question, or type your question.",
});
function errorMessage(error) {
  if (error instanceof VoiceValidationError) return error.message;
  return typeof error?.code === "string" &&
    Object.hasOwn(nativeErrors, error.code)
    ? nativeErrors[error.code]
    : nativeErrors.internal;
}
function validText(text) {
  if (typeof text !== "string" || !text.trim() || text.length > 2000)
    throw new VoiceValidationError(
      "Transcript must contain 1–2000 characters.",
    );
  return text;
}

// Capture owns only ephemeral review text; callers retain ownership of drafts.
export function createVoiceController({
  getNative = () => globalThis.window?.NomliNative,
  onChange = () => {},
  timeoutMs = 40000,
  makeId = () => globalThis.crypto.randomUUID(),
  setTimer = setTimeout,
  clearTimer = clearTimeout,
} = {}) {
  let state = {
    phase: "idle",
    language: "en-US",
    transcript: "",
    error: null,
    requestId: null,
  };
  let active = null;
  const snapshot = () => ({ ...state });
  function update(values) {
    state = { ...state, ...values };
    onChange(snapshot());
  }
  function nativeCancel(attempt) {
    if (!attempt?.native) return;
    try {
      Promise.resolve(
        attempt.native.cancelVoice({ requestId: attempt.id }),
      ).catch(() => {});
    } catch {
      /* Cancellation must still settle local state. */
    }
  }
  function finish(attempt, values, cancelNative = false) {
    if (active !== attempt) return;
    active = null; // Invalidate before native cancellation or UI callbacks.
    clearTimer(attempt.timer);
    if (cancelNative) nativeCancel(attempt);
    update({ requestId: null, ...values });
    attempt.resolve(snapshot());
  }
  function fail(attempt, error) {
    finish(
      attempt,
      {
        phase: "error",
        transcript: "",
        error: errorMessage(error),
      },
      true,
    );
  }
  function start(language) {
    if (active) return Promise.resolve(snapshot());
    if (!VOICE_LANGUAGES.some((item) => item.id === language)) {
      update({
        phase: "error",
        transcript: "",
        error: "Unsupported voice language.",
      });
      return Promise.resolve(snapshot());
    }
    let resolve;
    const completion = new Promise((done) => {
      resolve = done;
    });
    const attempt = { id: makeId(), native: null, resolve, timer: null };
    active = attempt;
    attempt.timer = setTimer(
      () => fail(attempt, { code: "timeout" }),
      timeoutMs,
    );
    update({
      phase: "starting",
      language,
      transcript: "",
      error: null,
      requestId: attempt.id,
    });
    void (async () => {
      try {
        const native = getNative();
        if (
          !native ||
          native.isNative === false ||
          typeof native.voiceStatus !== "function"
        )
          throw new VoiceValidationError(nativeErrors.unavailable);
        attempt.native = native;
        const status = await native.voiceStatus();
        if (active !== attempt) return;
        if (status?.available !== true)
          throw new VoiceValidationError(nativeErrors.unavailable);
        const result = await native.startVoice({
          requestId: attempt.id,
          language,
          onState(event) {
            if (active !== attempt || event?.requestId !== attempt.id) return;
            if (event.state === "processing") update({ phase: "processing" });
            else if (event.state === "listening" && state.phase === "starting")
              update({ phase: "listening" });
          },
        });
        if (active !== attempt) return;
        if (
          !result ||
          result.requestId !== attempt.id ||
          result.language !== language ||
          typeof result.cancelled !== "boolean"
        )
          throw new VoiceValidationError(
            "Invalid voice capture result. Try again, or type your question.",
          );
        if (result.cancelled)
          finish(attempt, { phase: "idle", transcript: "", error: null });
        else
          finish(attempt, {
            phase: "review",
            transcript: validText(result.transcript),
            error: null,
          });
      } catch (error) {
        if (active === attempt) fail(attempt, error);
      }
    })();
    return completion;
  }
  function cancel() {
    if (active)
      finish(active, { phase: "idle", transcript: "", error: null }, true);
    else
      update({ phase: "idle", transcript: "", error: null, requestId: null });
    return Promise.resolve(snapshot());
  }
  function stop() {
    const attempt = active;
    if (!attempt) return Promise.resolve(snapshot());
    if (state.phase === "starting") return cancel();
    if (state.phase === "processing") return Promise.resolve(snapshot());
    update({ phase: "processing" });
    try {
      Promise.resolve(
        attempt.native.stopVoice({ requestId: attempt.id }),
      ).catch((error) => {
        if (active === attempt) fail(attempt, error);
      });
    } catch (error) {
      fail(attempt, error);
    }
    return Promise.resolve(snapshot());
  }
  function editTranscript(text) {
    if (state.phase !== "review")
      throw new Error("Voice transcript is not ready for review.");
    if (typeof text !== "string" || text.length > 2000)
      throw new VoiceValidationError(
        "Transcript must contain at most 2000 characters.",
      );
    update({ transcript: text, error: null });
    return snapshot();
  }
  function useTranscript(currentDraft, { mode } = {}) {
    if (busy.has(state.phase) || state.phase !== "review")
      throw new Error("Voice transcript is not ready for review.");
    if (
      typeof currentDraft !== "string" ||
      !["append", "replace"].includes(mode)
    )
      throw new Error("Choose append or replace.");
    validText(state.transcript);
    const result =
      mode === "replace"
        ? state.transcript
        : currentDraft
          ? `${currentDraft}\n${state.transcript}`
          : state.transcript;
    validText(result);
    update({ phase: "idle", transcript: "", error: null });
    return result;
  }
  return { snapshot, start, stop, cancel, editTranscript, useTranscript };
}
