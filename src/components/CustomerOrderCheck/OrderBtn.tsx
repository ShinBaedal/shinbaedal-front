import React from "react";
import * as S from "./styles";
// import SelectedMenu from "./SelectedMenu";
// import font from "../../style/font"

export default function OrderBtn() {
  return (
    <>
      <S.OrderForm>
        <S.TitleContainer>
          <span>총금액 :</span>
          <S.OrderPrice>&nbsp; 30,000원</S.OrderPrice>
        </S.TitleContainer>
        <S.Order>구매 하기</S.Order>
      </S.OrderForm>
    </>
  );
}
