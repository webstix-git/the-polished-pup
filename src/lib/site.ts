/**
 * Single source of truth for business details.
 * Everything the client is likely to change (hours, phone, socials, pricing)
 * lives here so no one has to hunt through components.
 */

export const site = {
  name: "The Polished Pup",
  legalName: "The Polished Pup",
  tagline: "Where every pup leaves polished.",
  shortDescription:
    "Full-service dog grooming and spa care, plus Southwest Michigan's only self-service dog wash, in South Haven.",
  url: "https://thepolishedpupboutique.com",
  logo: "/images/the-polished-pup-logo.png",
  priceRange: "$$",
  selfServicePrice: 25,
} as const;

export const contact = {
  phone: "(269) 767-8725",
  phoneHref: "tel:+12697678725",
  email: "info@thepolishedpupboutique.com",
  emailHref: "mailto:info@thepolishedpupboutique.com",
} as const;

export const address = {
  street: "352 Blue Star Highway",
  city: "South Haven",
  region: "MI",
  regionName: "Michigan",
  postalCode: "49090",
  country: "US",
  full: "352 Blue Star Highway, South Haven, MI 49090",
  /** Approximate — refine with the exact pin from Google Business Profile. */
  geo: { latitude: 42.3722, longitude: -86.2794 },
  mapsEmbedSrc:
    "https://www.google.com/maps?q=352+Blue+Star+Highway,+South+Haven,+MI+49090&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=352+Blue+Star+Highway,+South+Haven,+MI+49090",
} as const;

export type OpeningHours = {
  label: string;
  /** Schema.org day abbreviations used for JSON-LD. */
  days: string[];
  opens: string | null;
  closes: string | null;
  display: string;
};

/**
 * Self-service room hours. Professional grooming is by appointment.
 */
export const hours: OpeningHours[] = [
  {
    label: "Mon – Sun",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "21:00",
    display: "7:00 am – 9:00 pm",
  },
];

export const hoursNotes = [
  "Self-service rooms.",
  "Grooming by appointment.",
] as const;

export const socials = {
  facebook: "https://www.facebook.com/people/The-Polished-Pup/61585844408274/",
  instagram: "https://www.instagram.com/thepolishedpupboutique",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalLinks = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "AI Policy", href: "/ai-policy" },
  { label: "AI Readiness Service Index", href: "/ai-readiness-service-index" },
] as const;
