import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { rooms } from "@/data/hotel";
import { useState } from "react";
import { toast } from "sonner";

export function BookingPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomId: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    requests: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedRoom = rooms.find((r) => r.id === form.roomId);

  const nights = (() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const diff =
      new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime();
    return Math.max(0, Math.floor(diff / 86400000));
  })();
  const total = selectedRoom ? selectedRoom.price * nights : 0;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.roomId) e.roomId = "Please select a room.";
    if (!form.checkIn) e.checkIn = "Check-in date is required.";
    if (!form.checkOut) e.checkOut = "Check-out date is required.";
    if (
      form.checkIn &&
      form.checkOut &&
      new Date(form.checkOut) <= new Date(form.checkIn)
    )
      e.checkOut = "Check-out must be after check-in.";
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
    setSubmitted(true);
    toast.success("Booking request received! We'll confirm within 2 hours.", {
      duration: 6000,
    });
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/hero-pattaya.dim_1920x1080.jpg"
          alt="Book your stay"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3">
            Reserve
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-normal text-hero-shadow">
            Book Your Stay
          </h1>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <ScrollFadeIn>
                <div
                  className="text-center py-16 flex flex-col items-center gap-5"
                  data-ocid="booking.success_state"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: "#D4AF37" }}
                  >
                    ✓
                  </div>
                  <h2 className="font-display text-3xl font-normal">
                    Booking Request Sent!
                  </h2>
                  <p className="font-body font-light text-muted-foreground max-w-md leading-relaxed">
                    Thank you, {form.firstName}. Our reservations team will
                    confirm your booking at <strong>{form.email}</strong> within
                    2 hours.
                  </p>
                </div>
              </ScrollFadeIn>
            ) : (
              <ScrollFadeIn>
                <SectionHeading
                  eyebrow="Reservations"
                  title="Complete Your Booking"
                  className="mb-8"
                />
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  noValidate
                  data-ocid="booking.form"
                >
                  {/* Personal */}
                  <div>
                    <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                      Personal Details
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {(["firstName", "lastName"] as const).map((field) => (
                        <div key={field}>
                          <label
                            htmlFor={field}
                            className="font-body text-xs text-muted-foreground block mb-1 capitalize"
                          >
                            {field === "firstName" ? "First Name" : "Last Name"}
                          </label>
                          <input
                            id={field}
                            value={form[field]}
                            onChange={(e) =>
                              setForm({ ...form, [field]: e.target.value })
                            }
                            className="w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                            data-ocid={`booking.${field}_input`}
                          />
                          {errors[field] && (
                            <p
                              className="text-destructive text-xs mt-1"
                              data-ocid={`booking.${field}_field_error`}
                            >
                              {errors[field]}
                            </p>
                          )}
                        </div>
                      ))}
                      <div>
                        <label
                          htmlFor="email"
                          className="font-body text-xs text-muted-foreground block mb-1"
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
                          className="w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                          data-ocid="booking.email_input"
                        />
                        {errors.email && (
                          <p
                            className="text-destructive text-xs mt-1"
                            data-ocid="booking.email_field_error"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="font-body text-xs text-muted-foreground block mb-1"
                        >
                          Phone (optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className="w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                          data-ocid="booking.phone_input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stay Details */}
                  <div>
                    <h3 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                      Stay Details
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="roomId"
                          className="font-body text-xs text-muted-foreground block mb-1"
                        >
                          Room
                        </label>
                        <select
                          id="roomId"
                          value={form.roomId}
                          onChange={(e) =>
                            setForm({ ...form, roomId: e.target.value })
                          }
                          className="w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                          data-ocid="booking.room_select"
                        >
                          <option value="">Select a room…</option>
                          {rooms.map((r) => (
                            <option key={r.id} value={r.id}>
                              {r.name} — ฿{r.price.toLocaleString()}/night
                            </option>
                          ))}
                        </select>
                        {errors.roomId && (
                          <p
                            className="text-destructive text-xs mt-1"
                            data-ocid="booking.room_field_error"
                          >
                            {errors.roomId}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="checkIn"
                          className="font-body text-xs text-muted-foreground block mb-1"
                        >
                          Check-In
                        </label>
                        <input
                          id="checkIn"
                          type="date"
                          min={today}
                          value={form.checkIn}
                          onChange={(e) =>
                            setForm({ ...form, checkIn: e.target.value })
                          }
                          className="w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                          data-ocid="booking.checkin_input"
                        />
                        {errors.checkIn && (
                          <p
                            className="text-destructive text-xs mt-1"
                            data-ocid="booking.checkin_field_error"
                          >
                            {errors.checkIn}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="checkOut"
                          className="font-body text-xs text-muted-foreground block mb-1"
                        >
                          Check-Out
                        </label>
                        <input
                          id="checkOut"
                          type="date"
                          min={form.checkIn || today}
                          value={form.checkOut}
                          onChange={(e) =>
                            setForm({ ...form, checkOut: e.target.value })
                          }
                          className="w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                          data-ocid="booking.checkout_input"
                        />
                        {errors.checkOut && (
                          <p
                            className="text-destructive text-xs mt-1"
                            data-ocid="booking.checkout_field_error"
                          >
                            {errors.checkOut}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="guests"
                          className="font-body text-xs text-muted-foreground block mb-1"
                        >
                          Guests
                        </label>
                        <select
                          id="guests"
                          value={form.guests}
                          onChange={(e) =>
                            setForm({ ...form, guests: e.target.value })
                          }
                          className="w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                          data-ocid="booking.guests_select"
                        >
                          {[1, 2, 3].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "Guest" : "Guests"}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="requests"
                          className="font-body text-xs text-muted-foreground block mb-1"
                        >
                          Special Requests
                        </label>
                        <textarea
                          id="requests"
                          rows={2}
                          value={form.requests}
                          onChange={(e) =>
                            setForm({ ...form, requests: e.target.value })
                          }
                          className="w-full border border-input rounded-lg px-4 py-3 text-sm font-body bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth resize-none"
                          placeholder="Late check-in, anniversary setup…"
                          data-ocid="booking.requests_textarea"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="luxury-button w-fit"
                    data-ocid="booking.submit_button"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </ScrollFadeIn>
            )}
          </div>

          {/* Summary */}
          <ScrollFadeIn direction="right" delay={200}>
            <div
              className="sticky top-28 rounded-xl border border-border p-6 flex flex-col gap-5 shadow-subtle"
              data-ocid="booking.summary_panel"
            >
              <h3 className="font-display text-xl font-normal">
                Booking Summary
              </h3>
              <div className="accent-line" style={{ background: "#D4AF37" }} />
              {selectedRoom ? (
                <>
                  <img
                    src={selectedRoom.imageUrl}
                    alt={selectedRoom.name}
                    className="rounded-lg w-full aspect-video object-cover"
                  />
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                      {selectedRoom.type}
                    </p>
                    <p className="font-display text-lg font-normal mt-1">
                      {selectedRoom.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      {selectedRoom.size} · Up to {selectedRoom.capacity} guests
                    </p>
                  </div>
                  {nights > 0 && (
                    <div className="border-t border-border pt-4 flex flex-col gap-2 text-sm font-body">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          ฿{selectedRoom.price.toLocaleString()} × {nights}{" "}
                          nights
                        </span>
                        <span>฿{total.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-2 border-t border-border">
                        <span>Total</span>
                        <span className="font-display text-lg">
                          ฿{total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="font-body font-light text-sm text-muted-foreground">
                  Select a room to see details and pricing.
                </p>
              )}
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </div>
  );
}
