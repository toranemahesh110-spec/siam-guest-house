import { r as reactExports, j as jsxRuntimeExports, d as ue } from "./index-DNA0-xrO.js";
import { S as ScrollFadeIn } from "./ScrollFadeIn-Dm2n9dmv.js";
import { S as SectionHeading } from "./SectionHeading-BuwlcLEj.js";
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please write a message.";
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
    ue.success("Message sent! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[40vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1400&q=80",
          alt: "Siam Guest House contact",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3", children: "Get in Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl font-normal text-hero-shadow", children: "Contact Us" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollFadeIn, { direction: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            eyebrow: "We're Here",
            title: "Let Us Help You",
            subtitle: "Whether you have a question about your stay, a special request, or need assistance with a booking — our team is ready to assist you."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-col gap-6", children: [
          {
            icon: "📍",
            label: "Address",
            value: "178 Beach Road, Pattaya City, Chonburi 20150"
          },
          { icon: "📞", label: "Telephone", value: "+66 38 412 000" },
          {
            icon: "✉️",
            label: "Email",
            value: "reservations@siamguesthouse.com"
          },
          {
            icon: "🕐",
            label: "Reception",
            value: "Open 24 hours, 7 days a week"
          }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mt-0.5", children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs tracking-widest uppercase text-muted-foreground mb-1", children: item.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-light text-sm", children: item.value })
          ] })
        ] }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollFadeIn, { direction: "right", delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "flex flex-col gap-5",
          noValidate: true,
          "data-ocid": "contact.form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "name",
                    className: "font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2",
                    children: "Full Name"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "name",
                    value: form.name,
                    onChange: (e) => setForm({ ...form, name: e.target.value }),
                    onBlur: () => form.name || setErrors((p) => ({
                      ...p,
                      name: "Your name is required."
                    })),
                    className: "w-full border border-input rounded-lg px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                    placeholder: "Your name",
                    "data-ocid": "contact.name_input"
                  }
                ),
                errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-destructive text-xs mt-1",
                    "data-ocid": "contact.name_field_error",
                    children: errors.name
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "email",
                    className: "font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2",
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
                    className: "w-full border border-input rounded-lg px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                    placeholder: "your@email.com",
                    "data-ocid": "contact.email_input"
                  }
                ),
                errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-destructive text-xs mt-1",
                    "data-ocid": "contact.email_field_error",
                    children: errors.email
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "subject",
                  className: "font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2",
                  children: "Subject"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "subject",
                  value: form.subject,
                  onChange: (e) => setForm({ ...form, subject: e.target.value }),
                  className: "w-full border border-input rounded-lg px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth",
                  placeholder: "How can we help?",
                  "data-ocid": "contact.subject_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "message",
                  className: "font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2",
                  children: "Message"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  rows: 5,
                  value: form.message,
                  onChange: (e) => setForm({ ...form, message: e.target.value }),
                  className: "w-full border border-input rounded-lg px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth resize-none",
                  placeholder: "Tell us about your stay preferences...",
                  "data-ocid": "contact.message_textarea"
                }
              ),
              errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-destructive text-xs mt-1",
                  "data-ocid": "contact.message_field_error",
                  children: errors.message
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "luxury-button w-fit",
                "data-ocid": "contact.submit_button",
                children: "Send Message"
              }
            )
          ]
        }
      ) })
    ] }) })
  ] });
}
export {
  ContactPage
};
