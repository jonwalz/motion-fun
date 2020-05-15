import {selectedCoin} from "./../atoms/index";
import {selector} from "recoil";
import {computeCoinQueryString} from "../../utils/string_utils";

export const selectCoinDisplayName = selector({
  key: "selectCurrentCoin",
  get: ({get}) => {
    const displayName = get(selectedCoin);
    const slugString = computeCoinQueryString(displayName);
    return {slugString};
  },
});
