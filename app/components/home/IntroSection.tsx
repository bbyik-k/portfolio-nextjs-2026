import Image from 'next/image';

export type IntroSectionProps = {
  /** 이미지가 보이는 쪽: 'right' = 텍스트 좌 / 이미지 우, 'left' = 텍스트 우 / 이미지 좌 */
  imagePosition: 'left' | 'right';
  /** h2 타이틀 색상 클래스 (예: text-[#FFD2A9], text-[#86B8FE]) */
  titleColor: string;
  title: React.ReactNode;
  bullets: React.ReactNode[];
  image: { src: string; alt: string };
};

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex gap-3 text-zinc-300 leading-relaxed'>
      <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500' aria-hidden />
      <span className='[&>code]:rounded [&>code]:bg-zinc-800 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:text-sky-300 [&>code]:font-semibold'>{children}</span>
    </li>
  );
}

export default function IntroSection({ imagePosition, titleColor, title, bullets, image }: IntroSectionProps) {
  const flexRowClass = imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    <section className='min-h-[calc(100vh-4rem)] w-full bg-zinc-900/50 backdrop-blur-xs'>
      <div className={`mx-auto pt-12 flex w-full max-w-7xl flex-col ${flexRowClass} items-stretch justify-between`}>
        {/* 텍스트 영역 — 가능한 만큼 왼쪽 배치, 답답하지 않게 여백 유지 */}
        <div className='flex min-w-0 flex-col justify-center py-16 pl-6 pr-6 md:pl-8 md:pr-10 lg:pl-10 lg:pr-12'>
          <div className='w-full'>
            <h2 className={`text-2xl font-bold leading-snug sm:text-3xl md:text-4xl ${titleColor}`}>{title}</h2>
            <ul className='mt-10 flex flex-col gap-5 sm:gap-6' role='list'>
              {bullets.map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </ul>
          </div>
        </div>

        {/* 이미지 영역 — 컨텐츠 폭 기준으로만 차지, 가능한 한 좁게 */}
        <div className='relative shrink-0 min-h-[320px] w-[320px] max-w-full md:min-h-0 aspect-7/13 overflow-hidden mx-16'>
          <Image src={image.src} alt={image.alt} fill className='object-contain object-left' sizes='(max-width: 768px) 100vw, 320px' priority={false} />
        </div>
      </div>
    </section>
  );
}
