import React from "react";
import * as S from "./styles";
// import SelectedMenu from "./SelectedMenu";
// import font from "../../style/font"

export default function OrderBtn() {
  return (
    <>
      <S.OrderForm>
        <S.OrderPrice style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          &nbsp; 30,000원
        </S.OrderPrice>
        <span
          style={{ float: "right", paddingTop: "10px", paddingBottom: "10px" }}
        >
          총금액 :
        </span>
        <S.Order>구매 하기</S.Order>
      </S.OrderForm>
    </>
  );
}
