import test from "node:test";
import assert from "node:assert/strict";
import { createTimerNotifications } from "../web/timer-notifications.js";
import { retireReplacedTimer } from "../web/timer-transition.js";
import { createStateStore } from "../web/state-store.js";

async function fixture({ failures = 0 } = {}) {
  const data = { recipes: [{ id: "salad", steps: ["mix"] }], tools: [] };
  let raw;
  const writes = [], cancelled = [];
  const store = createStateStore({ data, storage: {
    getItem: () => raw,
    setItem: (_, value) => { raw = value; writes.push(JSON.parse(value)); },
  } });
  let state = (await store.load()).state;
  state.cooking = {
    id: "cook-1", rid: "salad", recipeName: "Salad", servings: 1,
    phase: "cooking", prepared: [], toolsConfirmed: true, step: 0,
    seconds: 60, running: true, deadline: 1800000000000,
    startedAt: "2026-10-27T12:00:00.000Z", requirements: [], allocations: [],
    notificationId: 12, notificationGeneration: 1,
  };
  await store.save(state);
  const failure = new Error("Native cancellation failed");
  const notifications = createTimerNotifications(() => ({
    isNative: true,
    cancelTimer: async id => {
      cancelled.push(id);
      if (failures-- > 0) throw failure;
    },
  }), () => assert.fail("Transition must persist through outer commit only"));
  async function commit(mutate) {
    const before = structuredClone(state);
    try {
      mutate(state);
      await retireReplacedTimer(before.cooking, state.cooking, notifications);
      await store.save(state);
    } catch (error) {
      state = before;
      throw error;
    }
  }
  return { store, commit, writes, cancelled, failure, state: () => state };
}

test("failed cancellation blocks replacement persist, retains retryable durable ID", async () => {
  const f = await fixture({ failures: 1 });
  const replace = state => { state.cooking = null; };
  await assert.rejects(f.commit(replace), error => {
    assert.equal(error.message, "Timer alert could not be cancelled. Change was not saved. Retry.");
    return error.cause === f.failure;
  });
  assert.equal(f.writes.length, 1);
  assert.equal(f.state().cooking.notificationId, 12);
  assert.equal(f.state().cooking.running, true);
  assert.equal((await f.store.load()).state.cooking.notificationId, 12);
  await f.commit(replace);
  assert.deepEqual(f.cancelled, [12, 12]);
  assert.equal((await f.store.load()).state.cooking, null);
});

test("unrelated cloned state preserves same timer ownership", async () => {
  const f = await fixture();
  await f.commit(state => {
    state.cooking = structuredClone(state.cooking);
    state.budget += 1;
  });
  assert.deepEqual(f.cancelled, []);
  assert.equal(f.writes.at(-1).cooking.notificationId, 12);
  assert.equal(f.state().cooking.running, true);
});

test("removal and each ownership change cancel prior native timer", async () => {
  for (const mutate of [
    state => { state.cooking = null; },
    state => { state.cooking.id = "cook-2"; },
    state => { state.cooking.notificationId = 13; },
    state => { state.cooking.notificationGeneration += 1; },
  ]) {
    const f = await fixture();
    await f.commit(mutate);
    assert.deepEqual(f.cancelled, [12]);
    assert.equal(f.writes.length, 2);
    if (f.state().cooking) assert.equal(f.state().cooking.running, true);
  }
});
