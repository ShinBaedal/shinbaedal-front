import * as S from "./styles";
import Img from "../../assets/pictures/hamburger.jpg";

const MenuModal = (): JSX.Element => {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.Img src={Img} />
        <S.TitleContainer>
          <S.Title>햄버거 많이 많이 세트</S.Title>
          <S.Won>10,000원</S.Won>
        </S.TitleContainer>
        <S.Content>담으시겠습니까?</S.Content>
      </S.InnerContainer>
      <S.ButtonContainer>
        <S.BuyButton>구매</S.BuyButton>
        <S.CancelButton>취소</S.CancelButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MenuModal;
