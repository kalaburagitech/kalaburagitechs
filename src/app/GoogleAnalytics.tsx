import Script from "next/script";

const GoogleAnalytics = () => (
  <>
    {/* Google Analytics Global Site Tag */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=GTM-5DJSP7WT"
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-5DJSP7WT');
        `,
      }}
    />
  </>
);

export default GoogleAnalytics;
