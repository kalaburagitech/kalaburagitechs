import ClientsProjects from "@/components/Blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients & Projects | KalaburagiTech",
  description:
    "Explore KalaburagiTech client success stories and project deliveries across industries.",
};

const OurClientsPage = () => {
  return <ClientsProjects />;
};

export default OurClientsPage;
