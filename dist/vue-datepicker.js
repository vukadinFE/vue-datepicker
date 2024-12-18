import { useAttrs as Kn, openBlock as T, createElementBlock as V, createElementVNode as he, unref as o, reactive as qt, computed as G, ref as ee, toRef as Vt, watch as lt, defineComponent as Ue, onMounted as We, onUnmounted as Xt, renderSlot as ce, normalizeProps as ze, mergeProps as He, Fragment as we, normalizeStyle as nt, createCommentVNode as q, createTextVNode as yt, toDisplayString as Ke, onBeforeUpdate as Gn, nextTick as at, normalizeClass as Me, withModifiers as jt, renderList as Oe, withDirectives as la, vShow as ra, createBlock as Se, withCtx as De, withKeys as Qn, createVNode as tt, Transition as Lt, createSlots as Ge, useSlots as Ct, guardReactiveProps as Ze, resolveDynamicComponent as ia, h as qn, render as xa, getCurrentScope as Xn, onScopeDispose as Jn, isRef as en, Teleport as Zn } from "vue";
import { format as vt, isEqual as Yt, set as Pe, startOfMonth as xn, isAfter as It, getYear as pe, getMonth as $e, setMonth as el, setYear as ft, addMonths as St, subMonths as Kt, isValid as oa, isBefore as Gt, eachDayOfInterval as pn, setHours as tl, setMinutes as al, setSeconds as yn, setMilliseconds as gn, getHours as gt, getMinutes as Dt, getSeconds as Nt, startOfWeek as La, endOfWeek as hn, parse as Ia, isDate as nl, addHours as ll, addYears as bn, subYears as kn, endOfYear as wn, startOfYear as sa, differenceInYears as rl, add as Dn, sub as ol, getWeek as sl, getISOWeek as ul, addDays as Tt, isSameQuarter as tn, eachQuarterOfInterval as il, startOfQuarter as dl, endOfQuarter as an, getQuarter as nn, getDay as cl, differenceInCalendarDays as fl } from "date-fns";
function zt() {
  const e = Kn();
  return T(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img",
      ...e
    },
    [
      he("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      he("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      he("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      he("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
zt.compatConfig = {
  MODE: 3
};
function Mn() {
  return T(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      he("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      he("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Mn.compatConfig = {
  MODE: 3
};
function za() {
  return T(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      he("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
za.compatConfig = {
  MODE: 3
};
function Ha() {
  return T(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      he("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Ha.compatConfig = {
  MODE: 3
};
function Ua() {
  return T(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      he("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      he("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Ua.compatConfig = {
  MODE: 3
};
function Wa() {
  return T(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      he("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Wa.compatConfig = {
  MODE: 3
};
function Va() {
  return T(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      he("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Va.compatConfig = {
  MODE: 3
};
const xe = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), ja = (e, t, l) => {
  const a = Na(e, t, l);
  return a || W();
}, vl = (e, t, l) => {
  const a = t.dateInTz ? xe(new Date(e), t.dateInTz) : W(e);
  return l ? Je(a, !0) : a;
}, Na = (e, t, l) => {
  if (!e) return null;
  const a = l ? Je(W(e), !0) : W(e);
  return t ? t.exactMatch ? vl(e, t, l) : xe(a, t.timezone) : a;
}, ml = (e, t) => {
  if (!e) return 0;
  const l = /* @__PURE__ */ new Date(), a = new Date(l.toLocaleString("en-US", { timeZone: "UTC" })), n = new Date(l.toLocaleString("en-US", { timeZone: e })), i = (t ?? n).getTimezoneOffset() / 60;
  return (+a - +n) / (1e3 * 60 * 60) - i;
};
var ot = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(ot || {}), st = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(st || {}), Pt = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Pt || {}), je = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(je || {});
const pl = ["timestamp", "date", "iso"];
var qe = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(qe || {}), Ce = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Ce || {});
function ln(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function yl(e) {
  return (t) => vt(xe(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const gl = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(yl(e));
    } catch {
      n = a.map(ln(t));
    }
  else
    n = a.map(ln(t));
  const i = n.slice(0, l), c = n.slice(l + 1, n.length);
  return [n[l]].concat(...c).concat(...i);
}, Ka = (e, t, l) => {
  const a = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    a.push({ value: +n, text: Sn(n, t) });
  return l ? a.reverse() : a;
}, $n = (e, t, l) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
    const c = i < 10 ? `0${i}` : i;
    return /* @__PURE__ */ new Date(`2017-${c}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const i = l === "long" ? "LLLL" : "LLL";
      return a.map((c, h) => {
        const f = vt(xe(c, "UTC"), i, { locale: e });
        return {
          text: f.charAt(0).toUpperCase() + f.substring(1),
          value: h
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: l, timeZone: "UTC" });
  return a.map((i, c) => {
    const h = n.format(i);
    return {
      text: h.charAt(0).toUpperCase() + h.substring(1),
      value: c
    };
  });
}, hl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Le = (e) => {
  const t = o(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, bl = (e) => ({ type: "dot", ...e ?? {} }), An = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Ga = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ee = (e) => e, rn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, on = (e) => e === null, Tn = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, kl = (e) => {
  const t = [], l = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(l(n));
  }
  return t;
}, Qt = (e, t, l) => {
  const a = l != null, n = t != null;
  if (!a && !n) return !1;
  const i = +l, c = +t;
  return a && n ? +e > i || +e < c : a ? +e > i : n ? +e < c : !1;
}, Et = (e, t) => kl(e).map((l) => l.map((a) => {
  const { active: n, disabled: i, isBetween: c, highlighted: h } = t(a);
  return {
    ...a,
    active: n,
    disabled: i,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: i,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: i && n,
      dp__cell_in_between: c,
      "dp--highlighted": h
    }
  };
})), kt = (e, t, l = !1) => {
  e && t.allowStopPropagation && (l && e.stopImmediatePropagation(), e.stopPropagation());
}, wl = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function Dl(e, t) {
  let l = [...document.querySelectorAll(wl())];
  l = l.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = l.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= l.length))
    return l[a + (t ? -1 : 1)];
}
const Ea = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Sn = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), Qa = (e) => vt(e, "dd-MM-yyyy"), $a = (e) => Array.isArray(e), ua = (e, t) => t.get(Qa(e)), Ml = (e, t) => e ? t ? t instanceof Map ? !!ua(e, t) : t(W(e)) : !1 : !0, Xe = (e, t, l = !1, a) => {
  if (e.key === Ce.enter || e.key === Ce.space)
    return l && e.preventDefault(), t();
  if (a) return a(e);
}, sn = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].some(
  (e) => navigator.userAgent.includes(e)
) || navigator.userAgent.includes("Mac") && "ontouchend" in document, un = (e, t, l, a, n, i) => {
  const c = Ia(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: i });
  return oa(c) && nl(c) ? a || n ? c : Pe(c, {
    hours: +l.hours,
    minutes: +(l == null ? void 0 : l.minutes),
    seconds: +(l == null ? void 0 : l.seconds),
    milliseconds: 0
  }) : null;
}, $l = (e, t, l, a, n, i) => {
  const c = Array.isArray(l) ? l[0] : l;
  if (typeof t == "string")
    return un(e, t, c, a, n, i);
  if (Array.isArray(t)) {
    let h = null;
    for (const f of t)
      if (h = un(e, f, c, a, n, i), h)
        break;
    return h;
  }
  return typeof t == "function" ? t(e) : null;
}, W = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Al = (e, t, l) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), i = e.getDate().toString().padStart(2, "0"), c = e.getHours().toString().padStart(2, "0"), h = e.getMinutes().toString().padStart(2, "0"), f = l ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${i}T${c}:${h}:${f}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Je = (e, t) => {
  const l = W(JSON.parse(JSON.stringify(e))), a = Pe(l, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? xn(a) : a;
}, wt = (e, t, l, a) => {
  let n = e ? W(e) : W();
  return (t || t === 0) && (n = tl(n, +t)), (l || l === 0) && (n = al(n, +l)), (a || a === 0) && (n = yn(n, +a)), gn(n, 0);
}, Be = (e, t) => !e || !t ? !1 : Gt(Je(e), Je(t)), Ae = (e, t) => !e || !t ? !1 : Yt(Je(e), Je(t)), Ne = (e, t) => !e || !t ? !1 : It(Je(e), Je(t)), da = (e, t, l) => e != null && e[0] && (e != null && e[1]) ? Ne(l, e[0]) && Be(l, e[1]) : e != null && e[0] && t ? Ne(l, e[0]) && Be(l, t) || Be(l, e[0]) && Ne(l, t) : !1, ut = (e) => {
  const t = Pe(new Date(e), { date: 1 });
  return Je(t);
}, Aa = (e, t, l) => t && (l || l === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, l] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Rt = (e) => ({
  hours: gt(e),
  minutes: Dt(e),
  seconds: Nt(e)
}), Pn = (e, t) => {
  if (t) {
    const l = pe(W(t));
    if (l > e) return 12;
    if (l === e) return $e(W(t));
  }
}, Rn = (e, t) => {
  if (t) {
    const l = pe(W(t));
    return l < e ? -1 : l === e ? $e(W(t)) : void 0;
  }
}, Ft = (e) => {
  if (e) return pe(W(e));
}, Cn = (e, t) => {
  const l = Ne(e, t) ? t : e, a = Ne(t, e) ? t : e;
  return pn({ start: l, end: a });
}, Tl = (e) => {
  const t = St(e, 1);
  return { month: $e(t), year: pe(t) };
}, mt = (e, t) => {
  const l = La(e, { weekStartsOn: +t }), a = hn(e, { weekStartsOn: +t });
  return [l, a];
}, On = (e, t) => {
  const l = {
    hours: gt(W()),
    minutes: Dt(W()),
    seconds: t ? Nt(W()) : 0
  };
  return Object.assign(l, e);
}, bt = (e, t, l) => [Pe(W(e), { date: 1 }), Pe(W(), { month: t, year: l, date: 1 })], pt = (e, t, l) => {
  let a = e ? W(e) : W();
  return (t || t === 0) && (a = el(a, t)), l && (a = ft(a, l)), a;
}, _n = (e, t, l, a, n) => {
  if (!a || n && !t || !n && !l) return !1;
  const i = n ? St(e, 1) : Kt(e, 1), c = [$e(i), pe(i)];
  return n ? !Pl(...c, t) : !Sl(...c, l);
}, Sl = (e, t, l) => Be(...bt(l, e, t)) || Ae(...bt(l, e, t)), Pl = (e, t, l) => Ne(...bt(l, e, t)) || Ae(...bt(l, e, t)), Bn = (e, t, l, a, n, i, c) => {
  if (typeof t == "function" && !c) return t(e);
  const h = l ? { locale: l } : void 0;
  return Array.isArray(e) ? `${vt(e[0], i, h)}${n && !e[1] ? "" : a}${e[1] ? vt(e[1], i, h) : ""}` : vt(e, i, h);
}, _t = (e) => {
  if (e) return null;
  throw new Error(Ga.prop("partial-range"));
}, aa = (e, t) => {
  if (t) return e();
  throw new Error(Ga.prop("range"));
}, Fa = (e) => Array.isArray(e) ? oa(e[0]) && (e[1] ? oa(e[1]) : !0) : e ? oa(e) : !1, Rl = (e, t) => Pe(t ?? W(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Ta = (e, t, l, a) => {
  if (!e) return !0;
  if (a) {
    const n = l === "max" ? Gt(e, t) : It(e, t), i = { seconds: 0, milliseconds: 0 };
    return n || Yt(Pe(e, i), Pe(t, i));
  }
  return l === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, Sa = (e, t, l) => e ? Rl(e, t) : W(l ?? t), dn = (e, t, l, a, n) => {
  if (Array.isArray(a)) {
    const c = Sa(e, a[0], t), h = Sa(e, a[1], t);
    return Ta(a[0], c, l, !!t) && Ta(a[1], h, l, !!t) && n;
  }
  const i = Sa(e, a, t);
  return Ta(a, i, l, !!t) && n;
}, Pa = (e) => Pe(W(), Rt(e)), Cl = (e, t) => e instanceof Map ? Array.from(e.values()).filter((l) => pe(W(l)) === t).map((l) => $e(l)) : [], Ol = (e, t, l) => {
  if (e instanceof Map) {
    const a = Array.from(e.values()).filter((n) => pe(W(n)) === t).map((n) => $e(n));
    return a.length ? a.includes(l) : !0;
  }
  return !0;
}, Yn = (e, t, l) => typeof e == "function" ? e({ month: t, year: l }) : !!e.months.find((a) => a.month === t && a.year === l), qa = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), In = (e) => vt(e, "yyyy-MM-dd"), Ut = qt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Nn = () => {
  const e = (a) => {
    Ut.menuFocused = a;
  }, t = (a) => {
    Ut.shiftKeyInMenu !== a && (Ut.shiftKeyInMenu = a);
  };
  return {
    control: G(() => ({ shiftKeyInMenu: Ut.shiftKeyInMenu, menuFocused: Ut.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Re = qt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Ra = ee(null), na = ee(!1), Ca = ee(!1), Oa = ee(!1), _a = ee(!1), Ve = ee(0), Ie = ee(0), Mt = () => {
  const e = G(() => na.value ? [...Re.selectionGrid, Re.actionRow].filter((d) => d.length) : Ca.value ? [
    ...Re.timePicker[0],
    ...Re.timePicker[1],
    _a.value ? [] : [Ra.value],
    Re.actionRow
  ].filter((d) => d.length) : Oa.value ? [...Re.monthPicker, Re.actionRow] : [Re.monthYear, ...Re.calendar, Re.time, Re.actionRow].filter((d) => d.length)), t = (d) => {
    Ve.value = d ? Ve.value + 1 : Ve.value - 1;
    let R = null;
    e.value[Ie.value] && (R = e.value[Ie.value][Ve.value]), !R && e.value[Ie.value + (d ? 1 : -1)] ? (Ie.value = Ie.value + (d ? 1 : -1), Ve.value = d ? 0 : e.value[Ie.value].length - 1) : R || (Ve.value = d ? Ve.value - 1 : Ve.value + 1);
  }, l = (d) => {
    if (Ie.value === 0 && !d || Ie.value === e.value.length && d) return;
    Ie.value = d ? Ie.value + 1 : Ie.value - 1, e.value[Ie.value] ? e.value[Ie.value] && !e.value[Ie.value][Ve.value] && Ve.value !== 0 && (Ve.value = e.value[Ie.value].length - 1) : Ie.value = d ? Ie.value - 1 : Ie.value + 1;
  }, a = (d) => {
    let R = null;
    e.value[Ie.value] && (R = e.value[Ie.value][Ve.value]), R ? R.focus({ preventScroll: !na.value }) : Ve.value = d ? Ve.value - 1 : Ve.value + 1;
  }, n = () => {
    t(!0), a(!0);
  }, i = () => {
    t(!1), a(!1);
  }, c = () => {
    l(!1), a(!0);
  }, h = () => {
    l(!0), a(!0);
  }, f = (d, R) => {
    Re[R] = d;
  }, I = (d, R) => {
    Re[R] = d;
  }, v = () => {
    Ve.value = 0, Ie.value = 0;
  };
  return {
    buildMatrix: f,
    buildMultiLevelMatrix: I,
    setTimePickerBackRef: (d) => {
      Ra.value = d;
    },
    setSelectionGrid: (d) => {
      na.value = d, v(), d || (Re.selectionGrid = []);
    },
    setTimePicker: (d, R = !1) => {
      Ca.value = d, _a.value = R, v(), d || (Re.timePicker[0] = [], Re.timePicker[1] = []);
    },
    setTimePickerElements: (d, R = 0) => {
      Re.timePicker[R] = d;
    },
    arrowRight: n,
    arrowLeft: i,
    arrowUp: c,
    arrowDown: h,
    clearArrowNav: () => {
      Re.monthYear = [], Re.calendar = [], Re.time = [], Re.actionRow = [], Re.selectionGrid = [], Re.timePicker[0] = [], Re.timePicker[1] = [], na.value = !1, Ca.value = !1, _a.value = !1, Oa.value = !1, v(), Ra.value = null;
    },
    setMonthPicker: (d) => {
      Oa.value = d, v();
    },
    refSets: Re
    // exposed for testing
  };
}, cn = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), _l = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  clearInput: "Clear value",
  calendarIcon: "Calendar icon",
  timePicker: "Time picker",
  monthPicker: (t) => `Month picker${t ? " overlay" : ""}`,
  yearPicker: (t) => `Year picker${t ? " overlay" : ""}`,
  timeOverlay: (t) => `${t} overlay`,
  ...e ?? {}
}), fn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Bl = (e) => {
  const t = typeof e == "object" && e, l = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...l, count: fn(!1) };
  const a = t ? e : {}, n = t ? a.count ?? !0 : e, i = fn(n);
  return Object.assign(l, a, { count: i });
}, Yl = (e, t, l) => e || (typeof l == "string" ? l : t), Il = (e) => typeof e == "boolean" ? e ? cn({}) : !1 : cn(e), Nl = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: "open",
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, El = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Fl = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Ll = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, zl = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0,
  arrowLeft: void 0,
  keepViewOnOffsetClick: !1,
  timeArrowHoldThreshold: 0,
  shadowDom: !1,
  mobileBreakpoint: 600,
  setDateOnMenuClose: !1
}, ...e ?? {} }), Hl = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((l) => W(l)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Ul = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Wl = (e) => {
  const t = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...t, ...e } : {
    enabled: e,
    ...t
  };
}, Vl = (e) => e ? typeof e == "string" ? {
  timezone: e,
  exactMatch: !1,
  dateInTz: void 0,
  emitTimezone: void 0,
  convertModel: !0
} : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: e.emitTimezone ?? void 0,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: void 0 }, Ba = (e, t, l) => new Map(
  e.map((a) => {
    const n = ja(a, t, l);
    return [Qa(n), n];
  })
), jl = (e, t) => e.length ? new Map(
  e.map((l) => {
    const a = ja(l.date, t);
    return [Qa(a), l];
  })
) : null, Kl = (e) => {
  var t;
  return {
    minDate: Na(e.minDate, e.timezone, e.isSpecific),
    maxDate: Na(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: $a(e.disabledDates) ? Ba(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: $a(e.allowedDates) ? Ba(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && $a((t = e.highlight) == null ? void 0 : t.dates) ? Ba(e.highlight.dates, e.timezone) : e.highlight,
    markers: jl(e.markers, e.timezone)
  };
}, Gl = (e) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: null } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, Ql = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((l) => {
      const a = l, n = e[a], i = typeof e[a] == "string" ? { [n]: !0 } : Object.fromEntries(n.map((c) => [c, !0]));
      return [l, i];
    })
  )
}), _e = (e) => {
  const t = () => {
    const ne = e.enableSeconds ? ":ss" : "", x = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${x}${ne}` : `hh${x}${ne} aa`;
  }, l = () => {
    var ne;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((ne = U.value) == null ? void 0 : ne.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (ne) => On(ne, e.enableSeconds), n = () => F.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, i = G(() => Bl(e.multiCalendars)), c = G(() => n()), h = G(() => _l(e.ariaLabels)), f = G(() => El(e.filters)), I = G(() => Il(e.transitions)), v = G(() => Fl(e.actionRow)), C = G(
    () => Yl(e.previewFormat, e.format, l())
  ), m = G(() => Nl(e.textInput)), P = G(() => Ll(e.inline)), H = G(() => zl(e.config)), Y = G(() => Hl(e.highlight)), U = G(() => Ul(e.weekNumbers)), d = G(() => Vl(e.timezone)), R = G(() => Gl(e.multiDates)), _ = G(
    () => Kl({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: Y.value,
      markers: e.markers,
      timezone: d.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), F = G(() => Wl(e.range)), Q = G(() => Ql(e.ui));
  return {
    defaultedTransitions: I,
    defaultedMultiCalendars: i,
    defaultedStartTime: c,
    defaultedAriaLabels: h,
    defaultedFilters: f,
    defaultedActionRow: v,
    defaultedPreviewFormat: C,
    defaultedTextInput: m,
    defaultedInline: P,
    defaultedConfig: H,
    defaultedHighlight: Y,
    defaultedWeekNumbers: U,
    defaultedRange: F,
    propDates: _,
    defaultedTz: d,
    defaultedMultiDates: R,
    defaultedUI: Q,
    getDefaultPattern: l,
    getDefaultStartTime: n
  };
}, ql = (e, t, l) => {
  const a = ee(), { defaultedTextInput: n, defaultedRange: i, defaultedTz: c, defaultedMultiDates: h, getDefaultPattern: f } = _e(t), I = ee(""), v = Vt(t, "format"), C = Vt(t, "formatLocale");
  lt(
    a,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", a.value, k(!0));
    },
    { deep: !0 }
  ), lt(i, (u, te) => {
    u.enabled !== te.enabled && (a.value = null);
  }), lt(v, () => {
    j();
  });
  const m = (u) => c.value.timezone && c.value.convertModel ? xe(u, c.value.timezone) : u, P = (u) => {
    if (c.value.timezone && c.value.convertModel) {
      const te = ml(c.value.timezone, u);
      return ll(u, te);
    }
    return u;
  }, H = (u, te, ye = !1) => Bn(
    u,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    te ?? f(),
    ye
  ), Y = (u) => u ? t.modelType ? g(u) : {
    hours: gt(u),
    minutes: Dt(u),
    seconds: t.enableSeconds ? Nt(u) : 0
  } : null, U = (u) => t.modelType ? g(u) : { month: $e(u), year: pe(u) }, d = (u) => Array.isArray(u) ? h.value.enabled ? u.map((te) => R(te, ft(W(), te))) : aa(
    () => [
      ft(W(), u[0]),
      u[1] ? ft(W(), u[1]) : _t(i.value.partialRange)
    ],
    i.value.enabled
  ) : ft(W(), +u), R = (u, te) => (typeof u == "string" || typeof u == "number") && t.modelType ? $(u) : te, _ = (u) => Array.isArray(u) ? [
    R(
      u[0],
      wt(null, +u[0].hours, +u[0].minutes, u[0].seconds)
    ),
    R(
      u[1],
      wt(null, +u[1].hours, +u[1].minutes, u[1].seconds)
    )
  ] : R(u, wt(null, u.hours, u.minutes, u.seconds)), F = (u) => {
    const te = Pe(W(), { date: 1 });
    return Array.isArray(u) ? h.value.enabled ? u.map((ye) => R(ye, pt(te, +ye.month, +ye.year))) : aa(
      () => [
        R(u[0], pt(te, +u[0].month, +u[0].year)),
        R(
          u[1],
          u[1] ? pt(te, +u[1].month, +u[1].year) : _t(i.value.partialRange)
        )
      ],
      i.value.enabled
    ) : R(u, pt(te, +u.month, +u.year));
  }, Q = (u) => {
    if (Array.isArray(u))
      return u.map((te) => $(te));
    throw new Error(Ga.dateArr("multi-dates"));
  }, ne = (u) => {
    if (Array.isArray(u) && i.value.enabled) {
      const te = u[0], ye = u[1];
      return [
        W(Array.isArray(te) ? te[0] : null),
        Array.isArray(ye) && ye.length ? W(ye[0]) : null
      ];
    }
    return W(u[0]);
  }, x = (u) => t.modelAuto ? Array.isArray(u) ? [$(u[0]), $(u[1])] : t.autoApply ? [$(u)] : [$(u), null] : Array.isArray(u) ? aa(
    () => u[1] ? [
      $(u[0]),
      u[1] ? $(u[1]) : _t(i.value.partialRange)
    ] : [$(u[0])],
    i.value.enabled
  ) : $(u), A = () => {
    Array.isArray(a.value) && i.value.enabled && a.value.length === 1 && a.value.push(_t(i.value.partialRange));
  }, X = () => {
    const u = a.value;
    return [
      g(u[0]),
      u[1] ? g(u[1]) : _t(i.value.partialRange)
    ];
  }, O = () => a.value[1] ? X() : g(Ee(a.value[0])), K = () => (a.value || []).map((u) => g(u)), fe = (u = !1) => (u || A(), t.modelAuto ? O() : h.value.enabled ? K() : Array.isArray(a.value) ? aa(() => X(), i.value.enabled) : g(Ee(a.value))), ve = (u) => !u || Array.isArray(u) && !u.length ? null : t.timePicker ? _(Ee(u)) : t.monthPicker ? F(Ee(u)) : t.yearPicker ? d(Ee(u)) : h.value.enabled ? Q(Ee(u)) : t.weekPicker ? ne(Ee(u)) : x(Ee(u)), p = (u) => {
    const te = ve(u);
    Fa(Ee(te)) ? (a.value = Ee(te), j()) : (a.value = null, I.value = "");
  }, N = () => {
    const u = (te) => vt(te, n.value.format);
    return `${u(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? u(a.value[1]) : ""}`;
  }, ae = () => l.value && a.value ? Array.isArray(a.value) ? N() : vt(a.value, n.value.format) : H(a.value), y = () => a.value ? h.value.enabled ? a.value.map((u) => H(u)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? ae() : H(a.value) : "", j = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? I.value = y() : I.value = t.format(a.value);
  }, $ = (u) => {
    if (t.utc) {
      const te = new Date(u);
      return t.utc === "preserve" ? new Date(te.getTime() + te.getTimezoneOffset() * 6e4) : te;
    }
    return t.modelType ? pl.includes(t.modelType) ? m(new Date(u)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? m(
      Ia(u, f(), /* @__PURE__ */ new Date(), { locale: C.value })
    ) : m(
      Ia(u, t.modelType, /* @__PURE__ */ new Date(), { locale: C.value })
    ) : m(new Date(u));
  }, g = (u) => u ? t.utc ? Al(u, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +P(u) : t.modelType === "iso" ? P(u).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? H(P(u)) : H(P(u), t.modelType, !0) : P(u) : "", ue = (u, te = !1, ye = !1) => {
    if (ye) return u;
    if (e("update:model-value", u), c.value.emitTimezone && te) {
      const S = Array.isArray(u) ? u.map((be) => xe(Ee(be), c.value.emitTimezone)) : xe(Ee(u), c.value.emitTimezone);
      e("update:model-timezone-value", S);
    }
  }, B = (u) => Array.isArray(a.value) ? h.value.enabled ? a.value.map((te) => u(te)) : [
    u(a.value[0]),
    a.value[1] ? u(a.value[1]) : _t(i.value.partialRange)
  ] : u(Ee(a.value)), D = () => {
    if (Array.isArray(a.value)) {
      const u = mt(a.value[0], t.weekStart), te = a.value[1] ? mt(a.value[1], t.weekStart) : [];
      return [u.map((ye) => W(ye)), te.map((ye) => W(ye))];
    }
    return mt(a.value, t.weekStart).map((u) => W(u));
  }, J = (u, te) => ue(Ee(B(u)), !1, te), s = (u) => {
    const te = D();
    return u ? te : e("update:model-value", D());
  }, k = (u = !1) => (u || j(), t.monthPicker ? J(U, u) : t.timePicker ? J(Y, u) : t.yearPicker ? J(pe, u) : t.weekPicker ? s(u) : ue(fe(u), !0, u));
  return {
    inputValue: I,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? i.value.enabled ? i.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: p,
    formatInputValue: j,
    emitModelValue: k
  };
}, Xl = (e, t) => {
  const { defaultedFilters: l, propDates: a } = _e(e), { validateMonthYearInRange: n } = $t(e), i = (v, C) => {
    let m = v;
    return l.value.months.includes($e(m)) ? (m = C ? St(v, 1) : Kt(v, 1), i(m, C)) : m;
  }, c = (v, C) => {
    let m = v;
    return l.value.years.includes(pe(m)) ? (m = C ? bn(v, 1) : kn(v, 1), c(m, C)) : m;
  }, h = (v, C = !1) => {
    const m = Pe(W(), { month: e.month, year: e.year });
    let P = v ? St(m, 1) : Kt(m, 1);
    e.disableYearSelect && (P = ft(P, e.year));
    let H = $e(P), Y = pe(P);
    l.value.months.includes(H) && (P = i(P, v), H = $e(P), Y = pe(P)), l.value.years.includes(Y) && (P = c(P, v), Y = pe(P)), n(H, Y, v, e.preventMinMaxNavigation) && f(H, Y, C);
  }, f = (v, C, m) => {
    t("update-month-year", { month: v, year: C, fromNav: m });
  }, I = G(() => (v) => _n(
    Pe(W(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    v
  ));
  return { handleMonthYearChange: h, isDisabled: I, updateMonthYear: f };
}, ca = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: [Boolean, String], default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, it = {
  ...ca,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 },
  isMobile: { type: Boolean, default: void 0 }
}, Jl = ["title"], Zl = ["disabled"], xl = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...it
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const l = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: i,
      defaultedMultiCalendars: c,
      defaultedTextInput: h,
      defaultedInline: f,
      defaultedRange: I,
      defaultedMultiDates: v
    } = _e(a), { isTimeValid: C, isMonthValid: m } = $t(a), { buildMatrix: P } = Mt(), H = ee(null), Y = ee(null), U = ee(!1), d = ee({}), R = ee(null), _ = ee(null);
    We(() => {
      a.arrowNavigation && P([Le(H), Le(Y)], "actionRow"), F(), window.addEventListener("resize", F);
    }), Xt(() => {
      window.removeEventListener("resize", F);
    });
    const F = () => {
      U.value = !1, setTimeout(() => {
        var ae, y;
        const p = (ae = R.value) == null ? void 0 : ae.getBoundingClientRect(), N = (y = _.value) == null ? void 0 : y.getBoundingClientRect();
        p && N && (d.value.maxWidth = `${N.width - p.width - 20}px`), U.value = !0;
      }, 0);
    }, Q = G(() => I.value.enabled && !I.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), ne = G(
      () => !C.value(a.internalModelValue) || !m.value(a.internalModelValue) || !Q.value
    ), x = () => {
      const p = i.value;
      return a.timePicker || a.monthPicker, p(Ee(a.internalModelValue));
    }, A = () => {
      const p = a.internalModelValue;
      return c.value.count > 0 ? `${X(p[0])} - ${X(p[1])}` : [X(p[0]), X(p[1])];
    }, X = (p) => Bn(
      p,
      i.value,
      a.formatLocale,
      h.value.rangeSeparator,
      a.modelAuto,
      i.value
    ), O = G(() => !a.internalModelValue || !a.menuMount ? "" : typeof i.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? A() : v.value.enabled ? a.internalModelValue.map((p) => `${X(p)}`) : a.modelAuto ? `${X(a.internalModelValue[0])}` : `${X(a.internalModelValue[0])} -` : X(a.internalModelValue) : x()), K = () => v.value.enabled ? "; " : " - ", fe = G(
      () => Array.isArray(O.value) ? O.value.join(K()) : O.value
    ), ve = () => {
      C.value(a.internalModelValue) && m.value(a.internalModelValue) && Q.value ? l("select-date") : l("invalid-select");
    };
    return (p, N) => (T(), V("div", {
      ref_key: "actionRowRef",
      ref: _,
      class: "dp__action_row"
    }, [
      p.$slots["action-row"] ? ce(p.$slots, "action-row", ze(He({ key: 0 }, {
        internalModelValue: p.internalModelValue,
        disabled: ne.value,
        selectDate: () => p.$emit("select-date"),
        closePicker: () => p.$emit("close-picker")
      }))) : (T(), V(we, { key: 1 }, [
        o(n).showPreview ? (T(), V("div", {
          key: 0,
          class: "dp__selection_preview",
          title: fe.value,
          style: nt(d.value)
        }, [
          p.$slots["action-preview"] && U.value ? ce(p.$slots, "action-preview", {
            key: 0,
            value: p.internalModelValue
          }) : q("", !0),
          !p.$slots["action-preview"] && U.value ? (T(), V(we, { key: 1 }, [
            yt(Ke(fe.value), 1)
          ], 64)) : q("", !0)
        ], 12, Jl)) : q("", !0),
        he("div", {
          ref_key: "actionBtnContainer",
          ref: R,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          p.$slots["action-buttons"] ? ce(p.$slots, "action-buttons", {
            key: 0,
            value: p.internalModelValue
          }) : q("", !0),
          p.$slots["action-buttons"] ? q("", !0) : (T(), V(we, { key: 1 }, [
            !o(f).enabled && o(n).showCancel ? (T(), V("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: H,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: N[0] || (N[0] = (ae) => p.$emit("close-picker")),
              onKeydown: N[1] || (N[1] = (ae) => o(Xe)(ae, () => p.$emit("close-picker")))
            }, Ke(p.cancelText), 545)) : q("", !0),
            o(n).showNow ? (T(), V("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: N[2] || (N[2] = (ae) => p.$emit("select-now")),
              onKeydown: N[3] || (N[3] = (ae) => o(Xe)(ae, () => p.$emit("select-now")))
            }, Ke(p.nowButtonLabel), 33)) : q("", !0),
            o(n).showSelect ? (T(), V("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: Y,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: ne.value,
              "data-test-id": "select-button",
              onKeydown: N[4] || (N[4] = (ae) => o(Xe)(ae, () => ve())),
              onClick: ve
            }, Ke(p.selectText), 41, Zl)) : q("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), er = ["role", "aria-label", "tabindex"], tr = { class: "dp__selection_grid_header" }, ar = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], nr = ["aria-label"], Jt = /* @__PURE__ */ Ue({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {},
    overlayLabel: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: l }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: i } = Mt(), c = l, h = e, { defaultedAriaLabels: f, defaultedTextInput: I, defaultedConfig: v } = _e(
      h
    ), { hideNavigationButtons: C } = ma(), m = ee(!1), P = ee(null), H = ee(null), Y = ee([]), U = ee(), d = ee(null), R = ee(0), _ = ee(null);
    Gn(() => {
      P.value = null;
    }), We(() => {
      at().then(() => K()), h.noOverlayFocus || Q(), F(!0);
    }), Xt(() => F(!1));
    const F = (B) => {
      var D;
      h.arrowNavigation && ((D = h.headerRefs) != null && D.length ? i(B) : a(B));
    }, Q = () => {
      var D;
      const B = Le(H);
      B && (I.value.enabled || (P.value ? (D = P.value) == null || D.focus({ preventScroll: !0 }) : B.focus({ preventScroll: !0 })), m.value = B.clientHeight < B.scrollHeight);
    }, ne = G(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !h.useRelative,
        "dp--overlay-relative": h.useRelative
      })
    ), x = G(
      () => h.useRelative ? { height: `${h.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), A = G(() => ({
      dp__overlay_col: !0
    })), X = G(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: m.value,
        dp__button_bottom: h.isLast
      })
    ), O = G(() => {
      var B, D;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((B = h.items) == null ? void 0 : B.length) <= 6,
        dp__container_block: ((D = h.items) == null ? void 0 : D.length) > 6
      };
    });
    lt(
      () => h.items,
      () => K(!1),
      { deep: !0 }
    );
    const K = (B = !0) => {
      at().then(() => {
        const D = Le(P), J = Le(H), s = Le(d), k = Le(_), E = s ? s.getBoundingClientRect().height : 0;
        J && (J.getBoundingClientRect().height ? R.value = J.getBoundingClientRect().height - E : R.value = v.value.modeHeight - E), D && k && B && (k.scrollTop = D.offsetTop - k.offsetTop - (R.value / 2 - D.getBoundingClientRect().height) - E);
      });
    }, fe = (B) => {
      B.disabled || c("selected", B.value);
    }, ve = () => {
      c("toggle"), c("reset-flow");
    }, p = () => {
      h.escClose && ve();
    }, N = (B, D, J, s) => {
      B && ((D.active || D.value === h.focusValue) && (P.value = B), h.arrowNavigation && (Array.isArray(Y.value[J]) ? Y.value[J][s] = B : Y.value[J] = [B], ae()));
    }, ae = () => {
      var D, J;
      const B = (D = h.headerRefs) != null && D.length ? [h.headerRefs].concat(Y.value) : Y.value.concat([h.skipButtonRef ? [] : [d.value]]);
      n(Ee(B), (J = h.headerRefs) != null && J.length ? "monthPicker" : "selectionGrid");
    }, y = (B) => {
      h.arrowNavigation || kt(B, v.value, !0);
    }, j = (B) => {
      U.value = B, c("hover-value", B);
    }, $ = () => {
      if (ve(), !h.isLast) {
        const B = Ea(h.menuWrapRef ?? null, "action-row");
        if (B) {
          const D = Tn(B);
          D == null || D.focus();
        }
      }
    }, g = (B) => {
      switch (B.key) {
        case Ce.esc:
          return p();
        case Ce.arrowLeft:
          return y(B);
        case Ce.arrowRight:
          return y(B);
        case Ce.arrowUp:
          return y(B);
        case Ce.arrowDown:
          return y(B);
        default:
          return;
      }
    }, ue = (B) => {
      if (B.key === Ce.enter) return ve();
      if (B.key === Ce.tab) return $();
    };
    return t({ focusGrid: Q }), (B, D) => {
      var J;
      return T(), V("div", {
        ref_key: "gridWrapRef",
        ref: H,
        class: Me(ne.value),
        style: nt(x.value),
        role: B.useRelative ? void 0 : "dialog",
        "aria-label": B.overlayLabel,
        tabindex: B.useRelative ? void 0 : "0",
        onKeydown: g,
        onClick: D[0] || (D[0] = jt(() => {
        }, ["prevent"]))
      }, [
        he("div", {
          ref_key: "containerRef",
          ref: _,
          class: Me(O.value),
          style: nt({ "--dp-overlay-height": `${R.value}px` }),
          role: "grid"
        }, [
          he("div", tr, [
            ce(B.$slots, "header")
          ]),
          B.$slots.overlay ? ce(B.$slots, "overlay", { key: 0 }) : (T(!0), V(we, { key: 1 }, Oe(B.items, (s, k) => (T(), V("div", {
            key: k,
            class: Me(["dp__overlay_row", { dp__flex_row: B.items.length >= 3 }]),
            role: "row"
          }, [
            (T(!0), V(we, null, Oe(s, (E, u) => (T(), V("div", {
              key: E.value,
              ref_for: !0,
              ref: (te) => N(te, E, k, u),
              role: "gridcell",
              class: Me(A.value),
              "aria-selected": E.active || void 0,
              "aria-disabled": E.disabled || void 0,
              tabindex: "0",
              "data-test-id": E.text,
              onClick: jt((te) => fe(E), ["prevent"]),
              onKeydown: (te) => o(Xe)(te, () => fe(E), !0),
              onMouseover: (te) => j(E.value)
            }, [
              he("div", {
                class: Me(E.className)
              }, [
                B.$slots.item ? ce(B.$slots, "item", {
                  key: 0,
                  item: E
                }) : q("", !0),
                B.$slots.item ? q("", !0) : (T(), V(we, { key: 1 }, [
                  yt(Ke(E.text), 1)
                ], 64))
              ], 2)
            ], 42, ar))), 128))
          ], 2))), 128))
        ], 6),
        B.$slots["button-icon"] ? la((T(), V("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: d,
          type: "button",
          "aria-label": (J = o(f)) == null ? void 0 : J.toggleOverlay,
          class: Me(X.value),
          tabindex: "0",
          onClick: ve,
          onKeydown: ue
        }, [
          ce(B.$slots, "button-icon")
        ], 42, nr)), [
          [ra, !o(C)(B.hideNavigation, B.type)]
        ]) : q("", !0)
      ], 46, er);
    };
  }
}), lr = ["data-dp-mobile"], fa = /* @__PURE__ */ Ue({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = e, l = G(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = G(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, i) => (T(), V("div", {
      class: Me({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      }),
      "data-dp-mobile": n.isMobile
    }, [
      (T(!0), V(we, null, Oe(l.value, (c, h) => (T(), V("div", {
        key: c,
        class: Me(a.value)
      }, [
        ce(n.$slots, "default", {
          instance: c,
          index: h
        })
      ], 2))), 128))
    ], 10, lr));
  }
}), rr = ["data-dp-element", "aria-label", "aria-disabled"], Wt = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const l = t, a = ee(null);
    return We(() => l("set-ref", a)), (n, i) => (T(), V("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      "data-dp-element": n.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: i[0] || (i[0] = (c) => n.$emit("activate")),
      onKeydown: i[1] || (i[1] = (c) => o(Xe)(c, () => n.$emit("activate"), !0))
    }, [
      he("span", {
        class: Me(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        ce(n.$slots, "default")
      ], 2)
    ], 40, rr));
  }
}), or = ["aria-label", "data-test-id"], En = /* @__PURE__ */ Ue({
  __name: "YearModePicker",
  props: {
    ...it,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const l = t, a = e, { showRightIcon: n, showLeftIcon: i } = ma(), { defaultedConfig: c, defaultedMultiCalendars: h, defaultedAriaLabels: f, defaultedTransitions: I, defaultedUI: v } = _e(a), { showTransition: C, transitionName: m } = Zt(I), P = ee(!1), H = (d = !1, R) => {
      P.value = !P.value, l("toggle-year-picker", { flow: d, show: R });
    }, Y = (d) => {
      P.value = !1, l("year-select", d);
    }, U = (d = !1) => {
      l("handle-year", d);
    };
    return (d, R) => {
      var _, F, Q, ne, x;
      return T(), V(we, null, [
        he("div", {
          class: Me(["dp--year-mode-picker", { "dp--hidden-el": P.value }])
        }, [
          o(i)(o(h), e.instance) ? (T(), Se(Wt, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": (_ = o(f)) == null ? void 0 : _.prevYear,
            disabled: e.isDisabled(!1),
            class: Me((F = o(v)) == null ? void 0 : F.navBtnPrev),
            onActivate: R[0] || (R[0] = (A) => U(!1))
          }, {
            default: De(() => [
              d.$slots["arrow-left"] ? ce(d.$slots, "arrow-left", { key: 0 }) : q("", !0),
              d.$slots["arrow-left"] ? q("", !0) : (T(), Se(o(za), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : q("", !0),
          he("button", {
            ref: "mpYearButtonRef",
            class: "dp__btn dp--year-select",
            type: "button",
            "aria-label": `${e.year}-${(Q = o(f)) == null ? void 0 : Q.openYearsOverlay}`,
            "data-test-id": `year-mode-btn-${e.instance}`,
            onClick: R[1] || (R[1] = () => H(!1)),
            onKeydown: R[2] || (R[2] = Qn(() => H(!1), ["enter"]))
          }, [
            d.$slots.year ? ce(d.$slots, "year", {
              key: 0,
              year: e.year
            }) : q("", !0),
            d.$slots.year ? q("", !0) : (T(), V(we, { key: 1 }, [
              yt(Ke(e.year), 1)
            ], 64))
          ], 40, or),
          o(n)(o(h), e.instance) ? (T(), Se(Wt, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (ne = o(f)) == null ? void 0 : ne.nextYear,
            disabled: e.isDisabled(!0),
            class: Me((x = o(v)) == null ? void 0 : x.navBtnNext),
            onActivate: R[3] || (R[3] = (A) => U(!0))
          }, {
            default: De(() => [
              d.$slots["arrow-right"] ? ce(d.$slots, "arrow-right", { key: 0 }) : q("", !0),
              d.$slots["arrow-right"] ? q("", !0) : (T(), Se(o(Ha), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : q("", !0)
        ], 2),
        tt(Lt, {
          name: o(m)(e.showYearPicker),
          css: o(C)
        }, {
          default: De(() => {
            var A, X;
            return [
              e.showYearPicker ? (T(), Se(Jt, {
                key: 0,
                items: e.items,
                "text-input": d.textInput,
                "esc-close": d.escClose,
                config: d.config,
                "is-last": d.autoApply && !o(c).keepActionRow,
                "hide-navigation": d.hideNavigation,
                "aria-labels": d.ariaLabels,
                "overlay-label": (X = (A = o(f)) == null ? void 0 : A.yearPicker) == null ? void 0 : X.call(A, !0),
                type: "year",
                onToggle: H,
                onSelected: R[4] || (R[4] = (O) => Y(O))
              }, Ge({
                "button-icon": De(() => [
                  d.$slots["calendar-icon"] ? ce(d.$slots, "calendar-icon", { key: 0 }) : q("", !0),
                  d.$slots["calendar-icon"] ? q("", !0) : (T(), Se(o(zt), { key: 1 }))
                ]),
                _: 2
              }, [
                d.$slots["year-overlay-value"] ? {
                  name: "item",
                  fn: De(({ item: O }) => [
                    ce(d.$slots, "year-overlay-value", {
                      text: O.text,
                      value: O.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels", "overlay-label"])) : q("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 64);
    };
  }
}), Xa = (e, t, l) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => Ae(e, a))) {
      const a = t.value.filter((n) => !Ae(n, e));
      t.value = a.length ? a : null;
    } else (l && +l > t.value.length || !l) && t.value.push(e);
  else
    t.value = [e];
}, Ja = (e, t, l) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? (Be(t, a[0]) ? a.unshift(t) : a[1] = t, l("range-end", t)) : (a = [t], l("range-start", t)), a;
}, va = (e, t, l, a) => {
  e && (e[0] && e[1] && l && t("auto-apply"), e[0] && !e[1] && a && l && t("auto-apply"));
}, Fn = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => xe(W(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = xe(W(e.value), e.timezone));
}, Ln = (e, t, l, a) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && a.value.partialRange) ? a.value.fixedStart && (Ne(e, t.value[0]) || Ae(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (Be(e, t.value[1]) || Ae(e, t.value[1])) ? [e, t.value[1]] : (l("invalid-fixed-range", e), t.value) : [], zn = ({
  multiCalendars: e,
  range: t,
  highlight: l,
  propDates: a,
  calendars: n,
  modelValue: i,
  props: c,
  filters: h,
  year: f,
  month: I,
  emit: v
}) => {
  const C = G(() => Ka(c.yearRange, c.locale, c.reverseYears)), m = ee([!1]), P = G(() => (O, K) => {
    const fe = Pe(ut(/* @__PURE__ */ new Date()), {
      month: I.value(O),
      year: f.value(O)
    }), ve = K ? wn(fe) : sa(fe);
    return _n(
      ve,
      a.value.maxDate,
      a.value.minDate,
      c.preventMinMaxNavigation,
      K
    );
  }), H = () => Array.isArray(i.value) && e.value.solo && i.value[1], Y = () => {
    for (let O = 0; O < e.value.count; O++)
      if (O === 0)
        n.value[O] = n.value[0];
      else if (O === e.value.count - 1 && H())
        n.value[O] = {
          month: $e(i.value[1]),
          year: pe(i.value[1])
        };
      else {
        const K = Pe(W(), n.value[O - 1]);
        n.value[O] = { month: $e(K), year: pe(bn(K, 1)) };
      }
  }, U = (O) => {
    if (!O) return Y();
    const K = Pe(W(), n.value[O]);
    return n.value[0].year = pe(kn(K, e.value.count - 1)), Y();
  }, d = (O, K) => {
    const fe = rl(K, O);
    return t.value.showLastInRange && fe > 1 ? K : O;
  }, R = (O) => c.focusStartDate || e.value.solo ? O[0] : O[1] ? d(O[0], O[1]) : O[0], _ = () => {
    if (i.value) {
      const O = Array.isArray(i.value) ? R(i.value) : i.value;
      n.value[0] = { month: $e(O), year: pe(O) };
    }
  }, F = () => {
    _(), e.value.count && Y();
  };
  lt(i, (O, K) => {
    c.isTextInputDate && JSON.stringify(O ?? {}) !== JSON.stringify(K ?? {}) && F();
  }), We(() => {
    F();
  });
  const Q = (O, K) => {
    n.value[K].year = O, v("update-month-year", { instance: K, year: O, month: n.value[K].month }), e.value.count && !e.value.solo && U(K);
  }, ne = G(() => (O) => Et(C.value, (K) => {
    var N;
    const fe = f.value(O) === K.value, ve = Qt(
      K.value,
      Ft(a.value.minDate),
      Ft(a.value.maxDate)
    ) || ((N = h.value.years) == null ? void 0 : N.includes(f.value(O))), p = qa(l.value, K.value);
    return { active: fe, disabled: ve, highlighted: p };
  })), x = (O, K) => {
    Q(O, K), X(K);
  }, A = (O, K = !1) => {
    if (!P.value(O, K)) {
      const fe = K ? f.value(O) + 1 : f.value(O) - 1;
      Q(fe, O);
    }
  }, X = (O, K = !1, fe) => {
    K || v("reset-flow"), fe !== void 0 ? m.value[O] = fe : m.value[O] = !m.value[O], m.value[O] ? v("overlay-toggle", { open: !0, overlay: je.year }) : (v("overlay-closed"), v("overlay-toggle", { open: !1, overlay: je.year }));
  };
  return {
    isDisabled: P,
    groupedYears: ne,
    showYearPicker: m,
    selectYear: Q,
    toggleYearPicker: X,
    handleYearSelect: x,
    handleYear: A
  };
}, sr = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: i,
    defaultedRange: c,
    defaultedHighlight: h,
    propDates: f,
    defaultedTz: I,
    defaultedFilters: v,
    defaultedMultiDates: C
  } = _e(e), m = () => {
    e.isTextInputDate && F(pe(W(e.startDate)), 0);
  }, { modelValue: P, year: H, month: Y, calendars: U } = xt(e, t, m), d = G(() => $n(e.formatLocale, e.locale, e.monthNameFormat)), R = ee(null), { checkMinMaxRange: _ } = $t(e), {
    selectYear: F,
    groupedYears: Q,
    showYearPicker: ne,
    toggleYearPicker: x,
    handleYearSelect: A,
    handleYear: X,
    isDisabled: O
  } = zn({
    modelValue: P,
    multiCalendars: l,
    range: c,
    highlight: h,
    calendars: U,
    year: H,
    propDates: f,
    month: Y,
    filters: v,
    props: e,
    emit: t
  });
  We(() => {
    e.startDate && (P.value && e.focusStartDate || !P.value) && F(pe(W(e.startDate)), 0);
  });
  const K = (k) => k ? { month: $e(k), year: pe(k) } : { month: null, year: null }, fe = () => P.value ? Array.isArray(P.value) ? P.value.map((k) => K(k)) : K(P.value) : K(), ve = (k, E) => {
    const u = U.value[k], te = fe();
    return Array.isArray(te) ? te.some((ye) => ye.year === (u == null ? void 0 : u.year) && ye.month === E) : (u == null ? void 0 : u.year) === te.year && E === te.month;
  }, p = (k, E, u) => {
    var ye, S;
    const te = fe();
    return Array.isArray(te) ? H.value(E) === ((ye = te[u]) == null ? void 0 : ye.year) && k === ((S = te[u]) == null ? void 0 : S.month) : !1;
  }, N = (k, E) => {
    if (c.value.enabled) {
      const u = fe();
      if (Array.isArray(P.value) && Array.isArray(u)) {
        const te = p(k, E, 0) || p(k, E, 1), ye = pt(ut(W()), k, H.value(E));
        return da(P.value, R.value, ye) && !te;
      }
      return !1;
    }
    return !1;
  }, ae = G(() => (k) => Et(d.value, (E) => {
    var be;
    const u = ve(k, E.value), te = Qt(
      E.value,
      Pn(H.value(k), f.value.minDate),
      Rn(H.value(k), f.value.maxDate)
    ) || Cl(f.value.disabledDates, H.value(k)).includes(E.value) || ((be = v.value.months) == null ? void 0 : be.includes(E.value)) || !Ol(f.value.allowedDates, H.value(k), E.value), ye = N(E.value, k), S = Yn(h.value, E.value, H.value(k));
    return { active: u, disabled: te, isBetween: ye, highlighted: S };
  })), y = (k, E) => pt(ut(W()), k, H.value(E)), j = (k, E) => {
    const u = P.value ? P.value : ut(/* @__PURE__ */ new Date());
    P.value = pt(u, k, H.value(E)), t("auto-apply"), t("update-flow-step");
  }, $ = (k, E) => {
    const u = y(k, E);
    c.value.fixedEnd || c.value.fixedStart ? P.value = Ln(u, P, t, c) : P.value ? _(u, P.value) && (P.value = Ja(P, y(k, E), t)) : P.value = [y(k, E)], at().then(() => {
      va(P.value, t, e.autoApply, e.modelAuto);
    });
  }, g = (k, E) => {
    Xa(y(k, E), P, C.value.limit), t("auto-apply", !0);
  }, ue = (k, E) => (U.value[E].month = k, D(E, U.value[E].year, k), C.value.enabled ? g(k, E) : c.value.enabled ? $(k, E) : j(k, E)), B = (k, E) => {
    F(k, E), D(E, k, null);
  }, D = (k, E, u) => {
    let te = u;
    if (!te && te !== 0) {
      const ye = fe();
      te = Array.isArray(ye) ? ye[k].month : ye.month;
    }
    t("update-month-year", { instance: k, year: E, month: te });
  };
  return {
    groupedMonths: ae,
    groupedYears: Q,
    year: H,
    isDisabled: O,
    defaultedMultiCalendars: l,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: i,
    showYearPicker: ne,
    modelValue: P,
    presetDate: (k, E) => {
      Fn({
        value: k,
        modelValue: P,
        range: c.value.enabled,
        timezone: E ? void 0 : I.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (k, E) => {
      R.value = y(k, E);
    },
    selectMonth: ue,
    selectYear: B,
    toggleYearPicker: x,
    handleYearSelect: A,
    handleYear: X,
    getModelMonthYear: fe
  };
}, ur = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...it
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = Ct(), i = et(n, "yearMode"), c = e;
    We(() => {
      c.shadow || a("mount", null);
    });
    const {
      groupedMonths: h,
      groupedYears: f,
      year: I,
      isDisabled: v,
      defaultedMultiCalendars: C,
      defaultedConfig: m,
      showYearPicker: P,
      modelValue: H,
      presetDate: Y,
      setHoverDate: U,
      selectMonth: d,
      selectYear: R,
      toggleYearPicker: _,
      handleYearSelect: F,
      handleYear: Q,
      getModelMonthYear: ne
    } = sr(c, a);
    return t({ getSidebarProps: () => ({
      modelValue: H,
      year: I,
      getModelMonthYear: ne,
      selectMonth: d,
      selectYear: R,
      handleYear: Q
    }), presetDate: Y, toggleYearPicker: (A) => _(0, A) }), (A, X) => (T(), Se(fa, {
      "multi-calendars": o(C).count,
      collapse: A.collapse,
      stretch: "",
      "is-mobile": A.isMobile
    }, {
      default: De(({ instance: O }) => [
        A.$slots["top-extra"] ? ce(A.$slots, "top-extra", {
          key: 0,
          value: A.internalModelValue
        }) : q("", !0),
        A.$slots["month-year"] ? ce(A.$slots, "month-year", ze(He({ key: 1 }, {
          year: o(I),
          months: o(h)(O),
          years: o(f)(O),
          selectMonth: o(d),
          selectYear: o(R),
          instance: O
        }))) : (T(), Se(Jt, {
          key: 2,
          items: o(h)(O),
          "arrow-navigation": A.arrowNavigation,
          "is-last": A.autoApply && !o(m).keepActionRow,
          "esc-close": A.escClose,
          height: o(m).modeHeight,
          config: A.config,
          "no-overlay-focus": !!(A.noOverlayFocus || A.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (K) => o(d)(K, O),
          onHoverValue: (K) => o(U)(K, O)
        }, Ge({
          header: De(() => [
            tt(En, He(A.$props, {
              items: o(f)(O),
              instance: O,
              "show-year-picker": o(P)[O],
              year: o(I)(O),
              "is-disabled": (K) => o(v)(O, K),
              onHandleYear: (K) => o(Q)(O, K),
              onYearSelect: (K) => o(F)(K, O),
              onToggleYearPicker: (K) => o(_)(O, K == null ? void 0 : K.flow, K == null ? void 0 : K.show)
            }), Ge({ _: 2 }, [
              Oe(o(i), (K, fe) => ({
                name: K,
                fn: De((ve) => [
                  ce(A.$slots, K, ze(Ze(ve)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          A.$slots["month-overlay-value"] ? {
            name: "item",
            fn: De(({ item: K }) => [
              ce(A.$slots, "month-overlay-value", {
                text: K.text,
                value: K.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), ir = (e, t) => {
  const l = () => {
    e.isTextInputDate && (v.value = pe(W(e.startDate)));
  }, { modelValue: a } = xt(e, t, l), n = ee(null), { defaultedHighlight: i, defaultedMultiDates: c, defaultedFilters: h, defaultedRange: f, propDates: I } = _e(e), v = ee();
  We(() => {
    e.startDate && (a.value && e.focusStartDate || !a.value) && (v.value = pe(W(e.startDate)));
  });
  const C = (d) => Array.isArray(a.value) ? a.value.some((R) => pe(R) === d) : a.value ? pe(a.value) === d : !1, m = (d) => f.value.enabled && Array.isArray(a.value) ? da(a.value, n.value, H(d)) : !1, P = G(() => Et(Ka(e.yearRange, e.locale, e.reverseYears), (d) => {
    const R = C(d.value), _ = Qt(
      d.value,
      Ft(I.value.minDate),
      Ft(I.value.maxDate)
    ) || h.value.years.includes(d.value), F = m(d.value) && !R, Q = qa(i.value, d.value);
    return { active: R, disabled: _, isBetween: F, highlighted: Q };
  })), H = (d) => ft(ut(sa(/* @__PURE__ */ new Date())), d);
  return {
    groupedYears: P,
    modelValue: a,
    focusYear: v,
    setHoverValue: (d) => {
      n.value = ft(ut(/* @__PURE__ */ new Date()), d);
    },
    selectYear: (d) => {
      var R;
      if (t("update-month-year", { instance: 0, year: d }), c.value.enabled)
        return a.value ? Array.isArray(a.value) && (((R = a.value) == null ? void 0 : R.map((F) => pe(F))).includes(d) ? a.value = a.value.filter((F) => pe(F) !== d) : a.value.push(ft(Je(W()), d))) : a.value = [ft(Je(sa(W())), d)], t("auto-apply", !0);
      f.value.enabled ? (a.value = Ja(a, H(d), t), at().then(() => {
        va(a.value, t, e.autoApply, e.modelAuto);
      })) : (a.value = H(d), t("auto-apply"));
    }
  };
}, dr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...it
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { groupedYears: i, modelValue: c, focusYear: h, selectYear: f, setHoverValue: I } = ir(n, a), { defaultedConfig: v } = _e(n);
    return t({ getSidebarProps: () => ({
      modelValue: c,
      selectYear: f
    }) }), (m, P) => (T(), V("div", null, [
      m.$slots["top-extra"] ? ce(m.$slots, "top-extra", {
        key: 0,
        value: m.internalModelValue
      }) : q("", !0),
      m.$slots["month-year"] ? ce(m.$slots, "month-year", ze(He({ key: 1 }, {
        years: o(i),
        selectYear: o(f)
      }))) : (T(), Se(Jt, {
        key: 2,
        items: o(i),
        "is-last": m.autoApply && !o(v).keepActionRow,
        height: o(v).modeHeight,
        config: m.config,
        "no-overlay-focus": !!(m.noOverlayFocus || m.textInput),
        "focus-value": o(h),
        type: "year",
        "use-relative": "",
        onSelected: o(f),
        onHoverValue: o(I)
      }, Ge({ _: 2 }, [
        m.$slots["year-overlay-value"] ? {
          name: "item",
          fn: De(({ item: H }) => [
            ce(m.$slots, "year-overlay-value", {
              text: H.text,
              value: H.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), cr = {
  key: 0,
  class: "dp__time_input"
}, fr = ["data-compact", "data-collapsed"], vr = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], mr = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], pr = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], yr = { key: 0 }, gr = ["aria-label", "data-compact"], hr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...it
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { setTimePickerElements: i, setTimePickerBackRef: c } = Mt(), {
      defaultedAriaLabels: h,
      defaultedTransitions: f,
      defaultedFilters: I,
      defaultedConfig: v,
      defaultedRange: C,
      defaultedMultiCalendars: m
    } = _e(n), { transitionName: P, showTransition: H } = Zt(f), Y = qt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), U = ee("AM"), d = ee(null), R = ee([]), _ = ee(), F = ee(!1);
    We(() => {
      a("mounted");
    });
    const Q = (r) => Pe(/* @__PURE__ */ new Date(), {
      hours: r.hours,
      minutes: r.minutes,
      seconds: n.enableSeconds ? r.seconds : 0,
      milliseconds: 0
    }), ne = G(
      () => (r) => $(r, n[r]) || A(r, n[r])
    ), x = G(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), A = (r, le) => C.value.enabled && !C.value.disableTimeRangeValidation ? !n.validateTime(r, le) : !1, X = (r, le) => {
      if (C.value.enabled && !C.value.disableTimeRangeValidation) {
        const ie = le ? +n[`${r}Increment`] : -+n[`${r}Increment`], re = n[r] + ie;
        return !n.validateTime(r, re);
      }
      return !1;
    }, O = G(() => (r) => !J(+n[r] + +n[`${r}Increment`], r) || X(r, !0)), K = G(() => (r) => !J(+n[r] - +n[`${r}Increment`], r) || X(r, !1)), fe = (r, le) => Dn(Pe(W(), r), le), ve = (r, le) => ol(Pe(W(), r), le), p = G(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), N = G(
      () => n.timePickerInline && C.value.enabled && !m.value.count
    ), ae = G(() => {
      const r = [{ type: "hours" }];
      return n.enableMinutes && r.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), n.enableSeconds && r.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), r;
    }), y = G(() => ae.value.filter((r) => !r.separator)), j = G(() => (r) => {
      if (r === "hours") {
        const le = ye(+n.hours);
        return { text: le < 10 ? `0${le}` : `${le}`, value: le };
      }
      return { text: n[r] < 10 ? `0${n[r]}` : `${n[r]}`, value: n[r] };
    }), $ = (r, le) => {
      var re;
      if (!n.disabledTimesConfig) return !1;
      const ie = n.disabledTimesConfig(n.order, r === "hours" ? le : void 0);
      return ie[r] ? !!((re = ie[r]) != null && re.includes(le)) : !0;
    }, g = (r, le) => le !== "hours" || U.value === "AM" ? r : r + 12, ue = (r) => {
      const le = n.is24 ? 24 : 12, ie = r === "hours" ? le : 60, re = +n[`${r}GridIncrement`], Te = r === "hours" && !n.is24 ? re : 0, ke = [];
      for (let w = Te; w < ie; w += re)
        ke.push({ value: n.is24 ? w : g(w, r), text: w < 10 ? `0${w}` : `${w}` });
      return r === "hours" && !n.is24 && ke.unshift({ value: U.value === "PM" ? 12 : 0, text: "12" }), Et(ke, (w) => ({ active: !1, disabled: I.value.times[r].includes(w.value) || !J(w.value, r) || $(r, w.value) || A(r, w.value) }));
    }, B = (r) => r >= 0 ? r : 59, D = (r) => r >= 0 ? r : 23, J = (r, le) => {
      const ie = n.minTime ? Q(Aa(n.minTime)) : null, re = n.maxTime ? Q(Aa(n.maxTime)) : null, Te = Q(
        Aa(
          x.value,
          le,
          le === "minutes" || le === "seconds" ? B(r) : D(r)
        )
      );
      return ie && re ? (Gt(Te, re) || Yt(Te, re)) && (It(Te, ie) || Yt(Te, ie)) : ie ? It(Te, ie) || Yt(Te, ie) : re ? Gt(Te, re) || Yt(Te, re) : !0;
    }, s = (r) => n[`no${r[0].toUpperCase() + r.slice(1)}Overlay`], k = (r) => {
      s(r) || (Y[r] = !Y[r], Y[r] ? (F.value = !0, a("overlay-opened", r)) : (F.value = !1, a("overlay-closed", r)));
    }, E = (r) => r === "hours" ? gt : r === "minutes" ? Dt : Nt, u = () => {
      _.value && clearTimeout(_.value);
    }, te = (r, le = !0, ie) => {
      const re = le ? fe : ve, Te = le ? +n[`${r}Increment`] : -+n[`${r}Increment`];
      J(+n[r] + Te, r) && a(
        `update:${r}`,
        E(r)(re({ [r]: +n[r] }, { [r]: +n[`${r}Increment`] }))
      ), !(ie != null && ie.keyboard) && v.value.timeArrowHoldThreshold && (_.value = setTimeout(() => {
        te(r, le);
      }, v.value.timeArrowHoldThreshold));
    }, ye = (r) => n.is24 ? r : (r >= 12 ? U.value = "PM" : U.value = "AM", hl(r)), S = () => {
      U.value === "PM" ? (U.value = "AM", a("update:hours", n.hours - 12)) : (U.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", U.value);
    }, be = (r) => {
      Y[r] = !0;
    }, L = (r, le, ie) => {
      if (r && n.arrowNavigation) {
        Array.isArray(R.value[le]) ? R.value[le][ie] = r : R.value[le] = [r];
        const re = R.value.reduce(
          (Te, ke) => ke.map((w, z) => [...Te[z] || [], ke[z]]),
          []
        );
        c(n.closeTimePickerBtn), d.value && (re[1] = re[1].concat(d.value)), i(re, n.order);
      }
    }, se = (r, le) => (k(r), a(`update:${r}`, le));
    return t({ openChildCmp: be }), (r, le) => {
      var ie;
      return r.disabled ? q("", !0) : (T(), V("div", cr, [
        (T(!0), V(we, null, Oe(ae.value, (re, Te) => {
          var ke, w, z;
          return T(), V("div", {
            key: Te,
            class: Me(p.value),
            "data-compact": N.value && !r.enableSeconds,
            "data-collapsed": N.value && r.enableSeconds
          }, [
            re.separator ? (T(), V(we, { key: 0 }, [
              F.value ? q("", !0) : (T(), V(we, { key: 0 }, [
                yt(":")
              ], 64))
            ], 64)) : (T(), V(we, { key: 1 }, [
              he("button", {
                ref_for: !0,
                ref: (ge) => L(ge, Te, 0),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !r.timePickerInline,
                  dp__inc_dec_button_inline: r.timePickerInline,
                  dp__tp_inline_btn_top: r.timePickerInline,
                  dp__inc_dec_button_disabled: O.value(re.type),
                  "dp--hidden-el": F.value
                }),
                "data-test-id": `${re.type}-time-inc-btn-${n.order}`,
                "aria-label": (ke = o(h)) == null ? void 0 : ke.incrementValue(re.type),
                tabindex: "0",
                onKeydown: (ge) => o(Xe)(ge, () => te(re.type, !0, { keyboard: !0 }), !0),
                onClick: (ge) => o(v).timeArrowHoldThreshold ? void 0 : te(re.type, !0),
                onMousedown: (ge) => o(v).timeArrowHoldThreshold ? te(re.type, !0) : void 0,
                onMouseup: u
              }, [
                n.timePickerInline ? (T(), V(we, { key: 1 }, [
                  r.$slots["tp-inline-arrow-up"] ? ce(r.$slots, "tp-inline-arrow-up", { key: 0 }) : (T(), V(we, { key: 1 }, [
                    le[2] || (le[2] = he("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    le[3] || (le[3] = he("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (T(), V(we, { key: 0 }, [
                  r.$slots["arrow-up"] ? ce(r.$slots, "arrow-up", { key: 0 }) : q("", !0),
                  r.$slots["arrow-up"] ? q("", !0) : (T(), Se(o(Wa), { key: 1 }))
                ], 64))
              ], 42, vr),
              he("button", {
                ref_for: !0,
                ref: (ge) => L(ge, Te, 1),
                type: "button",
                "aria-label": `${j.value(re.type).text}-${(w = o(h)) == null ? void 0 : w.openTpOverlay(re.type)}`,
                class: Me({
                  dp__time_display: !0,
                  dp__time_display_block: !r.timePickerInline,
                  dp__time_display_inline: r.timePickerInline,
                  "dp--time-invalid": ne.value(re.type),
                  "dp--time-overlay-btn": !ne.value(re.type),
                  "dp--hidden-el": F.value
                }),
                disabled: s(re.type),
                tabindex: "0",
                "data-test-id": `${re.type}-toggle-overlay-btn-${n.order}`,
                onKeydown: (ge) => o(Xe)(ge, () => k(re.type), !0),
                onClick: (ge) => k(re.type)
              }, [
                r.$slots[re.type] ? ce(r.$slots, re.type, {
                  key: 0,
                  text: j.value(re.type).text,
                  value: j.value(re.type).value
                }) : q("", !0),
                r.$slots[re.type] ? q("", !0) : (T(), V(we, { key: 1 }, [
                  yt(Ke(j.value(re.type).text), 1)
                ], 64))
              ], 42, mr),
              he("button", {
                ref_for: !0,
                ref: (ge) => L(ge, Te, 2),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !r.timePickerInline,
                  dp__inc_dec_button_inline: r.timePickerInline,
                  dp__tp_inline_btn_bottom: r.timePickerInline,
                  dp__inc_dec_button_disabled: K.value(re.type),
                  "dp--hidden-el": F.value
                }),
                "data-test-id": `${re.type}-time-dec-btn-${n.order}`,
                "aria-label": (z = o(h)) == null ? void 0 : z.decrementValue(re.type),
                tabindex: "0",
                onKeydown: (ge) => o(Xe)(ge, () => te(re.type, !1, { keyboard: !0 }), !0),
                onClick: (ge) => o(v).timeArrowHoldThreshold ? void 0 : te(re.type, !1),
                onMousedown: (ge) => o(v).timeArrowHoldThreshold ? te(re.type, !1) : void 0,
                onMouseup: u
              }, [
                n.timePickerInline ? (T(), V(we, { key: 1 }, [
                  r.$slots["tp-inline-arrow-down"] ? ce(r.$slots, "tp-inline-arrow-down", { key: 0 }) : (T(), V(we, { key: 1 }, [
                    le[4] || (le[4] = he("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    le[5] || (le[5] = he("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (T(), V(we, { key: 0 }, [
                  r.$slots["arrow-down"] ? ce(r.$slots, "arrow-down", { key: 0 }) : q("", !0),
                  r.$slots["arrow-down"] ? q("", !0) : (T(), Se(o(Va), { key: 1 }))
                ], 64))
              ], 42, pr)
            ], 64))
          ], 10, fr);
        }), 128)),
        r.is24 ? q("", !0) : (T(), V("div", yr, [
          r.$slots["am-pm-button"] ? ce(r.$slots, "am-pm-button", {
            key: 0,
            toggle: S,
            value: U.value
          }) : q("", !0),
          r.$slots["am-pm-button"] ? q("", !0) : (T(), V("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: d,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (ie = o(h)) == null ? void 0 : ie.amPmButton,
            tabindex: "0",
            "data-compact": N.value,
            onClick: S,
            onKeydown: le[0] || (le[0] = (re) => o(Xe)(re, () => S(), !0))
          }, Ke(U.value), 41, gr))
        ])),
        (T(!0), V(we, null, Oe(y.value, (re, Te) => (T(), Se(Lt, {
          key: Te,
          name: o(P)(Y[re.type]),
          css: o(H)
        }, {
          default: De(() => {
            var ke, w;
            return [
              Y[re.type] ? (T(), Se(Jt, {
                key: 0,
                items: ue(re.type),
                "is-last": r.autoApply && !o(v).keepActionRow,
                "esc-close": r.escClose,
                type: re.type,
                "text-input": r.textInput,
                config: r.config,
                "arrow-navigation": r.arrowNavigation,
                "aria-labels": r.ariaLabels,
                "overlay-label": (w = (ke = o(h)).timeOverlay) == null ? void 0 : w.call(ke, re.type),
                onSelected: (z) => se(re.type, z),
                onToggle: (z) => k(re.type),
                onResetFlow: le[1] || (le[1] = (z) => r.$emit("reset-flow"))
              }, Ge({
                "button-icon": De(() => [
                  r.$slots["clock-icon"] ? ce(r.$slots, "clock-icon", { key: 0 }) : q("", !0),
                  r.$slots["clock-icon"] ? q("", !0) : (T(), Se(ia(r.timePickerInline ? o(zt) : o(Ua)), { key: 1 }))
                ]),
                _: 2
              }, [
                r.$slots[`${re.type}-overlay-value`] ? {
                  name: "item",
                  fn: De(({ item: z }) => [
                    ce(r.$slots, `${re.type}-overlay-value`, {
                      text: z.text,
                      value: z.value
                    })
                  ]),
                  key: "0"
                } : void 0,
                r.$slots[`${re.type}-overlay-header`] ? {
                  name: "header",
                  fn: De(() => [
                    ce(r.$slots, `${re.type}-overlay-header`, {
                      toggle: () => k(re.type)
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : q("", !0)
            ];
          }),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), br = ["data-dp-mobile"], kr = ["aria-label", "tabindex"], wr = ["role", "aria-label", "tabindex"], Dr = ["aria-label"], Hn = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...it
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMatrix: i, setTimePicker: c } = Mt(), h = Ct(), { defaultedTransitions: f, defaultedAriaLabels: I, defaultedTextInput: v, defaultedConfig: C, defaultedRange: m } = _e(n), { transitionName: P, showTransition: H } = Zt(f), { hideNavigationButtons: Y } = ma(), U = ee(null), d = ee(null), R = ee([]), _ = ee(null), F = ee(!1);
    We(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? i([Le(U.value)], "time") : c(!0, n.timePicker);
    });
    const Q = G(() => m.value.enabled && n.modelAuto ? An(n.internalModelValue) : !0), ne = ee(!1), x = ($) => ({
      hours: Array.isArray(n.hours) ? n.hours[$] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[$] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[$] : n.seconds
    }), A = G(() => {
      const $ = [];
      if (m.value.enabled)
        for (let g = 0; g < 2; g++)
          $.push(x(g));
      else
        $.push(x(0));
      return $;
    }), X = ($, g = !1, ue = "") => {
      g || a("reset-flow"), ne.value = $, a($ ? "overlay-opened" : "overlay-closed", je.time), n.arrowNavigation && c($), at(() => {
        ue !== "" && R.value[0] && R.value[0].openChildCmp(ue);
      });
    }, O = G(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !C.value.keepActionRow
    })), K = et(h, "timePicker"), fe = ($, g, ue) => m.value.enabled ? g === 0 ? [$, A.value[1][ue]] : [A.value[0][ue], $] : $, ve = ($) => {
      a("update:hours", $);
    }, p = ($) => {
      a("update:minutes", $);
    }, N = ($) => {
      a("update:seconds", $);
    }, ae = () => {
      if (_.value && !v.value.enabled && !n.noOverlayFocus) {
        const $ = Tn(_.value);
        $ && $.focus({ preventScroll: !0 });
      }
    }, y = ($) => {
      F.value = !1, a("overlay-closed", $);
    }, j = ($) => {
      F.value = !0, a("overlay-opened", $);
    };
    return t({ toggleTimePicker: X }), ($, g) => {
      var ue;
      return T(), V("div", {
        class: "dp--tp-wrap",
        "data-dp-mobile": $.isMobile
      }, [
        !$.timePicker && !$.timePickerInline ? la((T(), V("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: U,
          type: "button",
          class: Me({ ...O.value, "dp--hidden-el": ne.value }),
          "aria-label": (ue = o(I)) == null ? void 0 : ue.openTimePicker,
          tabindex: $.noOverlayFocus ? void 0 : 0,
          "data-test-id": "open-time-picker-btn",
          onKeydown: g[0] || (g[0] = (B) => o(Xe)(B, () => X(!0))),
          onClick: g[1] || (g[1] = (B) => X(!0))
        }, [
          $.$slots["clock-icon"] ? ce($.$slots, "clock-icon", { key: 0 }) : q("", !0),
          $.$slots["clock-icon"] ? q("", !0) : (T(), Se(o(Ua), { key: 1 }))
        ], 42, kr)), [
          [ra, !o(Y)($.hideNavigation, "time")]
        ]) : q("", !0),
        tt(Lt, {
          name: o(P)(ne.value),
          css: o(H) && !$.timePickerInline
        }, {
          default: De(() => {
            var B, D;
            return [
              ne.value || $.timePicker || $.timePickerInline ? (T(), V("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: _,
                role: $.timePickerInline ? void 0 : "dialog",
                class: Me({
                  dp__overlay: !$.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !$.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: nt($.timePicker ? { height: `${o(C).modeHeight}px` } : void 0),
                "aria-label": (B = o(I)) == null ? void 0 : B.timePicker,
                tabindex: $.timePickerInline ? void 0 : 0
              }, [
                he("div", {
                  class: Me(
                    $.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  $.$slots["time-picker-overlay"] ? ce($.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ve,
                    setMinutes: p,
                    setSeconds: N
                  }) : q("", !0),
                  $.$slots["time-picker-overlay"] ? q("", !0) : (T(), V("div", {
                    key: 1,
                    class: Me($.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (T(!0), V(we, null, Oe(A.value, (J, s) => la((T(), Se(hr, He({
                      key: s,
                      ref_for: !0
                    }, {
                      ...$.$props,
                      order: s,
                      hours: J.hours,
                      minutes: J.minutes,
                      seconds: J.seconds,
                      closeTimePickerBtn: d.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: s === 0 ? o(m).fixedStart : o(m).fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: R,
                      "validate-time": (k, E) => e.validateTime(k, fe(E, s, k)),
                      "onUpdate:hours": (k) => ve(fe(k, s, "hours")),
                      "onUpdate:minutes": (k) => p(fe(k, s, "minutes")),
                      "onUpdate:seconds": (k) => N(fe(k, s, "seconds")),
                      onMounted: ae,
                      onOverlayClosed: y,
                      onOverlayOpened: j,
                      onAmPmChange: g[2] || (g[2] = (k) => $.$emit("am-pm-change", k))
                    }), Ge({ _: 2 }, [
                      Oe(o(K), (k, E) => ({
                        name: k,
                        fn: De((u) => [
                          ce($.$slots, k, He({ ref_for: !0 }, u))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [ra, s === 0 ? !0 : Q.value]
                    ])), 128))
                  ], 2)),
                  !$.timePicker && !$.timePickerInline ? la((T(), V("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: d,
                    type: "button",
                    class: Me({ ...O.value, "dp--hidden-el": F.value }),
                    "aria-label": (D = o(I)) == null ? void 0 : D.closeTimePicker,
                    tabindex: "0",
                    onKeydown: g[3] || (g[3] = (J) => o(Xe)(J, () => X(!1))),
                    onClick: g[4] || (g[4] = (J) => X(!1))
                  }, [
                    $.$slots["calendar-icon"] ? ce($.$slots, "calendar-icon", { key: 0 }) : q("", !0),
                    $.$slots["calendar-icon"] ? q("", !0) : (T(), Se(o(zt), { key: 1 }))
                  ], 42, Dr)), [
                    [ra, !o(Y)($.hideNavigation, "time")]
                  ]) : q("", !0)
                ], 2)
              ], 14, wr)) : q("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 8, br);
    };
  }
}), Un = (e, t, l, a) => {
  const { defaultedRange: n } = _e(e), i = (_, F) => Array.isArray(t[_]) ? t[_][F] : t[_], c = (_) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[_] : t.seconds : 0, h = (_, F) => _ ? F !== void 0 ? wt(_, i("hours", F), i("minutes", F), c(F)) : wt(_, t.hours, t.minutes, c()) : yn(W(), c(F)), f = (_, F) => {
    t[_] = F;
  }, I = G(() => e.modelAuto && n.value.enabled ? Array.isArray(l.value) ? l.value.length > 1 : !1 : n.value.enabled), v = (_, F) => {
    const Q = Object.fromEntries(
      Object.keys(t).map((ne) => ne === _ ? [ne, F] : [ne, t[ne]].slice())
    );
    if (I.value && !n.value.disableTimeRangeValidation) {
      const ne = (A) => l.value ? wt(
        l.value[A],
        Q.hours[A],
        Q.minutes[A],
        Q.seconds[A]
      ) : null, x = (A) => gn(l.value[A], 0);
      return !(Ae(ne(0), ne(1)) && (It(ne(0), x(1)) || Gt(ne(1), x(0))));
    }
    return !0;
  }, C = (_, F) => {
    v(_, F) && (f(_, F), a && a());
  }, m = (_) => {
    C("hours", _);
  }, P = (_) => {
    C("minutes", _);
  }, H = (_) => {
    C("seconds", _);
  }, Y = (_, F, Q, ne) => {
    F && m(_), !F && !Q && P(_), Q && H(_), l.value && ne(l.value);
  }, U = (_) => {
    if (_) {
      const F = Array.isArray(_), Q = F ? [+_[0].hours, +_[1].hours] : +_.hours, ne = F ? [+_[0].minutes, +_[1].minutes] : +_.minutes, x = F ? [+_[0].seconds, +_[1].seconds] : +_.seconds;
      f("hours", Q), f("minutes", ne), e.enableSeconds && f("seconds", x);
    }
  }, d = (_, F) => {
    const Q = {
      hours: Array.isArray(t.hours) ? t.hours[_] : t.hours,
      disabledArr: []
    };
    return (F || F === 0) && (Q.hours = F), Array.isArray(e.disabledTimes) && (Q.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[_]) ? e.disabledTimes[_] : e.disabledTimes), Q;
  }, R = G(() => (_, F) => {
    var Q;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: ne, hours: x } = d(_, F), A = ne.filter((X) => +X.hours === x);
      return ((Q = A[0]) == null ? void 0 : Q.minutes) === "*" ? { hours: [x], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (A == null ? void 0 : A.map((X) => +X.minutes)) ?? [],
        seconds: (A == null ? void 0 : A.map((X) => X.seconds ? +X.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: f,
    updateHours: m,
    updateMinutes: P,
    updateSeconds: H,
    getSetDateTime: h,
    updateTimeValues: Y,
    getSecondsValue: c,
    assignStartTime: U,
    validateTime: v,
    disabledTimesConfig: R
  };
}, Mr = (e, t) => {
  const l = () => {
    e.isTextInputDate && F();
  }, { modelValue: a, time: n } = xt(e, t, l), { defaultedStartTime: i, defaultedRange: c, defaultedTz: h } = _e(e), { updateTimeValues: f, getSetDateTime: I, setTime: v, assignStartTime: C, disabledTimesConfig: m, validateTime: P } = Un(e, n, a, H);
  function H() {
    t("update-flow-step");
  }
  const Y = (x) => {
    const { hours: A, minutes: X, seconds: O } = x;
    return { hours: +A, minutes: +X, seconds: O ? +O : 0 };
  }, U = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const A = Y(e.startTime[0]), X = Y(e.startTime[1]);
        return [Pe(W(), A), Pe(W(), X)];
      }
      const x = Y(e.startTime);
      return Pe(W(), x);
    }
    return c.value.enabled ? [null, null] : null;
  }, d = () => {
    if (c.value.enabled) {
      const [x, A] = U();
      a.value = [
        xe(I(x, 0), h.value.timezone),
        xe(I(A, 1), h.value.timezone)
      ];
    } else
      a.value = xe(I(U()), h.value.timezone);
  }, R = (x) => Array.isArray(x) ? [Rt(W(x[0])), Rt(W(x[1]))] : [Rt(x ?? W())], _ = (x, A, X) => {
    v("hours", x), v("minutes", A), v("seconds", e.enableSeconds ? X : 0);
  }, F = () => {
    const [x, A] = R(a.value);
    return c.value.enabled ? _(
      [x.hours, A.hours],
      [x.minutes, A.minutes],
      [x.seconds, A.seconds]
    ) : _(x.hours, x.minutes, x.seconds);
  };
  We(() => {
    if (!e.shadow)
      return C(i.value), a.value ? F() : d();
  });
  const Q = () => {
    Array.isArray(a.value) ? a.value = a.value.map((x, A) => x && I(x, A)) : a.value = I(a.value), t("time-update");
  };
  return {
    modelValue: a,
    time: n,
    disabledTimesConfig: m,
    updateTime: (x, A = !0, X = !1) => {
      f(x, A, X, Q);
    },
    validateTime: P
  };
}, $r = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...it
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Ct(), c = et(i, "timePicker"), h = ee(null), { time: f, modelValue: I, disabledTimesConfig: v, updateTime: C, validateTime: m } = Mr(n, a);
    return We(() => {
      n.shadow || a("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: I,
      time: f,
      updateTime: C
    }), toggleTimePicker: (Y, U = !1, d = "") => {
      var R;
      (R = h.value) == null || R.toggleTimePicker(Y, U, d);
    } }), (Y, U) => (T(), Se(fa, {
      "multi-calendars": 0,
      stretch: "",
      "is-mobile": Y.isMobile
    }, {
      default: De(() => [
        tt(Hn, He({
          ref_key: "tpRef",
          ref: h
        }, Y.$props, {
          hours: o(f).hours,
          minutes: o(f).minutes,
          seconds: o(f).seconds,
          "internal-model-value": Y.internalModelValue,
          "disabled-times-config": o(v),
          "validate-time": o(m),
          "onUpdate:hours": U[0] || (U[0] = (d) => o(C)(d)),
          "onUpdate:minutes": U[1] || (U[1] = (d) => o(C)(d, !1)),
          "onUpdate:seconds": U[2] || (U[2] = (d) => o(C)(d, !1, !0)),
          onAmPmChange: U[3] || (U[3] = (d) => Y.$emit("am-pm-change", d)),
          onResetFlow: U[4] || (U[4] = (d) => Y.$emit("reset-flow")),
          onOverlayClosed: U[5] || (U[5] = (d) => Y.$emit("overlay-toggle", { open: !1, overlay: d })),
          onOverlayOpened: U[6] || (U[6] = (d) => Y.$emit("overlay-toggle", { open: !0, overlay: d }))
        }), Ge({ _: 2 }, [
          Oe(o(c), (d, R) => ({
            name: d,
            fn: De((_) => [
              ce(Y.$slots, d, ze(Ze(_)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }, 8, ["is-mobile"]));
  }
}), Ar = { class: "dp--header-wrap" }, Tr = {
  key: 0,
  class: "dp__month_year_wrap"
}, Sr = { key: 0 }, Pr = { class: "dp__month_year_wrap" }, Rr = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], Cr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...it
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTransitions: i,
      defaultedAriaLabels: c,
      defaultedMultiCalendars: h,
      defaultedFilters: f,
      defaultedConfig: I,
      defaultedHighlight: v,
      propDates: C,
      defaultedUI: m
    } = _e(n), { transitionName: P, showTransition: H } = Zt(i), { buildMatrix: Y } = Mt(), { handleMonthYearChange: U, isDisabled: d, updateMonthYear: R } = Xl(n, a), { showLeftIcon: _, showRightIcon: F } = ma(), Q = ee(!1), ne = ee(!1), x = ee(!1), A = ee([null, null, null, null]);
    We(() => {
      a("mount");
    });
    const X = (D) => ({
      get: () => n[D],
      set: (J) => {
        const s = D === ot.month ? ot.year : ot.month;
        a("update-month-year", { [D]: J, [s]: n[s] }), D === ot.month ? y(!0) : j(!0);
      }
    }), O = G(X(ot.month)), K = G(X(ot.year)), fe = G(() => (D) => ({
      month: n.month,
      year: n.year,
      items: D === ot.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: R,
      toggle: D === ot.month ? y : j
    })), ve = G(() => {
      const D = n.months.find((J) => J.value === n.month);
      return D || { text: "", value: 0 };
    }), p = G(() => Et(n.months, (D) => {
      const J = n.month === D.value, s = Qt(
        D.value,
        Pn(n.year, C.value.minDate),
        Rn(n.year, C.value.maxDate)
      ) || f.value.months.includes(D.value), k = Yn(v.value, D.value, n.year);
      return { active: J, disabled: s, highlighted: k };
    })), N = G(() => Et(n.years, (D) => {
      const J = n.year === D.value, s = Qt(
        D.value,
        Ft(C.value.minDate),
        Ft(C.value.maxDate)
      ) || f.value.years.includes(D.value), k = qa(v.value, D.value);
      return { active: J, disabled: s, highlighted: k };
    })), ae = (D, J, s) => {
      s !== void 0 ? D.value = s : D.value = !D.value, D.value ? (x.value = !0, a("overlay-opened", J)) : (x.value = !1, a("overlay-closed", J));
    }, y = (D = !1, J) => {
      $(D), ae(Q, je.month, J);
    }, j = (D = !1, J) => {
      $(D), ae(ne, je.year, J);
    }, $ = (D) => {
      D || a("reset-flow");
    }, g = (D, J) => {
      n.arrowNavigation && (A.value[J] = Le(D), Y(A.value, "monthYear"));
    }, ue = G(() => {
      var D, J, s, k, E, u;
      return [
        {
          type: ot.month,
          index: 1,
          toggle: y,
          modelValue: O.value,
          updateModelValue: (te) => O.value = te,
          text: ve.value.text,
          showSelectionGrid: Q.value,
          items: p.value,
          ariaLabel: (D = c.value) == null ? void 0 : D.openMonthsOverlay,
          overlayLabel: ((s = (J = c.value).monthPicker) == null ? void 0 : s.call(J, !0)) ?? void 0
        },
        {
          type: ot.year,
          index: 2,
          toggle: j,
          modelValue: K.value,
          updateModelValue: (te) => K.value = te,
          text: Sn(n.year, n.locale),
          showSelectionGrid: ne.value,
          items: N.value,
          ariaLabel: (k = c.value) == null ? void 0 : k.openYearsOverlay,
          overlayLabel: ((u = (E = c.value).yearPicker) == null ? void 0 : u.call(E, !0)) ?? void 0
        }
      ];
    }), B = G(() => n.disableYearSelect ? [ue.value[0]] : n.yearFirst ? [...ue.value].reverse() : ue.value);
    return t({
      toggleMonthPicker: y,
      toggleYearPicker: j,
      handleMonthYearChange: U
    }), (D, J) => {
      var s, k, E, u, te, ye;
      return T(), V("div", Ar, [
        D.$slots["month-year"] ? (T(), V("div", Tr, [
          ce(D.$slots, "month-year", ze(Ze({
            month: e.month,
            year: e.year,
            months: e.months,
            years: e.years,
            updateMonthYear: o(R),
            handleMonthYearChange: o(U),
            instance: e.instance,
            isDisabled: o(d)
          })))
        ])) : (T(), V(we, { key: 1 }, [
          D.$slots["top-extra"] ? (T(), V("div", Sr, [
            ce(D.$slots, "top-extra", { value: D.internalModelValue })
          ])) : q("", !0),
          he("div", Pr, [
            o(_)(o(h), e.instance) && !D.vertical ? (T(), Se(Wt, {
              key: 0,
              "aria-label": (s = o(c)) == null ? void 0 : s.prevMonth,
              disabled: o(d)(!1),
              class: Me((k = o(m)) == null ? void 0 : k.navBtnPrev),
              "el-name": "action-prev",
              onActivate: J[0] || (J[0] = (S) => o(U)(!1, !0)),
              onSetRef: J[1] || (J[1] = (S) => g(S, 0))
            }, {
              default: De(() => [
                D.$slots["arrow-left"] ? ce(D.$slots, "arrow-left", { key: 0 }) : q("", !0),
                D.$slots["arrow-left"] ? q("", !0) : (T(), Se(o(za), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : q("", !0),
            he("div", {
              class: Me(["dp__month_year_wrap", {
                dp__year_disable_select: D.disableYearSelect
              }])
            }, [
              (T(!0), V(we, null, Oe(B.value, (S, be) => (T(), V(we, {
                key: S.type
              }, [
                he("button", {
                  ref_for: !0,
                  ref: (L) => g(L, be + 1),
                  type: "button",
                  "data-dp-element": `overlay-${S.type}`,
                  class: Me(["dp__btn dp__month_year_select", { "dp--hidden-el": x.value }]),
                  "aria-label": `${S.text}-${S.ariaLabel}`,
                  "data-test-id": `${S.type}-toggle-overlay-${e.instance}`,
                  onClick: S.toggle,
                  onKeydown: (L) => o(Xe)(L, () => S.toggle(), !0)
                }, [
                  D.$slots[S.type] ? ce(D.$slots, S.type, {
                    key: 0,
                    text: S.text,
                    value: n[S.type]
                  }) : q("", !0),
                  D.$slots[S.type] ? q("", !0) : (T(), V(we, { key: 1 }, [
                    yt(Ke(S.text), 1)
                  ], 64))
                ], 42, Rr),
                tt(Lt, {
                  name: o(P)(S.showSelectionGrid),
                  css: o(H)
                }, {
                  default: De(() => [
                    S.showSelectionGrid ? (T(), Se(Jt, {
                      key: 0,
                      items: S.items,
                      "arrow-navigation": D.arrowNavigation,
                      "hide-navigation": D.hideNavigation,
                      "is-last": D.autoApply && !o(I).keepActionRow,
                      "skip-button-ref": !1,
                      config: D.config,
                      type: S.type,
                      "header-refs": [],
                      "esc-close": D.escClose,
                      "menu-wrap-ref": D.menuWrapRef,
                      "text-input": D.textInput,
                      "aria-labels": D.ariaLabels,
                      "overlay-label": S.overlayLabel,
                      onSelected: S.updateModelValue,
                      onToggle: S.toggle
                    }, Ge({
                      "button-icon": De(() => [
                        D.$slots["calendar-icon"] ? ce(D.$slots, "calendar-icon", { key: 0 }) : q("", !0),
                        D.$slots["calendar-icon"] ? q("", !0) : (T(), Se(o(zt), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      D.$slots[`${S.type}-overlay-value`] ? {
                        name: "item",
                        fn: De(({ item: L }) => [
                          ce(D.$slots, `${S.type}-overlay-value`, {
                            text: L.text,
                            value: L.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      D.$slots[`${S.type}-overlay`] ? {
                        name: "overlay",
                        fn: De(() => [
                          ce(D.$slots, `${S.type}-overlay`, He({ ref_for: !0 }, fe.value(S.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      D.$slots[`${S.type}-overlay-header`] ? {
                        name: "header",
                        fn: De(() => [
                          ce(D.$slots, `${S.type}-overlay-header`, {
                            toggle: S.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : q("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            o(_)(o(h), e.instance) && D.vertical ? (T(), Se(Wt, {
              key: 1,
              "aria-label": (E = o(c)) == null ? void 0 : E.prevMonth,
              "el-name": "action-prev",
              disabled: o(d)(!1),
              class: Me((u = o(m)) == null ? void 0 : u.navBtnPrev),
              onActivate: J[2] || (J[2] = (S) => o(U)(!1, !0))
            }, {
              default: De(() => [
                D.$slots["arrow-up"] ? ce(D.$slots, "arrow-up", { key: 0 }) : q("", !0),
                D.$slots["arrow-up"] ? q("", !0) : (T(), Se(o(Wa), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : q("", !0),
            o(F)(o(h), e.instance) ? (T(), Se(Wt, {
              key: 2,
              ref: "rightIcon",
              "el-name": "action-next",
              disabled: o(d)(!0),
              "aria-label": (te = o(c)) == null ? void 0 : te.nextMonth,
              class: Me((ye = o(m)) == null ? void 0 : ye.navBtnNext),
              onActivate: J[3] || (J[3] = (S) => o(U)(!0, !0)),
              onSetRef: J[4] || (J[4] = (S) => g(S, D.disableYearSelect ? 2 : 3))
            }, {
              default: De(() => [
                D.$slots[D.vertical ? "arrow-down" : "arrow-right"] ? ce(D.$slots, D.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : q("", !0),
                D.$slots[D.vertical ? "arrow-down" : "arrow-right"] ? q("", !0) : (T(), Se(ia(D.vertical ? o(Va) : o(Ha)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : q("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), Or = {
  class: "dp__calendar_header",
  role: "row"
}, _r = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Br = ["aria-label"], Yr = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, Ir = { class: "dp__cell_inner" }, Nr = ["id", "aria-pressed", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Er = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...it
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, { buildMultiLevelMatrix: i } = Mt(), {
      defaultedTransitions: c,
      defaultedConfig: h,
      defaultedAriaLabels: f,
      defaultedMultiCalendars: I,
      defaultedWeekNumbers: v,
      defaultedMultiDates: C,
      defaultedUI: m
    } = _e(n), P = ee(null), H = ee({
      bottom: "",
      left: "",
      transform: ""
    }), Y = ee([]), U = ee(null), d = ee(!0), R = ee(""), _ = ee({ startX: 0, endX: 0, startY: 0, endY: 0 }), F = ee([]), Q = ee({ left: "50%" }), ne = ee(!1), x = G(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), A = G(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : gl(n.formatLocale, n.locale, +n.weekStart));
    We(() => {
      a("mount", { cmp: "calendar", refs: Y }), h.value.noSwipe || U.value && (U.value.addEventListener("touchstart", g, { passive: !1 }), U.value.addEventListener("touchend", ue, { passive: !1 }), U.value.addEventListener("touchmove", B, { passive: !1 })), n.monthChangeOnScroll && U.value && U.value.addEventListener("wheel", s, { passive: !1 });
    });
    const X = (S) => S ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", O = (S, be) => {
      if (n.transitions) {
        const L = Je(pt(W(), n.month, n.year));
        R.value = Ne(Je(pt(W(), S, be)), L) ? c.value[X(!0)] : c.value[X(!1)], d.value = !1, at(() => {
          d.value = !0;
        });
      }
    }, K = G(
      () => ({
        ...m.value.calendar ?? {}
      })
    ), fe = G(() => (S) => {
      const be = bl(S);
      return {
        dp__marker_dot: be.type === "dot",
        dp__marker_line: be.type === "line"
      };
    }), ve = G(() => (S) => Ae(S, P.value)), p = G(() => ({
      dp__calendar: !0,
      dp__calendar_next: I.value.count > 0 && n.instance !== 0
    })), N = G(() => (S) => n.hideOffsetDates ? S.current : !0), ae = async (S, be) => {
      const { width: L, height: se } = S.getBoundingClientRect();
      P.value = be.value;
      let r = { left: `${L / 2}px` }, le = -50;
      if (await at(), F.value[0]) {
        const { left: ie, width: re } = F.value[0].getBoundingClientRect();
        ie < 0 && (r = { left: "0" }, le = 0, Q.value.left = `${L / 2}px`), window.innerWidth < ie + re && (r = { right: "0" }, le = 0, Q.value.left = `${re - L / 2}px`);
      }
      H.value = {
        bottom: `${se}px`,
        ...r,
        transform: `translateX(${le}%)`
      };
    }, y = async (S, be, L) => {
      var r, le, ie;
      const se = Le(Y.value[be][L]);
      se && ((r = S.marker) != null && r.customPosition && ((ie = (le = S.marker) == null ? void 0 : le.tooltip) != null && ie.length) ? H.value = S.marker.customPosition(se) : await ae(se, S), a("tooltip-open", S.marker));
    }, j = async (S, be, L) => {
      var se, r;
      if (ne.value && C.value.enabled && C.value.dragSelect)
        return a("select-date", S);
      if (a("set-hover-date", S), (r = (se = S.marker) == null ? void 0 : se.tooltip) != null && r.length) {
        if (n.hideOffsetDates && !S.current) return;
        await y(S, be, L);
      }
    }, $ = (S) => {
      P.value && (P.value = null, H.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", S.marker));
    }, g = (S) => {
      _.value.startX = S.changedTouches[0].screenX, _.value.startY = S.changedTouches[0].screenY;
    }, ue = (S) => {
      _.value.endX = S.changedTouches[0].screenX, _.value.endY = S.changedTouches[0].screenY, D();
    }, B = (S) => {
      n.vertical && !n.inline && S.preventDefault();
    }, D = () => {
      const S = n.vertical ? "Y" : "X";
      Math.abs(_.value[`start${S}`] - _.value[`end${S}`]) > 10 && a("handle-swipe", _.value[`start${S}`] > _.value[`end${S}`] ? "right" : "left");
    }, J = (S, be, L) => {
      S && (Array.isArray(Y.value[be]) ? Y.value[be][L] = S : Y.value[be] = [S]), n.arrowNavigation && i(Y.value, "calendar");
    }, s = (S) => {
      n.monthChangeOnScroll && (S.preventDefault(), a("handle-scroll", S));
    }, k = (S) => v.value.type === "local" ? sl(S.value, { weekStartsOn: +n.weekStart }) : v.value.type === "iso" ? ul(S.value) : typeof v.value.type == "function" ? v.value.type(S.value) : "", E = (S) => {
      const be = S[0];
      return v.value.hideOnOffsetDates ? S.some((L) => L.current) ? k(be) : "" : k(be);
    }, u = (S, be, L = !0) => {
      L && sn() || !L && !sn() || (!C.value.enabled || h.value.allowPreventDefault) && (kt(S, h.value), a("select-date", be));
    }, te = (S) => {
      kt(S, h.value);
    }, ye = (S) => {
      C.value.enabled && C.value.dragSelect ? (ne.value = !0, a("select-date", S)) : C.value.enabled && a("select-date", S);
    };
    return t({ triggerTransition: O }), (S, be) => (T(), V("div", {
      class: Me(p.value)
    }, [
      he("div", {
        ref_key: "calendarWrapRef",
        ref: U,
        class: Me(K.value),
        role: "grid"
      }, [
        he("div", Or, [
          S.weekNumbers ? (T(), V("div", _r, Ke(S.weekNumName), 1)) : q("", !0),
          (T(!0), V(we, null, Oe(A.value, (L, se) => {
            var r, le;
            return T(), V("div", {
              key: se,
              class: "dp__calendar_header_item",
              role: "gridcell",
              "data-test-id": "calendar-header",
              "aria-label": (le = (r = o(f)) == null ? void 0 : r.weekDay) == null ? void 0 : le.call(r, se)
            }, [
              S.$slots["calendar-header"] ? ce(S.$slots, "calendar-header", {
                key: 0,
                day: L,
                index: se
              }) : q("", !0),
              S.$slots["calendar-header"] ? q("", !0) : (T(), V(we, { key: 1 }, [
                yt(Ke(L), 1)
              ], 64))
            ], 8, Br);
          }), 128))
        ]),
        be[2] || (be[2] = he("div", { class: "dp__calendar_header_separator" }, null, -1)),
        tt(Lt, {
          name: R.value,
          css: !!S.transitions
        }, {
          default: De(() => [
            d.value ? (T(), V("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: be[1] || (be[1] = (L) => ne.value = !1)
            }, [
              (T(!0), V(we, null, Oe(x.value, (L, se) => (T(), V("div", {
                key: se,
                class: "dp__calendar_row",
                role: "row"
              }, [
                S.weekNumbers ? (T(), V("div", Yr, [
                  he("div", Ir, Ke(E(L.days)), 1)
                ])) : q("", !0),
                (T(!0), V(we, null, Oe(L.days, (r, le) => {
                  var ie, re, Te;
                  return T(), V("div", {
                    id: o(In)(r.value),
                    ref_for: !0,
                    ref: (ke) => J(ke, se, le),
                    key: le + se,
                    role: "gridcell",
                    class: "dp__calendar_item",
                    "aria-pressed": (r.classData.dp__active_date || r.classData.dp__range_start || r.classData.dp__range_start) ?? void 0,
                    "aria-disabled": r.classData.dp__cell_disabled || void 0,
                    "aria-label": (re = (ie = o(f)) == null ? void 0 : ie.day) == null ? void 0 : re.call(ie, r),
                    tabindex: !r.current && S.hideOffsetDates ? void 0 : 0,
                    "data-test-id": r.value,
                    onClick: jt((ke) => u(ke, r), ["prevent"]),
                    onTouchend: (ke) => u(ke, r, !1),
                    onKeydown: (ke) => o(Xe)(ke, () => S.$emit("select-date", r)),
                    onMouseenter: (ke) => j(r, se, le),
                    onMouseleave: (ke) => $(r),
                    onMousedown: (ke) => ye(r),
                    onMouseup: be[0] || (be[0] = (ke) => ne.value = !1)
                  }, [
                    he("div", {
                      class: Me(["dp__cell_inner", r.classData])
                    }, [
                      S.$slots.day && N.value(r) ? ce(S.$slots, "day", {
                        key: 0,
                        day: +r.text,
                        date: r.value
                      }) : q("", !0),
                      S.$slots.day ? q("", !0) : (T(), V(we, { key: 1 }, [
                        yt(Ke(r.text), 1)
                      ], 64)),
                      r.marker && N.value(r) ? (T(), V(we, { key: 2 }, [
                        S.$slots.marker ? ce(S.$slots, "marker", {
                          key: 0,
                          marker: r.marker,
                          day: +r.text,
                          date: r.value
                        }) : (T(), V("div", {
                          key: 1,
                          class: Me(fe.value(r.marker)),
                          style: nt(r.marker.color ? { backgroundColor: r.marker.color } : {})
                        }, null, 6))
                      ], 64)) : q("", !0),
                      ve.value(r.value) ? (T(), V("div", {
                        key: 3,
                        ref_for: !0,
                        ref_key: "activeTooltip",
                        ref: F,
                        class: "dp__marker_tooltip",
                        style: nt(H.value)
                      }, [
                        (Te = r.marker) != null && Te.tooltip ? (T(), V("div", {
                          key: 0,
                          class: "dp__tooltip_content",
                          onClick: te
                        }, [
                          (T(!0), V(we, null, Oe(r.marker.tooltip, (ke, w) => (T(), V("div", {
                            key: w,
                            class: "dp__tooltip_text"
                          }, [
                            S.$slots["marker-tooltip"] ? ce(S.$slots, "marker-tooltip", {
                              key: 0,
                              tooltip: ke,
                              day: r.value
                            }) : q("", !0),
                            S.$slots["marker-tooltip"] ? q("", !0) : (T(), V(we, { key: 1 }, [
                              he("div", {
                                class: "dp__tooltip_mark",
                                style: nt(ke.color ? { backgroundColor: ke.color } : {})
                              }, null, 4),
                              he("div", null, Ke(ke.text), 1)
                            ], 64))
                          ]))), 128)),
                          he("div", {
                            class: "dp__arrow_bottom_tp",
                            style: nt(Q.value)
                          }, null, 4)
                        ])) : q("", !0)
                      ], 4)) : q("", !0)
                    ], 2)
                  ], 40, Nr);
                }), 128))
              ]))), 128))
            ], 32)) : q("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), vn = (e) => Array.isArray(e), Fr = (e, t, l, a) => {
  const n = ee([]), i = ee(/* @__PURE__ */ new Date()), c = ee(), h = () => g(e.isTextInputDate), { modelValue: f, calendars: I, time: v, today: C } = xt(e, t, h), {
    defaultedMultiCalendars: m,
    defaultedStartTime: P,
    defaultedRange: H,
    defaultedConfig: Y,
    defaultedTz: U,
    propDates: d,
    defaultedMultiDates: R
  } = _e(e), { validateMonthYearInRange: _, isDisabled: F, isDateRangeAllowed: Q, checkMinMaxRange: ne } = $t(e), { updateTimeValues: x, getSetDateTime: A, setTime: X, assignStartTime: O, validateTime: K, disabledTimesConfig: fe } = Un(e, v, f, a), ve = G(
    () => (b) => I.value[b] ? I.value[b].month : 0
  ), p = G(
    () => (b) => I.value[b] ? I.value[b].year : 0
  ), N = (b) => !Y.value.keepViewOnOffsetClick || b ? !0 : !c.value, ae = (b, oe, M, Z = !1) => {
    var de, Qe;
    N(Z) && (I.value[b] || (I.value[b] = { month: 0, year: 0 }), I.value[b].month = on(oe) ? (de = I.value[b]) == null ? void 0 : de.month : oe, I.value[b].year = on(M) ? (Qe = I.value[b]) == null ? void 0 : Qe.year : M);
  }, y = () => {
    e.autoApply && t("select-date");
  };
  We(() => {
    e.shadow || (f.value || (S(), P.value && O(P.value)), g(!0), e.focusStartDate && e.startDate && S());
  });
  const j = G(() => {
    var b;
    return (b = e.flow) != null && b.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), $ = () => {
    e.autoApply && j.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
  }, g = (b = !1) => {
    if (f.value)
      return Array.isArray(f.value) ? (n.value = f.value, E(b)) : D(f.value, b);
    if (m.value.count && b && !e.startDate)
      return B(W(), b);
  }, ue = () => Array.isArray(f.value) && H.value.enabled ? $e(f.value[0]) === $e(f.value[1] ?? f.value[0]) : !1, B = (b = /* @__PURE__ */ new Date(), oe = !1) => {
    if ((!m.value.count || !m.value.static || oe) && ae(0, $e(b), pe(b)), m.value.count && (!f.value || ue() || !m.value.solo) && (!m.value.solo || oe))
      for (let M = 1; M < m.value.count; M++) {
        const Z = Pe(W(), { month: ve.value(M - 1), year: p.value(M - 1) }), de = Dn(Z, { months: 1 });
        I.value[M] = { month: $e(de), year: pe(de) };
      }
  }, D = (b, oe) => {
    B(b), X("hours", gt(b)), X("minutes", Dt(b)), X("seconds", Nt(b)), m.value.count && oe && ye();
  }, J = (b) => {
    if (m.value.count) {
      if (m.value.solo) return 0;
      const oe = $e(b[0]), M = $e(b[1]);
      return Math.abs(M - oe) < m.value.count ? 0 : 1;
    }
    return 1;
  }, s = (b, oe) => {
    b[1] && H.value.showLastInRange ? B(b[J(b)], oe) : B(b[0], oe);
    const M = (Z, de) => [
      Z(b[0]),
      b[1] ? Z(b[1]) : v[de][1]
    ];
    X("hours", M(gt, "hours")), X("minutes", M(Dt, "minutes")), X("seconds", M(Nt, "seconds"));
  }, k = (b, oe) => {
    if ((H.value.enabled || e.weekPicker) && !R.value.enabled)
      return s(b, oe);
    if (R.value.enabled && oe) {
      const M = b[b.length - 1];
      return D(M, oe);
    }
  }, E = (b) => {
    const oe = f.value;
    k(oe, b), m.value.count && m.value.solo && ye();
  }, u = (b, oe) => {
    const M = Pe(W(), { month: ve.value(oe), year: p.value(oe) }), Z = b < 0 ? St(M, 1) : Kt(M, 1);
    _($e(Z), pe(Z), b < 0, e.preventMinMaxNavigation) && (ae(oe, $e(Z), pe(Z)), t("update-month-year", { instance: oe, month: $e(Z), year: pe(Z) }), m.value.count && !m.value.solo && te(oe), l());
  }, te = (b) => {
    for (let oe = b - 1; oe >= 0; oe--) {
      const M = Kt(Pe(W(), { month: ve.value(oe + 1), year: p.value(oe + 1) }), 1);
      ae(oe, $e(M), pe(M));
    }
    for (let oe = b + 1; oe <= m.value.count - 1; oe++) {
      const M = St(Pe(W(), { month: ve.value(oe - 1), year: p.value(oe - 1) }), 1);
      ae(oe, $e(M), pe(M));
    }
  }, ye = () => {
    if (Array.isArray(f.value) && f.value.length === 2) {
      const b = W(
        W(f.value[1] ? f.value[1] : St(f.value[0], 1))
      ), [oe, M] = [$e(f.value[0]), pe(f.value[0])], [Z, de] = [$e(f.value[1]), pe(f.value[1])];
      (oe !== Z || oe === Z && M !== de) && m.value.solo && ae(1, $e(b), pe(b));
    } else f.value && !Array.isArray(f.value) && (ae(0, $e(f.value), pe(f.value)), B(W()));
  }, S = () => {
    e.startDate && (ae(0, $e(W(e.startDate)), pe(W(e.startDate))), m.value.count && te(0));
  }, be = (b, oe) => {
    if (e.monthChangeOnScroll) {
      const M = (/* @__PURE__ */ new Date()).getTime() - i.value.getTime(), Z = Math.abs(b.deltaY);
      let de = 500;
      Z > 1 && (de = 100), Z > 100 && (de = 0), M > de && (i.value = /* @__PURE__ */ new Date(), u(e.monthChangeOnScroll !== "inverse" ? -b.deltaY : b.deltaY, oe));
    }
  }, L = (b, oe, M = !1) => {
    e.monthChangeOnArrows && e.vertical === M && se(b, oe);
  }, se = (b, oe) => {
    u(b === "right" ? -1 : 1, oe);
  }, r = (b) => {
    if (d.value.markers)
      return ua(b.value, d.value.markers);
  }, le = (b, oe) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [b == 0, !0];
      case "fair":
        return [b == 0 || oe > b, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, ie = (b, oe, M, Z) => {
    if (e.sixWeeks && b.length < 6) {
      const de = 6 - b.length, Qe = (oe.getDay() + 7 - Z) % 7, Ot = 6 - (M.getDay() + 7 - Z) % 7, [Ht, Da] = le(Qe, Ot);
      for (let At = 1; At <= de; At++)
        if (Da ? !!(At % 2) == Ht : Ht) {
          const ta = b[0].days[0], Ma = re(Tt(ta.value, -7), $e(oe));
          b.unshift({ days: Ma });
        } else {
          const ta = b[b.length - 1], Ma = ta.days[ta.days.length - 1], jn = re(Tt(Ma.value, 1), $e(oe));
          b.push({ days: jn });
        }
    }
    return b;
  }, re = (b, oe) => {
    const M = W(b), Z = [];
    for (let de = 0; de < 7; de++) {
      const Qe = Tt(M, de), rt = $e(Qe) !== oe;
      Z.push({
        text: e.hideOffsetDates && rt ? "" : Qe.getDate(),
        value: Qe,
        current: !rt,
        classData: {}
      });
    }
    return Z;
  }, Te = (b, oe) => {
    const M = [], Z = new Date(oe, b), de = new Date(oe, b + 1, 0), Qe = e.weekStart, rt = La(Z, { weekStartsOn: Qe }), Ot = (Ht) => {
      const Da = re(Ht, b);
      if (M.push({ days: Da }), !M[M.length - 1].days.some(
        (At) => Ae(Je(At.value), Je(de))
      )) {
        const At = Tt(Ht, 7);
        Ot(At);
      }
    };
    return Ot(rt), ie(M, Z, de, Qe);
  }, ke = (b) => {
    const oe = wt(W(b.value), v.hours, v.minutes, ct());
    t("date-update", oe), R.value.enabled ? Xa(oe, f, R.value.limit) : f.value = oe, a(), at().then(() => {
      $();
    });
  }, w = (b) => H.value.noDisabledRange ? Cn(n.value[0], b).some((M) => F(M)) : !1, z = () => {
    n.value = f.value ? f.value.slice() : [], n.value.length === 2 && !(H.value.fixedStart || H.value.fixedEnd) && (n.value = []);
  }, ge = (b, oe) => {
    const M = [
      W(b.value),
      Tt(W(b.value), +H.value.autoRange)
    ];
    Q(M) ? (oe && Fe(b.value), n.value = M) : t("invalid-date", b.value);
  }, Fe = (b) => {
    const oe = $e(W(b)), M = pe(W(b));
    if (ae(0, oe, M), m.value.count > 0)
      for (let Z = 1; Z < m.value.count; Z++) {
        const de = Tl(
          Pe(W(b), { year: p.value(Z - 1), month: ve.value(Z - 1) })
        );
        ae(Z, de.month, de.year);
      }
  }, dt = (b) => {
    if (w(b.value) || !ne(b.value, f.value, H.value.fixedStart ? 0 : 1))
      return t("invalid-date", b.value);
    n.value = Ln(W(b.value), f, t, H);
  }, me = (b, oe) => {
    if (z(), H.value.autoRange) return ge(b, oe);
    if (H.value.fixedStart || H.value.fixedEnd) return dt(b);
    n.value[0] ? ne(W(b.value), f.value) && !w(b.value) ? Be(W(b.value), W(n.value[0])) ? (n.value.unshift(W(b.value)), t("range-end", n.value[0])) : (n.value[1] = W(b.value), t("range-end", n.value[1])) : (e.autoApply && t("auto-apply-invalid", b.value), t("invalid-date", b.value)) : (n.value[0] = W(b.value), t("range-start", n.value[0]));
  }, ct = (b = !0) => e.enableSeconds ? Array.isArray(v.seconds) ? b ? v.seconds[0] : v.seconds[1] : v.seconds : 0, Ye = (b) => {
    n.value[b] = wt(
      n.value[b],
      v.hours[b],
      v.minutes[b],
      ct(b !== 1)
    );
  }, pa = () => {
    var b, oe;
    n.value[0] && n.value[1] && +((b = n.value) == null ? void 0 : b[0]) > +((oe = n.value) == null ? void 0 : oe[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, ya = () => {
    n.value.length && (n.value[0] && !n.value[1] ? Ye(0) : (Ye(0), Ye(1), a()), pa(), f.value = n.value.slice(), va(n.value, t, e.autoApply, e.modelAuto));
  }, ea = (b, oe = !1) => {
    if (F(b.value) || !b.current && e.hideOffsetDates) return t("invalid-date", b.value);
    if (c.value = JSON.parse(JSON.stringify(b)), !H.value.enabled) return ke(b);
    vn(v.hours) && vn(v.minutes) && !R.value.enabled && (me(b, oe), ya());
  }, ga = (b, oe) => {
    var Z;
    ae(b, oe.month, oe.year, !0), m.value.count && !m.value.solo && te(b), t("update-month-year", { instance: b, month: oe.month, year: oe.year }), l(m.value.solo ? b : void 0);
    const M = (Z = e.flow) != null && Z.length ? e.flow[e.flowStep] : void 0;
    !oe.fromNav && (M === je.month || M === je.year) && a();
  }, ha = (b, oe) => {
    Fn({
      value: b,
      modelValue: f,
      range: H.value.enabled,
      timezone: oe ? void 0 : U.value.timezone
    }), y(), e.multiCalendars && at().then(() => g(!0));
  }, ba = () => {
    const b = ja(W(), U.value);
    !H.value.enabled && !R.value.enabled ? f.value = b : f.value && Array.isArray(f.value) && f.value[0] ? R.value.enabled ? f.value = [...f.value, b] : f.value = Be(b, f.value[0]) ? [b, f.value[0]] : [f.value[0], b] : f.value = [b], y();
  }, ka = () => {
    if (Array.isArray(f.value))
      if (R.value.enabled) {
        const b = wa();
        f.value[f.value.length - 1] = A(b);
      } else
        f.value = f.value.map((b, oe) => b && A(b, oe));
    else
      f.value = A(f.value);
    t("time-update");
  }, wa = () => Array.isArray(f.value) && f.value.length ? f.value[f.value.length - 1] : null;
  return {
    calendars: I,
    modelValue: f,
    month: ve,
    year: p,
    time: v,
    disabledTimesConfig: fe,
    today: C,
    validateTime: K,
    getCalendarDays: Te,
    getMarker: r,
    handleScroll: be,
    handleSwipe: se,
    handleArrow: L,
    selectDate: ea,
    updateMonthYear: ga,
    presetDate: ha,
    selectCurrentDate: ba,
    updateTime: (b, oe = !0, M = !1) => {
      x(b, oe, M, ka);
    },
    assignMonthAndYear: B
  };
}, Lr = { key: 0 }, zr = /* @__PURE__ */ Ue({
  __name: "DatePicker",
  props: {
    ...it
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      calendars: i,
      month: c,
      year: h,
      modelValue: f,
      time: I,
      disabledTimesConfig: v,
      today: C,
      validateTime: m,
      getCalendarDays: P,
      getMarker: H,
      handleArrow: Y,
      handleScroll: U,
      handleSwipe: d,
      selectDate: R,
      updateMonthYear: _,
      presetDate: F,
      selectCurrentDate: Q,
      updateTime: ne,
      assignMonthAndYear: x
    } = Fr(n, a, ue, B), A = Ct(), { setHoverDate: X, getDayClassData: O, clearHoverDate: K } = no(f, n), { defaultedMultiCalendars: fe } = _e(n), ve = ee([]), p = ee([]), N = ee(null), ae = et(A, "calendar"), y = et(A, "monthYear"), j = et(A, "timePicker"), $ = (L) => {
      n.shadow || a("mount", L);
    };
    lt(
      i,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), lt(
      fe,
      (L, se) => {
        L.count - se.count > 0 && x();
      },
      { deep: !0 }
    );
    const g = G(() => (L) => P(c.value(L), h.value(L)).map((se) => ({
      ...se,
      days: se.days.map((r) => (r.marker = H(r), r.classData = O(r), r))
    })));
    function ue(L) {
      var se;
      L || L === 0 ? (se = p.value[L]) == null || se.triggerTransition(c.value(L), h.value(L)) : p.value.forEach((r, le) => r.triggerTransition(c.value(le), h.value(le)));
    }
    function B() {
      a("update-flow-step");
    }
    const D = (L, se = !1) => {
      R(L, se), n.spaceConfirm && a("select-date");
    }, J = (L, se, r = 0) => {
      var le;
      (le = ve.value[r]) == null || le.toggleMonthPicker(L, se);
    }, s = (L, se, r = 0) => {
      var le;
      (le = ve.value[r]) == null || le.toggleYearPicker(L, se);
    }, k = (L, se, r) => {
      var le;
      (le = N.value) == null || le.toggleTimePicker(L, se, r);
    }, E = (L, se) => {
      var r;
      if (!n.range) {
        const le = f.value ? f.value : C, ie = se ? new Date(se) : le, re = L ? La(ie, { weekStartsOn: 1 }) : hn(ie, { weekStartsOn: 1 });
        R({
          value: re,
          current: $e(ie) === c.value(0),
          text: "",
          classData: {}
        }), (r = document.getElementById(In(re))) == null || r.focus();
      }
    }, u = (L) => {
      var se;
      (se = ve.value[0]) == null || se.handleMonthYearChange(L, !0);
    }, te = (L) => {
      _(0, { month: c.value(0), year: h.value(0) + (L ? 1 : -1), fromNav: !0 });
    }, ye = (L, se) => {
      L === je.time && a(`time-picker-${se ? "open" : "close"}`), a("overlay-toggle", { open: se, overlay: L });
    }, S = (L) => {
      a("overlay-toggle", { open: !1, overlay: L }), a("focus-menu");
    };
    return t({
      clearHoverDate: K,
      presetDate: F,
      selectCurrentDate: Q,
      toggleMonthPicker: J,
      toggleYearPicker: s,
      toggleTimePicker: k,
      handleArrow: Y,
      updateMonthYear: _,
      getSidebarProps: () => ({
        modelValue: f,
        month: c,
        year: h,
        time: I,
        updateTime: ne,
        updateMonthYear: _,
        selectDate: R,
        presetDate: F
      }),
      changeMonth: u,
      changeYear: te,
      selectWeekDate: E
    }), (L, se) => (T(), V(we, null, [
      tt(fa, {
        "multi-calendars": o(fe).count,
        collapse: L.collapse,
        "is-mobile": L.isMobile
      }, {
        default: De(({ instance: r, index: le }) => [
          L.disableMonthYearSelect ? q("", !0) : (T(), Se(Cr, He({
            key: 0,
            ref: (ie) => {
              ie && (ve.value[le] = ie);
            },
            months: o($n)(L.formatLocale, L.locale, L.monthNameFormat),
            years: o(Ka)(L.yearRange, L.locale, L.reverseYears),
            month: o(c)(r),
            year: o(h)(r),
            instance: r
          }, L.$props, {
            onMount: se[0] || (se[0] = (ie) => $(o(Pt).header)),
            onResetFlow: se[1] || (se[1] = (ie) => L.$emit("reset-flow")),
            onUpdateMonthYear: (ie) => o(_)(r, ie),
            onOverlayClosed: S,
            onOverlayOpened: se[2] || (se[2] = (ie) => L.$emit("overlay-toggle", { open: !0, overlay: ie }))
          }), Ge({ _: 2 }, [
            Oe(o(y), (ie, re) => ({
              name: ie,
              fn: De((Te) => [
                ce(L.$slots, ie, ze(Ze(Te)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          tt(Er, He({
            ref: (ie) => {
              ie && (p.value[le] = ie);
            },
            "mapped-dates": g.value(r),
            month: o(c)(r),
            year: o(h)(r),
            instance: r
          }, L.$props, {
            onSelectDate: (ie) => o(R)(ie, r !== 1),
            onHandleSpace: (ie) => D(ie, r !== 1),
            onSetHoverDate: se[3] || (se[3] = (ie) => o(X)(ie)),
            onHandleScroll: (ie) => o(U)(ie, r),
            onHandleSwipe: (ie) => o(d)(ie, r),
            onMount: se[4] || (se[4] = (ie) => $(o(Pt).calendar)),
            onResetFlow: se[5] || (se[5] = (ie) => L.$emit("reset-flow")),
            onTooltipOpen: se[6] || (se[6] = (ie) => L.$emit("tooltip-open", ie)),
            onTooltipClose: se[7] || (se[7] = (ie) => L.$emit("tooltip-close", ie))
          }), Ge({ _: 2 }, [
            Oe(o(ae), (ie, re) => ({
              name: ie,
              fn: De((Te) => [
                ce(L.$slots, ie, ze(Ze({ ...Te })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse", "is-mobile"]),
      L.enableTimePicker ? (T(), V("div", Lr, [
        L.$slots["time-picker"] ? ce(L.$slots, "time-picker", ze(He({ key: 0 }, { time: o(I), updateTime: o(ne) }))) : (T(), Se(Hn, He({
          key: 1,
          ref_key: "timePickerRef",
          ref: N
        }, L.$props, {
          hours: o(I).hours,
          minutes: o(I).minutes,
          seconds: o(I).seconds,
          "internal-model-value": L.internalModelValue,
          "disabled-times-config": o(v),
          "validate-time": o(m),
          onMount: se[8] || (se[8] = (r) => $(o(Pt).timePicker)),
          "onUpdate:hours": se[9] || (se[9] = (r) => o(ne)(r)),
          "onUpdate:minutes": se[10] || (se[10] = (r) => o(ne)(r, !1)),
          "onUpdate:seconds": se[11] || (se[11] = (r) => o(ne)(r, !1, !0)),
          onResetFlow: se[12] || (se[12] = (r) => L.$emit("reset-flow")),
          onOverlayClosed: se[13] || (se[13] = (r) => ye(r, !1)),
          onOverlayOpened: se[14] || (se[14] = (r) => ye(r, !0)),
          onAmPmChange: se[15] || (se[15] = (r) => L.$emit("am-pm-change", r))
        }), Ge({ _: 2 }, [
          Oe(o(j), (r, le) => ({
            name: r,
            fn: De((ie) => [
              ce(L.$slots, r, ze(Ze(ie)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : q("", !0)
    ], 64));
  }
}), Hr = (e, t) => {
  const l = ee(), {
    defaultedMultiCalendars: a,
    defaultedConfig: n,
    defaultedHighlight: i,
    defaultedRange: c,
    propDates: h,
    defaultedFilters: f,
    defaultedMultiDates: I
  } = _e(e), { modelValue: v, year: C, month: m, calendars: P } = xt(e, t), { isDisabled: H } = $t(e), { selectYear: Y, groupedYears: U, showYearPicker: d, isDisabled: R, toggleYearPicker: _, handleYearSelect: F, handleYear: Q } = zn({
    modelValue: v,
    multiCalendars: a,
    range: c,
    highlight: i,
    calendars: P,
    propDates: h,
    month: m,
    year: C,
    filters: f,
    props: e,
    emit: t
  }), ne = (y, j) => [y, j].map(($) => vt($, "MMMM", { locale: e.formatLocale })).join("-"), x = G(() => (y) => v.value ? Array.isArray(v.value) ? v.value.some((j) => tn(y, j)) : tn(v.value, y) : !1), A = (y) => {
    if (c.value.enabled) {
      if (Array.isArray(v.value)) {
        const j = Ae(y, v.value[0]) || Ae(y, v.value[1]);
        return da(v.value, l.value, y) && !j;
      }
      return !1;
    }
    return !1;
  }, X = (y, j) => y.quarter === nn(j) && y.year === pe(j), O = (y) => typeof i.value == "function" ? i.value({ quarter: nn(y), year: pe(y) }) : !!i.value.quarters.find((j) => X(j, y)), K = G(() => (y) => {
    const j = Pe(/* @__PURE__ */ new Date(), { year: C.value(y) });
    return il({
      start: sa(j),
      end: wn(j)
    }).map(($) => {
      const g = dl($), ue = an($), B = H($), D = A(g), J = O(g);
      return {
        text: ne(g, ue),
        value: g,
        active: x.value(g),
        highlighted: J,
        disabled: B,
        isBetween: D
      };
    });
  }), fe = (y) => {
    Xa(y, v, I.value.limit), t("auto-apply", !0);
  }, ve = (y) => {
    v.value = Ja(v, y, t), va(v.value, t, e.autoApply, e.modelAuto);
  }, p = (y) => {
    v.value = y, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: U,
    year: C,
    isDisabled: R,
    quarters: K,
    showYearPicker: d,
    modelValue: v,
    setHoverDate: (y) => {
      l.value = y;
    },
    selectYear: Y,
    selectQuarter: (y, j, $) => {
      if (!$)
        return P.value[j].month = $e(an(y)), I.value.enabled ? fe(y) : c.value.enabled ? ve(y) : p(y);
    },
    toggleYearPicker: _,
    handleYearSelect: F,
    handleYear: Q
  };
}, Ur = { class: "dp--quarter-items" }, Wr = ["data-test-id", "disabled", "onClick", "onMouseover"], Vr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...it
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Ct(), c = et(i, "yearMode"), {
      defaultedMultiCalendars: h,
      defaultedConfig: f,
      groupedYears: I,
      year: v,
      isDisabled: C,
      quarters: m,
      modelValue: P,
      showYearPicker: H,
      setHoverDate: Y,
      selectQuarter: U,
      toggleYearPicker: d,
      handleYearSelect: R,
      handleYear: _
    } = Hr(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: P,
      year: v,
      selectQuarter: U,
      handleYearSelect: R,
      handleYear: _
    }) }), (Q, ne) => (T(), Se(fa, {
      "multi-calendars": o(h).count,
      collapse: Q.collapse,
      stretch: "",
      "is-mobile": Q.isMobile
    }, {
      default: De(({ instance: x }) => [
        he("div", {
          class: "dp-quarter-picker-wrap",
          style: nt({ minHeight: `${o(f).modeHeight}px` })
        }, [
          Q.$slots["top-extra"] ? ce(Q.$slots, "top-extra", {
            key: 0,
            value: Q.internalModelValue
          }) : q("", !0),
          he("div", null, [
            tt(En, He(Q.$props, {
              items: o(I)(x),
              instance: x,
              "show-year-picker": o(H)[x],
              year: o(v)(x),
              "is-disabled": (A) => o(C)(x, A),
              onHandleYear: (A) => o(_)(x, A),
              onYearSelect: (A) => o(R)(A, x),
              onToggleYearPicker: (A) => o(d)(x, A == null ? void 0 : A.flow, A == null ? void 0 : A.show)
            }), Ge({ _: 2 }, [
              Oe(o(c), (A, X) => ({
                name: A,
                fn: De((O) => [
                  ce(Q.$slots, A, ze(Ze(O)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          he("div", Ur, [
            (T(!0), V(we, null, Oe(o(m)(x), (A, X) => (T(), V("div", { key: X }, [
              he("button", {
                type: "button",
                class: Me(["dp--qr-btn", {
                  "dp--qr-btn-active": A.active,
                  "dp--qr-btn-between": A.isBetween,
                  "dp--qr-btn-disabled": A.disabled,
                  "dp--highlighted": A.highlighted
                }]),
                "data-test-id": A.value,
                disabled: A.disabled,
                onClick: (O) => o(U)(A.value, x, A.disabled),
                onMouseover: (O) => o(Y)(A.value)
              }, [
                Q.$slots.quarter ? ce(Q.$slots, "quarter", {
                  key: 0,
                  value: A.value,
                  text: A.text
                }) : (T(), V(we, { key: 1 }, [
                  yt(Ke(A.text), 1)
                ], 64))
              ], 42, Wr)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), Wn = (e, t) => {
  const l = ee(0);
  We(() => {
    a(), window.addEventListener("resize", a, { passive: !0 });
  }), Xt(() => {
    window.removeEventListener("resize", a);
  });
  const a = () => {
    l.value = window.document.documentElement.clientWidth;
  };
  return {
    isMobile: G(
      () => l.value <= e.value.mobileBreakpoint && !t ? !0 : void 0
    )
  };
}, jr = ["id", "tabindex", "role", "aria-label"], Kr = {
  key: 0,
  class: "dp--menu-load-container"
}, Gr = {
  key: 1,
  class: "dp--menu-header"
}, Qr = ["data-dp-mobile"], qr = {
  key: 0,
  class: "dp__sidebar_left"
}, Xr = ["data-dp-mobile"], Jr = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], Zr = {
  key: 2,
  class: "dp__sidebar_right"
}, xr = {
  key: 3,
  class: "dp__action_extra"
}, mn = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...ca,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "menu-blur"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = ee(null), c = G(() => {
      const { openOnTop: w, ...z } = n;
      return {
        ...z,
        isMobile: Y.value,
        flowStep: K.value,
        menuWrapRef: i.value
      };
    }), { setMenuFocused: h, setShiftKey: f, control: I } = Nn(), v = Ct(), { defaultedTextInput: C, defaultedInline: m, defaultedConfig: P, defaultedUI: H } = _e(n), { isMobile: Y } = Wn(P, n.shadow), U = ee(null), d = ee(0), R = ee(null), _ = ee(!1), F = ee(null), Q = ee(!1);
    We(() => {
      if (!n.shadow) {
        _.value = !0, ne(), window.addEventListener("resize", ne);
        const w = Le(i);
        if (w && !C.value.enabled && !m.value.enabled && (h(!0), j()), w) {
          const z = (ge) => {
            Q.value = !0, P.value.allowPreventDefault && ge.preventDefault(), kt(ge, P.value, !0);
          };
          w.addEventListener("pointerdown", z), w.addEventListener("mousedown", z);
        }
      }
      document.addEventListener("mousedown", ke);
    }), Xt(() => {
      window.removeEventListener("resize", ne), document.addEventListener("mousedown", ke);
    });
    const ne = () => {
      const w = Le(R);
      w && (d.value = w.getBoundingClientRect().width);
    }, { arrowRight: x, arrowLeft: A, arrowDown: X, arrowUp: O } = Mt(), { flowStep: K, updateFlowStep: fe, childMount: ve, resetFlow: p, handleFlow: N } = lo(n, a, F), ae = G(() => n.monthPicker ? ur : n.yearPicker ? dr : n.timePicker ? $r : n.quarterPicker ? Vr : zr), y = G(() => {
      var ge;
      if (P.value.arrowLeft) return P.value.arrowLeft;
      const w = (ge = i.value) == null ? void 0 : ge.getBoundingClientRect(), z = n.getInputRect();
      return (z == null ? void 0 : z.width) < (d == null ? void 0 : d.value) && (z == null ? void 0 : z.left) <= ((w == null ? void 0 : w.left) ?? 0) ? `${(z == null ? void 0 : z.width) / 2}px` : (z == null ? void 0 : z.right) >= ((w == null ? void 0 : w.right) ?? 0) && (z == null ? void 0 : z.width) < (d == null ? void 0 : d.value) ? `${(d == null ? void 0 : d.value) - (z == null ? void 0 : z.width) / 2}px` : "50%";
    }), j = () => {
      const w = Le(i);
      w && w.focus({ preventScroll: !0 });
    }, $ = G(() => {
      var w;
      return ((w = F.value) == null ? void 0 : w.getSidebarProps()) || {};
    }), g = () => {
      n.openOnTop && a("recalculate-position");
    }, ue = et(v, "action"), B = G(() => n.monthPicker || n.yearPicker ? et(v, "monthYear") : n.timePicker ? et(v, "timePicker") : et(v, "shared")), D = G(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), J = G(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), s = G(
      () => ({
        dp__menu: !0,
        dp__menu_index: !m.value.enabled,
        dp__relative: m.value.enabled,
        ...H.value.menu ?? {}
      })
    ), k = (w) => {
      kt(w, P.value, !0);
    }, E = () => {
      n.escClose && a("close-picker");
    }, u = (w) => {
      if (n.arrowNavigation) {
        if (w === qe.up) return O();
        if (w === qe.down) return X();
        if (w === qe.left) return A();
        if (w === qe.right) return x();
      } else w === qe.left || w === qe.up ? L("handleArrow", qe.left, 0, w === qe.up) : L("handleArrow", qe.right, 0, w === qe.down);
    }, te = (w) => {
      f(w.shiftKey), !n.disableMonthYearSelect && w.code === Ce.tab && w.target.classList.contains("dp__menu") && I.value.shiftKeyInMenu && (w.preventDefault(), kt(w, P.value, !0), a("close-picker"));
    }, ye = () => {
      j(), a("time-picker-close");
    }, S = (w) => {
      var z, ge, Fe;
      (z = F.value) == null || z.toggleTimePicker(!1, !1), (ge = F.value) == null || ge.toggleMonthPicker(!1, !1, w), (Fe = F.value) == null || Fe.toggleYearPicker(!1, !1, w);
    }, be = (w, z = 0) => {
      var ge, Fe, dt;
      return w === "month" ? (ge = F.value) == null ? void 0 : ge.toggleMonthPicker(!1, !0, z) : w === "year" ? (Fe = F.value) == null ? void 0 : Fe.toggleYearPicker(!1, !0, z) : w === "time" ? (dt = F.value) == null ? void 0 : dt.toggleTimePicker(!0, !1) : S(z);
    }, L = (w, ...z) => {
      var ge, Fe;
      (ge = F.value) != null && ge[w] && ((Fe = F.value) == null || Fe[w](...z));
    }, se = () => {
      L("selectCurrentDate");
    }, r = (w, z) => {
      L("presetDate", w, z);
    }, le = () => {
      L("clearHoverDate");
    }, ie = (w, z) => {
      L("updateMonthYear", w, z);
    }, re = (w, z) => {
      w.preventDefault(), u(z);
    }, Te = (w) => {
      var z, ge, Fe;
      if (te(w), w.key === Ce.home || w.key === Ce.end)
        return L(
          "selectWeekDate",
          w.key === Ce.home,
          w.target.getAttribute("id")
        );
      switch ((w.key === Ce.pageUp || w.key === Ce.pageDown) && (w.shiftKey ? (L("changeYear", w.key === Ce.pageUp), (z = Ea(i.value, "overlay-year")) == null || z.focus()) : (L("changeMonth", w.key === Ce.pageUp), (ge = Ea(i.value, w.key === Ce.pageUp ? "action-prev" : "action-next")) == null || ge.focus()), w.target.getAttribute("id") && ((Fe = i.value) == null || Fe.focus({ preventScroll: !0 }))), w.key) {
        case Ce.esc:
          return E();
        case Ce.arrowLeft:
          return re(w, qe.left);
        case Ce.arrowRight:
          return re(w, qe.right);
        case Ce.arrowUp:
          return re(w, qe.up);
        case Ce.arrowDown:
          return re(w, qe.down);
        default:
          return;
      }
    }, ke = (w) => {
      var z;
      m.value.enabled && !m.value.input && !((z = i.value) != null && z.contains(w.target)) && Q.value && (Q.value = !1, a("menu-blur"));
    };
    return t({
      updateMonthYear: ie,
      switchView: be,
      handleFlow: N
    }), (w, z) => {
      var ge, Fe, dt;
      return T(), V("div", {
        id: w.uid ? `dp-menu-${w.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: i,
        tabindex: o(m).enabled ? void 0 : "0",
        role: o(m).enabled ? void 0 : "dialog",
        "aria-label": (ge = w.ariaLabels) == null ? void 0 : ge.menu,
        class: Me(s.value),
        style: nt({ "--dp-arrow-left": y.value }),
        onMouseleave: le,
        onClick: k,
        onKeydown: Te
      }, [
        (w.disabled || w.readonly) && o(m).enabled || w.loading ? (T(), V("div", {
          key: 0,
          class: Me(J.value)
        }, [
          w.loading ? (T(), V("div", Kr, z[19] || (z[19] = [
            he("span", { class: "dp--menu-loader" }, null, -1)
          ]))) : q("", !0)
        ], 2)) : q("", !0),
        w.$slots["menu-header"] ? (T(), V("div", Gr, [
          ce(w.$slots, "menu-header")
        ])) : q("", !0),
        !o(m).enabled && !w.teleportCenter ? (T(), V("div", {
          key: 2,
          class: Me(D.value)
        }, null, 2)) : q("", !0),
        he("div", {
          ref_key: "innerMenuRef",
          ref: R,
          class: Me({
            dp__menu_content_wrapper: ((Fe = w.presetDates) == null ? void 0 : Fe.length) || !!w.$slots["left-sidebar"] || !!w.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((dt = w.presetDates) == null ? void 0 : dt.length) || !!w.$slots["left-sidebar"] || !!w.$slots["right-sidebar"])
          }),
          "data-dp-mobile": o(Y),
          style: nt({ "--dp-menu-width": `${d.value}px` })
        }, [
          w.$slots["left-sidebar"] ? (T(), V("div", qr, [
            ce(w.$slots, "left-sidebar", ze(Ze($.value)))
          ])) : q("", !0),
          w.presetDates.length ? (T(), V("div", {
            key: 1,
            class: Me({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
            "data-dp-mobile": o(Y)
          }, [
            (T(!0), V(we, null, Oe(w.presetDates, (me, ct) => (T(), V(we, { key: ct }, [
              me.slot ? ce(w.$slots, me.slot, {
                key: 0,
                presetDate: r,
                label: me.label,
                value: me.value
              }) : (T(), V("button", {
                key: 1,
                type: "button",
                style: nt(me.style || {}),
                class: Me(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test-id": me.testId ?? void 0,
                "data-dp-mobile": o(Y),
                onClick: jt((Ye) => r(me.value, me.noTz), ["prevent"]),
                onKeydown: (Ye) => o(Xe)(Ye, () => r(me.value, me.noTz), !0)
              }, Ke(me.label), 47, Jr))
            ], 64))), 128))
          ], 10, Xr)) : q("", !0),
          he("div", {
            ref_key: "calendarWrapperRef",
            ref: U,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (T(), Se(ia(ae.value), He({
              ref_key: "dynCmpRef",
              ref: F
            }, c.value, {
              "flow-step": o(K),
              onMount: o(ve),
              onUpdateFlowStep: o(fe),
              onResetFlow: o(p),
              onFocusMenu: j,
              onSelectDate: z[0] || (z[0] = (me) => w.$emit("select-date")),
              onDateUpdate: z[1] || (z[1] = (me) => w.$emit("date-update", me)),
              onTooltipOpen: z[2] || (z[2] = (me) => w.$emit("tooltip-open", me)),
              onTooltipClose: z[3] || (z[3] = (me) => w.$emit("tooltip-close", me)),
              onAutoApply: z[4] || (z[4] = (me) => w.$emit("auto-apply", me)),
              onRangeStart: z[5] || (z[5] = (me) => w.$emit("range-start", me)),
              onRangeEnd: z[6] || (z[6] = (me) => w.$emit("range-end", me)),
              onInvalidFixedRange: z[7] || (z[7] = (me) => w.$emit("invalid-fixed-range", me)),
              onTimeUpdate: z[8] || (z[8] = (me) => w.$emit("time-update")),
              onAmPmChange: z[9] || (z[9] = (me) => w.$emit("am-pm-change", me)),
              onTimePickerOpen: z[10] || (z[10] = (me) => w.$emit("time-picker-open", me)),
              onTimePickerClose: ye,
              onRecalculatePosition: g,
              onUpdateMonthYear: z[11] || (z[11] = (me) => w.$emit("update-month-year", me)),
              onAutoApplyInvalid: z[12] || (z[12] = (me) => w.$emit("auto-apply-invalid", me)),
              onInvalidDate: z[13] || (z[13] = (me) => w.$emit("invalid-date", me)),
              onOverlayToggle: z[14] || (z[14] = (me) => w.$emit("overlay-toggle", me)),
              "onUpdate:internalModelValue": z[15] || (z[15] = (me) => w.$emit("update:internal-model-value", me))
            }), Ge({ _: 2 }, [
              Oe(B.value, (me, ct) => ({
                name: me,
                fn: De((Ye) => [
                  ce(w.$slots, me, ze(Ze({ ...Ye })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          w.$slots["right-sidebar"] ? (T(), V("div", Zr, [
            ce(w.$slots, "right-sidebar", ze(Ze($.value)))
          ])) : q("", !0),
          w.$slots["action-extra"] ? (T(), V("div", xr, [
            w.$slots["action-extra"] ? ce(w.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: se
            }) : q("", !0)
          ])) : q("", !0)
        ], 14, Qr),
        !w.autoApply || o(P).keepActionRow ? (T(), Se(xl, He({
          key: 3,
          "menu-mount": _.value
        }, c.value, {
          "calendar-width": d.value,
          onClosePicker: z[16] || (z[16] = (me) => w.$emit("close-picker")),
          onSelectDate: z[17] || (z[17] = (me) => w.$emit("select-date")),
          onInvalidSelect: z[18] || (z[18] = (me) => w.$emit("invalid-select")),
          onSelectNow: se
        }), Ge({ _: 2 }, [
          Oe(o(ue), (me, ct) => ({
            name: me,
            fn: De((Ye) => [
              ce(w.$slots, me, ze(Ze({ ...Ye })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : q("", !0)
      ], 46, jr);
    };
  }
});
var Bt = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Bt || {});
const eo = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: l,
  pickerWrapperRef: a,
  inline: n,
  emit: i,
  props: c,
  slots: h
}) => {
  const { defaultedConfig: f } = _e(c), I = ee({}), v = ee(!1), C = ee({
    top: "0",
    left: "0"
  }), m = ee(!1), P = Vt(c, "teleportCenter");
  lt(P, () => {
    C.value = JSON.parse(JSON.stringify({})), Q();
  });
  const H = (y) => {
    if (c.teleport) {
      const j = y.getBoundingClientRect();
      return {
        left: j.left + window.scrollX,
        top: j.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, Y = (y, j) => {
    C.value.left = `${y + j - I.value.width}px`;
  }, U = (y) => {
    C.value.left = `${y}px`;
  }, d = (y, j) => {
    c.position === Bt.left && U(y), c.position === Bt.right && Y(y, j), c.position === Bt.center && (C.value.left = `${y + j / 2 - I.value.width / 2}px`);
  }, R = (y) => {
    const { width: j, height: $ } = y.getBoundingClientRect(), { top: g, left: ue } = H(y);
    return { top: +g, left: +ue, width: j, height: $ };
  }, _ = () => {
    C.value.left = "50%", C.value.top = "50%", C.value.transform = "translate(-50%, -50%)", C.value.position = "fixed", delete C.value.opacity;
  }, F = () => {
    const y = Le(l);
    C.value = c.altPosition(y);
  }, Q = (y = !0) => {
    var j;
    if (!n.value.enabled) {
      if (P.value) return _();
      if (c.altPosition !== null) return F();
      if (y) {
        const $ = c.teleport ? (j = t.value) == null ? void 0 : j.$el : e.value;
        $ && (I.value = $.getBoundingClientRect()), i("recalculate-position");
      }
      return fe();
    }
  }, ne = ({ inputEl: y, left: j, width: $ }) => {
    window.screen.width > 768 && !v.value && d(j, $), X(y);
  }, x = (y) => {
    const { top: j, left: $, height: g, width: ue } = R(y);
    C.value.top = `${g + j + +c.offset}px`, m.value = !1, v.value || (C.value.left = `${$ + ue / 2 - I.value.width / 2}px`), ne({ inputEl: y, left: $, width: ue });
  }, A = (y) => {
    const { top: j, left: $, width: g } = R(y);
    C.value.top = `${j - +c.offset - I.value.height}px`, m.value = !0, ne({ inputEl: y, left: $, width: g });
  }, X = (y) => {
    if (c.autoPosition) {
      const { left: j, width: $ } = R(y), { left: g, right: ue } = I.value;
      if (!v.value) {
        if (Math.abs(g) !== Math.abs(ue)) {
          if (g <= 0)
            return v.value = !0, U(j);
          if (ue >= document.documentElement.clientWidth)
            return v.value = !0, Y(j, $);
        }
        return d(j, $);
      }
    }
  }, O = () => {
    const y = Le(l);
    if (y) {
      if (c.autoPosition === st.top) return st.top;
      if (c.autoPosition === st.bottom) return st.bottom;
      const { height: j } = I.value, { top: $, height: g } = y.getBoundingClientRect(), B = window.innerHeight - $ - g, D = $;
      return j <= B ? st.bottom : j > B && j <= D ? st.top : B >= D ? st.bottom : st.top;
    }
    return st.bottom;
  }, K = (y) => O() === st.bottom ? x(y) : A(y), fe = () => {
    const y = Le(l);
    if (y)
      return c.autoPosition ? K(y) : x(y);
  }, ve = function(y) {
    if (y) {
      const j = y.scrollHeight > y.clientHeight, g = window.getComputedStyle(y).overflowY.indexOf("hidden") !== -1;
      return j && !g;
    }
    return !0;
  }, p = function(y) {
    return !y || y === document.body || y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : ve(y) ? y : p(
      y.assignedSlot && f.value.shadowDom ? y.assignedSlot.parentNode : y.parentNode
    );
  }, N = (y) => {
    if (y)
      switch (c.position) {
        case Bt.left:
          return { left: 0, transform: "translateX(0)" };
        case Bt.right:
          return { left: `${y.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${y.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: m,
    menuStyle: C,
    xCorrect: v,
    setMenuPosition: Q,
    getScrollableParent: p,
    shadowRender: (y, j) => {
      var s, k, E;
      const $ = document.createElement("div"), g = (s = Le(l)) == null ? void 0 : s.getBoundingClientRect();
      $.setAttribute("id", "dp--temp-container");
      const ue = (k = a.value) != null && k.clientWidth ? a.value : document.body;
      ue.append($);
      const B = N(g), D = f.value.shadowDom ? Object.keys(h).filter(
        (u) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(u)
      ) : Object.keys(h), J = qn(
        y,
        {
          ...j,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...B }
        },
        Object.fromEntries(D.map((u) => [u, h[u]]))
      );
      xa(J, $), I.value = (E = J.el) == null ? void 0 : E.getBoundingClientRect(), xa(null, $), ue.removeChild($);
    }
  };
}, ht = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] },
  { name: "menu-header", use: ["menu"] }
], to = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ao = {
  all: () => ht,
  monthYear: () => ht.filter((e) => e.use.includes("month-year")),
  input: () => to,
  timePicker: () => ht.filter((e) => e.use.includes("time")),
  action: () => ht.filter((e) => e.use.includes("action")),
  calendar: () => ht.filter((e) => e.use.includes("calendar")),
  menu: () => ht.filter((e) => e.use.includes("menu")),
  shared: () => ht.filter((e) => e.use.includes("shared")),
  yearMode: () => ht.filter((e) => e.use.includes("year-mode"))
}, et = (e, t, l) => {
  const a = [];
  return ao[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), l != null && l.length && l.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, Zt = (e) => {
  const t = G(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), l = G(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: l };
}, xt = (e, t, l) => {
  const { defaultedRange: a, defaultedTz: n } = _e(e), i = W(xe(W(), n.value.timezone)), c = ee([{ month: $e(i), year: pe(i) }]), h = (m) => {
    const P = {
      hours: gt(i),
      minutes: Dt(i),
      seconds: 0
    };
    return a.value.enabled ? [P[m], P[m]] : P[m];
  }, f = qt({
    hours: h("hours"),
    minutes: h("minutes"),
    seconds: h("seconds")
  });
  lt(
    a,
    (m, P) => {
      m.enabled !== P.enabled && (f.hours = h("hours"), f.minutes = h("minutes"), f.seconds = h("seconds"));
    },
    { deep: !0 }
  );
  const I = G({
    get: () => e.internalModelValue,
    set: (m) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", m);
    }
  }), v = G(
    () => (m) => c.value[m] ? c.value[m].month : 0
  ), C = G(
    () => (m) => c.value[m] ? c.value[m].year : 0
  );
  return lt(
    I,
    (m, P) => {
      l && JSON.stringify(m ?? {}) !== JSON.stringify(P ?? {}) && l();
    },
    { deep: !0 }
  ), {
    calendars: c,
    time: f,
    modelValue: I,
    month: v,
    year: C,
    today: i
  };
}, no = (e, t) => {
  const {
    defaultedMultiCalendars: l,
    defaultedMultiDates: a,
    defaultedUI: n,
    defaultedHighlight: i,
    defaultedTz: c,
    propDates: h,
    defaultedRange: f
  } = _e(t), { isDisabled: I } = $t(t), v = ee(null), C = ee(xe(/* @__PURE__ */ new Date(), c.value.timezone)), m = (s) => {
    !s.current && t.hideOffsetDates || (v.value = s.value);
  }, P = () => {
    v.value = null;
  }, H = (s) => Array.isArray(e.value) && f.value.enabled && e.value[0] && v.value ? s ? Ne(v.value, e.value[0]) : Be(v.value, e.value[0]) : !0, Y = (s, k) => {
    const E = () => e.value ? k ? e.value[0] || null : e.value[1] : null, u = e.value && Array.isArray(e.value) ? E() : null;
    return Ae(W(s.value), u);
  }, U = (s) => {
    const k = Array.isArray(e.value) ? e.value[0] : null;
    return s ? !Be(v.value ?? null, k) : !0;
  }, d = (s, k = !0) => (f.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !s.current ? !1 : Ae(W(s.value), e.value[k ? 0 : 1]) : f.value.enabled ? Y(s, k) && U(k) || Ae(s.value, Array.isArray(e.value) ? e.value[0] : null) && H(k) : !1, R = (s, k) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const E = Ae(s.value, v.value);
      return k ? Ne(e.value[0], s.value) && E : Be(e.value[0], s.value) && E;
    }
    return !1;
  }, _ = (s) => !e.value || t.hideOffsetDates && !s.current ? !1 : f.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Ae(s.value, e.value[0] ? e.value[0] : C.value) : !1 : a.value.enabled && Array.isArray(e.value) ? e.value.some((k) => Ae(k, s.value)) : Ae(s.value, e.value ? e.value : C.value), F = (s) => {
    if (f.value.autoRange || t.weekPicker) {
      if (v.value) {
        if (t.hideOffsetDates && !s.current) return !1;
        const k = Tt(v.value, +f.value.autoRange), E = mt(W(v.value), t.weekStart);
        return t.weekPicker ? Ae(E[1], W(s.value)) : Ae(k, W(s.value));
      }
      return !1;
    }
    return !1;
  }, Q = (s) => {
    if (f.value.autoRange || t.weekPicker) {
      if (v.value) {
        const k = Tt(v.value, +f.value.autoRange);
        if (t.hideOffsetDates && !s.current) return !1;
        const E = mt(W(v.value), t.weekStart);
        return t.weekPicker ? Ne(s.value, E[0]) && Be(s.value, E[1]) : Ne(s.value, v.value) && Be(s.value, k);
      }
      return !1;
    }
    return !1;
  }, ne = (s) => {
    if (f.value.autoRange || t.weekPicker) {
      if (v.value) {
        if (t.hideOffsetDates && !s.current) return !1;
        const k = mt(W(v.value), t.weekStart);
        return t.weekPicker ? Ae(k[0], s.value) : Ae(v.value, s.value);
      }
      return !1;
    }
    return !1;
  }, x = (s) => da(e.value, v.value, s.value), A = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, X = () => t.modelAuto ? An(t.internalModelValue) : !0, O = (s) => {
    if (t.weekPicker) return !1;
    const k = f.value.enabled ? !d(s) && !d(s, !1) : !0;
    return !I(s.value) && !_(s) && !(!s.current && t.hideOffsetDates) && k;
  }, K = (s) => f.value.enabled ? t.modelAuto ? A() && _(s) : !1 : _(s), fe = (s) => i.value ? Ml(s.value, h.value.highlight) : !1, ve = (s) => {
    const k = I(s.value);
    return k && (typeof i.value == "function" ? !i.value(s.value, k) : !i.value.options.highlightDisabled);
  }, p = (s) => {
    var k;
    return typeof i.value == "function" ? i.value(s.value) : (k = i.value.weekdays) == null ? void 0 : k.includes(s.value.getDay());
  }, N = (s) => (f.value.enabled || t.weekPicker) && (!(l.value.count > 0) || s.current) && X() && !(!s.current && t.hideOffsetDates) && !_(s) ? x(s) : !1, ae = (s) => {
    const { isRangeStart: k, isRangeEnd: E } = g(s), u = f.value.enabled ? k || E : !1;
    return {
      dp__cell_offset: !s.current,
      dp__pointer: !t.disabled && !(!s.current && t.hideOffsetDates) && !I(s.value),
      dp__cell_disabled: I(s.value),
      dp__cell_highlight: !ve(s) && (fe(s) || p(s)) && !K(s) && !u && !ne(s) && !(N(s) && t.weekPicker) && !E,
      dp__cell_highlight_active: !ve(s) && (fe(s) || p(s)) && K(s),
      dp__today: !t.noToday && Ae(s.value, C.value) && s.current,
      "dp--past": Be(s.value, C.value),
      "dp--future": Ne(s.value, C.value)
    };
  }, y = (s) => ({
    dp__active_date: K(s),
    dp__date_hover: O(s)
  }), j = (s) => {
    if (e.value && !Array.isArray(e.value)) {
      const k = mt(e.value, t.weekStart);
      return {
        ...B(s),
        dp__range_start: Ae(k[0], s.value),
        dp__range_end: Ae(k[1], s.value),
        dp__range_between_week: Ne(s.value, k[0]) && Be(s.value, k[1])
      };
    }
    return {
      ...B(s)
    };
  }, $ = (s) => {
    if (e.value && Array.isArray(e.value)) {
      const k = mt(e.value[0], t.weekStart), E = e.value[1] ? mt(e.value[1], t.weekStart) : [];
      return {
        ...B(s),
        dp__range_start: Ae(k[0], s.value) || Ae(E[0], s.value),
        dp__range_end: Ae(k[1], s.value) || Ae(E[1], s.value),
        dp__range_between_week: Ne(s.value, k[0]) && Be(s.value, k[1]) || Ne(s.value, E[0]) && Be(s.value, E[1]),
        dp__range_between: Ne(s.value, k[1]) && Be(s.value, E[0])
      };
    }
    return {
      ...B(s)
    };
  }, g = (s) => {
    const k = l.value.count > 0 ? s.current && d(s) && X() : d(s) && X(), E = l.value.count > 0 ? s.current && d(s, !1) && X() : d(s, !1) && X();
    return { isRangeStart: k, isRangeEnd: E };
  }, ue = (s) => {
    const { isRangeStart: k, isRangeEnd: E } = g(s);
    return {
      dp__range_start: k,
      dp__range_end: E,
      dp__range_between: N(s),
      dp__date_hover: Ae(s.value, v.value) && !k && !E && !t.weekPicker,
      dp__date_hover_start: R(s, !0),
      dp__date_hover_end: R(s, !1)
    };
  }, B = (s) => ({
    ...ue(s),
    dp__cell_auto_range: Q(s),
    dp__cell_auto_range_start: ne(s),
    dp__cell_auto_range_end: F(s)
  }), D = (s) => f.value.enabled ? f.value.autoRange ? B(s) : t.modelAuto ? { ...y(s), ...ue(s) } : t.weekPicker ? $(s) : ue(s) : t.weekPicker ? j(s) : y(s);
  return {
    setHoverDate: m,
    clearHoverDate: P,
    getDayClassData: (s) => t.hideOffsetDates && !s.current ? {} : {
      ...ae(s),
      ...D(s),
      [t.dayClass ? t.dayClass(s.value, t.internalModelValue) : ""]: !0,
      ...n.value.calendarCell ?? {}
    }
  };
}, $t = (e) => {
  const { defaultedFilters: t, defaultedRange: l, propDates: a, defaultedMultiDates: n } = _e(e), i = (p) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(W(p)) : !!ua(p, a.value.disabledDates) : !1, c = (p) => a.value.maxDate ? e.yearPicker ? pe(p) > pe(a.value.maxDate) : Ne(p, a.value.maxDate) : !1, h = (p) => a.value.minDate ? e.yearPicker ? pe(p) < pe(a.value.minDate) : Be(p, a.value.minDate) : !1, f = (p) => {
    const N = c(p), ae = h(p), y = i(p), $ = t.value.months.map((J) => +J).includes($e(p)), g = e.disabledWeekDays.length ? e.disabledWeekDays.some((J) => +J === cl(p)) : !1, ue = P(p), B = pe(p), D = B < +e.yearRange[0] || B > +e.yearRange[1];
    return !(N || ae || y || $ || D || g || ue);
  }, I = (p, N) => Be(...bt(a.value.minDate, p, N)) || Ae(...bt(a.value.minDate, p, N)), v = (p, N) => Ne(...bt(a.value.maxDate, p, N)) || Ae(...bt(a.value.maxDate, p, N)), C = (p, N, ae) => {
    let y = !1;
    return a.value.maxDate && ae && v(p, N) && (y = !0), a.value.minDate && !ae && I(p, N) && (y = !0), y;
  }, m = (p, N, ae, y) => {
    let j = !1;
    return y && (a.value.minDate || a.value.maxDate) ? a.value.minDate && a.value.maxDate ? j = C(p, N, ae) : (a.value.minDate && I(p, N) || a.value.maxDate && v(p, N)) && (j = !0) : j = !0, j;
  }, P = (p) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !ua(p, a.value.allowedDates) : !1, H = (p) => !f(p), Y = (p) => l.value.noDisabledRange ? !pn({ start: p[0], end: p[1] }).some((ae) => H(ae)) : !0, U = (p) => {
    if (p) {
      const N = pe(p);
      return N >= +e.yearRange[0] && N <= e.yearRange[1];
    }
    return !0;
  }, d = (p, N) => !!(Array.isArray(p) && p[N] && (l.value.maxRange || l.value.minRange) && U(p[N])), R = (p, N, ae = 0) => {
    if (d(N, ae) && U(p)) {
      const y = fl(p, N[ae]), j = Cn(N[ae], p), $ = j.length === 1 ? 0 : j.filter((ue) => H(ue)).length, g = Math.abs(y) - (l.value.minMaxRawRange ? 0 : $);
      if (l.value.minRange && l.value.maxRange)
        return g >= +l.value.minRange && g <= +l.value.maxRange;
      if (l.value.minRange) return g >= +l.value.minRange;
      if (l.value.maxRange) return g <= +l.value.maxRange;
    }
    return !0;
  }, _ = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, F = (p) => Array.isArray(p) ? [p[0] ? Pa(p[0]) : null, p[1] ? Pa(p[1]) : null] : Pa(p), Q = (p, N, ae) => p.find(
    (y) => +y.hours === gt(N) && y.minutes === "*" ? !0 : +y.minutes === Dt(N) && +y.hours === gt(N)
  ) && ae, ne = (p, N, ae) => {
    const [y, j] = p, [$, g] = N;
    return !Q(y, $, ae) && !Q(j, g, ae) && ae;
  }, x = (p, N) => {
    const ae = Array.isArray(N) ? N : [N];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? ne(e.disabledTimes, ae, p) : !ae.some((y) => Q(e.disabledTimes, y, p)) : p;
  }, A = (p, N) => {
    const ae = Array.isArray(N) ? [Rt(N[0]), N[1] ? Rt(N[1]) : void 0] : Rt(N), y = !e.disabledTimes(ae);
    return p && y;
  }, X = (p, N) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? x(N, p) : A(N, p) : N, O = (p) => {
    let N = !0;
    if (!p || _()) return !0;
    const ae = !a.value.minDate && !a.value.maxDate ? F(p) : p;
    return (e.maxTime || a.value.maxDate) && (N = dn(
      e.maxTime,
      a.value.maxDate,
      "max",
      Ee(ae),
      N
    )), (e.minTime || a.value.minDate) && (N = dn(
      e.minTime,
      a.value.minDate,
      "min",
      Ee(ae),
      N
    )), X(p, N);
  }, K = (p) => {
    if (!e.monthPicker) return !0;
    let N = !0;
    const ae = W(ut(p));
    if (a.value.minDate && a.value.maxDate) {
      const y = W(ut(a.value.minDate)), j = W(ut(a.value.maxDate));
      return Ne(ae, y) && Be(ae, j) || Ae(ae, y) || Ae(ae, j);
    }
    if (a.value.minDate) {
      const y = W(ut(a.value.minDate));
      N = Ne(ae, y) || Ae(ae, y);
    }
    if (a.value.maxDate) {
      const y = W(ut(a.value.maxDate));
      N = Be(ae, y) || Ae(ae, y);
    }
    return N;
  }, fe = G(() => (p) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : O(p)), ve = G(() => (p) => e.monthPicker ? Array.isArray(p) && (l.value.enabled || n.value.enabled) ? !p.filter((ae) => !K(ae)).length : K(p) : !0);
  return {
    isDisabled: H,
    validateDate: f,
    validateMonthYearInRange: m,
    isDateRangeAllowed: Y,
    checkMinMaxRange: R,
    isValidTime: O,
    isTimeValid: fe,
    isMonthValid: ve
  };
}, ma = () => {
  const e = G(() => (a, n) => a == null ? void 0 : a.includes(n)), t = G(() => (a, n) => a.count ? a.solo ? !0 : n === 0 : !0), l = G(() => (a, n) => a.count ? a.solo ? !0 : n === a.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: l };
}, lo = (e, t, l) => {
  const a = ee(0), n = qt({
    [Pt.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Pt.calendar]: !1,
    [Pt.header]: !1
  }), i = G(() => e.monthPicker || e.timePicker), c = (C) => {
    var m;
    if ((m = e.flow) != null && m.length) {
      if (!C && i.value) return v();
      n[C] = !0, Object.keys(n).filter((P) => !n[P]).length || v();
    }
  }, h = () => {
    var C, m;
    (C = e.flow) != null && C.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), v()), ((m = e.flow) == null ? void 0 : m.length) === a.value && at().then(() => f());
  }, f = () => {
    a.value = -1;
  }, I = (C, m, ...P) => {
    var H, Y;
    e.flow[a.value] === C && l.value && ((Y = (H = l.value)[m]) == null || Y.call(H, ...P));
  }, v = (C = 0) => {
    C && (a.value += C), I(je.month, "toggleMonthPicker", !0), I(je.year, "toggleYearPicker", !0), I(je.calendar, "toggleTimePicker", !1, !0), I(je.time, "toggleTimePicker", !0, !0);
    const m = e.flow[a.value];
    (m === je.hours || m === je.minutes || m === je.seconds) && I(m, "toggleTimePicker", !0, !0, m);
  };
  return { childMount: c, updateFlowStep: h, resetFlow: f, handleFlow: v, flowStep: a };
}, ro = {
  key: 1,
  class: "dp__input_wrap"
}, oo = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], so = {
  key: 2,
  class: "dp--clear-btn"
}, uo = ["aria-label"], io = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...ca
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur",
    "text-input"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, {
      defaultedTextInput: i,
      defaultedAriaLabels: c,
      defaultedInline: h,
      defaultedConfig: f,
      defaultedRange: I,
      defaultedMultiDates: v,
      defaultedUI: C,
      getDefaultPattern: m,
      getDefaultStartTime: P
    } = _e(n), { checkMinMaxRange: H } = $t(n), Y = ee(), U = ee(null), d = ee(!1), R = ee(!1), _ = G(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !i.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !i.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: typeof n.state == "boolean" ? n.state : !1,
        dp__input_invalid: typeof n.state == "boolean" ? !n.state : !1,
        dp__input_focus: d.value || n.isMenuOpen,
        dp__input_reg: !i.value.enabled,
        ...C.value.input ?? {}
      })
    ), F = () => {
      a("set-input-date", null), n.clearable && n.autoApply && (a("set-empty-date"), Y.value = null);
    }, Q = (g) => {
      const ue = P();
      return $l(
        g,
        i.value.format ?? m(),
        ue ?? On({}, n.enableSeconds),
        n.inputValue,
        R.value,
        n.formatLocale
      );
    }, ne = (g) => {
      const { rangeSeparator: ue } = i.value, [B, D] = g.split(`${ue}`);
      if (B) {
        const J = Q(B.trim()), s = D ? Q(D.trim()) : null;
        if (It(J, s)) return;
        const k = J && s ? [J, s] : [J];
        H(s, k, 0) && (Y.value = J ? k : null);
      }
    }, x = () => {
      R.value = !0;
    }, A = (g) => {
      if (I.value.enabled)
        ne(g);
      else if (v.value.enabled) {
        const ue = g.split(";");
        Y.value = ue.map((B) => Q(B.trim())).filter((B) => B);
      } else
        Y.value = Q(g);
    }, X = (g) => {
      var B;
      const ue = typeof g == "string" ? g : (B = g.target) == null ? void 0 : B.value;
      ue !== "" ? (i.value.openMenu && !n.isMenuOpen && a("open"), A(ue), a("set-input-date", Y.value)) : F(), R.value = !1, a("update:input-value", ue), a("text-input", g, Y.value);
    }, O = (g) => {
      i.value.enabled ? (A(g.target.value), i.value.enterSubmit && Fa(Y.value) && n.inputValue !== "" ? (a("set-input-date", Y.value, !0), Y.value = null) : i.value.enterSubmit && n.inputValue === "" && (Y.value = null, a("clear"))) : ve(g);
    }, K = (g, ue) => {
      i.value.enabled && i.value.tabSubmit && !ue && A(g.target.value), i.value.tabSubmit && Fa(Y.value) && n.inputValue !== "" ? (a("set-input-date", Y.value, !0, !0), Y.value = null) : i.value.tabSubmit && n.inputValue === "" && (Y.value = null, a("clear", !0));
    }, fe = () => {
      d.value = !0, a("focus"), at().then(() => {
        var g;
        i.value.enabled && i.value.selectOnFocus && ((g = U.value) == null || g.select());
      });
    }, ve = (g) => {
      if (kt(g, f.value, !0), i.value.enabled && i.value.openMenu && !h.value.input) {
        if (i.value.openMenu === "open" && !n.isMenuOpen) return a("open");
        if (i.value.openMenu === "toggle") return a("toggle");
      } else i.value.enabled || a("toggle");
    }, p = () => {
      a("real-blur"), d.value = !1, (!n.isMenuOpen || h.value.enabled && h.value.input) && a("blur"), n.autoApply && i.value.enabled && Y.value && !n.isMenuOpen && (a("set-input-date", Y.value), a("select-date"), Y.value = null);
    }, N = (g) => {
      kt(g, f.value, !0), a("clear");
    }, ae = (g) => {
      if (g.key === "Tab" && K(g), g.key === "Enter" && O(g), !i.value.enabled) {
        if (g.code === "Tab") return;
        g.preventDefault();
      }
    }, y = () => {
      var g;
      (g = U.value) == null || g.focus({ preventScroll: !0 });
    }, j = (g) => {
      Y.value = g;
    }, $ = (g) => {
      g.key === Ce.tab && K(g, !0);
    };
    return t({
      focusInput: y,
      setParsedDate: j
    }), (g, ue) => {
      var B, D, J;
      return T(), V("div", { onClick: ve }, [
        g.$slots.trigger && !g.$slots["dp-input"] && !o(h).enabled ? ce(g.$slots, "trigger", { key: 0 }) : q("", !0),
        !g.$slots.trigger && (!o(h).enabled || o(h).input) ? (T(), V("div", ro, [
          g.$slots["dp-input"] && !g.$slots.trigger && (!o(h).enabled || o(h).enabled && o(h).input) ? ce(g.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: X,
            onEnter: O,
            onTab: K,
            onClear: N,
            onBlur: p,
            onKeypress: ae,
            onPaste: x,
            onFocus: fe,
            openMenu: () => g.$emit("open"),
            closeMenu: () => g.$emit("close"),
            toggleMenu: () => g.$emit("toggle")
          }) : q("", !0),
          g.$slots["dp-input"] ? q("", !0) : (T(), V("input", {
            key: 1,
            id: g.uid ? `dp-input-${g.uid}` : void 0,
            ref_key: "inputRef",
            ref: U,
            "data-test-id": "dp-input",
            name: g.name,
            class: Me(_.value),
            inputmode: o(i).enabled ? "text" : "none",
            placeholder: g.placeholder,
            disabled: g.disabled,
            readonly: g.readonly,
            required: g.required,
            value: e.inputValue,
            autocomplete: g.autocomplete,
            "aria-label": (B = o(c)) == null ? void 0 : B.input,
            "aria-disabled": g.disabled || void 0,
            "aria-invalid": g.state === !1 ? !0 : void 0,
            onInput: X,
            onBlur: p,
            onFocus: fe,
            onKeypress: ae,
            onKeydown: ue[0] || (ue[0] = (s) => ae(s)),
            onPaste: x
          }, null, 42, oo)),
          he("div", {
            onClick: ue[3] || (ue[3] = (s) => a("toggle"))
          }, [
            g.$slots["input-icon"] && !g.hideInputIcon ? (T(), V("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: ue[1] || (ue[1] = (s) => a("toggle"))
            }, [
              ce(g.$slots, "input-icon")
            ])) : q("", !0),
            !g.$slots["input-icon"] && !g.hideInputIcon && !g.$slots["dp-input"] ? (T(), Se(o(zt), {
              key: 1,
              "aria-label": (D = o(c)) == null ? void 0 : D.calendarIcon,
              class: "dp__input_icon dp__input_icons",
              onClick: ue[2] || (ue[2] = (s) => a("toggle"))
            }, null, 8, ["aria-label"])) : q("", !0)
          ]),
          g.$slots["clear-icon"] && e.inputValue && g.clearable && !g.disabled && !g.readonly ? (T(), V("span", so, [
            ce(g.$slots, "clear-icon", { clear: N })
          ])) : q("", !0),
          g.clearable && !g.$slots["clear-icon"] && e.inputValue && !g.disabled && !g.readonly ? (T(), V("button", {
            key: 3,
            "aria-label": (J = o(c)) == null ? void 0 : J.clearInput,
            class: "dp--clear-btn",
            type: "button",
            onKeydown: ue[4] || (ue[4] = (s) => o(Xe)(s, () => N(s), !0, $)),
            onClick: ue[5] || (ue[5] = jt((s) => N(s), ["prevent"]))
          }, [
            tt(o(Mn), {
              class: "dp__input_icons",
              "data-test-id": "clear-icon"
            })
          ], 40, uo)) : q("", !0)
        ])) : q("", !0)
      ]);
    };
  }
}), co = typeof window < "u" ? window : void 0, Ya = () => {
}, fo = (e) => Xn() ? (Jn(e), !0) : !1, vo = (e, t, l, a) => {
  if (!e) return Ya;
  let n = Ya;
  const i = lt(
    () => o(e),
    (h) => {
      n(), h && (h.addEventListener(t, l, a), n = () => {
        h.removeEventListener(t, l, a), n = Ya;
      });
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), n();
  };
  return fo(c), c;
}, mo = (e, t, l, a = {}) => {
  const { window: n = co, event: i = "pointerdown" } = a;
  return n ? vo(n, i, (h) => {
    const f = Le(e), I = Le(t);
    !f || !I || f === h.target || h.composedPath().includes(f) || h.composedPath().includes(I) || l(h);
  }, { passive: !0 }) : void 0;
}, po = ["data-dp-mobile"], yo = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...ca
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "text-input"
  ],
  setup(e, { expose: t, emit: l }) {
    const a = l, n = e, i = Ct(), c = ee(!1), h = Vt(n, "modelValue"), f = Vt(n, "timezone"), I = ee(null), v = ee(null), C = ee(null), m = ee(!1), P = ee(null), H = ee(!1), Y = ee(!1), U = ee(!1), d = ee(!1), { setMenuFocused: R, setShiftKey: _ } = Nn(), { clearArrowNav: F } = Mt(), { validateDate: Q, isValidTime: ne } = $t(n), {
      defaultedTransitions: x,
      defaultedTextInput: A,
      defaultedInline: X,
      defaultedConfig: O,
      defaultedRange: K,
      defaultedMultiDates: fe
    } = _e(n), { menuTransition: ve, showTransition: p } = Zt(x), { isMobile: N } = Wn(O);
    We(() => {
      k(n.modelValue), at().then(() => {
        if (!X.value.enabled) {
          const M = B(P.value);
          M == null || M.addEventListener("scroll", le), window == null || window.addEventListener("resize", ie);
        }
      }), X.value.enabled && (c.value = !0), window == null || window.addEventListener("keyup", re), window == null || window.addEventListener("keydown", Te);
    }), Xt(() => {
      if (!X.value.enabled) {
        const M = B(P.value);
        M == null || M.removeEventListener("scroll", le), window == null || window.removeEventListener("resize", ie);
      }
      window == null || window.removeEventListener("keyup", re), window == null || window.removeEventListener("keydown", Te);
    });
    const ae = et(i, "all", n.presetDates), y = et(i, "input");
    lt(
      [h, f],
      () => {
        k(h.value);
      },
      { deep: !0 }
    );
    const { openOnTop: j, menuStyle: $, xCorrect: g, setMenuPosition: ue, getScrollableParent: B, shadowRender: D } = eo({
      menuRef: I,
      menuRefInner: v,
      inputRef: C,
      pickerWrapperRef: P,
      inline: X,
      emit: a,
      props: n,
      slots: i
    }), {
      inputValue: J,
      internalModelValue: s,
      parseExternalModelValue: k,
      emitModelValue: E,
      formatInputValue: u,
      checkBeforeEmit: te
    } = ql(a, n, m), ye = G(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: X.value.enabled,
        "dp--flex-display-collapsed": U.value,
        dp__flex_display_with_input: X.value.input
      })
    ), S = G(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), be = G(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || X.value.enabled
    } : {}), L = G(() => ({ class: "dp__outer_menu_wrap" })), se = G(() => X.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), r = () => {
      var M, Z;
      return ((Z = (M = C.value) == null ? void 0 : M.$el) == null ? void 0 : Z.getBoundingClientRect()) ?? { width: 0, left: 0, right: 0 };
    }, le = () => {
      c.value && (O.value.closeOnScroll ? Ye() : ue());
    }, ie = () => {
      var Z;
      c.value && ue();
      const M = ((Z = v.value) == null ? void 0 : Z.$el.getBoundingClientRect().width) ?? 0;
      U.value = document.body.offsetWidth <= M;
    }, re = (M) => {
      M.key === "Tab" && !X.value.enabled && !n.teleport && O.value.tabOutClosesMenu && (P.value.contains(document.activeElement) || Ye()), Y.value = M.shiftKey;
    }, Te = (M) => {
      Y.value = M.shiftKey;
    }, ke = () => {
      !n.disabled && !n.readonly && (D(mn, n), ue(!1), c.value = !0, c.value && a("open"), c.value || ct(), k(n.modelValue));
    }, w = () => {
      var M;
      J.value = "", ct(), (M = C.value) == null || M.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), O.value.closeOnClearValue && Ye();
    }, z = () => {
      const M = s.value;
      return !M || !Array.isArray(M) && Q(M) ? !0 : Array.isArray(M) ? fe.value.enabled || M.length === 2 && Q(M[0]) && Q(M[1]) ? !0 : K.value.partialRange && !n.timePicker ? Q(M[0]) : !1 : !1;
    }, ge = () => {
      te() && z() ? (E(), Ye()) : a("invalid-select", s.value);
    }, Fe = (M) => {
      dt(), E(), O.value.closeOnAutoApply && !M && Ye();
    }, dt = () => {
      C.value && A.value.enabled && C.value.setParsedDate(s.value);
    }, me = (M = !1) => {
      n.autoApply && ne(s.value) && z() && (K.value.enabled && Array.isArray(s.value) ? (K.value.partialRange || s.value.length === 2) && Fe(M) : Fe(M));
    }, ct = () => {
      A.value.enabled || (s.value = null);
    }, Ye = (M = !1) => {
      M && s.value && O.value.setDateOnMenuClose && ge(), X.value.enabled || (c.value && (c.value = !1, g.value = !1, R(!1), _(!1), F(), a("closed"), J.value && k(h.value)), ct(), a("blur"));
    }, pa = (M, Z, de = !1) => {
      if (!M) {
        s.value = null;
        return;
      }
      const Qe = Array.isArray(M) ? !M.some((Ot) => !Q(Ot)) : Q(M), rt = ne(M);
      Qe && rt ? (d.value = !0, s.value = M, Z && (H.value = de, ge(), a("text-submit")), at().then(() => {
        d.value = !1;
      })) : a("invalid-date", M);
    }, ya = () => {
      n.autoApply && ne(s.value) && E(), dt();
    }, ea = () => c.value ? Ye() : ke(), ga = (M) => {
      s.value = M;
    }, ha = () => {
      A.value.enabled && (m.value = !0, u()), a("focus");
    }, ba = () => {
      if (A.value.enabled && (m.value = !1, k(n.modelValue), H.value)) {
        const M = Dl(P.value, Y.value);
        M == null || M.focus();
      }
      a("blur");
    }, ka = (M) => {
      v.value && v.value.updateMonthYear(0, {
        month: rn(M.month),
        year: rn(M.year)
      });
    }, wa = (M) => {
      k(M ?? n.modelValue);
    }, Za = (M, Z) => {
      var de;
      (de = v.value) == null || de.switchView(M, Z);
    }, b = (M) => O.value.onClickOutside ? O.value.onClickOutside(M) : Ye(!0), oe = (M = 0) => {
      var Z;
      (Z = v.value) == null || Z.handleFlow(M);
    };
    return mo(I, C, () => b(z)), t({
      closeMenu: Ye,
      selectDate: ge,
      clearValue: w,
      openMenu: ke,
      onScroll: le,
      formatInputValue: u,
      // exposed for testing purposes
      updateInternalModelValue: ga,
      // modify internal modelValue
      setMonthYear: ka,
      parseModel: wa,
      switchView: Za,
      toggleMenu: ea,
      handleFlow: oe,
      dpWrapMenuRef: I
    }), (M, Z) => (T(), V("div", {
      ref_key: "pickerWrapperRef",
      ref: P,
      class: Me(ye.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": o(N)
    }, [
      tt(io, He({
        ref_key: "inputRef",
        ref: C,
        "input-value": o(J),
        "onUpdate:inputValue": Z[0] || (Z[0] = (de) => en(J) ? J.value = de : null),
        "is-menu-open": c.value
      }, M.$props, {
        onClear: w,
        onOpen: ke,
        onSetInputDate: pa,
        onSetEmptyDate: o(E),
        onSelectDate: ge,
        onToggle: ea,
        onClose: Ye,
        onFocus: ha,
        onBlur: ba,
        onRealBlur: Z[1] || (Z[1] = (de) => m.value = !1),
        onTextInput: Z[2] || (Z[2] = (de) => M.$emit("text-input", de))
      }), Ge({ _: 2 }, [
        Oe(o(y), (de, Qe) => ({
          name: de,
          fn: De((rt) => [
            ce(M.$slots, de, ze(Ze(rt)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (T(), Se(ia(M.teleport ? Zn : "div"), ze(Ze(be.value)), {
        default: De(() => [
          tt(Lt, {
            name: o(ve)(o(j)),
            css: o(p) && !o(X).enabled
          }, {
            default: De(() => [
              c.value ? (T(), V("div", He({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: I
              }, L.value, {
                class: { "dp--menu-wrapper": !o(X).enabled },
                style: o(X).enabled ? void 0 : o($)
              }), [
                tt(mn, He({
                  ref_key: "dpMenuRef",
                  ref: v
                }, M.$props, {
                  "internal-model-value": o(s),
                  "onUpdate:internalModelValue": Z[3] || (Z[3] = (de) => en(s) ? s.value = de : null),
                  class: { [S.value]: !0, "dp--menu-wrapper": M.teleport },
                  "open-on-top": o(j),
                  "no-overlay-focus": se.value,
                  collapse: U.value,
                  "get-input-rect": r,
                  "is-text-input-date": d.value,
                  onClosePicker: Ye,
                  onSelectDate: ge,
                  onAutoApply: me,
                  onTimeUpdate: ya,
                  onFlowStep: Z[4] || (Z[4] = (de) => M.$emit("flow-step", de)),
                  onUpdateMonthYear: Z[5] || (Z[5] = (de) => M.$emit("update-month-year", de)),
                  onInvalidSelect: Z[6] || (Z[6] = (de) => M.$emit("invalid-select", o(s))),
                  onAutoApplyInvalid: Z[7] || (Z[7] = (de) => M.$emit("invalid-select", de)),
                  onInvalidFixedRange: Z[8] || (Z[8] = (de) => M.$emit("invalid-fixed-range", de)),
                  onRecalculatePosition: o(ue),
                  onTooltipOpen: Z[9] || (Z[9] = (de) => M.$emit("tooltip-open", de)),
                  onTooltipClose: Z[10] || (Z[10] = (de) => M.$emit("tooltip-close", de)),
                  onTimePickerOpen: Z[11] || (Z[11] = (de) => M.$emit("time-picker-open", de)),
                  onTimePickerClose: Z[12] || (Z[12] = (de) => M.$emit("time-picker-close", de)),
                  onAmPmChange: Z[13] || (Z[13] = (de) => M.$emit("am-pm-change", de)),
                  onRangeStart: Z[14] || (Z[14] = (de) => M.$emit("range-start", de)),
                  onRangeEnd: Z[15] || (Z[15] = (de) => M.$emit("range-end", de)),
                  onDateUpdate: Z[16] || (Z[16] = (de) => M.$emit("date-update", de)),
                  onInvalidDate: Z[17] || (Z[17] = (de) => M.$emit("invalid-date", de)),
                  onOverlayToggle: Z[18] || (Z[18] = (de) => M.$emit("overlay-toggle", de)),
                  onMenuBlur: Z[19] || (Z[19] = (de) => M.$emit("blur"))
                }), Ge({ _: 2 }, [
                  Oe(o(ae), (de, Qe) => ({
                    name: de,
                    fn: De((rt) => [
                      ce(M.$slots, de, ze(Ze({ ...rt })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : q("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 10, po));
  }
}), Vn = /* @__PURE__ */ (() => {
  const e = yo;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(go).forEach(([e, t]) => {
  e !== "default" && (Vn[e] = t);
});
export {
  Vn as default
};
