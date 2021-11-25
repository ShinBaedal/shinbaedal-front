import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  MainContainer,
  CustomerShopDetailContainer,
  CustomerOrderCheckContainer,
  CustomerOrderDetailContainer,
  CustomerOrderListContainer,
} from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/customer/shop/detail" element={<CustomerShopDetailContainer />} />
        <Route path="/customer/ordercheck" element={<CustomerOrderCheckContainer />} />
        <Route path="/customer/orderlist" element={<CustomerOrderListContainer />} />
        <Route path="/customer/orderlist/detail" element={<CustomerOrderDetailContainer />} />
      </Routes>
    </Suspense>
    //https://naver.com/route
  );
};

export default MainRouter;
