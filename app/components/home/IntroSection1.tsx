import Image from 'next/image';

const TITLE = (
  <>
    👋 사용자 경험과 팀의 개발 생산성을 <br /> 함께 고민하는 프론트엔드 개발자입니다.
  </>
);

const BULLETS: React.ReactNode[] = [
  <>
    기획 의도를 정확하게 파악하고,
    <br /> 실제 사용자 경험까지 고려한 화면을 구현하는 데 집중하고 있어요.
  </>,
  <>
    로봇 인터페이스와 키오스크 형식의 화면 개발을 담당하며, <br /> 복잡한 인터랙션을 직관적인 UI 로 구성하는 설계를 해왔어요.
  </>,
  <>
    <code>React</code>와 <code>TypeScript</code> 기반 프로젝트에서 기술 스펙 정의부터 컴포넌트 설계,
    <br /> 협업 문서화까지의 과정을 주도해 본 경험이 있어요.
  </>,
  <>
    디자인 시스템 관점에서 UI 컴포넌트를 재사용성을 고려해 설계하고,
    <br /> <code>Jest</code>를 활용한 단위 테스트와 <code>Storybook</code> 문서화도 적용해 보았어요.
  </>,
  <>
    상태 관리는 <code>TanStack Query</code>, <code>Redux</code>, <code>Zustand</code>,<br /> 스타일링은 <code>Tailwind CSS</code>, <code>Emotion</code>을 사용하며, <br /> <code>Next.js</code> 환경에
    대한 역량도 보유했어요.
  </>,
  <>
    유지 보수성과 확장성을 중시하며, <br /> 동료가 신뢰하고 이어서 개발할 수 있는 코드를 지향하고 있어요.
  </>,
];

const DETAIL_IMAGE = { src: '/images/detail/detail.png', alt: '프론트엔드 개발·협업 관련 콘셉트 이미지' } as const;

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex gap-3 text-zinc-300 leading-relaxed'>
      <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500' aria-hidden />
      {/* <span className='[&>code]:rounded [&>code]:bg-zinc-700/80 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:text-zinc-200 [&>code]:font-medium'>{children}</span> */}
      <span className='[&>code]:rounded [&>code]:bg-zinc-800 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:text-sky-300 [&>code]:font-semibold'>{children}</span>
    </li>
  );
}

export default function IntroSection1() {
  return (
    // <section className='min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-stretch border border-zinc-800 '>
    <section className='min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-stretch border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm'>
      {/* 좌측: 텍스트 — 가능한 만큼 왼쪽에, 답답하지 않게 여백 유지 */}
      <div className='flex min-w-0 flex-1 flex-col justify-center py-16 pl-6 pr-6 md:pl-8 md:pr-10 lg:pl-10 lg:pr-12'>
        <div className='w-full'>
          <h2 className='text-2xl font-bold leading-snug text-[#FFD2A9] sm:text-3xl md:text-4xl'>{TITLE}</h2>
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
