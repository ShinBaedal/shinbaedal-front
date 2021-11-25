import { useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { setToken } from "../../constance";

const MainContainer = (): JSX.Element => {
  const { access_token } = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (access_token) {
      setToken(access_token);
    }
    navigate("/");
  }, [access_token]);
  return <></>;
};

export default MainContainer;
