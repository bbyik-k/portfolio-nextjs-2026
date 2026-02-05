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

type Props = { posts: Post[] };

export default function ProjectCarousel({ posts }: Props) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: '.carousel__cell',
      renderMode: 'custom',
      mode: 'free-snap',
    },
    [carousel]
  );

  if (posts.length === 0) return null;
  console.log(posts);

  return (
    <div className='wrapper'>
      <div className='scene'>
        <div className='carousel keen-slider' ref={sliderRef}>
          {posts.map((post, index) => (
            <div key={post.slug} className={`carousel__cell ${SLIDE_STYLES[index % SLIDE_STYLES.length]}`}>
              <Link href={`/posts/${post.slug}`} className='carousel__post-card' aria-label={`Read: ${post.title}`}>
                <div className='relative h-[150px] w-full overflow-hidden rounded-lg'>
                  <Image src={post.thumbnail} alt={post.thumbnailAlt ?? post.title} fill sizes='200px' className='object-cover object-center' priority={index < 2} />
                </div>
                <p className='carousel__post-meta'>
                  <time dateTime={post.date}>{post.date}</time>
                  {post.readingTime ? ` · ${post.readingTime}` : ''}
                </p>
                <h3 className='carousel__post-title'>{post.title}</h3>
                <p className='carousel__post-excerpt'>{post.excerpt}</p>
                <span className='carousel__post-cta'>Read →</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
