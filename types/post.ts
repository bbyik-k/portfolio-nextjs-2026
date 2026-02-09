// types/post.ts

/** 태그 유형: 기술 스택 분류에 따라 카드에서 배경색이 달라짐 (lib/tagMapping에서 이름→타입 매핑) */
export type TagType = 'core' | 'api' | 'external' | 'ui';

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  readingTime?: string;
  featured?: boolean;
  thumbnail: string;
  thumbnailAlt?: string;
};
