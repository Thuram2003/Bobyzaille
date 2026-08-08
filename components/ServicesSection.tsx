const services = [
  {
    number: "01",
    title: "Peinture Décorative",
    description:
      "Enduits à la chaux, béton ciré, stucco veneziano, patines et laques — des finitions qui donnent caractère et profondeur à vos murs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Fresques & Murales",
    description:
      "Créations murales uniques, trompe-l'œil et peintures artistiques sur mesure qui transforment un mur ordinaire en œuvre d'art.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Décoration Intérieure",
    description:
      "Conseil en couleur, mise en scène des espaces et harmonisation des volumes — un accompagnement global pour sublimer chaque pièce.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Peinture Extérieure",
    description:
      "Façades, terrasses et espaces extérieurs traités avec des peintures durables et résistantes aux intempéries, pour une belle apparence qui dure.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.38A1 1 0 004.7 21h14.6a1 1 0 00.88-1.48C18.34 16.36 17 13 17 8z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Ravalement & Rénovation",
    description:
      "Diagnostic, préparation des supports et application soignée pour des rénovations qui retrouvent l'éclat du neuf, dans le respect des techniques traditionnelles.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Coaching Couleur",
    description:
      "Consultation personnalisée pour choisir les bonnes couleurs et matières selon votre espace, la lumière naturelle et votre style de vie.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#f5f0e8] py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-tag mb-5">Services</p>
          <h2
            id="services-heading"
            className="display-md text-[#1a1612] mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Ce que nous{" "}
            <span className="italic text-[#c9a84c]">créons</span>
            {" "}pour vous
          </h2>
          <div className="divider-gold mb-6" />
          <p
            className="text-[#4a3f38] leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9375rem" }}
          >
            De la simple peinture au projet décoratif d&apos;envergure, Bobyzaille Déco
            intervient sur tous types de surfaces et de styles.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c9a84c]/15">
          {services.map((service) => (
            <article
              key={service.number}
              className="bg-[#f5f0e8] p-8 md:p-10 group hover:bg-[#1a1612] transition-colors duration-400 cursor-default"
            >
              {/* Number */}
              <div
                className="text-[0.65rem] tracking-[0.2em] uppercase text-[#c9a84c] mb-6"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {service.number}
              </div>

              {/* Icon */}
              <div className="text-[#c9a84c] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 w-fit">
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl text-[#1a1612] group-hover:text-white mb-4 transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#4a3f38] group-hover:text-white/65 text-sm leading-relaxed transition-colors duration-300"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="text-[0.65rem] tracking-[0.18em] uppercase text-[#c9a84c]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  En savoir plus
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p
            className="text-[#8a8279] mb-6"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9375rem" }}
          >
            Un projet en tête ? Discutons-en.
          </p>
          <a href="#contact" className="btn-gold inline-block">
            Demander un Devis
          </a>
        </div>
      </div>
    </section>
  );
}
