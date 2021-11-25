import React from "react";
// import * as S from "./styles";
import Header from "../Header/Header";
import TopMenus from "./TopMenus";
import Foods from "./Foods";
import Total from "./Total";
export default function CustomerorderDetail() {
  return (
    <>
      <Header></Header>
      <TopMenus />
      {[1, 2, 3, 4].map((a, i) => (
        <Foods key={i} />
      ))}
      <Total />
    </>
  );
}
