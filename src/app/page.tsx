import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ClientsProjects from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LocalProjects from "@/components/LocalProjects";
import Pricing from "@/components/Pricing";
import KalaburagiLocalPresence from "@/components/seo/KalaburagiLocalPresence";
import Testimonials from "@/components/Testimonials";
import OurExperts from "@/components/experts/our-experts";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const homeDescription =
  "KalaburagiTech is a trusted technology partner for Kalaburagi, Gulbarga, and North Karnataka—software development, web and mobile apps, cloud solutions, and IT consulting from an established Kalaburagi software company.";

export const metadata: Metadata = {
  title: {
    absolute:
      "KalaburagiTech | Leading technology & software company in Kalaburagi — web, mobile & IT",
  },
  description: homeDescription,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title:
      "KalaburagiTech | Software development & IT company in Kalaburagi (Gulbarga)",
    description: homeDescription,
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <KalaburagiLocalPresence />
      <LocalProjects />
      <Testimonials />
      <Pricing />
      <OurExperts />
      <ClientsProjects compact />
      <Contact />
    </>
  );
}
