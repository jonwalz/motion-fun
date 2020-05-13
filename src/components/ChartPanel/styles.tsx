import styled from "styled-components";
import colors from "../../constants/colors";
import {Layout} from "antd";
const {Header: H} = Layout;

export const Header = styled(H)`
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.brand.blue};
`;

export const ChartOptionsContainer = styled(Layout)`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: ${colors.brand.blue};
`;
