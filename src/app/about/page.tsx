import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About KalaburagiTech | Software & IT company in Kalaburagi",
  description:
    "Meet KalaburagiTech—your Kalaburagi (Gulbarga) technology partner for custom software, web and mobile apps, cloud solutions, and IT consulting across North Karnataka and India.",
  keywords: [
    "about KalaburagiTech",
    "Kalaburagi software team",
    "IT company Kalaburagi about",
    "technology company Gulbarga",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About KalaburagiTech | Technology company in Kalaburagi",
    description:
      "Our story, values, and engineering approach—building dependable digital products from Kalaburagi for regional and national clients.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "About KalaburagiTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About KalaburagiTech",
    description:
      "Kalaburagi-based software development and IT services team serving Karnataka and beyond.",
    images: [`${SITE_URL}/about.png`],
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About KalaburagiTech",
  description:
    "Learn about KalaburagiTech, a software and IT services company in Kalaburagi (Gulbarga), Karnataka.",
  url: `${SITE_URL}/about`,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

const AboutPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd),
        }}
      />
      <Breadcrumb
        pageName="About KalaburagiTech"
        description="Innovative software solutions for your business—from Kalaburagi to everywhere you operate."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
