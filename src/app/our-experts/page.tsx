import OurExperts from "@/components/experts/our-experts";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Experts | KalaburagiTech Software Development Team",
  description:
    "Discover the skilled professionals behind KalaburagiTech's innovative software solutions. Our expert team in Kalaburagi specializes in web development, mobile apps, and cutting-edge IT services.",
  keywords:
    "KalaburagiTech experts, software developers Kalaburagi, IT professionals, tech experts Karnataka",
  openGraph: {
    title: "KalaburagiTech Experts | Leading Software Developers in Kalaburagi",
    description:
      "Meet the talented team driving innovation at KalaburagiTech. Our experts deliver top-notch software solutions tailored to your business needs.",
    url: "https://kalaburagitech.com/experts",
    type: "website",
    images: [
      {
        url: "https://kalaburagitech.com/about.png",
        width: 1200,
        height: 630,
        alt: "KalaburagiTech Expert Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet KalaburagiTech Experts | Software Development Professionals",
    description:
      "Discover our team of skilled software developers and IT experts in Kalaburagi. Learn how we can bring your tech projects to life.",
    images: ["https://kalaburagitech.com/homeimg.png"],
  },
};

const ExpertsPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Our Expert Team"
        description="Meet the talented professionals behind KalaburagiTech's innovative software solutions. Our diverse team of experts brings a wealth of experience in web development, mobile apps, and cutting-edge IT services."
      /> */}
      <div className="container mx-auto px-4 py-16">
        {/* <h1 className="mb-8 text-center text-4xl font-bold">
          Meet Our Software Development Experts
        </h1> */}

        <OurExperts />
        {/* You can add more sections here, such as team achievements, technologies we specialize in, etc. */}
      </div>
    </>
  );
};

export default ExpertsPage;
