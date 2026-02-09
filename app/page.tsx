import FeaturedPosts from './components/home/FeaturedPosts';
import Hero from './components/home/Hero';
import ProjectCarousel from './components/home/ProjectCarousel/ProjectCarousel';
import { getAllPosts, getFeaturedPosts } from '@/service/posts';

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();
  const allPosts = await getAllPosts();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={allPosts} />
      <ProjectCarousel posts={featuredPosts} />
    </>
  );
}
