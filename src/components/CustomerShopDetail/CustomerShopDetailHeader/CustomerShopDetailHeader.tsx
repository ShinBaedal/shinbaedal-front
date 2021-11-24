import PictureSlider from "../PictureSlider/PictureSlider";
import * as S from "./styles";
import Hamburger from "../../../assets/pictures/hamburger.jpg";
import Star from "../../../assets/icons/star.svg";
import Like from "../../../assets/icons/like.svg";
import Dislike from "../../../assets/icons/dislike.svg";

const CustomerShopDetailHeader = (): JSX.Element => {
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
        <S.InfoContainer>
          <S.DarkGrey>리뷰 1234개</S.DarkGrey>
          <S.LikeOuter>
            <S.LikeContainer>
              <S.Like src={Like} />
              <S.GreenDescription>123</S.GreenDescription>
            </S.LikeContainer>
            <S.LikeContainer>
              <S.Like src={Dislike} />
              <S.DarkGrey>123</S.DarkGrey>
            </S.LikeContainer>
          </S.LikeOuter>
        </S.InfoContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default CustomerShopDetailHeader;
