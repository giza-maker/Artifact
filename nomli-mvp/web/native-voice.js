function voiceError(code) {
  return Object.assign(new Error(`Speech recognition failed: ${code}`), {
    code,
  });
}

export function createNativeVoiceBridge({ loadPlugin, isNative = () => true }) {
  let active;
  const inFlight = new Set();
  const recentIds = [];
  const cancelledResult = ({ requestId, language }) => ({
    requestId,
    language,
    transcript: "",
    cancelled: true,
  });
  function cleanup(listener) {
    // Service/listener teardown must never hold UI ownership or result settlement.
    try {
      Promise.resolve(listener?.remove()).catch(() => {});
    } catch {}
  }
  async function startVoice({ requestId, language, onState } = {}) {
    if (!isNative()) throw voiceError("unavailable");
    if (active) throw voiceError("busy");
    if (typeof requestId !== "string" || !requestId || requestId.length > 128)
      throw voiceError("internal");
    if (inFlight.has(requestId) || recentIds.includes(requestId))
      throw voiceError("cancelled");
    if (!["en-US", "ar-SA", "ar-EG"].includes(language))
      throw voiceError("language_unavailable");
    const turn = {
      requestId,
      language,
      cancelled: false,
      started: false,
      plugin: null,
    };
    active = turn;
    inFlight.add(requestId);
    recentIds.push(requestId);
    if (recentIds.length > 128) recentIds.shift();
    let listener;
    try {
      const plugin = await loadPlugin();
      turn.plugin = plugin;
      if (turn.cancelled) return cancelledResult(turn);
      listener = await plugin.addListener("speechState", (event) => {
        if (
          active === turn &&
          !turn.cancelled &&
          event.requestId === requestId &&
          ["listening", "processing"].includes(event.state) &&
          typeof onState === "function"
        )
          onState(event);
      });
      if (turn.cancelled) return cancelledResult(turn);
      // Synchronous check + dispatch: cancel cannot interleave before native start.
      turn.started = true;
      const result = await plugin.start({ requestId, language });
      return turn.cancelled ? cancelledResult(turn) : result;
    } finally {
      if (active === turn) active = null;
      inFlight.delete(requestId);
      cleanup(listener);
    }
  }
  async function cancelVoice({ requestId } = {}) {
    const turn = active;
    if (!turn || turn.requestId !== requestId) return;
    turn.cancelled = true;
    active = null;
    if (turn.started) await turn.plugin.cancel({ requestId });
  }
  async function stopVoice({ requestId } = {}) {
    const turn = active;
    if (!turn || turn.requestId !== requestId) return;
    if (!turn.started) {
      turn.cancelled = true;
      active = null;
      return;
    }
    await turn.plugin.stop({ requestId });
  }
  async function voiceStatus() {
    if (!isNative()) return { available: false };
    try {
      return await (await loadPlugin()).status();
    } catch {
      return { available: false };
    }
  }
  return { startVoice, stopVoice, cancelVoice, voiceStatus };
}
