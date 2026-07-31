import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
}) {
  const widths = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  return (
    <div className={cn("mx-auto w-full px-4 sm:px-8", widths[width], className)}>{children}</div>
  );
}
