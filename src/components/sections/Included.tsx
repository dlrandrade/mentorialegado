import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ENTREGAS = [
  {
    titulo: "5 encontros estratégicos individuais",
    texto: "Online, conduzidos diretamente comigo, com foco na sua realidade profissional.",
  },
  {
    titulo: "Diagnóstico aprofundado",
    texto: "Leitura completa de agenda, faturamento, ticket médio, público e posicionamento.",
  },
  {
    titulo: "Plano de ação personalizado",
    texto: "Prioridades, metas e sequência de movimentos definidos para o seu momento.",
  },
  {
    titulo: "Análise de posicionamento",
    texto: "Bio, imagem profissional, comunicação e construção de percepção de valor.",
  },
  {
    titulo: "Estratégias de captação",
    texto: "Caminhos concretos para atrair pacientes particulares e novas oportunidades.",
  },
  {
    titulo: "Precificação e rentabilidade",
    texto: "Estrutura de honorários e leitura dos números que sustentam a sua carreira.",
  },
  {
    titulo: "Materiais e ferramentas de implementação",
    texto: "Recursos práticos para transformar cada decisão em execução.",
  },
  {
    titulo: "Acompanhamento da execução",
    texto: "Correção de rota entre os encontros, para a estratégia não parar no papel.",
  },
];

export function Included() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Como funciona"
          title={
            <>
              Cinco encontros individuais. Uma estratégia construída para a{" "}
              <span className="display-italic text-petrol">sua realidade</span>.
            </>
          }
          lead={
            <p>
              Não são aulas gravadas nem um conteúdo padronizado. São encontros de trabalho, em
              que analisamos a sua carreira e definimos o movimento seguinte.
            </p>
          }
        />

        <ul className="mt-16 grid gap-x-12 gap-y-px sm:grid-cols-2">
          {ENTREGAS.map((item, i) => (
            <Reveal key={item.titulo} as="li" delay={i * 60}>
              <div className="flex gap-5 border-t border-petrol/12 py-7">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-4 w-4 shrink-0 rounded-full border border-gold/50"
                >
                  <span className="block h-full w-full scale-[0.35] rounded-full bg-gold" />
                </span>
                <div>
                  <h3 className="text-[1.0625rem] font-medium text-graphite">{item.titulo}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-graphite-soft">
                    {item.texto}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
