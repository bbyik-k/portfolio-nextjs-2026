// types/post.ts
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  readingTime?: string;
  featured?: boolean;
};
