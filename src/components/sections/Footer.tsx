import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Mark } from "@/components/ui/Mark";
import { site } from "@/lib/site";

export function Footer() {
  const { professional, links } = site;

  const externos = [
    links.instagram ? { href: links.instagram, label: "Instagram" } : null,
    links.contactEmail ? { href: `mailto:${links.contactEmail}`, label: "Contato" } : null,
    links.whatsapp ? { href: links.whatsapp, label: "WhatsApp" } : null,
  ].filter((item): item is { href: string; label: string } => item !== null);

  return (
    <footer className="bg-petrol-deep text-ivory">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          <Mark className="h-12 w-12 text-gold-light" />

          <p className="display mx-auto mt-9 max-w-2xl text-[1.375rem] leading-snug md:text-[1.75rem]">
            {site.signature}
          </p>

          <span className="rule-gold mx-auto mt-10" />

          {/* Identificação profissional exigida na publicidade em Psicologia */}
          <address className="mt-10 not-italic">
            <p className="text-[0.9375rem] font-medium">{professional.fullName}</p>
            <p className="mt-1.5 text-[0.875rem] text-sand/75">
              {professional.title} · {professional.crp}
            </p>
          </address>

          <nav
            aria-label="Links do rodapé"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            <Link
              href="/politica-de-privacidade"
              className="text-[0.8125rem] text-sand/70 transition-colors hover:text-ivory"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-[0.8125rem] text-sand/70 transition-colors hover:text-ivory"
            >
              Termos de Uso
            </Link>
            {externos.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.8125rem] text-sand/70 transition-colors hover:text-ivory"
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="mt-12 border-t border-ivory/12 pt-8 text-[0.75rem] text-sand/45">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
