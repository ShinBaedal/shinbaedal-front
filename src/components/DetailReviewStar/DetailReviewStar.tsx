/* eslint-disable */
import React, { useLayoutEffect, useState } from "react";
import Star from "../../assets/icons/star.svg";
import DisableStar from "../../assets/icons/disable_star.svg";
import * as S from "./styles";
import State from "../../interface/State";

interface PropsType {
  isModalState: State<boolean>;
}

export default function DetailReviewStar({ isModalState }: PropsType) {
  const [content, setContent] = useState<string>("");
  const [isModal, setIsModal] = isModalState;

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <S.Container>
        <S.ReviewGo>리뷰 달기</S.ReviewGo>
        <S.StarContainer>
          {[1, 2, 3, 4, 5].map((value) => {
            return <S.Star src={Star} />;
          })}
        </S.StarContainer>
        <S.ReviewInput placeholder="리뷰 입력 ..." onChange={onChange} value={content} />

        <S.WriteBtn
          onClick={() => {
            setIsModal(false);
          }}
        >
          리뷰 작성
        </S.WriteBtn>
      </S.Container>
    </>
  );
}
