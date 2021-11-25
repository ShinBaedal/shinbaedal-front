import React from "react";
import * as S from "./styles";
export default function MainDiv() {
  return (
    // import Header from "./Header/Header";
    <div>
      {/* <Header />; */}
      
      <S.MainDiv>
        <S.Arrows> {">"} </S.Arrows>
        <S.SubTitle>대전 신성점</S.SubTitle>
        <S.SubTextDiv>햄버거 - 10,000원</S.SubTextDiv>
        <S.SubTextDiv>햄버거 - 10,000원</S.SubTextDiv>
        <S.Wait>주문 대기</S.Wait>
        <S.SubTextDiv>햄버거 - 10,000원 ...</S.SubTextDiv>
      </S.MainDiv>
    </div>
  );
}
