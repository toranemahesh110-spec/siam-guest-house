import { r as reactExports, u as useSearch, b as rooms, j as jsxRuntimeExports } from "./index-DNA0-xrO.js";
import { L as LuxuryButton } from "./LuxuryButton-CdSfFH9J.js";
import { S as ScrollFadeIn } from "./ScrollFadeIn-Dm2n9dmv.js";
const FILTERS = ["All", "Deluxe", "Suite", "Villa", "Classic"];
function RoomsPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const { room: highlightRoomId } = useSearch({ from: "/rooms" });
  const roomRefs = reactExports.useRef({});
  const filtered = filter === "All" ? rooms : rooms.filter((r) => r.type === filter);
  reactExports.useEffect(() => {
    if (!highlightRoomId) return;
    const el = roomRefs.current[highlightRoomId];
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  }, [highlightRoomId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[45vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/room-royal-suite.dim_800x600.jpg",
          alt: "Siam Guest House rooms",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3", children: "Accommodations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-normal text-hero-shadow", children: "Our Rooms" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 px-6 border-b border-border",
        "data-ocid": "rooms.filter_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto flex flex-wrap gap-3 justify-center", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setFilter(f),
            className: `font-body text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-smooth ${filter === f ? "border-transparent" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`,
            style: filter === f ? { background: "#D4AF37", color: "#1A1A1A" } : void 0,
            "data-ocid": `rooms.filter.${f.toLowerCase()}_tab`,
            children: f
          },
          f
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", "data-ocid": "rooms.list_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-10", children: filtered.map((room, i) => {
      const isHighlighted = room.id === highlightRoomId;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          ref: (el) => {
            roomRefs.current[room.id] = el;
          },
          className: `bg-background rounded-xl overflow-hidden shadow-subtle hover:shadow-luxury transition-smooth border ${isHighlighted ? "border-amber-400" : "border-border"}`,
          style: isHighlighted ? {
            borderColor: "#D4AF37",
            boxShadow: "0 0 0 2px #D4AF3740"
          } : void 0,
          "data-ocid": `rooms.list.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden aspect-[16/9]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: room.imageUrl,
                alt: room.name,
                className: "card-image w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "font-body text-[9px] tracking-[0.2em] uppercase font-medium",
                      style: { color: "#D4AF37" },
                      children: [
                        room.type,
                        " · ",
                        room.size
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-normal mt-1", children: room.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl font-normal", children: [
                    "฿",
                    room.price.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground", children: "per night" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-sm text-muted-foreground leading-relaxed", children: room.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: room.amenities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body text-[10px] tracking-wide px-3 py-1 rounded-full border border-border text-muted-foreground",
                  children: a
                },
                a
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                LuxuryButton,
                {
                  variant: "gold",
                  to: "/booking",
                  "data-ocid": `rooms.list.item.${i + 1}.book_button`,
                  children: "Book This Room"
                }
              ) })
            ] })
          ]
        }
      ) }, room.id);
    }) }) })
  ] });
}
export {
  RoomsPage
};
