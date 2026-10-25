import test from "node:test";
import assert from "node:assert/strict";
import { createTimerNotifications } from "../web/timer-notifications.js";

test("native timer replacement cancels prior notification and retains new ID", async () => {
  const cancelled = [];
  const native = {
    isNative: true,
    cancelTimer: async (id) => cancelled.push(id),
    scheduleTimer: async () => 42,
  };
  const notifications = createTimerNotifications(() => native);
  const session = { running: true, notificationId: 12 };
  await notifications.schedule(session, 120);
  assert.deepEqual(cancelled, [12]);
  assert.equal(session.notificationId, 42);
  session.running = false;
  await notifications.cancel(session);
  assert.deepEqual(cancelled, [12, 42]);
  assert.equal(session.notificationId, null);
});

test("pause during pending permission/scheduling cancels late notification", async () => {
  let finish;
  const cancelled = [];
  const native = {
    isNative: true,
    cancelTimer: async (id) => cancelled.push(id),
    scheduleTimer: () =>
      new Promise((resolve) => {
        finish = resolve;
      }),
  };
  const notifications = createTimerNotifications(() => native);
  const session = { running: true };
  const pending = notifications.schedule(session, 120);
  await Promise.resolve();
  session.running = false;
  await notifications.cancel(session);
  finish(99);
  await pending;
  assert.deepEqual(cancelled, [99]);
  assert.equal(session.notificationId, null);
});

test("web timer does not request native notification permissions", async () => {
  const notifications = createTimerNotifications(() => ({
    isNative: false,
    scheduleTimer() {
      throw new Error("Must not call native");
    },
  }));
  const session = { running: true };
  await notifications.schedule(session, 120);
  assert.equal(session.notificationId, null);
});
