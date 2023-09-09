import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css";

const Right = (props) => {
  return (
    <>
      <aside>
        <PlusMinus section="right" handle={props.handle} />
        <div className="section">Right:{props.data.right}</div>
        <Data data={props.data} />
      </aside>
    </>
  );
};

export default Right;
