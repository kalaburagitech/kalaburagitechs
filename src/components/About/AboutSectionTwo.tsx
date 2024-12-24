import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cutting-edge Technology
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  We leverage the latest technologies and frameworks to ensure
                  your software solutions are robust, scalable, and
                  future-proof. Our team stays up-to-date with industry trends
                  to provide you with the best possible solutions.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dedicated Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  Our commitment to your success doesn't end with project
                  delivery. We provide ongoing support and maintenance to ensure
                  your software continues to perform optimally and evolve with
                  your business needs.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Agile Development Process
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  We follow an agile development methodology, allowing for
                  flexibility, transparency, and rapid iterations. This approach
                  ensures that we can quickly adapt to changing requirements and
                  deliver high-quality software on time and within budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
