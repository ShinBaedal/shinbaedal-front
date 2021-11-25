import { useLayoutEffect, useState } from "react";
import Menu from "../../../../interface/Menu";
import State from "../../../../interface/State";
import { getMenuList } from "../../../../utils/api/Menu";
import SellMenu from "../../SellMenu/SellMenu";
import * as S from "./styles";

interface PropsType {
  id: number;
  menusState: State<number[]>;
  isModalState: State<boolean>;
  modalState: State<JSX.Element | null>;
}

const SellMenuList = ({ id, isModalState, menusState, modalState }: PropsType) => {
  const [menuList, setMenuList] = useState<Menu[]>([]);

  const settingMenu = async () => {
    try {
      setMenuList((await getMenuList(id)).data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    settingMenu();
  }, [id]);

  const renderMenu = menuList.map((value, index) => {
    return (
      <SellMenu
        menusState={menusState}
        isModalState={isModalState}
        modalState={modalState}
        data={value}
        key={index}
      />
    );
  });

  return <S.Container>{renderMenu}</S.Container>;
};

export default SellMenuList;
