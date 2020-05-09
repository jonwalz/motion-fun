import React from "react";
import BitcoinGraph from "./";
import styled from "styled-components";
import colors from "../../constants/colors";

const Container = styled.div`
  background-color: ${colors.brand.blue};
  display: flex;
  height: 100%;
  justify-content: center;
`;

export default {
  title: "Bitcoin Graph",
  component: BitcoinGraph,
};

export const GraphContainer = () => {
  return (
    <Container>
      <BitcoinGraph />
    </Container>
  );
};
