(function () {
  "use strict";
  var header = document.querySelector("[data-header]");
  var menu = document.querySelector(".menu");
  var nav = document.getElementById("navlinks");
  var frame = document.getElementById("nomli-app-frame");
  var demo = document.getElementById("demo");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  function closeMenu() {
    if (!menu || !nav) return;
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
  function openDemo(payload) {
    if (!frame || !demo) return;
    frame.contentWindow.postMessage(payload, window.location.origin);
    demo.scrollIntoView({
      behavior: reduced.matches ? "auto" : "smooth",
      block: "center",
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
