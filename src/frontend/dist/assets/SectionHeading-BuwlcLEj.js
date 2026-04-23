import { j as jsxRuntimeExports } from "./index-DNA0-xrO.js";
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `${center ? "text-center items-center" : ""} flex flex-col gap-3 ${className}`,
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `font-body text-xs tracking-[0.22em] uppercase font-medium ${light ? "text-gold-light" : "text-gold"}`,
            style: { color: light ? "#E5C96A" : "#D4AF37" },
            children: eyebrow
          }
        ),
        center && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "accent-line mx-auto" }),
        !center && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "accent-line" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: `font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-tight ${light ? "text-white" : "text-foreground"}`,
            children: title
          }
        ),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: `font-body font-light text-base md:text-lg leading-relaxed max-w-xl ${light ? "text-white/70" : "text-muted-foreground"} ${center ? "mx-auto" : ""}`,
            children: subtitle
          }
        )
      ]
    }
  );
}
export {
  SectionHeading as S
};
