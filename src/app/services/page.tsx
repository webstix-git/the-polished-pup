import { ArrowRight, Check, Cat, PawPrint } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { VisitBand } from "@/components/visit-band";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { fullServiceItems, photos, selfServiceFeatures } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { contact, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Full-Service Grooming & $25 Self-Service Wash",
  description:
    "Dog and cat grooming by appointment, plus a $25 self-service wash for up to two dogs, at The Polished Pup in South Haven, Michigan.",
  path: "/services",
});

export default function ServicesPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Services"
        title="Wash your dog yourself, or leave the grooming to us."
        lede="Self-service wash stations for $25, or full-service grooming by appointment — both in our South Haven shop."
      >
        <ButtonLink href="#full-service" variant="gold" size="lg">
          Full-service grooming
        </ButtonLink>
        <ButtonLink href="#self-service" variant="goldOutline" size="lg">
          Self-service &mdash; ${site.selfServicePrice}
        </ButtonLink>
      </PageHero>

      <Section tone="cream" id="self-service" className="bg-grain scroll-mt-[110px] lg:scroll-mt-[160px]">
        <Container width="wide">
          <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="h-full">
              <div className="relative h-full pb-6 sm:pb-8">
                <div className="frame-ornate relative h-full min-h-[26rem] overflow-hidden rounded-4xl border border-gold/35 shadow-lifted sm:min-h-[32rem] lg:min-h-[38rem]">
                  <Photo
                    src={photos.selfServiceHappy}
                    alt="A happy wet golden dog being rinsed in a stainless steel wash tub at The Polished Pup"
                    placeholderLabel="Self-service wash"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    objectPosition="center 35%"
                  />
                </div>

                <div className="absolute bottom-0 left-4 z-10 max-w-[11.5rem] rounded-2xl border border-gold/45 bg-deep px-5 py-4 shadow-lifted sm:left-6 sm:max-w-[12.5rem] sm:px-6 sm:py-5">
                  <p className="mt-0 text-[18px] font-semibold leading-snug text-cream">
                    <span className="block text-gold-light">${site.selfServicePrice}</span>
                    flat rate &middot; up to two dogs
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>Self-Service</Eyebrow>
              <h2 className="mt-5 font-display text-display-sm font-semibold text-deep sm:text-[2.75rem] sm:leading-[1.08]">
                Self-Service Wash
              </h2>

              <p className="mt-5 max-w-prose text-[18px] leading-relaxed text-charcoal/75">
                Wash, rinse, and dry up to two dogs in one visit. Stations come stocked, and we
                clean up when you&rsquo;re finished — no scrubbing your own tub at home.
              </p>

              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {selfServiceFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[18px] text-charcoal/80"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="deep" id="full-service" className="bg-bubbles-soft scroll-mt-[110px] lg:scroll-mt-[160px]">
        <Container width="wide">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <Eyebrow tone="light">Full-Service</Eyebrow>
              <h2 className="mt-5 font-display text-display-sm font-semibold sm:text-[2.75rem] sm:leading-[1.08]">
                Full-Service Grooming &amp; Spa
              </h2>
              <p className="mt-5 max-w-prose text-[18px] leading-relaxed text-cream/80">
                Prefer not to wash your dog yourself? Book a groom and we&rsquo;ll handle the rest —
                one dog at a time, at their pace.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="frame-ornate relative aspect-[4/3] overflow-hidden rounded-4xl border border-gold/35 shadow-lifted">
                <Photo
                  src={photos.galleryBed}
                  alt="A black French Bulldog and a German Shepherd sharing a round cream dog bed"
                  placeholderLabel="Full-service grooming"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  objectPosition="center 38%"
                />
              </div>
            </Reveal>
          </div>

          <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fullServiceItems.map((item) => (
              <StaggerItem as="li" key={item.title} className="group h-full">
                <div className="flex h-full flex-col rounded-2xl border border-cream/15 bg-cream/[0.06] p-7 transition-all duration-200 ease-gentle hover:-translate-y-1 hover:border-gold/45 hover:bg-cream/10 sm:p-8">
                  <span
                    aria-hidden="true"
                    className="mb-5 block h-px w-10 bg-gold/70 transition-all duration-200 group-hover:w-14"
                  />
                  <h3 className="font-display text-xl font-semibold text-cream">{item.title}</h3>
                  <p className="mt-3 text-[18px] leading-relaxed text-cream/70">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 rounded-2xl border border-gold/35 bg-forest/30 p-7 text-center sm:flex-row sm:gap-6 sm:p-8 sm:text-left">
              <p className="flex flex-col items-center gap-3 text-cream sm:flex-row sm:gap-4">
                <span className="inline-flex shrink-0 items-center gap-1.5 text-gold">
                  <PawPrint className="h-5 w-5" aria-hidden="true" strokeWidth={1.6} />
                  <Cat className="h-5 w-5" aria-hidden="true" strokeWidth={1.6} />
                </span>
                <span className="text-base leading-relaxed">
                  <span className="font-semibold">We groom dogs and cats.</span>{" "}
                  <span className="text-cream/75">
                    Call ahead so we can pick a quieter time.
                  </span>
                </span>
              </p>
              <ButtonLink href={contact.phoneHref} variant="gold" className="shrink-0">
                Call {contact.phone}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="sage">
        <Container width="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow>Good to know</Eyebrow>
            <h2 className="mt-5 font-display text-display-sm font-semibold text-deep">
              Before your first visit
            </h2>
          </Reveal>

          <Stagger as="ul" className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "No appointment for the wash room",
                body: "Self-service is walk-in. First come, first served. Weekday mornings are usually quieter.",
              },
              {
                title: "Bring your dog on a leash",
                body: "We provide towels, aprons, shampoo, and dryers. You bring the dog.",
              },
              {
                title: "Grooming is by appointment",
                body: "Call or send a message and we'll find a time that works.",
              },
            ].map((item) => (
              <StaggerItem as="li" key={item.title}>
                <Card className="h-full">
                  <h3 className="font-display text-lg font-semibold text-deep">{item.title}</h3>
                  <p className="mt-2 text-[18px] leading-relaxed text-charcoal/75">{item.body}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <VisitBand />
    </>
  );
}
