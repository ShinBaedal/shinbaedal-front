import React from "react";
import * as S from "./styles";
export default function SmBtns() {
  return (
    <div>
      <S.SMBtn style={{ marginLeft: 15 }}>긍정</S.SMBtn>
      <S.SMBtn>중립</S.SMBtn>
      <S.SMBtn>부정</S.SMBtn>
    </div>
  );
}
