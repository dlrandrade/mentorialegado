import { Container } from "@/components/ui/Container";
import { Cta, CtaMicro } from "@/components/ui/Cta";
import { Reveal } from "@/components/ui/Reveal";
import { MonoMark } from "@/components/ui/Mark";
import { CTA_SHORT } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="grain relative overflow-hidden border-t border-petrol/10 bg-ivory-deep py-24 md:py-32">
      <Container width="narrow" className="relative text-center">
        <Reveal className="flex justify-center">
          <MonoMark className="h-11 w-11 text-gold" />
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display mt-8 text-[2rem] leading-[1.12] text-graphite sm:text-[2.5rem] md:text-[3rem]">
            Toda travessia começa com um{" "}
            <span className="display-italic text-petrol">ponto de partida claro</span>.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="prose-lead mx-auto mt-7 max-w-xl text-graphite-soft">
            Responda ao Diagnóstico Profissional e descubra, com precisão, onde a sua carreira
            está hoje — e qual seria o próximo movimento.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-11 flex flex-col items-center gap-4">
            <Cta label={CTA_SHORT} />
            <CtaMicro />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
