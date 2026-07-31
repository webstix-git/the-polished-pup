import type { Metadata } from "next";

import { address, contact, hours, site, socials } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: site.logo, width: 479, height: 619, alt: `${site.name} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.logo],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PetGroomer",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.shortDescription,
    url: site.url,
    logo: `${site.url}${site.logo}`,
    image: `${site.url}${site.logo}`,
    telephone: contact.phone,
    email: contact.email,
    priceRange: site.priceRange,
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: address.geo.latitude,
      longitude: address.geo.longitude,
    },
    hasMap: address.mapsDirectionsUrl,
    areaServed: [
      { "@type": "City", name: "South Haven" },
      { "@type": "AdministrativeArea", name: "Southwest Michigan" },
    ],
    openingHoursSpecification: hours
      .filter((entry) => entry.opens && entry.closes)
      .map((entry) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: entry.days,
        opens: entry.opens,
        closes: entry.closes,
      })),
    sameAs: [socials.facebook, socials.instagram],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Self-Service Dog Wash",
        description:
          "Raised tubs, shampoo, dryers, brushes, and aprons for up to two dogs per visit.",
        price: String(site.selfServicePrice),
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Full-Service Grooming & Spa",
        description:
          "Full grooms, bath and brush, nail trims, ear cleaning, teeth brushing, de-shedding, and spa add-ons for dogs and cats.",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
