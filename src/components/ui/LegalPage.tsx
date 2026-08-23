import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Mark } from "@/components/ui/Mark";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-petrol/10">
        <Container className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-3 text-petrol-deep">
            <Mark className="h-8 w-8" />
            <span className="display text-[1.0625rem]">{site.name}</span>
          </Link>
          <Link
            href="/"
            className="text-[0.8125rem] text-graphite-mute transition-colors hover:text-petrol"
          >
            Voltar ao início
          </Link>
        </Container>
      </header>

      <main id="conteudo" className="py-20 md:py-28">
        <Container width="narrow">
          <p className="eyebrow text-gold">Documento legal</p>
          <span className="rule-gold mt-5" />
          <h1 className="display mt-7 text-[2.25rem] leading-tight text-graphite md:text-[3rem]">
            {title}
          </h1>
          <p className="mt-5 text-[0.8125rem] text-graphite-mute">
            Última atualização: {updatedAt}
          </p>

          <div
            className="mt-14 space-y-10
              [&_h2]:display [&_h2]:text-[1.5rem] [&_h2]:text-petrol [&_h2]:md:text-[1.75rem]
              [&_h2]:mb-4 [&_h2]:border-t [&_h2]:border-petrol/12 [&_h2]:pt-10
              [&_p]:text-[0.9375rem] [&_p]:leading-relaxed [&_p]:text-graphite-soft [&_p]:md:text-base
              [&_p+p]:mt-4
              [&_ul]:mt-4 [&_ul]:space-y-2.5 [&_ul]:pl-1
              [&_li]:relative [&_li]:pl-6 [&_li]:text-[0.9375rem] [&_li]:leading-relaxed [&_li]:text-graphite-soft
              [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em]
              [&_li]:before:h-1 [&_li]:before:w-1 [&_li]:before:rounded-full [&_li]:before:bg-gold
              [&_strong]:font-medium [&_strong]:text-graphite
              [&_a]:text-petrol [&_a]:underline [&_a]:underline-offset-4"
          >
            {children}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
