/**
 * Marca "Legado" — motivo de travessia: duas margens unidas por um arco.
 * Herda a cor do texto (currentColor), então funciona em fundo claro e escuro.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <path
        d="M12 31c0-9.5 5.4-14.5 12-14.5S36 21.5 36 31"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 31v-5.5M36 31v-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="12.5" r="1.9" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Mark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="display text-[1.0625rem] tracking-[0.02em]">Mentoria Legado</span>
        <span className="eyebrow mt-1 text-[0.5625rem] opacity-60">Moisés Barbosa</span>
      </span>
    </span>
  );
}
