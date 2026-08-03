import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Thank You | Contact",
    description: "Thanks for contacting The Polished Pup. We will get in touch with you shortly.",
    path: "/contact-us/thank-you",
  }),
  robots: { index: false, follow: true },
};

export default function ContactThankYouPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact – Thank You"
        lede="Thanks for contacting us! We will get in touch with you shortly."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact-us" },
          { name: "Thank You" },
        ]}
      />

      <Section tone="cream" className="bg-grain">
        <Container width="narrow">
          <Reveal className="text-center">
            <p className="text-[18px] leading-relaxed text-charcoal/80 sm:text-lg">
              Thanks for contacting us! We will get in touch with you shortly.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/" variant="green" size="lg">
                Back to home
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/services" variant="greenOutline" size="lg">
                See our services
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
