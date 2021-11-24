import React from "react";
import "./temp.css";
import { MainDiv } from "./styles";
import * as S from "./styles";
import Rating from "@mui/material/Rating";
// import { font } from "../../style/font";

export default function DetailReviewStar() {
  return (
    <>
      <MainDiv>
        <S.ReviewGo>리뷰 달기</S.ReviewGo>
        <Rating
          style={{
            color: "#05D686",
            paddingLeft: "20px",
            paddingTop: "20px",
            marginBottom: "20px",
          }}
          name="size-large"
          defaultValue={5}
        />
        <S.ReviewInput placeholder="리뷰 입력 ..."></S.ReviewInput>
        <S.WriteBtn>리뷰 작성</S.WriteBtn>
      </MainDiv>
      <S.Fill></S.Fill>
    </>
  );
}
