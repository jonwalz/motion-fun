import moment from "moment";

export const computePriceData = data => {
  // date: "2019-01-01T00:00:00Z";
  // value: 3843.51996727;
  return data.ohlc.map(item => {
    return {
      date: moment(item.date).unix(),
      value: item.value,
    };
  });
};
