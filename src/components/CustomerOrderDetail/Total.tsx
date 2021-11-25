import React from "react";
import * as S from "./styles";
export default function Total() {
  return (
    <>
      <S.WonContainer>
        <S.OrderText>총금액 :</S.OrderText>
        <S.OrderPrice>&nbsp; 30,000원</S.OrderPrice>
      </S.WonContainer>
    </>
  );
}
