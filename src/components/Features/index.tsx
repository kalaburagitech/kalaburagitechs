 "use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AppWindow,
  CloudCog,
  Cpu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Waypoints,
} from "lucide-react";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    id: 1,
    icon: Cpu,
    service: "Custom Software Development",
    title: "Engineered for Your Business",
    description:
      "We build custom software tailored to your exact needs. From automating daily tasks to developing powerful dashboards, our solutions make your work faster and more efficient.",
  },
  {
    id: 2,
    icon: Smartphone,
    service: "Mobile App Development",
    title: "Simple, Fast & User-Friendly Apps",
    description:
      "We develop high-performance mobile apps for Android and iOS using modern technologies like React Native. Focused on smooth performance and great user experience.",
  },
  {
    id: 3,
    icon: AppWindow,
    service: "Web Development & PWA",
    title: "Modern Websites That Perform",
    description:
      "We create fast, secure, and scalable websites using the MERN stack. SEO-friendly and built to handle real-world traffic.",
  },
  {
    id: 4,
    icon: CloudCog,
    service: "Cloud & Infrastructure",
    title: "Reliable & Scalable Systems",
    description:
      "We help businesses move to the cloud (AWS, Azure) with full setup, maintenance, and high uptime reliability.",
  },
  {
    id: 5,
    icon: ShieldCheck,
    service: "Cybersecurity & Data Protection",
    title: "Keeping Your Data Safe",
    description:
      "We implement strong security systems including encryption, authentication, and advanced protection methods like face recognition.",
  },
  {
    id: 6,
    icon: Sparkles,
    service: "IT Consulting",
    title: "Guidance You Can Trust",
    description:
      "We help you choose the right technologies and build cost-effective, future-ready systems.",
  },
  {
    id: 7,
    icon: Waypoints,
    service: "Real-Time Systems & Automation",
    title: "Smart Automation & Live Tracking",
    description:
      "We build real-time systems with live tracking, biometric integration, and instant updates for monitoring and security solutions.",
    highlighted: true,
  },
];

const Features = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#fff7ed] to-[#ffffff] py-16 dark:from-[#0B1220] dark:via-[#0f172a] dark:to-[#111827] md:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_45%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.2),transparent_45%)]" />
      <div className="container relative z-10">
        <SectionTitle
          title="Our Services"
          paragraph="At KalaburagiTech, we build more than just software — we create smart digital solutions that help your business grow, scale, and stay secure."
          center
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ scale: 1.02, rotateX: -1.6, rotateY: 1.6 }}
                className={`rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 sm:p-7 ${
                  service.highlighted
                    ? "border-primary/55 bg-gradient-to-br from-primary/20 via-[#fff1e8] to-white shadow-[0_18px_42px_rgba(249,115,22,0.2)] dark:from-primary/25 dark:via-[#2b1a12] dark:to-[#111827] dark:shadow-[0_22px_55px_rgba(249,115,22,0.28)]"
                    : "border-primary/20 bg-white shadow-[0_14px_34px_rgba(11,18,32,0.1)] hover:border-primary/45 hover:shadow-[0_18px_44px_rgba(249,115,22,0.16)] dark:bg-[#111827] dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] dark:hover:border-primary/55 dark:hover:shadow-[0_22px_55px_rgba(249,115,22,0.2)]"
                }`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary dark:border-white/20 dark:bg-black/20">
                  <Icon size={22} />
                </div>
                <p className="mb-2 text-sm font-medium text-body-color dark:text-body-color-dark">
                  {service.service}
                </p>
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark sm:text-base">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-[0_14px_32px_rgba(249,115,22,0.4)]"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
