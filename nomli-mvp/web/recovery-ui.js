"use strict";

const escapeHtml = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

export function recoveryStatusText(status = {}) {
  if (status.blocked)
    return (
      status.error || "Saved drafts need attention before Nomli can continue."
    );
  if (status.phase === "loading") return "Checking saved drafts…";
  if (status.phase === "saving") return "Saving draft…";
  if (status.phase === "error")
    return status.error || "Draft could not be saved.";
  if (status.phase === "saved") return "Draft saved on this device.";
  return "";
}

function action(label, name, className = "draft-recovery__button") {
  return `<button type="button" class="${className}" data-action="${name}">${label}</button>`;
}

export function renderRecoveryShelf({
  status = {},
  scan = null,
  notice = "",
  chatNotice = "",
} = {}) {
  const lines = Array.isArray(scan?.draft?.lines) ? scan.draft.lines.length : 0;
  const hasScan = Boolean(scan?.stage);
  const blocked = Boolean(status.blocked);
  const failed = status.phase === "error" || blocked;
  const statusText = recoveryStatusText(status);
  const visible = hasScan || Boolean(chatNotice) || failed;

  if (!visible) return "";

  const kind = escapeHtml(scan?.draft?.kind || "scan");
  const scanCopy = hasScan
    ? `<div class="draft-recovery__copy"><strong>Unfinished ${kind}</strong><span>${lines ? `${lines} ${lines === 1 ? "line" : "lines"} ready to review.` : "Scan interrupted. Source saved when available."}</span></div>`
    : "";
  const notices = [notice, chatNotice]
    .filter(Boolean)
    .map(
      (message) =>
        `<p class="draft-recovery__notice">${escapeHtml(message)}</p>`,
    )
    .join("");
  const statusMarkup = statusText
    ? `<p class="draft-recovery__status${failed ? " draft-recovery__status--error" : ""}" data-recovery-status role="status" aria-live="polite">${escapeHtml(statusText)}</p>`
    : "";
  const scanActions = hasScan
    ? `${action("Resume", "recovery-resume-scan", "draft-recovery__button draft-recovery__button--primary")}${action("Discard", "recovery-discard-scan")}`
    : "";
  const retryAction =
    status.phase === "error" && !blocked
      ? action(
          "Retry save",
          "recovery-retry-save",
          "draft-recovery__button draft-recovery__button--primary",
        )
      : "";
  const discardAllAction = failed
    ? action("Discard all drafts", "recovery-discard-all")
    : "";

  return `<section class="draft-recovery${failed ? " draft-recovery--error" : ""}" aria-label="Draft recovery">${scanCopy}${notices}${statusMarkup}<div class="draft-recovery__actions">${scanActions}${retryAction}${discardAllAction}</div></section>`;
}
