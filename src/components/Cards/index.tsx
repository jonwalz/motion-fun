import * as React from "react";
import styled from "styled-components";
import OnScreen from "../OnScreen";

const Card = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ color }) => color};
`;

const cardData = [
  {
    backgroundColor: "#01087C",
    id: "1",
    onScreenComponent: <OnScreen value="First" />
  },
  {
    backgroundColor: "#4048C9",
    id: "2",
    onScreenComponent: <OnScreen value="Second" />
  },
  {
    backgroundColor: "#505AFC",
    id: "3",
    onScreenComponent: <OnScreen value="Third" />
  },
  {
    backgroundColor: "#020A96",
    id: "4",
    onScreenComponent: <OnScreen value="Fourth" />
  }
];

export const Cards = () => {
  return (
    <React.Fragment>
      {cardData.map(card => (
        <Card color={card.backgroundColor} key={card.id}>
          {Boolean(card.onScreenComponent) && card.onScreenComponent}
        </Card>
      ))}
    </React.Fragment>
  );
};
