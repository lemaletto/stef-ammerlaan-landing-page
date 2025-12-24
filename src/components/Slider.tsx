'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SliderProp = {
  images: string[] | undefined;
};
export default function Slider({ images }: SliderProp) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const formatImages = () => {
    if (!images) return;
    let res: { image: string; key: string }[] = [];
    for (let i = 0; i < images.length; i++) {
      res = [...res, { image: images[i], key: `000${i + 1}` }];
    }

    res = [...res, { image: '', key: '' }];

    return res.map((item, id) =>
      item.image ? (
        <button
          className="mr-2.5 h-37.5 cursor-pointer max-w-sm:max-h-full max-lg:h-90% group"
          key={id}
          onClick={() => setSelectedImage(item.image)}
        >
          <p className="font-bold mb-1.25 text-xs text-gray-800 group-hover:text-gray-900 transition-colors">
            {item.key}
          </p>
          <div className="relative w-full h-40 max-xl:h-full max-lg:h-60 max-sm:h-40 overflow-hidden rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
            <Image
              layout="fill"
              objectFit="cover"
              src={item.image}
              alt="sketch of a house under building"
              className="group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </button>
      ) : (
        <div className="flex self-center justify-center" key={id}>
          <p className="flex flex-col items-center justify-center text-gray-600">
            <span className="font-bold mb-1.5">Plus à venir...</span>
            <span className="font-light">More to come...</span>
          </p>
        </div>
      )
    );
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-16 max-lg:flex max-lg:flex-col max-lg:w-full">
          {formatImages()}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring', damping: 25 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full screen view"
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm"
            >
              Cliquez n&apos;importe où pour fermer
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
