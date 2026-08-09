"use client";

import Image from "next/image";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGallery = () => {
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden bg-[#1a1612]"
      aria-label="Section héros Bobyzaille Déco"
    >
      {/* Background image — priority loaded (above the fold) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bobyImage1.png"
          alt="Bobyzaille en train de peindre"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-[center_20%]"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] via-[#1a1612]/60 to-[#1a1612]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1612]/70 via-transparent to-transparent" />
      </div>

      {/* Decorative gold vertical line */}
      <div className="absolute left-10 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/40 to-transparent hidden lg:block z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-32">
        <div className="max-w-3xl">
          <p className="section-tag mb-6 animate-fade-in-up">
            Peintre &amp; Décorateur d&apos;Intérieur
          </p>
          <h1
            className="display-xl text-white mb-2 animate-fade-in-up delay-100"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Bobyzaille
          </h1>
          <h1
            className="display-xl text-[#c9a84c] italic mb-8 animate-fade-in-up delay-200"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Déco
          </h1>
          <div className="divider-gold mb-8 animate-fade-in-up delay-200" />
          <p
            className="text-white/75 text-lg leading-relaxed max-w-xl mb-12 animate-fade-in-up delay-300"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            L&apos;art de sublimer chaque espace. Fresques murales, peintures décoratives
            et finitions haut de gamme — chaque projet est une œuvre unique.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <button onClick={scrollToGallery} className="btn-gold">Voir la Galerie</button>
            <button onClick={scrollToAbout} className="btn-outline">En savoir plus</button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2 opacity-60">
        <span
          className="text-white/60 text-[0.6rem] tracking-[0.25em] uppercase rotate-90 mb-4"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Défiler
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* Bottom stat strip */}
      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <div className="bg-[#c9a84c]/10 backdrop-blur-sm border-t border-l border-[#c9a84c]/20 px-10 py-5 flex gap-10">
          {[
            { value: "10+", label: "Ans d'expérience" },
            { value: "200+", label: "Projets réalisés" },
            { value: "100%", label: "Sur mesure" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-light text-[#c9a84c]"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[0.6rem] tracking-[0.18em] uppercase text-white/50 mt-0.5"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
