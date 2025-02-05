import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import React from "react"; // Added import for React

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <SEO
        title="KalaburagiTech | Innovative Software Solutions in Kalaburagi"
        description="KalaburagiTech offers cutting-edge software solutions and web development services in Kalaburagi. Elevate your business with expert IT solutions, mobile apps, and scalable web platforms."
        keywords="KalaburagiTech, Software Solutions, Web Development, Projects, Kalaburagi, IT Services"
        ogTitle="KalaburagiTech | Leading Software Solutions in Kalaburagi"
        ogDescription="Discover top-notch software solutions and projects at KalaburagiTech. Expert web development services in Kalaburagi."
        ogUrl="https://kalaburagitech.com"
        ogImage="https://kalaburagitech.com/about.png"
      />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
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
