import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";
import { Photo } from "@/components/ui/photo";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/content";

export function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}) {
  const crumbs =
    breadcrumbs ??
    ([
      { name: "Home", path: "/" },
      { name: eyebrow },
    ] satisfies Crumb[]);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-deep pb-16 pt-[108px] text-cream sm:pb-24 sm:pt-[152px] lg:pt-[196px]">
        <div className="absolute inset-0">
          <Photo
            src={photos.pageHeroBg}
            alt=""
            placeholderLabel="Page banner"
            sizes="100vw"
            priority
            objectPosition="78% 42%"
            imageClassName="object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="page-hero__overlay pointer-events-none absolute inset-0"
        />

        <Container width="wide" className="relative">
          <Reveal className="max-w-3xl">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h1 className="mt-5 text-[2rem] font-semibold leading-[1.1] sm:text-display-sm md:text-display-md">
              {title}
            </h1>
            <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-cream/85 sm:text-lg">
              {lede}
            </p>
            {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
          </Reveal>
        </Container>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </section>

      <div className="border-b border-gold/20 bg-cream">
        <Container width="wide" className="py-3.5 sm:py-4">
          <Breadcrumbs items={crumbs} tone="dark" />
        </Container>
      </div>
    </>
  );
}
