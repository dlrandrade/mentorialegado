import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = ["Clínica", "Neuropsicologia", "Posicionamento", "Gestão", "Estratégia"];

export function Disciplines() {
  return (
    <section className="border-y border-petrol/10 bg-paper py-14">
      <Container>
        <Reveal className="text-center">
          <p className="display text-[1.375rem] text-petrol md:text-[1.625rem]">
            Um método construído a partir da prática.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-6">
            {AREAS.map((area, i) => (
              <li key={area} className="flex items-center gap-3 sm:gap-6">
                <span className="eyebrow text-[0.6875rem] text-graphite-mute">{area}</span>
                {i < AREAS.length - 1 ? (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold/60" />
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
