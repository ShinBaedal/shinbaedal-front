import React from "react";
import { Global } from "@emotion/react";
import { reset } from "./style/globalStyle";
import RootRouter from "./route";

function App() {
  return (
    <>
      <Global styles={reset} />
      <RootRouter />
    </>
  );
}

export default App;
