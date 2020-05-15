import {atom} from "recoil";

export const selectedCoin = atom({
  key: "selectedCoin",
  default: "Bitcoin",
});
