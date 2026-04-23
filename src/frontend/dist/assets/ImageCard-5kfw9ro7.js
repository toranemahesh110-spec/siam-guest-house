import { j as jsxRuntimeExports } from "./index-DNA0-xrO.js";
function ImageCard({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  overlay = false,
  overlayContent,
  onClick,
  "data-ocid": dataOcid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `card-hover group relative rounded-lg overflow-hidden ${aspectRatio} ${className} ${onClick ? "cursor-pointer" : ""}`,
      onClick,
      onKeyDown: onClick ? (e) => e.key === "Enter" && onClick() : void 0,
      role: onClick ? "button" : void 0,
      tabIndex: onClick ? 0 : void 0,
      "data-ocid": dataOcid,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src,
            alt,
            className: "card-image w-full h-full object-cover",
            loading: "lazy"
          }
        ),
        overlay && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5", children: overlayContent })
      ]
    }
  );
}
export {
  ImageCard as I
};
