import PictureSlider from "../PictureSlider/PictureSlider";
import * as S from "./styles";
import Star from "../../../assets/icons/star.svg";
import Store from "../../../interface/Store";
import { useLayoutEffect, useState } from "react";
import { getMenuList } from "../../../utils/api/Menu";

interface PropsType {
  data: Store;
}

const Header = ({ data }: PropsType): JSX.Element => {
  const { name, id, photoUrl, rate } = data;

  const [photo, setPhoto] = useState<string[]>([]);

  const settingMenu = async () => {
    try {
      setPhoto([photoUrl].concat((await getMenuList(id)).data.data.map((value) => value.photoUrl)));
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    settingMenu();
  }, [data]);

  return (
    <S.Container>
      <PictureSlider
        pictures={photo.map((value) => {
          return value;
        })}
      />
      <S.InnerContainer>
        <S.TitleContainer>
          <S.Title>{name}</S.Title>
          <S.StarContainer>
            <S.Star alt="img" src={Star} />
            <S.Body1>{rate}</S.Body1>
          </S.StarContainer>
        </S.TitleContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Header;
