import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { loadingVariant } from '@/variants/loading.variant';

export default function Loading() {
  const { setLoading } = useApp();
  const gifLogo = `/assets/gif/LogoGif.gif`;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <motion.img
        variants={loadingVariant}
        initial="hidden"
        animate="animate"
        exit="exit"
        layoutId="loading-img"
        className="w-3/10 h-auto object-cover"
        src={gifLogo}
        alt="loading animation to landing page"
      />
    </div>
  );
}
