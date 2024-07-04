import Link from "next/link";
import Image from "next/image";

import BlogImg from "./mdx-blog-img";
import CodeBlock from "./mdx-code-block";
import QuotedText from "./mdx-quoted-text";
import Step from "./mdx-step";

import { MDXComponents } from "mdx/types";
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface CustomLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

const CustomLink: FC<CustomLinkProps> = ({ href, children, ...rest }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
};

const MDXComponent: MDXComponents = {
  Image,
  BlogImg,
  a: CustomLink as unknown as React.ComponentType<
    React.HTMLAttributes<HTMLAnchorElement>
  >,
  QuotedText,
  CodeBlock,
  Step,
};

export default MDXComponent;
