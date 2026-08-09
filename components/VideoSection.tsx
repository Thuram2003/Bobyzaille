"use client";

import { useRef, useState } from "react";

const videos = [
  {
    src: "/video2.mp4",
    poster: "/video1.jpeg",
    title: "Création en Atelier",
    description: "Découvrez le processus créatif de Bobyzaille — de la conception à la réalisation finale.",
  },
  {
    src: "/video3.mp4",
    poster: "/work1.jpeg",
    title: "Chantier en Direct",
    description: "Une immersion dans un projet de décoration murale grandeur nature.",
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="group relative">
      {/* Video wrapper */}
      <div
        className="relative overflow-hidden cursor-pointer"
        style={{ aspectRatio: "16/9" }}
        onClick={toggle}
        role="button"
        tabIndex={0}
        aria-label={playing ? `Pause: ${video.title}` : `Lire: ${video.title}`}
        onKeyDown={(e) => e.key === "Enter" && toggle()}
      >
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loop
          playsInline
          preload="none"
          onEnded={() => setPlaying(false)}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-[#1a1612]/50 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          {/* Play / Pause button */}
          <div
            className={`w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center transition-transform duration-300 ${
              playing ? "scale-90" : "scale-100 group-hover:scale-110"
            } bg-[#c9a84c]/80 backdrop-blur-sm`}
          >
            {playing ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1612] to-transparent pointer-events-none" />

        {/* Index */}
        <div
          className="absolute top-5 left-5 text-[0.6rem] tracking-[0.2em] uppercase text-[#c9a84c]"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          0{index + 1}
        </div>
      </div>

      {/* Caption */}
      <div className="mt-6">
        <h3
          className="text-xl text-white mb-2"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
        >
          {video.title}
        </h3>
        <p
          className="text-white/50 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          {video.description}
        </p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section
      id="video"
      className="bg-[#1a1612] py-24 md:py-32"
      aria-labelledby="video-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-tag mb-4">Réalisations</p>
            <h2
              id="video-heading"
              className="display-md text-white"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              L&apos;Art en{" "}
              <span className="italic text-[#c9a84c]">Mouvement</span>
            </h2>
          </div>
          <div className="divider-gold" />
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>

        {/* Decorative quote */}
        <div className="mt-20 md:mt-24 border-l-2 border-[#c9a84c]/40 pl-8 max-w-2xl mx-auto text-center md:text-left md:mx-0">
          <blockquote
            className="text-2xl md:text-3xl font-light italic text-white/70 leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            &ldquo;La peinture est une poésie muette — elle parle aux yeux comme la musique parle aux oreilles.&rdquo;
          </blockquote>
          <cite
            className="block mt-4 text-[0.65rem] tracking-[0.2em] uppercase text-[#c9a84c] not-italic"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            — Bobyzaille
          </cite>
        </div>
      </div>
    </section>
  );
}
