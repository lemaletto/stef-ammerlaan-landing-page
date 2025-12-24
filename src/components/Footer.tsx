'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { imgLogo } from '@/mock/data';

export default function Footer() {
  const router = useRouter();
  const goHome = () => router.push('/');

  return (
    <footer className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
      <div
        className="flex flex-col items-center justify-center cursor-pointer"
        onClick={() => goHome()}
      >
        <p className="flex flex-col items-center justify-center text-sm m-1.5">
          <span className="font-bold mb-0.5">ACCUEIL</span>
          <span className="font-light">HOME</span>
        </p>
        <motion.img
          layoutId="loading-img"
          src={imgLogo}
          className="w-15 h-auto object-contain cursor-pointer"
          alt="stef ammerlaan official logo"
        />
      </div>
    </footer>
  );
}
