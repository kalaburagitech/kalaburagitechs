import Head from "next/head";
import Script from "next/script";
import React from "react"; // Added import for React

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={ogUrl} />
      </Head>

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-5DJSP7WT"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-5DJSP7WT');
        `}
      </Script>

      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "KalaburagiTech",
            url: "https://kalaburagitech.com",
            logo: "https://kalaburagitech.com/logo.png",
            description:
              "KalaburagiTech provides cutting-edge software solutions and web development services.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Near Alnd Check Post",
              addressLocality: "Kalaburagi",
              addressRegion: "KA",
              postalCode: "585101",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+919880020224",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.facebook.com/KalaburagiTech",
              "https://twitter.com/KalaburagiTech",
              "https://www.linkedin.com/company/KalaburagiTech",
            ],
          }),
        }}
      />
    </>
  );
};

export default SEO;
