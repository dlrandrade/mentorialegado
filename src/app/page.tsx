import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Disciplines } from "@/components/sections/Disciplines";
import { Identification } from "@/components/sections/Identification";
import { NotPsychology } from "@/components/sections/NotPsychology";
import { Transformation } from "@/components/sections/Transformation";
import { Story } from "@/components/sections/Story";
import { Authority } from "@/components/sections/Authority";
import { MentoriaIntro } from "@/components/sections/MentoriaIntro";
import { Travessia } from "@/components/sections/Travessia";
import { Included } from "@/components/sections/Included";
import { NotAFormula } from "@/components/sections/NotAFormula";
import { ForWhom } from "@/components/sections/ForWhom";
import { NotForWhom } from "@/components/sections/NotForWhom";
import { Proof } from "@/components/sections/Proof";
import { ThirtyK } from "@/components/sections/ThirtyK";
import { Diagnostic } from "@/components/sections/Diagnostic";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { PERGUNTAS } from "@/lib/faq";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PERGUNTAS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <Header />
      <main id="conteudo">
        {/* 1 — Promessa, retrato e primeiro CTA */}
        <Hero />
        {/* 2 — Um método construído a partir da prática */}
        <Disciplines />
        {/* 3 — Identificação com a dor */}
        <Identification />
        {/* 4 — O problema não é a Psicologia */}
        <NotPsychology />
        {/* 5 — O futuro desejado */}
        <Transformation />
        {/* 6 — A história e a origem da Travessia */}
        <Story />
        {/* 7 — Autoridade: Einstein, Harvard, clínica, ensino */}
        <Authority />
        {/* 8 — Apresentação da Mentoria */}
        <MentoriaIntro />
        {/* 9 — Método TRAVESSIA em cinco etapas */}
        <Travessia />
        {/* 10 — O que está incluído */}
        <Included />
        {/* 11 — Estratégia individual, não fórmula pronta */}
        <NotAFormula />
        {/* 12 — Para quem é */}
        <ForWhom />
        {/* 13 — Para quem não é */}
        <NotForWhom />
        {/* 14 — Provas e trajetória */}
        <Proof />
        {/* 15 — Construindo a meta de R$ 30 mil */}
        <ThirtyK />
        {/* 16 — Diagnóstico Profissional gratuito */}
        <Diagnostic />
        {/* 17 — Perguntas frequentes */}
        <Faq />
        {/* 18 — CTA final */}
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
