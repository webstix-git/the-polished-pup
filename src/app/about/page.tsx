import { ArrowRight, ExternalLink } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { VisitBand } from "@/components/visit-band";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";
import { Photo } from "@/components/ui/photo";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { petFriendlyPlaces, photos, values } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { address, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Our South Haven Dog Wash & Grooming Spa",
  description:
    "The Polished Pup opened to fill a gap in South Haven — full-service grooming and spa care, plus the area's only self-service wash, for locals and visitors alike.",
  path: "/about",
});

export default function AboutPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="About Us"
        title="A neighbourhood wash room with a grooming spa attached"
        lede="We are a small South Haven business built around one belief: caring for your dog should feel easy, unhurried and genuinely welcoming — for both of you."
      />

      <Section tone="cream" className="bg-grain">
        <Container width="wide">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <Reveal>
              <Eyebrow>How it started</Eyebrow>
              <h2 className="mt-5 text-display-sm font-semibold text-deep sm:text-[2.6rem] sm:leading-[1.1]">
                It began with a gap nobody had filled
              </h2>

              <div className="mt-6 space-y-5 text-[18px] leading-relaxed text-charcoal/75">
                <p>
                  The Polished Pup started with a simple observation &mdash; Southwest Michigan had
                  nowhere to wash your own dog. We figured if we needed it, our neighbours probably
                  did too.
                </p>
                <p>
                  So we built a place where locals and visitors alike feel like it was made just for
                  them. Raised tubs instead of sore backs. Professional dryers instead of a hallway
                  full of wet fur. Someone on hand who is glad to see your dog, whether it is a
                  puppy on its first bath or a fourteen-year-old who needs the water a little
                  warmer.
                </p>
                <p>
                  Today that same room serves weekend visitors down from the lake and regulars who
                  come in every other Saturday. Both get the same welcome.
                </p>
              </div>

              <div className="mt-10">
                <ButtonLink href="/services" variant="green" size="lg">
                  See what we offer
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="frame-ornate relative aspect-[4/5] overflow-hidden rounded-4xl border border-gold/35 shadow-lifted">
                <Photo
                  src={photos.shopDog}
                  alt="A German shepherd relaxing on a blanket in the lounge area of The Polished Pup"
                  placeholderLabel="Inside the shop"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="deep" className="bg-bubbles-soft">
        <Container width="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light">What we stand for</Eyebrow>
            <h2 className="mt-5 text-display-sm font-semibold sm:text-[2.6rem] sm:leading-[1.1]">
              Three things we refuse to rush
            </h2>
          </Reveal>

          <Stagger as="ul" className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <StaggerItem as="li" key={value.title} className="group h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-cream/15 bg-cream/[0.06] p-7 transition-all duration-200 ease-gentle hover:-translate-y-1 hover:border-gold/50 hover:bg-cream/10 sm:p-8">
                  <Icon
                    name={value.icon}
                    className="h-12 w-12 transition-transform duration-200 ease-gentle group-hover:scale-105"
                  />
                  <h3 className="text-xl font-semibold text-cream">{value.title}</h3>
                  <p className="text-[18px] leading-relaxed text-cream/70">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="sage">
        <Container width="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow>Around town</Eyebrow>
            <h2 className="mt-5 text-display-sm font-semibold text-deep sm:text-[2.6rem] sm:leading-[1.1]">
              Pet Friendly Places and Beach Cam
            </h2>
            <p className="mt-4 max-w-prose text-[18px] leading-relaxed text-charcoal/75">
              Planning a day in South Haven with your dog? These local spots make it easier —
              from beaches and dining to the live beach cam.
            </p>
          </Reveal>

          <Stagger as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {petFriendlyPlaces.map((place) => (
              <StaggerItem as="li" key={place.title} className="group h-full">
                <a
                  href={place.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-full flex-col justify-between gap-3 rounded-2xl border border-gold/25 bg-white p-5 shadow-soft transition-all duration-200 ease-gentle hover:-translate-y-1 hover:border-gold/55 hover:shadow-lifted sm:p-6"
                >
                  <span className="text-[17px] font-semibold leading-snug text-deep">
                    {place.title}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[15px] font-medium text-forest">
                    Visit link
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="cream" size="compact" className="bg-grain">
        <Container width="wide">
          <Reveal>
            <figure className="relative mx-auto max-w-3xl py-4 text-center sm:py-6">
              <span
                aria-hidden="true"
                className="mx-auto mb-8 block h-px w-16 bg-gold"
              />

              <blockquote>
                <p className="font-display text-[1.85rem] font-semibold leading-[1.25] text-deep sm:text-[2.4rem] sm:leading-[1.2] lg:text-[2.75rem]">
                  {site.tagline.replace(/\.$/, "")}
                  <span className="text-gold">.</span>
                </p>
              </blockquote>

              <figcaption className="mt-8 text-[15px] font-semibold uppercase tracking-[0.22em] text-forest">
                {site.name}
                <span className="mx-2.5 text-gold/70" aria-hidden="true">
                  &middot;
                </span>
                {address.city}, {address.regionName}
              </figcaption>

              <span
                aria-hidden="true"
                className="mx-auto mt-8 block h-px w-16 bg-gold"
              />
            </figure>
          </Reveal>
        </Container>
      </Section>

      <VisitBand />
    </>
  );
}
