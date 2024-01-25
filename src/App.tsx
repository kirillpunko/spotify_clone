import React from "react";
import Right from "./components/right";
import LeftSideMenu from "./components/leftSideMenu/leftSideMenu";
import "./index.scss"

function App() {
  return <div className={"mainWin"}>
      <LeftSideMenu/>
      <Right/>
  </div>;
}

export default App;
