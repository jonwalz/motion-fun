import styled from "styled-components";
import {Layout} from "antd";

const {Sider} = Layout;

export const Conatiner = styled(Sider)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  padding: 0 10px;
`;

export const Wrapper = styled.div`
  height: 600px;
  border-radius: 5px;
  width: 100%;
`;
