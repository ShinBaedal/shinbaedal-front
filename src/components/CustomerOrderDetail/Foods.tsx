import React from "react";
import * as S from "./styles";
export default function Foods() {
  return (
    <>
      <S.SelectedMenu>
        <img
          src="https://ifh.cc/g/C6wP44.png"
          alt=""
          width="100"
          height="90"
          style={{ background: "black", borderRadius: "5px" }}
        />
        <S.MenuName>
          <p> 햄버거 많이 많이 세트</p>
          <S.Price>20,000원</S.Price>
        </S.MenuName>
      </S.SelectedMenu>
      <hr />
    </>
  );
}
