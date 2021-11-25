import * as S from "./styles";
import Menu from "../../../interface/Menu";

interface PropsType {
  data: Menu;
}

const SellMenu = ({ data }: PropsType) => {
  const { id, name, photoUrl, price } = data;

  return (
    <S.Container>
      <S.Img src={photoUrl} alt="img" />
      <S.InfoContainer>
        <S.Body2>{name}</S.Body2>
        <S.Won>{price.toLocaleString("ko-KR")}원</S.Won>
      </S.InfoContainer>
      <S.Line />
    </S.Container>
  );
};

export default SellMenu;
