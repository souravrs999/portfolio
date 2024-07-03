import { IFrontMatter } from "@/types/posts";
import { Icons } from "./icons/lucide-icon";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import SocialSharable from "./blog-social-shareable";

export default function BlogHero({
  frontMatter,
}: {
  frontMatter: Partial<IFrontMatter>;
}) {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 mb-12 gap-12 items-center">
      <div className="flex flex-col gap-6">
        <Link href="/blogs" className="w-fit">
          <div className="flex gap-6 items-center">
            <Button className="w-10 h-10 p-2" aria-label="read more">
              <Icons.ChevronLeft />
            </Button>
            <p className="uppercase font-bold">go back</p>
          </div>
        </Link>
        <h1 className="text-[#111] dark:text-gray-100 text-4xl font-black uppercase bottom-0 left-0 tracking-wide leading-snug text-pretty">
          {frontMatter.title}
        </h1>
        <div className="flex flex-wrap gap-4 justify-between text-sm text-gray-500 dark:text-gray-400 font-bold">
          <span className="flex items-center min-w-fit">
            <Icons.user className="w-4 h-4" />
            <p className="ml-2">{frontMatter.author}</p>
          </span>
          <span className="flex items-center min-w-fit">
            <Icons.timer className="w-4 h-4" />
            <p className="ml-2">{frontMatter.readingTime?.text}</p>
          </span>
          <span className="flex items-center min-w-fit">
            <Icons.calendar className="w-4 h-4" />
            <p className="ml-2">{frontMatter.publishedAt}</p>
          </span>
        </div>
        <p className="text-base text-gray-500 dark:text-gray-400">
          {frontMatter.summary}
        </p>
        <div className="flex gap-2">
          {frontMatter.tags?.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-[#1e1e1e] px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <SocialSharable title={frontMatter.title!} slug={frontMatter.slug!} />
      </div>
      <Image
        width={800}
        height={514}
        alt={frontMatter.title!}
        src={frontMatter.image!}
      />
    </div>
  );
}
