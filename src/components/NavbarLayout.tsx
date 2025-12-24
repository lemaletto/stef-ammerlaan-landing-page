'use client';

import React from 'react';
import { Analytics } from '@vercel/analytics/next';

import Navbar from './Navbar';
import Loading from './Loading';
import { useApp } from '@/context/AppContext';

type NavbarLayoutType = {
  children: React.ReactNode;
};
export default function NavbarLayout({ children }: NavbarLayoutType) {
  const { loading } = useApp();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Analytics />
          {children}
        </>
      )}
    </>
  );
}
