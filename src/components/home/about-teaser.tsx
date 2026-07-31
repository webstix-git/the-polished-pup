import { ArrowRight, Star } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { photos } from "@/lib/content";

export function AboutTeaser() {
  return (
    <Section tone="deep" className="bg-bubbles-soft overflow-hidden">
      <Container width="wide">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <Reveal className="flex h-full flex-col justify-center">
            <Eyebrow tone="light">Our Story</Eyebrow>
            <h2 className="mt-5 text-[1.85rem] font-semibold leading-[1.12] sm:text-display-sm sm:text-[2.75rem] sm:leading-[1.08]">
              We built the place we wished South Haven already had
            </h2>
            <p className="mt-6 max-w-prose text-[18px] leading-relaxed text-cream/80">
              The Polished Pup started with a simple observation &mdash; Southwest Michigan had
              nowhere to wash your own dog. We figured if we needed it, our neighbours probably did
              too.
            </p>
            <p className="mt-4 max-w-prose text-[18px] leading-relaxed text-cream/70">
              So we built a place where locals and visitors alike feel like it was made just for
              them: warm, unhurried and genuinely happy to see your dog walk through the door.
            </p>
            <div className="mt-9">
              <ButtonLink href="/about" variant="gold" size="lg">
                Read our story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="h-full min-h-[20rem] lg:min-h-[36rem]">
            <div className="relative flex h-full flex-col pb-6 sm:pb-8">
              <div className="frame-ornate relative min-h-[20rem] flex-1 overflow-hidden rounded-3xl border border-gold/35 shadow-lifted sm:rounded-4xl lg:min-h-[36rem]">
                <Photo
                  src={photos.selfServiceSuds}
                  alt="A wet German Shepherd standing in a stainless steel wash tub at The Polished Pup"
                  placeholderLabel="Wash station"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  objectPosition="center 18%"
                />
              </div>

              <div className="absolute bottom-0 left-4 z-10 max-w-[12.5rem] rounded-2xl border border-deep/15 bg-gold px-5 py-4 shadow-lifted sm:left-6 sm:max-w-[13.5rem] sm:px-6 sm:py-5">
                <Star
                  className="h-4 w-4 text-deep"
                  aria-hidden="true"
                  strokeWidth={1.6}
                  fill="currentColor"
                />
                <p className="mt-2 text-[17px] font-semibold leading-snug text-deep">
                  <span className="block">Built for locals</span>
                  and lake-town visitors alike
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
