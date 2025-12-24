'use client';

import { navbarLinks, imgLogo } from '../mock/data';
import Dropdown from './Dropdown';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { appVariant } from '../variants/app.variant';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { loading } = useApp();
  const router = useRouter();

  return !loading ? (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50
        bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5
        border-b border-gray-200"
      variants={appVariant}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.img
            layoutId="loading-img"
            src={imgLogo}
            onClick={() => router.push('/')}
            className="w-11 h-auto object-contain cursor-pointer 
              transition-all duration-300 
              hover:scale-110 hover:drop-shadow-lg"
            alt="stef ammerlaan official logo"
            whileHover={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.6 }}
          />
          <ul className="flex items-center justify-center gap-12 md:gap-10">
            {navbarLinks.map((item, index) =>
              item.isLink ? (
                <Link
                  key={index}
                  href={item.link ?? '/'}
                  className="relative cursor-pointer text-sm uppercase font-bold
                    text-gray-800 tracking-[0.18em] transition-all duration-400
                    hover:text-gray-900 hover:tracking-[0.24em]
                    after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:right-0
                    after:h-[3px] after:bg-gradient-to-r after:from-gray-800 after:via-gray-900 after:to-gray-800
                    after:scale-x-0 after:transition-transform after:duration-400 after:ease-out
                    hover:after:scale-x-100
                    after:rounded-full
                    py-2"
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  className="relative cursor-pointer text-sm uppercase font-bold
                    text-gray-800 tracking-[0.18em] transition-all duration-400
                    hover:text-gray-900 hover:tracking-[0.24em]
                    group py-2"
                  key={index}
                >
                  <span
                    className="relative
                      after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:right-0
                      after:h-[3px] after:bg-gradient-to-r after:from-gray-800 after:via-gray-900 after:to-gray-800
                      after:scale-x-0 after:transition-transform after:duration-400 after:ease-out
                      group-hover:after:scale-x-100
                      after:rounded-full"
                  >
                    {item.name}
                  </span>
                  <Dropdown items={item.items} />
                </div>
              )
            )}
          </ul>
          <div className="w-11"></div>
        </div>
      </div>
    </motion.nav>
  ) : (
    <></>
  );
}
