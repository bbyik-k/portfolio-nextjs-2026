import Hero from './components/home/Hero';
import IntroSection1 from './components/home/IntroSection1';
import IntroSection2 from './components/home/IntroSection2';
import ProjectCarousel from './components/home/ProjectCarousel/ProjectCarousel';
import { getFeaturedPosts } from '@/service/posts';
import type { Metadata } from 'next';

// 홈은 루트 URL을 정식 주소로 명시 (title/description은 layout 기본값 상속)
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <>
      <Hero />
      <IntroSection1 />
      <IntroSection2 />
      <ProjectCarousel posts={featuredPosts} />
    </>
  );
}
