import type { ReactNode } from "react";

import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function LegalPageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} />
      <Section tone="cream" className="bg-grain">
        <Container width="narrow">
          <Reveal>
            <div className="space-y-8 text-[18px] leading-relaxed text-charcoal/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-deep [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-deep [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-deep">
              {children}
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
