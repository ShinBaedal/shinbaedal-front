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
import Store from "../../interface/Store";

interface PropsType {
  data: Store;
}

const CustomerShopDetail = ({ data }: PropsType) => {
  const navs = ["메뉴", "리뷰"];

  const [nav, setNav] = useState<string>(navs[0]);
  const [isModal, setIsModal] = useState<boolean>(true);
  const [modal, setModal] = useState<JSX.Element | null>(null);

  const { id } = data;

  const renderBody = () => {
    const bodyMap = new Map<string, JSX.Element>()
      .set(navs[0], <SellMenuList id={id} />)
      .set(navs[1], <CustomerDetailReview id={id} />);

    const render = bodyMap.get(nav)!;

    return render;
  };

  return (
    <>
      <S.Container>
        <Header data={data} />
        <div>
          <Menu navs={navs} navState={[nav, setNav]} />
          {renderBody()}
        </div>
      </S.Container>
      <Modal activeState={[isModal, setIsModal]}>
        {/* <MenuModal /> */}
        {/* <ReviewModal /> */}
        {/* <DetailReviewStar /> */}
        {modal}
      </Modal>
    </>
  );
};

export default CustomerShopDetail;
