import { Variants } from "framer-motion";

export const appVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0.23, 0.43, 0.37, 0.98],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};
