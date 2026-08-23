import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Mark } from "@/components/ui/Mark";

export function MentoriaIntro() {
  return (
    <section id="a-mentoria" className="py-24 md:py-32">
      <Container width="narrow">
        <Reveal className="flex flex-col items-center text-center">
          <Mark className="h-12 w-12 text-gold" />
          <p className="eyebrow mt-7 text-gold">A Mentoria</p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display mt-7 text-center text-[2.125rem] leading-[1.1] text-graphite sm:text-[2.75rem] md:text-[3.25rem]">
            Mentoria para Psicólogos e Neuropsicólogos
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="display-italic mx-auto mt-6 max-w-2xl text-center text-[1.375rem] leading-snug text-petrol md:text-[1.625rem]">
            Um acompanhamento individual para transformar conhecimento clínico em uma carreira
            mais estruturada, valorizada e sustentável.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <span className="rule-gold mx-auto mt-12" />
        </Reveal>

        <div className="mt-12 space-y-6">
          <Reveal delay={80}>
            <p className="prose-lead text-graphite-soft">
              A Mentoria não foi criada para ensinar você a ser psicólogo.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="prose-lead text-graphite-soft">
              Foi criada para trabalhar uma parte da profissão que quase nunca aprendemos na
              universidade:{" "}
              <strong className="font-medium text-graphite">
                como transformar competência profissional em posicionamento, procura, valor
                percebido e sustentabilidade financeira.
              </strong>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
