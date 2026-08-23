import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Acompanhamento individual para psicólogos e neuropsicólogos que desejam organizar posicionamento, precificação, captação e gestão da carreira. Com Moisés Barbosa Oliveira, psicólogo, CRP 13/11227.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mentoria Legado — Mentoria para Psicólogos e Neuropsicólogos",
    template: "%s · Mentoria Legado",
  },
  description,
  keywords: [
    "mentoria para psicólogos",
    "mentoria para neuropsicólogos",
    "posicionamento profissional psicologia",
    "precificação psicólogo",
    "carreira em psicologia",
    "Moisés Barbosa Oliveira",
  ],
  authors: [{ name: site.professional.fullName }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Mentoria Legado — Mentoria para Psicólogos e Neuropsicólogos",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoria Legado",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description,
    areaServed: "BR",
    provider: {
      "@type": "Person",
      name: site.professional.fullName,
      jobTitle: "Psicólogo e Neuropsicólogo",
      identifier: site.professional.crp,
    },
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Sem JavaScript não há IntersectionObserver: revela tudo de imediato. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-petrol focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          Ir para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
