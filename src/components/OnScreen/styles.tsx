import styled from "styled-components";

export const StyleContainer = styled.div<{color: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({color}) => color};
  position: relative;
`;

export const SensorContainer = styled.div`
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  min-height: 100%;
  height: 100%;
  min-width: 100%;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
