import React from "react";
import Data from "./Data.js";
import PlusMinus from "./PlusMinus.js";
import "./App.css"; 

const Article = (props) => {
  return (
    <>
      <article>
        <PlusMinus section="article" handle={props.handle} />
        <div className="section">Article: {props.data.article}</div>
        <Data data={props.data} />
      </article>
    </>
  );
};

export default Article;
