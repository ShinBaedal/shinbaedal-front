import { useState } from "react";
import Menu from "./Body/Menu/Menu";
import SellMenuList from "./Body/SellMenuList/SellMenuList";
import Header from "./Header/Header";
import * as S from "./styles";

const CustomerShopDetail = () => {
  const navs = ["메뉴", "리뷰"];
  const [nav, setNav] = useState<string>(navs[0]);

  return (
    <S.Container>
      <Header />
      <div>
        <Menu navs={navs} navState={[nav, setNav]} />
        <SellMenuList />
      </div>
    </S.Container>
  );
};

export default CustomerShopDetail;
