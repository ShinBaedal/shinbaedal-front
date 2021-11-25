import * as S from "./styles";

interface PropsType {
  onBuy: () => void;
  size: number;
}

const Footer = ({ onBuy, size }: PropsType) => {
  return (
    <S.Container>
      <S.Btn onClick={onBuy}>주문하기 {size}</S.Btn>
    </S.Container>
  );
};

export default Footer;
