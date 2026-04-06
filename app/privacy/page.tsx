import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import type { LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Ashnafai",
  description:
    "Privacy Policy for Ashnafai — Digital Intelligence Studio. How we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy — Ashnafai",
    description: "How Ashnafai collects, uses, and safeguards your information.",
  },
};

const sections: LegalSection[] = [
  {
    num: "01",
    title: "Introduction",
    content: (
      <div className="legal-body">
        <p>
          Ashnafai (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates ashnafai.com and its
          subdomains, including trade.ashnafai.com. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <p>
          By accessing or using our services, you agree to the collection and use of information in
          accordance with this policy. If you do not agree, please discontinue use of our services.
        </p>
      </div>
    ),
  },
  {
    num: "02",
    title: "Information We Collect",
    content: (
      <div className="legal-body">
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Information you provide directly, such as name, email address, and payment details when subscribing to our services</li>
          <li>Usage data including pages visited, time spent, browser type, and IP address</li>
          <li>Communication data if you contact us directly</li>
          <li>Technical data such as device information, cookies, and session data</li>
        </ul>
      </div>
    ),
  },
  {
    num: "03",
    title: "How We Use Your Information",
    content: (
      <div className="legal-body">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain our services</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative information, updates, and security alerts</li>
          <li>Respond to comments and questions</li>
          <li>Analyze usage to improve our services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>
    ),
  },
  {
    num: "04",
    title: "Cookies & Tracking",
    content: (
      <div className="legal-body">
        <p>
          We use cookies and similar tracking technologies to track activity on our services and hold
          certain information. Cookies are files with a small amount of data which may include an
          anonymous unique identifier.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being
          sent. However, if you do not accept cookies, some portions of our services may not function
          properly.
        </p>
      </div>
    ),
  },
  {
    num: "05",
    title: "Data Sharing & Disclosure",
    content: (
      <div className="legal-body">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share
          information with trusted third parties who assist us in operating our website and services,
          subject to confidentiality agreements. These include:
        </p>
        <ul>
          <li>Payment processors for transaction handling</li>
          <li>Analytics providers to understand service usage</li>
          <li>Hosting and infrastructure providers</li>
        </ul>
        <p>We may also disclose your information when required by law or to protect our rights.</p>
      </div>
    ),
  },
  {
    num: "06",
    title: "Data Retention",
    content: (
      <div className="legal-body">
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes
          outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>
      </div>
    ),
  },
  {
    num: "07",
    title: "Security",
    content: (
      <div className="legal-body">
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction. However,
          no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </div>
    ),
  },
  {
    num: "08",
    title: "Your Rights",
    content: (
      <div className="legal-body">
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul>
          <li>The right to access the personal information we hold about you</li>
          <li>The right to request correction of inaccurate data</li>
          <li>The right to request deletion of your personal data</li>
          <li>The right to object to or restrict processing of your data</li>
          <li>The right to data portability</li>
        </ul>
        <p>To exercise any of these rights, please contact us at the email below.</p>
      </div>
    ),
  },
  {
    num: "09",
    title: "Third-Party Links",
    content: (
      <div className="legal-body">
        <p>
          Our services may contain links to third-party websites. We have no control over the content,
          privacy policies, or practices of any third-party sites and assume no responsibility for them.
        </p>
      </div>
    ),
  },
  {
    num: "10",
    title: "Changes to This Policy",
    content: (
      <div className="legal-body">
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new policy on this page and updating the effective date. Your continued use of
          our services after any changes constitutes acceptance of the updated policy.
        </p>
      </div>
    ),
  },
  {
    num: "11",
    title: "Contact",
    content: (
      <div className="legal-body">
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>
          <a href="mailto:hello@ashnafai.com">hello@ashnafai.com</a>
        </p>
        <p>ashnafai.com</p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy Policy"
      effectiveDate="Effective Date: March 29, 2026 · Last Updated: March 29, 2026"
      sections={sections}
    />
  );
}
