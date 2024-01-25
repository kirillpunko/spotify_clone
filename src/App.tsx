import React from "react";
import Right from "./components/right";
import Left from "./components/left";
import "./index.scss"

function App() {
  return <div className={"mainWin"}>
      <Left/>
      <Right/>
  </div>;
}

export default App;
