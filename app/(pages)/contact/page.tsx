import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: '프론트엔드 개발자 김병익에게 연락할 수 있는 이메일, GitHub, 이력(노션) 링크를 제공합니다.',
};

type ContactItem = {
  label: string;
  href: string;
  text: string;
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'Email',
    href: 'mailto:ikbyeong.kim@gmail.com',
    text: 'ikbyeong.kim@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/bbyik-k',
    text: 'github.com/bbyik-k',
  },
  {
    label: 'Resume',
    href: 'https://bbyiktion.notion.site/resume',
    text: 'View Full Resume →',
  },
];

export default function ContactPage() {
  return (
    <main className='mx-auto max-w-3xl px-4 min-h-[calc(100vh-130px)] flex items-center'>
      <section className='w-full space-y-10'>
        <h1 className='text-3xl font-bold'>Contact</h1>

        <div className='mt-6 space-y-6 text-zinc-300 text-lg rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-900/90 via-zinc-900 to-zinc-950 shadow-[0_18px_50px_rgba(0,0,0,0.7)] px-6 py-7 sm:px-8 sm:py-8'>
          <div className='space-y-1'>
            <p className='text-xl font-semibold text-white'>김병익</p>
            <p className='text-base text-zinc-300'>Byeongik Kim</p>
            <p className='text-base text-zinc-400'>Frontend Developer</p>
          </div>

          <div className='pt-4 space-y-3'>
            {CONTACT_ITEMS.map(({ label, href, text }) => (
              <div key={label} className='flex items-center gap-4 text-base'>
                <p className='w-20 text-[11px] font-semibold tracking-[0.18em] text-zinc-400'>{label.toUpperCase()}</p>
                <a href={href} target='_blank' rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} className='truncate text-blue-200 hover:text-blue-300 transition-colors'>
                  {text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
