import { navLinks } from "@/data/hotel";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      className="bg-foreground text-white"
      style={{ background: "#1A1A1A" }}
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-display text-2xl font-normal text-white">
              Siam Guest House
            </h3>
            <p
              className="font-body text-[10px] tracking-[0.28em] uppercase mt-1"
              style={{ color: "#D4AF37" }}
            >
              Pattaya, Thailand
            </p>
          </div>
          <div className="accent-line" style={{ background: "#D4AF37" }} />
          <p className="font-body font-light text-sm text-white/60 leading-relaxed max-w-xs">
            A sanctuary of Thai hospitality on the shores of the Gulf of
            Thailand. Where tradition meets contemporary luxury.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/40">
            Explore
          </h4>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body font-light text-sm text-white/70 hover:text-white transition-smooth w-fit"
                data-ocid={`footer.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="font-body font-medium text-sm transition-smooth w-fit"
              style={{ color: "#D4AF37" }}
              data-ocid="footer.booking_link"
            >
              Book Your Stay
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/40">
            Contact
          </h4>
          <address className="not-italic flex flex-col gap-3 text-sm font-light text-white/70">
            <p className="leading-relaxed">
              178 Beach Road, Pattaya City,
              <br />
              Chonburi 20150, Thailand
            </p>
            <a
              href="tel:+6638412000"
              className="hover:text-white transition-smooth"
            >
              +66 38 412 000
            </a>
            <a
              href="mailto:reservations@siamguesthouse.com"
              className="hover:text-white transition-smooth"
            >
              reservations@siamguesthouse.com
            </a>
          </address>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-light text-white/35">
        <p>© {year} Siam Guest House Pattaya. All rights reserved.</p>
        <p>
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-smooth underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
