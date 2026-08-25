import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PARAGRAFOS = [
  "Você estudou. Fez graduação. Investiu em especializações. Construiu experiência clínica.",
  "Atende seus pacientes com seriedade. Passa grande parte do dia trabalhando.",
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

            {/* Frase de virada — negrito e destaque de fundo, só nela */}
            <Reveal delay={180}>
              <p className="prose-lead text-graphite-soft">
                Mas quando o mês termina, muitas vezes o{" "}
                <strong className="box-decoration-clone rounded-[2px] bg-gold/25 px-1.5 py-0.5 font-semibold text-graphite">
                  resultado financeiro não parece compatível com todo o esforço que você fez para
                  chegar até aqui
                </strong>
                .
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={120}>
              <Photo
                src="/images/psi-cansado.jpg"
                alt="Psicólogo esgotado, com a cabeça apoiada na mão, diante do computador no fim do expediente"
                ratio="16 / 10"
                focal="50% 35%"
                tone="petrol"
                className="shadow-[0_20px_48px_-24px_rgba(20,23,26,0.35)]"
              />
            </Reveal>

            <Reveal delay={200}>
              <p className="eyebrow mt-9 text-graphite-mute">E então aparecem perguntas difíceis</p>
            </Reveal>
            <ul className="mt-4 space-y-0">
              {PERGUNTAS.map((q, i) => (
                <Reveal key={q} as="li" delay={220 + i * 70}>
                  <p className="display-italic border-b border-petrol/10 py-4 text-[1.125rem] leading-snug text-graphite md:text-[1.25rem]">
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
