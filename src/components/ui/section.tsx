import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Tone = "cream" | "sage" | "white" | "deep";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-charcoal",
  sage: "bg-sage text-charcoal",
  white: "bg-white text-charcoal",
  deep: "bg-deep text-cream",
};

export function Section({
  children,
  className,
  tone = "cream",
  as: Tag = "section",
  id,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  as?: ElementType;
  id?: string;
  size?: "default" | "compact" | "roomy";
}) {
  const sizes = {
    compact: "py-12 sm:py-16",
    default: "py-14 sm:py-24",
    roomy: "py-16 sm:py-32",
  };

  return (
    <Tag id={id} className={cn("relative", tones[tone], sizes[size], className)}>
      {children}
    </Tag>
  );
}
