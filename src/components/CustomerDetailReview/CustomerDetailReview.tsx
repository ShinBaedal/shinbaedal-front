import React, { useState } from "react";
import ReviewContent from "./ReviewContent/ReviewContent";
import SmBtns from "./SmBtns/SmBtns";
import * as S from "./styles";

const CustomerDetailReview = () => {
  const navs = ["긍정", "중립", "부정"];
  const [nav, setNav] = useState<string>(navs[0]);

  return (
    <S.Container>
      <S.Title>리뷰 1234</S.Title>
      <SmBtns navs={navs} navState={[nav, setNav]}></SmBtns>
      <S.ReviewContainer>
        <ReviewContent></ReviewContent>
        <ReviewContent></ReviewContent>
        <ReviewContent></ReviewContent>
      </S.ReviewContainer>
    </S.Container>
  );
};
export default CustomerDetailReview;
