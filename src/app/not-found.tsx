import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-gradient-to-br from-forest/45 via-deep to-deep pb-24 pt-[150px] text-cream lg:pt-[200px]">
      <Container width="narrow" className="text-center">
        <Eyebrow tone="light" align="center">
          404
        </Eyebrow>
        <h1 className="mt-6 font-display text-display-sm font-semibold sm:text-display-md">
          This page isn&rsquo;t here
        </h1>
        <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-cream/80">
          The link may be old, or the page moved. Head home, or reach us on Blue Star Highway.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="gold" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact-us" variant="goldOutline" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
