import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CustomerShopDetail from "../../components/CustomerShopDetail/CustomerShopDetail";
import Footer from "../../components/CustomerShopDetail/Footer/Footer";
import Header from "../../components/Header/Header";
import Store from "../../interface/Store";
import OrderRequest from "../../models/dto/request/orderRequest";
import { postOrder } from "../../utils/api/Order";
import { getShop } from "../../utils/api/Shop";
import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const C = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 50vh;
  border-radius: 20px;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${font.headline4};
  z-index: 100;
`;

const CustomerShopDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState<Store | null>(null);
  const [menus, setMenus] = useState<number[]>([]);

  const settingData = async () => {
    if (!id) {
      return;
    }

    try {
      setData((await getShop(id)).data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    settingData();
  }, [id]);

  useEffect(() => {
    if (data) document.title = data.name;
  }, [data]);

  const [is, setIs] = useState(false);

  const onBuy = async () => {
    if (menus.length > 0) {
      const d: OrderRequest = {
        menuIds: menus,
        storeId: Number(id)!,
      };
      try {
        await postOrder(d);
        setMenus([]);
        setIs(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {is && <C>주문 완료</C>}
      <Header />
      {data && <CustomerShopDetail data={data} menusState={[menus, setMenus]} id={Number(id)} />}
      <Footer onBuy={onBuy} size={menus.length} />
    </>
  );
};
export default CustomerShopDetailContainer;
