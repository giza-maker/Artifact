function voiceError(code) {
  return Object.assign(new Error(`Speech recognition failed: ${code}`), {
    code,
  });
}

// Capacitor plugin proxies synthesize a callable `then`; never await a proxy.
// Loaders must resolve an ordinary handle, then unwrap it synchronously.
function unwrapPlugin(handle) {
  if (
    !handle ||
    typeof handle !== "object" ||
    Array.isArray(handle) ||
    ![Object.prototype, null].includes(Object.getPrototypeOf(handle)) ||
    !Object.hasOwn(handle, "plugin") ||
    !handle.plugin ||
    !["object", "function"].includes(typeof handle.plugin)
  )
    throw voiceError("bridge_unavailable");
  const plugin = handle.plugin;
  if (
    !["status", "start", "addListener"].every(
      (method) => typeof plugin[method] === "function",
    )
  )
    throw voiceError("bridge_unavailable");
  return plugin;
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
      const handle = await loadPlugin();
      const plugin = unwrapPlugin(handle);
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
      const handle = await loadPlugin();
      const plugin = unwrapPlugin(handle);
      const status = await plugin.status();
      if (typeof status?.available !== "boolean")
        throw voiceError("bridge_unavailable");
      return status;
    } catch {
      // Do not expose native/provider details or confuse bridge failure with no service.
      throw voiceError("bridge_unavailable");
    }
  }
  return { startVoice, stopVoice, cancelVoice, voiceStatus };
}
