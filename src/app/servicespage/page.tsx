import Head from "next/head";
import OurServices from "@/components/services/our-services";

const ExpertsPage = () => {
  return (
    <>
      <Head>
        {/* Basic SEO Metadata */}
        <title>Experts Page | KalaburagiTech</title>
        <meta
          name="description"
          content="Meet the experts at KalaburagiTech who deliver innovative software solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="KalaburagiTech, Experts, Software Solutions, Innovative Technology"
        />
        <meta name="author" content="KalaburagiTech Team" />

        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="Experts Page | KalaburagiTech" />
        <meta
          property="og:description"
          content="Discover the expertise and innovative solutions offered by the KalaburagiTech team."
        />
        <meta property="og:url" content="https://kalaburagitech.com/experts" />
        <meta property="og:image" content="/public/homeimg.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Experts Page | KalaburagiTech" />
        <meta
          name="twitter:description"
          content="Meet the KalaburagiTech experts who provide innovative software solutions."
        />
        <meta
          name="twitter:image"
          content="/public/images/experts-banner.png"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Experts Page | KalaburagiTech",
              description:
                "Meet the experts at KalaburagiTech who deliver innovative software solutions.",
              url: "https://kalaburagitech.com/experts",
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

      <div>
        <OurServices />
      </div>
    </>
  );
};

export default ExpertsPage;
