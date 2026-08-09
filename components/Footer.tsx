"use client";

const footerLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À Propos", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#video" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#111009] text-white/60"
      role="contentinfo"
      aria-label="Pied de page Bobyzaille Déco"
    >
      {/* Top band */}
      <div className="bg-[#c9a84c]/10 border-t border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Wordmark */}
          <div className="flex flex-col items-center md:items-start leading-none">
            <span
              className="text-[2rem] font-light tracking-[0.04em] text-white"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Bobyzaille
            </span>
            <span
              className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-[#c9a84c] -mt-1"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Déco
            </span>
          </div>

          {/* Nav */}
          <nav
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
            aria-label="Navigation pied de page"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-[0.7rem] tracking-[0.15em] uppercase text-white/50 hover:text-[#c9a84c] transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="btn-gold text-xs shrink-0">
            Devis Gratuit
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[0.65rem] tracking-wide text-white/30"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Bobyzaille Déco. Tous droits réservés.
          </p>
          <p
            className="text-[0.65rem] tracking-wide text-white/20"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Peintre &amp; Décorateur d&apos;Intérieur Douala, Bonabéri
          </p>
        </div>
      </div>
    </footer>
  );
}
