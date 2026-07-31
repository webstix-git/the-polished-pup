import Link from "next/link";

import { cn } from "@/lib/utils";

export type Crumb = {
  name: string;
  path?: string;
};

export function Breadcrumbs({
  items,
  tone = "light",
  className,
}: {
  items: Crumb[];
  tone?: "light" | "dark";
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("text-[15px]", className)}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1",
          tone === "light" ? "text-cream/70" : "text-charcoal/60",
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.name}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className={tone === "light" ? "text-cream/40" : "text-charcoal/35"}>
                  /
                </span>
              ) : null}
              {item.path && !isLast ? (
                <Link
                  href={item.path}
                  className={cn(
                    "transition-colors",
                    tone === "light" ? "hover:text-gold-light" : "hover:text-forest",
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={tone === "light" ? "text-cream" : "text-deep"}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
