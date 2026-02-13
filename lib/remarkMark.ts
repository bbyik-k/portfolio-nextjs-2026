import type { Plugin } from 'unified';
import { visit, SKIP } from 'unist-util-visit';
import type { Root, Parent, Text } from 'mdast';

/**
 * Mark 변환에 필요한 최소 MDX 노드 타입들
 * (mdast 기본 Content에 포함되어 있지 않으므로, 프로젝트 내부에서 최소만 정의)
 */
type MdxJsxAttribute = {
  type: 'mdxJsxAttribute';
  name: string;
  value?: string;
};

type MdxJsxTextElement = {
  type: 'mdxJsxTextElement';
  name: string;
  attributes?: MdxJsxAttribute[];
  children: Text[];
};

type MarkPart = { kind: 'text'; value: string } | { kind: 'mark'; tone: 'yellow' | 'blue'; value: string };

type NewNode = Text | MdxJsxTextElement;

function splitByPattern(value: string): MarkPart[] | null {
  const re = /(==([^=]+)==)|(\[\[([^\]]+)\]\])/g;

  const out: MarkPart[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(value))) {
    if (m.index > last) out.push({ kind: 'text', value: value.slice(last, m.index) });

    if (m[2]) out.push({ kind: 'mark', tone: 'yellow', value: m[2].trim() });
    else if (m[4]) out.push({ kind: 'mark', tone: 'blue', value: m[4].trim() });

    last = m.index + m[0].length;
  }

  if (last < value.length) out.push({ kind: 'text', value: value.slice(last) });

  return out.some((x) => x.kind === 'mark') ? out : null;
}

/**
 * mdast text 노드들을 순회하며
 * ==...== / [[...]] 문법을 <Mark tone="...">...</Mark> 로 변환합니다.
 */
export const remarkMark: Plugin<[], Root> = () => {
  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index: number | undefined, parent: Parent | undefined) => {
      if (!parent || index === undefined) return;

      // 코드 영역은 제외
      if (parent.type === 'inlineCode' || parent.type === 'code') return;

      const parts = splitByPattern(node.value);
      if (!parts) return;

      const newNodes: NewNode[] = parts.map((p) => {
        if (p.kind === 'text') {
          return { type: 'text', value: p.value };
        }

        return {
          type: 'mdxJsxTextElement',
          name: 'Mark',
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'tone',
              value: p.tone,
            },
          ],
          children: [{ type: 'text', value: p.value }],
        };
      });

      /**
       * parent.children은 mdast의 Content[]로 타입이 좁게 잡혀 있어
       * 프로젝트 내부에서 정의한 MDX 노드(NewNode)를 그대로 splice하면 타입 에러가 날 수 있습니다.
       *
       * 이 경우의 정석은 mdast Content 타입 확장(공식 MDX 타입 포함)인데,
       * 포트폴리오 프로젝트에서는 오버킬일 수 있으니,
       * "부모 children 배열"을 NewNode[]로 로컬에서만 확장해서 안전하게 다룹니다.
       */
      const children = parent.children as unknown as NewNode[];
      children.splice(index, 1, ...newNodes);

      // visit 순회 인덱스 꼬임 방지
      return [SKIP, index + newNodes.length];
    });
  };
};
