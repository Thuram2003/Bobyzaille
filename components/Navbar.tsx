"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À Propos", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#video" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(26,22,18,0.97)] backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex flex-col leading-none select-none"
            aria-label="Bobyzaille Déco retour accueil"
          >
            <span
              className="font-display text-[1.55rem] font-light tracking-[0.04em] text-white"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Bobyzaille
            </span>
            <span
              className="text-[0.6rem] font-sans font-700 tracking-[0.3em] uppercase text-[#c9a84c] -mt-0.5"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Déco
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[0.72rem] font-sans font-600 tracking-[0.18em] uppercase text-white/80 hover:text-[#c9a84c] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="hidden md:inline-block btn-gold text-[0.7rem] py-2.5 px-6"
          >
            Devis Gratuit
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1a1612] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="text-white/90 hover:text-[#c9a84c] transition-colors text-3xl font-display font-light tracking-wide"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
          className="btn-gold mt-4 text-sm"
        >
          Devis Gratuit
        </a>
      </div>
    </>
  );
}
