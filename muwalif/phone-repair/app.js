"use strict";

const byId = (id) => document.getElementById(id);
const selectAll = (selector) => Array.from(document.querySelectorAll(selector));
const arabicNumber = new Intl.NumberFormat("ar-SA-u-nu-arab", { maximumFractionDigits: 2 });
const format = (value) => arabicNumber.format(value);
const money = (value) => format(value) + " ر.س";

function parseNumber(raw) {
  const value = raw.trim()
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace("٫", ".");
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(value)) return NaN;
  return Number(value);
}

function setPressed(buttons, selected) {
  for (const button of buttons) button.setAttribute("aria-pressed", String(button === selected));
}

function setupFilm() {
  const launch = byId("film-start");
  const film = byId("film");
  const frame = byId("film-frame");
  const help = byId("film-help");
  const phone = window.matchMedia("(max-width: 767px), (max-width: 960px) and (hover: none) and (pointer: coarse)");

  launch.addEventListener("click", () => {
    const format = phone.matches ? "portrait" : "landscape";
    film.poster = "./assets/video/" + format + ".webp";
    film.src = "./assets/video/" + format + ".mp4?v=phone";
    frame.dataset.format = format;
    launch.hidden = true;
    film.hidden = false;
    film.focus({ preventScroll: true });
    film.play().catch(() => {
      help.textContent = "اضغط تشغيل في المشغّل، أو افتح ملف الفيديو من الرابط أدناه.";
    });
  });
  film.addEventListener("playing", () => { help.textContent = ""; });
  film.addEventListener("error", () => {
    help.textContent = "تعذّر تشغيل الفيديو هنا. افتح ملف الفيديو من الرابط أدناه.";
  });
}

const stageButtons = selectAll("[data-stage]");
const consent = byId("demo-consent");
const reachable = byId("demo-reachable");
let stage = "intake";
const stages = {
  intake: {
    label: "قيد الصيانة", detail: "الجهاز مسجّل على الإيصال الحالي",
    customer: "هذا إيصال الصيانة.", reply: "تم تسجيل جهازك برقم الإيصال ١٢٧.",
    note: "رقم الإيصال يربط الجهاز بسجل المحل.", time: "",
  },
  ready: {
    label: "جاهز للاستلام", detail: "الفني اختبر الجهاز وأكد جاهزيته",
    customer: "إيصال صيانة · ١٢٧", reply: "الفني سجّل الجاهزية. أكّد موافقة الزبون وأنه يقدر يفتح واتساب لعرض الإشعار.",
    note: "الجاهزية تأكدت بعد اختبار الفني.", timeLabel: "جاهز", time: "١٨:٠٠",
  },
  collected: {
    label: "تم الاستلام", detail: "الموظف أكد استلام الزبون للجهاز",
    customer: "جيت أستلم الجهاز رقم ١٢٧.", reply: "حيّاك، تم تأكيد استلام الجهاز.",
    note: "من الجاهزية إلى الاستلام ساعتان و١٥ دقيقة في هذا المثال.", timeLabel: "استلام", time: "٢٠:١٥",
  },
};

function renderStage(announce = false) {
  const state = stages[stage];
  const reply = stage === "ready" && consent.checked && reachable.checked
    ? "هلا، جهازك المرتبط بالإيصال رقم ١٢٧ جاهز للاستلام. تقدر تستلمه خلال أوقات الدوام."
    : state.reply;
  byId("order-state").textContent = state.label;
  byId("order-detail").textContent = state.detail;
  byId("customer-line").textContent = state.customer;
  byId("branch-line").textContent = reply;
  byId("order-note").textContent = state.note;
  byId("event-row").hidden = !state.time;
  byId("event-type").textContent = state.timeLabel || "";
  byId("event-time").textContent = state.time;
  if (announce) byId("stage-status").textContent = state.label + ". " + reply;
}
for (const button of stageButtons) {
  button.addEventListener("click", () => {
    stage = button.dataset.stage;
    setPressed(stageButtons, button);
    renderStage(true);
  });
}
consent.addEventListener("change", () => renderStage(true));
reachable.addEventListener("change", () => renderStage(true));

