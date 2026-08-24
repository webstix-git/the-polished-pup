import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { BackToTop } from "@/components/back-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

import "@flaticon/flaticon-uicons/css/regular/rounded.css";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const GA_MEASUREMENT_ID = "G-YLQC17M8CD";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Polished Pup | Full-Service Grooming & Self-Service Dog Wash in South Haven, MI",
    template: "%s | The Polished Pup",
  },
  description: site.shortDescription,
  keywords: [
    "dog grooming South Haven",
    "full-service pet grooming Southwest Michigan",
    "self-service dog wash South Haven",
    "dog wash near me",
    "pet grooming South Haven MI",
    "cat grooming South Haven",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/images/the-polished-pup-logo.png", type: "image/png" }],
    apple: [{ url: "/images/the-polished-pup-logo.png", type: "image/png" }],
    shortcut: "/images/the-polished-pup-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B4332",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-dvh bg-cream font-sans text-[18px] leading-relaxed text-charcoal antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
