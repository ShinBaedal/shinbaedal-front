import * as S from "./styles";
import React, { useLayoutEffect, useState } from "react";
import OrderContent from "./Order";
import Header from "../Header/Header";
import OrderType from "../../interface/Order";
import { getMyOrderList } from "../../utils/api/Order";

export default function CustomerOrderList() {
  const [orderList, setOrderList] = useState<OrderType[]>([]);

  const settingOrderList = async () => {
    try {
      const response = await getMyOrderList();

      setOrderList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    settingOrderList();

    document.title = "주문 목록";
  }, []);

  const renderOrderList = orderList.map((value) => {
    return <OrderContent data={value} />;
  });

  return (
    <div>
      <S.Contaienr>
        <S.MainTitle>주문 목록</S.MainTitle>
        {renderOrderList}
      </S.Contaienr>
    </div>
  );
}
