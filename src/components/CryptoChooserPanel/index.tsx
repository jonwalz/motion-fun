import React from "react";
import {Conatiner, Wrapper, ChooserDropdown} from "./styles";

const options = [
  {value: "Bitcoin"},
  {value: "Ethereum"},
  {value: "Litecoin"},
  {value: "BAT"},
] as any;

export const CryptoChooserPanel = () => {
  return (
    <Conatiner>
      <Wrapper>
        <ChooserDropdown options={options} placeholder="Bitcoin" />
      </Wrapper>
    </Conatiner>
  );
};
