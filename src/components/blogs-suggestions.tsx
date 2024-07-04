import { Icons } from "./icons/lucide-icon";
import Link from "next/link";
import Button from "./ui/button";
import { IPost } from "@/types/posts";

export default async function BlogsSuggestions() {
  const popular = await fetch(
    `${process.env.CANONICAL_URL}/api/blogs/popular`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });

  return (
    <div className="flex flex-col gap-12 mt-6">
      <h2 className="font-black text-[#111] dark:text-white text-3xl uppercase">
        popular post
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 xl:grid-cols-1 gap-12">
        {popular?.map((post: IPost) => (
          <div key={post.slug} className="flex flex-col gap-4">
            <h3 className="font-bold text-xl text-[#111] dark:text-gray-100">
              {post.title}
            </h3>
            <div className="flex flex-wrap gap-4 justify-between text-sm text-gray-500 dark:text-gray-400 font-bold">
              <span className="flex items-center min-w-fit">
                <Icons.eye className="w-4 h-4" />
                <p className="ml-2">{post.views} views</p>
              </span>
            </div>
            <p className="text-base text-gray-500 dark:text-gray-400 text-pretty">
              {post.summary}
            </p>
            <Link href={`/blogs/${post.slug}`}>
              <div className="flex gap-12 items-center">
                <p className="uppercase font-bold">Read Article</p>
                <Button className="w-10 h-10 p-2" aria-label="read more">
                  <Icons.ChevronRight />
                </Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
