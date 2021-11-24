import React from "react";
import * as S from "./styles";
import SelectedMenu from "./SelectedMenu";
import OrderBtn from "./OrderBtn";
// import font from "../../style/font"

export default function CustomerOrderCheck() {
  return (
    <>
      <S.Selected>선택한 메뉴</S.Selected>
      <SelectedMenu></SelectedMenu>
      <SelectedMenu></SelectedMenu>
      <SelectedMenu></SelectedMenu>
      <OrderBtn></OrderBtn>
    </>
  );
}
