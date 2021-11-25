import React from "react";
import * as S from "./styles";
export default function Order() {
  return (
    <div>
      <S.MainDiv>
        <S.SContainer>
          <S.SubTitle>대전 신성점</S.SubTitle>
          <S.Arrows>  </S.Arrows>
        </S.SContainer>
        <S.SubTextContainer>
          <S.SubTextDiv>햄버거 - 10,000원</S.SubTextDiv>
          <S.SubTextDiv>햄버거 - 10,000원</S.SubTextDiv>
          <S.SContainer>
            <S.SubTextDiv>햄버거 - 10,000원 ...</S.SubTextDiv>
            <S.Wait>리뷰 완료</S.Wait>
          </S.SContainer>
        </S.SubTextContainer>
      </S.MainDiv>
    </div>
  );
}
