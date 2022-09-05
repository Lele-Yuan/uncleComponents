import { defineComponent as u, computed as r, openBlock as p, createElementBlock as d, normalizeClass as y, unref as a, normalizeStyle as f, renderSlot as b } from "vue";
const h = ["", "default", "small", "large"], g = ["", "primary", "success", "info", "text", "warning", "danger"], v = ["", "fill", "fill-pill", "fill-unite", "float", "shadow", "Jelly"], c = {
  componentSizes: h,
  types: g,
  hoverTypes: v
};
const B = {
  name: "JButton"
}, o = /* @__PURE__ */ u({
  ...B,
  __name: "index",
  props: {
    size: {
      type: String,
      value: c.componentSizes
    },
    type: {
      type: String,
      values: c.types,
      default: "default"
    },
    plain: Boolean,
    round: Boolean,
    slant: Boolean,
    circle: Boolean,
    disabled: Boolean,
    color: String,
    hoverType: {
      type: String,
      value: c.hoverTypes,
      default: ""
    }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    const e = t, i = r(() => ({
      [`j_button-${e.type}`]: e.type,
      is_plain: e.plain,
      is_round: e.round,
      is_slant: e.slant,
      is_circle: e.circle,
      is_disabled: e.disabled,
      [`j-button-${e.size}`]: e.size,
      [`j-button-hover-${e.hoverType}`]: e.hoverType
    })), _ = r(() => e.color && {
      "--j-button-bg-color": e.color,
      "--j-button-border-color": e.color
    }), m = (s) => {
      e.disabled || n("click", s);
    };
    return (s, x) => (p(), d("button", {
      class: y(["j_button", a(i)]),
      style: f(a(_)),
      onClick: m
    }, [
      b(s.$slots, "default")
    ], 6));
  }
});
o.install = (t) => {
  t.component(o.name, o);
};
const S = { class: "j_icon" }, j = {
  name: "JIcon"
}, l = /* @__PURE__ */ u({
  ...j,
  __name: "index",
  props: {
    type: {
      type: String,
      required: !0
    }
  },
  emits: ["click"],
  setup(t, { emit: n }) {
    return (e, i) => (p(), d("i", S, "icon"));
  }
});
l.install = (t) => {
  t.component(l.name, l);
};
const k = {
  JButton: o,
  JIcon: l
}, J = {
  install(t) {
    Object.values(k).forEach((n) => {
      t.use(n);
    });
  }
};
export {
  o as JButton,
  l as JIcon,
  J as default
};
