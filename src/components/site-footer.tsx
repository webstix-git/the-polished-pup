import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { address, contact, hours, hoursNotes, legalLinks, navigation, site, socials } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-deep bg-bubbles-soft text-cream">
      <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <Container width="wide">
        <div className="grid gap-y-12 pt-16 pb-10 sm:grid-cols-2 sm:gap-x-10 sm:pt-20 sm:pb-12 lg:grid-cols-[1.25fr_0.85fr_1.05fr_1.45fr] lg:gap-x-12 xl:gap-x-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="footer" tone="light" href="/" />
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-cream/75">
              Full-service grooming and self-service washing for dogs and cats in South Haven,
              Michigan. Locals and visitors welcome.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <p className="text-[16px] font-medium text-cream">Follow Us On:</p>
              <div className="flex items-center gap-3">
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-200 hover:bg-gold hover:text-deep"
                >
                  <span className="sr-only">The Polished Pup on Facebook</span>
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-200 hover:bg-gold hover:text-deep"
                >
                  <span className="sr-only">The Polished Pup on Instagram</span>
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-base font-semibold text-gold-light">Explore</h2>
            <ul className="mt-5 space-y-1 text-[16px]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-0.5 text-cream/80 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base font-semibold text-gold-light">Hours</h2>
            <ul className="mt-5 space-y-2.5 text-[16px] text-cream/80">
              {hours.map((entry) => (
                <li key={entry.label} className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="min-w-[5.5rem] font-medium text-cream">{entry.label}</span>
                  <span>{entry.display}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-1.5 text-[16px] leading-snug text-cream/60">
              {hoursNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-gold-light">Find Us</h2>
            <address className="mt-5 space-y-4 text-[16px] not-italic text-cream/80">
              <a
                href={address.mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-start gap-3 transition-colors hover:text-gold-light"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {address.street}
                  <br />
                  {address.city}, {address.region} {address.postalCode}
                </span>
              </a>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-gold-light"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center gap-3 break-all transition-colors hover:text-gold-light sm:break-normal"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {contact.email}
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-cream/10 py-4 text-center text-[14px] leading-relaxed text-cream/65 sm:py-5">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>
              &copy; {year} {site.name}. All rights reserved.
            </span>
            {legalLinks.map((item) => (
              <span key={item.href} className="inline-flex items-center gap-x-2">
                <span aria-hidden="true" className="text-cream/35">
                  |
                </span>
                <Link
                  href={item.href}
                  className="underline decoration-cream/35 underline-offset-2 transition-colors hover:text-gold-light hover:decoration-gold-light"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}
