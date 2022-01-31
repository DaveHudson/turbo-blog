import { Link, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.postid, "expected params.postid");

  const post = {
    title: "Boost your conversion rate",
    href: "boost-conversion-rate",
    category: { name: "Article", href: "#", color: "bg-indigo-100 text-indigo-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    body: "This is the body post, it will be markdown",
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
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{post.title}</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">{post.description}</p>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <Link to={post.author.href}>
                <span className="sr-only">{post.author.name}</span>
                <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
              </Link>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <Link to={post.author.href}>{post.author.name}</Link>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime} read</span>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <Link to={`${post.category.href}`} className="inline-block">
              <span
                className={classNames(
                  post.category.color,
                  "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                )}
              >
                {post.category.name}
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">{post.body}</div>
      </div>
    </div>
  );
}
