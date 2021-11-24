import React from "react";
import { Global } from "@emotion/react";
import { reset } from "./style/globalStyle";
// import RootRouter from "./route";
// import CustomerOrderCheck from "./components/CustomerOrderCheck/CustomerOrderCheck";
import CustomerDetailReview from "./components/CustomerDetailReview/CustomerDetailReview";
function App() {
  return (
    <>
      <Global styles={reset} />
      {/* <RootRouter /> */}
      <CustomerDetailReview />
    </>
  );
}

export default App;
