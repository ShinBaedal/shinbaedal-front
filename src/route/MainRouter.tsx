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
        <Route path=":access_token" element={<MainContainer />} />
        <Route path="customer">
          <Route path="shop">
            <Route path=":id" element={<CustomerShopDetailContainer />} />
          </Route>
          <Route path="ordercheck" element={<CustomerOrderCheckContainer />} />
          <Route path="orderlist">
            <Route path="" element={<CustomerOrderListContainer />} />
            <Route path="detail/:id" element={<CustomerOrderDetailContainer />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
