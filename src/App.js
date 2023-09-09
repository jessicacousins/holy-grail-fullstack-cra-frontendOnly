import React from "react";
import "./App.css";
import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import PlusMinus from "./PlusMinus";
import Data from "./Data";

function App() {
  const [data, setData] = React.useState({
    header: 0,
    left: 0,
    article: 0,
    right: 0,
    footer: 0,
  });

  function handle(section) {
    const value = data[section.name] + section.value;
    const object = { [section.name]: value };
    setData({ ...data, ...object });
  }

  return (
    <div className="App">
      <Header data={data} handle={handle} />
      <div className="grid">
        <Left data={data} handle={handle} />
        <Article data={data} handle={handle} />
        <Right data={data} handle={handle} />
      </div>
      <Footer data={data} handle={handle} />
      <Data data={data} />
    </div>
  );
}

export default App;
