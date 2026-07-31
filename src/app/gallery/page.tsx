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
    "A look inside The Polished Pup in South Haven — freshly groomed dogs, our wash room, and the space we built for locals and visitors.",
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
        lede="Freshly washed pups, the wash room in action, and the small details that make the shop feel like somewhere you want to linger."
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
