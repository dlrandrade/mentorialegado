import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const VARIAVEIS = [
  "Formação",
  "Cidade",
  "Público",
  "Agenda",
  "Momento profissional",
  "Faturamento",
  "Objetivos",
];

export function NotAFormula() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow text-gold">Um grande diferencial</p>
              <span className="rule-gold mt-5" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-7 text-[2rem] leading-[1.12] text-graphite sm:text-[2.5rem] md:text-[3rem]">
                Você não será encaixado dentro de uma{" "}
                <span className="display-italic text-petrol">fórmula pronta</span>.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal>
              <p className="prose-lead text-graphite-soft">
                O psicólogo que atende crianças numa cidade de 40 mil habitantes não tem a mesma
                realidade de um neuropsicólogo que atende executivos em São Paulo.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className="prose-lead text-graphite-soft">
                Por isso, a estratégia não começa com uma fórmula. Começa com diagnóstico.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="prose-lead text-graphite-soft">
                Tudo o que compõe o seu contexto é analisado antes de qualquer plano ser definido:
              </p>
            </Reveal>

            <Reveal delay={240}>
              <ul className="flex flex-wrap gap-2 pt-2">
                {VARIAVEIS.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-petrol/20 px-4 py-2 text-[0.8125rem] text-graphite-soft"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <p className="display mt-20 border-t border-petrol/12 pt-14 text-center text-[1.75rem] leading-snug text-petrol md:text-[2.25rem]">
            O método é estruturado.{" "}
            <span className="display-italic">A estratégia é individual.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
