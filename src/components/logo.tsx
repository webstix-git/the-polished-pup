"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * The badge artwork is a tall crest (479x619). Its own lettering is unreadable at
 * navigation sizes, so it is paired with a text wordmark rather than replacing it.
 */
const variants = {
  header: {
    mark: "h-[52px] sm:h-[72px] lg:h-[100px] xl:h-[140px]",
    gap: "gap-2.5 sm:gap-3 lg:gap-3 xl:gap-4",
    name: "text-[0.95rem] sm:text-xl lg:text-[1.35rem] xl:text-[1.7rem]",
    sub: "text-[0.5rem] sm:text-[0.58rem] lg:text-[0.6rem] xl:text-[0.66rem] tracking-[0.28em] sm:tracking-[0.3em]",
  },
  headerCompact: {
    mark: "h-[44px] sm:h-[52px] lg:h-[56px] xl:h-[64px]",
    gap: "gap-2 sm:gap-2.5 lg:gap-3",
    name: "text-sm sm:text-base lg:text-lg xl:text-xl",
    sub: "text-[0.48rem] sm:text-[0.55rem] lg:text-[0.58rem] tracking-[0.26em] sm:tracking-[0.28em]",
  },
  menu: {
    mark: "h-[56px] sm:h-[64px]",
    gap: "gap-2.5 sm:gap-3",
    name: "text-lg sm:text-xl",
    sub: "text-[0.55rem] sm:text-[0.58rem] tracking-[0.3em]",
  },
  footer: {
    mark: "h-[96px] sm:h-[128px]",
    gap: "gap-3 sm:gap-4",
    name: "text-[16px]",
    sub: "text-[0.64rem] tracking-[0.3em]",
  },
} as const;

type LogoProps = {
  variant?: keyof typeof variants;
  className?: string;
  tone?: "dark" | "light";
  withWordmark?: boolean;
  href?: string | null;
  priority?: boolean;
  /** Shrinks the header mark while scrolled — only used with variant="header". */
  compact?: boolean;
};

export function Logo({
  variant = "header",
  className,
  tone = "dark",
  withWordmark = true,
  href = "/",
  priority = false,
  compact = false,
}: LogoProps) {
  const [failed, setFailed] = useState(false);
  const resolved = variant === "header" && compact ? "headerCompact" : variant;
  const styles = variants[resolved];

  const content = (
    <span
      className={cn(
        "flex items-center transition-[gap] duration-300 ease-gentle",
        styles.gap,
        className,
      )}
    >
      {failed ? null : (
        <span
          className={cn(
            "block shrink-0 transition-[height] duration-300 ease-gentle",
            styles.mark,
          )}
          aria-hidden="true"
        >
          <Image
            src={site.logo}
            alt=""
            width={240}
            height={310}
            priority={priority}
            onError={() => setFailed(true)}
            className="h-full w-auto object-contain"
          />
        </span>
      )}
      <span
        className={cn(
          "min-w-0 leading-none",
          withWordmark ? "flex flex-col gap-1 sm:gap-1.5" : "sr-only",
          tone === "dark" ? "text-deep" : "text-cream",
        )}
      >
        <span
          className={cn(
            "font-semibold tracking-tight transition-[font-size] duration-300 ease-gentle",
            styles.name,
          )}
        >
          The Polished Pup
        </span>
        <span
          className={cn(
            "font-semibold uppercase transition-[font-size] duration-300 ease-gentle",
            styles.sub,
            tone === "dark" ? "text-forest/80" : "text-gold-light",
          )}
        >
          Dog Wash
        </span>
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="min-w-0 rounded-lg" aria-label={`${site.name} — home`}>
      {content}
    </Link>
  );
}
