import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {useRecoilValue} from "recoil";
import {useFetchPriceData} from "../../client/client";
import {BitcoinGraphContainer} from "./styles";
import {timeFormatter} from "./utils";
import {Layout} from "antd";
import {selectCoinDisplayName} from "../../state/selectors/index";
const {Content} = Layout;

const Chart = () => {
  const {slugString} = useRecoilValue(selectCoinDisplayName);
  const {data} = useFetchPriceData(slugString);

  // TODO: Make a loading component
  if (!data) return <div>Loading...</div>;

  return (
    <BitcoinGraphContainer>
      <Content>
        <ResponsiveContainer width="95%" height={500}>
          <LineChart
            data={data}
            onMouseMove={event => {
              // TODO: Use this to update external price widget
              // console.log("EVENT: ", event);
            }}
          >
            <XAxis
              dataKey="date"
              domain={["dataMin", "dataMax"]}
              scale="time"
              type="number"
              tick={{
                fontSize: 12,
                fill: "white",
              }}
              tickFormatter={timeFormatter}
              stroke="white"
            />
            <Tooltip cursor={{strokeDasharray: "3 3"}} content={() => null} />
            <YAxis
              dataKey="value"
              tick={{fontSize: 12, fill: "white"}}
              stroke="white"
            />
            <Line
              type="linear"
              dataKey={"value"}
              stroke="#ffffff"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Content>
    </BitcoinGraphContainer>
  );
};

export default Chart;
