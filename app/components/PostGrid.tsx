import { Post } from '@/types/post';

import PostCard from './home/PostCard';

type Props = { posts: Post[] };

export default function PostGrid({ posts }: Props) {
  return (
    <ul className='mt-6 grid auto-rows-fr gap-4 gap-y-8 md:grid-cols-3'>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </ul>
  );
}
