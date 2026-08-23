import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const centered = align === "center";
  const titleColor = tone === "light" ? "text-ivory" : "text-graphite";
  const eyebrowColor = tone === "light" ? "text-gold-light" : "text-gold";
  const leadColor = tone === "light" ? "text-sand/80" : "text-graphite-soft";

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow ? (
        <Reveal>
          <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
          <span className={`rule-gold mt-5 ${centered ? "mx-auto" : ""}`} />
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2
          className={`display mt-7 text-[2rem] leading-[1.12] sm:text-[2.5rem] md:text-[3rem] ${titleColor}`}
        >
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={160}>
          <div className={`prose-lead mt-6 ${leadColor}`}>{lead}</div>
        </Reveal>
      ) : null}
    </div>
  );
}
