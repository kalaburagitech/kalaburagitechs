import React from "react";
import Image from "next/image";

interface Expert {
  name: string;
  role: string;
  image: string;
  info: string;
}

const experts: Expert[] = [
  {
    name: "Santosh S",
    role: "Full Stack expert",
    image: "/images/experts/logo.png",
    info: "Santosh is a seasoned full-stack developer with over 1+ years of experience in building scalable web applications.",
  },
  {
    name: "Nitin W",
    role: "Web Developer Expert",
    image: "/images/experts/Nitin.png",
    info: "Nitin specializes in front-end technologies and has a keen eye for creating intuitive user interfaces.",
  },
  {
    name: "Rahul B",
    role: "DevOps Expert",
    image: "/images/experts/Rahul.png",
    info: "Rahul is passionate about streamlining development processes and has implemented CI/CD pipelines for numerous projects.",
  },
  {
    name: "Shashank G",
    role: "Machine Learning Expert",
    image: "/images/experts/no-image.png",
    info: "Shashank has a PhD in Computer Science and specializes in developing cutting-edge machine learning algorithms.",
  },
  {
    name: "Rakesh J",
    role: "UI/UX Design Expert",
    image: "/images/experts/no-image.png",
    info: "Rakesh combines creativity with user-centric design principles to create engaging and accessible digital experiences.",
  },
  {
    name: "Gowtami Reddy",
    role: "Digital Marketing Expert",
    image: "/images/experts/dowtami.png",
    info: "Gowtami is a digital marketing guru with expertise in SEO, content strategy, and social media marketing.",
  },
];

const ExpertCard: React.FC<Expert> = ({ name, role, image, info }) => (
  <div className="perspective group h-[400px] w-full">
    <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FF8C00] p-10 text-white">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p>{role}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full overflow-hidden rounded-lg bg-[#FF8C00] p-6 text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h3 className="mb-2 text-2xl font-bold">{name}</h3>
          <p className="mb-4 text-lg font-semibold">{role}</p>
          <p className="text-sm">{info}</p>
        </div>
      </div>
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
