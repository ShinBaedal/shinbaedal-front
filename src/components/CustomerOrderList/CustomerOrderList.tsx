import * as S from "./styles";
import React from "react";
import MainDivOk from "./MainDiv-ReviewOk";
import MainDivOrderWait from "./MainDiv-OrderWait";
import MainDivOrderOk from "./MainDiv-OrderOk";
import Header from "../Header/Header";
export default function CustomerOrderList() {
  return (
    <div>
      <Header />
      <S.MainTitle>주문 목록</S.MainTitle>
      <MainDivOk />
      <MainDivOrderWait />
      <MainDivOrderOk />
    </div>
  );
}
