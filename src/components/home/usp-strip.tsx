import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Icon } from "@/components/ui/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { usps } from "@/lib/content";

export function UspStrip() {
  return (
    <Section tone="sage" size="compact">
      <Container width="wide">
        <Reveal className="max-w-full sm:max-w-[80%]">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-5 text-[1.85rem] font-semibold leading-[1.12] text-deep sm:text-display-sm sm:text-[2.6rem] sm:leading-[1.1]">
            What people come here for
          </h2>
          <p className="mt-4 max-w-prose text-[18px] leading-relaxed text-charcoal/75">
            The self-service wash most shops don&rsquo;t have, plus grooming that doesn&rsquo;t rush
            your dog. Built for South Haven and the folks who visit from around the lake.
          </p>
        </Reveal>

        <Stagger as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <StaggerItem as="li" key={usp.title} className="group h-full">
              <Card interactive className="flex h-full flex-col gap-4">
                <Icon
                  name={usp.icon}
                  className="h-12 w-12 transition-transform duration-200 ease-gentle group-hover:scale-105"
                />
                <h3 className="font-display text-xl font-semibold text-deep">{usp.title}</h3>
                <p className="text-[18px] leading-relaxed text-charcoal/75">{usp.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
