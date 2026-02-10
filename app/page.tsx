import FeaturedPosts from './components/home/FeaturedPosts';
import Hero from './components/home/Hero';
import IntroSection1 from './components/home/IntroSection1';
import IntroSection2 from './components/home/IntroSection2';
import ProjectCarousel from './components/home/ProjectCarousel/ProjectCarousel';
import { getAllPosts, getFeaturedPosts } from '@/service/posts';

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();
  const allPosts = await getAllPosts();
  return (
    <>
      <Hero />
      <IntroSection1 />
      <IntroSection2 />
      {/* <FeaturedPosts posts={allPosts} /> */}
      <ProjectCarousel posts={featuredPosts} />
    </>
  );
}
