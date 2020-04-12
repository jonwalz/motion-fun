import * as React from "react";
import {AnimatePresence} from "framer-motion";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import {CardType} from "../../types/appState";
import {Card} from "../Cards/DeafultCard";
import {StyleContainer, SensorContainer} from "./styles";

interface Props {
  initiallyVisible: boolean;
  card: CardType;
}

const OnScreen: React.FunctionComponent<Props> = ({initiallyVisible, card}) => {
  const [isVisible, setIsVisible] = React.useState(initiallyVisible);
  const elRef = React.useRef(null);

  useScrollPosition(
    ({currPos}) => setIsVisible(currPos.y < 712),
    [],
    elRef,
    false,
    300
  );

  return (
    <StyleContainer color={card.backgroundColor}>
      <SensorContainer ref={elRef}>
        <AnimatePresence>{isVisible && <Card card={card} />}</AnimatePresence>
      </SensorContainer>
    </StyleContainer>
  );
};

export default OnScreen;
