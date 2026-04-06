import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import type { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Ashnafai",
  description:
    "Terms of Service for Ashnafai — Digital Intelligence Studio. Your rights and obligations when using our services.",
  openGraph: {
    title: "Terms of Service — Ashnafai",
    description: "Terms governing your use of Ashnafai services.",
  },
};

const sections: LegalSection[] = [
  {
    num: "01",
    title: "Acceptance of Terms",
    content: (
      <div className="legal-body">
        <p>
          By accessing or using any services provided by Ashnafai (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;) at ashnafai.com or any of its subdomains, you agree to be bound by these Terms of
          Service. If you do not agree to these terms, please do not use our services.
        </p>
        <p>
          We reserve the right to update these terms at any time. Continued use of our services after
          any changes constitutes your acceptance of the new terms.
        </p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Services",
    content: (
      <div className="legal-body">
        <p>
          Ashnafai provides digital services including but not limited to website design, marketing
          automation, AI chatbot development, SEO strategy, brand identity, and business consulting.
          The specific scope of services for each client is defined in individual agreements or proposals.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any service at any time without
          prior notice.
        </p>
      </div>
    ),
  },
  {
    num: "03",
    title: "User Obligations",
    content: (
      <div className="legal-body">
        <p>By using our services, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information when requested</li>
          <li>Use our services only for lawful purposes</li>
          <li>Not attempt to gain unauthorized access to any part of our systems</li>
          <li>Not use our services to transmit harmful, offensive, or illegal content</li>
          <li>Not reverse engineer, copy, or redistribute our proprietary systems or content</li>
        </ul>
      </div>
    ),
  },
  {
    num: "04",
    title: "Payments & Fees",
    content: (
      <div className="legal-body">
        <p>
          All fees for services are outlined in individual client agreements. Payment terms, accepted
          methods, and refund policies are specified at the time of engagement. Ashnafai reserves the
          right to suspend services in the event of non-payment.
        </p>
        <p>
          For subscription-based services such as trade signal access, fees are charged on a recurring
          basis as agreed. Cancellations must be made prior to the next billing cycle to avoid charges.
        </p>
      </div>
    ),
  },
  {
    num: "05",
    title: "Intellectual Property",
    content: (
      <div className="legal-body">
        <p>
          All content, designs, code, and materials produced by Ashnafai remain our intellectual
          property until full payment is received, at which point ownership transfers to the client
          as specified in the project agreement.
        </p>
        <p>
          You may not reproduce, distribute, or create derivative works from our proprietary
          materials without explicit written consent.
        </p>
      </div>
    ),
  },
  {
    num: "06",
    title: "Disclaimers",
    content: (
      <div className="legal-body">
        <p>
          Our services are provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee
          specific results, rankings, conversions, or revenue outcomes from any of our services.
        </p>
        <p>
          Any trading-related content or signals provided through trade.ashnafai.com are for
          informational purposes only and do not constitute financial advice. Past performance does
          not guarantee future results. Trading involves significant risk of loss.
        </p>
      </div>
    ),
  },
  {
    num: "07",
    title: "Limitation of Liability",
    content: (
      <div className="legal-body">
        <p>
          To the maximum extent permitted by law, Ashnafai shall not be liable for any indirect,
          incidental, special, or consequential damages arising from your use of our services,
          including but not limited to loss of profits, data, or business opportunities.
        </p>
        <p>
          Our total liability for any claim arising from our services shall not exceed the total
          amount paid by you for those services in the preceding three months.
        </p>
      </div>
    ),
  },
  {
    num: "08",
    title: "Confidentiality",
    content: (
      <div className="legal-body">
        <p>
          Both parties agree to keep confidential any proprietary information shared during the course
          of engagement. This includes business strategies, client data, technical systems, and
          financial information. This obligation survives termination of the service relationship.
        </p>
      </div>
    ),
  },
  {
    num: "09",
    title: "Termination",
    content: (
      <div className="legal-body">
        <p>
          Either party may terminate a service engagement with written notice as specified in the
          individual service agreement. Ashnafai reserves the right to immediately terminate services
          if these Terms of Service are violated.
        </p>
        <p>Upon termination, all outstanding fees become immediately due and payable.</p>
      </div>
    ),
  },
  {
    num: "10",
    title: "Governing Law",
    content: (
      <div className="legal-body">
        <p>
          These Terms of Service shall be governed by and construed in accordance with applicable
          international laws. Any disputes shall be resolved through good-faith negotiation before
          pursuing formal legal remedies.
        </p>
      </div>
    ),
  },
  {
    num: "11",
    title: "Contact",
    content: (
      <div className="legal-body">
        <p>For any questions regarding these Terms of Service, please contact us at:</p>
        <p>
          <a href="mailto:hello@ashnafai.com">hello@ashnafai.com</a>
        </p>
        <p>ashnafai.com</p>
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      label="Legal"
      title="Terms of Service"
      effectiveDate="Effective Date: March 29, 2026 · Last Updated: March 29, 2026"
      sections={sections}
    />
  );
}
