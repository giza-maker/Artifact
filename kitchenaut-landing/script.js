(function () {
  "use strict";
  var header = document.querySelector("[data-header]");
  var menu = document.querySelector(".menu");
  var nav = document.getElementById("navlinks");
  var frame = document.getElementById("nomli-app-frame");
  var demo = document.getElementById("demo");
  var shortcuts = document.querySelector(".screen-shortcuts");
  var demoStatus = document.getElementById("demo-status");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  var origin = window.location.origin;
  var frameReady = false;
  var pendingPayload = null;

  function setDemoReady(ready) {
    frameReady = ready;
    if (shortcuts) shortcuts.setAttribute("aria-busy", String(!ready));
    if (demoStatus)
      demoStatus.textContent = ready
        ? "Interactive demo ready."
        : "Loading interactive demo…";
  }

  function pingFrame() {
    if (!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage({ type: "nomli:ping" }, origin);
  }

  function flushPending() {
    if (!frameReady || !pendingPayload || !frame || !frame.contentWindow)
      return;
    frame.contentWindow.postMessage(pendingPayload, origin);
    pendingPayload = null;
  }

  function closeMenu() {
    if (!menu || !nav) return;
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
  function openDemo(payload) {
    if (!frame || !demo) return;
    pendingPayload = payload;
    flushPending();
    demo.scrollIntoView({
      behavior: reduced.matches ? "auto" : "smooth",
      block: "center",
    });
  }

  if (frame) {
    setDemoReady(false);
    pingFrame();
    frame.addEventListener("load", function () {
      setDemoReady(false);
      pingFrame();
    });
    window.addEventListener("message", function (event) {
      if (
        event.origin !== origin ||
        event.source !== frame.contentWindow ||
        !event.data ||
        event.data.type !== "nomli:ready"
      )
        return;
      setDemoReady(true);
      flushPending();
    });
  }

  if (header && "IntersectionObserver" in window) {
    var marker = document.createElement("span");
    marker.setAttribute("aria-hidden", "true");
    marker.style.cssText =
      "position:absolute;top:20px;left:0;width:1px;height:1px;pointer-events:none";
    document.body.prepend(marker);
    new IntersectionObserver(function (entries) {
      header.classList.toggle("is-scrolled", !entries[0].isIntersecting);
    }).observe(marker);
  }

  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        menu.getAttribute("aria-expanded") === "true"
      ) {
        closeMenu();
        menu.focus();
      }
    });
  }

  document.addEventListener("click", function (event) {
    var control = event.target.closest("[data-route], [data-mode]");
    if (!control) return;
    if (control.dataset.mode)
      openDemo({ type: "nomli:scan", mode: control.dataset.mode });
    else openDemo({ type: "nomli:navigate", route: control.dataset.route });
  });

  var reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduced.matches) {
    reveals.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    reveals.forEach(function (item) {
      observer.observe(item);
    });
  }
})();
