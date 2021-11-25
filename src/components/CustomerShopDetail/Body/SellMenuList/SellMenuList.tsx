import { useLayoutEffect, useState } from "react";
import Menu from "../../../../interface/Menu";
import { getMenuList } from "../../../../utils/api/Menu";
import SellMenu from "../../SellMenu/SellMenu";
import * as S from "./styles";

interface PropsType {
  id: number;
}

const SellMenuList = ({ id }: PropsType) => {
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
    return <SellMenu data={value} key={index} />;
  });

  return <S.Container>{renderMenu}</S.Container>;
};

export default SellMenuList;
