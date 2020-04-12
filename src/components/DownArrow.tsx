import * as React from "react";
import styled from "styled-components";
import {AiFillCaretDown} from "react-icons/ai";
import {motion} from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

export interface DownArrowProps {}

const DownArrow: React.SFC<DownArrowProps> = () => {
  return (
    <ArrowContainer>
      <motion.div
        transition={bounceTransition}
        animate={{
          y: ["30%", "-30%"],
        }}
      >
        <AiFillCaretDown />
      </motion.div>
    </ArrowContainer>
  );
};

export default DownArrow;
