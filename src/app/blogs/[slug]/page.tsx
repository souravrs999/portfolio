import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import MDXComponent from "@/components/mdx-component";
import Section from "@/components/section";
import BlogHero from "@/components/blog-hero";

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
