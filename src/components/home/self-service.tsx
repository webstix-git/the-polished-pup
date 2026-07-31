import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { photos } from "@/lib/content";
import { site } from "@/lib/site";

const serviceCards = [
  {
    title: "Full-Service Grooming",
    price: "By appointment",
    description:
      "Drop your dog with us for a bath, cut, and finish. We work one dog at a time — no assembly line.",
    image: photos.fullGroomingYorkie,
    alt: "A Yorkshire Terrier being groomed with a comb and scissors at The Polished Pup",
    href: "/services#full-service",
  },
  {
    title: "Self-Service Wash",
    price: `$${site.selfServicePrice}`,
    description:
      "Raised tubs, shampoo, dryers, and aprons for up to two dogs. Everything's ready when you walk in.",
    image: photos.selfServiceCorgi,
    alt: "A Pembroke Welsh Corgi being rinsed during a self-service wash",
    href: "/services#self-service",
  },
];

export function SelfServiceHighlight() {
  return (
    <Section tone="sage" id="services">
      <Container width="wide">
        <Reveal className="w-full max-w-full sm:max-w-[80%]">
          <Eyebrow>What We Offer</Eyebrow>
          <h2 className="mt-5 text-[1.85rem] font-semibold leading-[1.12] text-deep sm:text-display-sm sm:text-[2.75rem] sm:leading-[1.08]">
            Grooming by appointment. Self-wash when you walk in.
          </h2>
          <p className="mt-4 max-w-prose text-[18px] leading-relaxed text-charcoal/75">
            Need a full groom? Book with us. Prefer to wash your own dog? Our stations are set up
            with tubs, shampoo, and dryers so you can get it done without the mess at home.
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
