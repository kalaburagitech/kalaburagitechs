import { ClientProject } from "@/types/blog";

const blogData: ClientProject[] = [
  {
    id: 1,
    clientName: "Shri Kukke Enterprises Pvt Ltd",
    projectTitle: "Enterprise Security & Operations Management System",
    solution:
      "Developed a high-security mobile ecosystem with a centralized command dashboard.",
    logo: "/images/ourclints/shri_kukke.svg",
    features: [
      { title: "AI Face Recognition for attendance and identity verification", icon: "scan" },
      { title: "GPS-based live tracking for security personnel", icon: "map" },
      { title: "Digital operations suite (visitor logs, scanners, reports)", icon: "layout" },
      { title: "Client feedback system for transparency", icon: "message" },
    ],
  },
  {
    id: 2,
    clientName: "Stalwart",
    projectTitle: "Advanced Biometric API Infrastructure",
    solution:
      "Built a high-performance backend ensuring 100% uptime and fast processing.",
    logo: "/images/ourclints/stalwart.svg",
    features: [
      { title: "Scalable custom APIs", icon: "server" },
      { title: "Multi-face recognition for high-traffic environments", icon: "shield" },
      { title: "Secure and optimized data handling", icon: "database" },
    ],
  },
  {
    id: 3,
    clientName: "24 FSS (Fire Safety Solutions)",
    projectTitle: "Secure Digital Brand Presence",
    solution:
      "Designed and deployed a secure, high-performance website with long-term technical guidance.",
    logo: "/images/ourclints/24fss.svg",
    features: [
      { title: "Strong digital branding", icon: "sparkles" },
      { title: "Secure architecture", icon: "lock" },
      { title: "Ongoing technical consulting", icon: "life-buoy" },
    ],
  },
  {
    id: 4,
    clientName: "Homeesta.in & Urban Lake Springs",
    projectTitle: "Real Estate Digital Transformation",
    solution:
      "Developed full real estate platforms focused on lead generation and conversion growth.",
    logo: "/images/ourclints/homeesta.svg",
    features: [
      { title: "Dynamic property listings", icon: "building" },
      { title: "Lead management system", icon: "users" },
      { title: "Conversion-focused UI/UX", icon: "globe" },
    ],
  },
  {
    id: 5,
    clientName: "6Sigma (Process Improvement & Quality Consulting Platform)",
    projectTitle: "Digital Experience & Process Optimization Platform",
    solution:
      "Designed a scalable and performance-driven digital platform inspired by Six Sigma principles, focusing on quality improvement, process optimization, and data-driven decision-making.",
    logo: "/images/ourclints/six_sigma.svg",
    features: [
      { title: "Process optimization workflows and dashboards", icon: "layout" },
      { title: "Data-driven analytics and reporting systems", icon: "database" },
      { title: "Performance tracking and operational insights", icon: "users" },
      { title: "Scalable architecture for enterprise-level usage", icon: "server" },
    ],
  },
];

export default blogData;
