import IntroSection from './IntroSection';

const TITLE = <>🌟 저는 이렇게 일하고 있어요.</>;

const BULLETS: React.ReactNode[] = [
  <>
    빠르게 흘러가는 프로세스 속에서도 유연하게 대응하며, <br /> 문제 해결을 위해 치열하게 고민할 준비가 되어 있어요.
  </>,
  <>
    사용자에게 더 나은 경험을 제공하기 위한 개선을 즐기며, <br /> 개발자의 DX 또한 중요하게 생각해요.
  </>,
  <>
    트러블슈팅 과정을 기록하고 팀과 공유하여, <br /> 반복되는 이슈를 줄이는 데 집중하고 있어요.
  </>,
  <>
    코드 리뷰 문화에 적극적으로 참여하고, <br /> 더 나은 방향이 있다면 언제든지 경청하고 제안해요.
  </>,
  <>
    함께 일하기 좋은 개발자가 되기 위해 기술뿐 아니라 태도와 소통 방식도 <br /> 꾸준히 돌아보고 개선하고 있어요.
  </>,
];

const IMAGE = { src: '/images/detail/detail.png', alt: '프론트엔드 개발 및 협업 관련 콘셉트 이미지' } as const;

export default function IntroSection2() {
  return <IntroSection imagePosition='left' titleColor='text-[#86B8FE]' title={TITLE} bullets={BULLETS} image={IMAGE} />;
}
