import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { photos } from "@/lib/content";
import { site } from "@/lib/site";

const previews = [
  {
    title: "Full-Service Grooming",
    price: "By appointment",
    description:
      "Drop your dog with us for a bath, cut, and finish — one dog at a time.",
    image: photos.fullGroomingYorkie,
    alt: "A Yorkshire Terrier being groomed with a comb and scissors at The Polished Pup",
    href: "/services#full-service",
  },
  {
    title: "Self-Service Wash",
    price: `$${site.selfServicePrice}`,
    description:
      "Raised tubs, shampoo, dryers, and aprons — stocked and ready when you walk in.",
    image: photos.dalmatianTub,
    alt: "A happy Dalmatian standing in a stainless steel self-service wash tub at The Polished Pup",
    href: "/services#self-service",
  },
];

export function ServicesPreview() {
  return (
    <Section tone="cream">
      <Container width="wide">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>What We Offer</Eyebrow>
            <h2 className="mt-5 text-display-sm font-semibold text-deep sm:text-[2.75rem] sm:leading-[1.08]">
              Two ways to get your dog clean
            </h2>
            <p className="mt-4 max-w-prose text-[18px] leading-relaxed text-charcoal/75">
              Use the wash room yourself, or book a groom and leave the grooming to us.
            </p>
          </div>
          <ButtonLink href="/services" variant="greenOutline" className="shrink-0">
            All services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </Reveal>

        <Stagger as="ul" className="mt-14 grid gap-8 md:grid-cols-2">
          {previews.map((item) => (
            <StaggerItem as="li" key={item.title} className="group h-full">
              <Link
                href={item.href}
                className="flex h-full flex-col overflow-hidden rounded-4xl border border-gold/25 bg-white shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1.5 hover:border-gold/55 hover:shadow-lifted"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Photo
                    src={item.image}
                    alt={item.alt}
                    placeholderLabel={item.title}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    imageClassName="transition-transform duration-500 ease-gentle group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-gold/50 bg-deep/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold-light backdrop-blur-sm">
                    {item.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-7 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-deep">{item.title}</h3>
                  <p className="text-[18px] leading-relaxed text-charcoal/75">{item.description}</p>
                  <span className="link-underline mt-auto pt-2 text-[18px] font-medium text-forest group-hover:text-deep">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
