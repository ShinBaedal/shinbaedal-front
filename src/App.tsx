import React from "react";
import { Global } from "@emotion/react";
import { reset } from "./style/globalStyle";
// import RootRouter from "./route";
import CustomerOrderCheck from "./components/CustomerOrderCheck/CustomerOrderCheck";
function App() {
  return (
    <>
      <Global styles={reset} />
      {/* <RootRouter /> */}
      <CustomerOrderCheck />
    </>
  );
}

export default App;
