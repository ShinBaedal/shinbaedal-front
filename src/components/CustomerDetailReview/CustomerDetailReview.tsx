import React from "react";
// import * as S from "./styles";
import { font } from "../../style/font";
import Review from "./Review";
import SmBtns from "./SmBtns";
import TopBtn from "./TopBtn";
export default function CustomerDetailReview() {
  return (
    <>
      <TopBtn></TopBtn>
      <div style={{ font: `${font.headline2}`, margin: "15px" }}>리뷰 1234</div>
      <SmBtns></SmBtns>
      <Review></Review>
      <Review></Review>
      <Review></Review>
    </>
  );
}
