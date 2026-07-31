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
        lede="Where AI might help behind the scenes — and where people still make the calls."
      >
        <p>Last updated: July 30, 2026</p>

        <h2>Our approach</h2>
        <p>
          {site.name} may use AI tools to draft website text, organize notes, or speed up internal
          work. Pricing, services, and how we treat your dog are still decided by our team.
        </p>

        <h2>Where AI may be used</h2>
        <ul>
          <li>Drafting or editing website text and layout ideas</li>
          <li>Helping staff draft replies (we review before anything is sent)</li>
          <li>Basic analytics and content organization</li>
        </ul>

        <h2>Where AI is not used</h2>
        <ul>
          <li>Making veterinary or medical decisions about pets</li>
          <li>Confirming bookings on its own when a person needs to approve them</li>
          <li>Selling your data to train unrelated third-party AI products</li>
        </ul>

        <h2>Human oversight</h2>
        <p>
          What goes on this site and what we send customers is checked by people at {site.name}. If
          AI helps draft something, we are still responsible for it.
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
