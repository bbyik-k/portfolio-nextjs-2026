import { getAllPosts } from '@/service/posts';
import PostGrid from '@/app/components/PostGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: '프론트엔드 개발자 김병익의 주요 프로젝트 목록입니다. React, Next.js, TypeScript 기반 프로젝트 설계와 구현 사례를 확인할 수 있습니다.',
};

export default async function ProjectsPage() {
  const allPosts = await getAllPosts();

  const organizationOrder = ['퓨처로봇', '외주작업', '사이드프로젝트'] as const;

  const groupedPosts = organizationOrder
    .map((org) => ({
      organization: org,
      posts: allPosts.filter((post) => post.organization === org),
    }))
    .filter((group) => group.posts.length > 0);

  return (
    <>
      <section className='w-full bg-zinc-900/50 backdrop-blur-sm py-24 md:py-12'>
        <div className='mx-auto w-full max-w-7xl px-6 md:px-8'>
          <header className='mb-10 md:mb-14 text-center'>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl'>PROJECTS</h2>
            <p className='mt-3 text-zinc-400'>Selected Works</p>
          </header>
          <div className='space-y-12 md:space-y-16 max-w-5xl mx-auto px-4'>
            {groupedPosts.map((group) => (
              <div key={group.organization}>
                <h2 className='text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl'>{group.organization}</h2>
                <div className='mt-4'>
                  <PostGrid posts={group.posts} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
