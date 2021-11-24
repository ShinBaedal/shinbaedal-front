import React from "react";
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
          style={{ paddingLeft: "15px", paddingTop: "15px" }}
          name="size-medium"
          defaultValue={0}
        />
      </MainDiv>

      <S.Fill></S.Fill>
    </>
  );
}
