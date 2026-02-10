import Image from 'next/image';

const TITLE = <>🌟저는 이렇게 일하고 있어요.</>;

const BULLETS: React.ReactNode[] = [
  <>
    빠르게 흘러가는 프로세스 속에서도 유연하게 대응하며, <br /> 문제 해결을 위해 치열하게 고민할 준비가 되어 있어요.
  </>,
  <>
    사용자에게 더 나은 경험을 제공하기 위한 개선을 즐기며, <br /> 개발자의 DX 또한 중요하게 생각해요.
  </>,
  <>
    트러블슈팅 과정을 기록하고 팀과 공유하여, <br /> 반복되는 이슈를 줄이는 데 집중하고 있어요.
  </>,
  <>
    코드 리뷰 문화에 적극적으로 참여하고, <br /> 더 나은 방향이 있다면 언제든지 경청하고 제안해요.
  </>,
  <>
    함께 일하기 좋은 개발자가 되기 위해 기술뿐 아니라 태도와 소통 방식도 <br /> 꾸준히 돌아보고 개선하고 있어요.
  </>,
];

const DETAIL_IMAGE = { src: '/images/detail/detail.png', alt: '프론트엔드 개발·협업 관련 콘셉트 이미지' } as const;

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex gap-3 text-zinc-300 leading-relaxed'>
      <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500' aria-hidden />
      <span className='[&>code]:rounded [&>code]:bg-zinc-700/80 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:text-zinc-200 [&>code]:font-medium'>{children}</span>
    </li>
  );
}

export default function IntroSection2() {
  return (
    <section className='min-h-[calc(100vh-4rem)] w-full flex flex-col md:flex-row-reverse items-stretch border border-none  border-b-zinc-800 bg-zinc-900/50 backdrop-blur-sm'>
      {/* 좌측: 텍스트 — 가능한 만큼 왼쪽에, 답답하지 않게 여백 유지 */}
      <div className='flex min-w-0 flex-1 flex-col justify-center py-16 pl-6 pr-6 md:pl-8 md:pr-10 lg:pl-10 lg:pr-12'>
        <div className='w-full'>
          <h2 className='text-2xl font-bold leading-snug text-[#86B8FE] sm:text-3xl md:text-4xl'>{TITLE}</h2>
          <ul className='mt-10 flex flex-col gap-5 sm:gap-6' role='list'>
            {BULLETS.map((item, i) => (
              <BulletItem key={i}>{item}</BulletItem>
            ))}
          </ul>
        </div>
      </div>

      {/* 우측: 이미지 — 우측 밀착, 좌측이 잘리지 않도록 object-left */}
      <div className='relative w-full shrink-0 md:w-[42%] lg:w-[44%] min-h-[320px] md:min-h-0'>
        <Image src={DETAIL_IMAGE.src} alt={DETAIL_IMAGE.alt} fill className='object-contain object-left' sizes='(max-width: 768px) 100vw, 44vw' priority={false} />
      </div>
    </section>
  );
}
