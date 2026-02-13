import { getAllPosts } from '@/service/posts';
import { notFound } from 'next/navigation';

type Props = {
  slug: string;
};

export default async function ProjectMetaCard({ slug }: Props) {
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <>
      <h1 className='text-4xl font-bold text-zinc-100'>{post.title}</h1>
      {/* <p className='mt-4 text-zinc-400'>프로젝트 소개: {post.summary}</p> */}

      {/* <div className='mt-8 text-zinc-300'>상세: {post.description}</div> */}

      <ul className='text-md mt-10 space-y-2 text-zinc-300 pl-4'>
        <li>
          <span className='text-zinc-400'>프로젝트 소개:</span> {post.summary}
        </li>
        <li className='text-zinc-100 font-semibold'>
          <span className='text-zinc-400'>상세:</span> {post.description}
        </li>
        <li>
          <span className='text-zinc-400'>Tech:</span> {post.techStack.join(', ')}
        </li>
        <li>
          <span className='text-zinc-400'>진행 기간:</span> {post.periodStart} ~ {post.periodEnd}
        </li>
        <li>
          <span className='text-zinc-400'>소속:</span> {post.organization}
        </li>
      </ul>

      {/* <section className='mt-12 prose prose-invert'>
        <h2>Detail</h2>
        <p>{post.description}</p>
      </section> */}
    </>
  );
}
