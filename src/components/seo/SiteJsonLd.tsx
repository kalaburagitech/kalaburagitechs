import { organizationJsonLd } from "@/lib/site";

const SiteJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationJsonLd),
    }}
  />
);

export default SiteJsonLd;
