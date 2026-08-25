import { Container } from "@/components/ui/Container";
import { Cta, CtaMicro } from "@/components/ui/Cta";
import { Reveal } from "@/components/ui/Reveal";
import { CTA_SHORT } from "@/lib/site";

const PASSOS = [
  {
    numero: "01",
    titulo: "Você responde ao diagnóstico",
    texto:
      "Algumas perguntas sobre carreira, posicionamento, agenda, faturamento e estrutura profissional.",
  },
  {
    numero: "02",
    titulo: "Eu analiso pessoalmente",
    texto:
      "As informações são lidas por mim, uma a uma, para entender o momento em que a sua carreira está.",
  },
  {
    numero: "03",
    titulo: "Se houver sentido, conversamos",
    texto:
      "Você poderá agendar uma conversa comigo para receber uma devolutiva sobre o seu cenário profissional.",
  },
];

export function Diagnostic() {
  return (
    <section
      id="diagnostico"
      className="grain relative overflow-hidden bg-petrol-deep py-24 text-ivory md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #17565a 0%, transparent 70%)" }}
      />

      {/* Retrato editorial, dissolvido no fundo — presença, não ilustração. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] md:block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/moises-sombra.jpg"
          alt=""
          className="h-full w-full object-cover opacity-[0.55]"
          style={{
            objectPosition: "72% 30%",
            maskImage: "linear-gradient(122deg, transparent 8%, black 46%, black 78%, transparent 99%)",
            WebkitMaskImage:
              "linear-gradient(122deg, transparent 8%, black 46%, black 78%, transparent 99%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow text-gold-light">Diagnóstico Profissional</p>
            <span className="rule-gold mx-auto mt-5" />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="display mt-7 text-[2rem] leading-[1.12] sm:text-[2.5rem] md:text-[3rem]">
              Essa Mentoria é para você{" "}
              <span className="display-italic text-gold-light">
                e o primeiro passo é preencher sua aplicação.
              </span>
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden border border-ivory/12 bg-ivory/12 md:grid-cols-3">
          {PASSOS.map((passo, i) => (
            <Reveal key={passo.numero} as="li" delay={i * 100}>
              <div className="h-full bg-petrol-deep px-8 py-10">
                <span className="display text-[1.75rem] leading-none text-gold-light">
                  {passo.numero}
                </span>
                <h3 className="mt-5 text-[1.0625rem] font-medium">{passo.titulo}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-sand/75">
                  {passo.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={140}>
          <div className="mt-16 flex flex-col items-center gap-4">
            <Cta label={CTA_SHORT} variant="light" />
            <CtaMicro className="text-sand/65" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
