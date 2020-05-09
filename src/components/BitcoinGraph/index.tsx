import React from "react";
import {
  Scatter,
  ScatterChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {useFetchPriceData} from "../../client/client";
import moment from "moment";
import {SelectionBar} from "../Selectionbar";
import {BitcoinGraphContainer} from "./styles";

const Chart = () => {
  const {data} = useFetchPriceData();
  if (!data) return <div>Loading...</div>;

  return (
    <BitcoinGraphContainer>
      <SelectionBar>SelectionBar</SelectionBar>
      <ResponsiveContainer width="95%" height={500}>
        <ScatterChart>
          <XAxis
            dataKey="date"
            domain={["auto", "auto"]}
            name="Time"
            type="number"
            tick={{fontSize: 12, fill: "white"}}
            tickFormatter={timeStr => moment(timeStr).format("LLLL")}
          />
          <Tooltip cursor={{strokeDasharray: "3 3"}} />
          <YAxis dataKey="value" tick={{fontSize: 12, fill: "white"}} />
          <Scatter
            data={data}
            line={{stroke: "#eee"}}
            lineJointType="monotoneX"
            name="Values"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </BitcoinGraphContainer>
  );
};

const Container = () => {
  return (
    <div style={{minWidth: "100%", minHeight: "100%", height: "100%"}}>
      <Chart />
    </div>
  );
};

export default Container;
