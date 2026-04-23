import { ImageCard } from "@/components/ImageCard";
import { Lightbox } from "@/components/Lightbox";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryImages } from "@/data/hotel";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Pool",
  "Rooms",
  "Spa",
  "Dining",
  "Villa",
  "Views",
] as const;
type Category = (typeof CATEGORIES)[number];

export function GalleryPage() {
  const [category, setCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    category === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null,
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null,
    );

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
          alt="Siam Guest House gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60 mb-3">
            Visual Stories
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-normal text-hero-shadow">
            Gallery
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section
        className="py-10 px-6 border-b border-border"
        data-ocid="gallery.filter_section"
      >
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`font-body text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-smooth ${
                category === cat
                  ? "border-transparent"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
              style={
                category === cat
                  ? { background: "#D4AF37", color: "#1A1A1A" }
                  : undefined
              }
              data-ocid={`gallery.filter.${cat.toLowerCase()}_tab`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6" data-ocid="gallery.grid_section">
        <div className="max-w-6xl mx-auto">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <ScrollFadeIn
                key={img.id}
                delay={i * 50}
                className="break-inside-avoid mb-4"
              >
                <ImageCard
                  src={img.src}
                  alt={img.alt}
                  aspectRatio=""
                  overlay
                  overlayContent={
                    <span className="font-body text-xs tracking-widest uppercase text-white/80">
                      {img.category}
                    </span>
                  }
                  onClick={() => openLightbox(i)}
                  data-ocid={`gallery.grid.item.${i + 1}`}
                />
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
