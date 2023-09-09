import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css";

const Footer = (props) => {
  return (
    <>
      <footer>
        <PlusMinus section="footer" handle={props.handle} />
        <div className="section">Footer:{props.data.footer}</div>
        <Data data={props.data} />
      </footer>
    </>
  );
};

export default Footer;
