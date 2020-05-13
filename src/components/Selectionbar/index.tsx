import React from "react";
import {ConatinerHeader} from "./styles";

const SelectionBar: React.FC = ({children}) => {
  return <ConatinerHeader>{children}</ConatinerHeader>;
};

export {SelectionBar};
