import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact KalaburagiTech | Get Expert Software Solutions in Kalaburagi",
  description:
    "Reach out to KalaburagiTech for innovative software solutions tailored to your business needs. Our expert team in Kalaburagi is ready to assist you with web development, mobile apps, and IT consulting.",
  keywords:
    "KalaburagiTech contact, software solutions Kalaburagi, IT services contact, web development inquiry",
  openGraph: {
    title: "Contact KalaburagiTech | Expert Software Solutions in Kalaburagi",
    description:
      "Get in touch with KalaburagiTech for cutting-edge software solutions. Our team in Kalaburagi is ready to bring your ideas to life.",
    url: "https://kalaburagitech.com/contact",
    type: "website",
    images: [
      {
        url: "https://kalaburagitech.com/about.png",
        width: 1200,
        height: 630,
        alt: "Contact KalaburagiTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact KalaburagiTech | Software Solutions in Kalaburagi",
    description:
      "Reach out to KalaburagiTech for expert software development and IT services in Kalaburagi. Let's discuss your project!",
    images: ["https://kalaburagitech.com/homeimg.png"],
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact KalaburagiTech"
        description="Reach out to our expert team in Kalaburagi for innovative software solutions. We're here to turn your ideas into reality with our cutting-edge web development, mobile app, and IT consulting services."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
