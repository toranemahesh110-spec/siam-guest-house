import { navLinks } from "@/data/hotel";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = router.location.pathname;

  // Close mobile menu on route change
  const prevPath = useRef(pathname);
  if (prevPath.current !== pathname) {
    prevPath.current = pathname;
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "glass-nav shadow-subtle py-3" : "py-5 bg-transparent"
        }`}
        data-ocid="nav.header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-none group"
            data-ocid="nav.logo_link"
          >
            <span
              className={`font-display text-xl font-normal tracking-wide transition-smooth ${
                scrolled ? "text-foreground" : "text-white text-hero-shadow"
              }`}
            >
              Siam Guest House
            </span>
            <span
              className={`font-body text-[9px] tracking-[0.28em] uppercase transition-smooth ${
                scrolled ? "text-gold" : "text-white/70"
              }`}
              style={{ color: scrolled ? "#D4AF37" : undefined }}
            >
              Pattaya
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-xs tracking-[0.18em] uppercase transition-smooth relative after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                  currentPath === link.to
                    ? "after:w-full text-gold"
                    : "after:w-0 hover:after:w-full"
                } ${
                  scrolled
                    ? currentPath === link.to
                      ? "text-gold"
                      : "text-foreground hover:text-foreground"
                    : currentPath === link.to
                      ? "text-gold"
                      : "text-white/85 hover:text-white"
                }`}
                style={
                  currentPath === link.to ? { color: "#D4AF37" } : undefined
                }
                data-ocid={`nav.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className={`text-[11px] py-2.5 px-6 ${scrolled ? "luxury-button" : "luxury-button-light"}`}
              data-ocid="nav.book_now_button"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className={`md:hidden p-2 transition-smooth ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="nav.mobile_menu_button"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-charcoal/97 flex flex-col items-center justify-center gap-8 animate-slide-down md:hidden"
          style={{ background: "rgba(26,26,26,0.97)" }}
          data-ocid="nav.mobile_menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-display text-2xl font-normal transition-smooth ${
                currentPath === link.to
                  ? "text-gold"
                  : "text-white hover:text-gold"
              }`}
              style={currentPath === link.to ? { color: "#D4AF37" } : undefined}
              data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="luxury-button mt-4"
            data-ocid="nav.mobile_book_button"
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}
