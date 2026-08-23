/**
 * Marca da Mentoria Legado.
 *
 * `Mark` mostra o símbolo real, nas suas cores originais (petróleo + dourado),
 * usado onde a marca precisa ser reconhecível — o lockup do cabeçalho.
 *
 * `MonoMark` deriva do mesmo arquivo via CSS mask, virando um glifo de uma cor
 * só que herda `currentColor`. Serve para os usos decorativos espalhados pela
 * página (rodapé, ícones de seção), inclusive sobre fundos escuros, onde a
 * versão colorida perderia contraste porque o verde do símbolo se mistura ao
 * verde-petróleo do fundo.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/simbolo-legado.png"
      alt=""
      aria-hidden="true"
      className={`object-contain ${className}`}
    />
  );
}

export function MonoMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: "url(/brand/simbolo-legado.png)",
        maskImage: "url(/brand/simbolo-legado.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Mark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="display text-[1.0625rem] tracking-[0.02em]">Mentoria Legado</span>
        <span className="eyebrow mt-1 text-[0.5625rem] opacity-60">Moisés Barbosa</span>
      </span>
    </span>
  );
}
