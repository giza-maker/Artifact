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
    var xpBars = document.querySelectorAll("[data-demo-xpbar]");
    var levelNames = document.querySelectorAll("[data-demo-level]");

    var START_XP = 440;
    var LEVEL_XP = 500;
    var GOALS = ["stock", "tools", "adapt", "cook", "restock"];
    var FULLSCREEN = { scan: true, recipe: true, steps: true, done: true };
    var TAB_OF = { kitchen: "kitchen", scan: "kitchen", cook: "cook", recipe: "cook", steps: "cook", done: "cook", quests: "quests", restock: "restock", hub: "hub" };
    var TITLES = { kitchen: "Kitchen", cook: "Cook", quests: "Quests", restock: "Restock", hub: "Food Hub" };
    var FOCUS_KEYS = ["data-tool", "data-restock-add", "data-rs-tick", "data-recipe", "data-swap-open", "data-swap", "data-unswap", "data-kview", "data-filter", "data-serv"];

    var IMG = {
      basil: "images/basil-128.webp",
      tomatoes: "images/tomato-128.webp",
      eggs: "images/eggs-128.webp",
      eggsLg: "images/eggs-256.webp",
      tomatoesLg: "images/tomato-256.webp",
      plate: "images/plate-320.webp",
      prep: "images/prep-close-320.webp"
    };

    var ITEMS = {
      basil: { name: "Basil", img: IMG.basil, loc: "Fridge", days: 1, unit: " bunch" },
      tomatoes: { name: "Tomatoes", img: IMG.tomatoes, loc: "Fridge", days: 2, unit: "" },
      eggs: { name: "Eggs", img: IMG.eggs, loc: "Fridge", days: 3, unit: "" },
      lemons: { name: "Lemons", icon: "i-fridge", loc: "Fridge", days: 9, unit: "" },
      garlic: { name: "Garlic", icon: "i-jar", loc: "Pantry", days: 14, unit: " bulb" },
      sourdough: { name: "Sourdough loaf", icon: "i-snow", loc: "Freezer", days: 30, unit: " loaf" },
      oliveoil: { name: "Olive oil", icon: "i-jar", loc: "Pantry", days: 240, low: true },
      salt: { name: "Flaky sea salt", icon: "i-salt", loc: "Spices", days: 365, plenty: true },
      balsamic: { name: "Balsamic glaze", icon: "i-jar" },
      butter: { name: "Butter", icon: "i-fridge" }
    };

    var TOOLS = [
      { key: "oven", name: "Oven", icon: "i-oven" },
      { key: "hob", name: "Hob", icon: "i-flame" },
      { key: "pan", name: "Cast-iron pan", icon: "i-pan" },
      { key: "toaster", name: "Toaster", icon: "i-toaster" },
      { key: "sheet", name: "Sheet pan", icon: "i-tray" },
      { key: "stockpot", name: "Stockpot", icon: "i-pot" },
      { key: "blender", name: "Blender", icon: "i-blender" },
      { key: "airfryer", name: "Air fryer", icon: "i-airfryer" }
    ];

    function toastMethod(t) {
      if (t.toaster) return { label: "Toaster", text: "Toast the sourdough straight from frozen in the toaster" };
      if (t.oven) return { label: "Oven grill", text: "Toast the sourdough under the oven grill, two minutes a side" };
      if (t.pan && t.hob) return { label: "Cast-iron pan", text: "Toast the sourdough in the dry cast-iron pan until golden" };
      if (t.airfryer) return { label: "Air fryer", text: "Crisp the sourdough in the air fryer for four minutes" };
      return null;
    }

    function panMethod(t) {
      if (!t.hob) return null;
      if (t.pan) return { label: "Cast-iron pan on the hob", name: "cast-iron pan" };
      if (t.stockpot) return { label: "Stockpot on the hob", name: "stockpot" };
      return null;
    }

    function swapOf(rk, key) {
      return state.swaps[rk + ":" + key] || null;
    }

    var RECIPES = {
      bruschetta: {
        name: "Tomato and basil bruschetta", short: "bruschetta", time: 12, img: IMG.plate, hero: IMG.plate, quest: true,
        xp: [["Daily quest", 40], ["Salt trick", 20]],
        ingredients: function (s) {
          return [
            { key: "tomatoes", need: s, text: s + " tomatoes" },
            { key: "basil", need: 1, text: "A handful of basil" },
            { key: "sourdough", need: 1, text: s + " slices of sourdough", use: s + " slices" },
            { key: "garlic", need: 1, text: "1 garlic clove", use: "1 clove" },
            { key: "oliveoil", need: 1, text: Math.max(1, Math.round(s / 2)) + " tbsp olive oil" },
            { key: "salt", need: 1, text: "A pinch of flaky salt" },
            { key: "balsamic", need: 1, text: "Balsamic glaze, to finish", swaps: [{ key: "lemons", text: "Lemon juice" }, { key: "skip", text: "Skip it" }] }
          ];
        },
        method: function (t) {
          var m = toastMethod(t);
          return m ? { ok: true, text: "Toast with: " + m.label, adapted: !t.toaster } : { ok: false, text: "Needs a toaster, oven, pan or air fryer. Switch one on in Kitchen, Tools." };
        },
        steps: function (s, t) {
          var m = toastMethod(t) || { text: "Toast the sourdough" };
          var sw = swapOf("bruschetta", "balsamic");
          var finish = sw === "lemons" ? " Finish with a squeeze of lemon." : sw === "skip" ? "" : " Finish with a little balsamic glaze.";
          return [
            { title: "Dice and salt", text: "Dice " + s + " tomatoes, salt them and let them rest for two minutes. It draws out water, so the toast stays crisp.", img: IMG.prep, timer: true },
            { title: "Toast the bread", text: m.text + ", then rub it with the cut side of a garlic clove.", img: IMG.plate },
            { title: "Build and finish", text: "Spoon the tomatoes onto the toast and add the basil last." + finish, img: IMG.plate }
          ];
        },
        tip: function (s, t, short) {
          var tip = "Your sourdough is in the freezer. Toast it straight from frozen, no need to thaw.";
          if (!t.toaster && toastMethod(t)) tip = "No toaster? I have switched the toast step to your " + toastMethod(t).label.toLowerCase() + ".";
          if (short.tomatoes) tip += " You are " + short.tomatoes + " tomato" + (short.tomatoes > 1 ? "es" : "") + " short for " + s + ".";
          return tip;
        }
      },
      omelette: {
        name: "Basil omelette", short: "omelette", time: 8, img: IMG.eggs, hero: IMG.eggsLg,
        xp: [["Cooked before it expired", 60]],
        ingredients: function (s) {
          return [
            { key: "eggs", need: 2 * s, text: 2 * s + " eggs" },
            { key: "basil", need: 1, text: "A few basil leaves" },
            { key: "butter", need: 1, text: "A knob of butter", swaps: [{ key: "oliveoil", text: "Olive oil" }, { key: "skip", text: "Skip it" }] },
            { key: "salt", need: 1, text: "A pinch of salt" }
          ];
        },
        method: function (t) {
          var m = panMethod(t);
          return m ? { ok: true, text: "Cook with: " + m.label, adapted: !t.pan } : { ok: false, text: "Needs a hob and a pan. Switch them on in Kitchen, Tools." };
        },
        steps: function (s, t) {
          var m = panMethod(t) || { name: "pan" };
          var fat = swapOf("omelette", "butter") === "oliveoil" ? "a little olive oil" : swapOf("omelette", "butter") === "skip" ? "nothing but a hot surface" : "a knob of butter";
          return [
            { title: "Whisk", text: "Whisk " + 2 * s + " eggs with a pinch of salt and tear in the basil.", img: IMG.eggsLg },
            { title: "Cook", text: "Warm " + fat + " in the " + m.name + " over a medium heat, then pour in the eggs.", img: IMG.eggsLg },
            { title: "Fold and serve", text: "Fold it over as soon as the top is just set. Serve straight away.", img: IMG.eggsLg }
          ];
        },
        tip: function (s, t, short) {
          if (short.eggs) return "You need " + 2 * s + " eggs for " + s + " and have " + (state.inv.eggs || 0) + ". Try fewer servings, or add eggs to Restock.";
          return "Your eggs have three days left, so this uses them first.";
        }
      },
      skillet: {
        name: "Tomato and egg skillet", short: "skillet", time: 20, img: IMG.tomatoes, hero: IMG.tomatoesLg,
        xp: [["Cooked before it expired", 60]],
        ingredients: function (s) {
          return [
            { key: "tomatoes", need: s, text: s + " tomatoes" },
            { key: "eggs", need: s, text: s + " eggs" },
            { key: "garlic", need: 1, text: "1 garlic clove", use: "1 clove" },
            { key: "oliveoil", need: 1, text: "1 tbsp olive oil" },
            { key: "salt", need: 1, text: "A pinch of salt" }
          ];
        },
        method: function (t) {
          var m = panMethod(t);
          if (m) return { ok: true, text: "Cook with: " + m.label, adapted: !t.pan };
          if (t.oven && t.sheet) return { ok: true, text: "Cook with: sheet pan in the oven", adapted: true };
          return { ok: false, text: "Needs a hob and pan, or an oven and sheet pan." };
        },
        steps: function (s, t) {
          var pan = panMethod(t);
          var where = pan ? "the " + pan.name : "the sheet pan";
          return [
            { title: "Soften", text: "Warm the olive oil in " + where + " and add the garlic and chopped tomatoes.", img: IMG.tomatoesLg },
            { title: pan ? "Simmer" : "Roast", text: (pan ? "Simmer" : "Roast") + " for ten minutes, then make " + s + " small wells.", img: IMG.tomatoesLg },
            { title: "Crack and cover", text: "Crack an egg into each well and cook until the whites are just set.", img: IMG.eggsLg }
          ];
        },
        tip: function (s, t) {
          return panMethod(t) ? "One pan, and it uses your tomatoes and eggs before they expire." : "No hob? It works on a sheet pan in the oven.";
        }
      }
    };

    var state;
    var timers = [];
    var raf = 0;
    var animatingXP = false;
    var lastHTML = {};

    var q = function (sel) { return app.querySelector(sel); };
    var qa = function (sel) { return app.querySelectorAll(sel); };
    var fast = function () { return reduceMotion.matches; };
    var later = function (fn, ms) { timers.push(window.setTimeout(fn, ms)); };
    var tab = function (name) { return q('[data-tab="' + name + '"]'); };
    var icon = function (id) { return '<svg class="icon" aria-hidden="true"><use href="#' + id + '"/></svg>'; };

    function say(message) {
      live.textContent = "";
      window.setTimeout(function () { live.textContent = message; }, 50);
    }

    function focusIn(el) {
      if (el && typeof el.focus === "function") el.focus({ preventScroll: true });
    }

    function setHTML(el, html) {
      var key = el.getAttribute("data-html-key") || (el.setAttribute("data-html-key", String(Math.random()).slice(2)), el.getAttribute("data-html-key"));
      if (lastHTML[key] === html) return;
      lastHTML[key] = html;
      el.innerHTML = html;
    }

    function daysLabel(d) {
      if (d <= 1) return "1 day";
      if (d < 14) return d + " days";
      if (d < 28) return Math.round(d / 7) + " weeks";
      if (d < 365) return Math.round(d / 30) === 1 ? "1 month" : Math.round(d / 30) + " months";
      return "1 year";
    }

    function chipClass(d) {
      return d <= 1 ? "p-chip" : d <= 3 ? "p-chip p-chip--warm" : "p-chip p-chip--fresh";
    }

    function thumb(key) {
      var it = ITEMS[key];
      return it.img
        ? '<img src="' + it.img + '" width="128" height="128" alt="" decoding="async">'
        : '<span class="row-ico" aria-hidden="true"><svg class="icon"><use href="#' + it.icon + '"/></svg></span>';
    }

    function qtyLabel(key) {
      var it = ITEMS[key];
      if (it.low) return "Running low";
      if (it.plenty) return "Plenty";
      return state.inv[key] + it.unit;
    }

    function fresh() {
      return {
        screen: "kitchen", kview: "groceries", scan: "idle", newItems: [],
        inv: { lemons: 2, garlic: 1, sourdough: 1, oliveoil: 1, salt: 1 },
        tools: { oven: true, hob: true, pan: true, toaster: true, sheet: true, stockpot: true, blender: false, airfryer: false },
        filters: { expiring: true, quick: false },
        recipe: "bruschetta", servings: { bruschetta: 2, omelette: 2, skillet: 2 }, swaps: {}, swapOpen: null,
        step: 0, timer: "idle", cooked: {}, lastCooked: null, changes: [], collected: false, overlay: false,
        restock: [], usedUp: [], orderNote: false, shared: false, cheered: false,
        xp: START_XP, goals: {}
      };
    }

    function reset() {
      timers.forEach(window.clearTimeout);
      timers = [];
      window.cancelAnimationFrame(raf);
      animatingXP = false;
      state = fresh();
      render();
    }

    function nextGoal() {
      for (var i = 0; i < GOALS.length; i++) if (!state.goals[GOALS[i]]) return GOALS[i];
      return null;
    }

    function setXP(value) {
      document.querySelectorAll("[data-demo-xp]").forEach(function (n) { n.textContent = String(value); });
      xpBars.forEach(function (b) { b.style.width = Math.min(100, (value / LEVEL_XP) * 100) + "%"; });
    }

    /* recipe maths */
    function status(rk, ing) {
      var have = state.inv[ing.key] || 0;
      var sw = ing.swaps ? swapOf(rk, ing.key) : null;
      if (sw) return { kind: "swapped", swap: sw };
      if (have >= ing.need) return { kind: ITEMS[ing.key].low ? "low" : "have", have: have };
      if (have > 0) return { kind: "short", have: have, short: ing.need - have };
      return { kind: "missing", have: 0, short: ing.need };
    }

    function analyse(rk) {
      var r = RECIPES[rk];
      var s = state.servings[rk];
      var ings = r.ingredients(s);
      var ok = 0;
      var expiring = 0;
      var urgency = 0;
      var missing = [];
      var short = {};
      ings.forEach(function (ing) {
        var st = status(rk, ing);
        ing.st = st;
        if (st.kind === "have" || st.kind === "low" || st.kind === "swapped") ok += 1;
        else {
          missing.push(ing);
          short[ing.key] = st.short;
        }
        if ((state.inv[ing.key] || 0) > 0 && ITEMS[ing.key].days <= 3 && st.kind !== "swapped") {
          expiring += 1;
          urgency += 4 - ITEMS[ing.key].days;
        }
      });
      return { r: r, s: s, ings: ings, ok: ok, total: ings.length, expiring: expiring, urgency: urgency, missing: missing, short: short, method: r.method(state.tools) };
    }

    function restockHas(key) {
      return state.restock.some(function (x) { return x.key === key; });
    }

    function addRestock(key, reason) {
      if (restockHas(key)) return false;
      state.restock.push({ key: key, reason: reason, got: false });
      state.goals.restock = true;
      return true;
    }

    function suggestions() {
      var out = [];
      var push = function (key, reason) {
        if (!restockHas(key) && !out.some(function (x) { return x.key === key; })) out.push({ key: key, reason: reason });
      };
      Object.keys(state.inv).forEach(function (k) { if (ITEMS[k].low && state.inv[k] > 0) push(k, "Running low"); });
      state.usedUp.forEach(function (k) { push(k, "Used up"); });
      var a = analyse(state.recipe);
      a.missing.forEach(function (ing) {
        push(ing.key, (ing.st.kind === "short" ? "Need " + ing.st.short + " more" : "Missing") + " for the " + a.r.short);
      });
      return out;
    }

    /* navigation */
    function go(screen, focus, back) {
      var from = state.screen;
      if (from === "kitchen" && screen !== "kitchen" && screen !== "scan") state.newItems = [];
      state.screen = screen;
      state.swapOpen = null;
      render();
      var el = q('[data-screen="' + screen + '"]');
      el.classList.remove("is-entering", "is-back");
      void el.offsetWidth;
      el.classList.add("is-entering");
      if (back) el.classList.add("is-back");
      if (el.classList.contains("app-screen--scroll")) el.scrollTop = 0;
      if (focus) focusIn(el.querySelector("[data-focus]"));
    }

    function hintTarget(goal) {
      if (state.overlay) return q("[data-overlay-close]");
      var s = state.screen;
      if (goal === "stock") {
        if (s === "scan") return state.scan === "done" ? q("[data-scan-add]") : null;
        if (s !== "kitchen") return tab("kitchen");
        return state.kview !== "groceries" ? q('[data-kview="groceries"]') : q("[data-scan-open]");
      }
      if (goal === "tools") {
        if (s !== "kitchen") return tab("kitchen");
        return state.kview !== "tools" ? q('[data-kview="tools"]') : q('[data-tool="toaster"]');
      }
      if (goal === "adapt") {
        if (s === "recipe") return q('[data-serv="1"]');
        if (s === "cook") return q('[data-recipe="bruschetta"]') || q("[data-recipe]");
        return tab("cook");
      }
      if (goal === "cook") {
        if (s === "recipe") return q("[data-cook-start]");
        if (s === "steps") {
          var st = currentSteps()[state.step];
          if (st.timer && state.timer === "idle") return q("[data-timer-btn]");
          if (st.timer && state.timer === "running") return null;
          return q("[data-next]");
        }
        if (s === "done") return q("[data-collect]");
        if (s === "cook") return q('[data-recipe="bruschetta"]') || q("[data-recipe]");
        return tab("cook");
      }
      if (goal === "restock") {
        if (s === "recipe" && analyse(state.recipe).missing.length) return q("[data-restock-missing]");
        if (s === "restock") return q("[data-restock-add]");
        if (s === "kitchen" && state.kview === "groceries") return q('[data-restock-add="oliveoil"]');
        return tab("restock");
      }
      return null;
    }

    function currentSteps() {
      return RECIPES[state.recipe].steps(state.servings[state.recipe], state.tools);
    }

    /* rendering */
    function renderKitchen() {
      qa("[data-kview]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-kview") === state.kview)); });
      qa("[data-kpanel]").forEach(function (p) { p.hidden = p.getAttribute("data-kpanel") !== state.kview; });
      var keys = Object.keys(state.inv).filter(function (k) { return state.inv[k] > 0; });
      keys.sort(function (a, b) { return ITEMS[a].days - ITEMS[b].days; });
      setHTML(q("[data-inventory]"), keys.map(function (k) {
        var it = ITEMS[k];
        var isNew = state.newItems.indexOf(k) > -1;
        var tail;
        if (it.low) {
          var on = restockHas(k);
          tail = '<span class="p-chip p-chip--warm">Low</span><button class="mini-btn" type="button" data-restock-add="' + k + '"' + (on ? " disabled" : "") +
            ' aria-label="' + (on ? it.name + " is on your restock list" : "Add " + it.name.toLowerCase() + " to restock") + '">' + icon(on ? "i-check" : "i-cart") + "</button>";
        } else {
          tail = '<span class="' + chipClass(it.days) + '">' + daysLabel(it.days) + "</span>";
        }
        return '<li class="inv__row' + (isNew ? " is-new" : "") + (it.low ? " is-low" : "") + '">' + thumb(k) +
          '<span class="inv__name">' + it.name + "<small>" + qtyLabel(k) + ", " + it.loc + (isNew ? ", new" : "") + "</small></span>" + tail + "</li>";
      }).join(""));
      setHTML(q("[data-tools]"), TOOLS.map(function (t) {
        var on = !!state.tools[t.key];
        return '<button class="tool" type="button" data-tool="' + t.key + '" aria-pressed="' + on + '">' + icon(t.icon) + "<b>" + t.name + "</b><small>" + (on ? "Have it" : "Don't have") + "</small></button>";
      }).join(""));
    }

    function renderScan() {
      q(".app-vf").setAttribute("data-state", state.scan);
      qa("[data-vf]").forEach(function (el) { el.hidden = el.getAttribute("data-vf") !== (state.scan === "done" ? "done" : "scanning"); });
      q("[data-scan-found]").hidden = state.scan !== "done";
      q("[data-scan-add]").disabled = state.scan !== "done";
    }

    function renderCook() {
      qa("[data-filter]").forEach(function (b) { b.setAttribute("aria-pressed", String(!!state.filters[b.getAttribute("data-filter")])); });
      var list = Object.keys(RECIPES).map(analyse).filter(function (a) {
        if (state.filters.expiring && a.expiring === 0) return false;
        if (state.filters.quick && a.r.time >= 15) return false;
        return true;
      });
      list.sort(function (a, b) {
        if (a.method.ok !== b.method.ok) return a.method.ok ? -1 : 1;
        if (b.urgency !== a.urgency) return b.urgency - a.urgency;
        return b.ok / b.total - a.ok / a.total;
      });
      var html = list.map(function (a) {
        var rk = Object.keys(RECIPES).filter(function (k) { return RECIPES[k] === a.r; })[0];
        var tags = "";
        if (a.expiring) tags += '<span class="p-chip">Uses ' + a.expiring + " expiring</span>";
        if (!a.method.ok) tags += '<span class="p-chip p-chip--warm">Missing a tool</span>';
        if (state.cooked[rk]) tags += '<span class="p-chip p-chip--fresh">Cooked</span>';
        return '<li><button class="rcard' + (a.method.ok ? "" : " is-blocked") + '" type="button" data-recipe="' + rk + '">' +
          '<img src="' + a.r.img + '" width="128" height="128" alt="" decoding="async">' +
          '<span class="rcard__body"><b>' + a.r.name + "</b><small>You have " + a.ok + " of " + a.total + ", " + a.r.time + " min</small>" +
          (tags ? '<span class="rcard__tags">' + tags + "</span>" : "") + "</span></button></li>";
      }).join("");
      if (!list.length) {
        html = '<li class="recipes__empty">' + (state.scan === "done" ? "Nothing matches these filters." : "Nothing is expiring yet. Scan your groceries in Kitchen first.") + "</li>";
      }
      setHTML(q("[data-recipes]"), html);
    }

    function renderRecipe() {
      var rk = state.recipe;
      var a = analyse(rk);
      q("[data-r-name]").textContent = a.r.name;
      q("[data-r-meta]").textContent = a.r.time + " min";
      var img = q("[data-r-img]");
      if (img.getAttribute("src") !== a.r.hero) img.setAttribute("src", a.r.hero);
      q("[data-r-serv]").textContent = String(a.s);
      q('[data-serv="-1"]').disabled = a.s <= 1;
      q('[data-serv="1"]').disabled = a.s >= 6;
      var tools = q("[data-r-tools]");
      tools.classList.toggle("is-blocked", !a.method.ok);
      setHTML(tools, icon(a.method.ok ? "i-pan" : "i-lock") + "<span>" + a.method.text + "</span>" + (a.method.ok && a.method.adapted ? '<span class="p-chip p-chip--ai">Adapted</span>' : ""));
      setHTML(q("[data-r-ingr]"), a.ings.map(function (ing) {
        var st = ing.st;
        var it = ITEMS[ing.key];
        var cls = "";
        var note = "";
        var tail = "";
        var extra = "";
        if (st.kind === "have") { note = "You have " + qtyLabel(ing.key); tail = icon("i-check").replace('class="icon"', 'class="icon ingr__ok"'); }
        else if (st.kind === "low") { note = "Running low"; tail = icon("i-check").replace('class="icon"', 'class="icon ingr__ok"'); }
        else if (st.kind === "swapped") {
          cls = " is-swapped";
          var swText = ing.swaps.filter(function (x) { return x.key === st.swap; })[0].text;
          note = st.swap === "skip" ? "Skipped" : "Swapped for " + swText.toLowerCase();
          tail = '<button class="mini-btn" type="button" data-unswap="' + ing.key + '">Undo</button>';
        } else if (ing.swaps) {
          cls = " is-missing";
          note = "Not in your kitchen";
          var open = state.swapOpen === ing.key;
          tail = '<button class="mini-btn" type="button" data-swap-open="' + ing.key + '" aria-expanded="' + open + '">' + icon("i-swap") + "Swap</button>";
          if (open) {
            extra = '<span class="swaps">' + ing.swaps.map(function (x) {
              var avail = x.key === "skip" || (state.inv[x.key] || 0) > 0;
              return avail ? '<button type="button" data-swap="' + ing.key + ":" + x.key + '">' + x.text + "</button>" : "";
            }).join("") + "</span>";
          }
        } else {
          cls = st.kind === "short" ? " is-short" : " is-missing";
          note = st.kind === "short" ? "You have " + st.have + ", need " + ing.need : "Not in your kitchen";
          var on = restockHas(ing.key);
          tail = '<span class="p-chip p-chip--warm">' + (st.kind === "short" ? "Need " + st.short : "Missing") + "</span>" +
            '<button class="mini-btn" type="button" data-restock-add="' + ing.key + '"' + (on ? " disabled" : "") + ' aria-label="' +
            (on ? it.name + " is on your restock list" : "Add " + it.name.toLowerCase() + " to restock") + '">' + icon(on ? "i-check" : "i-cart") + "</button>";
        }
        return '<li class="' + cls.trim() + '">' + thumb(ing.key) + '<span class="ingr__name">' + ing.text + "<small>" + note + "</small></span>" + tail + extra + "</li>";
      }).join(""));
      q("[data-r-tip]").textContent = a.r.tip(a.s, state.tools, a.short);
      var addable = a.missing.filter(function (ing) { return !ing.swaps && !restockHas(ing.key); });
      q("[data-restock-missing]").disabled = addable.length === 0;
      q("[data-r-missing-label]").textContent = addable.length ? "Add missing (" + addable.length + ")" : "Nothing to add";
      q("[data-cook-start]").disabled = !a.method.ok;
    }

    function renderSteps() {
      var steps = currentSteps();
      var st = steps[Math.min(state.step, steps.length - 1)];
      var last = state.step === steps.length - 1;
      q("[data-step-count]").textContent = "Step " + (state.step + 1) + " of " + steps.length;
      qa("[data-step-dot]").forEach(function (d, i) { d.classList.toggle("on", i <= state.step); });
      q("[data-step-title]").textContent = st.title;
      q("[data-step-text]").textContent = st.text;
      var img = q("[data-step-img]");
      if (img.getAttribute("src") !== st.img) img.setAttribute("src", st.img);
      var timer = q("[data-timer]");
      timer.hidden = !st.timer;
      timer.setAttribute("data-state", state.timer);
      var tb = q("[data-timer-btn]");
      tb.disabled = state.timer !== "idle";
      tb.textContent = state.timer === "idle" ? "Start 2:00 timer" : state.timer === "running" ? "Resting" : "Rested";
      q("[data-timer-note]").textContent = state.timer === "done" ? "Salt trick done: +20 XP" : "Demo runs two minutes in three seconds.";
      if (state.timer !== "running") q("[data-timer-text]").textContent = state.timer === "done" ? "0:00" : "2:00";
      q("[data-next]").disabled = !!st.timer && state.timer !== "done";
      q("[data-next-label]").textContent = last ? "Finish" : "Next step";
    }

    function renderDone() {
      var r = RECIPES[state.lastCooked || state.recipe];
      q("[data-d-name]").textContent = r.name;
      var img = q("[data-d-img]");
      if (img.getAttribute("src") !== r.hero) img.setAttribute("src", r.hero);
      setHTML(q("[data-d-inv]"), state.changes.map(function (c) {
        return "<li>" + thumb(c.key) + '<b class="inv__name">' + ITEMS[c.key].name + "</b><span>" + c.text + "</span></li>";
      }).join(""));
      var xpList = q("[data-d-xp]");
      xpList.classList.add("done-list--xp");
      setHTML(xpList, r.xp.map(function (x) { return "<li><b>" + x[0] + "</b><span>+" + x[1] + " XP</span></li>"; }).join(""));
      var collect = q("[data-collect]");
      collect.disabled = state.collected;
      collect.lastChild.textContent = state.collected ? "XP collected" : "Collect 60 XP";
      q("[data-share]").disabled = state.shared;
      q("[data-share-label]").textContent = state.shared ? "Shared" : "Share";
    }

    function renderQuests() {
      var done = !!state.cooked.bruschetta;
      var card = q("[data-open-recipe]");
      card.classList.toggle("is-done", done);
      q("[data-q-status]").textContent = done ? "Done tonight. Nothing wasted." : "Uses basil and tomatoes before they expire";
      var cookedAny = Object.keys(state.cooked).length > 0;
      qa("[data-week] i").forEach(function (d, i) { d.classList.toggle("on", i < (cookedAny ? 4 : 3)); });
      q("[data-school-locked]").hidden = state.collected;
      q("[data-school-open]").hidden = !state.collected;
      var nextLine = q("[data-xp-next]");
      if (state.collected && !animatingXP) nextLine.innerHTML = '<span data-demo-xp>500</span> XP. Sauté Specialist at 1,500 XP';
      else if (!state.collected) nextLine.innerHTML = '<span data-demo-xp>' + state.xp + "</span> / 500 XP to Apprentice Cook";
    }

    function renderRestock() {
      var list = state.restock.map(function (x) {
        var it = ITEMS[x.key];
        return '<li class="' + (x.got ? "is-got" : "") + '">' + thumb(x.key) + '<span class="inv__name">' + it.name + "<small>" + x.reason + "</small></span>" +
          '<button class="tick" type="button" data-rs-tick="' + x.key + '" aria-pressed="' + x.got + '" aria-label="' + it.name + ', got it"><span>' + icon("i-check") + "</span></button></li>";
      }).join("");
      setHTML(q("[data-rs-list]"), list || '<li class="rs__empty">Nothing on your list yet.</li>');
      var sug = suggestions();
      setHTML(q("[data-rs-suggest]"), sug.map(function (x) {
        var it = ITEMS[x.key];
        return "<li>" + thumb(x.key) + '<span class="inv__name">' + it.name + "<small>" + x.reason + "</small></span>" +
          '<button class="mini-btn" type="button" data-restock-add="' + x.key + '" aria-label="Add ' + it.name.toLowerCase() + ' to your list">' + icon("i-plus") + "Add</button></li>";
      }).join("") || '<li class="rs__empty">No suggestions right now.</li>');
      q("[data-order-note]").hidden = !state.orderNote;
    }

    function renderHub() {
      var r = RECIPES[state.lastCooked || "bruschetta"];
      q("[data-hub-mine]").hidden = !state.shared;
      q("[data-hub-sample]").hidden = state.shared;
      q("[data-hub-cap]").textContent = r.name + ". Nothing wasted.";
      var img = q("[data-hub-img]");
      if (img.getAttribute("src") !== r.hero) img.setAttribute("src", r.hero);
      q("[data-cheer]").setAttribute("aria-pressed", String(state.cheered));
    }

    function render() {
      var active = document.activeElement;
      var restore = null;
      if (active && app.contains(active)) {
        FOCUS_KEYS.some(function (k) {
          if (active.hasAttribute(k)) { restore = "[" + k + '="' + active.getAttribute(k) + '"]'; return true; }
          return false;
        });
      }

      qa("[data-screen]").forEach(function (el) { el.hidden = el.getAttribute("data-screen") !== state.screen; });
      app.setAttribute("data-chrome", FULLSCREEN[state.screen] ? "full" : "tabs");
      var activeTab = TAB_OF[state.screen];
      qa("[data-tab]").forEach(function (b) {
        if (b.getAttribute("data-tab") === activeTab) b.setAttribute("aria-current", "page");
        else b.removeAttribute("aria-current");
      });

      renderKitchen();
      renderScan();
      renderCook();
      renderRecipe();
      renderSteps();
      renderDone();
      renderQuests();
      renderRestock();
      renderHub();
      q("[data-overlay]").hidden = !state.overlay;

      var goal = nextGoal();
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

      qa(".is-hint").forEach(function (n) { n.classList.remove("is-hint"); });
      var target = goal ? hintTarget(goal) : state.overlay ? q("[data-overlay-close]") : null;
      if (target && !target.disabled && !target.closest("[hidden]")) target.classList.add("is-hint");

      if (restore && active && !document.body.contains(active)) {
        var again = q(restore);
        if (again && !again.disabled) focusIn(again);
        else focusIn(q('[data-screen="' + state.screen + '"] [data-focus]'));
      }
    }

    /* actions */
    function openScan() {
      go("scan", true);
      if (state.scan !== "idle") return;
      state.scan = "scanning";
      render();
      say("Scanning groceries.");
      later(function () {
        state.scan = "done";
        render();
        say("Found basil, tomatoes and eggs, with their expiry dates.");
        focusIn(q("[data-scan-add]"));
      }, fast() ? 500 : 2300);
    }

    function addScanned() {
      state.inv.basil = 1;
      state.inv.tomatoes = 4;
      state.inv.eggs = 6;
      state.newItems = ["basil", "tomatoes", "eggs"];
      state.goals.stock = true;
      state.kview = "groceries";
      go("kitchen", true, true);
      say("Added basil, tomatoes and eggs. Basil expires first, in 1 day.");
    }

    function openRecipe(rk) {
      state.recipe = rk;
      state.step = 0;
      state.timer = "idle";
      go("recipe", true);
      say(RECIPES[rk].name + ". " + analyse(rk).method.text + ".");
    }

    function changeServings(delta) {
      var rk = state.recipe;
      var next = Math.max(1, Math.min(6, state.servings[rk] + delta));
      if (next === state.servings[rk]) return;
      state.servings[rk] = next;
      state.goals.adapt = true;
      render();
      var a = analyse(rk);
      say("Servings: " + next + ". " + (a.missing.length ? a.missing.length + " item" + (a.missing.length > 1 ? "s" : "") + " short." : "You have everything."));
    }

    function startCooking() {
      state.step = 0;
      state.timer = "idle";
      go("steps", true);
      var st = currentSteps()[0];
      say("Step 1: " + st.title + ". " + st.text);
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
        if (state.timer !== "running") return;
        state.timer = "done";
        render();
        say("Two minutes done. Salt trick bonus: 20 XP.");
        focusIn(q("[data-next]"));
      }, duration);
    }

    function nextStep() {
      var steps = currentSteps();
      if (state.step < steps.length - 1) {
        state.step += 1;
        render();
        focusIn(q("[data-step-title]"));
        say("Step " + (state.step + 1) + ": " + steps[state.step].title + ". " + steps[state.step].text);
        return;
      }
      finishCooking();
    }

    function finishCooking() {
      var rk = state.recipe;
      var a = analyse(rk);
      var changes = [];
      a.ings.forEach(function (ing) {
        var sw = ing.swaps ? swapOf(rk, ing.key) : null;
        if (sw && sw !== "skip") {
          if (state.inv[sw] > 0 && !ITEMS[sw].low) {
            changes.push({ key: sw, text: state.inv[sw] + " to " + (state.inv[sw] - 1) });
            state.inv[sw] -= 1;
          }
          return;
        }
        var have = state.inv[ing.key] || 0;
        if (!have) return;
        if (ing.key === "basil") {
          state.inv.basil = 0;
          changes.push({ key: "basil", text: "Used up" });
          if (state.usedUp.indexOf("basil") < 0) state.usedUp.push("basil");
        } else if (ing.key === "tomatoes" || ing.key === "eggs") {
          var left = Math.max(0, have - ing.need);
          changes.push({ key: ing.key, text: left ? have + " to " + left : "Used up" });
          state.inv[ing.key] = left;
          if (!left && state.usedUp.indexOf(ing.key) < 0) state.usedUp.push(ing.key);
        } else if (ing.use) {
          changes.push({ key: ing.key, text: "Used " + ing.use });
        }
      });
      state.changes = changes;
      state.cooked[rk] = true;
      state.lastCooked = rk;
      go("done", true);
      say("Cooked. Inventory updated automatically. " + (state.collected ? "" : "Collect your 60 XP."));
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
        state.goals.cook = true;
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
        setXP(Math.round(START_XP + (LEVEL_XP - START_XP) * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = window.requestAnimationFrame(frame);
        else finish();
      };
      raf = window.requestAnimationFrame(frame);
    }

    app.addEventListener("click", function (event) {
      var t = event.target.closest("button");
      if (!t || !app.contains(t) || t.disabled) return;
      var v;

      if ((v = t.getAttribute("data-tab"))) {
        if (TAB_OF[state.screen] !== v || state.screen !== v) go(v, false);
        say(TITLES[v]);
      } else if ((v = t.getAttribute("data-nav"))) {
        go(v, true, true);
      } else if ((v = t.getAttribute("data-kview"))) {
        state.kview = v;
        render();
      } else if (t.hasAttribute("data-scan-open")) {
        openScan();
      } else if (t.hasAttribute("data-scan-add")) {
        addScanned();
      } else if ((v = t.getAttribute("data-tool"))) {
        state.tools[v] = !state.tools[v];
        state.goals.tools = true;
        render();
        var ra = analyse("bruschetta").method;
        say((state.tools[v] ? "Added " : "Removed ") + TOOLS.filter(function (x) { return x.key === v; })[0].name + ". Bruschetta: " + ra.text + ".");
      } else if ((v = t.getAttribute("data-filter"))) {
        state.filters[v] = !state.filters[v];
        render();
      } else if ((v = t.getAttribute("data-recipe"))) {
        openRecipe(v);
      } else if ((v = t.getAttribute("data-open-recipe"))) {
        openRecipe(v);
      } else if ((v = t.getAttribute("data-serv"))) {
        changeServings(parseInt(v, 10));
      } else if ((v = t.getAttribute("data-swap-open"))) {
        state.swapOpen = state.swapOpen === v ? null : v;
        render();
        if (state.swapOpen) focusIn(q("[data-swap]"));
      } else if ((v = t.getAttribute("data-swap"))) {
        var parts = v.split(":");
        state.swaps[state.recipe + ":" + parts[0]] = parts[1];
        state.swapOpen = null;
        state.goals.adapt = true;
        render();
        focusIn(q('[data-unswap="' + parts[0] + '"]'));
        say(parts[1] === "skip" ? "Skipped " + ITEMS[parts[0]].name.toLowerCase() + "." : "Swapped " + ITEMS[parts[0]].name.toLowerCase() + " for " + ITEMS[parts[1]].name.toLowerCase() + ", which you have.");
      } else if ((v = t.getAttribute("data-unswap"))) {
        delete state.swaps[state.recipe + ":" + v];
        render();
        focusIn(q('[data-swap-open="' + v + '"]'));
      } else if ((v = t.getAttribute("data-restock-add"))) {
        var a = analyse(state.recipe);
        var miss = a.missing.filter(function (ing) { return ing.key === v; })[0];
        var reason = ITEMS[v].low ? "Running low" : state.usedUp.indexOf(v) > -1 && !miss ? "Used up" : miss ? (miss.st.kind === "short" ? "Need " + miss.st.short + " more" : "Missing") + " for the " + a.r.short : "Added";
        if (addRestock(v, reason)) say("Added " + ITEMS[v].name.toLowerCase() + " to your restock list.");
        render();
      } else if (t.hasAttribute("data-restock-missing")) {
        var added = [];
        analyse(state.recipe).missing.forEach(function (ing) {
          if (ing.swaps) return;
          if (addRestock(ing.key, (ing.st.kind === "short" ? "Need " + ing.st.short + " more" : "Missing") + " for the " + RECIPES[state.recipe].short)) added.push(ITEMS[ing.key].name.toLowerCase());
        });
        render();
        if (added.length) say("Added " + added.join(" and ") + " to your restock list.");
      } else if ((v = t.getAttribute("data-rs-tick"))) {
        state.restock.forEach(function (x) { if (x.key === v) x.got = !x.got; });
        state.goals.restock = true;
        render();
      } else if (t.hasAttribute("data-order")) {
        state.orderNote = true;
        render();
        say("Online ordering is an idea for after launch. It is not part of the 40-week plan.");
      } else if (t.hasAttribute("data-cook-start")) {
        startCooking();
      } else if (t.hasAttribute("data-timer-btn")) {
        startTimer();
      } else if (t.hasAttribute("data-next")) {
        nextStep();
      } else if (t.hasAttribute("data-collect")) {
        collect();
      } else if (t.hasAttribute("data-share")) {
        state.shared = true;
        render();
        say("Shared to the Food Hub.");
      } else if (t.hasAttribute("data-cheer")) {
        state.cheered = !state.cheered;
        render();
      } else if (t.hasAttribute("data-overlay-close")) {
        state.overlay = false;
        state.kview = "groceries";
        go("kitchen", true, true);
        say("Back in your kitchen. Inventory is up to date.");
      }
    });

    document.querySelectorAll("[data-demo-reset]").forEach(function (b) {
      b.addEventListener("click", function () {
        reset();
        say("Demo restarted. Start by scanning groceries in Kitchen.");
      });
    });

    reset();
  }
})();
