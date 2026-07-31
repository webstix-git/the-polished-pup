import { ArrowRight } from "lucide-react";

import { Photo } from "@/components/ui/photo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/content";

export function HomeHero() {
  return (
    <section className="home-hero relative isolate min-h-[min(100svh,56rem)] overflow-hidden bg-deep text-cream">
      {/* Full-bleed photo — focal point shifted to the right */}
      <div className="absolute inset-0">
        <Photo
          src={photos.heroWash}
          alt="A Pembroke Welsh Corgi in a soapy wash tub at The Polished Pup"
          placeholderLabel="Hero photo"
          priority
          sizes="100vw"
          imageClassName="home-hero__image object-cover"
        />
      </div>

      {/* Dark green → transparent: backs left copy + transparent header nav */}
      <div aria-hidden="true" className="home-hero__overlay pointer-events-none absolute inset-0" />

      <Container
        width="wide"
        className="relative flex min-h-[min(100svh,56rem)] items-end sm:items-center"
      >
        <Reveal className="w-full max-w-xl pb-14 pt-[96px] sm:pb-20 sm:pt-[132px] lg:max-w-2xl lg:pb-28 lg:pt-[168px]">
          <Eyebrow tone="light">South Haven, Michigan</Eyebrow>

          <h1 className="mt-5 text-[2rem] font-semibold leading-[1.08] sm:mt-6 sm:text-display-sm sm:leading-[1.05] md:text-display-lg lg:text-display-xl">
            Where Every Pup
            <span className="block text-gold-light">Leaves Polished</span>
          </h1>

          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-cream/90 sm:mt-6 sm:text-[18px]">
            Full-service grooming when you want it handled for you. Self-service washing when
            you&rsquo;d rather do it yourself. One shop in South Haven for both.
          </p>

          <div className="mt-8 sm:mt-9">
            <ButtonLink href="/services" variant="gold" size="lg" className="w-full sm:w-auto">
              See Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Reveal>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </section>
  );
}
