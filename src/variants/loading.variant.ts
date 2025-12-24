import { Variants } from "framer-motion";

export const loadingVariant: Variants = {
  hidden: {
    width: "30%",
    opacity: 0,
  },
  animate: {
    width: "30%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.23, 0.43, 0.37, 0.98],
    },
  },
  exit: {
    opacity: 0,
    width: "30%",
    transition: {
      duration: 0.4,
    },
  },
};
