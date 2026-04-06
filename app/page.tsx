import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServicesGrid from "@/components/ServicesGrid";
import StatsBar from "@/components/StatsBar";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ashnafai — Digital Intelligence Studio",
  description:
    "We build AI systems that work while you sleep. Website design, marketing automation, AI chatbots, SEO & growth, and brand identity.",
  openGraph: {
    title: "Ashnafai — Digital Intelligence Studio",
    description:
      "Intelligence. Automated. We build AI systems, automated funnels, and high-converting digital experiences.",
  },
};

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <ServicesGrid />
      <StatsBar />
      <Process />
      <CTASection />
      <Footer />
    </main>
  );
}
