import { LuxuryButton } from "@/components/LuxuryButton";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { amenities } from "@/data/hotel";

export function AboutPage() {
  return (
    <div className="bg-background">
      {/* Page Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/about-hotel.dim_900x700.jpg"
          alt="Siam Guest House"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-normal text-hero-shadow">
            About Siam
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <ScrollFadeIn direction="left">
          <SectionHeading
            eyebrow="Since 2009"
            title="A Commitment to Timeless Hospitality"
            subtitle="Founded on the belief that true luxury is the art of making guests feel genuinely cared for, Siam Guest House was born from a passion for Thai culture and a desire to share its grace with the world."
          />
          <p className="font-body font-light text-sm text-muted-foreground leading-relaxed mt-4">
            Nestled on the shores of the Gulf of Thailand, our property has
            welcomed guests from over 80 countries. Each corner of the hotel
            reflects the craftsmanship of local artisans — from hand-carved teak
            furnishings to silk wall panels sourced from Chiang Mai's finest
            weavers.
          </p>
          <div className="mt-8">
            <LuxuryButton
              variant="outline"
              to="/rooms"
              data-ocid="about.explore_rooms_button"
            >
              Explore Rooms
            </LuxuryButton>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn direction="right" delay={150}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "80+", label: "Countries Welcomed" },
              { stat: "15+", label: "Years of Excellence" },
              { stat: "4.9", label: "Average Rating" },
              { stat: "24/7", label: "Butler Service" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl border border-border text-center"
              >
                <p
                  className="font-display text-3xl font-normal"
                  style={{ color: "#D4AF37" }}
                >
                  {item.stat}
                </p>
                <p className="font-body text-xs tracking-wide text-muted-foreground mt-1 uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </section>

      {/* Amenities */}
      <section className="py-24 px-6" style={{ background: "#F5E6D3" }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <ScrollFadeIn>
            <SectionHeading
              eyebrow="Facilities"
              title="All That We Offer"
              center
            />
          </ScrollFadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((a, i) => (
              <ScrollFadeIn key={a.title} delay={i * 70}>
                <div className="bg-background p-6 rounded-xl flex items-start gap-4 shadow-subtle hover:shadow-luxury transition-smooth">
                  <span className="text-2xl">{a.icon}</span>
                  <div>
                    <h3 className="font-display text-lg font-normal mb-1">
                      {a.title}
                    </h3>
                    <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-background">
        <ScrollFadeIn>
          <div className="max-w-xl mx-auto flex flex-col items-center gap-5">
            <h2 className="font-display text-4xl font-normal">
              Ready to Experience Siam?
            </h2>
            <p className="font-body font-light text-muted-foreground">
              Reserve your stay and let us craft an unforgettable escape.
            </p>
            <LuxuryButton
              variant="gold"
              to="/booking"
              data-ocid="about.cta_book_button"
            >
              Book Your Stay
            </LuxuryButton>
          </div>
        </ScrollFadeIn>
      </section>
    </div>
  );
}
