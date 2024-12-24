import React from "react";
import Image from "next/image";

interface Expert {
  name: string;
  role: string;
  image: string;
}

const experts: Expert[] = [
  {
    name: "Santosh S",
    role: "Full Stack expert",
    image: "/images/experts/logo.png",
  },
  {
    name: "Nitin W",
    role: "Web Developer Expert",
    image: "/images/experts/no-image.png",
  },
  {
    name: "Rahul B",
    role: "DevOps Expert",
    image: "/images/experts/no-image.png",
  },
  {
    name: "Shashank G",
    role: "Machine Learning Expert",
    image: "/images/experts/no-image.png",
  },
  {
    name: "Rakesh J",
    role: "UI/UX Design Expert",
    image: "/images/experts/no-image.png",
  },
  {
    name: "Gowtami Reddy",
    role: "Digital Marketing Expert",
    image: "/images/experts/dowtami.png",
  },
];

const ExpertCard: React.FC<Expert> = ({ name, role, image }) => (
  <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800">
    <div className="aspect-square overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FF8C00] to-transparent p-6 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
      <h3 className="mb-2 text-xl font-semibold">{name}</h3>
      <p>{role}</p>
    </div>
  </div>
);

const OurExperts: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Our Experts
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExperts;
