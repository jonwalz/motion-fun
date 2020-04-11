import * as React from "react";
import OnScreen from "../OnScreen";
import {AnimatedChild} from "../AnimatedChild/index";
import {CardChild} from "./CardChild";

export interface Card {
  backgroundColor: string;
  id: string;
  value: string | React.ReactNode;
}

type CardData = Card[];

const cardData: CardData = [
  {
    backgroundColor: "#01087C",
    id: "1",
    value: "First",
  },
  {
    backgroundColor: "#4048C9",
    id: "2",
    value: "Second",
  },
  {
    backgroundColor: "#505AFC",
    id: "3",
    value: "Third",
  },
  {
    backgroundColor: "#020A96",
    id: "4",
    value: "Forth",
  },
  {
    backgroundColor: "#963A81",
    id: "5",
    value: <AnimatedChild />,
  },
];

export const Cards = () => {
  return (
    <React.Fragment>
      {cardData.map((card, index) => (
        <OnScreen
          key={index}
          value={card.value}
          id={card.id}
          backgroundColor={card.backgroundColor}
          initiallyVisible={index === 0}
        >
          <CardChild card={card} />
        </OnScreen>
      ))}
    </React.Fragment>
  );
};
