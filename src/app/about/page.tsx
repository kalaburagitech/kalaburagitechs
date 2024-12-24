import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | KalaburagiTech",
  description: "KalaburagiTech: Innovative Software Solutions",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
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
