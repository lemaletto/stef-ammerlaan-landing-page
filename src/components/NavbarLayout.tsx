'use client';

import React from 'react';
import { Analytics } from '@vercel/analytics/next';

import Navbar from './Navbar';
import Loading from './Loading';
import CustomCursor from './CustomCursor';
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
        <CustomCursor />
          <Navbar />
          <Analytics />
          {children}
        </>
      )}
    </>
  );
}
