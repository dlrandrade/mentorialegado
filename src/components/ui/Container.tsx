import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
}) {
  const max =
    width === "narrow" ? "max-w-3xl" : width === "wide" ? "max-w-[88rem]" : "max-w-6xl";
  return <div className={`mx-auto w-full ${max} px-6 md:px-10 ${className}`}>{children}</div>;
}
