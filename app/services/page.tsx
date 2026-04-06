import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — Ashnafai",
  description:
    "Website design, marketing automation, AI chatbots, university admissions, SEO & growth, and brand identity. Six verticals. One studio.",
  openGraph: {
    title: "Services — Ashnafai",
    description:
      "Six service verticals built around one goal: measurable, automated growth.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <ServicesPageContent />
      <Footer />
    </main>
  );
}
