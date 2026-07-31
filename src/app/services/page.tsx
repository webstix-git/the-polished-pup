import { ArrowRight, Check, Cat, PawPrint, Star } from "lucide-react";

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
    "Full-service dog and cat grooming, bath and brush, nail trims, de-shedding and spa treatments — plus a $25 self-service wash for up to two dogs — in South Haven, Michigan.",
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
        title="Wash it yourself, or leave it with us"
        lede="Full-service grooming and spa care, and a stocked self-service wash room for $25 — two clear options under one roof in South Haven."
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
                  <Star
                    className="h-4 w-4 text-gold"
                    aria-hidden="true"
                    strokeWidth={1.6}
                    fill="currentColor"
                  />
                  <p className="mt-2 text-[18px] font-semibold leading-snug text-cream">
                    <span className="block text-gold-light">${site.selfServicePrice}</span>
                    flat rate &middot; up to two dogs
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>Tier One</Eyebrow>
              <h2 className="mt-5 font-display text-display-sm font-semibold text-deep sm:text-[2.75rem] sm:leading-[1.08]">
                Self-Service Grooming
              </h2>

              <p className="mt-5 max-w-prose text-[18px] leading-relaxed text-charcoal/75">
                Everything you need to wash, rinse and dry your dog &mdash; up to two pups per
                visit. Our stations are stocked and sanitised, so you skip the setup and the
                scrubbing of your own tub afterward.
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
              <Eyebrow tone="light">Tier Two</Eyebrow>
              <h2 className="mt-5 font-display text-display-sm font-semibold sm:text-[2.75rem] sm:leading-[1.08]">
                Full-Service Grooming &amp; Spa
              </h2>
              <p className="mt-5 max-w-prose text-[18px] leading-relaxed text-cream/80">
                Prefer to hand off the leash? Our groomers give every dog patient, one-on-one
                attention.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="frame-ornate relative aspect-[4/3] overflow-hidden rounded-4xl border border-gold/35 shadow-lifted">
                <Photo
                  src={photos.fullGroomingYorkie}
                  alt="A Yorkshire Terrier being groomed with a comb and scissors at The Polished Pup"
                  placeholderLabel="Full-service grooming"
                  sizes="(min-width: 1024px) 40vw, 100vw"
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
            <div className="mt-12 flex flex-col gap-6 rounded-2xl border border-gold/35 bg-forest/30 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="flex items-center gap-4 text-cream">
                <span className="inline-flex shrink-0 items-center gap-1.5 text-gold">
                  <PawPrint className="h-5 w-5" aria-hidden="true" strokeWidth={1.6} />
                  <Cat className="h-5 w-5" aria-hidden="true" strokeWidth={1.6} />
                </span>
                <span className="text-base leading-relaxed">
                  <span className="font-semibold">We groom both dogs and cats.</span>{" "}
                  <span className="text-cream/75">
                    Call ahead and we&rsquo;ll plan a calm, well-timed slot.
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

          <Stagger as="ul" className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "No appointment for the wash room",
                body: "Self-service stations are first come, first served. Weekday mornings are usually the quietest.",
              },
              {
                title: "Bring a leash and a towel-friendly dog",
                body: "We supply towels, aprons, shampoo and dryers. You only need to bring the pup.",
              },
              {
                title: "Nervous or senior dogs are welcome",
                body: "Tell us what your dog finds difficult and we'll slow the session down and add breaks.",
              },
              {
                title: "Grooming runs by appointment",
                body: "Call or send a message and we'll find a time that suits your dog's routine.",
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
