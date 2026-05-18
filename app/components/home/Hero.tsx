// 'use client';
import Image from 'next/image';
import ScrollDownButton from './ScrollDownButton';

const BADGE_TEXT = 'Frontend Portfolio · 2026';

const TECH_TAGLINE = 'FE · React · Next.js · TS';

const PROFILE_IMAGE = {
  src: '/images/profile_character.png',
  alt: '프론트엔드 개발자 김병익 아바타',
} as const;

export default function Hero() {
  return (
    <>
      <section className='relative pb-24 min-h-[calc(100vh-5rem)] 2xl:min-h-[calc(100vh-6rem)] flex items-center'>
        <div className='mx-auto max-w-5xl px-4 -mt-8'>
          <div className='grid items-start gap-6 md:grid-cols-[1fr_auto]'>
            {/* Left */}
            <div className='space-y-8 pr-4 md:pr-32'>
              <div className='inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-400'>
                <span className='h-1.5 w-1.5 rounded-full bg-zinc-300' />
                {BADGE_TEXT}
              </div>

              <div className='space-y-4'>
                {/* <p className='text-sm text-zinc-400'>{PROFILE_LINE}</p> */}
                {/* <h1 className='text-4xl font-mono tracking-tight text-zinc-100 sm:text-4xl md:text-5xl lg:text-6xl'>ByeongIk Kim</h1> */}
                <h1 className='text-4xl font-mono font-semibold tracking-tight text-indigo-200 sm:text-4xl md:text-5xl lg:text-6xl animate-[glow-breathe_2.5s_ease-in-out_infinite] selection:bg-indigo-500/30'>
                  ByeongIk Kim
                </h1>

                <p className='m-0 mt-8 text-2xl text-zinc-100'>Frontend Engineer</p>
                <p className='m-0 mt-1 text-lg text-zinc-400'>I focus on building clear, scalable, and user-centered web applications.</p>
              </div>
            </div>

            {/* Right: 아바타만 넓이만 차지 */}
            <div className='flex justify-center md:justify-end shrink-0'>
              <div className='relative'>
                {/* subtle glow */}
                <div className='absolute -inset-8 rounded-full bg-linear-to-b from-zinc-800/20 to-transparent blur-2xl' />

                {/* ring */}
                <div className='relative rounded-full p-[2px] bg-linear-to-b from-zinc-200/30 via-zinc-600/20 to-zinc-200/10'>
                  <div className='rounded-full bg-zinc-950 p-2'>
                    <div className='relative h-44 w-44 overflow-hidden rounded-full border border-zinc-800 sm:h-52 sm:w-52 '>
                      <Image src={PROFILE_IMAGE.src} alt={PROFILE_IMAGE.alt} fill priority className='object-cover ' />
                    </div>
                  </div>
                </div>

                {/* small tag */}
                <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-xs text-zinc-400'>{TECH_TAGLINE}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 중앙 스크롤 다운 버튼 — 클릭 시 IntroSection1로 부드럽게 이동 */}
        <ScrollDownButton targetId='intro-1' />
      </section>
    </>
  );
}
