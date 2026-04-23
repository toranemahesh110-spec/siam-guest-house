import { ImageCard } from "@/components/ImageCard";
import { LuxuryButton } from "@/components/LuxuryButton";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { amenities, rooms, testimonials } from "@/data/hotel";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function HomePage() {
  const aboutRef = useRef<HTMLElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialKey, setTestimonialKey] = useState(0);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredRooms = rooms.slice(0, 3);

  // Auto-advance testimonials every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => {
        const next = (prev + 1) % testimonials.length;
        setTestimonialKey((k) => k + 1);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToTestimonial = (index: number) => {
    setActiveTestimonial(index);
    setTestimonialKey((k) => k + 1);
  };

  const t = testimonials[activeTestimonial];

  return (
    <div className="bg-background">
      {/* ─── Hero ─── */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        data-ocid="home.hero_section"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-pattaya.dim_1920x1080.jpg"
            alt="Siam Guest House Pattaya — luxury resort at golden hour"
            className="w-full h-full object-cover scale-105"
            style={{ animation: "fade-in-slow 1.8s ease-out forwards" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/55" />
        </div>

        <div className="relative z-10 text-center text-white px-6 flex flex-col items-center gap-6">
          <p
            className="font-body text-[10px] tracking-[0.32em] uppercase text-white/70"
            style={{
              opacity: 0,
              animation: "fade-in 0.9s ease-out 0.4s forwards",
            }}
          >
            Welcome to
          </p>
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-normal leading-none text-hero-shadow"
            style={{
              opacity: 0,
              animation: "fade-in 0.9s ease-out 0.7s forwards",
            }}
          >
            Siam Guest House
          </h1>
          <p
            className="font-body font-light text-lg md:text-xl tracking-widest uppercase text-white/80"
            style={{
              opacity: 0,
              animation: "fade-in 0.9s ease-out 1.0s forwards",
            }}
          >
            Luxury Retreat · Pattaya, Thailand
          </p>
          <div
            className="flex gap-4 mt-2"
            style={{
              opacity: 0,
              animation: "fade-in 0.9s ease-out 1.3s forwards",
            }}
          >
            <LuxuryButton
              variant="gold"
              to="/booking"
              data-ocid="home.hero_book_button"
            >
              Reserve Your Stay
            </LuxuryButton>
            <LuxuryButton
              variant="light"
              to="/rooms"
              data-ocid="home.hero_explore_button"
            >
              Explore Rooms
            </LuxuryButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-smooth flex flex-col items-center gap-2"
          onClick={scrollToAbout}
          aria-label="Scroll down"
          data-ocid="home.scroll_down_button"
        >
          <span className="font-body text-[9px] tracking-[0.2em] uppercase">
            Discover
          </span>
          <ChevronDown className="w-5 h-5 animate-[scroll-hint_1.8s_ease-in-out_infinite]" />
        </button>
      </section>

      {/* ─── About Preview ─── */}
      <section
        ref={aboutRef}
        className="py-24 md:py-32 px-6 bg-background"
        data-ocid="home.about_section"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
          <ScrollFadeIn direction="left">
            <div className="relative">
              <img
                src="/assets/generated/about-hotel.dim_900x700.jpg"
                alt="Siam Guest House resort exterior"
                className="w-full rounded-lg object-cover aspect-[4/3] shadow-luxury"
              />
              <div className="absolute -bottom-5 -right-5 bg-background p-5 shadow-luxury rounded-lg hidden md:block">
                <p
                  className="font-display text-3xl font-normal"
                  style={{ color: "#D4AF37" }}
                >
                  15+
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  Years of Excellence
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn direction="right" delay={150}>
            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Unwind in Paradise"
                title="Where Thai Soul Meets Modern Luxury"
                subtitle="Experience unparalleled hospitality in the heart of Pattaya. Our meticulously designed guest rooms offer comfort and style amidst lush tropical surroundings, steps from the Gulf of Thailand."
              />
              <LuxuryButton
                variant="outline"
                to="/about"
                data-ocid="home.about_explore_button"
              >
                Our Story
              </LuxuryButton>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ─── Featured Rooms ─── */}
      <section
        className="py-24 md:py-32 px-6"
        style={{ background: "#F5E6D3" }}
        data-ocid="home.rooms_section"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Accommodations"
                title="Curated Retreats"
                subtitle="Each room is a sanctuary unto itself."
              />
              <LuxuryButton
                variant="outline"
                to="/rooms"
                className="shrink-0"
                data-ocid="home.rooms_view_all_button"
              >
                View All Rooms
              </LuxuryButton>
            </div>
          </ScrollFadeIn>

          <div
            className="grid md:grid-cols-3 gap-7"
            data-ocid="home.rooms_list"
          >
            {featuredRooms.map((room, i) => (
              <ScrollFadeIn key={room.id} delay={i * 120}>
                <div
                  className="bg-background rounded-xl overflow-hidden shadow-subtle hover:shadow-luxury transition-smooth group"
                  data-ocid={`home.rooms_list.item.${i + 1}`}
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={room.imageUrl}
                      alt={room.name}
                      className="card-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-body text-[9px] tracking-[0.22em] uppercase font-medium"
                        style={{ color: "#D4AF37" }}
                      >
                        {room.type}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {room.size}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-normal">
                      {room.name}
                    </h3>
                    <p className="font-body font-light text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {room.shortDesc}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div>
                        <span className="font-display text-lg font-normal">
                          ฿{room.price.toLocaleString()}
                        </span>
                        <span className="font-body text-xs text-muted-foreground ml-1">
                          / night
                        </span>
                      </div>
                      <Link
                        to="/rooms"
                        search={{ room: room.id }}
                        className="font-body text-[10px] tracking-[0.18em] uppercase transition-smooth hover:text-accent"
                        style={{ color: "#D4AF37" }}
                        data-ocid={`home.rooms_list.item.${i + 1}.view_details_link`}
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Amenities ─── */}
      <section
        className="py-24 md:py-32 px-6 bg-background"
        data-ocid="home.amenities_section"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          <ScrollFadeIn>
            <SectionHeading
              eyebrow="The Experience"
              title="World-Class Amenities"
              subtitle="From rejuvenating spa rituals to culinary excellence, every moment at Siam is crafted to elevate."
              center
            />
          </ScrollFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, i) => (
              <ScrollFadeIn key={amenity.title} delay={i * 80}>
                <div
                  className="flex flex-col items-start gap-3 p-7 rounded-xl border border-border hover:border-accent/50 hover:shadow-subtle transition-smooth"
                  data-ocid={`home.amenities_list.item.${i + 1}`}
                >
                  <span className="text-3xl">{amenity.icon}</span>
                  <h3 className="font-display text-lg font-normal">
                    {amenity.title}
                  </h3>
                  <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Preview ─── */}
      <section
        className="py-24 md:py-32 px-6"
        style={{ background: "#F5E6D3" }}
        data-ocid="home.gallery_section"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <ScrollFadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <SectionHeading eyebrow="Gallery" title="A Visual Journey" />
              <LuxuryButton
                variant="outline"
                to="/gallery"
                data-ocid="home.gallery_view_all_button"
              >
                View Gallery
              </LuxuryButton>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
                alt: "Infinity pool",
              },
              {
                src: "/assets/generated/room-royal-suite.dim_800x600.jpg",
                alt: "Royal suite",
              },
              {
                src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
                alt: "Spa",
              },
              {
                src: "/assets/generated/room-deluxe-ocean.dim_800x600.jpg",
                alt: "Ocean room",
              },
              {
                src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
                alt: "Sea view",
              },
              {
                src: "/assets/generated/room-garden-terrace.dim_800x600.jpg",
                alt: "Garden villa",
              },
            ].map((img, i) => (
              <ScrollFadeIn key={img.alt} delay={i * 60}>
                <ImageCard
                  src={img.src}
                  alt={img.alt}
                  aspectRatio={
                    i === 0 || i === 5 ? "aspect-[4/5]" : "aspect-square"
                  }
                  data-ocid={`home.gallery_list.item.${i + 1}`}
                />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section
        className="py-24 md:py-32 px-6 bg-foreground text-white"
        style={{ background: "#1A1A1A" }}
        data-ocid="home.testimonials_section"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-14 items-center">
          <ScrollFadeIn>
            <SectionHeading
              eyebrow="Guest Stories"
              title="Voices of Our Guests"
              light
              center
            />
          </ScrollFadeIn>

          {/* Single testimonial with fade animation */}
          <div
            key={testimonialKey}
            className="flex flex-col items-center gap-6 text-center"
            style={{ animation: "testimonial-fade 0.5s ease-out forwards" }}
            data-ocid="home.testimonials_list"
          >
            <div className="flex gap-1 justify-center">
              {Array.from({ length: t.rating }, (_, si) => (
                <Star
                  key={`star-${t.name}-${si}`}
                  className="w-5 h-5 fill-current"
                  style={{ color: "#D4AF37" }}
                />
              ))}
            </div>
            <p className="font-body font-light text-white/80 leading-relaxed italic text-lg md:text-xl max-w-2xl">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium font-body"
                style={{ background: "#D4AF37", color: "#1A1A1A" }}
              >
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-body text-sm font-medium text-white">
                  {t.name}
                </p>
                <p className="font-body text-xs text-white/40">{t.country}</p>
              </div>
            </div>
          </div>

          {/* Dot navigation */}
          <div
            className="flex gap-3 items-center"
            data-ocid="home.testimonials_dots"
          >
            {testimonials.map((testimonial, i) => (
              <button
                key={`dot-${testimonial.name}`}
                type="button"
                onClick={() => goToTestimonial(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeTestimonial === i ? 24 : 8,
                  height: 8,
                  background:
                    activeTestimonial === i
                      ? "#D4AF37"
                      : "rgba(255,255,255,0.25)",
                }}
                data-ocid={`home.testimonials_dot.${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section
        className="py-20 px-6 bg-background text-center"
        data-ocid="home.cta_section"
      >
        <ScrollFadeIn>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <div
              className="accent-line mx-auto"
              style={{ background: "#D4AF37" }}
            />
            <h2 className="font-display text-4xl md:text-5xl font-normal">
              Begin Your Journey
            </h2>
            <p className="font-body font-light text-muted-foreground text-lg leading-relaxed">
              Reserve your sanctuary and experience the art of Thai hospitality
              at its finest.
            </p>
            <LuxuryButton
              variant="gold"
              to="/booking"
              data-ocid="home.cta_book_button"
            >
              Book Your Stay
            </LuxuryButton>
          </div>
        </ScrollFadeIn>
      </section>
    </div>
  );
}
