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

        <div className='space-y-4 text-zinc-100 leading-relaxed bg-zinc-800/60 px-3 py-5 rounded-lg'>
          <p>
            실시간 인터랙션 기반 서비스와 운영 및 관리 백오피스를 개발하며
            <br />
            복잡한 요구사항을 빠르게 구조화해 제품으로 구현해 왔습니다.
          </p>

          <p>
            관리자 기능 개선으로 초기 세팅 시간을 50% 이상 단축했고,
            <br />
            신규 서비스는 기획부터 운영까지 주도하여 고객사 300% 증가 성과를 만들었습니다.
          </p>

          <p>
            완성도 높은 제품은 협업에서 나온다고 생각하여, 구성원들과 적극적으로 소통하고 고민하며 개발하고 있습니다. <br />
            앞으로도 기술적인 깊이와 사용자 경험을 모두 고려한 개발에 집중하며, <br />
            비즈니스 가치를 창출하는 개발자로 성장하고자 합니다.
          </p>
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
