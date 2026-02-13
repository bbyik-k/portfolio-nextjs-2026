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
      <h1 className='text-3xl font-bold text-zinc-100'>{post.title}</h1>
      <p className='mt-4 text-zinc-400'>{post.summary}</p>

      <div className='mt-8 text-zinc-500'>ProjectDetailPage: {slug}</div>

      <ul className='mt-10 space-y-2 text-zinc-300'>
        <li>
          <span className='text-zinc-500'>Organization:</span> {post.organization}
        </li>
        <li>
          <span className='text-zinc-500'>Period:</span> {post.periodStart} ~ {post.periodEnd}
        </li>
        <li>
          <span className='text-zinc-500'>Tech:</span> {post.techStack.join(', ')}
        </li>
      </ul>

      <section className='mt-12 prose prose-invert'>
        <h2>Detail</h2>
        <p>{post.description}</p>
      </section>
    </>
  );
}
