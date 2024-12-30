import Head from "next/head";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      {/* Head Component for SEO */}
      <Head>
        {/* Basic SEO Metadata */}
        <title>About Page | KalaburagiTech</title>
        <meta
          name="description"
          content="Learn more about KalaburagiTech, a provider of innovative software solutions tailored to your business needs."
        />
        <meta
          name="keywords"
          content="KalaburagiTech, About Us, Software Solutions, Business Innovation"
        />
        <meta name="author" content="KalaburagiTech Team" />

        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="About Page | KalaburagiTech" />
        <meta
          property="og:description"
          content="Discover the story of KalaburagiTech, our innovative solutions, and how we help businesses grow."
        />
        <meta property="og:url" content="https://kalaburagitech.com/about" />
        <meta
          property="og:image"
          content="/about.png" /* Replace with actual image path */
        />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Page | KalaburagiTech" />
        <meta
          name="twitter:description"
          content="Explore KalaburagiTech and our commitment to providing innovative software solutions."
        />
        <meta name="twitter:image" content="/images/about-banner.png" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "About Page | KalaburagiTech",
              description:
                "Learn more about KalaburagiTech, a provider of innovative software solutions tailored to your business needs.",
              url: "https://kalaburagitech.com/about",
              publisher: {
                "@type": "Organization",
                name: "KalaburagiTech",
                logo: {
                  "@type": "ImageObject",
                  url: "https://kalaburagitech.com/logo.png",
                },
              },
            }),
          }}
        />
      </Head>

      {/* Page Content */}
      <Breadcrumb
        pageName="About Page"
        description="Innovative Software Solutions for Your Business."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
