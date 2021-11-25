import React from "react";
import * as S from "./styles";
import Img from "../../assets/pictures/hamburger.jpg";
// import { font } from "../../style/font";

export default function SelectedMenu() {
  return (
    <>
      <S.MenuContainer>
        <S.Img src={Img} alt="img" />
        <S.InfoContainer>
          <S.Body2>햄버거 많이 많이 세트</S.Body2>
          <S.Won>10,000원</S.Won>
        </S.InfoContainer>
        <S.Btn>X</S.Btn>
        <S.Line />
      </S.MenuContainer>
    </>
  );
}
