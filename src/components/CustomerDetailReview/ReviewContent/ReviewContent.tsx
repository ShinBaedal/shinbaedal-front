import React from "react";
import * as S from "./styles";
import Star from "../../../assets/icons/star.svg";
import DisableStar from "../../../assets/icons/disable_star.svg";
import Review from "../../../interface/Review";

interface PropsType {
  data: Review;
}

const ReviewContent = ({ data }: PropsType) => {
  const { content, reply, rate, user, id, type } = data;

  return (
    <S.Review>
      <S.TitleContainer>
        <S.Name>{user.name}</S.Name>
        <S.StarContainer>
          {[1, 2, 3, 4, 5].map((_, index) => {
            if (index < rate) {
              return <S.Star src={Star} />;
            } else {
              return <S.Star src={DisableStar} />;
            }
          })}
          <S.ReviewStar>{rate}</S.ReviewStar>
        </S.StarContainer>
      </S.TitleContainer>
      <S.ReviewSubText>{content}</S.ReviewSubText>
      <S.SellerReview>사장님의 답글: {reply.content}</S.SellerReview>
    </S.Review>
  );
};

export default ReviewContent;
