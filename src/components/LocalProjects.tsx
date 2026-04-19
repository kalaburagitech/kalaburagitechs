import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LocalProjects = () => {
  const projects = [
    {
      title: "Security guard check-in & client platform",
      description:
        "End-to-end solution for security agencies: mobile app for guard check-in and check-out, a client dashboard to monitor shifts and sites in real time, plus a professional website for your brand and lead generation.",
    },
    {
      title: "Face recognition APIs & organisation dashboard",
      description:
        "Integrate face-recognition APIs with a multi-tenant organisation dashboard. Usage-based pricing at a low cost—you pay as you grow—and clear analytics so teams can track adoption, calls, and traction from one place.",
    },
    {
      title: "Custom web applications",
      description:
        "Fully customised web applications built around your workflows: internal tools, customer portals, integrations, and reporting—designed and developed to match what your business actually needs.",
    },
    {
      title: "Fast delivery, support & freelance capacity",
      description:
        "Hands-on support to unblock work and ship sooner, plus vetted freelance capacity across stacks for new features, legacy fixes, or any application you need to keep moving without hiring full-time.",
    },
  ];

  return (
    <section
      id="local-projects"
      className="border-t border-gray-200 bg-gray-100 py-16 dark:border-white/10 dark:bg-black/40 md:py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Featured Kalaburagi &amp; regional technology projects
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base text-body-color dark:text-body-color-dark md:text-lg">
          Representative work aligned with{" "}
          <strong className="font-semibold text-black dark:text-white">
            software development in Kalaburagi
          </strong>{" "}
          and digital transformation across North Karnataka.
        </p>
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex h-full flex-col border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-gray-dark dark:shadow-none dark:hover:border-white/20"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold leading-snug text-black dark:text-white sm:text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col pt-0">
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark sm:text-base">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalProjects;
