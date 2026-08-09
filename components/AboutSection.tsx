import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#faf8f5] py-24 md:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left image collage */}
          <div className="relative">
            {/* Main image */}
            <div className="img-zoom relative z-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="relative w-full h-[520px]">
                <Image
                  src="/bobyimage2.jpeg"
                  alt="Bobyzaille au travail dans son atelier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={80}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c9a84c]/30 -z-10" />
            </div>

            {/* Floating second image */}
            <div className="absolute -bottom-10 -left-6 w-48 h-56 md:w-56 md:h-64 img-zoom shadow-[0_12px_40px_rgba(0,0,0,0.18)] z-20 border-4 border-[#faf8f5]">
              <div className="relative w-full h-full">
                <Image
                  src="/work1.jpeg"
                  alt="Détail d'une réalisation Bobyzaille"
                  fill
                  sizes="224px"
                  className="object-cover"
                  quality={75}
                />
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute top-8 -right-5 md:-right-8 z-20 bg-[#1a1612] text-white px-6 py-5 text-center shadow-xl">
              <div
                className="text-4xl font-light text-[#c9a84c] leading-none"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                10+
              </div>
              <div
                className="text-[0.6rem] tracking-[0.18em] uppercase text-white/60 mt-1"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Années<br />d&apos;expérience
              </div>
            </div>
          </div>

          {/* Right text */}
          <div className="lg:pl-4">
            <p className="section-tag mb-5">À Propos</p>
            <h2
              id="about-heading"
              className="display-md text-[#1a1612] mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Là où la peinture<br />
              <span className="italic text-[#c9a84c]">devient art</span>
            </h2>
            <div className="divider-gold mb-8" />
            <div
              className="space-y-5 text-[#4a3f38] leading-[1.85]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9375rem" }}
            >
              <p>
                Avec plus de dix ans d&apos;expérience dans la peinture décorative et la
                mise en valeur d&apos;espaces, Bobyzaille Déco s&apos;est imposé comme une
                référence dans l&apos;art de transformer l&apos;ordinaire en extraordinaire.
              </p>
              <p>
                Chaque projet est abordé avec la précision d&apos;un artisan et la sensibilité
                d&apos;un artiste. Des fresques murales majestueuses aux finitions délicates,
                en passant par les effets décoratifs sur mesure chaque coup de pinceau
                raconte une histoire.
              </p>
              <p>
                Que ce soit pour une résidence privée, un espace commercial ou un lieu
                institutionnel, Bobyzaille Déco apporte une touche d&apos;originalité et
                d&apos;élégance qui dure dans le temps.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <div>
                <p
                  className="text-3xl font-light italic text-[#1a1612]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Bobyzaille
                </p>
                <p
                  className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8a8279] mt-0.5"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Peintre &amp; Décorateur
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                "Fresques murales", "Enduits décoratifs", "Trompe-l'œil",
                "Peinture intérieure", "Décoration extérieure", "Conseil couleur",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-[0.7rem] tracking-[0.1em] uppercase border border-[#c9a84c]/40 text-[#8b6f5e] bg-[#c9a84c]/5"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
