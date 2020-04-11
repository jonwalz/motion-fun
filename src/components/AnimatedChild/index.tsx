import React from "react";
import {motion} from "framer-motion";

const animationProps = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    backgroundColor: "transparent",
  },
  exit: {
    opacity: 0,
  },
};

export const AnimatedChild = () => {
  return <motion.div {...animationProps}>Animated child</motion.div>;
};
