import { LegalPageShell } from "@/components/legal-page-shell";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { contact, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects information when you visit our website or contact us.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPageShell
        eyebrow="Privacy Policy"
        title="How we handle your information"
        lede="What we collect when you use this site or get in touch, and what we do with it."
      >
        <p>Last updated: July 30, 2026</p>

        <h2>Who we are</h2>
        <p>
          {site.legalName} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates {site.url} and our dog wash
          and grooming business in South Haven, Michigan.
        </p>

        <h2>Information we collect</h2>
        <p>We may collect:</p>
        <ul>
          <li>Contact details you send us (name, email, phone, message content)</li>
          <li>Basic technical data such as browser type, device, and pages visited</li>
          <li>Analytics data used to understand how the site is used</li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>To answer questions and schedule services</li>
          <li>To keep the website working and understand which pages get used</li>
          <li>To send updates or promotions only if you asked for them</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Our site may use cookies or similar tools to measure traffic and improve performance. You
          can control cookies through your browser settings.
        </p>

        <h2>Sharing</h2>
        <p>
          We do not sell personal information. We may share information with trusted service
          providers who help us operate the website or business, only as needed to provide those
          services.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={contact.emailHref}>{contact.email}</a> or call{" "}
          <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      </LegalPageShell>
    </>
  );
}
