import { Link, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import parseFrontMatter from "front-matter";
import { marked } from "marked";

export const loader: LoaderFunction = async ({ params }) => {
  const post = {
    title: "Boost your conversion rate",
    href: "boost-conversion-rate",
    category: { name: "Article", href: "#", color: "bg-indigo-100 text-indigo-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    body: "",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  };

  return post;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PostSlug() {
  const post = useLoaderData();

  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-14 lg:px-8">
      <div className="relative max-w-lg mx-auto  divide-gray-200 md:max-w-3xl lg:max-w-5xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-light dark:text-dark sm:text-4xl">{post.title}</h2>

          <div className="relative mt-1">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-light dark:bg-dark px-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-3 pt-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
              Remix
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
              React
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
              Databases
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
              Tailwind
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
              Mono Repos
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
              Design Systems
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-pink-100 text-pink-800">
              Testing
            </span>
          </div>

          <div className="flex justify-center space-x-3 pt-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              3 min read
            </span>
          </div>

          <p className="pt-4 mt-3 text-xl text-light-accent dark:text-dark-accent sm:mt-4">{post.description}</p>

          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <Link to={post.author.href}>
                <span className="sr-only">{post.author.name}</span>
                <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
              </Link>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-light dark:text-dark">
                <Link to={post.author.href}>{post.author.name}</Link>
              </p>
              <div className="flex space-x-1 text-sm text-light-accent dark:text-dark-accent">
                <time dateTime={post.datetime}>{post.date}</time>
              </div>
            </div>
          </div>

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-light dark:bg-dark px-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="prose">
          {/* <div
            className="mt-4 grid gap-16 pt-4 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 text-light dark:text-dark prose"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(markdown) }}
          /> */}

          <div className="mt-4 grid gap-16 pt-4 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 text-light dark:text-dark prose">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}
