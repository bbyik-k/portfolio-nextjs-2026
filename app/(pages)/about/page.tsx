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
            로봇 플랫폼 기업에서, 사람과 로봇이 자연스럽게 상호작용을 할 수 있도록 지원하는 웹앱을 개발해 왔습니다. 이 과정에서 사용자 중심의 기능을 설계하고 구현하며, 더 나은 경험을 제공하는 데
            집중했습니다.
          </p>

          <p>
            신규 서비스의 기획부터 운영까지 전 과정을 주도하며, 성공적인 런칭을 통해 비즈니스 가치를 확장한 경험이 있습니다. 다양한 요구사항과 맞춤화 전략이 필요한 콘텐츠를 개발하며, 고객의 관점에서
            제품을 깊이 이해하는 역량을 키워왔습니다.
          </p>

          <p>
            완성도 높은 제품은 협업에서 나온다고 생각하여, 구성원들과 적극적으로 소통하고 고민하며 개발하고 있습니다. 앞으로도 기술적인 깊이와 사용자 경험을 모두 고려한 개발에 집중하며, 끊임없이
            학습하고 협력하여 비즈니스 가치를 창출하는 개발자로 성장하고자 합니다.
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
