/* eslint-disable */
import React, { useLayoutEffect, useState } from "react";
import Star from "../../assets/icons/star.svg";
import DisableStar from "../../assets/icons/disable_star.svg";
import * as S from "./styles";
import State from "../../interface/State";
import { postReview } from "../../utils/api/Review";
import ReviewRequest from "../../models/dto/request/reviewReqeust";

interface PropsType {
  isModalState: State<boolean>;
  id: number;
}

export default function DetailReviewStar({ isModalState, id }: PropsType) {
  const [content, setContent] = useState<string>("");
  const [isModal, setIsModal] = isModalState;
  const [count, setCount] = useState<number>(5);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <S.Container>
        <S.ReviewGo>리뷰 달기</S.ReviewGo>
        <S.StarContainer>
          {[1, 2, 3, 4, 5].map((value, index) => {
            if (index < count) {
              return (
                <S.Star
                  onClick={() => {
                    setCount(index);
                  }}
                  src={Star}
                />
              );
            } else {
              return (
                <S.Star
                  onClick={() => {
                    setCount(index);
                  }}
                  src={DisableStar}
                />
              );
            }
          })}
        </S.StarContainer>
        <S.ReviewInput placeholder="리뷰 입력 ..." onChange={onChange} value={content} />

        <S.WriteBtn
          onClick={() => {
            setIsModal(false);
            const data: ReviewRequest = {
              photoUrls: [
                "https://cdn.pixabay.com/photo/2017/08/12/18/59/snack-2635035_960_720.jpg",
              ],
              content: content,
              rate: count,
            };
            postReview(id, data);
          }}
        >
          리뷰 작성
        </S.WriteBtn>
      </S.Container>
    </>
  );
}
