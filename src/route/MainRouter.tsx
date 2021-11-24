import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Routes>
        <Route path="/" element={<MainContainer />} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
