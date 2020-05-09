import React from "react";
import {
  Scatter,
  ScatterChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {useFetchPriceData} from "../../client/client";
import moment from "moment";

const Chart = () => {
  const {data} = useFetchPriceData();
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <ResponsiveContainer width={1000} height={500}>
      <ScatterChart>
        <XAxis
          dataKey="date"
          domain={["auto", "auto"]}
          name="Time"
          type="number"
          tick={{fontSize: 12, fill: "white"}}
          tickFormatter={timeStr => moment(timeStr).format("HH:mm")}
        />
        <YAxis dataKey="value" tick={{fontSize: 12, fill: "white"}} />
        <Scatter
          data={data}
          line={{stroke: "#eee"}}
          lineJointType="monotoneX"
          lineType="joint"
          name="Values"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default Chart;
