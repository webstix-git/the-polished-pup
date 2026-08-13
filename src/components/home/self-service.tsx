import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { photos } from "@/lib/content";

const serviceCards = [
  {
    title: "Full-Service Grooming",
    description:
      "Drop your dog with us for a bath, cut, and finish. We work one dog at a time — no assembly line.",
    image: photos.fullGroomingYorkie,
    alt: "A Yorkshire Terrier being groomed with a comb and scissors at The Polished Pup",
    href: "/services#full-service",
  },
  {
    title: "Self-Service Wash",
    description:
      "Raised tubs, shampoo, dryers, and aprons for up to two dogs. Everything's ready when you walk in.",
    image: photos.dalmatianTub,
    alt: "A happy Dalmatian standing in a stainless steel self-service wash tub at The Polished Pup",
    href: "/services#self-service",
    objectPosition: "center 22%",
  },
];

export function SelfServiceHighlight() {
  return (
    <Section tone="sage" id="services">
      <Container width="wide">
        <Reveal className="w-full max-w-full sm:max-w-[80%]">
          <Eyebrow>What We Offer</Eyebrow>
          <h2 className="mt-5 text-[1.85rem] font-semibold leading-[1.12] text-deep sm:text-display-sm sm:text-[2.75rem] sm:leading-[1.08]">
            Professional grooming by appointment. Self-wash available for walk-ins.
          </h2>
          <p className="mt-4 max-w-prose text-[18px] leading-relaxed text-charcoal/75">
            Need a full groom? Book with us. Prefer to wash your own dog? Our stations are set up
            with tubs, shampoo, and dryers so you can skip the mess at home.
          </p>
        </Reveal>

        <Stagger as="ul" className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-14">
          {serviceCards.map((item) => (
            <StaggerItem as="li" key={item.title} className="group h-full">
              <Link
                href={item.href}
                className="flex h-full flex-col overflow-hidden rounded-4xl border border-gold/30 bg-white shadow-soft transition-all duration-300 ease-gentle hover:-translate-y-1.5 hover:border-gold/55 hover:shadow-lifted"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Photo
                    src={item.image}
                    alt={item.alt}
                    placeholderLabel={item.title}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    objectPosition={item.objectPosition}
                    imageClassName="transition-transform duration-500 ease-gentle group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-7 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-deep">{item.title}</h3>
                  <p className="text-[18px] leading-relaxed text-charcoal/75">{item.description}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-[18px] font-medium text-forest transition-colors duration-200 group-hover:text-deep">
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
