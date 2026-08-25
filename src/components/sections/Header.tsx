"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/ui/Mark";
import { site } from "@/lib/site";

/**
 * Cabeçalho enxuto, de propósito: sem menu e sem CTA no topo.
 * A página não oferece atalho — quem chega é conduzido a rolar e
 * percorrer a narrativa completa antes de qualquer chamada para ação.
 */
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
      <div className="mx-auto flex w-full max-w-[88rem] items-center px-6 py-4 md:px-10 md:py-5">
        <a href="#topo" className="text-petrol-deep" aria-label={site.name}>
          <Wordmark />
        </a>
      </div>
    </header>
  );
}
