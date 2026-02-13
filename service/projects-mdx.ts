import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects');

export function getProjectMdxBySlug(slug: string) {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(raw);

  return {
    content,
    frontmatter: data as Record<string, unknown>,
  };
}
