import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/layouts/main';
import localFont from 'next/font/local';

import './globals.scss';

// ----------------------------------------------------------------------

const interLocal = localFont({
  src: [
    {
      path: '../fonts/Inter-Regular.ttf',
      weight: '400',
    },
    {
      path: '../fonts/Inter-Medium.ttf',
      weight: '500',
    },
    {
      path: '../fonts/Inter-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../fonts/Inter-Bold.ttf',
      weight: '700',
    },
  ],
  style: 'normal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tran Thuy Vy - Portfolio',
  description: 'Portfolio built by Tran Thuy Vy',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${interLocal.className} scroll-smooth`}>
      <body>
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
