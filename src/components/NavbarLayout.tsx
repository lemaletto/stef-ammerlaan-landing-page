import React from 'react';
import { Analytics } from '@vercel/analytics/next';

import Navbar from './Navbar';

type NavbarLayoutType = {
  children: React.ReactNode;
};
export default function NavbarLayout({ children }: NavbarLayoutType) {
  return (
    <>
      <Navbar />
      <Analytics />
      {children}
    </>
  );
}
