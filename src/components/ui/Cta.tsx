import { site, CTA_MICRO } from "@/lib/site";

/**
 * Botão principal da página. Todo CTA leva ao Diagnóstico Profissional —
 * a página não vende a Mentoria, ela vende o próximo passo.
 */
export function Cta({
  label,
  variant = "solid",
  className = "",
}: {
  label: string;
  variant?: "solid" | "light" | "outline";
  className?: string;
}) {
  const styles = {
    solid:
      "bg-petrol text-ivory hover:bg-petrol-deep shadow-[0_1px_2px_rgba(7,42,45,0.18),0_12px_28px_-12px_rgba(7,42,45,0.55)]",
    light:
      "bg-ivory text-petrol-deep hover:bg-white shadow-[0_12px_28px_-14px_rgba(0,0,0,0.5)]",
    outline:
      "border border-petrol/25 text-petrol-deep hover:border-petrol/50 hover:bg-petrol/5",
  }[variant];

  return (
    <a
      href={site.diagnosticUrl}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.8125rem] font-medium tracking-[0.08em] uppercase transition-all duration-300 ${styles} ${className}`}
    >
      {label}
      <svg
        viewBox="0 0 20 12"
        aria-hidden="true"
        className="h-2.5 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
      >
        <path
          d="M0 6h18M13 1l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export function CtaMicro({
  text = CTA_MICRO,
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <p className={`text-[0.8125rem] text-graphite-mute ${className}`}>{text}</p>
  );
}
