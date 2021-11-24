import React from "react";
import * as S from "./styles";
// import font from "../../style/font"

export default function CustomerOrderCheck() {
  return (
    <>
      <S.Selected>선택한 메뉴</S.Selected>
      <S.SelectedMenu>
        
          <img
            src="https://ifh.cc/g/C6wP44.png"
            alt=""
            width="100"
            height="100"
            style={{ background: "black", borderRadius: "5px" }}
          />
        <p>2월17일 발행</p>
        <hr />
      </S.SelectedMenu>
    </>
  );
}
