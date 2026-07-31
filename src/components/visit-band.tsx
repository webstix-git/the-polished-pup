import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { photos } from "@/lib/content";
import { contact } from "@/lib/site";

/**
 * Closing CTA — intentionally light on NAP details (those live in the footer).
 * Full-bleed photo band with left-aligned copy, matching the reference layout.
 */
export function VisitBand({ media = "photo" }: { media?: "map" | "photo" }) {
  return (
    <Section tone="sage" size="compact">
      <Container width="wide">
        <Reveal>
          <div className="relative isolate min-h-[24rem] overflow-hidden rounded-3xl border border-gold/30 shadow-lifted sm:min-h-[28rem] sm:rounded-4xl lg:min-h-[32rem]">
            {media === "map" ? (
              <iframe
                title="Google map showing The Polished Pup"
                src="https://www.google.com/maps?q=352+Blue+Star+Highway,+South+Haven,+MI+49090&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />
            ) : (
              <div className="absolute inset-0">
                <Photo
                  src={photos.ctaCorgi}
                  alt="A small dog being trimmed by a groomer at The Polished Pup"
                  placeholderLabel="Book a wash"
                  sizes="100vw"
                  objectPosition="62% 38%"
                  imageClassName="object-cover"
                />
              </div>
            )}

            {/* Scrim: full wash on mobile, darker L→R on larger screens (matches hero) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgb(17_44_33/0.94)_0%,rgb(15_38_29/0.88)_45%,rgb(13_30_23/0.8)_100%)] md:bg-[linear-gradient(90deg,#0f271d_0%,#10281e_28%,rgb(17_43_32/0.92)_42%,rgb(15_37_27/0.47)_58%,rgb(13_30_23/0.07)_72%,transparent_88%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f271d]/50 via-transparent to-[#0f271d]/30"
            />

            <div className="relative flex min-h-[24rem] items-end px-5 py-10 sm:min-h-[28rem] sm:items-center sm:px-12 sm:py-14 lg:min-h-[32rem] lg:px-16 lg:py-16">
              <div className="max-w-xl text-cream">
                <p className="inline-flex items-center rounded-full border border-cream/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream">
                  Ready when you are
                </p>

                <h2 className="mt-5 text-[1.85rem] font-semibold leading-[1.1] sm:mt-6 sm:text-display-sm sm:leading-[1.08] md:text-[2.6rem]">
                  Bring your pup in for a{" "}
                  <span className="text-gold-light">wash or a groom</span>
                </h2>

                <p className="mt-4 max-w-md text-[17px] leading-relaxed text-cream/85 sm:mt-5 sm:text-[18px]">
                  Walk in for the self-service wash, or call to book a full-service appointment.
                  We&rsquo;ll take care of your dog either way.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
                  <ButtonLink
                    href={contact.phoneHref}
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Call {contact.phone}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink
                    href="/contact-us"
                    variant="goldOutline"
                    size="lg"
                    className="w-full border-cream/50 text-cream hover:border-gold hover:bg-gold hover:text-deep sm:w-auto"
                  >
                    Send a message
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
