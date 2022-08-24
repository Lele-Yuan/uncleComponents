import { defineComponent as p, computed as r, openBlock as d, createElementBlock as y, normalizeClass as f, unref as a, normalizeStyle as m, renderSlot as b } from "vue";
const _ = ["", "default", "small", "large"], g = ["", "primary", "success", "info", "text", "warning", "danger"], v = ["", "fill", "fill-pill", "fill-unite", "float", "shadow", "Jelly"], n = {
  componentSizes: _,
  types: g,
  hoverTypes: v
};
const B = {
  name: "JButton"
}, o = /* @__PURE__ */ p({
  ...B,
  props: {
    size: {
      type: String,
      value: n.componentSizes
    },
    type: {
      type: String,
      values: n.types,
      default: "default"
    },
    plain: Boolean,
    round: Boolean,
    slant: Boolean,
    circle: Boolean,
    disabled: Boolean,
    color: {
      type: String,
      default: "#ECEFF1"
    },
    hoverType: {
      type: String,
      value: n.hoverTypes,
      default: ""
    }
  },
  emits: ["click"],
  setup(t) {
    const e = t, i = r(() => ({
      [`j_button-${e.type}`]: e.type,
      is_plain: e.plain,
      is_round: e.round,
      is_slant: e.slant,
      is_circle: e.circle,
      is_disabled: e.disabled,
      [`j-button-${e.size}`]: e.size,
      [`j-button-hover-${e.hoverType}`]: e.hoverType
    })), c = r(() => ({
      j_button: {
        "--j-button-bg-color": e.color,
        "--j-button-border-color": e.color
      }
    }));
    return (l, s) => (d(), y("button", {
      class: f(["j_button", a(i)]),
      style: m(a(c)),
      onClick: s[0] || (s[0] = (u) => l.$emit("click", u))
    }, [
      b(l.$slots, "default")
    ], 6));
  }
});
o.install = (t) => {
  t.component(o.name, o);
};
const j = {
  install(t) {
    t.use(o);
  }
};
export {
  o as JButton,
  j as default
};
