import React from "react";
import { Global } from "@emotion/react";
import { reset } from "./style/globalStyle";
// import RootRouter from "./route";
// import CustomerOrderCheck from "./components/CustomerOrderCheck/CustomerOrderCheck";
import CustomerOrderList from "./components/CustomerOrderList/CustomerOrderList";

function App() {
  return (
    <>
      <Global styles={reset} />
      <CustomerOrderList />
    </>
  );
}

export default App;
