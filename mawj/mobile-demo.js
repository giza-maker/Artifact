(function () {
  "use strict";

  const copy = {
    en: {
      concept: "Interactive concept · Sample venues", location: "Riyadh", hello: "Good afternoon, Noor",
      sub: "Your next good hair day.", search: "Search services or salons", filter: "Filters",
      explore: "Explore", saved: "Saved", bookings: "Bookings", profile: "Profile", featured: "Featured near you",
      all: "All", hair: "Hair", barber: "Barber", nails: "Nails", spa: "Spa", from: "from", next: "Next",
      back: "Back", save: "Save venue", unsave: "Remove saved venue", saveDone: "Venue saved", removeDone: "Removed from saved", verified: "Sample verified profile",
      portfolio: "Portfolio", services: "Choose a service", professional: "Choose a professional",
      date: "Choose a date", time: "Choose a time", confirm: "Confirm sample booking", booked: "Booking confirmed",
      bookedSub: "Your sample appointment is ready.", done: "View bookings", upcoming: "Upcoming sample booking",
      emptySaved: "Nothing saved yet", emptySavedSub: "Tap a heart to keep a sample venue here.",
      emptySearch: "No sample venues found", emptySearchSub: "Try another service or clear your filters.", clear: "Clear search",
      noBookings: "No bookings yet", noBookingsSub: "Choose a venue to try the booking flow.", browse: "Browse venues",
      profileTitle: "Your MAWJ", profileSub: "A calm home for beauty and wellness.", language: "العربية",
      reviews: "sample ratings", select: "Select", selected: "Selected", with: "with", at: "at", today: "Today",
      tomorrow: "Tomorrow", home: "Explore home", makeup: "Makeup", anyone: "Anyone available", payment: "Payment method",
      atSalon: "Pay at salon", online: "Online · demo only", demoNotice: "Concept only — this does not create a real appointment.", reset: "Reset demo",
      audience: "Audience", everyone: "Everyone", women: "Women", men: "Men", budget: "Max budget", any: "Any", under100: "Under SAR 100", under200: "Under SAR 200", apply: "Apply filters"
    },
    ar: {
      concept: "تصور تفاعلي · أماكن تجريبية", location: "الرياض", hello: "مساء الخير، نور",
      sub: "إطلالتك القادمة تبدأ هنا.", search: "ابحث عن خدمة أو صالون", filter: "التصفية",
      explore: "استكشاف", saved: "المحفوظات", bookings: "الحجوزات", profile: "حسابي", featured: "مختارات قريبة منك",
      all: "الكل", hair: "شعر", barber: "حلاقة", nails: "أظافر", spa: "سبا", from: "من", next: "التالي",
      back: "رجوع", save: "حفظ المكان", unsave: "إزالة من المحفوظات", saveDone: "تم حفظ المكان", removeDone: "تمت الإزالة من المحفوظات", verified: "ملف تجريبي موثّق",
      portfolio: "الأعمال", services: "اختيار الخدمة", professional: "اختيار المختص", date: "اختيار التاريخ",
      time: "اختيار الوقت", confirm: "تأكيد الحجز التجريبي", booked: "تم تأكيد الحجز",
      bookedSub: "موعدك التجريبي جاهز.", done: "عرض الحجوزات", upcoming: "حجز تجريبي قادم",
      emptySaved: "لا توجد محفوظات", emptySavedSub: "يمكن حفظ أي مكان تجريبي عبر زر القلب.",
      emptySearch: "لا توجد نتائج تجريبية", emptySearchSub: "يمكن تجربة خدمة أخرى أو مسح البحث.", clear: "مسح البحث",
      noBookings: "لا توجد حجوزات", noBookingsSub: "اختر مكاناً لتجربة مسار الحجز.", browse: "تصفح الأماكن",
      profileTitle: "عالمك في موج", profileSub: "وجهة هادئة للجمال والعناية.", language: "English",
      reviews: "تقييمات تجريبية", select: "اختيار", selected: "محدد", with: "مع", at: "الساعة", today: "اليوم",
      tomorrow: "غداً", home: "الرئيسية", makeup: "مكياج", anyone: "أي مختص متاح", payment: "طريقة الدفع",
      atSalon: "الدفع في الصالون", online: "دفع إلكتروني · تجريبي", demoNotice: "تصور تجريبي فقط — لن يتم إنشاء موعد حقيقي.", reset: "إعادة التجربة",
      audience: "الفئة", everyone: "الجميع", women: "نساء", men: "رجال", budget: "الميزانية القصوى", any: "الكل", under100: "أقل من 100 ر.س", under200: "أقل من 200 ر.س", apply: "تطبيق التصفية"
    }
  };

  const venues = [
    { id: "luma", audience: "women", minPrice: 145, online: true, name: { en: "Luma Hair Studio", ar: "استوديو لوما للشعر" }, area: { en: "Al Olaya", ar: "العليا" }, cat: "hair", image: "assets/woman-hair.webp", rating: "4.9", count: "128", price: "SAR 145", services: [{ en: "Signature cut & finish", ar: "قص وتصفيف مميز", p: "SAR 185", d: "60 min" }, { en: "Gloss & blow-dry", ar: "لمعة وسيشوار", p: "SAR 145", d: "45 min" }] },
    { id: "north", audience: "men", minPrice: 85, online: false, name: { en: "North Barber Club", ar: "نادي نورث للحلاقة" }, area: { en: "Hittin", ar: "حطين" }, cat: "barber", image: "assets/barber.webp", rating: "4.8", count: "94", price: "SAR 85", services: [{ en: "Cut & beard detail", ar: "قص وتهذيب اللحية", p: "SAR 120", d: "50 min" }, { en: "Classic haircut", ar: "قصة كلاسيكية", p: "SAR 85", d: "35 min" }] },
    { id: "serein", audience: "women", minPrice: 110, online: true, name: { en: "Serein Beauty House", ar: "دار سيرين للجمال" }, area: { en: "Al Malqa", ar: "الملقا" }, cat: "nails", image: "assets/salon.webp", rating: "4.7", count: "76", price: "SAR 110", services: [{ en: "Manicure ritual", ar: "جلسة مانيكير", p: "SAR 110", d: "45 min" }, { en: "Restorative spa", ar: "جلسة سبا ترميمية", p: "SAR 220", d: "75 min" }] },
    { id: "muse", audience: "women", minPrice: 190, online: true, name: { en: "Muse Makeup Room", ar: "غرفة ميوز للمكياج" }, area: { en: "Al Nakheel", ar: "النخيل" }, cat: "makeup", image: "assets/woman-hair.webp", rating: "4.8", count: "61", price: "SAR 190", services: [{ en: "Soft occasion makeup", ar: "مكياج مناسبات ناعم", p: "SAR 190", d: "55 min" }, { en: "Full glam", ar: "مكياج كامل", p: "SAR 280", d: "75 min" }] }
  ];

  let root;
  const state = { lang: "en", view: "explore", detail: null, category: "all", query: "", filtersOpen: false, audience: "everyone", budget: "any", saved: new Set(), choice: {}, booking: null };
  const t = (key) => copy[state.lang][key] || key;
  const icon = (name, cls = "") => `<svg class="app-icon ${cls}" aria-hidden="true"><use href="assets/icons.svg#${name}"></use></svg>`;
  const local = (obj) => obj[state.lang];
  const moneyText = s => state.lang === "ar" ? s.replace(/^SAR\s+(.+)$/, "$1 ر.س") : s;
  const durationText = s => state.lang === "ar" ? s.replace(" min", " دقيقة") : s;

  function mount() {
    root = document.getElementById("app-demo");
    if (!root) return;
    root.classList.add("app-demo");
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onChange);
    render();
  }

  function shell(content) {
    const nav = [["explore", "home"], ["saved", "bookmark"], ["bookings", "calendar"], ["profile", "user"]];
    return `<div class="app-phone" dir="${state.lang === "ar" ? "rtl" : "ltr"}">
      <div class="app-speaker" aria-hidden="true"></div>
      <div class="app-screen">
        <div class="app-status" aria-hidden="true"><b>9:41</b><span>${icon("wifi")} ${icon("battery")}</span></div>
        <div class="app-scroll" tabindex="0">${content}</div>
        ${state.detail || state.view === "success" ? "" : `<nav class="app-nav" aria-label="${t("home")}">${nav.map(([v, i]) => `<button class="app-nav-item ${state.view === v ? "is-active" : ""}" data-view="${v}" ${state.view === v ? 'aria-current="page"' : ""}>${icon(i)}<span>${t(v)}</span></button>`).join("")}</nav>`}
        <div class="app-live" role="status" aria-live="polite"></div>
      </div>
    </div>`;
  }

  function header() {
    return `<header class="app-home-head"><div class="app-topline"><span class="app-location">${icon("map-pin")} ${t("location")} ${icon("chevron-down")}</span><button class="app-lang" data-lang aria-label="${t("language")}">${icon("globe")} ${t("language")}</button></div><h3>${t("hello")}</h3><span>${t("sub")}</span></header>`;
  }

  function venueCard(v) {
    const saved = state.saved.has(v.id);
    return `<article class="app-card"><button class="app-card-main" data-detail="${v.id}" aria-label="${local(v.name)}"><img src="${v.image}" alt="" loading="lazy"><span class="app-card-copy"><b>${local(v.name)}</b><small>${icon("map-pin")} ${local(v.area)}</small><span class="app-rating">${icon("star")} ${v.rating} <i>(${v.count})</i></span><em>${t("from")} ${moneyText(v.price)}</em></span></button><button class="app-heart ${saved ? "is-saved" : ""}" data-save="${v.id}" aria-label="${t(saved ? "unsave" : "save")}" aria-pressed="${saved}">${icon("heart")}</button></article>`;
  }

  function explore() {
    const cats = ["all", "hair", "barber", "nails", "makeup", "spa"];
    const q = state.query.trim().toLowerCase();
    const max = state.budget === "any" ? Infinity : Number(state.budget);
    const filtered = venues.filter(v => (state.category === "all" || v.cat === state.category || (state.category === "spa" && v.id === "serein")) && (state.audience === "everyone" || v.audience === state.audience) && v.minPrice < max && (!q || `${v.name.en} ${v.name.ar} ${v.area.en} ${v.area.ar} ${v.cat}`.toLowerCase().includes(q)));
    const filters = state.filtersOpen ? `<div class="app-filter-panel" id="app-filters"><label>${t("audience")}<select data-filter-field="audience"><option value="everyone" ${state.audience === "everyone" ? "selected" : ""}>${t("everyone")}</option><option value="women" ${state.audience === "women" ? "selected" : ""}>${t("women")}</option><option value="men" ${state.audience === "men" ? "selected" : ""}>${t("men")}</option></select></label><label>${t("budget")}<select data-filter-field="budget"><option value="any" ${state.budget === "any" ? "selected" : ""}>${t("any")}</option><option value="100" ${state.budget === "100" ? "selected" : ""}>${t("under100")}</option><option value="200" ${state.budget === "200" ? "selected" : ""}>${t("under200")}</option></select></label><button class="app-primary" data-apply>${t("apply")}</button></div>` : "";
    return `${header()}<section class="app-search-wrap"><label class="app-sr-only" for="app-search">${t("search")}</label>${icon("search")}<input id="app-search" type="search" value="${escapeHtml(state.query)}" placeholder="${t("search")}"><button data-filter aria-label="${t("filter")}" aria-expanded="${state.filtersOpen}" aria-controls="app-filters">${icon("sliders")}</button></section>${filters}<div class="app-tabs" role="group" aria-label="${t("filter")}">${cats.map(c => `<button data-cat="${c}" class="${state.category === c ? "is-active" : ""}" aria-pressed="${state.category === c}">${t(c)}</button>`).join("")}</div><section class="app-section"><div class="app-section-title"><h4>${t("featured")}</h4><span>${filtered.length}</span></div>${filtered.length ? `<div class="app-cards">${filtered.map(venueCard).join("")}</div>` : empty("emptySearch", "emptySearchSub", "clear", "data-clear")}</section>`;
  }

  function empty(title, sub, action, attr) { return `<div class="app-empty">${icon("sparkles")}<h4>${t(title)}</h4><p>${t(sub)}</p><button class="app-primary" ${attr}>${t(action)}</button></div>`; }

  function detail() {
    const v = venues.find(x => x.id === state.detail);
    const step = state.choice.service == null ? 0 : state.choice.pro == null ? 1 : state.choice.date == null ? 2 : 3;
    const pros = v.id === "north" ? (state.lang === "ar" ? [t("anyone"), "عمر", "فهد"] : [t("anyone"), "Omar", "Fahad"]) : (state.lang === "ar" ? [t("anyone"), "ريم", "سارة", "ليان"] : [t("anyone"), "Reem", "Sara", "Layan"]);
    const dates = dateLabels();
    const times = ["10:30", "13:00", "16:30", "19:00"];
    let picker = `<h4>${t("services")}</h4><div class="app-options">${v.services.map((s, i) => optionButton("service", i, `<span><b>${local(s)}</b><small>${durationText(s.d)}</small></span><strong>${moneyText(s.p)}</strong>`)).join("")}</div>`;
    if (step >= 1) picker += `<h4>${t("professional")}</h4><div class="app-pros">${pros.map((p, i) => optionButton("pro", i, `<span class="app-avatar">${p[0]}</span><b>${p}</b>`)).join("")}</div>`;
    if (step >= 2) picker += `<h4>${t("date")}</h4><div class="app-choice-row">${dates.map((d, i) => optionButton("date", i, `<b>${d}</b>`)).join("")}</div>`;
    if (step >= 3) picker += `<h4>${t("time")}</h4><div class="app-choice-row app-times">${times.map((time, i) => optionButton("time", i, `<b>${time}</b>`)).join("")}</div><h4>${t("payment")}</h4><div class="app-choice-row app-payments">${optionButton("payment", "atSalon", `<b>${t("atSalon")}</b>`)}${v.online ? optionButton("payment", "online", `<b>${t("online")}</b>`) : ""}</div>`;
    return `<div class="app-detail"><div class="app-cover"><img src="${v.image}" alt=""><button class="app-circle app-back" data-back aria-label="${t("back")}">${icon(state.lang === "ar" ? "arrow-right" : "arrow-left")}</button><button class="app-circle app-detail-save ${state.saved.has(v.id) ? "is-saved" : ""}" data-save="${v.id}" aria-label="${t(state.saved.has(v.id) ? "unsave" : "save")}" aria-pressed="${state.saved.has(v.id)}">${icon("heart")}</button></div><section class="app-detail-body"><h3>${local(v.name)}</h3><p class="app-place">${icon("map-pin")} ${local(v.area)} · ${icon("star")} ${v.rating} (${v.count} ${t("reviews")})</p><span class="app-verified">${icon("shield-check")} ${t("verified")}</span><div class="app-portfolio" aria-label="${t("portfolio")}"><img src="${v.image}" alt=""><img src="${v.image}" alt=""><img src="${v.image}" alt=""></div>${picker}<p class="app-demo-notice">${t("demoNotice")}</p><button class="app-primary app-confirm" data-confirm ${state.choice.time == null || state.choice.payment == null ? "disabled" : ""}>${t("confirm")}</button></section></div>`;
  }

  function optionButton(type, value, html) {
    const selected = state.choice[type] === value;
    return `<button class="app-option ${selected ? "is-selected" : ""}" data-pick="${type}" data-value="${value}" aria-pressed="${selected}">${html}${selected ? icon("check") : ""}</button>`;
  }

  function savedView() { const list = venues.filter(v => state.saved.has(v.id)); return pageHead("saved") + (list.length ? `<div class="app-cards">${list.map(venueCard).join("")}</div>` : empty("emptySaved", "emptySavedSub", "browse", "data-view=\"explore\"")); }
  function bookingsView() { if (!state.booking) return pageHead("bookings") + empty("noBookings", "noBookingsSub", "browse", "data-view=\"explore\""); const b = state.booking; const pros = b.venue.id === "north" ? (state.lang === "ar" ? [t("anyone"),"عمر","فهد"] : [t("anyone"),"Omar","Fahad"]) : (state.lang === "ar" ? [t("anyone"),"ريم","سارة","ليان"] : [t("anyone"),"Reem","Sara","Layan"]); return `${pageHead("bookings")}<h4 class="app-upcoming">${t("upcoming")}</h4><article class="app-booking-card"><span class="app-booking-date">${icon("calendar")}<b>${dateLabels()[b.date]}</b><small>${["10:30","13:00","16:30","19:00"][b.time]}</small></span><div><h4>${local(b.venue.name)}</h4><p>${local(b.venue.services[b.service])}</p><span>${t("with")} ${pros[b.pro]}</span></div></article>`; }
  function profileView() { return `${pageHead("profile")}<div class="app-profile-card">${icon("sparkles")}<h4>${t("profileTitle")}</h4><p>${t("profileSub")}</p><button class="app-primary" data-lang>${icon("globe")} ${t("language")}</button><button class="app-reset" data-reset>${t("reset")}</button></div>`; }
  function pageHead(key) { return `<header class="app-page-head"><h3>${t(key)}</h3></header>`; }

  function success() { const v = venues.find(x => x.id === state.detail) || state.booking.venue; return `<div class="app-success"><span class="app-success-icon">${icon("check")}</span><h3>${t("booked")}</h3><p>${t("bookedSub")}</p><article><b>${local(v.name)}</b><span>${local(v.services[state.booking.service])}</span><span>${icon("calendar")} ${dateLabels()[state.booking.date]} · ${icon("clock")} ${["10:30","13:00","16:30","19:00"][state.booking.time]}</span></article><button class="app-primary" data-done>${t("done")}</button></div>`; }

  function dateLabels() {
    const now = new Date();
    const days = [new Date(now), new Date(now), new Date(now)];
    days[1].setDate(now.getDate() + 1);
    days[2].setDate(now.getDate() + 2);
    const locale = state.lang === "ar" ? "ar-SA" : "en-US";
    const short = new Intl.DateTimeFormat(locale, { weekday: "short", day: "numeric" });
    return [t("today"), t("tomorrow"), short.format(days[2])];
  }

  function render(focusSelector, resetScroll = false, reveal = false) {
    if (!root) return;
    const previousScroll = root.querySelector(".app-scroll")?.scrollTop || 0;
    let content;
    if (state.view === "success") content = success();
    else if (state.detail) content = detail();
    else content = state.view === "explore" ? explore() : state.view === "saved" ? savedView() : state.view === "bookings" ? bookingsView() : profileView();
    root.innerHTML = shell(content);
    if (resetScroll && !matchMedia("(prefers-reduced-motion: reduce)").matches) root.querySelector(".app-scroll")?.animate([{ opacity: .25, transform: "translateX(7px)" }, { opacity: 1, transform: "none" }], { duration: 180, easing: "ease-out" });
    requestAnimationFrame(() => {
      const scroller = root.querySelector(".app-scroll");
      if (scroller && !resetScroll) scroller.scrollTop = previousScroll;
      const target = focusSelector ? root.querySelector(focusSelector) : null;
      target?.focus({ preventScroll: true });
      if (reveal) target?.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }

  function announce(message) { const live = root.querySelector(".app-live"); if (live) live.textContent = message; }
  function onInput(e) { if (e.target.id === "app-search") { state.query = e.target.value; render("#app-search"); const i = root.querySelector("#app-search"); i?.setSelectionRange(state.query.length, state.query.length); } }
  function onChange(e) { const field = e.target.dataset.filterField; if (field) { state[field] = e.target.value; render(`[data-filter-field="${field}"]`); } }
  function onClick(e) {
    const el = e.target.closest("button"); if (!el) return;
    if (el.dataset.view) { state.view = el.dataset.view; state.detail = null; render("h3", true); }
    else if (el.hasAttribute("data-lang")) { state.lang = state.lang === "en" ? "ar" : "en"; render("[data-lang]"); window.dispatchEvent(new CustomEvent("mawj:language", { detail: { lang: state.lang } })); }
    else if (el.dataset.cat) { state.category = el.dataset.cat; render(`[data-cat="${state.category}"]`); }
    else if (el.hasAttribute("data-filter")) { state.filtersOpen = !state.filtersOpen; render("[data-filter]"); }
    else if (el.hasAttribute("data-apply")) { state.filtersOpen = false; render("[data-filter]", false, true); announce(t("apply")); }
    else if (el.hasAttribute("data-clear")) { state.query = ""; state.category = "all"; render("#app-search"); }
    else if (el.dataset.save) { const id = el.dataset.save; state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id); render(`[data-save="${id}"]`); announce(t(state.saved.has(id) ? "saveDone" : "removeDone")); }
    else if (el.dataset.detail) { state.detail = el.dataset.detail; state.choice = el.dataset.detail === "north" ? { payment: "atSalon" } : {}; render("[data-back]", true); }
    else if (el.hasAttribute("data-back")) { state.detail = null; state.choice = {}; render(`[data-detail]`, true); }
    else if (el.dataset.pick) { const type = el.dataset.pick; state.choice[type] = type === "payment" ? el.dataset.value : Number(el.dataset.value); const order = ["service", "pro", "date", "time", "payment"]; order.slice(order.indexOf(type) + 1).forEach(k => delete state.choice[k]); if (state.detail === "north") state.choice.payment = "atSalon"; const target = type === "payment" || type === "time" ? ".app-confirm" : `[data-pick="${type}"][data-value="${el.dataset.value}"]`; render(target, false, true); }
    else if (el.hasAttribute("data-confirm")) { const venue = venues.find(v => v.id === state.detail); state.booking = { ...state.choice, venue }; state.view = "success"; render("[data-done]", true); }
    else if (el.hasAttribute("data-done")) { state.view = "bookings"; state.detail = null; render("h3", true); }
    else if (el.hasAttribute("data-reset")) { state.view = "explore"; state.detail = null; state.category = "all"; state.query = ""; state.audience = "everyone"; state.budget = "any"; state.saved.clear(); state.choice = {}; state.booking = null; render("#app-search", true); }
  }
  function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]); }

  function openDemo() { root?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" }); }
  window.MawjDemo = {
    setLanguage(lang) { if (copy[lang]) { state.lang = lang; render(); } },
    selectCategory(category) { if (["all", "hair", "barber", "nails", "makeup", "spa"].includes(category)) { state.view = "explore"; state.detail = null; state.category = category; state.query = ""; render(`[data-cat="${category}"]`); openDemo(); } },
    open: openDemo
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount, { once: true }); else mount();
})();
