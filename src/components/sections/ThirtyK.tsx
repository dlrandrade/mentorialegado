import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const COMPOSICOES = [
  {
    frente: "Atendimento clínico particular",
    detalhe:
      "Uma agenda organizada em torno de honorários compatíveis com a formação e o posicionamento do profissional.",
  },
  {
    frente: "Avaliações neuropsicológicas",
    detalhe:
      "Um serviço de maior complexidade e maior valor agregado, entregue em blocos e não em sessões avulsas.",
  },
  {
    frente: "Serviços corporativos",
    detalhe:
      "Projetos junto a empresas e instituições, com contratos de duração definida.",
  },
  {
    frente: "Palestras e ensino",
    detalhe:
      "Receita construída a partir da autoridade que a própria carreira já produziu.",
  },
  {
    frente: "Serviços complementares",
    detalhe:
      "Grupos, supervisão, orientação profissional e outras frentes coerentes com a sua especialidade.",
  },
];

export function ThirtyK() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Construindo a meta"
          title={
            <>
              O que precisaria mudar na sua carreira para{" "}
              <span className="display-italic text-petrol">R$ 30 mil por mês</span> deixar de
              parecer distante?
            </>
          }
          lead={
            <p>
              Na maior parte das vezes, a resposta não é “atender mais”. É mudar a composição da
              receita, o valor percebido e a estrutura em que a carreira se apoia.
            </p>
          }
        />

        <Reveal delay={100}>
          <p className="eyebrow mt-16 inline-flex items-center gap-3 border border-gold/40 px-4 py-2.5 text-[0.5625rem] text-gold">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
            Exemplo ilustrativo de composição — não é previsão de resultado
          </p>
        </Reveal>

        <ul className="mt-8">
          {COMPOSICOES.map((item, i) => (
            <Reveal key={item.frente} as="li" delay={i * 70}>
              <div className="grid gap-3 border-t border-petrol/12 py-7 md:grid-cols-[1fr_1.4fr] md:gap-12">
                <div className="flex items-baseline gap-4">
                  <span className="display text-[1.125rem] text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-[1.375rem] leading-tight text-petrol md:text-[1.5rem]">
                    {item.frente}
                  </h3>
                </div>
                <p className="text-[0.9375rem] leading-relaxed text-graphite-soft">
                  {item.detalhe}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="display mt-16 border-t border-petrol/12 pt-14 text-center text-[1.625rem] leading-snug text-graphite md:text-[2.125rem]">
            R$ 30 mil não precisa significar{" "}
            <span className="display-italic text-petrol">trabalhar 300 horas por mês</span>.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[0.8125rem] leading-relaxed text-graphite-mute">
            As composições acima são exemplos usados para ilustrar o raciocínio de estruturação
            de receita e não constituem promessa, garantia ou previsão de resultado. Resultados
            dependem do contexto, do mercado e, sobretudo, da execução de cada profissional.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
