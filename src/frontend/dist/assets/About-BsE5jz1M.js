import { j as jsxRuntimeExports, a as amenities } from "./index-DNA0-xrO.js";
import { L as LuxuryButton } from "./LuxuryButton-CdSfFH9J.js";
import { S as ScrollFadeIn } from "./ScrollFadeIn-Dm2n9dmv.js";
import { S as SectionHeading } from "./SectionHeading-BuwlcLEj.js";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[55vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/about-hotel.dim_900x700.jpg",
          alt: "Siam Guest House",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/45" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-normal text-hero-shadow", children: "About Siam" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollFadeIn, { direction: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            eyebrow: "Since 2009",
            title: "A Commitment to Timeless Hospitality",
            subtitle: "Founded on the belief that true luxury is the art of making guests feel genuinely cared for, Siam Guest House was born from a passion for Thai culture and a desire to share its grace with the world."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-sm text-muted-foreground leading-relaxed mt-4", children: "Nestled on the shores of the Gulf of Thailand, our property has welcomed guests from over 80 countries. Each corner of the hotel reflects the craftsmanship of local artisans — from hand-carved teak furnishings to silk wall panels sourced from Chiang Mai's finest weavers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          LuxuryButton,
          {
            variant: "outline",
            to: "/rooms",
            "data-ocid": "about.explore_rooms_button",
            children: "Explore Rooms"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { direction: "right", delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
        { stat: "80+", label: "Countries Welcomed" },
        { stat: "15+", label: "Years of Excellence" },
        { stat: "4.9", label: "Average Rating" },
        { stat: "24/7", label: "Butler Service" }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-6 rounded-xl border border-border text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-3xl font-normal",
                style: { color: "#D4AF37" },
                children: item.stat
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-wide text-muted-foreground mt-1 uppercase", children: item.label })
          ]
        },
        item.label
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6", style: { background: "#F5E6D3" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          eyebrow: "Facilities",
          title: "All That We Offer",
          center: true
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: amenities.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { delay: i * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6 rounded-xl flex items-start gap-4 shadow-subtle hover:shadow-luxury transition-smooth", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: a.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-normal mb-1", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-sm text-muted-foreground leading-relaxed", children: a.description })
        ] })
      ] }) }, a.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 text-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-normal", children: "Ready to Experience Siam?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-muted-foreground", children: "Reserve your stay and let us craft an unforgettable escape." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LuxuryButton,
        {
          variant: "gold",
          to: "/booking",
          "data-ocid": "about.cta_book_button",
          children: "Book Your Stay"
        }
      )
    ] }) }) })
  ] });
}
export {
  AboutPage
};
