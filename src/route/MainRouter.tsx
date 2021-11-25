import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  MainContainer,
  CustomerShopDetailContainer,
  CustomerOrderCheckContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/customer/shop/detail" element={<CustomerShopDetailContainer />} />
        <Route path="/customer/ordercheck" element={<CustomerOrderCheckContainer />} />
      </Routes>
    </Suspense>
    //https://naver.com/route
  );
};

export default MainRouter;
