import React, { useState } from "react";
import CustomerDetailReview from "../CustomerDetailReview/CustomerDetailReview";
import Menu from "./Body/Menu/Menu";
import SellMenuList from "./Body/SellMenuList/SellMenuList";
import Header from "./Header/Header";
import * as S from "./styles";
import Modal from "../Modal/Modal";
import MenuModal from "../MenuModal/MenuModal";
import ReviewModal from "../ReviewModal/ReviewModal";
import DetailReviewStar from "../DetailReviewStar/DetailReviewStar";

const CustomerShopDetail = () => {
  const navs = ["메뉴", "리뷰"];
  const [nav, setNav] = useState<string>(navs[0]);
  const [isModal, setIsModal] = useState<boolean>(true);

  const renderBody = () => {
    const bodyMap = new Map<string, () => JSX.Element>()
      .set(navs[0], SellMenuList)
      .set(navs[1], CustomerDetailReview);

    const render = bodyMap.get(nav)!;

    return React.createElement(render);
  };

  return (
    <>
      <S.Container>
        <Header />
        <div>
          <Menu navs={navs} navState={[nav, setNav]} />
          {renderBody()}
        </div>
      </S.Container>
      <Modal activeState={[isModal, setIsModal]}>
        {/* <MenuModal /> */}
        {/* <ReviewModal /> */}
        <DetailReviewStar />
      </Modal>
    </>
  );
};

export default CustomerShopDetail;
