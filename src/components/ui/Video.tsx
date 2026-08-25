"use client";

import { useState } from "react";

/**
 * Vídeo com degradação elegante — mesma filosofia do componente `Photo`.
 *
 * Basta soltar o arquivo em `public/videos/` com o nome esperado; nenhuma
 * alteração de código é necessária. Enquanto o arquivo não existir, exibimos
 * um painel sóbrio com um ícone de play no lugar de um player quebrado.
 */
export function Video({
  src,
  poster,
  ratio = "16 / 9",
  className = "",
}: {
  src: string;
  poster?: string;
  ratio?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  /**
   * Um 404 costuma acontecer antes da hidratação e o evento `onError` se
   * perde. O callback de ref roda logo após o commit e flagra esse caso.
   */
  const detectBroken = (node: HTMLVideoElement | null) => {
    if (!node) return;
    const timer = setTimeout(() => {
      if (node.error || node.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        setFailed(true);
      }
    }, 400);
    return () => clearTimeout(timer);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {failed ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4 bg-petrol-deep text-sand"
          role="img"
          aria-label="Vídeo em breve"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-1 h-5 w-5 fill-gold">
              <path d="M6 4.5v15l14-7.5-14-7.5Z" />
            </svg>
          </span>
          {process.env.NODE_ENV !== "production" ? (
            <span className="eyebrow px-6 text-center text-[0.5rem] opacity-50">
              {src.replace("/videos/", "")}
            </span>
          ) : null}
        </div>
      ) : (
        <video
          ref={detectBroken}
          src={src}
          poster={poster}
          controls
          preload="metadata"
          onError={() => setFailed(true)}
          className="h-full w-full bg-petrol-deep object-cover"
        >
          Seu navegador não suporta a reprodução deste vídeo.
        </video>
      )}
    </div>
  );
}
