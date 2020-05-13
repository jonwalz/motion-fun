import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {useFetchPriceData} from "../../client/client";
import {BitcoinGraphContainer} from "./styles";
import {CryptoChooserPanel} from "../CryptoChooserPanel/index";
import {timeFormatter} from "./utils";

const Chart = () => {
  const {data} = useFetchPriceData();

  // TODO: Make a loading component
  if (!data) return <div>Loading...</div>;

  return (
    <BitcoinGraphContainer>
      <ResponsiveContainer width="95%" height={500}>
        <LineChart
          data={data}
          onMouseMove={event => {
            // TODO: Use this to update external price widget
            console.log("EVENT: ", event);
          }}
        >
          <XAxis
            dataKey="date"
            domain={["dataMin", "dataMax"]}
            scale="time"
            type="number"
            tick={{fontSize: 12, fill: "white"}}
            tickFormatter={timeFormatter}
          />
          <Tooltip cursor={{strokeDasharray: "3 3"}} content={() => null} />
          <YAxis dataKey="value" tick={{fontSize: 12, fill: "white"}} />
          <Line type="linear" dataKey={"value"} stroke="#ffffff" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </BitcoinGraphContainer>
  );
};

const Container = () => {
  return (
    <div style={{minWidth: "100%", minHeight: "100%", maxHeight: "100%"}}>
      <CryptoChooserPanel />
      <Chart />
    </div>
  );
};

export default Container;
