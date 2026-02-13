import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectMdxBySlug } from '@/service/projects-mdx';
import ProjectMetaCard from '@/app/components/projects/ProjectMetaCard';
import { getAllPosts } from '@/service/posts'; // 지금 쓰는 데이터 소스

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1) 카드/메타 정보(JSON)
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  // console.log(post);
  if (!post) return notFound();

  // 2) 본문(MDX)
  const mdx = getProjectMdxBySlug(slug);
  if (!mdx) return notFound();

  return (
    <main className='mx-auto max-w-5xl px-4 py-16'>
      {/* 상단 메타 */}
      <ProjectMetaCard slug={slug} />

      {/* 본문 */}
      <article className='prose prose-invert mt-12 max-w-none'>
        <MDXRemote source={mdx.content} />
      </article>
    </main>
  );
}
