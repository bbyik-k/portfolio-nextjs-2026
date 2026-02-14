import { Github, Mail, FileText } from 'lucide-react';

const iconClass = 'h-5 w-5';
const linkClass = 'hover:text-white transition-colors';

const FOOTER_LINKS = [
  { href: 'https://bbyiktion.notion.site/resume', label: 'Resume', icon: FileText },
  // { href: 'https://linkedin.com/in/...', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/bbyik-k', label: 'GitHub', icon: Github },
  { href: 'mailto:ikbyeong.kim@gmail.com', label: 'Email', icon: Mail },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-zinc-800'>
      <div className='mx-auto max-w-5xl px-4 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-zinc-400'>
        <span>© {year} IKKIM</span>
        <nav className='flex items-center gap-5'>
          {FOOTER_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={linkClass}
              aria-label={label}
            >
              <Icon className={iconClass} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
