import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { setToken } from "../../constance";

const MainContainer = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    const access_token = query.get("access_token");
    const id = query.get("id");

    if (access_token && id) {
      setToken(access_token);
      navigate(`/customer/shop/${id}`);
    } else if (access_token) {
      setToken(access_token);
      navigate(`/customer/orderlist`);
    }
  }, [window.location.search]);

  return (
    <>
      <div></div>
    </>
  );
};

export default MainContainer;
