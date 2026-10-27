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
  while (!finish) await Promise.resolve();
  session.running = false;
  await notifications.cancel(session);
  finish(99);
  await pending;
  assert.deepEqual(cancelled, [99]);
  assert.equal(session.notificationId, null);
});

test("failed notification ID persistence cancels alert and saves cleared ownership", async () => {
  const cancelled = [], snapshots = [];
  const session = { running: true };
  const failure = new Error("Storage full");
  const notifications = createTimerNotifications(() => ({
    isNative: true,
    scheduleTimer: async () => 42,
    cancelTimer: async id => cancelled.push(id),
  }), async () => {
    snapshots.push(structuredClone(session));
    if (session.notificationId === 42) throw failure;
  });
  await assert.rejects(notifications.schedule(session, 120), error => error === failure);
  assert.deepEqual(cancelled, [42]);
  assert.equal(session.notificationId, null);
  assert.equal(snapshots.length, 3);
  assert.equal(snapshots.at(-1).notificationId, null);
  assert.ok(snapshots.at(-1).notificationGeneration > snapshots[1].notificationGeneration);
});

test("cancel still removes native alert when persistence rejects", async () => {
  const cancelled = [];
  const failure = new Error("Storage unavailable");
  const session = { running: true, notificationId: 12 };
  const notifications = createTimerNotifications(() => ({
    isNative: true, cancelTimer: async id => cancelled.push(id),
  }), async () => { throw failure; });
  await assert.rejects(notifications.cancel(session), error => error === failure);
  assert.deepEqual(cancelled, [12]);
  assert.equal(session.notificationId, null);
});

test("replacement generation cancels late native result without replacing current ID", async () => {
  let finish;
  const cancelled = [];
  let calls = 0;
  const notifications = createTimerNotifications(() => ({
    isNative: true,
    scheduleTimer: () => ++calls === 1 ? new Promise(resolve => { finish = resolve; }) : Promise.resolve(43),
    cancelTimer: async id => cancelled.push(id),
  }), async () => {});
  const session = { running: true };
  const old = notifications.schedule(session, 120);
  while (!finish) await Promise.resolve();
  await notifications.schedule(session, 60);
  finish(42);
  await old;
  assert.deepEqual(cancelled, [42]);
  assert.equal(session.notificationId, 43);
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

test("cancel during initial persistence prevents native scheduling", async () => {
  let finish, saves = 0, scheduled = false;
  const notifications = createTimerNotifications(() => ({
    isNative: true,
    scheduleTimer: async () => { scheduled = true; return 42; },
    cancelTimer: async () => {},
  }), () => ++saves === 1 ? new Promise(resolve => { finish = resolve; }) : Promise.resolve());
  const session = { running: true };
  const pending = notifications.schedule(session, 120);
  await notifications.cancel(session);
  finish();
  await pending;
  assert.equal(scheduled, false);
});
