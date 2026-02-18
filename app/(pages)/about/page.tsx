import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: '프론트엔드 개발자 김병익의 경력 요약과 개발 방향을 소개합니다.',
};

export default function AboutPage() {
  return (
    <main className='mx-auto max-w-3xl px-4 min-h-[calc(100vh-100px)] flex items-center'>
      <section className='space-y-6'>
        <h1 className='text-3xl font-bold text-zinc-100/90'>About</h1>

        <div className='space-y-4 text-zinc-300/80 leading-relaxed'>
          <p>확장성과 유지보수를 고려한 UI 아키텍처 설계를 지향하는 프론트엔드 개발자입니다.</p>
          <p>
            5년간 로봇 및 키오스크 인터페이스와 백오피스 환경을 React와 TypeScript로 설계 및 구현하며, <br /> 복잡한 인터랙션과 운영 구조를 체계적으로 풀어내는 경험을 쌓았습니다.
          </p>
          <p>재사용성과 일관성을 기반으로, 장기적으로 견고한 코드 구조를 만드는 것을 중요하게 생각합니다.</p>
        </div>

        <div className='pt-6'>
          <a
            href='https://bbyiktion.notion.site/resume'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center rounded-md border border-blue-300/40 bg-blue-400/10 px-5 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-400/20 hover:border-blue-300/20'
          >
            View Full Resume →
          </a>
        </div>
      </section>
    </main>
  );
}
