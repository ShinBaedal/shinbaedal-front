import PictureSlider from "../PictureSlider/PictureSlider";
import * as S from "./styles";
import Hamburger from "../../../assets/pictures/hamburger.jpg";
import Star from "../../../assets/icons/star.svg";

const Header = (): JSX.Element => {
  return (
    <S.Container>
      <PictureSlider
        pictures={[1, 2, 3, 4, 5].map(() => {
          return Hamburger;
        })}
      />
      <S.InnerContainer>
        <S.TitleContainer>
          <S.Title>롯데리아 신성점</S.Title>
          <S.StarContainer>
            <S.Star alt="img" src={Star} />
            <S.Body1>4.95</S.Body1>
          </S.StarContainer>
        </S.TitleContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Header;
