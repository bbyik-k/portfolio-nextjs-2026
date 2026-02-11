import IntroSection from './IntroSection';

const TITLE = (
  <>
    👋 사용자 경험과 팀의 개발 생산성을 <br /> 함께 고민하는 프론트엔드 개발자입니다.
  </>
);

const BULLETS: React.ReactNode[] = [
  <>
    기획 의도를 정확하게 파악하고,
    <br /> 실제 사용자 경험까지 고려한 화면을 구현하는 데 집중하고 있어요.
  </>,
  <>
    로봇 인터페이스와 키오스크 형식의 화면 개발을 담당하며, <br /> 복잡한 인터랙션을 직관적인 UI 로 구성하는 설계를 해왔어요.
  </>,
  <>
    <code>React</code>와 <code>TypeScript</code> 기반 프로젝트에서 기술 스펙 정의부터 컴포넌트 설계,
    <br /> 협업 문서화까지의 과정을 주도해 본 경험이 있어요.
  </>,
  <>
    디자인 시스템 관점에서 UI 컴포넌트를 재사용성을 고려해 설계하고,
    <br /> <code>Jest</code>를 활용한 단위 테스트와 <code>Storybook</code> 문서화도 적용해 보았어요.
  </>,
  <>
    상태 관리는 <code>TanStack Query</code>, <code>Redux</code>, <code>Zustand</code>,<br /> 스타일링은 <code>Tailwind CSS</code>, <code>Emotion</code>을 사용하며, <br /> <code>Next.js</code> 환경에
    대한 역량도 보유했어요.
  </>,
  <>
    유지 보수성과 확장성을 중시하며, <br /> 동료가 신뢰하고 이어서 개발할 수 있는 코드를 지향하고 있어요.
  </>,
];

const IMAGE = { src: '/images/detail/detail.png', alt: '프론트엔드 개발 및 협업 관련 콘셉트 이미지' } as const;

export default function IntroSection1() {
  return <IntroSection imagePosition='right' titleColor='text-[#FFD2A9]' title={TITLE} bullets={BULLETS} image={IMAGE} />;
}
