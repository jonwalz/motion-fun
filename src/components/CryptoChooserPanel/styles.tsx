import styled from "styled-components";
import {Layout} from "antd";
import {AutoComplete} from "antd";

const {Sider} = Layout;

export const Conatiner = styled(Sider).attrs({
  width: 300,
})`
  background-color: inherit;
  padding: 0 10px;
`;

export const Wrapper = styled.div`
  padding: 24px;
  height: 600px;
  border-radius: 5px;
  width: 100%;
`;

export const ChooserDropdown = styled(AutoComplete)`
  font-size: 24px;
  width: 100%;
  text-align: left;

  .ant-select-selector {
    height: auto !important;
    padding: 6px 21px 2px !important;
    background-color: inherit !important;
    color: white !important;
  }

  input {
    padding-left: 10px;
    height: 100% !important;
  }
  .ant-select-selection-placeholder {
    opacity: 1;
  }
`;
