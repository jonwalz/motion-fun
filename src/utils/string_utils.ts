const tickers = {
  ETH: "ethereum",
  BTC: "bitcoin",
  LTC: "litecoin",
  BAT: "basic-attention-token",
} as const;

type tickersType = typeof tickers;
type tickerValueTypes = tickersType[keyof tickersType];
type tickerKeyType = keyof typeof tickers;

export const computeCoinQueryString = (
  display: tickerKeyType
): tickerValueTypes => {
  return tickers[display] ? tickers[display] : "bitcoin";
};
