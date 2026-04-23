import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please write a message.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success("Message sent! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1400&q=80"
          alt="Siam Guest House contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-normal text-hero-shadow">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <ScrollFadeIn direction="left">
            <SectionHeading
              eyebrow="We're Here"
              title="Let Us Help You"
              subtitle="Whether you have a question about your stay, a special request, or need assistance with a booking — our team is ready to assist you."
            />
            <div className="mt-8 flex flex-col gap-6">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value: "178 Beach Road, Pattaya City, Chonburi 20150",
                },
                { icon: "📞", label: "Telephone", value: "+66 38 412 000" },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "reservations@siamguesthouse.com",
                },
                {
                  icon: "🕐",
                  label: "Reception",
                  value: "Open 24 hours, 7 days a week",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body font-light text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

          {/* Form */}
          <ScrollFadeIn direction="right" delay={150}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
              data-ocid="contact.form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onBlur={() =>
                      form.name ||
                      setErrors((p) => ({
                        ...p,
                        name: "Your name is required.",
                      }))
                    }
                    className="w-full border border-input rounded-lg px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                    placeholder="Your name"
                    data-ocid="contact.name_input"
                  />
                  {errors.name && (
                    <p
                      className="text-destructive text-xs mt-1"
                      data-ocid="contact.name_field_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border border-input rounded-lg px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                    placeholder="your@email.com"
                    data-ocid="contact.email_input"
                  />
                  {errors.email && (
                    <p
                      className="text-destructive text-xs mt-1"
                      data-ocid="contact.email_field_error"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className="w-full border border-input rounded-lg px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                  placeholder="How can we help?"
                  data-ocid="contact.subject_input"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full border border-input rounded-lg px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth resize-none"
                  placeholder="Tell us about your stay preferences..."
                  data-ocid="contact.message_textarea"
                />
                {errors.message && (
                  <p
                    className="text-destructive text-xs mt-1"
                    data-ocid="contact.message_field_error"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="luxury-button w-fit"
                data-ocid="contact.submit_button"
              >
                Send Message
              </button>
            </form>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
