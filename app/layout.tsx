import type { Metadata } from 'next';
import { Geist, Geist_Mono, Open_Sans } from 'next/font/google';
import './globals.css';
import 'keen-slider/keen-slider.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { siteUrl } from '@/lib/siteConfig';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '김병익 | 프론트엔드 개발자',
    template: '%s | 김병익',
  },
  description: '로봇 UI와 백오피스 환경을 React, TypeScript로 5년간 설계/구현해온 프론트엔드 개발자 김병익의 포트폴리오입니다.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '김병익 | 프론트엔드 개발자',
    description: 'React, TypeScript 기반으로 로봇 UI 및 백오피스 환경을 설계/구현한 프론트엔드 개발자 김병익의 포트폴리오',
    url: siteUrl,
    siteName: '김병익 Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '김병익 | Frontend Engineer Portfolio',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '김병익 | 프론트엔드 개발자',
    description: 'React·TypeScript 기반 구조 설계를 지향하는 프론트엔드 개발자 김병익의 포트폴리오',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased min-h-screen bg-background text-foreground`}>
        <Header />
        <main className='container mx-auto max-w-full px-4 py-10 bg-[url("/images/LooperGroup2.png")] bg-no-repeat bg-cover bg-fixed bg-center'> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
