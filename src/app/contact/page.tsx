import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { faqs } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { address, contact, hours, hoursNotes, socials } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact & Directions in South Haven, MI",
  description:
    "Visit The Polished Pup at 352 Blue Star Highway, South Haven, MI 49090. Call (269) 767-8725 for full-service grooming or self-service wash questions.",
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd]) }}
      />

      <PageHero
        eyebrow="Contact"
        title="Come say hello on Blue Star Highway"
        lede="Questions about full-service grooming, a nervous pup, or the self-service wash? Call, email, or send a note — a real person reads every message."
      />

      <Section tone="cream" className="bg-grain">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Business details</Eyebrow>
              <h2 className="mt-5 font-display text-display-sm font-semibold text-deep">
                Find us, call us, write to us
              </h2>

              <dl className="mt-9 space-y-7">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                      Address
                    </dt>
                    <dd className="mt-1 text-charcoal/80">
                      <a
                        href={address.mapsDirectionsUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-underline"
                      >
                        {address.street}, {address.city}, {address.region} {address.postalCode}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                      Phone
                    </dt>
                    <dd className="mt-1 text-charcoal/80">
                      <a href={contact.phoneHref} className="link-underline">
                        {contact.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                      Email
                    </dt>
                    <dd className="mt-1 break-all text-charcoal/80">
                      <a href={contact.emailHref} className="link-underline">
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                      Hours
                    </dt>
                    <dd className="mt-1 space-y-1 text-charcoal/80">
                      {hours.map((entry) => (
                        <p key={entry.label}>
                          <span className="font-medium text-charcoal">{entry.label}:</span>{" "}
                          {entry.display}
                        </p>
                      ))}
                      <div className="mt-3 space-y-1 text-[15px] text-charcoal/60">
                        {hoursNotes.map((note) => (
                          <p key={note}>{note}</p>
                        ))}
                      </div>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                  Follow along
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gold/40 px-5 text-[18px] font-medium text-deep transition-colors duration-200 hover:bg-deep hover:text-cream"
                  >
                    <Facebook className="h-4 w-4" aria-hidden="true" />
                    Facebook
                  </a>
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-gold/40 px-5 text-[18px] font-medium text-deep transition-colors duration-200 hover:bg-deep hover:text-cream"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    Instagram
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="shadow-lifted">
                <h2 className="font-display text-2xl font-semibold text-deep">Send a message</h2>
                <p className="mt-2 text-[18px] text-charcoal/70">
                  Fields marked with an asterisk are required.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="sage" size="compact">
        <Container width="wide">
          <Reveal>
            <div className="overflow-hidden rounded-4xl border border-gold/30 shadow-lifted">
              <iframe
                title={`Google map showing The Polished Pup at ${address.full}`}
                src={address.mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full sm:h-[30rem]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="cream">
        <Container width="narrow">
          <Reveal>
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="mt-5 font-display text-display-sm font-semibold text-deep">
              Before you get in touch
            </h2>
          </Reveal>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.05}>
                <details className="group rounded-2xl border border-gold/25 bg-white p-6 shadow-soft transition-colors duration-200 open:border-gold/50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-deep marker:hidden">
                    {faq.question}
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-charcoal/75">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
