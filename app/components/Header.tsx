import Link from 'next/link';
import NavLink from './NavLink';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/posts', label: 'Posts' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='sticky top-0 left-0 right-0 z-50 bg-zinc-900/50 backdrop-blur-sm border-b border-zinc-800'>
      <div className='mx-auto max-w-5xl px-4 py-4 flex items-center justify-between'>
        <Link
          href='/'
          className='font-semibold tracking-tight text-white  transition duration-300
    [text-shadow:0_0_10px_rgba(99,102,241,0.18)]
    hover:[text-shadow:0_0_14px_rgba(99,102,241,0.35)]'
        >
          IKKIM
        </Link>
        <nav className='flex items-center gap-5'>
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}
