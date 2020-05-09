export const fetchPriceDataQuery = `
{
  ohlc(slug: "bitcoin", from: "2019-01-01T00:00:00Z", to: "2019-06-01T00:00:00Z", interval: "1d") {
    date: datetime
    value: closePriceUsd
  }
}
`;
