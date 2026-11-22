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
    film.src = "./assets/video/" + format + ".mp4";
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
let stage = "intake";
const stages = {
  intake: {
    label: "قيد التجهيز", detail: "الطلب مسجّل على الإيصال الحالي",
    customer: "هذا إيصال الغسيل.", reply: "تم تسجيل طلب ١٢٧ برقم الإيصال.",
    note: "رقم الإيصال يربط الطلب بسجل الفرع.", time: "",
  },
  ready: {
    label: "جاهز للاستلام", detail: "القطع كاملة وعلى رف التسليم",
    customer: "طلب مغسلة · ١٢٧", reply: "الموظف سجل الجاهزية. أضف موافقة الزبون لعرض مثال الإشعار.",
    note: "الجاهزية تأكدت من الموظف.", timeLabel: "جاهز", time: "١٨:٠٠",
  },
  collected: {
    label: "تم التسليم", detail: "الموظف سجّل استلام الزبون",
    customer: "جيت أستلم طلب ١٢٧.", reply: "حيّاك، تم استلام الطلب.",
    note: "من الجاهزية إلى الاستلام ساعتان و١٥ دقيقة في هذا المثال.", timeLabel: "استلام", time: "٢٠:١٥",
  },
};

function renderStage(announce = false) {
  const state = stages[stage];
  const reply = stage === "ready" && consent.checked
    ? "هلا، طلبك رقم ١٢٧ جاهز للاستلام. تقدر تستلمه خلال أوقات الدوام."
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
  conservative: { before: 30, after: 22, reply: 1.5, seconds: 30 },
  base: { before: 40, after: 20, reply: 2, seconds: 20 },
  upside: { before: 45, after: 18, reply: 2.5, seconds: 12 },
};
const common = { days: 26, orders: 25, hourly: 30, subscription: 99, messages: 30 };

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

function setupPlan() {
  const form = byId("pilot-form");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const plan = {
      title: "تجربة موالف لمغاسل الملابس",
      created_at: new Date().toISOString(),
      city: "الرياض",
      timezone: "Asia/Riyadh",
      district: byId("district").value.trim() || null,
      shop: byId("shop").value.trim() || null,
      branches: 1,
      setup_days: 7,
      comparison_days: 14,
      follow_up_hours: 72,
      target_eligible_orders: 40,
      workflow: [
        "سجل أول طلب جاهز لكل زبون وافق على تحديثات واتساب.",
        "عند الجاهزية وزع الطلبات عشوائيًا بالتساوي داخل الفرع.",
        "مجموعة الإشعار: رسالة واحدة من رقم الفرع خلال ١٥ دقيقة في الدوام.",
        "مجموعة المقارنة: الإجراء المعتاد. أجب عن الاستفسارات في الحالتين.",
      ],
      fields: ["معرّف بديل", "المجموعة الأصلية", "نوع الخدمة", "وقت الجاهزية", "وقت الإرسال أو سبب التعذر", "استفسارات الحالة وأوقاتها", "وقت الاستلام", "ثواني التنفيذ الإضافية"],
      measurement: [
        "استفسارات الجاهزية لكل ١٠٠ طلب من الجاهزية إلى الاستلام أو ٤٨ ساعة، أيهما أسبق.",
        "نسبة الاستلام خلال ٢٤ ساعة. متوسط الساعات إلى الاستلام محسوبًا حتى سقف ٧٢ ساعة.",
        "صف المجموعتين كما وُزّعتا حتى لو تعذّر الإرسال. أبقِ أرقام العملاء لدى الفرع.",
      ],
      ready_message: "هلا، طلبك رقم [رقم الإيصال] جاهز للاستلام من [اسم المغسلة]. تقدر تستلمه خلال أوقات الدوام [الساعات].",
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(plan, null, 2) + "\n"], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "muwalif-laundry-pilot.json";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    byId("download-status").textContent = "تم تجهيز ملف خطة التجربة للتنزيل.";
  });
  form.querySelector("button[type=submit]").disabled = false;
}

setupFilm();
setupCalculator();
setupPlan();
