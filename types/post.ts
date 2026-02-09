// types/post.ts

/** 태그 유형: 기술 스택 분류에 따라 카드에서 배경색이 달라짐 (lib/tagMapping에서 이름→타입 매핑) */
export type TagType = 'core' | 'api' | 'external' | 'ui';

export type Post = {
  title: string;
  slug: string;
  techStack: string[];
  summary: string;
  description: string;
  organization: string;
  periodStart: string;
  periodEnd: string;
  date: string;
  featured?: boolean;
  thumbnail: string;
  thumbnailAlt: string;
};
