"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#faf8f5] py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <div>
            <p className="section-tag mb-5">Contact</p>
            <h2
              id="contact-heading"
              className="display-md text-[#1a1612] mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Parlons de votre{" "}
              <span className="italic text-[#c9a84c]">projet</span>
            </h2>

            <div className="divider-gold mb-10" />

            <p
              className="text-[#4a3f38] leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9375rem" }}
            >
              Vous avez un espace à transformer ? Une idée à concrétiser ?
              Contactez-nous pour un devis gratuit et sans engagement.
              Bobyzaille Déco se déplace pour évaluer votre projet.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "656 298 327 / 688 540 837",
                  href: "tel:+237656298327",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: "contact@bobyzailledeco.com",
                  href: "mailto:contact@bobyzailledeco.com",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Adresse",
                  value: "Douala — Bonabéri, Centre Équestre",
                  href: "https://maps.google.com/?q=Bonaberi+Centre+Equestre+Douala",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[0.6rem] tracking-[0.2em] uppercase text-[#8a8279] mb-0.5"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#1a1612] hover:text-[#c9a84c] transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9375rem" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="text-[#1a1612]"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9375rem" }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-12 flex gap-3">
              {[
                {
                  label: "WhatsApp",
                  href: "https://wa.me/237656298327",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center text-[#8a8279] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)] p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#c9a84c]/10 flex items-center justify-center text-[#c9a84c] mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="text-2xl text-[#1a1612] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  Message envoyé !
                </h3>
                <p
                  className="text-[#8a8279] text-sm"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="btn-outline mt-8 text-sm"
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[0.65rem] tracking-[0.18em] uppercase text-[#8a8279] mb-2"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full border border-[#e5e0d8] bg-[#faf8f5] px-4 py-3 text-[#1a1612] text-sm placeholder-[#c4a99a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[0.65rem] tracking-[0.18em] uppercase text-[#8a8279] mb-2"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full border border-[#e5e0d8] bg-[#faf8f5] px-4 py-3 text-[#1a1612] text-sm placeholder-[#c4a99a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[0.65rem] tracking-[0.18em] uppercase text-[#8a8279] mb-2"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+243 xxx xxx xxx"
                      className="w-full border border-[#e5e0d8] bg-[#faf8f5] px-4 py-3 text-[#1a1612] text-sm placeholder-[#c4a99a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-[0.65rem] tracking-[0.18em] uppercase text-[#8a8279] mb-2"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-[#e5e0d8] bg-[#faf8f5] px-4 py-3 text-[#1a1612] text-sm focus:outline-none focus:border-[#c9a84c] transition-colors duration-200 appearance-none cursor-pointer"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    <option value="">Choisir un service…</option>
                    <option value="peinture-decorative">Peinture Décorative</option>
                    <option value="fresques">Fresques &amp; Murales</option>
                    <option value="decoration-interieure">Décoration Intérieure</option>
                    <option value="peinture-exterieure">Peinture Extérieure</option>
                    <option value="ravalement">Ravalement &amp; Rénovation</option>
                    <option value="coaching">Coaching Couleur</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[0.65rem] tracking-[0.18em] uppercase text-[#8a8279] mb-2"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet…"
                    className="w-full border border-[#e5e0d8] bg-[#faf8f5] px-4 py-3 text-[#1a1612] text-sm placeholder-[#c4a99a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200 resize-none"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0110 10" />
                      </svg>
                      Envoi en cours…
                    </>
                  ) : (
                    "Envoyer le Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
