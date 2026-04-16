const AboutSectionTwo = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#fff7ed] to-[#ffffff] py-16 transition-colors duration-300 dark:from-[#0B1220] dark:via-[#0f172a] dark:to-[#111827] md:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_50%)]" />
      <div className="container">
        <div className="relative z-10 mx-auto max-w-[980px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[42px]">
              Our Core Specializations
            </h2>
            <p className="mx-auto max-w-[860px] text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
              At KalaburagiTech, we develop the tech that powers your business growth. We specialize in high-security, real-time, and scalable software architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-[0_14px_34px_rgba(11,18,32,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_20px_48px_rgba(249,115,22,0.16)] dark:border-primary/30 dark:bg-[#111827] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)] dark:hover:border-primary/60 dark:hover:shadow-[0_20px_48px_rgba(249,115,22,0.28)]">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Custom Web &amp; Mobile Ecosystems
              </h3>
              <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                We engineer high-performance, responsive web applications using the MERN stack and native mobile experiences on React Native. From E-commerce platforms to internal dashboards, we build solutions that convert and scale.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-[0_14px_34px_rgba(11,18,32,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_20px_48px_rgba(249,115,22,0.16)] dark:border-primary/30 dark:bg-[#111827] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)] dark:hover:border-primary/60 dark:hover:shadow-[0_20px_48px_rgba(249,115,22,0.28)]">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Real-Time Systems &amp; Biometric APIs
              </h3>
              <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                Specialized in ultra-low latency applications. We develop live GPS tracking systems (like our School Bus Tracker) and secure access controls featuring AI-driven Face Recognition for unparalleled operational efficiency.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-[0_14px_34px_rgba(11,18,32,0.1)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_20px_48px_rgba(249,115,22,0.16)] dark:border-primary/30 dark:bg-[#111827] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)] dark:hover:border-primary/60 dark:hover:shadow-[0_20px_48px_rgba(249,115,22,0.28)]">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                Enterprise Cloud &amp; Data Security
              </h3>
              <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                Shield your business assets. We architect secure cloud infrastructures on AWS/Azure, focusing on advanced data encryption, managed cybersecurity services, and guaranteeing 100% platform uptime for critical applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
