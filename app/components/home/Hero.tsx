import Image from 'next/image';
import Link from 'next/link';

const BADGE_TEXT = 'Next.js Blog · 2026';
const PROFILE_LINE = 'Byeongik Kim, Frontend Engineer';
const HEADLINE = 'Building intuitive UX with sustainable, team-friendly code';

const CTA = [
  {
    href: '/posts',
    label: 'Read posts',
    className: 'inline-flex items-center justify-center rounded-xl bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:opacity-90',
  },
  {
    href: '/about',
    label: 'About me',
    className: 'inline-flex items-center justify-center rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-700',
  },
] as const;

const SOCIAL_LINKS = [
  { href: 'https://github.com/', label: 'GitHub' },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
] as const;

const TECH_TAGLINE = 'FE · React · Next.js · TS';

const PROFILE_IMAGE = {
  src: '/images/profile_character.png',
  alt: 'Profile',
} as const;

export default function Hero() {
  return (
    <section className='pt-14 pb-16'>
      <div className='mx-auto max-w-5xl px-4'>
        <div className='grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]'>
          {/* Left */}
          <div className='space-y-6'>
            <div className='inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-400'>
              <span className='h-1.5 w-1.5 rounded-full bg-zinc-300' />
              {BADGE_TEXT}
            </div>

            <div className='space-y-3'>
              <p className='text-sm text-zinc-400'>{PROFILE_LINE}</p>

              <h1 className='text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl'>{HEADLINE}</h1>
            </div>

            <div className='flex flex-wrap items-center gap-3 pt-2'>
              {CTA.map(({ href, label, className }) => (
                <Link key={href} href={href} className={className}>
                  {label}
                </Link>
              ))}

              <div className='ml-1 flex items-center gap-2'>
                {SOCIAL_LINKS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-lg border border-zinc-800 px-3 py-2 text-xs text-zinc-300 transition hover:border-zinc-700 hover:text-zinc-100'
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* <div className='pt-3 text-xs text-zinc-500'>포트폴리오 사이트를 통해 더 자세한 정보를 확인할 수 있습니다.</div> */}
          </div>

          {/* Right */}
          <div className='flex justify-center md:justify-end'>
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
    </section>
  );
}
