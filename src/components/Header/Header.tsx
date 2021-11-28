import { useEffect, useLayoutEffect, useState } from "react";
import * as S from "./styles";
import back from "../../assets/icons/back.svg";
import logout from "../../assets/icons/Logout.svg";
import { useNavigate } from "react-router-dom";

const Header = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setTitle(document.title);
  }, [document.title]);

  return (
    <>
      <S.Container>
        <S.Back src={back} />
        <S.Title>TEST-2</S.Title>
        <div></div>
      </S.Container>
    </>
  );
};

export default Header;
