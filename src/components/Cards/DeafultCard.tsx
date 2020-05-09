import React from "react";
import {animate, initial, exit} from "../OnScreen/constants";
import {motion} from "framer-motion";
import {CardType} from "../../types/appState";
import {AnimatedChild} from "../AnimatedChild/index";
import BitcoinSvg from "../BitcoinSvg";
import BitcoinGraph from "../BitcoinGraph/index";

const componentMap = {
  animatedChild: AnimatedChild,
  bitcoinSvg: BitcoinSvg,
  bitcoinGraph: BitcoinGraph,
};

interface CardChildProps {
  card: CardType;
}

const getComponent = card => {
  return React.createElement(componentMap[card.component] || "div", {
    key: card.id || Date.now(),
    card: card || null,
  });
};

export const Card: React.FunctionComponent<CardChildProps> = ({card}) => {
  if (Boolean(card.component)) {
    return getComponent(card);
  }

  return (
    <motion.div key={card.id} initial={initial} animate={animate} exit={exit}>
      {card.value}
    </motion.div>
  );
};
