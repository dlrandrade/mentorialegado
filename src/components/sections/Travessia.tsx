import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ETAPAS = [
  {
    numero: "01",
    nome: "Diagnosticar",
    resumo: "Entender exatamente onde sua carreira está hoje.",
    itens: [
      "Agenda",
      "Faturamento",
      "Ticket médio",
      "Público",
      "Formação",
      "Posicionamento",
      "Captação",
      "Ambiente profissional",
    ],
  },
  {
    numero: "02",
    nome: "Planejar",
    resumo: "Transformar o diagnóstico em um plano concreto.",
    itens: [
      "Prioridades",
      "Metas",
      "Precificação",
      "Estrutura",
      "Migração de público",
      "Organização da agenda",
    ],
  },
  {
    numero: "03",
    nome: "Posicionar",
    resumo: "Construir percepção de valor.",
    itens: [
      "Bio",
      "Imagem profissional",
      "Comunicação",
      "Conteúdo",
      "Autoridade",
      "Relacionamento",
    ],
  },
  {
    numero: "04",
    nome: "Implementar",
    resumo: "Fazer a estratégia sair do papel.",
    itens: ["Conversão", "Execução", "Correção", "Prospecção", "Ajustes", "Disciplina"],
  },
  {
    numero: "05",
    nome: "Sustentar",
    resumo: "Construir crescimento que continue depois da Mentoria.",
    itens: ["Indicadores", "Aquisição", "Novos serviços", "Autoridade", "Equipe", "Escala"],
  },
];

export function Travessia() {
  return (
    <section
      id="metodo"
      className="grain relative overflow-hidden bg-petrol-deep py-24 text-ivory md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #17565a 0%, transparent 70%)" }}
      />

      <Container width="wide" className="relative">
        <SectionHeading
          eyebrow="Método Travessia"
          tone="light"
          align="center"
          title={
            <>
              Cinco etapas para atravessar da competência clínica à{" "}
              <span className="display-italic text-gold-light">carreira sustentável</span>.
            </>
          }
        />

        {/* Estrada estilizada */}
        <div className="relative mt-20 md:mt-24">
          <div
            aria-hidden="true"
            className="absolute top-[1.15rem] left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent lg:block"
          />

          <ol className="grid gap-12 lg:grid-cols-5 lg:gap-6">
            {ETAPAS.map((etapa, i) => (
              <Reveal key={etapa.numero} as="li" delay={i * 110} className="relative">
                {/* Marcador na estrada */}
                <div className="flex items-center gap-4 lg:block">
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-petrol-deep"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <span className="display text-[1.75rem] leading-none text-gold-light lg:mt-6 lg:block">
                    {etapa.numero}
                  </span>
                </div>

                <h3 className="display mt-4 text-[1.625rem] leading-none tracking-wide lg:mt-3">
                  {etapa.nome}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-sand/75 lg:min-h-[3.25rem]">
                  {etapa.resumo}
                </p>

                <ul className="mt-5 space-y-1.5 border-t border-ivory/12 pt-5">
                  {etapa.itens.map((item) => (
                    <li key={item} className="text-[0.8125rem] text-sand/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={150}>
          <div className="mx-auto mt-20 max-w-2xl border-t border-ivory/15 pt-12 text-center md:mt-24">
            <p className="display text-[1.625rem] leading-snug md:text-[2rem]">
              Você não recebe apenas informação.
            </p>
            <p className="prose-lead mt-4 text-sand/80">
              Você termina cada etapa sabendo exatamente qual é o próximo movimento da sua
              carreira.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
