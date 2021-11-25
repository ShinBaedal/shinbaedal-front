import React, { useLayoutEffect, useState } from "react";
import Review from "../../interface/Review";
import { getReviewList } from "../../utils/api/Review";
import ReviewContent from "./ReviewContent/ReviewContent";
import ReviewInput from "./ReviewInput/ReviewInput";
import SmBtns from "./SmBtns/SmBtns";
import * as S from "./styles";

interface PropsType {
  id: number;
}

const CustomerDetailReview = ({ id }: PropsType) => {
  const navs = ["긍정", "중립", "부정"];
  const [nav, setNav] = useState<string>(navs[0]);
  const [reviewList, setReviewList] = useState<Review[]>([]);

  const settingReviewList = async () => {
    try {
      const map = new Map()
        .set(navs[0], "POSITIVE")
        .set(navs[1], "NEUTRAL")
        .set(navs[2], "NEGATIVE");

      const type = map.get(nav)!;
      setReviewList((await getReviewList(id, type)).data.data.reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    settingReviewList();
  }, [id, nav]);

  const renderReviewList = reviewList.map((value) => {
    return <ReviewContent data={value} />;
  });

  return (
    <S.Container>
      <ReviewInput />
      <S.Title>
        {nav} 리뷰 {reviewList.length}
      </S.Title>
      <SmBtns navs={navs} navState={[nav, setNav]}></SmBtns>
      <S.ReviewContainer>{renderReviewList}</S.ReviewContainer>
    </S.Container>
  );
};
export default CustomerDetailReview;
