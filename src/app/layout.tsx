import type { Metadata } from 'next';
import { Poppins, Rubik } from 'next/font/google';

import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';

import { siteConfig } from './page';

import './globals.css';

// ---------------------------------------------------

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ttv-tranthuyvy-cv.vercel.app/'),
  title: {
    default: siteConfig.name,
    template: `%s - Frontend Developer`,
  },
  description: siteConfig.description,

  keywords: [
    'ttv',
    'tv',
    'portfolio',
    'frontend',
    'developer',
    'react',
    'nextjs',
    'tailwindcss',
    'typescript',
    'web developer',
    'web',
    'web dev',
    'tran thuy vy',
    'website',
    '@tranthuyvy',
    'tranvy',
    'vy',
    'tranthuyvy',
    'vytran',
    'vytran.dev',
  ],
  authors: [
    {
      name: 'Tran Thuy Vy',
      url: 'https://github.com/tranthuyvy',
    },
  ],
  creator: 'tranthuyvy',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/banner.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/banner.png`],
    creator: '@tranthuyvy',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            'flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]',
            { 'bg-white': '#E6E7EB' }
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
