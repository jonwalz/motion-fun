import * as React from "react";
import styled from "styled-components";
import {AnimatePresence} from "framer-motion";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

const Card = styled.div<{color: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({color}) => color};
`;

const Container = styled.div`
  color: white;
  font-size: 72px;
  font-weight: bold;
  display: flex;
  align-items: center;
  min-height: 10px;
  min-width: 1px;
  justify-content: center;
`;

interface Props {
  value: string | React.ReactNode;
  backgroundColor: string;
  initiallyVisible: boolean;
  id: string;
}

const OnScreen: React.FunctionComponent<Props> = ({
  children,
  backgroundColor,
  initiallyVisible,
  id,
}) => {
  const [isVisible, setIsVisible] = React.useState(initiallyVisible);
  const elRef = React.useRef(null);

  useScrollPosition(
    ({currPos}) => setIsVisible(currPos.y < 712),
    [],
    elRef,
    false,
    100
  );

  return (
    <Card color={backgroundColor}>
      <AnimatePresence>
        <Container ref={elRef}>{isVisible && children}</Container>
      </AnimatePresence>
    </Card>
  );
};

export default OnScreen;
