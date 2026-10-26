import { createServer } from "node:http";
import { Readable } from "node:stream";
import { pathToFileURL } from "node:url";
import worker from "./scan-proxy.mjs";

export function createDevServer({ handler = worker.fetch, env = process.env } = {}) {
  return createServer(async (req, res) => {
    const controller = new AbortController();
    const cancel = () => { if (!controller.signal.aborted) controller.abort(new Error("Client disconnected.")); };
    const prematureClose = () => { if (!res.writableEnded) cancel(); };
    req.once("aborted", cancel); res.once("close", prematureClose);
    try {
      const request = new Request(`http://${req.headers.host || "127.0.0.1"}${req.url}`, { method: req.method, headers: req.headers, body: ["GET", "HEAD"].includes(req.method) ? undefined : Readable.toWeb(req), duplex: "half", signal: controller.signal });
      const response = await handler(request, env);
      if (res.destroyed) return;
      res.writeHead(response.status, Object.fromEntries(response.headers));
      if (!response.body) { res.end(); return; }
      const output = Readable.fromWeb(response.body);
      output.on("error", () => { if (!res.destroyed) res.destroy(); });
      res.on("close", () => output.destroy());
      output.pipe(res);
    } catch (error) {
      if (!res.destroyed) { res.writeHead(500, { "content-type": "application/json; charset=utf-8" }); res.end(JSON.stringify({ error: { code: "internal_error", message: "Request failed." } })); }
    } finally {
      req.removeListener("aborted", cancel); res.removeListener("close", prematureClose);
    }
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const env = process.env; const port = Number(env.PORT || 8787); const server = createDevServer({ env });
  server.listen(port, "127.0.0.1", () => console.log(JSON.stringify({ event: "scan_proxy_listening", port })));
}

