import React from "react";
import {animate, initial, exit} from "../OnScreen/constants";
import {motion} from "framer-motion";
import {Card} from "./index";

interface CardChildProps {
  card: Card;
}

export const CardChild: React.FunctionComponent<CardChildProps> = ({card}) => {
  if (React.isValidElement(card.value)) {
    return card.value;
  }

  return (
    <motion.div key={card.id} initial={initial} animate={animate} exit={exit}>
      {card.value}
    </motion.div>
  );
};
