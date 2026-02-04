import { Post } from '@/types/post';
import path from 'path';
import fs from 'fs/promises';

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts', 'posts.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const posts = JSON.parse(fileContent) as Post[];
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}
