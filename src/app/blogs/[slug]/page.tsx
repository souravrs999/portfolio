import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponent from "@/components/mdx-component";
import Section from "@/components/section";
import BlogHero from "@/components/blog-hero";
import { siteConfig } from "@/util/site-config";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { frontMatter } = await getFileBySlug(params.slug, "posts");
  return {
    title: frontMatter.title || "Blogs",
    description: frontMatter.summary || "A blog post",
    author: frontMatter.author || "Unknown",
    openGraph: {
      title: frontMatter.title || "Blogs",
      description: frontMatter.summary || "A blog post",
      images: [
        {
          url: `${siteConfig.url}${frontMatter.image}`,
          width: 800,
          height: 514,
          alt: frontMatter.title,
        },
      ],
    },
    twitter: {
      title: frontMatter.title || "Blogs",
      description: frontMatter.summary || "A blog post",
      images: [`${siteConfig.url}${frontMatter.image}`],
    },
    alternates: {
      canonical: `${siteConfig.url}/blogs/${frontMatter.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllFilesFrontMatter("posts");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const { code, frontMatter } = await getFileBySlug(params.slug, "posts");
  const Component = getMDXComponent(code);
  return (
    <Section id={params.slug}>
      <BlogHero frontMatter={frontMatter} />
      <article className="prose">
        <Component components={{ ...MDXComponent }} />
      </article>
    </Section>
  );
}
