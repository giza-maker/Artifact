// Retire old ownership before a replacement can become durable.
export async function retireReplacedTimer(previous, next, notifications) {
  if (!previous) return;
  const sameOwner =
    next &&
    previous.id === next.id &&
    (previous.notificationId ?? null) === (next.notificationId ?? null) &&
    (previous.notificationGeneration ?? 0) ===
      (next.notificationGeneration ?? 0);
  if (sameOwner) return;
  try {
    await notifications.cancel(previous, { persist: false });
  } catch (cause) {
    throw new Error(
      "Timer alert could not be cancelled. Change was not saved. Retry.",
      { cause },
    );
  }
}
