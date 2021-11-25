import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CustomerShopDetail from "../../components/CustomerShopDetail/CustomerShopDetail";
import Footer from "../../components/CustomerShopDetail/Footer/Footer";
import Header from "../../components/Header/Header";
import Store from "../../interface/Store";
import OrderRequest from "../../models/dto/request/orderRequest";
import { postOrder } from "../../utils/api/Order";
import { getShop } from "../../utils/api/Shop";

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

  useLayoutEffect(() => {
    if (data) document.title = data.name;
  }, [data]);

  const navigate = useNavigate();

  const onBuy = async () => {
    if (menus.length > 0) {
      const d: OrderRequest = {
        menuIds: menus,
        storeId: Number(id)!,
      };
      try {
        await postOrder(d);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Header />
      {data && <CustomerShopDetail data={data} menusState={[menus, setMenus]} />}
      <Footer onBuy={onBuy} size={menus.length} />
    </>
  );
};
export default CustomerShopDetailContainer;
