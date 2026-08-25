import { Container } from "@/components/ui/Container";
import { Cta, CtaMicro } from "@/components/ui/Cta";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { site, CTA_PRIMARY } from "@/lib/site";

export function Hero() {
  const { professional } = site;

  return (
    <section id="topo" className="grain relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Lavagem de cor institucional, muito discreta */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[38rem] w-[38rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, #0d3b3e 0%, transparent 70%)" }}
      />

      <Container width="wide" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-20">
          {/* ---------- Coluna de texto ---------- */}
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-gold">
                Mentoria para Psicólogos e Neuropsicólogos
              </p>
              <span className="rule-gold mt-5" />
            </Reveal>

            <Reveal delay={90}>
              <h1 className="display mt-8 text-[2rem] leading-[1.14] text-graphite sm:text-[2.625rem] md:text-[3.125rem]">
                Como crescer financeiramente na Psicologia{" "}
                <span className="display-italic text-petrol">fazendo seu tempo valer mais</span>,
                mesmo que hoje sua agenda seja formada principalmente por atendimentos de valor
                financeiro mais baixo.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="prose-lead mt-8 max-w-xl text-graphite-soft">
                Um acompanhamento individual para psicólogos e neuropsicólogos que desejam
                organizar posicionamento, precificação, captação e gestão da carreira, com uma
                estratégia estruturada para buscar um faturamento de R$ 30 mil por mês.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-col items-start gap-4">
                <Cta label={CTA_PRIMARY} />
                <CtaMicro text="Sem custo." className="pl-1" />
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-12 border-t border-petrol/10 pt-7">
                <p className="text-[0.9375rem] font-medium text-graphite">
                  {professional.fullName}
                </p>
                <p className="mt-1 text-[0.8125rem] text-graphite-mute">
                  {professional.roles} · {professional.crp}
                </p>
              </div>
            </Reveal>
          </div>

          {/* ---------- Retrato ---------- */}
          <Reveal delay={200} className="relative mx-auto w-full max-w-[26rem] lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 hidden h-full w-full border border-gold/30 sm:block"
            />
            <div className="absolute inset-0 bg-petrol/5" aria-hidden="true" />
            <Photo
              src="/images/moises-retrato.jpg"
              alt={`${professional.fullName}, ${professional.title.toLowerCase()} e neuropsicólogo`}
              ratio="4 / 5"
              priority
              className="relative"
            />

            {/* Credenciais sobre a fotografia */}
            <div className="relative z-10 -mt-10 ml-4 mr-8 bg-petrol-deep px-7 py-6 text-ivory shadow-[0_24px_48px_-24px_rgba(7,42,45,0.7)] sm:-mt-14">
              <p className="display text-lg leading-tight">{professional.fullName}</p>
              <p className="eyebrow mt-2.5 text-[0.5625rem] text-gold-light">
                {professional.roles}
              </p>
              <ul className="mt-4 space-y-1.5 border-t border-ivory/15 pt-4">
                {professional.credentials.map((line) => (
                  <li key={line} className="text-[0.8125rem] leading-snug text-sand/85">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
