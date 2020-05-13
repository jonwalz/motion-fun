import React from "react";
import {CryptoChooserPanel} from "../CryptoChooserPanel/index";
import Chart from "../BitcoinGraph/index";
import {ChartOptionsContainer, Header} from "./styles";
import {Layout} from "antd";

export const ChartPanel = () => {
  return (
    <Layout>
      <Header>
        <div style={{justifySelf: "flex-end"}}>Price widget</div>
      </Header>
      <ChartOptionsContainer>
        <CryptoChooserPanel />
        <Chart />
      </ChartOptionsContainer>
    </Layout>
  );
};
