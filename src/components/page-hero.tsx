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
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(27,67,50,0.94)_0%,rgba(27,67,50,0.88)_35%,rgba(27,67,50,0.78)_70%,rgba(27,67,50,0.82)_100%)] md:bg-[linear-gradient(90deg,#1b4332_0%,rgba(27,67,50,0.94)_36%,rgba(27,67,50,0.62)_55%,rgba(27,67,50,0.22)_74%,transparent_90%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(to_bottom,rgba(27,67,50,0.92)_0%,rgba(27,67,50,0.72)_14%,rgba(27,67,50,0.35)_28%,transparent_48%)] md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent"
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
