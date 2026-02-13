import { Post } from '@/types/post';

import PostCard from './home/PostCard';

type Props = { posts: Post[] };

export default function PostGrid({ posts }: Props) {
  return (
    <section className='pb-16'>
      <div className='mx-auto max-w-5xl px-4'>
        <ul className='mt-6 grid gap-4 md:grid-cols-3'>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}
