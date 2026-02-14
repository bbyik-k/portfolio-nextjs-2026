import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectMdxBySlug } from '@/service/projects-mdx';
import ProjectMetaCard from '@/app/components/projects/ProjectMetaCard';
import { getAllPosts } from '@/service/posts'; // 지금 쓰는 데이터 소스
import { Mark } from '@/app/components/mdx/Mark';
import { ProjectImageGallery } from '@/app/components/projects/ProjectImageGallery';
import { ProjectImage } from '@/app/components/projects/ProjectImageGallery';
import { remarkMark } from '@/lib/remarkMark';
import Link from 'next/link';

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

      <ProjectImageGallery images={mdx.frontmatter.images as ProjectImage[]} />

      {/* 본문 */}
      <article className='prose prose-invert md:prose-md mt-12 max-w-none'>
        <MDXRemote source={mdx.content} components={{ Mark }} options={{ mdxOptions: { remarkPlugins: [remarkMark] } }} />
      </article>
      <div className='mt-16'>
        <Link href='/projects' className='inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 transition'>
          <span aria-hidden>←</span>
          목록으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
