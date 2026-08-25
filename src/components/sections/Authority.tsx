import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const GALERIA = [
  {
    src: "/images/moises-einstein.jpg",
    alt: "Moisés Barbosa em frente ao Hospital Israelita Albert Einstein",
    legenda: "Einstein",
    focal: "50% 32%",
  },
  {
    src: "/images/moises-harvard.jpg",
    alt: "Moisés Barbosa com jaleco da Harvard T.H. Chan School of Public Health",
    legenda: "Harvard",
    focal: "50% 18%",
  },
  {
    src: "/images/moises-consultorio.jpg",
    alt: "Moisés Barbosa em ambiente clínico",
    legenda: "Clínica",
    focal: "50% 12%",
  },
  {
    src: "/images/moises-sala-de-aula.jpg",
    alt: "Moisés Barbosa na Harvard T.H. Chan School of Public Health",
    legenda: "Ensino",
    focal: "50% 15%",
  },
  {
    src: "/images/moises-evento.jpg",
    alt: "Moisés Barbosa em ambiente profissional sofisticado",
    legenda: "Eventos",
    focal: "50% 12%",
  },
  {
    src: "/images/moises-ambiente-profissional.jpg",
    alt: "Moisés Barbosa em ambiente de trabalho",
    legenda: "Empreendedorismo",
    focal: "50% 15%",
  },
];

export function Authority() {
  return (
    <section className="py-24 md:py-32">
      <Container width="wide">
        <SectionHeading
          eyebrow="Trajetória"
          title={
            <>
              Mais de duas décadas entre clínica, ensino, empreendedorismo e{" "}
              <span className="display-italic text-petrol">desenvolvimento profissional</span>.
            </>
          }
          lead={
            <p>
              A autoridade que sustenta esta Mentoria não vem de uma teoria sobre carreira — vem
              de anos atravessando, na prática, os mesmos territórios que ela ensina a percorrer.
            </p>
          }
        />

        <ul className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {GALERIA.map((foto, i) => (
            <Reveal key={foto.src} as="li" delay={i * 70}>
              <figure className="group relative overflow-hidden">
                <Photo
                  src={foto.src}
                  alt={foto.alt}
                  ratio="3 / 4"
                  focal={foto.focal}
                  className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-petrol-deep/85 via-petrol-deep/25 to-transparent px-5 pt-10 pb-4">
                  <span className="eyebrow text-[0.5625rem] text-ivory">{foto.legenda}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
