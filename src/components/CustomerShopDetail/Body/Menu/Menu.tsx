import State from "../../../../interface/State";
import * as S from "./styles";

interface PropsType {
  navs: string[];
  navState: State<string>;
}

const Menu = ({ navs, navState }: PropsType): JSX.Element => {
  const [nav, setNav] = navState;

  const renderNavs = navs.map((value) => {
    return (
      <S.Nav width={1 / navs.length} active={nav === value}>
        {value}
      </S.Nav>
    );
  });

  return <S.Container>{renderNavs}</S.Container>;
};

export default Menu;
