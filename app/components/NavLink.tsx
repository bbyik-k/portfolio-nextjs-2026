'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
  external?: boolean;
};

export default function NavLink({ href, label, external }: Props) {
  const pathname = usePathname();
  const active = pathname === href;
  const className = `text-sm transition-colors hover:text-gray-300 ${active ? 'text-white' : 'text-zinc-400 hover:text-white'}`;

  if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-current={active ? 'page' : undefined}>
      {label}
    </Link>
  );
}
