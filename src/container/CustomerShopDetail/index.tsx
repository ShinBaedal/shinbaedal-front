import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import CustomerShopDetail from "../../components/CustomerShopDetail/CustomerShopDetail";
import Footer from "../../components/CustomerShopDetail/Footer/Footer";
import Header from "../../components/Header/Header";
import Store from "../../interface/Store";
import { getShop } from "../../utils/api/Shop";

const CustomerShopDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState<Store | null>(null);

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

  return (
    <>
      <Header />
      {data && <CustomerShopDetail data={data} />}
      <Footer />
    </>
  );
};
export default CustomerShopDetailContainer;
