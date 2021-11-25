import { useParams } from "react-router";
import CustomerOrderCheck from "../../components/CustomerOrderCheck/CustomerOrderCheck";
import Header from "../../components/Header/Header";

const CustomerOrderCheckContainer = () => {
  const { menus } = useParams();

  return (
    <>
      <Header />
      <CustomerOrderCheck />
    </>
  );
};

export default CustomerOrderCheckContainer;
