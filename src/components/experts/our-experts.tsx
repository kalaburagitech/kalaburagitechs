"use client";

import React from "react";
import { Code, Cpu, Globe, Lightbulb, PenTool, Rocket } from "lucide-react";
import { motion } from "framer-motion";

interface Expert {
  name: string;
  role: string;
  icon: React.ReactNode;
  info: string;
}

const experts: Expert[] = [
  {
    name: "Santosh S",
    role: "Full Stack Expert",
    icon: <Globe className="h-8 w-8" />,
    info: "Santosh is a seasoned full-stack developer with over 1+ years of experience in building scalable web applications.",
  },
  {
    name: "Nitin W",
    role: "Web Developer Expert",
    icon: <Code className="h-8 w-8" />,
    info: "Nitin specializes in front-end technologies and has a keen eye for creating intuitive user interfaces.",
  },
  {
    name: "Rajeshwari M",
    role: "MERN Full stack",
    icon: <Rocket className="h-8 w-8" />,
    info: "Rajeshwari M is passionate about streamlining development processes and has implemented CI/CD pipelines for numerous projects.",
  },
  {
    name: "Shashank G",
    role: "Machine Learning Expert",
    icon: <Cpu className="h-8 w-8" />,
    info: "Shashank has a PhD in Computer Science and specializes in developing cutting-edge machine learning algorithms.",
  },
  {
    name: "Rakesh J",
    role: "UI/UX Design Expert",
    icon: <PenTool className="h-8 w-8" />,
    info: "Rakesh combines creativity with user-centric design principles to create engaging and accessible digital experiences.",
  },
  {
    name: "Gowtami Reddy",
    role: "Digital Marketing Expert",
    icon: <Lightbulb className="h-8 w-8" />,
    info: "Gowtami is a digital marketing guru with expertise in SEO, content strategy, and social media marketing.",
  },
];

const ExpertCard: React.FC<Expert> = ({ name, role, icon, info }) => (
  <motion.div
    className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="p-6">
      <motion.div
        className="mb-4 flex justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-full bg-orange-100 p-3 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white dark:bg-gray-700 dark:text-orange-400 dark:group-hover:bg-orange-500 dark:group-hover:text-gray-900">
          {icon}
        </div>
      </motion.div>
      <motion.h3
        className="font-playfair mb-2 text-center text-2xl font-bold text-gray-900 dark:text-white"
        whileHover={{ scale: 1.1 }}
      >
        <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
          {name}
        </span>
      </motion.h3>
      <p className="font-montserrat mb-4 text-center text-sm font-medium text-orange-600 dark:text-orange-400">
        {role}
      </p>
      <p className="font-montserrat text-center text-sm text-gray-600 dark:text-gray-300">
        {info}
      </p>
    </div>
  </motion.div>
);

const OurExperts: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 text-center">
          <motion.h2
            className="font-playfair relative z-10 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Software Development Experts
          </motion.h2>
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 transform text-8xl font-bold text-orange-200 dark:text-orange-900"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        <motion.p
          className="font-montserrat mx-auto mb-12 max-w-2xl text-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Meet our team of seasoned professionals, each bringing unique
          expertise to drive your projects to success.
        </motion.p>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {experts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurExperts;
