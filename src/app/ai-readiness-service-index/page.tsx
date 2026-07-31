import { LegalPageShell } from "@/components/legal-page-shell";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { contact, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "AI Readiness Service Index",
  description: `An index of how ${site.name} evaluates AI readiness across customer communication, content, and operations.`,
  path: "/ai-readiness-service-index",
});

const indexItems = [
  {
    title: "Customer communication",
    body: "Inquiries by phone, email, and web form are handled by staff. AI may assist with drafting, but replies are reviewed before they go out.",
  },
  {
    title: "Website content",
    body: "Public pages describing services, hours, and location are maintained by the business. AI tools may support drafting; published details are verified locally.",
  },
  {
    title: "Scheduling & services",
    body: "Self-service wash access and grooming appointments follow our in-shop process. AI does not automatically book or cancel visits without human involvement.",
  },
  {
    title: "Privacy & data",
    body: "Contact details shared with us are used for service and communication. See our Privacy Policy for collection and use practices.",
  },
  {
    title: "Transparency",
    body: "This index and our AI Policy explain where automation may help and where people remain accountable.",
  },
];

export default function AiReadinessServiceIndexPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "AI Readiness Service Index", path: "/ai-readiness-service-index" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPageShell
        eyebrow="AI Readiness Service Index"
        title="Service readiness at a glance"
        lede={`How ${site.name} approaches AI-assisted tools across the ways we serve pet owners online and in the shop.`}
      >
        <p>Last updated: July 30, 2026</p>

        {indexItems.map((item) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}

        <h2>Related pages</h2>
        <ul>
          <li>
            <a href="/ai-policy">AI Policy</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>

        <p>
          Questions? Email <a href={contact.emailHref}>{contact.email}</a> or call{" "}
          <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      </LegalPageShell>
    </>
  );
}
