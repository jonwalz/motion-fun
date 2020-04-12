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
  font-size: 72px;
  font-weight: bold;
  display: flex;
  align-items: center;
  min-height: 10px;
  min-width: 1px;
  justify-content: center;
`;
