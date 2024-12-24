import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact KalaburagiTech | Innovative Software Solutions",
  description:
    "Get in touch with KalaburagiTech for cutting-edge software solutions tailored to your business needs.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Reach out to KalaburagiTech for innovative software solutions. We're here to turn your ideas into reality."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
