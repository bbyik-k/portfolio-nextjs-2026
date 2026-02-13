import { notFound } from 'next/navigation';
import ProjectMetaCard from '@/app/components/projects/ProjectMetaCard';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  // if (!post) return notFound();

  return (
    <main className='mx-auto max-w-5xl px-4 py-16'>
      <ProjectMetaCard slug={slug} />
    </main>
  );
}
