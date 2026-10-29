// Retire old ownership before a replacement can become durable.
export async function retireReplacedTimer(previous, next, notifications) {
  if (!previous) return false;
  const sameOwner =
    next &&
    previous.id === next.id &&
    (previous.notificationId ?? null) === (next.notificationId ?? null) &&
    (previous.notificationGeneration ?? 0) ===
      (next.notificationGeneration ?? 0);
  if (sameOwner) return false;
  try {
    await notifications.cancel(structuredClone(previous), { persist: false });
  } catch (cause) {
    throw new Error(
      "Timer alert could not be cancelled. Change was not saved. Retry.",
      { cause },
    );
  }
  return true;
}

// Restore only a timer that was active before a failed replacement save.
export async function restoreRetiredTimer(
  previous,
  notifications,
  { now = Date.now } = {},
) {
  if (!previous) return false;
  previous.notificationId = null;
  const remaining = Number(previous.deadline) - now();
  if (previous.running && Number.isFinite(remaining) && remaining > 0) {
    await notifications.schedule(previous, Math.ceil(remaining / 1000));
    return true;
  }
  await notifications.cancel(previous);
  return false;
}
