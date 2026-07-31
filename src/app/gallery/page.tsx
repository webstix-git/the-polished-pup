import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { VisitBand } from "@/components/visit-band";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { galleryItems } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery of Dogs & Decor",
  description:
    "Photos from inside The Polished Pup in South Haven — wash room days, grooms in progress, and the shop itself.",
  path: "/gallery",
});

export default function GalleryPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Gallery"
        title="Dogs and decor"
        lede="Clean dogs, the wash room at work, and a few shop details from our spot on Blue Star Highway."
      />

      <Section tone="cream" className="bg-grain">
        <Container width="wide">
          <Reveal>
            <GalleryGrid items={galleryItems} />
          </Reveal>
        </Container>
      </Section>

      <VisitBand />
    </>
  );
}
