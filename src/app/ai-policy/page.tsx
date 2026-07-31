import { LegalPageShell } from "@/components/legal-page-shell";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { contact, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "AI Policy",
  description: `How ${site.name} uses artificial intelligence tools in website content, support, and operations.`,
  path: "/ai-policy",
});

export default function AiPolicyPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "AI Policy", path: "/ai-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPageShell
        eyebrow="AI Policy"
        title="How we use AI"
        lede="A clear statement of where artificial intelligence may support our website and business — and where people remain responsible."
      >
        <p>Last updated: July 30, 2026</p>

        <h2>Our approach</h2>
        <p>
          {site.name} may use AI-assisted tools to draft website copy, organize information, or
          improve internal workflows. Final decisions about services, pricing, and customer care
          remain with our team.
        </p>

        <h2>Where AI may be used</h2>
        <ul>
          <li>Drafting or refining website text and layout ideas</li>
          <li>Helping staff summarize messages or prepare replies (reviewed before sending)</li>
          <li>Supporting analytics and content structure</li>
        </ul>

        <h2>Where AI is not used</h2>
        <ul>
          <li>Making medical or veterinary decisions about pets</li>
          <li>Automatically approving bookings without human confirmation when required</li>
          <li>Selling customer data to train unrelated third-party AI products</li>
        </ul>

        <h2>Human oversight</h2>
        <p>
          Content published on this site and responses to customer inquiries are reviewed by people
          at {site.name}. If AI helps draft material, we are responsible for what we publish and
          send.
        </p>

        <h2>Questions</h2>
        <p>
          Reach us at <a href={contact.emailHref}>{contact.email}</a> or{" "}
          <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      </LegalPageShell>
    </>
  );
}
