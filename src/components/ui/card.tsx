import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  interactive = false,
  tone = "light",
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: "light" | "dark";
  /** Turn off when the card holds an edge-to-edge image. */
  padded?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-200 ease-gentle",
        padded && "p-7 sm:p-8",
        tone === "light"
          ? "border border-gold/25 bg-white shadow-soft"
          : "border border-gold/30 bg-forest/40 shadow-inset",
        interactive && "hover:-translate-y-1 hover:border-gold/60 hover:shadow-lifted",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  children,
  className,
  size = "md",
  tone = "solid",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md";
  /** "solid" sits on light backgrounds; "ghost" sits on deep green. */
  tone?: "solid" | "ghost";
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full text-gold ring-1 transition-transform duration-200 ease-gentle",
        tone === "solid" ? "bg-deep ring-gold/40" : "bg-cream/10 ring-gold/50",
        size === "md" ? "h-14 w-14" : "h-11 w-11",
        className,
      )}
    >
      {children}
    </span>
  );
}
