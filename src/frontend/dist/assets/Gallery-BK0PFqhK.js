import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, X, g as galleryImages } from "./index-DNA0-xrO.js";
import { I as ImageCard } from "./ImageCard-5kfw9ro7.js";
import { S as ScrollFadeIn } from "./ScrollFadeIn-Dm2n9dmv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) {
  const current = images[currentIndex];
  const handleKeyDown = reactExports.useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );
  reactExports.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);
  if (!current) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "dialog",
    {
      open: true,
      className: "fixed inset-0 z-50 lightbox-overlay flex items-center justify-center w-full h-full max-w-full max-h-full p-0 border-0 bg-transparent",
      "data-ocid": "gallery.lightbox",
      "aria-modal": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            onClick: onClose,
            onKeyDown: (e) => e.key === "Escape" && onClose(),
            "aria-label": "Close lightbox backdrop",
            role: "button",
            tabIndex: -1
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute top-5 right-5 text-white/80 hover:text-white transition-smooth z-10 p-2",
            onClick: onClose,
            "aria-label": "Close lightbox",
            "data-ocid": "gallery.lightbox.close_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-7 h-7" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute left-4 text-white/80 hover:text-white transition-smooth z-10 p-2",
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            "aria-label": "Previous image",
            "data-ocid": "gallery.lightbox.prev_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-9 h-9" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl max-h-[85vh] mx-16 animate-zoom-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: current.src,
              alt: current.alt,
              className: "max-w-full max-h-[80vh] object-contain rounded-md shadow-luxury"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-white/60 font-body text-sm mt-3 tracking-wide", children: current.alt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-white/30 font-body text-xs mt-1", children: [
            currentIndex + 1,
            " / ",
            images.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-4 text-white/80 hover:text-white transition-smooth z-10 p-2",
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            "aria-label": "Next image",
            "data-ocid": "gallery.lightbox.next_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-9 h-9" })
          }
        )
      ]
    }
  );
}
const CATEGORIES = [
  "All",
  "Pool",
  "Rooms",
  "Spa",
  "Dining",
  "Villa",
  "Views"
];
function GalleryPage() {
  const [category, setCategory] = reactExports.useState("All");
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const filtered = category === "All" ? galleryImages : galleryImages.filter((img) => img.category === category);
  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(
    (prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
  );
  const nextImage = () => setLightboxIndex(
    (prev) => prev !== null ? (prev + 1) % filtered.length : null
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[45vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80",
          alt: "Siam Guest House gallery",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/45" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3", children: "Visual Stories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-normal text-hero-shadow", children: "Gallery" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 px-6 border-b border-border",
        "data-ocid": "gallery.filter_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto flex flex-wrap gap-3 justify-center", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setCategory(cat),
            className: `font-body text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-smooth ${category === cat ? "border-transparent" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`,
            style: category === cat ? { background: "#D4AF37", color: "#1A1A1A" } : void 0,
            "data-ocid": `gallery.filter.${cat.toLowerCase()}_tab`,
            children: cat
          },
          cat
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-6", "data-ocid": "gallery.grid_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-2 md:columns-3 gap-4 space-y-4", children: filtered.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollFadeIn,
      {
        delay: i * 50,
        className: "break-inside-avoid mb-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImageCard,
          {
            src: img.src,
            alt: img.alt,
            aspectRatio: "",
            overlay: true,
            overlayContent: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs tracking-widest uppercase text-white/80", children: img.category }),
            onClick: () => openLightbox(i),
            "data-ocid": `gallery.grid.item.${i + 1}`
          }
        )
      },
      img.id
    )) }) }) }),
    lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        images: filtered,
        currentIndex: lightboxIndex,
        onClose: closeLightbox,
        onPrev: prevImage,
        onNext: nextImage
      }
    )
  ] });
}
export {
  GalleryPage
};
