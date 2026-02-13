import { getAllPosts } from '@/service/posts';
import PostGrid from '@/app/components/PostGrid';
export default async function ProjectsPage() {
  const allPosts = await getAllPosts();

  return (
    <>
      <section className='w-full bg-zinc-900/50 backdrop-blur-sm py-24 md:py-32'>
        <div className='mx-auto w-full max-w-7xl px-6 md:px-8'>
          <header className='mb-10 md:mb-14 text-center'>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl'>PROJECTS</h2>
            <p className='mt-3 text-zinc-400'>Selected Works</p>
          </header>
          <PostGrid posts={allPosts} />
        </div>
      </section>
    </>
  );
}
