import { r as reactExports, b as rooms, j as jsxRuntimeExports, d as ue } from "./index-DNA0-xrO.js";
import { S as ScrollFadeIn } from "./ScrollFadeIn-Dm2n9dmv.js";
import { S as SectionHeading } from "./SectionHeading-BuwlcLEj.js";
function BookingPage() {
  const [form, setForm] = reactExports.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomId: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    requests: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const selectedRoom = rooms.find((r) => r.id === form.roomId);
  const nights = (() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const diff = new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime();
    return Math.max(0, Math.floor(diff / 864e5));
  })();
  const total = selectedRoom ? selectedRoom.price * nights : 0;
  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.roomId) e.roomId = "Please select a room.";
    if (!form.checkIn) e.checkIn = "Check-in date is required.";
    if (!form.checkOut) e.checkOut = "Check-out date is required.";
    if (form.checkIn && form.checkOut && new Date(form.checkOut) <= new Date(form.checkIn))
      e.checkOut = "Check-out must be after check-in.";
    return e;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    ue.success("Booking request received! We'll confirm within 2 hours.", {
      duration: 6e3
    });
  };
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[40vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/hero-pattaya.dim_1920x1080.jpg",
          alt: "Book your stay",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/55" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3", children: "Reserve" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-normal text-hero-shadow", children: "Book Your Stay" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid lg:grid-cols-3 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-16 flex flex-col items-center gap-5",
          "data-ocid": "booking.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-16 rounded-full flex items-center justify-center text-2xl",
                style: { background: "#D4AF37" },
                children: "✓"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-normal", children: "Booking Request Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body font-light text-muted-foreground max-w-md leading-relaxed", children: [
              "Thank you, ",
              form.firstName,
              ". Our reservations team will confirm your booking at ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: form.email }),
              " within 2 hours."
            ] })
          ]
        }
      ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollFadeIn, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            eyebrow: "Reservations",
            title: "Complete Your Booking",
            className: "mb-8"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "flex flex-col gap-6",
            noValidate: true,
            "data-ocid": "booking.form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4", children: "Personal Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  ["firstName", "lastName"].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: field,
                        className: "font-body text-xs text-muted-foreground block mb-1 capitalize",
                        children: field === "firstName" ? "First Name" : "Last Name"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: field,
                        value: form[field],
                        onChange: (e) => setForm({ ...form, [field]: e.target.value }),
                        className: "w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                        "data-ocid": `booking.${field}_input`
                      }
                    ),
                    errors[field] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs mt-1",
                        "data-ocid": `booking.${field}_field_error`,
                        children: errors[field]
                      }
                    )
                  ] }, field)),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "email",
                        className: "font-body text-xs text-muted-foreground block mb-1",
                        children: "Email"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "email",
                        type: "email",
                        value: form.email,
                        onChange: (e) => setForm({ ...form, email: e.target.value }),
                        className: "w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                        "data-ocid": "booking.email_input"
                      }
                    ),
                    errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs mt-1",
                        "data-ocid": "booking.email_field_error",
                        children: errors.email
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "phone",
                        className: "font-body text-xs text-muted-foreground block mb-1",
                        children: "Phone (optional)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "phone",
                        type: "tel",
                        value: form.phone,
                        onChange: (e) => setForm({ ...form, phone: e.target.value }),
                        className: "w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                        "data-ocid": "booking.phone_input"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4", children: "Stay Details" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "roomId",
                        className: "font-body text-xs text-muted-foreground block mb-1",
                        children: "Room"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "roomId",
                        value: form.roomId,
                        onChange: (e) => setForm({ ...form, roomId: e.target.value }),
                        className: "w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                        "data-ocid": "booking.room_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a room…" }),
                          rooms.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: r.id, children: [
                            r.name,
                            " — ฿",
                            r.price.toLocaleString(),
                            "/night"
                          ] }, r.id))
                        ]
                      }
                    ),
                    errors.roomId && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs mt-1",
                        "data-ocid": "booking.room_field_error",
                        children: errors.roomId
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "checkIn",
                        className: "font-body text-xs text-muted-foreground block mb-1",
                        children: "Check-In"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "checkIn",
                        type: "date",
                        min: today,
                        value: form.checkIn,
                        onChange: (e) => setForm({ ...form, checkIn: e.target.value }),
                        className: "w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                        "data-ocid": "booking.checkin_input"
                      }
                    ),
                    errors.checkIn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs mt-1",
                        "data-ocid": "booking.checkin_field_error",
                        children: errors.checkIn
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "checkOut",
                        className: "font-body text-xs text-muted-foreground block mb-1",
                        children: "Check-Out"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "checkOut",
                        type: "date",
                        min: form.checkIn || today,
                        value: form.checkOut,
                        onChange: (e) => setForm({ ...form, checkOut: e.target.value }),
                        className: "w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                        "data-ocid": "booking.checkout_input"
                      }
                    ),
                    errors.checkOut && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs mt-1",
                        "data-ocid": "booking.checkout_field_error",
                        children: errors.checkOut
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "guests",
                        className: "font-body text-xs text-muted-foreground block mb-1",
                        children: "Guests"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        id: "guests",
                        value: form.guests,
                        onChange: (e) => setForm({ ...form, guests: e.target.value }),
                        className: "w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                        "data-ocid": "booking.guests_select",
                        children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: n, children: [
                          n,
                          " ",
                          n === 1 ? "Guest" : "Guests"
                        ] }, n))
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "requests",
                        className: "font-body text-xs text-muted-foreground block mb-1",
                        children: "Special Requests"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        id: "requests",
                        rows: 2,
                        value: form.requests,
                        onChange: (e) => setForm({ ...form, requests: e.target.value }),
                        className: "w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth resize-none",
                        placeholder: "Late check-in, anniversary setup…",
                        "data-ocid": "booking.requests_textarea"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "luxury-button w-fit",
                  "data-ocid": "booking.submit_button",
                  children: "Confirm Reservation"
                }
              )
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { direction: "right", delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "sticky top-28 rounded-xl border border-border p-6 flex flex-col gap-5 shadow-subtle",
          "data-ocid": "booking.summary_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-normal", children: "Booking Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "accent-line", style: { background: "#D4AF37" } }),
            selectedRoom ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: selectedRoom.imageUrl,
                  alt: selectedRoom.name,
                  className: "rounded-lg w-full aspect-video object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-widest uppercase text-muted-foreground", children: selectedRoom.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-normal mt-1", children: selectedRoom.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-xs text-muted-foreground mt-1", children: [
                  selectedRoom.size,
                  " · Up to ",
                  selectedRoom.capacity,
                  " guests"
                ] })
              ] }),
              nights > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 flex flex-col gap-2 text-sm font-body", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    "฿",
                    selectedRoom.price.toLocaleString(),
                    " × ",
                    nights,
                    " ",
                    "nights"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "฿",
                    total.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-medium pt-2 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg", children: [
                    "฿",
                    total.toLocaleString()
                  ] })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-sm text-muted-foreground", children: "Select a room to see details and pricing." })
          ]
        }
      ) })
    ] }) })
  ] });
}
export {
  BookingPage
};
