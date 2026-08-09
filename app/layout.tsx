import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bobyzaille Déco — Peintre & Décorateur",
  description:
    "Bobyzaille Déco, peintre et décorateur d'intérieur. Transformez vos espaces avec des créations uniques — peinture artistique, décoration murale, finitions sur mesure.",
  keywords: [
    "peintre",
    "décorateur",
    "décoration intérieure",
    "Bobyzaille",
    "peinture artistique",
    "mural",
    "fresque",
  ],
  openGraph: {
    title: "Bobyzaille Déco — Peintre & Décorateur",
    description:
      "Peinture artistique, décoration murale et finitions sur mesure. Découvrez l'univers créatif de Bobyzaille Déco.",
    type: "website",
    images: [{ url: "/bobyimage1.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf8f5]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
