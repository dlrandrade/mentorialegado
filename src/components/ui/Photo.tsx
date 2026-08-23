"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { MonoMark } from "./Mark";

/**
 * Fotografia com degradação elegante.
 *
 * O arquivo é lido diretamente de /public — basta soltar a imagem com o nome
 * esperado em `public/images/` e ela aparece, sem nenhuma alteração de código.
 * Enquanto o arquivo não existir, exibimos um painel sóbrio com a marca no
 * lugar de uma imagem quebrada.
 */
export function Photo({
  src,
  alt,
  ratio = "4 / 5",
  priority = false,
  className = "",
  tone = "sand",
  focal = "50% 22%",
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
  tone?: "sand" | "petrol";
  /** object-position — a maioria dos retratos ganha com um enquadramento levemente voltado para cima. */
  focal?: string;
}) {
  const [failed, setFailed] = useState(false);

  /**
   * A imagem é renderizada no servidor, então um 404 costuma acontecer antes da
   * hidratação e o evento `onError` se perde — deixando o texto alternativo à
   * mostra. O callback de ref roda logo após o commit e flagra esse caso:
   * uma imagem já concluída com largura natural zero é uma imagem quebrada.
   */
  const detectBroken = (node: HTMLImageElement | null) => {
    if (node && node.complete && node.naturalWidth === 0) setFailed(true);
  };

  const toneClasses =
    tone === "petrol"
      ? "bg-petrol-deep text-sand"
      : "bg-ivory-deep text-petrol";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {failed ? (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-3 ${toneClasses}`}
          role="img"
          aria-label={alt}
        >
          <MonoMark className="h-10 w-10 opacity-45" />
          {process.env.NODE_ENV !== "production" ? (
            <span className="eyebrow px-6 text-center text-[0.5rem] opacity-50">
              {src.replace("/images/", "")}
            </span>
          ) : null}
        </div>
      ) : (
        <img
          ref={detectBroken}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="h-full w-full object-cover"
          style={{ objectPosition: focal }}
        />
      )}
    </div>
  );
}
