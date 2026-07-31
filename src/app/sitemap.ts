import type { MetadataRoute } from "next";

import { legalLinks, navigation, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const main = navigation.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const legal = legalLinks.map((item) => ({
    url: `${site.url}${item.href}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...main, ...legal];
}
