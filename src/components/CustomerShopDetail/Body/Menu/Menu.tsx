import State from "../../../../interface/State";
import * as S from "./styles";

interface PropsType {
  navs: string[];
  navState: State<string>;
}

const Menu = ({ navs, navState }: PropsType): JSX.Element => {
  const [nav, setNav] = navState;

  const onNavClick = (value: string) => {
    setNav(value);
  };

  const renderNavs = navs.map((value) => {
    return (
      <S.Nav width={100 / navs.length} active={nav === value} onClick={() => onNavClick(value)}>
        {value}
      </S.Nav>
    );
  });

  return <S.Container>{renderNavs}</S.Container>;
};

export default Menu;
