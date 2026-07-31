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
    body: "Phone, email, and form messages are handled by our staff. AI may help draft a reply; a person reviews it before it goes out.",
  },
  {
    title: "Website content",
    body: "Services, hours, and location on this site are maintained by the business. AI may help with drafts; we check the details before publishing.",
  },
  {
    title: "Scheduling & services",
    body: "Self-service wash and grooming appointments run through our normal shop process. AI does not book or cancel visits on its own.",
  },
  {
    title: "Privacy & data",
    body: "Contact details you share are used to help you and run the business. See our Privacy Policy for more.",
  },
  {
    title: "Transparency",
    body: "This page and our AI Policy spell out where tools may help and where people stay in charge.",
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
        title="Where AI fits in our work"
        lede={`A plain look at how ${site.name} uses AI-assisted tools — and where it does not.`}
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
