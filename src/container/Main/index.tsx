import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { setToken } from "../../constance";

const MainContainer = (): JSX.Element => {
  const { access_token, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (access_token && id) {
      setToken(access_token);
      navigate(`/customer/shop/${id}`);
    }
  }, [access_token, id]);

  return (
    <>
      <div></div>
    </>
  );
};

export default MainContainer;
