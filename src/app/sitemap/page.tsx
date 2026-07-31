import Link from "next/link";

import { LegalPageShell } from "@/components/legal-page-shell";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { legalLinks, navigation, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Sitemap",
  description: `Browse every page on ${site.name} — services, about, gallery, contact, and policies.`,
  path: "/sitemap",
});

export default function SitemapPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Sitemap", path: "/sitemap" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPageShell
        eyebrow="Sitemap"
        title="Site map"
        lede={`Every public page on ${site.name}.`}
      >
        <h2>Main pages</h2>
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <h2>Policies &amp; indexes</h2>
        <ul>
          {legalLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </LegalPageShell>
    </>
  );
}
