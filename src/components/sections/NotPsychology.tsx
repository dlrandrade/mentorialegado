import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const LACUNAS = [
  "Posicionamento",
  "Percepção de valor",
  "Precificação",
  "Captação",
  "Rentabilidade",
  "Indicadores",
  "Crescimento",
];

export function NotPsychology() {
  return (
    <section className="grain relative overflow-hidden bg-petrol-deep py-24 text-ivory md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[34rem] w-[34rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #17565a 0%, transparent 70%)" }}
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-gold-light">O problema não é a Psicologia</p>
            <span className="rule-gold mt-5" />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="display mt-7 text-[2rem] leading-[1.12] sm:text-[2.5rem] md:text-[3rem]">
              Trabalhar mais não é necessariamente o caminho para ganhar mais.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="space-y-6">
            <Reveal>
              <p className="prose-lead text-sand/80">
                O problema de muitos psicólogos não está na competência clínica. Está na ausência
                de uma estratégia de carreira.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className="prose-lead text-sand/80">
                Eles sabem atender. Mas nunca aprenderam a organizar aquilo que sustenta uma
                carreira do lado de fora do consultório.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="prose-lead text-sand/80">
                E acabam tentando resolver o problema financeiro colocando mais pacientes dentro
                de uma agenda que já está cheia.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <ul className="grid gap-px overflow-hidden border border-ivory/12 bg-ivory/12 sm:grid-cols-2">
              {LACUNAS.map((item) => (
                <li
                  key={item}
                  className="bg-petrol-deep px-5 py-4 text-[0.9375rem] text-sand/90 last:sm:col-span-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Frase de destaque */}
        <Reveal delay={120}>
          <blockquote className="mt-20 border-l-2 border-gold pl-7 md:mt-24 md:pl-10">
            <p className="display text-[1.75rem] leading-[1.25] sm:text-[2.25rem] md:text-[2.75rem]">
              Você não precisa necessariamente de mais horas de trabalho. Precisa fazer com que
              cada hora da sua carreira{" "}
              <span className="display-italic text-gold-light">tenha mais valor</span>.
            </p>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
