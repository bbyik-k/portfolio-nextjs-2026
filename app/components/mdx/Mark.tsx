type MarkProps = {
  tone?: 'yellow' | 'blue';
  children: React.ReactNode;
};

export function Mark({ tone = 'yellow', children }: MarkProps) {
  const base = 'rounded-md px-1.5 py-0.5 font-medium no-underline';

  const yellow = 'bg-yellow-300/20 text-yellow-200 ring-1 ring-yellow-300/30';

  const blue = 'bg-sky-400/15 text-sky-200 ring-1 ring-sky-300/25';

  return <mark className={`${base} ${tone === 'blue' ? blue : yellow}`}>{children}</mark>;
}
