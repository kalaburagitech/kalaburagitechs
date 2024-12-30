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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KalaburagiTech | Innovative Software Solutions",
  description:
    "KalaburagiTech provides cutting-edge software solutions for all your needs.",
  keywords: "KalaburagiTech, Software Solutions, Web Development, Projects",
  openGraph: {
    title: "KalaburagiTech | Innovative Software Solutions",
    description: "Explore top-notch software solutions at KalaburagiTech.",
    url: "https://kalaburagitech.com",
    images: [
      {
        url: "homeimg.png",
        width: 800,
        height: 600,
        alt: "KalaburagiTech Logo",
      },
    ],
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
