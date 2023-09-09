import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css";

const Left = (props) => {
  return (
    <>
      <aside>
        <PlusMinus section="left" handle={props.handle} />
        <div className="section">Left:{props.data.left}</div>
        <Data data={props.data} />
      </aside>
    </>
  );
};

export default Left;
