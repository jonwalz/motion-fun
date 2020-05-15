import React from "react";
import {useRecoilState} from "recoil";
import {Conatiner, Wrapper, ChooserDropdown} from "./styles";
import {selectedCoin} from "../../state/atoms";

const options = [
  {value: "BTC"},
  {value: "ETH"},
  {value: "LTC"},
  {value: "BAT"},
] as any;

export const CryptoChooserPanel = () => {
  const [coinValue, setCoinValue] = useRecoilState(selectedCoin);

  const onChange = data => {
    setCoinValue(data);
  };

  return (
    <Conatiner>
      <Wrapper>
        <ChooserDropdown
          options={options}
          value={coinValue}
          onChange={onChange}
        />
      </Wrapper>
    </Conatiner>
  );
};
