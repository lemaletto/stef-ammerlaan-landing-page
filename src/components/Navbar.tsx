'use client';

import { navbarLinks } from '../mock/data';
import Dropdown from './Dropdown';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';
import { appVariant } from '../variants/app.variant';
import Link from 'next/link';

export default function Navbar() {
  const { loading } = useApp();

  return !loading ? (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-50
        bg-white/80 backdrop-blur-md shadow-lg shadow-black/5
        border border-gray-200/50 rounded-2xl px-8 py-4
        md:w-[90%] md:px-6"
      variants={appVariant}
      initial="initial"
      animate="animate"
    >
      <ul className="flex items-center justify-center gap-8 md:gap-6">
        {navbarLinks.map((item, index) =>
          item.isLink ? (
            <Link
              key={index}
              href={item.link ?? '/'}
              className="relative cursor-pointer text-sm uppercase font-semibold
                text-gray-700 tracking-wide transition-all duration-300
                hover:text-black hover:scale-105
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                after:bg-linear-to-r after:from-black after:to-gray-600
                after:transition-all after:duration-300 after:ease-out
                hover:after:w-full"
            >
              {item.name}
            </Link>
          ) : (
            <div
              className="relative cursor-pointer text-sm uppercase font-semibold
                text-gray-700 tracking-wide transition-all duration-300
                hover:text-black hover:scale-105
                group"
              key={index}
            >
              <span
                className="relative
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                  after:bg-linear-to-r after:from-black after:to-gray-600
                  after:transition-all after:duration-300 after:ease-out
                  group-hover:after:w-full"
              >
                {item.name}
              </span>
              <Dropdown items={item.items} />
            </div>
          )
        )}
      </ul>
    </motion.nav>
  ) : (
    <></>
  );
}
