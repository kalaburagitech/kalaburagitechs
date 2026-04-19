import OurServices from "@/components/services/our-services";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT & software services in Kalaburagi | Web, mobile & cloud",
  description:
    "KalaburagiTech services: custom software, web development, mobile apps, cloud integration, and IT consulting for businesses in Kalaburagi (Gulbarga), North Karnataka, and across India.",
  keywords: [
    "IT services Kalaburagi",
    "web development services Kalaburagi",
    "mobile app services Gulbarga",
    "cloud solutions Karnataka",
    "KalaburagiTech services",
  ],
  alternates: { canonical: "/servicespage" },
  openGraph: {
    title: "Software & IT services | KalaburagiTech Kalaburagi",
    description:
      "Explore our software development, web, mobile, and cloud offerings from a Kalaburagi-based technology company.",
    url: `${SITE_URL}/servicespage`,
    type: "website",
    images: [{ url: "/about.png", width: 1200, height: 630, alt: "KalaburagiTech services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT & software services | KalaburagiTech",
    description:
      "Web, mobile, cloud, and custom software from Kalaburagi for regional and national clients.",
    images: [`${SITE_URL}/about.png`],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "KalaburagiTech services",
  description:
    "IT and software development services offered by KalaburagiTech in Kalaburagi, Karnataka.",
  url: `${SITE_URL}/servicespage`,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const ServicesPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd),
        }}
      />
      <div>
        <OurServices />
      </div>
    </>
  );
};

export default ServicesPage;
