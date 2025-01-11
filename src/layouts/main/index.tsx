import React from 'react';

import Header from '../common/header';
import Footer from '../common/footer';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen relative">{children}</main>
      <Footer />
    </>
  );
}
