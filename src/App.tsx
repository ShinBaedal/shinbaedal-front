import React from "react";
import { Global } from "@emotion/react";
import { reset } from "./style/globalStyle";
// import RootRouter from "./route";
// import CustomerOrderCheck from "./components/CustomerOrderCheck/CustomerOrderCheck";
import DetailReviewStar from "./components/DetailReviewStar/DetailReviewStar";

function App() {
  return (
    <>
      <Global styles={reset} />
      {/* <RootRouter /> */}
      <DetailReviewStar />
    </>
  );
}

export default App;
