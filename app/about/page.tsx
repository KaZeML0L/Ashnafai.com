import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About — Ashnafai",
  description:
    "We are a digital intelligence studio. We build AI systems, automated workflows, and digital experiences that give businesses an unfair advantage.",
  openGraph: {
    title: "About — Ashnafai",
    description:
      "A digital intelligence studio built on one belief: the right systems change everything.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutPageContent />
      <Footer />
    </main>
  );
}
