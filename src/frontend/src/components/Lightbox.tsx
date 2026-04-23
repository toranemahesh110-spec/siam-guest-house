import type { GalleryImage } from "@/data/hotel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const current = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  if (!current) return null;

  return (
    <dialog
      open
      className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center w-full h-full max-w-full max-h-full p-0 border-0 bg-transparent"
      data-ocid="gallery.lightbox"
      aria-modal="true"
    >
      {/* Backdrop click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        aria-label="Close lightbox backdrop"
        role="button"
        tabIndex={-1}
      />

      {/* Close */}
      <button
        type="button"
        className="absolute top-5 right-5 text-white/80 hover:text-white transition-smooth z-10 p-2"
        onClick={onClose}
        aria-label="Close lightbox"
        data-ocid="gallery.lightbox.close_button"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Prev */}
      <button
        type="button"
        className="absolute left-4 text-white/80 hover:text-white transition-smooth z-10 p-2"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        data-ocid="gallery.lightbox.prev_button"
      >
        <ChevronLeft className="w-9 h-9" />
      </button>

      {/* Image container */}
      <div className="relative z-10 max-w-5xl max-h-[85vh] mx-16 animate-zoom-in">
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-md shadow-luxury"
        />
        <p className="text-center text-white/60 font-body text-sm mt-3 tracking-wide">
          {current.alt}
        </p>
        <p className="text-center text-white/30 font-body text-xs mt-1">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Next */}
      <button
        type="button"
        className="absolute right-4 text-white/80 hover:text-white transition-smooth z-10 p-2"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        data-ocid="gallery.lightbox.next_button"
      >
        <ChevronRight className="w-9 h-9" />
      </button>
    </dialog>
  );
}
