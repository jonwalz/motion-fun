import {computePriceData} from "./util";
import {fetchPriceDataQuery} from "./queries";
import useSWR from "swr";
import {request} from "graphql-request";

const API = "https://api.santiment.net/graphiql";
const fetcher = query => request(API, query);

export const useFetchPriceData = (coin?: string) => {
  const {data, error} = useSWR(fetchPriceDataQuery(coin), fetcher);

  if (data) {
    const computedData = computePriceData(data);
    return {data: computedData, error};
  }

  return {data, error};
};
