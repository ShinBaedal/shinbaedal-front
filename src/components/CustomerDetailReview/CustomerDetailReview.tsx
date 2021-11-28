import React, { useLayoutEffect, useState } from "react";
import Review from "../../interface/Review";
import State from "../../interface/State";
import { getReviewList } from "../../utils/api/Review";
import DetailReviewStar from "../DetailReviewStar/DetailReviewStar";
import ReviewModal from "../ReviewModal/ReviewModal";
import ReviewContent from "./ReviewContent/ReviewContent";
import ReviewInput from "./ReviewInput/ReviewInput";
import SmBtns from "./SmBtns/SmBtns";
import * as S from "./styles";

interface PropsType {
  id: number;
  isModalState: State<boolean>;
  modalState: State<JSX.Element | null>;
}

const CustomerDetailReview = ({ id, isModalState, modalState }: PropsType) => {
  const navs = ["긍정", "중립", "부정"];
  const [nav, setNav] = useState<string>(navs[0]);
  const [reviewList, setReviewList] = useState<Review[]>([]);
  const [modal, setModal] = modalState;
  const [isModal, setIsModal] = isModalState;

  const settingReviewList = async () => {
    try {
      const map = new Map()
        .set(navs[0], "POSITIVE")
        .set(navs[1], "NEUTRAL")
        .set(navs[2], "NEGATIVE");

      const type = map.get(nav)!;
      const response = await getReviewList(id, type);

      setReviewList([...(response.data.data ? response.data.data.reviews : [])]);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    settingReviewList();
  }, [id, nav]);

  const renderReviewList = reviewList.map((value) => {
    return (
      <div
        onClick={() => {
          setModal(<ReviewModal data={value} />);
          setIsModal(true);
          settingReviewList();
        }}
      >
        <ReviewContent data={value} />
      </div>
    );
  });

  return (
    <S.Container>
      <div
        onClick={() => {
          setModal(<DetailReviewStar id={id} isModalState={isModalState} />);
          setIsModal(true);
        }}
      >
        <ReviewInput />
      </div>
      <S.Title>
        {nav} 리뷰 {reviewList.length}
      </S.Title>
      <SmBtns navs={navs} navState={[nav, setNav]}></SmBtns>
      <S.ReviewContainer>{renderReviewList}</S.ReviewContainer>
    </S.Container>
  );
};
export default CustomerDetailReview;
