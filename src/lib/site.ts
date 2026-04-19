export const SITE_URL = "https://kalaburagitech.com" as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "KalaburagiTech",
      alternateName: [
        "Kalaburagi Tech",
        "Tech Kalaburagi",
        "Kalaburagi Technology Company",
        "Kalaburagi IT Company",
      ],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      image: `${SITE_URL}/about.png`,
      description:
        "KalaburagiTech is a software development and IT services company serving Kalaburagi (Gulbarga), North Karnataka, and clients across India. We build websites, mobile apps, cloud solutions, and custom business software.",
      slogan: "Innovative software and IT solutions from Kalaburagi for modern businesses.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Alnd Check Post",
        addressLocality: "Kalaburagi",
        addressRegion: "Karnataka",
        postalCode: "585101",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.3297,
        longitude: 76.8343,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Kalaburagi",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Karnataka",
          },
        },
        {
          "@type": "City",
          name: "Gulbarga",
        },
        {
          "@type": "AdministrativeArea",
          name: "North Karnataka",
        },
      ],
      knowsAbout: [
        "Software development Kalaburagi",
        "Web development company Kalaburagi",
        "Mobile app development Kalaburagi",
        "IT services Gulbarga",
        "Technology consulting Karnataka",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919880020224",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada", "Hindi"],
      },
      sameAs: [
        "https://www.facebook.com/KalaburagiTech",
        "https://twitter.com/KalaburagiTech",
        "https://www.linkedin.com/company/KalaburagiTech",
        "https://www.instagram.com/kalaburagitech/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "KalaburagiTech",
      description:
        "Official site of KalaburagiTech — technology company in Kalaburagi offering software development, web apps, mobile apps, and IT services.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#local-service`,
      name: "KalaburagiTech — Software & IT Services",
      image: `${SITE_URL}/about.png`,
      url: SITE_URL,
      telephone: "+919880020224",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Alnd Check Post",
        addressLocality: "Kalaburagi",
        addressRegion: "Karnataka",
        postalCode: "585101",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.3297,
        longitude: 76.8343,
      },
      areaServed: [
        { "@type": "City", name: "Kalaburagi" },
        { "@type": "City", name: "Gulbarga" },
        { "@type": "AdministrativeArea", name: "Karnataka" },
      ],
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: [
        "Custom software development",
        "Web application development",
        "Mobile application development",
        "Cloud integration",
        "IT consulting",
      ],
    },
  ],
} as const;
