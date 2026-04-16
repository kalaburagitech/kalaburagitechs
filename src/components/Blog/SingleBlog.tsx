"use client";

import { ClientProject } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Database,
  Globe,
  LifeBuoy,
  Lock,
  MapPinned,
  MessageSquareMore,
  Radar,
  Server,
  ShieldCheck,
  Sparkles,
  SquareStack,
  Users,
} from "lucide-react";

const iconMap = {
  shield: ShieldCheck,
  map: MapPinned,
  layout: SquareStack,
  message: MessageSquareMore,
  server: Server,
  scan: Radar,
  database: Database,
  globe: Globe,
  lock: Lock,
  "life-buoy": LifeBuoy,
  building: Building2,
  users: Users,
  sparkles: Sparkles,
};

const SingleBlog = ({ blog, index }: { blog: ClientProject; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.08 * index }}
      whileHover={{ scale: 1.015, rotateX: -2, rotateY: 2 }}
      className="group relative rounded-2xl border border-primary/20 bg-white p-6 shadow-[0_16px_36px_rgba(11,18,32,0.1)] backdrop-blur-xl transition-all duration-300 hover:border-primary/55 hover:shadow-[0_22px_48px_rgba(249,115,22,0.18)] dark:border-primary/25 dark:bg-[#111827] dark:shadow-[0_20px_45px_rgba(0,0,0,0.35)] dark:hover:border-primary/60 dark:hover:shadow-[0_28px_60px_rgba(249,115,22,0.2)] sm:p-8"
    >
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-primary/20 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-body-color dark:text-body-color-dark">
            Client
          </p>
          <h3 className="mt-2 text-xl font-bold text-black dark:text-white">{blog.clientName}</h3>
        </div>
        <div className="flex h-14 min-w-[96px] items-center justify-center rounded-xl border border-primary/25 bg-white px-3">
          <Image
            src={blog.logo}
            alt={blog.clientName}
            width={92}
            height={36}
            className="h-9 w-auto object-contain"
          />
        </div>
      </div>

      <h4 className="mb-3 text-lg font-semibold text-primary sm:text-xl">{blog.projectTitle}</h4>
      <p className="mb-6 text-sm leading-relaxed text-body-color dark:text-body-color-dark sm:text-base">
        {blog.solution}
      </p>

      <ul className="space-y-3">
        {blog.features.map((feature) => {
          const FeatureIcon = iconMap[feature.icon];
          return (
            <li key={feature.title} className="flex items-start gap-3 text-sm text-gray-700 dark:text-white/90 sm:text-base">
              <motion.span
                whileHover={{ scale: 1.08, y: -1 }}
                transition={{ duration: 0.2 }}
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/60 bg-primary/20 text-primary"
              >
                <FeatureIcon size={15} />
              </motion.span>
              <span>{feature.title}</span>
            </li>
          );
        })}
      </ul>
    </motion.article>
  );
};

export default SingleBlog;
