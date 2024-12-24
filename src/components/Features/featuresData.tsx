import { Feature } from "@/types/feature";
import {
  Code,
  Smartphone,
  Globe,
  Server,
  Shield,
  Headphones,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Code className="h-10 w-10" />,
    title: "Custom Software Development",
    paragraph:
      "We create tailored software solutions to meet your specific business needs and challenges.",
  },
  {
    id: 2,
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile App Development",
    paragraph:
      "Our team builds high-performance, user-friendly mobile applications for iOS and Android platforms.",
  },
  {
    id: 3,
    icon: <Globe className="h-10 w-10" />,
    title: "Web Development",
    paragraph:
      "We design and develop responsive, scalable web applications using the latest technologies.",
  },
  {
    id: 4,
    icon: <Server className="h-10 w-10" />,
    title: "Cloud Solutions",
    paragraph:
      "We provide cloud migration, management, and optimization services to enhance your business efficiency.",
  },
  {
    id: 5,
    icon: <Shield className="h-10 w-10" />,
    title: "Cybersecurity Services",
    paragraph:
      "Our experts implement robust security measures to protect your digital assets and data.",
  },
  {
    id: 6,
    icon: <Headphones className="h-10 w-10" />,
    title: "IT Consulting",
    paragraph:
      "We offer strategic IT consulting to help you make informed decisions and optimize your technology investments.",
  },
];

export default featuresData;
