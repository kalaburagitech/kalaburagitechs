import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KalaburagiTech Blog | Latest Software Development Insights",
  description:
    "Explore the latest trends in software development, tech innovations, and IT solutions from KalaburagiTech. Stay updated with our expert insights and industry news.",
  keywords:
    "KalaburagiTech blog, software development, IT solutions, tech trends, Kalaburagi tech news",
  openGraph: {
    title: "KalaburagiTech Blog | Software Development Insights",
    description:
      "Discover cutting-edge software development trends and IT solutions. Read expert insights from KalaburagiTech.",
    url: "https://kalaburagitech.com/blog",
    type: "website",
    images: [
      {
        url: "https://kalaburagitech.com/about.png",
        width: 1200,
        height: 630,
        alt: "KalaburagiTech Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KalaburagiTech Blog | Software Development Insights",
    description:
      "Stay updated with the latest in software development and IT solutions from KalaburagiTech experts.",
    images: ["https://kalaburagitech.com/homeimg.png"],
  },
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="KalaburagiTech Blog"
        description="Explore our latest articles on software development, IT solutions, and tech innovations. Stay informed with insights from KalaburagiTech experts."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <nav aria-label="Blog pagination" className="mt-12">
            <ul className="flex items-center justify-center pt-8">
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  aria-label="Go to previous page"
                >
                  Prev
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  aria-label="Go to page 1"
                >
                  1
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  aria-label="Go to page 2"
                >
                  2
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  aria-label="Go to page 3"
                >
                  3
                </a>
              </li>
              <li className="mx-1">
                <span
                  className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
                  aria-hidden="true"
                >
                  ...
                </span>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  aria-label="Go to page 12"
                >
                  12
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  aria-label="Go to next page"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Blog;
