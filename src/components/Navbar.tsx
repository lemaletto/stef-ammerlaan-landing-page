'use client';

import { navbarLinks, imgLogo } from '../mock/data';
import Dropdown from './Dropdown';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { appVariant } from '../variants/app.variant';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const { loading } = useApp();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return !loading ? (
    <>
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

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center justify-center gap-12 md:gap-10">
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

            {/* Mobile Burger Menu */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 z-50
                transition-all duration-300"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  isDrawerOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-gray-800 rounded-full transition-all"
              />
              <motion.span
                animate={isDrawerOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-gray-800 rounded-full transition-all"
              />
              <motion.span
                animate={
                  isDrawerOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-gray-800 rounded-full transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] 
                bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <img
                    src={imgLogo}
                    onClick={() => {
                      router.push('/');
                      setIsDrawerOpen(false);
                    }}
                    className="w-10 h-auto object-contain cursor-pointer"
                    alt="stef ammerlaan official logo"
                  />
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex-1 p-6">
                  <ul className="flex flex-col gap-2">
                    {navbarLinks.map((item, index) => (
                      <li key={index}>
                        {item.isLink ? (
                          <Link
                            href={item.link ?? '/'}
                            onClick={() => setIsDrawerOpen(false)}
                            className="block text-base uppercase font-bold text-gray-800 
                              tracking-wider py-4 px-4 rounded-xl
                              hover:bg-gray-100 hover:text-gray-900
                              transition-all duration-300"
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <div className="flex flex-col">
                            <div
                              className="text-base uppercase font-bold text-gray-800 
                              tracking-wider py-4 px-4"
                            >
                              {item.name}
                            </div>
                            <div className="pl-4 flex flex-col gap-1">
                              {item.items?.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.link ?? '/'}
                                  onClick={() => setIsDrawerOpen(false)}
                                  className="block text-sm font-semibold text-gray-700 
                                    uppercase tracking-wide py-3 px-4 rounded-lg
                                    hover:bg-gray-100 hover:text-gray-900
                                    transition-all duration-300"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  ) : (
    <></>
  );
}
