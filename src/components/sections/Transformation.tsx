import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CARDS = [
  "Você não precise aceitar qualquer valor para preencher sua agenda.",
  "Seus pacientes entendam melhor o valor do seu trabalho.",
  "Novas oportunidades cheguem por posicionamento, indicação e autoridade.",
  "Você conheça seus números e saiba quanto precisa faturar.",
  "Sua agenda deixe de determinar o limite da sua renda.",
  "Você tenha uma estratégia concreta para crescer profissionalmente.",
];

export function Transformation() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="A travessia"
          title={<>Imagine construir uma carreira em que…</>}
          align="center"
        />

        <ul className="mt-16 grid gap-px overflow-hidden border border-petrol/12 bg-petrol/12 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((text, i) => (
            <Reveal key={text} as="li" delay={i * 70}>
              <div className="group h-full bg-paper px-8 py-10 transition-colors duration-500 hover:bg-ivory">
                <span className="display text-[1.75rem] leading-none text-gold/70 transition-colors duration-500 group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-graphite">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="display mx-auto mt-16 max-w-2xl text-center text-[1.5rem] leading-snug text-petrol md:text-[1.875rem]">
            É essa travessia que a Mentoria foi criada para construir.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
