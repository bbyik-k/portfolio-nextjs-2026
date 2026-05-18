'use client';

import { ChevronDown } from 'lucide-react';

type Props = {
  targetId: string;
  label?: string;
};

export default function ScrollDownButton({ targetId, label = '다음 섹션으로 스크롤' }: Props) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    // IntroSection의 페이지 좌표를 viewport 최상단(scrollY=0 기준)에 정렬
    // sticky Header는 반투명이라 Hero 잔상이 비쳐 보이므로, Hero 자체를 viewport 밖으로 완전히 밀어냄
    // IntroSection 상단 padding(pt-12)이 Header 영역을 자연스럽게 받쳐주므로 본문 콘텐츠는 가려지지 않음
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      aria-label={label}
      className='absolute bottom-12 left-1/2 -translate-x-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/60 text-zinc-300 backdrop-blur-sm transition hover:border-indigo-400/40 hover:text-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 animate-bounce motion-reduce:animate-none'
    >
      <ChevronDown className='h-5 w-5' aria-hidden />
    </button>
  );
}
