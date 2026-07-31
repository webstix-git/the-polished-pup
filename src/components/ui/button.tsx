import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "gold" | "goldOutline" | "green" | "greenOutline";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-gentle disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  gold: "bg-gold text-deep shadow-soft hover:bg-gold-light hover:shadow-lifted active:translate-y-px",
  goldOutline:
    "border border-gold text-gold hover:bg-gold hover:text-deep active:translate-y-px",
  green:
    "bg-deep text-cream shadow-soft hover:bg-forest hover:shadow-lifted active:translate-y-px",
  greenOutline: "border border-deep/25 text-deep hover:border-deep hover:bg-deep hover:text-cream",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-2.5 text-[18px]",
  lg: "px-8 py-3.5 text-[18px]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "green",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "green",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
