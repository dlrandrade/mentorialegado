import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Video } from "@/components/ui/Video";

const AREAS = ["Clínica", "Neuropsicologia", "Posicionamento", "Gestão", "Estratégia"];

export function Disciplines() {
  return (
    <section className="border-y border-petrol/10 bg-paper py-16 md:py-24">
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

        <Reveal delay={200} className="mx-auto mt-16 max-w-3xl text-center md:mt-20">
          <h3 className="display text-[1.375rem] text-graphite md:text-[1.75rem]">
            Assista ao vídeo para entender como funciona em detalhes
          </h3>
        </Reveal>

        <Reveal delay={280} className="mx-auto mt-8 max-w-3xl">
          <Video
            src="/videos/apresentacao.mp4"
            poster="/images/moises-retrato.jpg"
            className="shadow-[0_24px_64px_-28px_rgba(7,42,45,0.35)]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
