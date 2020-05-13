import styled from "styled-components";
import {Layout} from "antd";
import colors from "../../constants/colors";
const {Header} = Layout;

export const ConatinerHeader = styled(Header)`
  border: 1px solid white;
  width: 100%;
  background-color: ${colors.brand.blue};
`;
