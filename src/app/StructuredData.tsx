import Head from "next/head";

const StructuredData = () => {
  return (
    <Head>
      <script
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
    </Head>
  );
};

export default StructuredData;
