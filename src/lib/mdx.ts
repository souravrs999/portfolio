import matter from "gray-matter";
import readingTime from "reading-time";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { IPost } from "@/types/posts";

import { bundleMDX } from "mdx-bundler";

import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import { IFrontMatter } from "@/types/posts";

export async function getFileBySlug(slug: string, type: string) {
  const source = readFileSync(
    join(process.cwd(), "data", type, `${slug}.mdx`),
    "utf8"
  );

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            properties: {
              className: ["anchor"],
              ariaHidden: true,
              tabIndex: -1,
            },
            content: {
              type: "element",
              tagName: "span",
              properties: {
                className: ["sr-only"],
              },
              children: [{ type: "text", value: "Link to this heading" }],
            },
          },
        ],
      ];
      return options;
    },
  });

  const frontMatter: Partial<IFrontMatter> = {
    title: frontmatter.title,
    publishedAt: frontmatter.publishedAt,
    summary: frontmatter.summary,
    image: frontmatter.image,
    author: frontmatter.author,
    designation: frontmatter.designation,
    tags: frontmatter.tags,
    slug: slug || null,
    readingTime: readingTime(source),
    wordCount: source.split(/\s+/gu).length,
  };

  return {
    code,
    frontMatter,
  };
}

export async function getAllFilesFrontMatter(type: string) {
  const files = readdirSync(join(process.cwd(), "data", type));

  return files.reduce<IPost[]>((allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);
    return [
      {
        ...(data as IPost),
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
  }, []);
}
