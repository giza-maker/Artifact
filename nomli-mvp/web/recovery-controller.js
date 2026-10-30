const copy = (value) => structuredClone(value);
const empty = () => ({
  version: 1,
  updatedAt: new Date().toISOString(),
  chat: null,
  review: null,
  scan: null,
});
const sections = new Set(["chat", "review", "scan"]);

// Draft state has its own queue. A successful stock save never waits for a
// speculative write, and an older completion cannot resurrect a cleared draft.
export function createDraftRecovery({
  store,
  delayMs = 150,
  onStatus = () => {},
}) {
  let current = empty(),
    revision = 0,
    acknowledged = 0,
    timer = null,
    flight = null,
    clearing = null;
  let loaded = false,
    blocked = false,
    error = "",
    phase = "loading",
    savedAt = null;
  const hasDrafts = () =>
    Boolean(current.chat || current.review || current.scan);
  const status = () => ({
    phase,
    error,
    blocked,
    hasDrafts: hasDrafts(),
    savedAt,
  });
  function notify(next) {
    phase = next;
    onStatus(status());
  }
  function stopTimer() {
    clearTimeout(timer);
    timer = null;
  }
  async function load() {
    const result = await store.load();
    current = result.snapshot ? copy(result.snapshot) : empty();
    blocked = Boolean(result.notice);
    error = result.notice || "";
    loaded = true;
    notify(blocked ? "error" : hasDrafts() ? "saved" : "empty");
    return { snapshot: copy(current), notice: result.notice };
  }
  function update(section, value) {
    if (!loaded) throw new Error("Draft recovery has not loaded.");
    if (!sections.has(section)) throw new TypeError("Unknown draft section.");
    if (JSON.stringify(current[section]) === JSON.stringify(value)) return;
    current = {
      ...current,
      [section]: copy(value),
      updatedAt: new Date().toISOString(),
    };
    revision++;
    notify(blocked ? "error" : "saving");
    stopTimer();
    if (!blocked)
      timer = setTimeout(() => {
        void flush().catch(() => {});
      }, delayMs);
  }
  async function flush() {
    stopTimer();
    if (blocked) throw new Error(error || "Saved draft data needs attention.");
    if (clearing) {
      await clearing;
      return revision > acknowledged ? flush() : copy(current);
    }
    if (flight) {
      await flight;
      return revision > acknowledged ? flush() : copy(current);
    }
    if (revision <= acknowledged) return copy(current);
    const target = revision,
      value = copy(current);
    notify("saving");
    const operation = (async () => {
      try {
        await store.save(value);
        acknowledged = Math.max(acknowledged, target);
        savedAt = new Date().toISOString();
        error = "";
        if (revision === target) notify(hasDrafts() ? "saved" : "empty");
      } catch (cause) {
        error = cause?.message || "Draft could not be saved.";
        notify("error");
        throw cause;
      }
    })();
    flight = operation;
    try {
      await operation;
    } finally {
      if (flight === operation) flight = null;
    }
    return revision > acknowledged ? flush() : copy(current);
  }
  async function clear() {
    stopTimer();
    current = empty();
    revision++;
    const target = revision,
      older = flight,
      previousClear = clearing;
    notify("saving");
    const operation = (async () => {
      await previousClear?.catch(() => {});
      await older?.catch(() => {});
      try {
        await store.clear();
        acknowledged = Math.max(acknowledged, target);
        blocked = false;
        error = "";
        savedAt = new Date().toISOString();
        if (revision === target) notify("empty");
      } catch (cause) {
        error = cause?.message || "Draft could not be cleared.";
        notify("error");
        throw cause;
      }
    })();
    clearing = operation;
    try {
      await operation;
    } finally {
      if (clearing === operation) clearing = null;
    }
    return revision > acknowledged ? flush() : copy(current);
  }
  function block(message) {
    stopTimer();
    blocked = true;
    error = message;
    notify("error");
  }
  return Object.freeze({
    load,
    update,
    flush,
    clear,
    block,
    snapshot: () => copy(current),
    status,
  });
}
