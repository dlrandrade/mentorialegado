import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const LINHA_DO_TEMPO = [
  {
    marco: "15 anos",
    texto: "Casamento e início da vida adulta muito antes do esperado.",
  },
  {
    marco: "17 anos",
    texto:
      "Já administrava uma empresa e precisava contratar alguém para dirigir nas viagens profissionais, porque ainda não tinha idade para ter habilitação.",
  },
  {
    marco: "23 anos",
    texto: "Voltou a estudar depois de ter abandonado os estudos.",
  },
  {
    marco: "Teologia",
    texto: "Escolheu novamente começar de baixo e buscar formação profunda.",
  },
  {
    marco: "Psicologia",
    texto:
      "Mais um recomeço profissional, dessa vez ao lado do próprio filho na universidade.",
  },
  {
    marco: "Einstein",
    texto:
      "A Neuropsicologia passou a ocupar um lugar decisivo na construção de uma nova fase profissional.",
  },
  {
    marco: "Harvard",
    texto:
      "A pergunta que o acompanhava desde criança continuava presente: “até onde eu conseguirei chegar?”",
  },
];

export function Story() {
  return (
    <section id="historia" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="A origem do método"
          title={
            <>
              Antes de ensinar essa travessia,{" "}
              <span className="display-italic text-petrol">eu precisei fazer a minha.</span>
            </>
          }
        />

        <ol className="mt-16 md:mt-20">
          {LINHA_DO_TEMPO.map((item, i) => (
            <Reveal key={item.marco} as="li" delay={i * 60}>
              <div className="group grid gap-2 border-t border-petrol/12 py-7 md:grid-cols-[13rem_1fr] md:gap-10 md:py-8">
                <div className="flex items-baseline gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold transition-transform duration-500 group-hover:scale-150"
                  />
                  <h3 className="display text-[1.5rem] leading-none text-petrol md:text-[1.75rem]">
                    {item.marco}
                  </h3>
                </div>
                <p className="prose-lead text-graphite-soft md:pt-1">{item.texto}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 border-t border-petrol/12 pt-14 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="display text-[1.625rem] leading-[1.25] text-graphite md:text-[2rem]">
              Minha carreira não foi construída em linha reta. Foi construída atravessando fases,
              erros, recomeços, decisões e mudanças de direção.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex md:items-end">
            <p className="prose-lead text-graphite-soft">
              Foi exatamente dessa experiência que nasceu o{" "}
              <strong className="font-medium text-petrol">Método TRAVESSIA</strong> — a estrutura
              que hoje organiza cada etapa da Mentoria.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
