import React from "react";
// import * as S from "./styles";
import Header from "../Header/Header";
import TopMenus from "./TopMenus";
import Foods from "./Foods";
import Total from "./Total";
import SellMenu from "../CustomerShopDetail/SellMenu/SellMenu";
import * as S from "./styles";
export default function CustomerorderDetail() {
  return (
    <>
      <Header></Header>
      <S.Container>
        <TopMenus />
        {[1, 2, 3, 4].map((a, i) => (
          <SellMenu />
        ))}
        <Total />
      </S.Container>
    </>
  );
}
