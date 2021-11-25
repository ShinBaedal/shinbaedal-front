import React, { useState } from "react";
import CustomerDetailReview from "../CustomerDetailReview/CustomerDetailReview";
import Menu from "./Body/Menu/Menu";
import SellMenuList from "./Body/SellMenuList/SellMenuList";
import Header from "./Header/Header";
import * as S from "./styles";
import Modal from "../Modal/Modal";
import Store from "../../interface/Store";
import State from "../../interface/State";
import { useNavigate } from "react-router";

interface PropsType {
  data: Store;
  menusState: State<number[]>;
  id: number;
}

const CustomerShopDetail = ({ data, menusState, id }: PropsType) => {
  const navs = ["메뉴", "리뷰"];

  const [nav, setNav] = useState<string>(navs[0]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modal, setModal] = useState<JSX.Element | null>(null);

  const renderBody = () => {
    const bodyMap = new Map<string, JSX.Element>()
      .set(
        navs[0],
        <SellMenuList
          menusState={menusState}
          id={id}
          isModalState={[isModal, setIsModal]}
          modalState={[modal, setModal]}
        />
      )
      .set(
        navs[1],
        <CustomerDetailReview
          isModalState={[isModal, setIsModal]}
          modalState={[modal, setModal]}
          id={id}
        />
      );

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
      <Modal activeState={[isModal, setIsModal]}>{modal}</Modal>
    </>
  );
};

export default CustomerShopDetail;
