/**
 * Ícones de linha para os itens de entrega da Mentoria (seção "Como funciona").
 * Todos em 24×24, traço fino, currentColor — a cor vem do wrapper (ver TONES).
 */

const common = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  "aria-hidden": true,
};

export function IconCalendar({ className = "" }: { className?: string }) {
  return (
    <svg {...common} className={className}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 9.5h16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 3.5v3.5M16 3.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 13.5l2 2 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMagnifier({ className = "" }: { className?: string }) {
  return (
    <svg {...common} className={className}>
      <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 15l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.8 10.5h2.2m0 0h2.2m-2.2 0V8.3m0 2.2v2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function IconRoute({ className = "" }: { className?: string }) {
  return (
    <svg {...common} className={className}>
      <circle cx="5.5" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 7.8v3.2a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v1.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconTarget({ className = "" }: { className?: string }) {
  return (
    <svg {...common} className={className}>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconMegaphone({ className = "" }: { className?: string }) {
  return (
    <svg {...common} className={className}>
      <path
        d="M4 10.5v3a1 1 0 0 0 1 1h1.4L9 18.5a1 1 0 0 0 1.9-.4v-13a1 1 0 0 0-1.9-.4L6.4 9.5H5a1 1 0 0 0-1 1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M13.5 8.5c1 1 1 6 0 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16.5 6.5c2 2 2 9 0 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconTag({ className = "" }: { className?: string }) {
  return (
    <svg {...common} className={className}>
      <path
        d="M12.4 4h5.1a1 1 0 0 1 1 1v5.1a1 1 0 0 1-.3.7l-8.4 8.4a1 1 0 0 1-1.4 0l-4.7-4.7a1 1 0 0 1 0-1.4l8.4-8.4a1 1 0 0 1 .7-.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="9" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconWrench({ className = "" }: { className?: string }) {
  return (
    <svg {...common} className={className}>
      <path
        d="M14.7 9.3a4 4 0 0 1-5.35 4.75L5 18.4l-1.4-1.4 4.35-4.35A4 4 0 0 1 12.7 6.3l-2.35 2.35 1.4 1.4 2.35-2.35 .6.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconTrendUp({ className = "" }: { className?: string }) {
  return (
    <svg {...common} className={className}>
      <path d="M4 16.5 9.5 11l3.5 3 6-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 7h3.5v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Quatro tons — dois verdes, dois dourados — em rodízio pelos 8 itens. */
export const ENTREGA_TONES = [
  "bg-petrol/10 text-petrol",
  "bg-gold/15 text-gold",
  "bg-petrol-soft/10 text-petrol-soft",
  "bg-gold-deep/15 text-gold-deep",
];
