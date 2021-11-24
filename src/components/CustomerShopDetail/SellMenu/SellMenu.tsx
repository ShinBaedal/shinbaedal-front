import * as S from "./styles";
import Img from "../../../assets/pictures/hamburger.jpg";

const SellMenu = () => {
  return (
    <S.Container>
      <S.Img src={Img} alt="img" />
      <S.InfoContainer>
        <S.Body2>햄버거 많이 많이 세트</S.Body2>
        <S.Won>10,000원</S.Won>
      </S.InfoContainer>
      <S.Line />
    </S.Container>
  );
};

export default SellMenu;
