import { useLayoutEffect, useState } from "react";
import * as S from "./styles";
import back from "../../assets/icons/back.svg";
import logout from "../../assets/icons/Logout.svg";
import { useNavigate } from "react-router";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");

  const onBack = () => {
    navigate(-1);
  };

  useLayoutEffect(() => {
    setTitle(document.title);
  }, [document.title]);

  useLayoutEffect(() => {
    document.title = "롯데리아 신성점";
  }, []);

  return (
    <>
      <S.Container>
        <S.Back src={back} onClick={onBack} />
        <S.Title>{title}</S.Title>
        <S.Logout src={logout} />
      </S.Container>
    </>
  );
};

export default Header;
