import React from "react";
import * as S from "./styles";

export default function TopBtn() {
  return (
    <div id="top_btn">
      <S.MenuButton>메뉴</S.MenuButton>
      <S.ReviewButton>리뷰</S.ReviewButton>
    </div>
  );
}
