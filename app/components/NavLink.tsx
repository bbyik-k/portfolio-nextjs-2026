'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link href={href} className={`text-sm transition-colors hover:text-gray-300 ${active ? 'text-white' : 'text-zinc-400 hover:text-white'}`} aria-current={active ? 'page' : undefined}>
      {label}
    </Link>
  );
}
