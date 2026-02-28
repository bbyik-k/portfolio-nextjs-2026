'use client';
import { Post } from '@/types/post';
import Link from 'next/link';
import './ProjectCarousel.css';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
import Image from 'next/image';
// import 'keen-slider/keen-slider.min.css';

const carousel: KeenSliderPlugin = (slider) => {
  const z = 490;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on('created', () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on('detailsChanged', rotate);
};

const SLIDE_STYLES = ['number-slide1', 'number-slide2', 'number-slide3', 'number-slide4', 'number-slide5', 'number-slide6'] as const;

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden
      {...props}
    >
      <path d='M15 18l-6-6 6-6' />
    </svg>
  );
}
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden
      {...props}
    >
      <path d='M9 18l6-6-6-6' />
    </svg>
  );
}

type Props = { posts: Post[] };

export default function ProjectCarousel({ posts }: Props) {
  const [sliderRef, sliderApi] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: '.carousel__cell',
      renderMode: 'custom',
      mode: 'free-snap',
    },
    [carousel]
  );

  if (posts.length === 0) return null;

  return (
    <section className='w-full bg-zinc-900/50 backdrop-blur-sm py-24 md:py-32'>
      <div className='mx-auto w-full max-w-7xl px-6 md:px-8'>
        <header className='mb-10 md:mb-14 text-center'>
          <h2 className='mt-3 text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl'>PROJECTS</h2>
          <p className='mt-3 text-zinc-400'>Selected Works</p>
        </header>
        <div className='carousel-with-arrows mx-auto md:max-w-3xl'>
          <button type='button' className='carousel-arrow carousel-arrow--left' onClick={() => sliderApi.current?.prev()} aria-label='이전 프로젝트'>
            <ArrowLeft />
          </button>
          <button type='button' className='carousel-arrow carousel-arrow--right' onClick={() => sliderApi.current?.next()} aria-label='다음 프로젝트'>
            <ArrowRight />
          </button>
          <div className='carousel-viewport'>
            <div className='wrapper'>
              <div className='scene'>
                <div className='carousel keen-slider' ref={sliderRef}>
                  {posts.map((post, index) => (
                    <div key={post.slug} className={`carousel__cell ${SLIDE_STYLES[index % SLIDE_STYLES.length]}`}>
                      <Link href={`/projects/${post.slug}`} className='carousel__post-card' aria-label={`Read: ${post.title}`}>
                        <div className='carousel__post-image'>
                          <Image src={post.thumbnail} alt={post.thumbnailAlt ?? post.title} fill sizes='(max-width: 768px) 100vw, 480px' className='object-cover object-center' priority={index < 2} />
                        </div>
                        <div className='carousel__post-body'>
                          <p className='carousel__post-meta'>
                            <time dateTime={post.date}>{post.date}</time>
                          </p>
                          <h3 className='carousel__post-title'>{post.title}</h3>
                          <p className='carousel__post-excerpt'>{post.summary}</p>
                          <span className='carousel__post-cta'>Read →</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
