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
          This page slipped out of the tub
        </h1>
        <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-cream/80">
          We could not find the page you were after. Head back to the start, or come see us on Blue
          Star Highway.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="gold" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="goldOutline" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
