import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  packageName: string;
  price: string;
  duration: string;
  subtitle: string;
};

const PricingBox = ({
  children,
  packageName,
  price,
  duration,
  subtitle,
}: Props) => {
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2144]"
        data-wow-delay=".1s"
      >
        <div className="flex items-center justify-between">
          <h3 className="mb-2 text-3xl font-bold text-black dark:text-white">
            {packageName}
          </h3>
          <h4 className="mb-2 text-xl font-bold text-black dark:text-white">
            ₹ {price}
            <span className="text-base font-medium text-body-color">
              /{duration}
            </span>
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button className="flex w-full items-center justify-center rounded-md bg-[#FF8C00] p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Start Free Trial
          </button>
        </div>
        <div>{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 207.87 242.26 191.857C255.42 185.666 268.593 174.642 275.759 162.673C282.926 150.704 283.797 137.356 278.373 125.195C272.949 113.033 261.317 102.898 247.007 98.5796C232.697 94.2612 216.806 96.1313 203.828 101.144C190.85 106.157 180.870 114.068 173.434 123.818C166.033 133.544 161.696 144.754 161.198 156.028C160.5 171.3 165.422 186.696 175.125 197.812C184.828 208.928 198.602 214.982 213.003 214.982"
              stroke="#FF8C00"
              strokeWidth="0.7"
            />
            <path
              opacity="0.5"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 13.6231 246.401C-3.32829 226.96 -13.9461 200.985 -9.22489 176.14C-4.50371 151.295 14.5694 128.731 36.8981 116.545C59.2268 104.359 84.1229 103.522 106.479 114.352C128.835 125.181 147.019 147.249 155.379 172.917C163.703 198.548 161.759 226.191 150.129 250.704C138.5 275.216 118.038 294.684 93.4667 305.745C59.5252 320.869 20.4720 320.225 -0.487285 299.772"
              stroke="#FF8C00"
              strokeWidth="0.7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
