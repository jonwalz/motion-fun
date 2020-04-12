import * as React from "react";
import OnScreen from "../OnScreen";
import {cardData} from "../../client/data";

export const Cards = () => {
  return (
    <React.Fragment>
      {cardData.map((card, index) => (
        <OnScreen key={index} card={card} initiallyVisible={index === 0} />
      ))}
    </React.Fragment>
  );
};
