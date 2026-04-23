interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${center ? "text-center items-center" : ""} flex flex-col gap-3 ${className}`}
    >
      {eyebrow && (
        <span
          className={`font-body text-xs tracking-[0.22em] uppercase font-medium ${
            light ? "text-gold-light" : "text-gold"
          }`}
          style={{ color: light ? "#E5C96A" : "#D4AF37" }}
        >
          {eyebrow}
        </span>
      )}
      {center && <div className="accent-line mx-auto" />}
      {!center && <div className="accent-line" />}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body font-light text-base md:text-lg leading-relaxed max-w-xl ${
            light ? "text-white/70" : "text-muted-foreground"
          } ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
