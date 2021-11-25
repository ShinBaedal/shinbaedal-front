import React from "react";
import * as S from "./styles";
export default function Total() {
  return (
    <>
      <S.OrderPrice style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        &nbsp; 30,000원
      </S.OrderPrice>
      <S.OrderText
        style={{ float: "right", paddingTop: "10px", paddingBottom: "10px" }}
      >
        총금액 :
      </S.OrderText>
    </>
  );
}
