import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "dark",
  align = "left",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-forest" : "text-gold-light",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span className="rule-gold" aria-hidden="true" />
      {children}
      {align === "center" ? <span className="rule-gold" aria-hidden="true" /> : null}
    </p>
  );
}
