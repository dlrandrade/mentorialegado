import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PARA_QUEM_E = [
  "Atende bastante, mas sente que financeiramente não avança.",
  "Tem dificuldade de aumentar seus honorários.",
  "Depende demais de convênios ou pacientes de baixo ticket.",
  "Não sabe exatamente como conseguir novos pacientes.",
  "Sente que profissionais menos experientes são mais valorizados.",
  "Investe constantemente em formação, mas não consegue transformar isso em percepção de valor.",
  "Deseja construir uma clínica ou carreira mais organizada.",
  "Quer crescer sem precisar simplesmente colocar mais pacientes na agenda.",
];

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0">
    <path
      d="M3 8.5 6.2 11.7 13 4.9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ForWhom() {
  return (
    <section id="para-quem" className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Para quem é"
          title={<>Essa Mentoria é para você que…</>}
        />

        <ul className="mt-14 grid gap-x-14 gap-y-px sm:grid-cols-2">
          {PARA_QUEM_E.map((item, i) => (
            <Reveal key={item} as="li" delay={i * 55}>
              <div className="flex items-start gap-4 border-t border-petrol/12 py-6">
                <span className="mt-1 text-petrol">
                  <CheckIcon />
                </span>
                <p className="text-[1.0625rem] leading-relaxed text-graphite">{item}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
