import test from "node:test";
import assert from "node:assert/strict";
import {
  recoveryStatusText,
  renderRecoveryShelf,
} from "../web/recovery-ui.js";

test("unfinished scan renders resume and discard actions", () => {
  const html = renderRecoveryShelf({
    status: { phase: "saved", hasDrafts: true },
    scan: { stage: "review", draft: { kind: "receipt scan", lines: [{}, {}] } },
  });

  assert.match(html, /Unfinished receipt scan/);
  assert.match(html, /2 lines ready to review/);
  assert.match(html, /data-action="recovery-resume-scan"/);
  assert.match(html, /data-action="recovery-discard-scan"/);
  assert.match(html, /data-recovery-status/);
});

test("blocked corrupt state offers discard all without retry", () => {
  const html = renderRecoveryShelf({
    status: {
      phase: "error",
      blocked: true,
      hasDrafts: false,
      error: "Saved recovery data is corrupt.",
    },
  });

  assert.match(html, /data-action="recovery-discard-all"/);
  assert.doesNotMatch(html, /data-action="recovery-retry-save"/);
  assert.match(html, /role="status"/);
});

test("interrupted scan without parsed lines still offers resume and discard", () => {
  const html = renderRecoveryShelf({
    status: { phase: "saved", hasDrafts: true },
    scan: { stage: "scanning", draft: null },
  });

  assert.match(html, /Scan interrupted\. Source saved when available\./);
  assert.match(html, /data-action="recovery-resume-scan"/);
  assert.match(html, /data-action="recovery-discard-scan"/);
});

test("informational notice is escaped and does not become a blocked error", () => {
  const html = renderRecoveryShelf({
    status: { phase: "saved", blocked: false, hasDrafts: true },
    scan: { stage: "review", draft: { kind: "grocery scan", lines: [{}] } },
    notice: '<b>Photo unavailable</b>',
  });

  assert.match(html, /&lt;b&gt;Photo unavailable&lt;\/b&gt;/);
  assert.doesNotMatch(html, /draft-recovery--error/);
  assert.doesNotMatch(html, /data-action="recovery-discard-all"/);
});

test("recoverable save error offers retry and discard all", () => {
  const html = renderRecoveryShelf({
    status: { phase: "error", error: "disk full", hasDrafts: true },
  });

  assert.match(html, /data-action="recovery-retry-save"/);
  assert.match(html, /data-action="recovery-discard-all"/);
  assert.equal(recoveryStatusText({ phase: "error", error: "disk full" }), "disk full");
});

test("dynamic recovery copy is escaped", () => {
  const html = renderRecoveryShelf({
    status: { phase: "error", error: '<img src=x onerror="bad()">' },
    scan: {
      stage: "review",
      draft: { kind: '<script>bad()</script>', lines: [{}] },
    },
    chatNotice: '<svg onload="bad()">',
  });

  assert.doesNotMatch(html, /<script>|<img|<svg/);
  assert.match(html, /&lt;script&gt;bad\(\)&lt;\/script&gt;/);
  assert.match(html, /&lt;img src=x onerror=&quot;bad\(\)&quot;&gt;/);
  assert.match(html, /&lt;svg onload=&quot;bad\(\)&quot;&gt;/);
});

test("normal empty recovery state adds no shelf clutter", () => {
  assert.equal(
    renderRecoveryShelf({
      status: { phase: "empty", error: "", blocked: false, hasDrafts: false },
      scan: null,
      notice: "",
      chatNotice: "",
    }),
    "",
  );
});

test("saving status alone stays in active form instead of global shelf", () => {
  assert.equal(
    renderRecoveryShelf({
      status: { phase: "saving", blocked: false, hasDrafts: true },
    }),
    "",
  );
});
