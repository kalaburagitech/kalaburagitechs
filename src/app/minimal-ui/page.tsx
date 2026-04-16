import type { Metadata } from "next";
import MinimalBrandUI from "@/components/showcase/minimal-brand-ui";

export const metadata: Metadata = {
  title: "Minimal Brand UI | KalaburagiTech",
  description: "Modern 2-color branded UI with dark/light toggle and premium responsive layout.",
};

const MinimalUIPage = () => {
  return <MinimalBrandUI />;
};

export default MinimalUIPage;
