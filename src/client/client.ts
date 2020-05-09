import {fetchPriceDataQuery} from "./queries";
import useSWR from "swr";
import {request} from "graphql-request";
import moment from "moment";

const computePriceData = data => {
  // date: "2019-01-01T00:00:00Z";
  // value: 3843.51996727;
  const result = data.ohlc.map(item => {
    return {
      date: moment(item.date).unix(),
      value: item.value,
    };
  });
  console.log(result);
  return result;
};

const API = "https://api.santiment.net/graphiql";
const fetcher = query => request(API, query);

export const useFetchPriceData = () => {
  const {data, error} = useSWR(fetchPriceDataQuery, fetcher);
  if (data) {
    const computedData = computePriceData(data);
    return {data: computedData, error};
  }
  return {data, error};
};
