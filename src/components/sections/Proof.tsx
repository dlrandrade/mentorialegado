import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Depoimentos.
 *
 * Enquanto a lista estiver vazia, a seção mostra os pilares de trajetória.
 * Assim que houver mentorados, basta preencher o array abaixo — nome, cidade,
 * especialidade, situação anterior, mudança implementada e resultado — que o
 * bloco de depoimentos passa a ser exibido automaticamente.
 */
type Depoimento = {
  nome: string;
  cidade: string;
  especialidade: string;
  texto: string;
  foto?: string;
};

const DEPOIMENTOS: Depoimento[] = [];

const PILARES = [
  { destaque: "20+", label: "Anos entre clínica, ensino e empreendedorismo" },
  { destaque: "Einstein", label: "Formação em Neuropsicologia" },
  { destaque: "Harvard", label: "Aperfeiçoamento em Neuromodulação" },
  { destaque: "17", label: "Idade em que administrou a primeira empresa" },
];

export function Proof() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="A base do trabalho"
          align="center"
          title={
            <>
              A experiência que sustenta o método é{" "}
              <span className="display-italic text-petrol">vivida, não teórica</span>.
            </>
          }
          lead={
            <p>
              Clínica, neuropsicologia, sala de aula e gestão de empresas. O Método TRAVESSIA não
              nasceu de um estudo sobre carreira — nasceu de decisões tomadas dentro dela.
            </p>
          }
        />

        <ul className="mt-16 grid gap-px overflow-hidden border border-petrol/12 bg-petrol/12 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((pilar, i) => (
            <Reveal key={pilar.label} as="li" delay={i * 80}>
              <div className="h-full bg-ivory px-7 py-10 text-center">
                <p className="display text-[2.25rem] leading-none text-petrol md:text-[2.5rem]">
                  {pilar.destaque}
                </p>
                <p className="mt-4 text-[0.875rem] leading-relaxed text-graphite-soft">
                  {pilar.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        {DEPOIMENTOS.length > 0 ? (
          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {DEPOIMENTOS.map((d, i) => (
              <Reveal key={d.nome} as="li" delay={i * 90}>
                <figure className="h-full border border-petrol/12 bg-paper px-8 py-10">
                  <blockquote className="display-italic text-[1.25rem] leading-snug text-graphite">
                    “{d.texto}”
                  </blockquote>
                  <figcaption className="mt-7 border-t border-petrol/12 pt-5">
                    <p className="text-[0.9375rem] font-medium text-graphite">{d.nome}</p>
                    <p className="mt-1 text-[0.8125rem] text-graphite-mute">
                      {d.especialidade} · {d.cidade}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}
