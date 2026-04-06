import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Ashnafai",
  description:
    "Book a free strategy call or send us a message. We respond within 24 hours.",
  openGraph: {
    title: "Contact — Ashnafai",
    description:
      "Start a project with Ashnafai. Book a call or send a message — we respond within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
