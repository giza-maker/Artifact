import { validateScanConfig } from "./scan-client.js";
import {
  normalizeAssistantResponse,
  normalizeAssistantRequest,
} from "./assistant-domain.js";
export class AssistantClientError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "AssistantClientError";
    this.code = code;
  }
}
const fail = (code, message) => {
  throw new AssistantClientError(code, message);
};
export async function requestAssistantReply({
  config,
  question,
  history = [],
  context,
  signal,
  fetchImpl = globalThis.fetch,
  timeoutMs = 50000,
} = {}) {
  let connection;
  try {
    connection = validateScanConfig(config);
  } catch {
    fail(
      "connection",
      "Open Scan connection and save a valid server URL and device code.",
    );
  }
  if (
    typeof question !== "string" ||
    !question.trim() ||
    question.length > 2000
  )
    fail("question", "Enter a question of 2,000 characters or fewer.");
  let body;
  try {
    const request = {
      question: question.trim(),
      history: history.slice(-6).map(({ q, a }) => ({ q, a })),
      context,
    };
    body = JSON.stringify(request);
    if (new TextEncoder().encode(body).length <= 192 * 1024)
      body = JSON.stringify(normalizeAssistantRequest(request));
  } catch {
    fail(
      "request",
      "Kitchen context or conversation is invalid. Review saved data before sending.",
    );
  }
  if (new TextEncoder().encode(body).length > 192 * 1024)
    fail(
      "request_size",
      "Kitchen context is too large to send. Reduce saved inventory or history.",
    );
  const controller = new AbortController();
  let timedOut = false,
    reader = null,
    response = null;
  let rejectAbort;
  const aborted = new Promise((_, reject) => {
    rejectAbort = reject;
  });
  const onAbort = () => {
    reader?.cancel().catch(() => {});
    rejectAbort(new DOMException("Request cancelled", "AbortError"));
  };
  controller.signal.addEventListener("abort", onAbort, { once: true });
  const abort = () => controller.abort();
  signal?.addEventListener("abort", abort, { once: true });

  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);
  try {
    if (signal?.aborted) {
      controller.abort();
      await aborted;
    }
    response = await Promise.race([
      fetchImpl(`${connection.apiUrl}/api/v1/assistant-replies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${connection.deviceToken}`,
        },
        body,
        signal: controller.signal,
        credentials: "omit",
        redirect: "error",
        cache: "no-store",
      }),
      aborted,
    ]);
    if (!response.ok)
      fail(
        "http",
        response.status === 401 || response.status === 403
          ? "Zara connection was rejected. Check the device code in Scan connection."
          : response.status === 429
            ? "Zara is busy. Wait, then send again."
            : "Zara could not answer. Try sending again later.",
      );
    if (Number(response.headers.get("content-length")) > 65536)
      fail("response", "Zara returned an invalid response. Try again.");
    reader = response.body?.getReader();
    if (!reader)
      fail("response", "Zara returned an invalid response. Try again.");
    let size = 0;
    const chunks = [];
    while (true) {
      const { done, value } = await Promise.race([reader.read(), aborted]);
      if (done) break;
      size += value.byteLength;
      if (size > 65536) {
        reader.cancel().catch(() => {});
        fail("response", "Zara returned an invalid response. Try again.");
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.length;
    }
    try {
      const raw = JSON.parse(
        new TextDecoder("utf-8", { fatal: true }).decode(bytes),
      );
      if (
        raw.provider !== "gemini" ||
        typeof raw.model !== "string" ||
        !raw.model.length ||
        raw.model.length > 120
      )
        throw Error();
      return normalizeAssistantResponse(raw.reply, context);
    } catch {
      fail("response", "Zara returned an invalid response. Try again.");
    }
  } catch (error) {
    if (controller.signal.aborted)
      fail(
        timedOut ? "timeout" : "cancelled",
        timedOut
          ? "Zara took too long. Send again when ready."
          : "Request cancelled. Your question is kept.",
      );
    if (error instanceof AssistantClientError) throw error;
    fail("network", "Could not reach Zara. Check connection, then send again.");
  } finally {
    clearTimeout(timer);
    controller.signal.removeEventListener("abort", onAbort);
    if (reader) {
      reader.cancel().catch(() => {});
    } else response?.body?.cancel().catch(() => {});
    signal?.removeEventListener("abort", abort);
  }
}
