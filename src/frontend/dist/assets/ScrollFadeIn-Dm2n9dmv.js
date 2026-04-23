import { r as reactExports, j as jsxRuntimeExports } from "./index-DNA0-xrO.js";
function ScrollFadeIn({
  children,
  direction = "up",
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("visible");
            }, delay);
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  const cls = direction === "left" ? "scroll-fade-left" : direction === "right" ? "scroll-fade-right" : "scroll-fade";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `${cls} ${className}`, children });
}
export {
  ScrollFadeIn as S
};
