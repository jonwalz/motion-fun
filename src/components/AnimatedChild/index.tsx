import React from "react";
import {motion} from "framer-motion";
import {spring} from "../../constants/animations";

const variants = {
  initial: {
    opacity: 0,
    y: "100%",
    transition: spring,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: spring,
  },
  hidden: {
    opacity: 0,
  },
};

const animationProps = {
  variants: variants,
  initial: "initial",
  animate: "visible",
  exit: "hidden",
};

export const AnimatedChild = () => {
  return <motion.div {...animationProps}>Yipee</motion.div>;
};
