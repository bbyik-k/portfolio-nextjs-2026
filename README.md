# byeongik.com

Next.js 기반으로 구축한 개인 프론트엔드 포트폴리오 사이트입니다.  
프로젝트 경험, 기술 스택, 문제 해결 과정 등을 상세하게 정리해두었습니다.

- Framework : Next.js
- Language : TypeScript
- Styling : Tailwind CSS
- Content : MDX + gray-matter
- UI Components : Keen Slider
- Icons : Lucide
- Analytics : Google Analytics 4
- Third-party Integration : @next/third-parties
- Deployment : Vercel
- Performance: Lighthouse

## Live Site

https://byeongik.com

## Features

MDX-based Project Documentation

- 프로젝트 설명을 `MDX` 기반 콘텐츠로 관리하여 Markdown 문서와 React 컴포넌트를 함께 사용할 수 있도록 구성했습니다.

Custom MDX Rendering

- MDX 본문에 하이라이트 문법과 `커스텀 Mark` 컴포넌트를 적용해 프로젝트 문서를 더 풍부하고 읽기 쉬운 형태로 표현할 수 있도록 구성했습니다.

Performance Optimization

- 이미지 최적화(WebP), lazy loading, 미사용 CSS 제거 등을 통해 초기 로딩 성능과 `Lighthouse` 점수를 개선했습니다.

Dynamic Project Pages

- Next.js App Router의 `dynamic route` 를 활용하여 새 프로젝트 추가 시 별도의 페이지 코드 수정 없이 자동으로 상세 페이지가 생성됩니다.

SEO Setup

- Next.js `Metadata API`를 기반으로 Open Graph, favicon, robots.txt, sitemap.xml, og image를 구성하여 검색 노출과 링크 공유 품질을 함께 고려했습니다.

Project Screenshot Slider

- 프로젝트 스크린샷을 직관적으로 확인할 수 있도록 Keen Slider 기반의 이미지 `슬라이더` UI를 구현했습니다.

Analytics Integration

- `Google Analytics 4`를 적용하여 사용자 방문, 페이지 탐색 흐름, 유입 경로 등의 데이터를 수집합니다.

Responsive UI

- 모바일과 데스크톱 환경 모두에서 안정적인 `반응형` 화면 구성을 위해 레이아웃, 캐러셀, 이미지 정렬, overflow 문제 등을 세밀하게 조정했습니다.

## Running Locally

This project requires Node.js 18+.

```bash
git clone https://github.com/bbyik-k/byeongik.com.git
cd byeongik.com
pnpm install
pnpm dev
```

Then open:

```bash
http://localhost:3000
```

## License

Copyright © 2026 [Byeongik Kim](https://github.com/bbyik-k).<br />
This project is MIT licensed.
