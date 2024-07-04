import { Icons } from "@/components/icons/lucide-icon";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import Button from "@/components/ui/button";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const posts = await getAllFilesFrontMatter("posts");
  return posts;
}

const Blogs = async () => {
  const posts = await getPosts();
  return (
    <Section id="blogs" watermark>
      <SectionHeading className="mt-0">blogs</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col gap-4 h-auto justify-between"
          >
            <div className="flex flex-col gap-4">
              <span className="bg-gray-100 dark:bg-[#1e1e1e] py-2 px-4 w-fit text-xs">
                {post.readingTime.text}
              </span>
              <Link href={`/blogs/${post.slug}`}>
                <h2 className="font-black text-xl">{post.title}</h2>
              </Link>
              <div className="relative w-full aspect-w-16 aspect-h-9">
                <Image
                  src={post.image}
                  alt={post.summary}
                  width={800}
                  height={514}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-pretty">
                {post.summary}
              </p>
              <div className="flex flex-wrap gap-4 justify-between text-sm text-gray-500 dark:text-gray-400 font-bold">
                <span className="flex items-center min-w-fit">
                  <Icons.user className="w-4 h-4" />
                  <p className="ml-2">{post.author}</p>
                </span>
                <span className="flex items-center min-w-fit">
                  <Icons.calendar className="w-4 h-4" />
                  <p className="ml-2">{post.publishedAt}</p>
                </span>
              </div>
            </div>
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
    </Section>
  );
};
export default Blogs;
