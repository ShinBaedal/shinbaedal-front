import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerOrderDetail from "../components/CustomerOrderDetail/CustomerOrderDetail";
import CustomerOrderList from "../components/CustomerOrderList/CustomerOrderList";
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
        <Route path="/customer/orderlist" element={<CustomerOrderList />} />
        <Route path="/customer/orderlist/detail" element={<CustomerOrderDetail />} />
      </Routes>
    </Suspense>
    //https://naver.com/route
  );
};

export default MainRouter;
