import { LuxuryButton } from "@/components/LuxuryButton";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { rooms } from "@/data/hotel";
import { useSearch } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const FILTERS = ["All", "Deluxe", "Suite", "Villa", "Classic"] as const;
type Filter = (typeof FILTERS)[number];

export function RoomsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const { room: highlightRoomId } = useSearch({ from: "/rooms" });
  const roomRefs = useRef<Record<string, HTMLElement | null>>({});

  const filtered =
    filter === "All" ? rooms : rooms.filter((r) => r.type === filter);

  // Scroll to highlighted room when arriving with ?room=id
  useEffect(() => {
    if (!highlightRoomId) return;
    const el = roomRefs.current[highlightRoomId];
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  }, [highlightRoomId]);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/generated/room-royal-suite.dim_800x600.jpg"
          alt="Siam Guest House rooms"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3">
            Accommodations
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-normal text-hero-shadow">
            Our Rooms
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section
        className="py-10 px-6 border-b border-border"
        data-ocid="rooms.filter_section"
      >
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`font-body text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-smooth ${
                filter === f
                  ? "border-transparent"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
              style={
                filter === f
                  ? { background: "#D4AF37", color: "#1A1A1A" }
                  : undefined
              }
              data-ocid={`rooms.filter.${f.toLowerCase()}_tab`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-6" data-ocid="rooms.list_section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {filtered.map((room, i) => {
            const isHighlighted = room.id === highlightRoomId;
            return (
              <ScrollFadeIn key={room.id} delay={i * 100}>
                <article
                  ref={(el) => {
                    roomRefs.current[room.id] = el;
                  }}
                  className={`bg-background rounded-xl overflow-hidden shadow-subtle hover:shadow-luxury transition-smooth border ${
                    isHighlighted ? "border-amber-400" : "border-border"
                  }`}
                  style={
                    isHighlighted
                      ? {
                          borderColor: "#D4AF37",
                          boxShadow: "0 0 0 2px #D4AF3740",
                        }
                      : undefined
                  }
                  data-ocid={`rooms.list.item.${i + 1}`}
                >
                  <div className="overflow-hidden aspect-[16/9]">
                    <img
                      src={room.imageUrl}
                      alt={room.name}
                      className="card-image w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span
                          className="font-body text-[9px] tracking-[0.2em] uppercase font-medium"
                          style={{ color: "#D4AF37" }}
                        >
                          {room.type} · {room.size}
                        </span>
                        <h2 className="font-display text-2xl font-normal mt-1">
                          {room.name}
                        </h2>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-display text-xl font-normal">
                          ฿{room.price.toLocaleString()}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          per night
                        </p>
                      </div>
                    </div>
                    <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">
                      {room.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((a) => (
                        <span
                          key={a}
                          className="font-body text-[10px] tracking-wide px-3 py-1 rounded-full border border-border text-muted-foreground"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <LuxuryButton
                        variant="gold"
                        to="/booking"
                        data-ocid={`rooms.list.item.${i + 1}.book_button`}
                      >
                        Book This Room
                      </LuxuryButton>
                    </div>
                  </div>
                </article>
              </ScrollFadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
