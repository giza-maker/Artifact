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

  /* ------------------------------------------------------ Interactive demo */
  var app = document.getElementById("demo-app");
  if (app) initDemo(app);

  function initDemo(app) {
    var live = document.getElementById("demo-live");
    var missionItems = document.querySelectorAll("[data-goal]");
    var missionDone = document.getElementById("demo-done");
    var xpNums = document.querySelectorAll("[data-demo-xp]");
    var xpBars = document.querySelectorAll("[data-demo-xpbar]");
    var levelNames = document.querySelectorAll("[data-demo-level]");

    var START_XP = 440;
    var LEVEL_XP = 500;
    var GOALS = ["scan", "quest", "cook", "share", "level"];
    var FULLSCREEN = { cook: true, camera: true };
    var TITLES = { fridge: "Fridge", quests: "Quests", chef: "Chef Zara", school: "Chef School", hub: "Food Hub", cook: "Cook mode", camera: "Camera" };
    var STEPS = [
      { title: "Dice the tomatoes", text: "Dice the tomatoes into small, even pieces and tear the basil.", img: "prep-close" },
      { title: "The salt trick", text: "Salt the tomatoes and let them rest for two minutes. It draws out water, so the toast stays crisp.", img: "prep-close", timer: true },
      { title: "Toast the bread", text: "Toast the sourdough until golden, then rub it with the cut side of a garlic clove.", img: "plate" },
      { title: "Build and finish", text: "Spoon the tomatoes onto the toast. Basil goes on last.", img: "plate" }
    ];
    var IMAGES = {
      "prep-close": { src: "images/prep-close-320.webp", srcset: "images/prep-close-320.webp 320w, images/prep-close-640.webp 640w" },
      plate: { src: "images/plate-320.webp", srcset: "images/plate-320.webp 320w, images/plate-640.webp 640w" }
    };
    var REPLIES = {
      tonight: {
        q: "What should I cook tonight?",
        a: function () {
          return state.scan === "done"
            ? "Bruschetta. Your basil expires tomorrow and your tomatoes are next. Twelve minutes, zero waste."
            : "Scan your fridge first, and I will plan around whatever expires soonest.";
        }
      },
      salt: { q: "What is the salt trick?", a: function () { return "Salt the diced tomatoes and wait two minutes. It pulls out water, so the toast stays crisp. Worth 20 bonus XP."; } },
      eggs: { q: "Something with the eggs?", a: function () { return "Your eggs have three days. Tomorrow's quest could be a basil omelette."; } }
    };

    var state;
    var timers = [];
    var raf = 0;
    var animatingXP = false;

    var q = function (sel) { return app.querySelector(sel); };
    var qa = function (sel) { return app.querySelectorAll(sel); };
    var fast = function () { return reduceMotion.matches; };
    var later = function (fn, ms) { timers.push(window.setTimeout(fn, ms)); };

    function say(message) {
      live.textContent = "";
      window.setTimeout(function () { live.textContent = message; }, 50);
    }

    function focusIn(el) {
      if (el && typeof el.focus === "function") el.focus({ preventScroll: true });
    }

    function nextGoal() {
      for (var i = 0; i < GOALS.length; i++) if (!state.goals[GOALS[i]]) return GOALS[i];
      return null;
    }

    function setXP(value) {
      xpNums.forEach(function (n) { n.textContent = String(value); });
      xpBars.forEach(function (b) { b.style.width = Math.min(100, (value / LEVEL_XP) * 100) + "%"; });
    }

    function reset() {
      timers.forEach(window.clearTimeout);
      timers = [];
      window.cancelAnimationFrame(raf);
      animatingXP = false;
      state = {
        screen: "fridge", storage: "fridge", scan: "idle", questStarted: false, step: 0, timer: "idle",
        cooked: false, photo: false, posted: false, collected: false, overlay: false, cheered: false,
        xp: START_XP, chat: [], goals: {}
      };
      qa(".chat .is-dyn").forEach(function (n) { n.remove(); });
      render();
    }

    function go(screen, focus) {
      state.screen = screen;
      render();
      var el = q('[data-screen="' + screen + '"]');
      el.classList.remove("is-entering");
      void el.offsetWidth;
      el.classList.add("is-entering");
      if (focus) focusIn(el.querySelector("[data-focus]"));
    }

    function hintTarget(goal) {
      if (state.overlay) return q("[data-open-school]");
      var s = state.screen;
      if (goal === "scan") {
        if (s !== "fridge") return q('[data-tab="fridge"]');
        if (state.storage !== "fridge") return q('[data-storage="fridge"]');
        return state.scan === "idle" ? q("[data-scan]") : null;
      }
      if (goal === "quest") {
        if (s === "fridge" && state.storage === "fridge") return q("[data-to-quests]");
        return s === "quests" ? q("[data-start]") : q('[data-tab="quests"]');
      }
      if (goal === "cook") {
        if (s !== "cook") return s === "quests" ? q("[data-start]") : q('[data-tab="quests"]');
        if (STEPS[state.step].timer && state.timer === "idle") return q("[data-timer-btn]");
        if (STEPS[state.step].timer && state.timer === "running") return null;
        return q("[data-next]");
      }
      if (goal === "share") {
        if (s === "camera") return state.photo ? q("[data-post]") : q("[data-shutter]");
        return s === "quests" ? q("[data-start]") : q('[data-tab="quests"]');
      }
      if (goal === "level") return s === "hub" ? q("[data-collect]") : q('[data-tab="hub"]');
      return null;
    }

    function render() {
      var goal = nextGoal();

      // screens and chrome
      qa("[data-screen]").forEach(function (el) { el.hidden = el.getAttribute("data-screen") !== state.screen; });
      app.setAttribute("data-chrome", FULLSCREEN[state.screen] ? "full" : "tabs");
      qa("[data-tab]").forEach(function (b) {
        if (b.getAttribute("data-tab") === state.screen) b.setAttribute("aria-current", "page");
        else b.removeAttribute("aria-current");
      });

      // fridge
      qa("[data-storage]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-storage") === state.storage)); });
      qa("[data-shelf]").forEach(function (el) { el.hidden = el.getAttribute("data-shelf") !== state.storage; });
      q(".app-vf").setAttribute("data-state", state.scan);
      qa("[data-vf]").forEach(function (el) { el.hidden = el.getAttribute("data-vf") !== state.scan; });
      q("[data-scan-list]").hidden = state.scan !== "done";
      q("[data-scan-empty]").hidden = state.scan === "done";

      // quests
      q("[data-quests-empty]").hidden = state.scan === "done";
      q("[data-quests-full]").hidden = state.scan !== "done";
      var start = q("[data-start]");
      var startLabel = state.posted ? "Completed" : state.cooked ? "Snap your photo" : state.questStarted ? "Continue" : "Start quest";
      q("[data-start-label]").textContent = startLabel;
      start.disabled = state.posted;

      // cook
      var step = STEPS[state.step];
      var last = state.step === STEPS.length - 1;
      q("[data-step-count]").textContent = "Step " + (state.step + 1) + " of " + STEPS.length;
      qa("[data-step-dot]").forEach(function (d, i) { d.classList.toggle("on", i <= state.step); });
      q("[data-step-title]").textContent = step.title;
      q("[data-step-text]").textContent = step.text;
      var img = q("[data-step-img]");
      if (img.getAttribute("src") !== IMAGES[step.img].src) {
        img.setAttribute("srcset", IMAGES[step.img].srcset);
        img.setAttribute("src", IMAGES[step.img].src);
      }
      var timer = q("[data-timer]");
      timer.hidden = !step.timer;
      timer.setAttribute("data-state", state.timer);
      var timerBtn = q("[data-timer-btn]");
      timerBtn.disabled = state.timer !== "idle";
      timerBtn.textContent = state.timer === "idle" ? "Start 2:00 timer" : state.timer === "running" ? "Resting" : "Rested";
      q("[data-timer-note]").textContent = state.timer === "done" ? "Salt trick done: +20 XP" : "Demo runs two minutes in three seconds.";
      if (state.timer !== "running") q("[data-timer-text]").textContent = state.timer === "done" ? "0:00" : "2:00";
      q("[data-next]").disabled = !!step.timer && state.timer !== "done";
      q("[data-next-label]").textContent = last ? "Finish and snap a photo" : "Next step";

      // camera
      q("[data-cam]").setAttribute("data-state", state.photo ? "captured" : "live");
      q("[data-cam-live]").hidden = state.photo;
      q("[data-cam-review]").hidden = !state.photo;

      // food hub
      q("[data-hub-mine]").hidden = !state.posted;
      q("[data-hub-sample]").hidden = state.posted;
      q("[data-collect-banner]").hidden = !state.posted || state.collected;
      var cheer = q("[data-cheer]");
      cheer.setAttribute("aria-pressed", String(state.cheered));

      // chef school
      q("[data-school-locked]").hidden = state.collected;
      q("[data-school-open]").hidden = !state.collected;
      q("[data-lesson]").disabled = !state.collected;
      q("[data-lesson-note]").textContent = state.collected ? "Lesson 1, tap to preview" : "Lesson 1";

      // chef chat (the latest four messages)
      var chat = q("[data-chat]");
      if (chat.getAttribute("data-count") !== String(state.chat.length)) {
        chat.setAttribute("data-count", String(state.chat.length));
        qa(".chat .is-dyn").forEach(function (n) { n.remove(); });
        state.chat.slice(-4).forEach(function (m) {
          var b = document.createElement("span");
          b.className = "p-bubble is-dyn" + (m.me ? " p-bubble--me" : "");
          b.textContent = m.text;
          chat.appendChild(b);
        });
      }

      // level-up moment
      q("[data-overlay]").hidden = !state.overlay;

      // mission panel
      missionItems.forEach(function (li) {
        var g = li.getAttribute("data-goal");
        var done = !!state.goals[g];
        li.classList.toggle("is-done", done);
        li.classList.toggle("is-current", g === goal);
        li.querySelector("[data-goal-state]").textContent = done ? "Done: " : g === goal ? "Next: " : "";
      });
      missionDone.hidden = goal !== null;
      if (!animatingXP) setXP(state.xp);
      levelNames.forEach(function (n) { n.textContent = state.collected ? "Apprentice Cook" : "Kitchen Novice"; });

      // pulse on the next thing to tap
      qa(".is-hint").forEach(function (n) { n.classList.remove("is-hint"); });
      var target = goal ? hintTarget(goal) : state.overlay ? q("[data-open-school]") : null;
      if (target && !target.closest("[hidden]")) target.classList.add("is-hint");
    }

    function startScan() {
      if (state.scan !== "idle") return;
      state.scan = "scanning";
      render();
      say("Scanning the shelf.");
      later(function () {
        state.scan = "done";
        state.goals.scan = true;
        var hadFocus = app.contains(document.activeElement);
        render();
        say("Scan complete. Found basil, tomatoes and eggs. Basil expires first.");
        if (hadFocus) focusIn(q("[data-to-quests]"));
      }, fast() ? 500 : 2300);
    }

    function startQuest() {
      if (state.posted) return;
      if (state.cooked) {
        go("camera", true);
        return;
      }
      if (!state.questStarted) {
        state.questStarted = true;
        state.goals.quest = true;
      }
      go("cook", true);
      say("Cook mode. Step " + (state.step + 1) + " of " + STEPS.length + ": " + STEPS[state.step].title + ".");
    }

    function startTimer() {
      if (state.timer !== "idle") return;
      state.timer = "running";
      render();
      say("Timer started.");
      var label = q("[data-timer-text]");
      var duration = fast() ? 700 : 3000;
      var t0 = 0;
      var tick = function (ts) {
        if (state.timer !== "running") return;
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / duration);
        var left = Math.ceil(120 * (1 - p));
        label.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0");
        if (p < 1) raf = window.requestAnimationFrame(tick);
      };
      raf = window.requestAnimationFrame(tick);
      later(function () {
        state.timer = "done";
        render();
        say("Two minutes done. Salt trick bonus: 20 XP.");
        focusIn(q("[data-next]"));
      }, duration);
    }

    function nextStep() {
      if (state.step === STEPS.length - 1) {
        state.cooked = true;
        state.goals.cook = true;
        go("camera", true);
        say("All steps done. Snap a photo of your dish.");
        return;
      }
      state.step += 1;
      render();
      focusIn(q("[data-step-title]"));
      say("Step " + (state.step + 1) + " of " + STEPS.length + ": " + STEPS[state.step].title + ".");
    }

    function snap() {
      var cam = q("[data-cam]");
      cam.classList.remove("is-flash");
      void cam.offsetWidth;
      cam.classList.add("is-flash");
      state.photo = true;
      render();
      say("Photo taken.");
      focusIn(q("[data-post]"));
    }

    function post() {
      state.posted = true;
      state.goals.share = true;
      go("hub", true);
      say("Posted to the Food Hub. Collect your 60 XP.");
    }

    function collect() {
      if (state.collected) return;
      state.collected = true;
      state.xp = LEVEL_XP;
      animatingXP = true;
      render();
      var finish = function () {
        animatingXP = false;
        state.overlay = true;
        state.goals.level = true;
        render();
        focusIn(q("[data-overlay] [data-focus]"));
        say("Level up. You are now an Apprentice Cook. Chef School unlocked.");
      };
      if (fast()) {
        setXP(LEVEL_XP);
        finish();
        return;
      }
      var t0 = 0;
      var frame = function (ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / 1200);
        var eased = 1 - Math.pow(1 - p, 3);
        setXP(Math.round(START_XP + (LEVEL_XP - START_XP) * eased));
        if (p < 1) raf = window.requestAnimationFrame(frame);
        else finish();
      };
      raf = window.requestAnimationFrame(frame);
    }

    function ask(key) {
      var reply = REPLIES[key];
      if (!reply) return;
      var answer = reply.a();
      state.chat.push({ me: true, text: reply.q }, { me: false, text: answer });
      render();
      say("Chef Zara: " + answer);
    }

    app.addEventListener("click", function (event) {
      var t = event.target.closest("button");
      if (!t || !app.contains(t) || t.disabled) return;

      if (t.hasAttribute("data-tab")) {
        var tab = t.getAttribute("data-tab");
        if (tab !== state.screen) go(tab, false);
        say(TITLES[tab]);
      } else if (t.hasAttribute("data-storage")) {
        state.storage = t.getAttribute("data-storage");
        render();
      } else if (t.hasAttribute("data-scan")) {
        startScan();
      } else if (t.hasAttribute("data-to-quests")) {
        go("quests", true);
      } else if (t.hasAttribute("data-go-fridge")) {
        state.storage = "fridge";
        go("fridge", true);
      } else if (t.hasAttribute("data-start")) {
        startQuest();
      } else if (t.hasAttribute("data-back")) {
        go("quests", true);
      } else if (t.hasAttribute("data-timer-btn")) {
        startTimer();
      } else if (t.hasAttribute("data-next")) {
        nextStep();
      } else if (t.hasAttribute("data-shutter")) {
        snap();
      } else if (t.hasAttribute("data-retake")) {
        state.photo = false;
        render();
        focusIn(q("[data-shutter]"));
      } else if (t.hasAttribute("data-post")) {
        post();
      } else if (t.hasAttribute("data-cheer")) {
        state.cheered = !state.cheered;
        render();
      } else if (t.hasAttribute("data-collect")) {
        collect();
      } else if (t.hasAttribute("data-open-school")) {
        state.overlay = false;
        go("school", true);
      } else if (t.hasAttribute("data-ask")) {
        ask(t.getAttribute("data-ask"));
      } else if (t.hasAttribute("data-lesson")) {
        q("[data-lesson-note]").textContent = "Chef School v1 is planned for Phase 2";
        say("Chef School v1 is planned for Phase 2.");
      }
    });

    document.querySelectorAll("[data-demo-reset]").forEach(function (b) {
      b.addEventListener("click", function () {
        reset();
        say("Demo restarted. Start with Scan shelf in the Fridge tab.");
      });
    });

    reset();
  }
})();
