import { ArrowRight, Phone } from "lucide-react";

import { Photo } from "@/components/ui/photo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/content";
import { contact } from "@/lib/site";

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
        className="relative flex min-h-[min(100svh,56rem)] items-center"
      >
        <Reveal className="w-full max-w-xl py-16 pt-[100px] sm:py-20 sm:pt-[120px] lg:max-w-2xl lg:py-28 lg:pt-[148px] xl:pt-[220px]">
          <Eyebrow tone="light">South Haven, Michigan</Eyebrow>

          <h1 className="mt-5 text-[2rem] font-semibold leading-[1.08] sm:mt-6 sm:text-display-sm sm:leading-[1.05] md:text-display-lg lg:text-display-xl">
            Where Every Pup
            <span className="block text-gold-light">Leaves Polished</span>
          </h1>

          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-cream/90 sm:mt-6 sm:text-[18px]">
            Book a full groom when you want it done for you. Use the self-service wash when
            you&rsquo;d rather handle it yourself. Both under one roof in South Haven.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="/services" variant="gold" size="lg" className="w-full sm:w-auto">
              See our services
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={contact.phoneHref}
              variant="goldOutline"
              size="lg"
              className="w-full border-cream/50 text-cream hover:border-gold hover:bg-gold hover:text-deep sm:w-auto xl:hidden"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {contact.phone}
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
