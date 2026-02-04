import { Post } from '@/types/post';
import Link from 'next/link';

export default function PostCard({ post }: { post: Post }) {
  console.log(post);
  return (
    <li className='group'>
      <Link href={`/posts/${post.slug}`} className='block rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 transition hover:border-zinc-700'>
        <div className='flex items-center justify-between gap-4'>
          <p className='text-xs text-zinc-500'>
            <time dateTime={post.date}>{post.date}</time>
            {post.readingTime ? ` · ${post.readingTime}` : ''}
          </p>
          <span className='text-xs text-zinc-500 transition group-hover:text-zinc-300'>Read →</span>
        </div>

        <h3 className='truncate mt-2 text-base font-semibold tracking-tight text-zinc-100'>{post.title}</h3>

        <p className='mt-2 line-clamp-2 text-sm leading-6 text-zinc-400'>{post.excerpt}</p>

        {post.tags && post.tags.length > 0 && (
          <div className='mt-4 flex flex-wrap gap-2'>
            {post.tags.map((tag) => (
              <span key={tag} className='rounded-full border border-zinc-800 px-2 py-1 text-[11px] text-zinc-400'>
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </li>
  );
}
