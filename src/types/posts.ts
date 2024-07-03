import { ReadTimeResults } from "reading-time";

export interface IPost {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  author: string;
  designation: string;
  tags: string[];
  slug: string | null;
  readingTime: ReadTimeResults;
  wordCount: number;
}

export interface IFrontMatter extends IPost, ReadTimeResults {}
