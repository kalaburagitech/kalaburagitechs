"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const pillars = [
  {
    title: "Custom Product Engineering",
    description:
      "Build secure and scalable software tailored to your business process and growth goals.",
  },
  {
    title: "Real-Time Platforms",
    description:
      "Deliver live tracking, instant sync, and responsive user experiences for mission-critical operations.",
  },
  {
    title: "Cloud & Security Excellence",
    description:
      "Deploy on reliable cloud infrastructure with strong data protection and proactive monitoring.",
  },
];

const MinimalBrandUI = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1220] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.2),transparent_45%)]" />
      <div className="pointer-events-none absolute -right-12 top-24 h-56 w-56 rounded-full bg-[#F97316]/25 blur-3xl" />

      <div className="container relative z-10 py-10 md:py-14">
        <header className="mb-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F97316] text-sm font-bold text-white">
              KT
            </span>
            <div>
              <p className="text-lg font-semibold">KalaburagiTech</p>
              <p className="text-xs text-gray-400">Smart software for modern businesses</p>
            </div>
          </div>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#F97316]/30 bg-[#111827] text-[#F97316] shadow-sm transition hover:scale-105 hover:shadow-[0_10px_24px_rgba(249,115,22,0.28)]"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </header>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
            <p className="mb-4 inline-flex rounded-full border border-[#F97316]/30 bg-[#F97316]/10 px-4 py-1 text-sm font-medium text-[#F97316]">
              Premium Software Agency UI
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">
              Build products that feel
              <span className="bg-gradient-to-r from-[#F97316] to-[#ffb37d] bg-clip-text text-transparent"> fast, secure, and modern</span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              A minimal two-color brand system designed for high-end software teams. Clean hierarchy, subtle glow, and consistent interaction patterns.
            </p>

            <div className="mb-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Responsive by default", "Dark / light ready", "Smooth motion interactions", "Clean premium spacing"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium sm:text-base">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#F97316]/15 text-[#F97316]">
                    <Check size={14} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#F97316] px-6 py-3 text-base font-semibold text-white transition hover:scale-[1.03] hover:shadow-[0_14px_32px_rgba(249,115,22,0.4)]">
                Start a Project
              </Link>
              <Link href="/servicespage" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#F97316]/40 bg-[#111827] px-6 py-3 text-base font-semibold text-white transition hover:scale-[1.03] hover:border-[#F97316] hover:shadow-[0_12px_28px_rgba(249,115,22,0.18)]">
                Explore Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.08 }} className="grid gap-4">
            {pillars.map((pillar, index) => (
              <motion.article key={pillar.title} whileHover={{ scale: 1.015 }} transition={{ duration: 0.2 }} className="rounded-2xl border border-[#F97316]/25 bg-[#111827] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                <div className="mb-3 inline-flex rounded-md bg-[#F97316]/14 px-2.5 py-1 text-xs font-semibold text-[#F97316]">
                  Pillar 0{index + 1}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{pillar.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MinimalBrandUI;
