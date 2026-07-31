"use client";

import Image from "next/image";
import { PawPrint } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type PhotoProps = {
  src?: string;
  alt: string;
  /** Shown in the placeholder so the client knows which photo belongs in this slot. */
  placeholderLabel?: string;
  className?: string;
  imageClassName?: string;
  /** CSS object-position for face-safe crops. */
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Fills its parent. Falls back to a branded placeholder when a photo slot is
 * still empty or the file has not been dropped in yet.
 */
export function Photo({
  src,
  alt,
  placeholderLabel,
  className,
  imageClassName,
  objectPosition,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-sage", className)}>
      {showPlaceholder ? (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-sage via-cream to-gold-light/40 p-6 text-center"
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
          aria-hidden={alt ? undefined : true}
        >
          <PawPrint className="h-8 w-8 text-forest/50" aria-hidden="true" strokeWidth={1.5} />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest/70">
            {placeholderLabel ?? "Photo coming soon"}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          onError={() => setFailed(true)}
          className={cn("object-cover", imageClassName)}
          style={objectPosition ? { objectPosition } : undefined}
        />
      )}
    </div>
  );
}
