const CONTACT_EMAIL = "contact@example.com"; // TODO: replace with the real address before deploying

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hasIO = "IntersectionObserver" in window;

  /* ---------------------------------------------------------------- Reveal */
  var revealTargets = document.querySelectorAll(".reveal, .ladder");
  if (hasIO) {
    var revealIO = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    revealTargets.forEach(function (el) {
      revealIO.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ------------------------------------------------------------ Mobile nav */
  var header = document.getElementById("site-header");
  var toggle = header.querySelector(".nav__toggle");
  var navLinks = document.getElementById("site-nav");

  /* The header is transparent over the hero photo until the page scrolls. */
  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Menu");
    header.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });

  window.matchMedia("(min-width: 900px)").addEventListener("change", function (mq) {
    if (mq.matches) setMenu(false);
  });

  /* Highlight the nav link for the section in view. */
  if (hasIO) {
    var linkFor = {};
    navLinks.querySelectorAll("a[href^='#']").forEach(function (a) {
      linkFor[a.getAttribute("href").slice(1)] = a;
    });
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkFor[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.keys(linkFor).forEach(function (id) {
              linkFor[id].removeAttribute("aria-current");
            });
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    Object.keys(linkFor).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* ------------------------------------------------- Hero phone state loop */
  var phone = document.getElementById("hero-phone");
  if (phone) {
    var states = ["scan", "quest", "cooked"];
    var dwell = { scan: 4800, quest: 6800, cooked: 5000 };
    var stateButtons = document.querySelectorAll("[data-phone-state]");
    var pauseButton = document.querySelector("[data-phone-pause]");
    var index = states.indexOf(phone.getAttribute("data-state"));
    var timer = null;
    var userPaused = false;
    var inView = true;

    var show = function (i) {
      index = i;
      phone.setAttribute("data-state", states[i]);
      stateButtons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.getAttribute("data-phone-state") === states[i]));
      });
    };

    var canRun = function () {
      return !reduceMotion.matches && !userPaused && inView && !document.hidden;
    };

    var schedule = function () {
      window.clearTimeout(timer);
      if (!canRun()) return;
      timer = window.setTimeout(function () {
        show((index + 1) % states.length);
        schedule();
      }, dwell[states[index]]);
    };

    var setPaused = function (paused) {
      userPaused = paused;
      if (pauseButton) pauseButton.setAttribute("aria-pressed", String(paused));
      schedule();
    };

    stateButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        show(states.indexOf(button.getAttribute("data-phone-state")));
        setPaused(true);
      });
    });

    if (pauseButton) {
      pauseButton.addEventListener("click", function () {
        setPaused(pauseButton.getAttribute("aria-pressed") !== "true");
      });
    }

    if (hasIO) {
      new IntersectionObserver(
        function (entries) {
          inView = entries[0].isIntersecting;
          schedule();
        },
        { threshold: 0.25 }
      ).observe(phone);
    }

    document.addEventListener("visibilitychange", schedule);
    reduceMotion.addEventListener("change", schedule);
    schedule();
  }

  /* -------------------------------------------------------------- FAQ */
  var questions = Array.prototype.slice.call(document.querySelectorAll(".faq__q"));

  questions.forEach(function (button, i) {
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.closest(".faq__item").classList.toggle("is-open", !open);
    });

    button.addEventListener("keydown", function (event) {
      var next = null;
      if (event.key === "ArrowDown") next = questions[(i + 1) % questions.length];
      else if (event.key === "ArrowUp") next = questions[(i - 1 + questions.length) % questions.length];
      else if (event.key === "Home") next = questions[0];
      else if (event.key === "End") next = questions[questions.length - 1];
      if (next) {
        event.preventDefault();
        next.focus();
      }
    });
  });

  /* ------------------------------------------- Walkthrough form -> mailto */
  var form = document.getElementById("walkthrough-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var firm = String(data.get("firm") || "").trim();

      var subject = "Kitchenaut walkthrough request";
      var lines = [
        "Hello,",
        "",
        "I would like a walkthrough of Kitchenaut.",
        "",
        "Name: " + name,
        "Email: " + email
      ];
      if (firm) lines.push("Firm: " + firm);
      lines.push("", "Thank you.");

      var href =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\r\n"));

      status.textContent = "";
      var intro = document.createTextNode("Your email app should open with a pre-filled message. If it does not, write to ");
      var link = document.createElement("a");
      link.href = "mailto:" + CONTACT_EMAIL;
      link.textContent = CONTACT_EMAIL;
      status.appendChild(intro);
      status.appendChild(link);
      status.appendChild(document.createTextNode("."));

      window.location.href = href;
    });
  }
})();
