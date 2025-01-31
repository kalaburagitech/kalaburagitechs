import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import OurExperts from "@/components/experts/our-experts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KalaburagiTech | Innovative Software Solutions in Kalaburagi",
  description:
    "KalaburagiTech provides cutting-edge software solutions and projects in Kalaburagi. Explore our web development services and expert team.",
  keywords:
    "KalaburagiTech, Software Solutions, Web Development, Projects, Kalaburagi, IT Services",
  openGraph: {
    title: "KalaburagiTech | Leading Software Solutions in Kalaburagi",
    description:
      "Discover top-notch software solutions and projects at KalaburagiTech. Expert web development services in Kalaburagi.",
    url: "https://kalaburagitech.com",
    siteName: "KalaburagiTech",
    images: [
      {
        url: "https://kalaburagitech.com/about.png",
        width: 1200,
        height: 630,
        alt: "KalaburagiTech - Software Solutions in Kalaburagi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KalaburagiTech | Innovative Software Solutions in Kalaburagi",
    description:
      "Expert software development and IT services in Kalaburagi. Explore our projects and solutions.",
    images: ["https://kalaburagitech.com/homeimg.png"],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <OurExperts />
      <Blog />
      <Contact />
    </>
  );
}