const calcInputs = [
  ["days", "أيام التشغيل في الفترة", 1, 366, true],
  ["orders", "طلبات مؤهلة يوميًا", 0, 5000],
  ["before", "استفسارات قبل الإشعار لكل ١٠٠ طلب", 0, 10000],
  ["after", "استفسارات مع الإشعار لكل ١٠٠ طلب", 0, 10000],
  ["reply", "دقائق الرد لكل استفسار", 0, 1440],
  ["seconds", "ثواني التنفيذ الإضافية لكل طلب", 0, 86400],
  ["hourly", "قيمة ساعة العمل للتحليل (ر.س)", 0, 10000],
  ["subscription", "اشتراك الفترة (ر.س)", 0, 100000],
  ["messages", "رسائل الفترة (ر.س)", 0, 100000],
];
const scenarios = {
  conservative: { orders: 10, before: 35, after: 25, reply: 1.5, seconds: 30 },
  base: { orders: 15, before: 40, after: 20, reply: 2, seconds: 20 },
  upside: { orders: 20, before: 45, after: 15, reply: 2.5, seconds: 12 },
};
const common = { days: 26, hourly: 30, subscription: 99, messages: 20 };

function setupCalculator() {
  const form = byId("calc-form");
  const toggles = selectAll("[data-scenario]");
  const registry = calcInputs.map(([key, title, min, max, whole], i) => {
    const wrap = document.createElement("div");
    wrap.className = "field";
    const label = document.createElement("label");
    const input = document.createElement("input");
    const error = document.createElement("p");
    const id = "input-" + key;
    label.textContent = title;
    label.htmlFor = id;
    Object.assign(input, { id, type: "text", inputMode: whole ? "numeric" : "decimal", maxLength: 13, dir: "ltr" });
    error.id = id + "-error";
    error.className = "field-error";
    input.setAttribute("aria-describedby", error.id);
    wrap.append(label, input, error);
    byId(i < 6 ? "calc-operating" : "calc-cost").append(wrap);
    return { key, min, max, whole, input, error };
  });

  function update() {
    const values = {};
    let passes = true;
    for (const { key, min, max, whole, input, error } of registry) {
      const value = parseNumber(input.value);
      const valid = Number.isFinite(value) && value >= min && value <= max && (!whole || Number.isInteger(value));
      values[key] = value;
      passes = passes && valid;
      input.setAttribute("aria-invalid", String(!valid));
      error.hidden = valid;
      error.textContent = valid ? "" : "أدخل " + (whole ? "عددًا صحيحًا" : "رقمًا") + " من " + format(min) + " إلى " + format(max) + ".";
    }
    byId("metrics").hidden = !passes;
    byId("calc-invalid").hidden = passes;
    if (!passes) {
      byId("result-period").textContent = "";
      return;
    }
    const volume = values.days * values.orders;
    const change = volume * (values.before - values.after) / 100;
    const replyMinutes = change * values.reply;
    const executionMinutes = volume * values.seconds / 60;
    const net = replyMinutes - executionMinutes;
    byId("result-period").textContent = format(values.days) + " يوم تشغيل";
    byId("inquiry-result").textContent = format(Math.abs(change)) + (change < 0 ? " استفسارًا أكثر" : " استفسارًا أقل");
    byId("time-result").textContent = format(Math.abs(net)) + (net < 0 ? " دقيقة عمل إضافية" : " دقيقة صافية");
    byId("time-detail").textContent = format(Math.abs(replyMinutes)) + (replyMinutes < 0 ? " دقيقة رد إضافية" : " دقيقة رد مستعادة") + " · " + format(executionMinutes) + " دقيقة تنفيذ";
    byId("value-result").textContent = money(Math.abs(net * values.hourly / 60)) + (net < 0 ? " عبء وقت إضافي" : "");
    byId("budget-result").textContent = "ميزانية الاشتراك والرسائل " + money(values.subscription + values.messages);
  }

  function apply(key) {
    const values = { ...common, ...scenarios[key] };
    for (const field of registry) field.input.value = String(values[field.key]);
    update();
  }

  for (const button of toggles) {
    button.addEventListener("click", () => { setPressed(toggles, button); apply(button.dataset.scenario); });
  }
  form.addEventListener("input", () => { setPressed(toggles, null); update(); });
  form.addEventListener("submit", (event) => { event.preventDefault(); update(); });
  apply("base");
}

setupFilm();
setupCalculator();
