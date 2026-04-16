"use client";

import { Headset, Layers3, Workflow } from "lucide-react";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const engagementModels = [
  {
    id: 1,
    icon: Workflow,
    name: "Project-Based Delivery",
    description:
      "Focused on defined goals, fixed timelines, and high-quality launches like MVPs or Security Websites.",
  },
  {
    id: 2,
    icon: Layers3,
    name: "Dedicated Development Team",
    description:
      "Best for long-term scaling (like our work for Shri Kukke Enterprises). Includes agile sprints and continuous feature integration.",
    highlighted: true,
  },
  {
    id: 3,
    icon: Headset,
    name: "Managed Services & Support",
    description:
      "Focused on 24/7 technical monitoring, cloud optimization (AWS/Azure), and ensuring 100% platform uptime.",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#fff7ed] to-[#ffffff] py-16 dark:from-[#0B1220] dark:via-[#0f172a] dark:to-[#111827] md:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.2),transparent_45%)]" />
      <div className="container relative z-10">
        <SectionTitle
          title="Our Engagement Models"
          paragraph="Choose a delivery model that fits your business stage, goals, and growth plans."
          center
          width="680px"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engagementModels.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                className={`rounded-2xl border p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  model.highlighted
                    ? "border-primary/55 bg-gradient-to-br from-primary/20 via-[#fff1e8] to-white shadow-[0_18px_42px_rgba(249,115,22,0.2)] dark:from-primary/25 dark:via-[#2b1a12] dark:to-[#111827] dark:shadow-[0_22px_55px_rgba(249,115,22,0.28)]"
                    : "border-primary/20 bg-white shadow-[0_14px_34px_rgba(11,18,32,0.1)] hover:border-primary/45 hover:shadow-[0_18px_44px_rgba(249,115,22,0.16)] dark:bg-[#111827] dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] dark:hover:border-primary/55 dark:hover:shadow-[0_22px_55px_rgba(249,115,22,0.2)]"
                }`}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:border-white/20 dark:bg-black/20">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">{model.name}</h3>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {model.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-semibold text-white transition duration-300 hover:scale-[1.01] hover:shadow-[0_14px_32px_rgba(249,115,22,0.4)]"
                >
                  Request a Custom Quote
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
