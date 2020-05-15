import * as React from "react";
import {Cards} from "./components/Cards";
import {RecoilRoot} from "recoil";
require("./App.css");

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Cards />
      </RecoilRoot>
    </div>
  );
}
