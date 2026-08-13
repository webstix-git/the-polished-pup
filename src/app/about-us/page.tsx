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
    "How The Polished Pup got started in South Haven — full-service grooming and a well-equipped self-service dog wash.",
  path: "/about-us",
});

export default function AboutPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
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
        title="Self-service washing and grooming, made easy."
        lede="We're a small South Haven shop. Getting your dog clean should be straightforward — and a little easier than doing the wash in your bathtub."
      />

      <Section tone="cream" className="bg-grain">
        <Container width="wide">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <Reveal>
              <Eyebrow>How it started</Eyebrow>
              <h2 className="mt-5 text-display-sm font-semibold text-deep sm:text-[2.6rem] sm:leading-[1.1]">
                It started with wanting a better wash room
              </h2>

              <div className="mt-6 space-y-5 text-[18px] leading-relaxed text-charcoal/75">
                <p>
                  Southwest Michigan had self-service dog washes, but the options weren&rsquo;t always
                  convenient or well-equipped. We wanted to create a clean, comfortable space with
                  the quality equipment and flexibility dog owners deserve.
                </p>
                <p>
                  So we built it with raised tubs that make bath time easier on your back, powerful
                  dryers that get the job done, and a team that&rsquo;s happy to welcome your
                  dog&mdash;from a puppy&rsquo;s first bath to a fourteen-year-old who likes the
                  water a little warmer.
                </p>
                <p>
                  Now that same room sees weekend visitors from the lake and regulars who come in
                  every other Saturday. Same welcome either way.
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
              How we run the shop
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
              In town with your dog? These local links help with lodging, parks, dining, and a live
              look at the beach.
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
                    Visit site
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
