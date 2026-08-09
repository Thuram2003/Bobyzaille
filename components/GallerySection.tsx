"use client";

import { useState } from "react";
import Image from "next/image";

const works = [
  {
    src: "/bobyImage1.png",
    alt: "Peinture décorative — Bobyzaille",
    title: "Création Artistique",
    category: "Peinture",
    span: "col-span-7 row-span-2",
  },
  {
    src: "/bobyimage2.jpeg",
    alt: "Décoration intérieure — Bobyzaille",
    title: "Décoration Intérieure",
    category: "Décoration",
    span: "col-span-5",
  },
  {
    src: "/bobyimage3.jpeg",
    alt: "Fresque murale — Bobyzaille",
    title: "Fresque Murale",
    category: "Fresque",
    span: "col-span-5",
  },
  {
    src: "/work1.jpeg",
    alt: "Finition sur mesure — Bobyzaille",
    title: "Finition Sur Mesure",
    category: "Finition",
    span: "col-span-5",
  },
  {
    src: "/video1.jpeg",
    alt: "Réalisation Bobyzaille",
    title: "Projet Résidentiel",
    category: "Résidentiel",
    span: "col-span-7",
  },
];

export default function GallerySection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<typeof works[0] | null>(null);

  return (
    <section
      id="gallery"
      className="bg-[#1a1612] py-24 md:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-tag mb-4">Galerie</p>
            <h2
              id="gallery-heading"
              className="display-md text-white"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Nos Réalisations
            </h2>
          </div>
          <p
            className="text-white/50 max-w-sm text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Chaque œuvre témoigne d&apos;un savoir-faire unique. Cliquez sur une image pour l&apos;agrandir.
          </p>
        </div>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {works.map((work, i) => (
            <div
              key={i}
              className={`${work.span} relative overflow-hidden cursor-pointer group`}
              style={{ minHeight: i === 0 ? "460px" : "200px" }}
              onClick={() => setLightbox(work)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              role="button"
              tabIndex={0}
              aria-label={`Voir ${work.title}`}
              onKeyDown={(e) => e.key === "Enter" && setLightbox(work)}
            >
              <img
                src={work.src}
                alt={work.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                style={{ minHeight: "inherit" }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#1a1612]/90 via-[#1a1612]/20 to-transparent transition-opacity duration-400 ${
                  hovered === i ? "opacity-100" : "opacity-0 md:opacity-0"
                } opacity-100 md:opacity-0 group-hover:opacity-100`}
              />

              {/* Caption */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-400 ${
                  hovered === i ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } group-hover:translate-y-0 group-hover:opacity-100`}
              >
                <p
                  className="text-[0.6rem] tracking-[0.2em] uppercase text-[#c9a84c] mb-1"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {work.category}
                </p>
                <p
                  className="text-white text-lg font-light"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {work.title}
                </p>
              </div>

              {/* Zoom icon */}
              <div
                className={`absolute top-4 right-4 w-9 h-9 bg-[#c9a84c] flex items-center justify-center transition-all duration-300 ${
                  hovered === i ? "opacity-100 scale-100" : "opacity-0 scale-75"
                } group-hover:opacity-100 group-hover:scale-100`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Image agrandie: ${lightbox.title}`}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <span
                className="text-[0.6rem] tracking-[0.2em] uppercase text-[#c9a84c] block"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {lightbox.category}
              </span>
              <span
                className="text-white text-xl font-light"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {lightbox.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
