// Session-owned notification IDs. Cancelling invalidates pending permission/schedule work.
export function createTimerNotifications(getNative, onChange = () => {}) {
  async function cancel(session) {
    if (!session) return;
    session.notificationGeneration = (session.notificationGeneration || 0) + 1;
    const id = session.notificationId;
    session.notificationId = null;
    onChange();
    if (id != null && getNative()?.isNative) await getNative().cancelTimer(id);
  }
  async function schedule(session, seconds) {
    await cancel(session);
    const native = getNative();
    if (!native?.isNative || !session.running) return;
    const generation = session.notificationGeneration;
    const id = await native.scheduleTimer(seconds, "Nomli cooking timer");
    if (session.notificationGeneration !== generation || !session.running) {
      await native.cancelTimer(id);
      return;
    }
    session.notificationId = id;
    onChange();
  }
  return { cancel, schedule };
}
