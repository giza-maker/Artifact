import test from "node:test";
import assert from "node:assert/strict";

test("domain corruption blocks writes until explicit durable discard", async () => {
  let writes = 0;
  const c = createDraftRecovery({
    store: {
      load: async () => ({ snapshot: null, notice: null }),
      save: async () => {
        writes++;
      },
      clear: async () => {},
    },
  });
  await c.load();
  c.block("Invalid scan domain");
  c.update("chat", { question: "Keep in memory" });
  await assert.rejects(c.flush(), /Invalid scan/);
  assert.equal(writes, 0);
  await c.clear();
  assert.equal(c.status().blocked, false);
  assert.equal(c.snapshot().chat, null);
});
import { createDraftRecovery } from "../web/recovery-controller.js";

function backend(initial = null) {
  let disk = structuredClone(initial);
  const writes = [];
  return {
    writes,
    load: async () => ({ snapshot: structuredClone(disk), notice: null }),
    save: async (value) => {
      disk = structuredClone(value);
      writes.push(disk);
    },
    clear: async () => {
      disk = null;
    },
    disk: () => structuredClone(disk),
  };
}
test("separate draft sections survive restart without mutating caller data", async () => {
  const store = backend(),
    controller = createDraftRecovery({ store, delayMs: 10000 });
  await controller.load();
  const scan = { id: "scan-1", fields: { quantity: "٣" } };
  controller.update("scan", scan);
  controller.update("chat", { question: "ماذا أطبخ؟" });
  scan.fields.quantity = "999";
  await controller.flush();
  const restarted = createDraftRecovery({ store });
  await restarted.load();
  assert.equal(restarted.snapshot().scan.fields.quantity, "٣");
  assert.equal(restarted.snapshot().chat.question, "ماذا أطبخ؟");
  controller.update("scan", null);
  await controller.flush();
  assert.equal(store.disk().scan, null);
  assert.equal(store.disk().chat.question, "ماذا أطبخ؟");
});
test("clear during an in-flight write cannot restore old draft", async () => {
  let release,
    first = true,
    disk = null;
  const gate = new Promise((r) => (release = r)),
    store = {
      load: async () => ({ snapshot: null, notice: null }),
      save: async (value) => {
        if (first) {
          first = false;
          await gate;
        }
        disk = structuredClone(value);
      },
      clear: async () => {
        disk = null;
      },
    };
  const c = createDraftRecovery({ store, delayMs: 10000 });
  await c.load();
  c.update("chat", { question: "Old" });
  const writing = c.flush();
  await Promise.resolve();
  const clearing = c.clear();
  release();
  await Promise.all([writing, clearing]);
  assert.equal(c.snapshot().chat, null);
  assert.equal(disk?.chat ?? null, null);
});
test("corrupt storage is not overwritten without explicit discard", async () => {
  const writes = [],
    store = {
      load: async () => ({ snapshot: null, notice: "Corrupt draft preserved" }),
      save: async (v) => writes.push(v),
      clear: async () => writes.push(null),
    };
  const c = createDraftRecovery({ store, delayMs: 10000 });
  await c.load();
  c.update("chat", { question: "New" });
  await assert.rejects(c.flush());
  assert.equal(writes.length, 0);
  await c.clear();
  c.update("chat", { question: "After discard" });
  await c.flush();
  assert.equal(writes.at(-1).chat.question, "After discard");
});
test("saved status follows acknowledgement and failure keeps in-memory work", async () => {
  let rejectWrite;
  const states = [],
    store = {
      load: async () => ({ snapshot: null, notice: null }),
      save: () => new Promise((_, reject) => (rejectWrite = reject)),
      clear: async () => {},
    };
  const c = createDraftRecovery({
    store,
    delayMs: 10000,
    onStatus: (s) => states.push(s.phase),
  });
  await c.load();
  c.update("review", { value: "3" });
  const writing = c.flush();
  await Promise.resolve();
  assert.equal(states.at(-1), "saving");
  rejectWrite(new Error("disk full"));
  await assert.rejects(writing);
  assert.equal(states.at(-1), "error");
  assert.equal(c.snapshot().review.value, "3");
});
