import { getAllFilesFrontMatter } from "@/lib/mdx";
import { Icons } from "./icons/lucide-icon";
import Link from "next/link";
import Button from "./ui/button";

export default async function BlogsSuggestions() {
  const posts = await getAllFilesFrontMatter("posts");
  return (
    <div className="flex flex-col gap-12 mt-6">
      <h2 className="font-black text-[#111] dark:text-white text-3xl uppercase">
        popular post
      </h2>
      {posts.slice(0, 3).map((post) => (
        <div key={post.slug} className="flex flex-col gap-4">
          <h3 className="font-bold text-xl text-[#111] dark:text-gray-100">
            {post.title}
          </h3>
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
  );
}
