import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import SiteJsonLd from "@/components/seo/SiteJsonLd";
import GoogleAnalytics from "./GoogleAnalytics";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const defaultDescription =
  "KalaburagiTech is a leading technology and software development company in Kalaburagi (Gulbarga), Karnataka. We deliver web applications, mobile apps, cloud solutions, custom software, and IT services for businesses across North Karnataka and India—your partner for tech Kalaburagi, IT company Kalaburagi, and software company Kalaburagi searches.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "KalaburagiTech | Software & IT company in Kalaburagi (Gulbarga), Karnataka",
    template: "%s | KalaburagiTech",
  },
  description: defaultDescription,
  keywords: [
    "tech company Kalaburagi",
    "technology company Kalaburagi",
    "IT company Kalaburagi",
    "software company Kalaburagi",
    "software development Kalaburagi",
    "web development Kalaburagi",
    "mobile app development Kalaburagi",
    "tech Kalaburagi",
    "Kalaburagi IT services",
    "IT services Gulbarga",
    "Gulbarga software company",
    "North Karnataka software development",
    "Kalaburagi startup technology",
    "KalaburagiTech",
    "custom software Karnataka",
  ],
  authors: [{ name: "KalaburagiTech", url: SITE_URL }],
  creator: "KalaburagiTech",
  publisher: "KalaburagiTech",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "KalaburagiTech",
    title:
      "KalaburagiTech | Technology & software development company in Kalaburagi",
    description: defaultDescription,
    images: [
      {
        url: "/about.png",
        width: 1200,
        height: 630,
        alt: "KalaburagiTech — software and IT services in Kalaburagi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KalaburagiTech | Tech company in Kalaburagi & Gulbarga",
    description: defaultDescription,
    images: ["/about.png"],
  },
  verification: {
    // Add Search Console token when available:
    // google: "your-token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en-IN">
      <body
        className={`bg-white text-black dark:bg-[#0B1220] dark:text-white ${inter.className}`}
      >
        <SiteJsonLd />
        <GoogleAnalytics />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
