"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Photo } from "@/components/ui/photo";
import type { GalleryItem } from "@/lib/content";
import { cn } from "@/lib/utils";

export function GalleryGrid({
  items,
  columns = 4,
  layout = "grid",
}: {
  items: GalleryItem[];
  columns?: 3 | 4;
  /** CSS-columns masonry uses each photo's natural height. */
  layout?: "grid" | "masonry" | "rows";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const openable = items.map((item, index) => (item.src ? index : -1)).filter((i) => i >= 0);

  const close = useCallback(() => {
    const previous = openIndex;
    setOpenIndex(null);
    if (previous !== null) {
      window.requestAnimationFrame(() => triggerRefs.current[previous]?.focus());
    }
  }, [openIndex]);

  const step = useCallback(
    (direction: 1 | -1) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        const position = openable.indexOf(current);
        if (position === -1) return current;
        const next = (position + direction + openable.length) % openable.length;
        return openable[next];
      });
    },
    [openable],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusable || focusable.length === 0) return;

        const list = Array.from(focusable);
        const current = list.indexOf(document.activeElement as HTMLElement);
        const next = event.shiftKey ? current - 1 : current + 1;

        if (next < 0 || next >= list.length || current === -1) {
          event.preventDefault();
          list[event.shiftKey ? list.length - 1 : 0].focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : items[openIndex];
  const isMasonry = layout === "masonry";
  const isRows = layout === "rows";

  /** Asymmetric 12-col spans for the 2×3 reference layout. */
  const rowSpans = [
    "md:col-span-3",
    "md:col-span-5",
    "md:col-span-4",
    "md:col-span-5",
    "md:col-span-4",
    "md:col-span-3",
  ];

  return (
    <>
      <ul
        className={cn(
          isRows
            ? "grid grid-cols-1 gap-3 auto-rows-[14rem] sm:grid-cols-2 sm:auto-rows-[17rem] sm:gap-3 md:grid-cols-12 md:auto-rows-[18rem] md:gap-3 lg:auto-rows-[20rem] lg:gap-4"
            : isMasonry
              ? "columns-1 gap-0 sm:columns-2"
              : cn(
                  "grid auto-rows-[13rem] grid-flow-row-dense grid-cols-2 gap-4 sm:auto-rows-[15rem] sm:gap-5",
                  columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
                ),
        )}
      >
        {items.map((item, index) => {
          if (isRows) {
            return (
              <li
                key={`${item.label}-${index}`}
                className={cn("min-h-0 min-w-0", rowSpans[index] ?? "md:col-span-4")}
              >
                {item.src ? (
                  <button
                    type="button"
                    ref={(node) => {
                      triggerRefs.current[index] = node;
                    }}
                    onClick={() => setOpenIndex(index)}
                    className="group relative h-full w-full overflow-hidden rounded-2xl bg-sage shadow-soft transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:shadow-lifted"
                  >
                    <span className="sr-only">Enlarge photo: {item.alt}</span>
                    <Photo
                      src={item.src}
                      alt=""
                      placeholderLabel={item.label}
                      sizes="(min-width: 768px) 40vw, 100vw"
                      objectPosition={item.objectPosition ?? "center 22%"}
                      imageClassName="transition-transform duration-500 ease-gentle group-hover:scale-[1.03]"
                    />
                  </button>
                ) : (
                  <div className="h-full overflow-hidden rounded-2xl shadow-soft">
                    <Photo alt={item.alt} placeholderLabel={item.label} />
                  </div>
                )}
              </li>
            );
          }

          if (isMasonry) {
            const aspect = item.tall
              ? "aspect-[3/4]"
              : item.wide
                ? "aspect-[4/3]"
                : "aspect-square";

            return (
              <li key={`${item.label}-${index}`} className="mb-0 break-inside-avoid">
                {item.src ? (
                  <button
                    type="button"
                    ref={(node) => {
                      triggerRefs.current[index] = node;
                    }}
                    onClick={() => setOpenIndex(index)}
                    className={cn(
                      "group relative w-full overflow-hidden transition-opacity duration-200 ease-gentle hover:opacity-95",
                      aspect,
                    )}
                  >
                    <span className="sr-only">Enlarge photo: {item.alt}</span>
                    <Photo
                      src={item.src}
                      alt=""
                      placeholderLabel={item.label}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      imageClassName="transition-transform duration-500 ease-gentle group-hover:scale-[1.03]"
                    />
                  </button>
                ) : (
                  <div className={cn("overflow-hidden", aspect)}>
                    <Photo alt={item.alt} placeholderLabel={item.label} />
                  </div>
                )}
              </li>
            );
          }

          const spanClasses = cn(item.wide && "sm:col-span-2", item.tall && "row-span-2");

          if (!item.src) {
            return (
              <li key={`${item.label}-${index}`} className={spanClasses}>
                <div className="frame-ornate h-full w-full overflow-hidden rounded-2xl border border-gold/25 shadow-soft">
                  <Photo
                    alt={item.alt}
                    placeholderLabel={item.label}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
              </li>
            );
          }

          return (
            <li key={`${item.label}-${index}`} className={spanClasses}>
              <button
                type="button"
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
                onClick={() => setOpenIndex(index)}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-gold/25 shadow-soft transition-all duration-200 ease-gentle hover:-translate-y-1 hover:border-gold/60 hover:shadow-lifted"
              >
                <span className="sr-only">Enlarge photo: {item.alt}</span>
                <Photo
                  src={item.src}
                  alt=""
                  placeholderLabel={item.label}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  objectPosition={item.objectPosition}
                  imageClassName="transition-transform duration-500 ease-gentle group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-end justify-between gap-2 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cream">
                    {item.label}
                  </span>
                  <Expand className="h-4 w-4 text-gold" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {active && active.src ? (
          <motion.div
            key="lightbox"
            ref={dialogRef}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            onClick={close}
          >
            <motion.figure
              className="relative flex max-h-full w-full max-w-4xl flex-col"
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gold/40 bg-deep">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center text-[18px] text-cream/80">
                {active.label}
              </figcaption>
            </motion.figure>

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10 sm:right-8 sm:top-8"
            >
              <span className="sr-only">Close gallery</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {openable.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10 sm:left-6"
                >
                  <span className="sr-only">Previous photo</span>
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10 sm:right-6"
                >
                  <span className="sr-only">Next photo</span>
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
