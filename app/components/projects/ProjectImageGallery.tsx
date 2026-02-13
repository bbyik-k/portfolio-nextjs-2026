import Image from 'next/image';

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

type Props = {
  images: ProjectImage[];
};

export function ProjectImageGallery({ images }: Props) {
  return (
    <section className='mt-12 space-y-8 max-w-4xl mx-auto px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {images.map((img, idx) => (
          <figure key={idx} className='space-y-2 mx-auto w-full max-w-sm sm:max-w-none'>
            <div className='relative w-full overflow-hidden rounded-xl border border-zinc-800 max-h-[520px]'>
              <Image src={img.src} alt={img.alt} width={1200} height={800} className='w-full h-auto' />
            </div>

            {img.caption && <figcaption className='text-sm text-zinc-400'>{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
