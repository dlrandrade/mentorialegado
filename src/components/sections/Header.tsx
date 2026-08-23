"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/ui/Mark";
import { site, CTA_SHORT } from "@/lib/site";

const NAV = [
  { href: "#a-mentoria", label: "A Mentoria" },
  { href: "#metodo", label: "Método Travessia" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#perguntas", label: "Perguntas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-petrol/10 bg-ivory/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-4 px-6 py-4 md:gap-8 md:px-10 md:py-5">
        <a href="#topo" className="text-petrol-deep" aria-label={site.name}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.8125rem] text-graphite-soft transition-colors duration-200 hover:text-petrol after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* No celular o rótulo encurta, mas o CTA nunca desaparece do topo. */}
        <a
          href={site.diagnosticUrl}
          className="inline-flex shrink-0 rounded-full border border-petrol/25 px-4 py-2 text-[0.6875rem] font-medium tracking-[0.07em] text-petrol-deep uppercase transition-all duration-300 hover:border-petrol hover:bg-petrol hover:text-ivory sm:px-5 sm:py-2.5 sm:text-[0.75rem]"
        >
          <span className="sm:hidden">Diagnóstico</span>
          <span className="hidden sm:inline">{CTA_SHORT}</span>
        </a>
      </div>
    </header>
  );
}
