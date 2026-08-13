import { ArrowRight } from "lucide-react";

import { GalleryGrid } from "@/components/gallery-grid";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { homeGalleryItems } from "@/lib/content";

export function GalleryPreview() {
  return (
    <Section tone="cream" className="bg-grain">
      <Container width="wide">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="mt-5 text-[1.85rem] font-semibold text-deep sm:text-display-sm sm:text-[2.75rem] sm:leading-[1.08]">
              Dogs and decor
            </h2>
            <p className="mt-4 max-w-prose text-[18px] leading-relaxed text-charcoal/75">
              Freshly groomed dogs, happy pups, and a few corners of the shop that make it feel like
              somewhere you&rsquo;d actually want to hang around.
            </p>
          </div>
          <ButtonLink href="/gallery" variant="greenOutline" className="w-full shrink-0 sm:w-auto">
            View the gallery
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 sm:mt-12">
          <GalleryGrid items={homeGalleryItems} layout="rows" />
        </Reveal>
      </Container>
    </Section>
  );
}
