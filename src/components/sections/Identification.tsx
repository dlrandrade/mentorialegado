import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PARAGRAFOS = [
  "Você estudou. Fez graduação. Investiu em especializações. Construiu experiência clínica.",
  "Atende seus pacientes com seriedade. Passa grande parte do dia trabalhando.",
  "Mas quando o mês termina, muitas vezes o resultado financeiro não parece compatível com todo o esforço que você fez para chegar até aqui.",
];

const PERGUNTAS = [
  "Será que meu público pagaria mais?",
  "Como outros profissionais conseguem cobrar valores tão diferentes?",
  "Como consigo pacientes particulares?",
  "Preciso atender ainda mais pessoas para ganhar melhor?",
  "Será que a Psicologia realmente pode proporcionar a vida que imaginei?",
];

export function Identification() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Talvez o problema não seja trabalhar pouco"
          title={
            <>
              Talvez você esteja trabalhando muito e ganhando menos do que a carreira que
              construiu{" "}
              <span className="display-italic text-petrol">deveria proporcionar</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-20">
          <div className="space-y-6">
            {PARAGRAFOS.map((p, i) => (
              <Reveal key={p} delay={i * 90}>
                <p className="prose-lead text-graphite-soft">{p}</p>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <p className="eyebrow text-graphite-mute">E então aparecem perguntas difíceis</p>
            </Reveal>
            <ul className="mt-7 space-y-0">
              {PERGUNTAS.map((q, i) => (
                <Reveal key={q} as="li" delay={i * 80}>
                  <p className="display-italic border-b border-petrol/10 py-5 text-[1.25rem] leading-snug text-graphite md:text-[1.375rem]">
                    “{q}”
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
