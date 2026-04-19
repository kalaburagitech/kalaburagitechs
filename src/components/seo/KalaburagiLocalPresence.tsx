import Link from "next/link";

/**
 * On-page content for Kalaburagi / Gulbarga local discovery.
 * Written for humans first; headings and copy reinforce topical relevance.
 */
const KalaburagiLocalPresence = () => {
  return (
    <section
      id="kalaburagi-tech-company"
      className="bg-gray-50 py-16 dark:bg-black/40 md:py-20 lg:py-28"
      aria-labelledby="kalaburagi-seo-heading"
    >
      <div className="container max-w-4xl">
        <h2
          id="kalaburagi-seo-heading"
          className="mb-4 text-center text-3xl font-bold text-black dark:text-white md:text-4xl"
        >
          Technology company in Kalaburagi — software, web &amp; IT services
        </h2>
        <p className="mb-10 text-center text-base text-body-color dark:text-body-color-dark md:text-lg">
          KalaburagiTech is built for teams that search{" "}
          <strong className="font-semibold text-black dark:text-white">
            tech company in Kalaburagi
          </strong>
          ,{" "}
          <strong className="font-semibold text-black dark:text-white">
            IT company Kalaburagi
          </strong>
          , or{" "}
          <strong className="font-semibold text-black dark:text-white">
            software development Kalaburagi
          </strong>{" "}
          and need a partner who ships reliable products—not buzzwords alone.
        </p>

        <article className="space-y-5 text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
          <h3 className="text-xl font-bold text-black dark:text-white">
            Kalaburagi, Gulbarga &amp; North Karnataka technology partner
          </h3>
          <p>
            Kalaburagi (historically known as{" "}
            <span className="whitespace-nowrap">Gulbarga</span>) is a growing
            hub for education, healthcare, retail, and public-sector digital
            initiatives. Businesses here often look for a{" "}
            <strong>Kalaburagi software company</strong> that understands local
            context while applying modern engineering: secure APIs, responsive
            web apps, Android and iOS experiences, dashboards, and integrations
            with payments, SMS, and cloud providers.
          </p>
          <p>
            Whether someone types{" "}
            <strong>tech Kalaburagi</strong>,{" "}
            <strong>Kalaburagi IT services</strong>,{" "}
            <strong>web development company Kalaburagi</strong>, or even common
            variants like <strong>Kalburgi tech</strong>, they are looking for
            the same outcome: a dependable team to design, build, and maintain
            digital products. KalaburagiTech focuses on clear roadmaps,
            maintainable codebases, and long-term support so your software keeps
            pace as your organisation grows.
          </p>

          <h3 className="text-xl font-bold text-black dark:text-white">
            What we deliver for Kalaburagi-based and regional clients
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-black dark:text-white">
                Custom software &amp; business automation
              </strong>{" "}
              — workflows, internal tools, and integrations tailored to your
              operations.
            </li>
            <li>
              <strong className="text-black dark:text-white">
                Web applications &amp; marketing sites
              </strong>{" "}
              — fast, accessible, SEO-friendly frontends backed by robust
              backends.
            </li>
            <li>
              <strong className="text-black dark:text-white">
                Mobile apps
              </strong>{" "}
              — user-centred Android and iOS experiences for customers, students,
              patients, or field teams.
            </li>
            <li>
              <strong className="text-black dark:text-white">
                Cloud &amp; DevOps-oriented delivery
              </strong>{" "}
              — scalable hosting patterns, monitoring, and sensible security
              practices.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-black dark:text-white">
            Start a project with a Kalaburagi technology team
          </h3>
          <p>
            If you need a <strong>technology company in Kalaburagi</strong> for
            your next product, platform upgrade, or digital transformation
            roadmap, share your goals and timelines. We respond with a practical
            plan: scope, milestones, and ownership—not vague estimates.
          </p>
          <p className="flex flex-wrap items-center gap-4 !mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-sm bg-[#F97316] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#F97316]/90"
            >
              Contact KalaburagiTech
            </Link>
            <Link
              href="/servicespage"
              className="inline-flex rounded-sm border border-black px-6 py-3 text-base font-semibold text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              View services
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
};

export default KalaburagiLocalPresence;
