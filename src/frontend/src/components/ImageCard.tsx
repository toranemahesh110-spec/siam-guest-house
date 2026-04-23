interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  overlay?: boolean;
  overlayContent?: React.ReactNode;
  onClick?: () => void;
  "data-ocid"?: string;
}

export function ImageCard({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  overlay = false,
  overlayContent,
  onClick,
  "data-ocid": dataOcid,
}: ImageCardProps) {
  return (
    <div
      className={`card-hover group relative rounded-lg overflow-hidden ${aspectRatio} ${className} ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      data-ocid={dataOcid}
    >
      <img
        src={src}
        alt={alt}
        className="card-image w-full h-full object-cover"
        loading="lazy"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
          {overlayContent}
        </div>
      )}
    </div>
  );
}
