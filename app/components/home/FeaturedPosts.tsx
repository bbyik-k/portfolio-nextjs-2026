import { Post } from '@/types/post';
import Link from 'next/link';
import PostCard from './PostCard';

type Props = { posts: Post[] };

export default function FeaturedPosts({ posts }: Props) {
  return (
    <section className='pb-16'>
      <div className='mx-auto max-w-5xl px-4'>
        <div className='flex items-end justify-between gap-4'>
          <div className='space-y-1'>
            <h2 className='text-lg font-semibold tracking-tight text-zinc-100'>Featured posts</h2>
            <p className='text-sm text-zinc-400'>최근에 정리한 핵심 내용들입니다.</p>
          </div>

          <Link href='/posts' className='text-sm text-zinc-400 transition hover:text-zinc-100'>
            View all →
          </Link>
        </div>

        <ul className='mt-6 grid gap-4 md:grid-cols-3'>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}
