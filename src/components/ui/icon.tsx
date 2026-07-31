import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Maps our content icon keys to Flaticon Uicons regular-rounded class names.
 * @see https://www.flaticon.com/uicons
 * @see https://www.flaticon.com/search?word=service&type=uicon
 */
const registry = {
  Bath: "bath",
  Camera: "camera",
  Clock: "clock",
  Droplets: "shower",
  Gift: "gift",
  Heart: "heart",
  Hotel: "hotel",
  MapPin: "map-marker",
  PawPrint: "paw",
  ShieldCheck: "shield-check",
  Scissors: "scissors",
  Sparkles: "sparkles",
  Stethoscope: "ear",
  Store: "shop",
  Trees: "tree",
  Users: "users",
  UtensilsCrossed: "utensils",
  Wind: "dryer",
  CustomerService: "customer-service",
  Soap: "soap",
  Brush: "brush",
  Toothbrush: "toothbrush",
  HairClipper: "hair-clipper",
  Spa: "spa",
  Dog: "dog",
} as const;

/** Custom Flaticon-style PNGs (gold-tinted). */
const imageRegistry = {
  UspSelfService: "/images/icons/usp-self-service.png",
  UspCare: "/images/icons/usp-care.png",
  UspClean: "/images/icons/usp-clean.png",
  UspSouthHaven: "/images/icons/usp-south-haven.png",
  AboutCommunity: "/images/icons/about-value-community.png",
  AboutWelcome: "/images/icons/about-value-welcome.png",
  AboutCare: "/images/icons/about-value-care.png",
} as const;

export type IconName = keyof typeof registry | keyof typeof imageRegistry;

function sizeFromClassName(className?: string) {
  if (!className) return 24;
  if (/\bh-5\b/.test(className) || /\bw-5\b/.test(className)) return 20;
  if (/\bh-7\b/.test(className) || /\bw-7\b/.test(className)) return 28;
  if (/\bh-8\b/.test(className) || /\bw-8\b/.test(className)) return 32;
  if (/\bh-10\b/.test(className) || /\bw-10\b/.test(className)) return 40;
  if (/\bh-12\b/.test(className) || /\bw-12\b/.test(className)) return 48;
  if (/\bh-14\b/.test(className) || /\bw-14\b/.test(className)) return 56;
  return 24;
}

/** Translate Tailwind size utilities into font-size for the Uicons glyph. */
function fontSizeFromClassName(className?: string) {
  return `${sizeFromClassName(className) / 16}rem`;
}

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
  /** Kept for call-site compatibility with the previous Lucide Icon API. */
  strokeWidth?: number;
}) {
  const imageSrc = imageRegistry[name as keyof typeof imageRegistry];

  if (imageSrc) {
    const size = sizeFromClassName(className);
    return (
      <Image
        src={imageSrc}
        alt=""
        width={size}
        height={size}
        className={cn("object-contain", className)}
        aria-hidden="true"
      />
    );
  }

  const icon = registry[name as keyof typeof registry] ?? "paw";
  // Class must start with `fi-rr-` for the Uicons stylesheet selector.
  const glyphClass = `fi-rr-${icon}`;

  return (
    <i
      className={`${glyphClass} ${cn("inline-flex items-center justify-center leading-none", className)}`}
      style={{ fontSize: fontSizeFromClassName(className) }}
      aria-hidden="true"
    />
  );
}
