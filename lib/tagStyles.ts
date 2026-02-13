import type { TagType } from '@/types/post';
import { getTagType } from '@/lib/tagMapping';

/**
 * 태그 유형별 배경색 (포스트 카드 등에서 사용)
 * - core: 기본 기술 스택 (React, TypeScript 등) → 파란색
 * - api: API·외부 연동 (기상청 API, Chart.js 등) → 주황색
 * - external: 외부 기술·프로토콜 (WebSocket, MVC 등) → 노란색
 * - ui: UI·콘텐츠 유형 (CMS, 인터랙티브 UI 등) → 초록색
 */
const TAG_TYPE_CLASSES: Record<TagType, string> = {
  core: 'bg-blue-700 text-zinc-100',
  api: 'bg-amber-600 text-zinc-100',
  external: 'bg-yellow-600 text-zinc-100',
  ui: 'bg-emerald-700 text-zinc-100',
};

const TAG_BASE = 'rounded-md px-2 py-1 text-[11px] font-medium';

export function getTagClassName(type: TagType): string {
  return `${TAG_BASE} ${TAG_TYPE_CLASSES[type]}`;
}

/** 태그 이름으로 스타일 클래스 반환 (매핑 테이블에서 타입 조회 후 적용) */
export function getTagClassNameByName(tagName: string): string {
  return getTagClassName(getTagType(tagName));
}
