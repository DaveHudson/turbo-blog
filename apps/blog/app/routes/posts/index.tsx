import { Link } from "remix";

const posts = [
  {
    title: "Boost your conversion rate",
    href: "boost-conversion-rate",
    category: { name: "Article", href: "#", color: "bg-indigo-100 text-indigo-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Paul York",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "6 min",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "seo",
    category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
    description:
      "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    author: {
      name: "Dessie Ryan",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "4 min",
  },
  {
    title: "Improve your customer experience",
    href: "cx",
    category: { name: "Case Study", href: "#", color: "bg-green-100 text-green-800" },
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    author: {
      name: "Easer Collins",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    readingTime: "11 min",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Posts() {
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-14 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-light dark:text-dark sm:text-4xl">
            Recent publications
          </h2>
          <p className="mt-3 text-xl text-light-accent dark:text-dark-accent sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
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
              <Link to={`${post.href}`} className="block mt-4">
                <p className="text-xl font-semibold text-light dark:text-dark">{post.title}</p>
                <p className="mt-3 text-base text-light-accent dark:text-dark-accent">{post.description}</p>
              </Link>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Link to={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                  </Link>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-light dark:text-dark-accent">
                    <Link to={post.author.href}>{post.author.name}</Link>
                  </p>
                  <div className="flex space-x-1 text-sm text-light-accent dark:text-dark-accent">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
