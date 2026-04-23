import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type ButtonVariant = "gold" | "outline" | "light" | "ghost";

interface LuxuryButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string;
  className?: string;
  "data-ocid"?: string;
}

export function LuxuryButton({
  variant = "gold",
  children,
  onClick,
  href,
  to,
  className = "",
  "data-ocid": dataOcid,
}: LuxuryButtonProps) {
  const cls = {
    gold: "luxury-button",
    outline: "luxury-button-outline",
    light: "luxury-button-light",
    ghost:
      "font-body text-sm tracking-widest uppercase transition-smooth underline-offset-4 hover:underline",
  }[variant];

  const allCls = `${cls} ${className}`;

  if (to) {
    return (
      <Link to={to} className={allCls} data-ocid={dataOcid}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={allCls} data-ocid={dataOcid}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={allCls}
      data-ocid={dataOcid}
    >
      {children}
    </button>
  );
}
