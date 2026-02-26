import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/service/posts';
import { siteUrl } from '@/lib/siteConfig';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/projects/${post.slug}`,
    lastModified: new Date(post.date || post.periodEnd || new Date().toISOString()),
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
