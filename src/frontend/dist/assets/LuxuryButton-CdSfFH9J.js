import { j as jsxRuntimeExports, L as Link } from "./index-DNA0-xrO.js";
function LuxuryButton({
  variant = "gold",
  children,
  onClick,
  href,
  to,
  className = "",
  "data-ocid": dataOcid
}) {
  const cls = {
    gold: "luxury-button",
    outline: "luxury-button-outline",
    light: "luxury-button-light",
    ghost: "font-body text-sm tracking-widest uppercase transition-smooth underline-offset-4 hover:underline"
  }[variant];
  const allCls = `${cls} ${className}`;
  if (to) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: allCls, "data-ocid": dataOcid, children });
  }
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: allCls, "data-ocid": dataOcid, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      className: allCls,
      "data-ocid": dataOcid,
      children
    }
  );
}
export {
  LuxuryButton as L
};
