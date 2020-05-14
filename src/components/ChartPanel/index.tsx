import React from "react";
import {CryptoChooserPanel} from "../CryptoChooserPanel/index";
import Chart from "../BitcoinGraph/index";
import {ChartOptionsContainer, Header, PriceWidget} from "./styles";
import {Layout} from "antd";

export const ChartPanel = () => {
  return (
    <Layout>
      <Header>
        <PriceWidget>Price widget</PriceWidget>
      </Header>
      <ChartOptionsContainer>
        <CryptoChooserPanel />
        <Chart />
      </ChartOptionsContainer>
    </Layout>
  );
};
