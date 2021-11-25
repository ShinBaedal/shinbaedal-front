import React from "react";
import * as S from "./styles";
import Star from "../../../assets/icons/star.svg";

const ReviewContent = () => {
  return (
    <S.Review>
      <S.TitleContainer>
        <S.Name>하이</S.Name>
        <S.StarContainer>
          <S.Star src={Star} />
          <S.ReviewStar>4.5</S.ReviewStar>
        </S.StarContainer>
      </S.TitleContainer>
      <S.ReviewSubText>완전 맛있어요 대 추천!!</S.ReviewSubText>
      <S.SellerReview>
        내 답글: 감사합니다. 앞으로도 많이 이용해 주세요주세요주세요주세요주세요주세요주세요
      </S.SellerReview>
    </S.Review>
  );
};

export default ReviewContent;
