import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const NAO_E_PARA = [
  "Você procura enriquecimento rápido.",
  "Não está disposto a implementar mudanças.",
  "Espera que alguém construa sua carreira por você.",
  "Busca apenas estratégias de viralização no Instagram.",
  "Acredita que aumentar faturamento depende de algum truque de marketing.",
];

export function NotForWhom() {
  return (
    <section className="grain relative overflow-hidden bg-graphite py-24 text-ivory md:py-32">
      <Container width="narrow" className="relative">
        <Reveal>
          <p className="eyebrow text-gold-light">Para quem não é</p>
          <span className="rule-gold mt-5" />
        </Reveal>

        <Reveal delay={80}>
          <h2 className="display mt-7 text-[2rem] leading-[1.12] sm:text-[2.5rem] md:text-[2.875rem]">
            Essa Mentoria provavelmente não é para você se…
          </h2>
        </Reveal>

        <ul className="mt-12">
          {NAO_E_PARA.map((item, i) => (
            <Reveal key={item} as="li" delay={i * 70}>
              <div className="flex items-start gap-4 border-t border-ivory/12 py-6">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-px w-4 shrink-0 bg-ivory/40"
                />
                <p className="text-[1.0625rem] leading-relaxed text-sand/80">{item}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <p className="display mt-14 border-t border-ivory/20 pt-12 text-[1.5rem] leading-snug md:text-[1.875rem]">
            Eu entrego direção, método e acompanhamento.{" "}
            <span className="display-italic text-gold-light">
              A execução continua sendo sua responsabilidade.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
