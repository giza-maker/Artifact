(function () {
  "use strict";
  var h = document.querySelector("[data-header]"),
    b = document.querySelector(".menu"),
    n = document.getElementById("navlinks");
  function s() {
    h && h.classList.toggle("scrolled", scrollY > 20);
  }
  s();
  addEventListener("scroll", s, { passive: true });
  if (b && n) {
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        b.getAttribute("aria-expanded") === "true"
      ) {
        b.setAttribute("aria-expanded", "false");
        n.classList.remove("open");
        b.focus();
      }
    });
    b.onclick = function () {
      var o = b.getAttribute("aria-expanded") === "true";
      b.setAttribute("aria-expanded", String(!o));
      n.classList.toggle("open", !o);
    };
    n.onclick = function (e) {
      if (e.target.closest("a")) {
        b.setAttribute("aria-expanded", "false");
        n.classList.remove("open");
      }
    };
  }
})();
