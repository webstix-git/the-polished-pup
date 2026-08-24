import { AboutTeaser } from "@/components/home/about-teaser";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { HomeHero } from "@/components/home/hero";
import { SelfServiceHighlight } from "@/components/home/self-service";
import { VisitBand } from "@/components/visit-band";
import { pageMetadata } from "@/lib/seo";
import { UspStrip } from "@/components/home/usp-strip";

export const metadata = {
  ...pageMetadata({
    title: "Full-Service Grooming & Self-Service Dog Wash in South Haven, MI.",
    description:
      "Full-service grooming and a self-service dog wash — $25 for up to two dogs — in South Haven, MI.",
    path: "/",
  }),
  verification: {
    google: "gIuqxGmj3MWgQwToR_Er3SZg7WN7AU02vYSIE535DBE",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SelfServiceHighlight />
      <AboutTeaser />
      <UspStrip />
      <GalleryPreview />
      <VisitBand media="photo" />
    </>
  );
}
