import { useLayoutEffect } from "react";
import { useParams } from "react-router";
import { setToken } from "../../constance";

const MainContainer = (): JSX.Element => {
  const { access_token } = useParams();

  useLayoutEffect(() => {
    if (access_token) setToken(access_token);
  }, [access_token]);
  return <></>;
};

export default MainContainer;
