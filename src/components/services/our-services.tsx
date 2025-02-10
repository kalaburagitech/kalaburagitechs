"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  category: string;
  youtubeId: string;
  githubLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    name: " MERN Stack Project | Pet Adoption & Donation Platform | Final Year IEEE Project | Web App 🚀",
    description:
      "🚀 Project Highlights: ✅ Adopt & Donate Pets – Find loving homes for animals!",
    category: "Web Application",
    youtubeId: "mfG5Jl9xBLk",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    demoLink: "https://kalaburagitech.com/servicespage",
  },
  {
    name: "MERN Stack Final Year Project | Student Letter Management System | Mini & Major IEEE Project 2025",
    description:
      "IEEE Final Year Project, MERN Stack Project, Student Leave Letter Management.",
    category: "Web Application",
    youtubeId: "oervNf7INrw",
    githubLink: "https://github.com/yourusername/corporate-website",
    demoLink: "https://kalaburagitech.com/servicespage",
  },
  {
    name: "Task Management App",
    description:
      "A mobile app for organizing tasks, setting reminders, and collaborating with team members.",
    category: "Mobile Application",
    youtubeId: "dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/task-management-app",
    demoLink: "https://kalaburagitech.com/servicespage",
  },
  {
    name: "Fitness Tracker App",
    description:
      "A mobile application for tracking workouts, nutrition, and health goals.",
    category: "Mobile Application",
    youtubeId: "dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/fitness-tracker-app",
    demoLink: "https://kalaburagitech.com/servicespage",
  },
  {
    name: "Inventory Management System",
    description:
      "A robust software solution for tracking inventory, managing suppliers, and generating reports.",
    category: "Software Application",
    youtubeId: "dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/inventory-system",
    demoLink: "https://kalaburagitech.com/servicespage",
  },
  {
    name: "CRM Software",
    description:
      "A comprehensive customer relationship management software for businesses of all sizes.",
    category: "Software Application",
    youtubeId: "dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/crm-software",
    demoLink: "https://kalaburagitech.com/servicespage",
  },
  {
    name: "Image Recognition AI",
    description:
      "A machine learning model that can identify objects and scenes in images with high accuracy.",
    category: "Machine Learning",
    youtubeId: "dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/image-recognition-ai",
    demoLink: "https://kalaburagitech.com/servicespage",
  },
  {
    name: "Predictive Analytics Tool",
    description:
      "An AI-powered tool for predicting market trends and customer behavior.",
    category: "Machine Learning",
    youtubeId: "dQw4w9WgXcQ",
    githubLink: "https://github.com/yourusername/predictive-analytics",
    demoLink: "https://kalaburagitech.com/servicespage",
  },
];

const ProjectCard: React.FC<Project> = ({
  name,
  description,
  youtubeId,
  githubLink,
  demoLink,
}) => (
  <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mb-4 aspect-video overflow-hidden rounded-md">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={`${name} Demo Video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-between">
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          GitHub
        </Link>
        <Link
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[#FF8C00] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FF8C00]/80"
        >
          Live Demo
        </Link>
      </div>
    </div>
  </div>
);

const OurServices: React.FC = () => {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-9 ml-3 text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Our Services
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-300">
          Empowering businesses with cutting-edge solutions across various
          domains. <br></br>Explore our projects and see how we can transform
          your ideas into reality.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#FF8C00] text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.category === activeCategory)
            .map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
