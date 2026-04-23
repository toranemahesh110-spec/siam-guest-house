import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link, a as amenities, t as testimonials, b as rooms } from "./index-DNA0-xrO.js";
import { I as ImageCard } from "./ImageCard-5kfw9ro7.js";
import { L as LuxuryButton } from "./LuxuryButton-CdSfFH9J.js";
import { S as ScrollFadeIn } from "./ScrollFadeIn-Dm2n9dmv.js";
import { S as SectionHeading } from "./SectionHeading-BuwlcLEj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function HomePage() {
  const aboutRef = reactExports.useRef(null);
  const [activeTestimonial, setActiveTestimonial] = reactExports.useState(0);
  const [testimonialKey, setTestimonialKey] = reactExports.useState(0);
  const scrollToAbout = () => {
    var _a;
    (_a = aboutRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  const featuredRooms = rooms.slice(0, 3);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => {
        const next = (prev + 1) % testimonials.length;
        setTestimonialKey((k) => k + 1);
        return next;
      });
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
    setTestimonialKey((k) => k + 1);
  };
  const t = testimonials[activeTestimonial];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative h-screen flex items-center justify-center overflow-hidden",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/hero-pattaya.dim_1920x1080.jpg",
                alt: "Siam Guest House Pattaya — luxury resort at golden hour",
                className: "w-full h-full object-cover scale-105",
                style: { animation: "fade-in-slow 1.8s ease-out forwards" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/55" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center text-white px-6 flex flex-col items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-[10px] tracking-[0.32em] uppercase text-white/70",
                style: {
                  opacity: 0,
                  animation: "fade-in 0.9s ease-out 0.4s forwards"
                },
                children: "Welcome to"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-display text-5xl md:text-7xl lg:text-8xl font-normal leading-none text-hero-shadow",
                style: {
                  opacity: 0,
                  animation: "fade-in 0.9s ease-out 0.7s forwards"
                },
                children: "Siam Guest House"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body font-light text-lg md:text-xl tracking-widest uppercase text-white/80",
                style: {
                  opacity: 0,
                  animation: "fade-in 0.9s ease-out 1.0s forwards"
                },
                children: "Luxury Retreat · Pattaya, Thailand"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex gap-4 mt-2",
                style: {
                  opacity: 0,
                  animation: "fade-in 0.9s ease-out 1.3s forwards"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    LuxuryButton,
                    {
                      variant: "gold",
                      to: "/booking",
                      "data-ocid": "home.hero_book_button",
                      children: "Reserve Your Stay"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    LuxuryButton,
                    {
                      variant: "light",
                      to: "/rooms",
                      "data-ocid": "home.hero_explore_button",
                      children: "Explore Rooms"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-smooth flex flex-col items-center gap-2",
              onClick: scrollToAbout,
              "aria-label": "Scroll down",
              "data-ocid": "home.scroll_down_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[9px] tracking-[0.2em] uppercase", children: "Discover" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 animate-[scroll-hint_1.8s_ease-in-out_infinite]" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        ref: aboutRef,
        className: "py-24 md:py-32 px-6 bg-background",
        "data-ocid": "home.about_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-14 lg:gap-20 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { direction: "left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/about-hotel.dim_900x700.jpg",
                alt: "Siam Guest House resort exterior",
                className: "w-full rounded-lg object-cover aspect-[4/3] shadow-luxury"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-5 -right-5 bg-background p-5 shadow-luxury rounded-lg hidden md:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display text-3xl font-normal",
                  style: { color: "#D4AF37" },
                  children: "15+"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-widest uppercase text-muted-foreground mt-1", children: "Years of Excellence" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { direction: "right", delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                eyebrow: "Unwind in Paradise",
                title: "Where Thai Soul Meets Modern Luxury",
                subtitle: "Experience unparalleled hospitality in the heart of Pattaya. Our meticulously designed guest rooms offer comfort and style amidst lush tropical surroundings, steps from the Gulf of Thailand."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LuxuryButton,
              {
                variant: "outline",
                to: "/about",
                "data-ocid": "home.about_explore_button",
                children: "Our Story"
              }
            )
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 md:py-32 px-6",
        style: { background: "#F5E6D3" },
        "data-ocid": "home.rooms_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col gap-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                eyebrow: "Accommodations",
                title: "Curated Retreats",
                subtitle: "Each room is a sanctuary unto itself."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LuxuryButton,
              {
                variant: "outline",
                to: "/rooms",
                className: "shrink-0",
                "data-ocid": "home.rooms_view_all_button",
                children: "View All Rooms"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid md:grid-cols-3 gap-7",
              "data-ocid": "home.rooms_list",
              children: featuredRooms.map((room, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-background rounded-xl overflow-hidden shadow-subtle hover:shadow-luxury transition-smooth group",
                  "data-ocid": `home.rooms_list.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: room.imageUrl,
                        alt: room.name,
                        className: "card-image w-full h-full object-cover"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "font-body text-[9px] tracking-[0.22em] uppercase font-medium",
                            style: { color: "#D4AF37" },
                            children: room.type
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm text-muted-foreground", children: room.size })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-normal", children: room.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-sm text-muted-foreground leading-relaxed line-clamp-2", children: room.shortDesc }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-border", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-normal", children: [
                            "฿",
                            room.price.toLocaleString()
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground ml-1", children: "/ night" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Link,
                          {
                            to: "/rooms",
                            search: { room: room.id },
                            className: "font-body text-[10px] tracking-[0.18em] uppercase transition-smooth hover:text-accent",
                            style: { color: "#D4AF37" },
                            "data-ocid": `home.rooms_list.item.${i + 1}.view_details_link`,
                            children: "View Details →"
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) }, room.id))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 md:py-32 px-6 bg-background",
        "data-ocid": "home.amenities_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col gap-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              eyebrow: "The Experience",
              title: "World-Class Amenities",
              subtitle: "From rejuvenating spa rituals to culinary excellence, every moment at Siam is crafted to elevate.",
              center: true
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8", children: amenities.map((amenity, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-start gap-3 p-7 rounded-xl border border-border hover:border-accent/50 hover:shadow-subtle transition-smooth",
              "data-ocid": `home.amenities_list.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: amenity.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-normal", children: amenity.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-sm text-muted-foreground leading-relaxed", children: amenity.description })
              ]
            }
          ) }, amenity.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 md:py-32 px-6",
        style: { background: "#F5E6D3" },
        "data-ocid": "home.gallery_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Gallery", title: "A Visual Journey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LuxuryButton,
              {
                variant: "outline",
                to: "/gallery",
                "data-ocid": "home.gallery_view_all_button",
                children: "View Gallery"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: [
            {
              src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
              alt: "Infinity pool"
            },
            {
              src: "/assets/generated/room-royal-suite.dim_800x600.jpg",
              alt: "Royal suite"
            },
            {
              src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
              alt: "Spa"
            },
            {
              src: "/assets/generated/room-deluxe-ocean.dim_800x600.jpg",
              alt: "Ocean room"
            },
            {
              src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
              alt: "Sea view"
            },
            {
              src: "/assets/generated/room-garden-terrace.dim_800x600.jpg",
              alt: "Garden villa"
            }
          ].map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ImageCard,
            {
              src: img.src,
              alt: img.alt,
              aspectRatio: i === 0 || i === 5 ? "aspect-[4/5]" : "aspect-square",
              "data-ocid": `home.gallery_list.item.${i + 1}`
            }
          ) }, img.alt)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 md:py-32 px-6 bg-foreground text-white",
        style: { background: "#1A1A1A" },
        "data-ocid": "home.testimonials_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto flex flex-col gap-14 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              eyebrow: "Guest Stories",
              title: "Voices of Our Guests",
              light: true,
              center: true
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center gap-6 text-center",
              style: { animation: "testimonial-fade 0.5s ease-out forwards" },
              "data-ocid": "home.testimonials_list",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 justify-center", children: Array.from({ length: t.rating }, (_, si) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: "w-5 h-5 fill-current",
                    style: { color: "#D4AF37" }
                  },
                  `star-${t.name}-${si}`
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body font-light text-white/80 leading-relaxed italic text-lg md:text-xl max-w-2xl", children: [
                  '"',
                  t.text,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium font-body",
                      style: { background: "#D4AF37", color: "#1A1A1A" },
                      children: t.initials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm font-medium text-white", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-white/40", children: t.country })
                  ] })
                ] })
              ]
            },
            testimonialKey
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-3 items-center",
              "data-ocid": "home.testimonials_dots",
              children: testimonials.map((testimonial, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => goToTestimonial(i),
                  "aria-label": `Go to testimonial ${i + 1}`,
                  className: "rounded-full transition-all duration-300",
                  style: {
                    width: activeTestimonial === i ? 24 : 8,
                    height: 8,
                    background: activeTestimonial === i ? "#D4AF37" : "rgba(255,255,255,0.25)"
                  },
                  "data-ocid": `home.testimonials_dot.${i + 1}`
                },
                `dot-${testimonial.name}`
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-6 bg-background text-center",
        "data-ocid": "home.cta_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto flex flex-col items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "accent-line mx-auto",
              style: { background: "#D4AF37" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-normal", children: "Begin Your Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-muted-foreground text-lg leading-relaxed", children: "Reserve your sanctuary and experience the art of Thai hospitality at its finest." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LuxuryButton,
            {
              variant: "gold",
              to: "/booking",
              "data-ocid": "home.cta_book_button",
              children: "Book Your Stay"
            }
          )
        ] }) })
      }
    )
  ] });
}
export {
  HomePage
};
