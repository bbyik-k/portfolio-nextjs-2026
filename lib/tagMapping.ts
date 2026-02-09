import type { TagType } from '@/types/post';

/**
 * 태그 이름 → 유형 매핑 테이블
 * - core: 기본 기술 스택 (언어, 프레임워크, 코어 라이브러리)
 * - api: API·외부 연동 (오픈 API, 인코딩, 차트 등)
 * - external: 외부 기술·프로토콜·아키텍처
 * - ui: UI·콘텐츠 유형 (CMS, SEO 등)
 *
 * 새 태그는 여기에만 추가하면 됨. posts.json에는 문자열만 작성.
 */
export const TAG_TYPE_MAP: Record<string, TagType> = {
  // --- core ---
  React: 'core',
  Typescript: 'core',
  TypeScript: 'core',
  JavaScript: 'core',
  'Next.js': 'core',
  LocalStorage: 'core',
  Metadata: 'core',
  HTML: 'core',
  CSS: 'core',
  Tailwind: 'core',
  'HTML5 Canvas': 'core',
  canvas: 'core',
  'Nivo-Chart': 'core',
  xlsx: 'core',
  'MUI(Material-UI)': 'core',
  'Handlebars.js': 'core',
  CORS: 'core',
  WBS: 'core',

  // --- api ---
  '기상청 API': 'api',
  'GitHub API': 'api',
  'REST API': 'api',
  'MediaDevices API': 'api',
  'i18n(다국어지원)': 'api',
  TTS: 'api',
  'Chart.js': 'api',
  Base64: 'api',

  // --- external ---
  WebSocket: 'external',
  MVC: 'external',
  Facade: 'external',
  State: 'external',
  '실시간 데이터 처리': 'external',
  '비즈니스 로직 최적화': 'external',

  // --- ui ---
  CMS: 'ui',
  '인터랙티브 UI': 'ui',
  SEO: 'ui',
  Release: 'ui',
};

const DEFAULT_TAG_TYPE: TagType = 'core';

/** 태그 이름으로 유형 조회. 매핑에 없으면 core 반환 */
export function getTagType(tagName: string): TagType {
  return TAG_TYPE_MAP[tagName] ?? DEFAULT_TAG_TYPE;
}
