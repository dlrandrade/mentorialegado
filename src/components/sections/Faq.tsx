"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERGUNTAS } from "@/lib/faq";

export function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="perguntas" className="py-24 md:py-32">
      <Container width="narrow">
        <SectionHeading eyebrow="Perguntas frequentes" title="Antes de dar o próximo passo" />

        <dl className="mt-14">
          {PERGUNTAS.map((item, i) => {
            const isOpen = aberta === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div className="border-t border-petrol/12 last:border-b">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setAberta(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-resposta-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-petrol"
                    >
                      <span className="text-[1.0625rem] leading-snug font-medium text-graphite md:text-[1.125rem]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`relative mt-1.5 h-3.5 w-3.5 shrink-0 text-gold transition-transform duration-400 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                        <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                      </span>
                    </button>
                  </dt>
                  <dd
                    id={`faq-resposta-${i}`}
                    hidden={!isOpen}
                    className="pr-10 pb-7 text-[0.9375rem] leading-relaxed text-graphite-soft md:text-base"
                  >
                    {item.a}
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
