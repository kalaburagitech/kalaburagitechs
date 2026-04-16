"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const metrics = [
  { label: "Clients", value: "10+" },
  { label: "Industries", value: "5+" },
  { label: "Satisfaction", value: "100%" },
];

const ClientsProjects = ({ compact = false }: { compact?: boolean }) => {
  const marqueeClients = [...blogData, ...blogData];

  return (
    <section
      id="clients-projects"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#fff7ed] to-[#ffffff] py-16 dark:from-[#0B1220] dark:via-[#0f172a] dark:to-[#111827] md:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.2),transparent_55%)]" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[100px] dark:bg-primary/25" />

      <div className="container relative z-10">
        {compact ? (
          <div className="mx-auto mb-[48px] w-full max-w-[570px] text-center">
            <h2 className="mb-0 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Our Clients & Projects
            </h2>
          </div>
        ) : (
          <SectionTitle
            title="Our Clients & Projects"
            paragraph="Delivering secure, scalable, and innovative digital solutions across industries"
            center
            mb="60px"
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-8 overflow-hidden"
        >
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {marqueeClients.map((client, index) => (
              compact ? (
                <Link
                  key={`${client.id}-${index}`}
                  href="/our-clients"
                  className="flex h-24 w-[220px] shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-white px-3 py-3 shadow-[0_10px_26px_rgba(11,18,32,0.1)] backdrop-blur-sm transition hover:scale-[1.02] hover:border-primary/55 dark:border-primary/25 dark:bg-[#111827] dark:shadow-[0_10px_26px_rgba(0,0,0,0.28)]"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white p-3">
                    <Image
                      src={client.logo}
                      alt={client.clientName}
                      width={180}
                      height={62}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </Link>
              ) : (
                <div
                  key={`${client.id}-${index}`}
                  className="flex h-24 w-[220px] shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-white px-3 py-3 shadow-[0_10px_26px_rgba(11,18,32,0.1)] backdrop-blur-sm dark:border-primary/25 dark:bg-[#111827] dark:shadow-[0_10px_26px_rgba(0,0,0,0.28)]"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-white p-3">
                    <Image
                      src={client.logo}
                      alt={client.clientName}
                      width={180}
                      height={62}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              )
            ))}
          </motion.div>
          {blogData.map((client) => (
            <div key={`sr-${client.id}`} className="sr-only">
              {client.clientName}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 grid grid-cols-1 gap-4 rounded-2xl border border-primary/20 bg-white p-6 shadow-[0_16px_36px_rgba(11,18,32,0.1)] backdrop-blur-md dark:border-primary/25 dark:bg-[#111827] dark:shadow-[0_16px_36px_rgba(0,0,0,0.32)] sm:grid-cols-3"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-2xl font-extrabold text-black dark:text-white sm:text-3xl">{metric.value}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-body-color dark:text-body-color-dark">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        {!compact && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {blogData.map((blog, index) => (
              <SingleBlog key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsProjects;
