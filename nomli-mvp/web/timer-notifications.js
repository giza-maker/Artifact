// Session-owned notification IDs. Cancelling invalidates pending permission/schedule work.
export function createTimerNotifications(getNative, onChange = () => {}) {
  async function cancel(session) {
    if (!session) return;
    session.notificationGeneration = (session.notificationGeneration || 0) + 1;
    const id = session.notificationId;
    session.notificationId = null;
    let failure;
    try {
      await onChange();
    } catch (error) {
      failure = error;
    }
    try {
      const native = getNative();
      if (id != null && native?.isNative) await native.cancelTimer(id);
    } catch (error) {
      failure ??= error;
    }
    if (failure) throw failure;
  }
  async function schedule(session, seconds) {
    const cancellation = cancel(session);
    const generation = session.notificationGeneration;
    await cancellation;
    const native = getNative();
    if (
      !native?.isNative ||
      !session.running ||
      session.notificationGeneration !== generation
    )
      return;
    const id = await native.scheduleTimer(seconds, "Nomli cooking timer");
    if (session.notificationGeneration !== generation || !session.running) {
      await native.cancelTimer(id);
      return;
    }
    session.notificationId = id;
    try {
      await onChange();
    } catch (error) {
      // Never leave an alert alive when its ownership ID was not saved.
      const owned =
        session.notificationGeneration === generation &&
        session.notificationId === id;
      if (owned) {
        session.notificationId = null;
        session.notificationGeneration += 1;
      }
      try {
        await native.cancelTimer(id);
      } catch {
        /* Preserve persistence failure. */
      }
      if (owned) {
        try {
          await onChange();
        } catch {
          /* One bounded cleanup save. */
        }
      }
      throw error;
    }
  }
  return { cancel, schedule };
}
