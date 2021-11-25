import * as S from "./styles";
import React from "react";
import Order from "./Order";
import Header from "../Header/Header";
export default function CustomerOrderList() {
  return (
    <div>
      <Header />
      <S.Contaienr>
        <S.MainTitle>주문 목록</S.MainTitle>
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </S.Contaienr>
    </div>
  );
}
