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

function setupDemo() {
  const modes = selectAll("[data-mode]");
  const walkButtons = selectAll("[data-walk]");
  const slotButtons = selectAll("[data-slot]");
  const reminderButtons = selectAll("[data-reminder]");
  const status = byId("demo-status");
  const request = byId("request-change");
  const options = byId("change-options");
  const approval = byId("approve-change");
  const originalNote = byId("schedule-note").textContent;
  let pending = false;

  function announce(message, error = false) {
    status.dataset.error = String(error);
    status.textContent = message;
  }

  function showNewSlot(slotState) {
    const row = byId("new-slot");
    row.hidden = slotState === null;
    row.classList.toggle("active", slotState === "confirmed");
    byId("new-status").textContent = slotState === "confirmed" ? "حجز مؤكد · قص شعر" : "بانتظار الاعتماد";
  }

  function resetChoice() {
    pending = false;
    setPressed(slotButtons, null);
    approval.hidden = true;
    showNewSlot(null);
  }

  for (const button of modes) {
    button.addEventListener("click", () => {
      setPressed(modes, button);
      setPressed(walkButtons, null);
      resetChoice();
      const booking = button.dataset.mode === "booking";
      byId("walk-panel").hidden = booking;
      byId("booking-panel").hidden = !booking;
      byId("old-slot").classList.add("active");
      byId("old-status").textContent = "حجز مؤكد · قص شعر";
      byId("walk-status").textContent = "متاح لقص الشعر";
      byId("schedule-note").textContent = originalNote;
      byId("confirmed-time").textContent = "٧:٣٠";
      byId("booking-message").textContent = "تم تأكيد موعدك.";
      request.hidden = false;
      request.setAttribute("aria-expanded", "false");
      options.hidden = true;
      announce(booking ? "حجز أحمد مؤكد الساعة ٧:٣٠." : "دخول بدون موعد. سعد متاح الآن.");
    });
  }

  for (const button of walkButtons) {
    button.addEventListener("click", () => {
      setPressed(walkButtons, button);
      const wait = button.dataset.walk === "wait";
      byId("walk-status").textContent = wait ? "متاح لقص الشعر" : "قص شعر · أُسند لسعد";
      byId("schedule-note").textContent = wait ? "دور أحمد · زبون في الانتظار. الحجز الساعة ٧:٣٠ مؤكد." : "سعد يبدأ قص الشعر الآن. حجز أحمد الساعة ٧:٣٠ مؤكد.";
      announce(wait ? "سجّلنا دورك مع أحمد. نعلّمك إذا قرب دورك." : "سجّلنا لك قص شعر مع سعد.");
    });
  }

  request.addEventListener("click", () => {
    const open = options.hidden;
    options.hidden = !open;
    request.setAttribute("aria-expanded", String(open));
    if (!open) {
      resetChoice();
      announce("حجزك الأصلي مؤكد الساعة ٧:٣٠.");
    }
  });

  for (const button of slotButtons) {
    button.addEventListener("click", () => {
      pending = button.dataset.slot === "available";
      setPressed(slotButtons, pending ? button : null);
      showNewSlot(pending ? "pending" : null);
      approval.hidden = !pending;
      announce(
        pending ? "٨:٣٠ بانتظار الاعتماد. حجزك الأصلي ٧:٣٠ ما زال مؤكدًا." : "الوقت ما عاد متاح. اختر وقت ثاني. حجزك الأصلي ٧:٣٠ مؤكد.",
        !pending,
      );
    });
  }

  approval.addEventListener("click", () => {
    if (!pending) return;
    pending = false;
    showNewSlot("confirmed");
    byId("old-slot").classList.remove("active");
    byId("old-status").textContent = "الوقت متاح";
    byId("confirmed-time").textContent = "٨:٣٠";
    byId("booking-message").textContent = "تم اعتماد الموعد الجديد.";
    byId("schedule-note").textContent = "انتقل حجز أحمد إلى ٨:٣٠. خانة ٧:٣٠ صارت متاحة.";
    announce("تم اعتماد موعدك مع أحمد الساعة ٨:٣٠.");
    options.hidden = true;
    request.hidden = true;
    request.setAttribute("aria-expanded", "false");
    status.setAttribute("tabindex", "-1");
    status.focus();
  });

  for (const button of reminderButtons) {
    button.addEventListener("click", () => {
      setPressed(reminderButtons, button);
      byId("reminder-status").textContent = button.dataset.reminder === "yes"
        ? "هلا، حان التذكير اللي طلبته. إذا ودك بموعد مع أحمد، رد علينا. لإيقاف التذكير اكتب «إيقاف»."
        : "تم حفظ الزيارة في المثال. التذكير متوقف.";
    });
  }
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
    film.src = "./assets/video/" + format + ".mp4?v=shop";
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

// Editable inputs and example values mirror Time-Money-Model-AR.md.
const fields = [
  { key: "days", label: "أيام التشغيل في الفترة", min: 1, max: 366, whole: true },
  { key: "bookings", label: "الحجوزات المؤهلة يوميًا", min: 0, max: 500, help: "متوسط الحجوزات المؤكدة في يوم عمل." },
  { key: "baseline", label: "الإكمال قبل التجربة ٪", min: 0, max: 100 },
  { key: "pilot", label: "نسبة الإكمال المتوقعة ٪", min: 0, max: 100 },
  { key: "spare", label: "الخانات الشاغرة فعلاً يوميًا", min: 0, max: 500, help: "خانات يستطيع الحلاق بيعها مع مراعاة الدور والراحة." },
  { key: "timeBefore", label: "دقائق المتابعة قبل التجربة يوميًا", min: 0, max: 1440 },
  { key: "timeAfter", label: "دقائق المتابعة أثناء التجربة يوميًا", min: 0, max: 1440 },
  { key: "price", label: "متوسط قيمة الخدمة (ر.س)", min: 0, max: 100000 },
  { key: "commission", label: "عمولة الحلاق ٪", min: 0, max: 100 },
  { key: "supplies", label: "مستهلكات الخدمة (ر.س)", min: 0, max: 100000 },
  { key: "payment", label: "رسوم الدفع لكل خدمة (ر.س)", min: 0, max: 100000 },
  { key: "fixed", label: "الاشتراك والتكلفة الثابتة (ر.س)", min: 0, max: 1000000 },
  { key: "messages", label: "الرسائل المدفوعة في الفترة (ر.س)", min: 0, max: 1000000 },
  { key: "setup", label: "الإعداد لمرة واحدة (ر.س)", min: 0, max: 1000000, optional: true },
  { key: "recovery", label: "عدد فترات استرداد الإعداد", min: 1, max: 120, whole: true, optional: true },
  { key: "hourly", label: "قيمة ساعة العمل (ر.س)", min: 0, max: 100000, optional: true, help: "اختياري، لتحليل الوقت فقط." },
];

const shared = { days: 26, payment: 0, fixed: 299, setup: null, recovery: null, hourly: null };
const scenarios = {
  conservative: { bookings: 8, baseline: 80, pilot: 85, spare: 1, price: 50, commission: 45, supplies: 4, messages: 52, timeBefore: 25, timeAfter: 25 },
  base: { bookings: 10, baseline: 80, pilot: 90, spare: 3, price: 60, commission: 40, supplies: 3, messages: 39, timeBefore: 25, timeAfter: 15 },
  upside: { bookings: 14, baseline: 75, pilot: 92, spare: 4, price: 75, commission: 35, supplies: 3, messages: 36.4, timeBefore: 25, timeAfter: 25 },
};

function estimate(values) {
  const missed = values.bookings * (100 - values.baseline) / 100;
  const gain = values.bookings * Math.max(0, values.pilot - values.baseline) / 100;
  const extra = Math.min(gain, missed, values.spare) * values.days;
  const unitMargin = values.price * (100 - values.commission) / 100 - values.supplies - values.payment;
  const fixed = values.fixed + values.messages + (values.recovery ? (values.setup ?? 0) / values.recovery : 0);
  const cash = Math.round((extra * unitMargin - fixed) * 100) / 100;
  const ratio = unitMargin > 0 ? fixed / unitMargin : null;
  const breakEven = ratio === null ? null : Math.ceil(Number(ratio.toFixed(9)));
  const capacity = Math.min(missed, values.spare) * values.days;
  return { extra, cash, breakEven, capacity, minutes: Math.max(0, values.timeBefore - values.timeAfter) * values.days };
}

function timeLabel(mins) {
  const rounded = Math.round(mins);
  const hours = Math.floor(rounded / 60);
  const remainder = rounded % 60;
  const parts = [];
  if (hours) parts.push(format(hours) + (hours >= 3 && hours <= 10 ? " ساعات" : " ساعة"));
  if (remainder || parts.length === 0) parts.push(format(remainder) + " دقيقة");
  return parts.join(" و");
}

function setupCalculator() {
  const form = byId("calc-form");
  const toggles = selectAll("[data-scenario]");
  const registry = fields.map((field, index) => {
    const id = "input-" + field.key;
    const wrap = document.createElement("div");
    wrap.className = field.key === "spare" ? "field wide-field" : "field";
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = field.label;
    const input = document.createElement("input");
    Object.assign(input, { id, name: field.key, dir: "ltr", type: "text", inputMode: field.whole ? "numeric" : "decimal", maxLength: 14 });
    const error = document.createElement("p");
    error.className = "field-error";
    error.id = id + "-error";
    error.hidden = true;
    wrap.append(label, input);
    const descriptions = [error.id];
    if (field.help) {
      const help = document.createElement("p");
      help.className = "field-help";
      help.id = id + "-help";
      help.textContent = field.help;
      descriptions.unshift(help.id);
      wrap.append(help);
    }
    input.setAttribute("aria-describedby", descriptions.join(" "));
    wrap.append(error);
    byId(index < 7 ? "calc-operating" : "calc-cost").append(wrap);
    return { ...field, input, error };
  });

  function update() {
    const values = {};
    let passes = true;
    let costsPass = true;
    for (const [index, field] of registry.entries()) {
      const raw = field.input.value.trim();
      const value = field.optional && !raw ? null : parseNumber(raw);
      const valid = value === null || (Number.isFinite(value) && value >= field.min && value <= field.max && (!field.whole || Number.isInteger(value)));
      values[field.key] = value;
      field.input.setAttribute("aria-invalid", String(!valid));
      field.error.hidden = valid;
      field.error.textContent = valid ? "" : "أدخل " + (field.whole ? "عددًا صحيحًا" : "رقمًا") + " من " + format(field.min) + " إلى " + format(field.max) + ".";
      if (!valid) {
        passes = false;
        if (index >= 7) costsPass = false;
      }
    }
    byId("calc-cost-details").dataset.invalid = String(!costsPass);
    byId("metrics").hidden = !passes;
    byId("calc-invalid").hidden = passes;
    if (!passes) {
      byId("result-period").textContent = "";
      byId("calc-invalid").textContent = costsPass
        ? "راجع المدخلات المعلَّمة لعرض نتيجة الفترة."
        : "راجع المدخلات المعلَّمة، ومنها حقول في تفاصيل السعر والتكاليف.";
      return;
    }

    const { extra, cash, breakEven, capacity, minutes } = estimate(values);
    byId("result-period").textContent = format(values.days) + " يوم تشغيل";
    byId("result-cash").textContent = cash < 0 ? "التكلفة أعلى من المساهمة بـ " + money(-cash) : money(cash);
    const setup = values.setup ? " · إعداد لمرة واحدة " + money(values.setup) + (values.recovery ? " موزّع على " + format(values.recovery) + " فترة" : " خارج حسبة الفترة") : "";
    byId("result-services").textContent = format(extra) + " خدمة إضافية محتملة" + setup;
    byId("result-break-even").textContent = breakEven === null ? "التعادل غير ممكن" : (breakEven === 0 ? "بدون خدمات إضافية" : format(breakEven) + " خدمة");
    byId("result-limit").textContent = breakEven === null
      ? "مساهمة الخدمة صفر أو أقل حسب المدخلات."
      : breakEven > capacity + 1e-9
        ? "التعادل يتجاوز الخانات المتاحة والحجوزات المفقودة في هذه الفترة."
        : "";
    byId("result-time").textContent = timeLabel(minutes);
    byId("result-hourly").textContent = values.hourly === null ? "" : "قيمة الوقت التقديرية " + money(minutes / 60 * values.hourly);
  }

  function applyScenario(name) {
    const values = { ...shared, ...scenarios[name] };
    for (const { key, input } of registry) {
      input.value = values[key] === null ? "" : String(values[key]);
    }
    update();
  }

  for (const button of toggles) {
    button.addEventListener("click", () => {
      setPressed(toggles, button);
      applyScenario(button.dataset.scenario);
    });
  }
  form.addEventListener("input", () => {
    setPressed(toggles, null);
    update();
  });
  form.addEventListener("submit", (event) => { event.preventDefault(); update(); });
  applyScenario("base");
}

setupDemo();
setupFilm();
setupCalculator();
