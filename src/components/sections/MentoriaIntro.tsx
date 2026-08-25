import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MonoMark } from "@/components/ui/Mark";
import {
  IconCalendar,
  IconMagnifier,
  IconRoute,
  IconTarget,
  IconMegaphone,
  IconTag,
  IconWrench,
  IconTrendUp,
  ENTREGA_TONES,
} from "@/components/ui/DeliverableIcons";

const ENTREGAS = [
  {
    icon: IconCalendar,
    titulo: "5 encontros estratégicos individuais",
    texto: "Online, conduzidos diretamente comigo, com foco na sua realidade profissional.",
  },
  {
    icon: IconMagnifier,
    titulo: "Diagnóstico aprofundado",
    texto: "Leitura completa de agenda, faturamento, ticket médio, público e posicionamento.",
  },
  {
    icon: IconRoute,
    titulo: "Plano de ação personalizado",
    texto: "Prioridades, metas e sequência de movimentos definidos para o seu momento.",
  },
  {
    icon: IconTarget,
    titulo: "Análise de posicionamento",
    texto: "Bio, imagem profissional, comunicação e construção de percepção de valor.",
  },
  {
    icon: IconMegaphone,
    titulo: "Estratégias de captação",
    texto: "Caminhos concretos para atrair pacientes particulares e novas oportunidades.",
  },
  {
    icon: IconTag,
    titulo: "Precificação e rentabilidade",
    texto: "Estrutura de honorários e leitura dos números que sustentam a sua carreira.",
  },
  {
    icon: IconWrench,
    titulo: "Materiais e ferramentas de implementação",
    texto: "Recursos práticos para transformar cada decisão em execução.",
  },
  {
    icon: IconTrendUp,
    titulo: "Acompanhamento da execução",
    texto: "Correção de rota entre os encontros, para a estratégia não parar no papel.",
  },
];

export function MentoriaIntro() {
  return (
    <section id="a-mentoria" className="bg-paper py-24 md:py-32">
      <Container width="narrow">
        <Reveal className="flex flex-col items-center text-center">
          <MonoMark className="h-12 w-12 text-gold" />
          <p className="eyebrow mt-7 text-gold">A Mentoria</p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display mt-7 text-center text-[2.125rem] leading-[1.1] text-graphite sm:text-[2.75rem] md:text-[3.25rem]">
            Mentoria para Psicólogos e Neuropsicólogos
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="display-italic mx-auto mt-6 max-w-2xl text-center text-[1.375rem] leading-snug text-petrol md:text-[1.625rem]">
            Um acompanhamento individual para transformar conhecimento clínico em uma carreira
            mais estruturada, valorizada e sustentável.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <span className="rule-gold mx-auto mt-12" />
        </Reveal>

        <div className="mt-12 space-y-6">
          <Reveal delay={80}>
            <p className="prose-lead text-graphite-soft">
              A Mentoria não foi criada para ensinar você a ser psicólogo.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="prose-lead text-graphite-soft">
              Foi criada para trabalhar uma parte da profissão que quase nunca aprendemos na
              universidade:{" "}
              <strong className="font-medium text-graphite">
                como transformar competência profissional em posicionamento, procura, valor
                percebido e sustentabilidade financeira.
              </strong>
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="prose-lead text-graphite-soft">
              Na prática, isso acontece ao longo de{" "}
              <strong className="font-medium text-graphite">
                5 encontros estratégicos individuais
              </strong>{" "}
              — sempre comigo, nunca em turma —, que vão do diagnóstico completo da sua carreira a
              um plano de ação, posicionamento e estratégia de captação já em movimento.
            </p>
          </Reveal>
        </div>
      </Container>

      {/* Como funciona — os entregáveis concretos da Mentoria */}
      <Container className="mt-20 md:mt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.6875rem] font-medium tracking-[0.18em] text-graphite-mute uppercase">
            Como funciona
          </p>
          <h3 className="display mt-4 text-[1.625rem] leading-tight text-graphite md:text-[2rem]">
            Cinco encontros individuais. Uma estratégia construída para a{" "}
            <span className="display-italic text-petrol">sua realidade</span>.
          </h3>
          <p className="prose-lead mt-5 text-graphite-soft">
            Não são aulas gravadas nem um conteúdo padronizado. São encontros de trabalho, em que
            analisamos a sua carreira e definimos o movimento seguinte.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-x-12 gap-y-px sm:grid-cols-2">
          {ENTREGAS.map((item, i) => {
            const Icon = item.icon;
            const tone = ENTREGA_TONES[i % ENTREGA_TONES.length];
            return (
              <Reveal key={item.titulo} as="li" delay={i * 60}>
                <div className="flex gap-5 border-t border-petrol/12 py-7">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-[1.0625rem] font-medium text-graphite">{item.titulo}</h4>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-graphite-soft">
                      {item.texto}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
