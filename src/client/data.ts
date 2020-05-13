import {CardData} from "./../types/appState";
import colors from "../constants/colors";

export const cardData: CardData = [
  {
    backgroundColor: "#01087C",
    id: "1",
    value: "First",
    component: "bitcoinSvg",
  },
  {
    backgroundColor: colors.brand.blue,
    id: "2",
    value: "Second",
    component: "chartPanel",
  },
  // {
  //   backgroundColor: "#505AFC",
  //   id: "3",
  //   value: "Third",
  //   component: null,
  // },
  // {
  //   backgroundColor: "#020A96",
  //   id: "4",
  //   value: "Fourth",
  //   component: null,
  // },
  // {
  //   backgroundColor: "#963A81",
  //   id: "5",
  //   value: "Animated Child",
  //   component: "animatedChild",
  // },
];
