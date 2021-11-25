import * as S from "./styles";
import Img from "../../assets/pictures/hamburger.jpg";
import Menu from "../../interface/Menu";
import State from "../../interface/State";

interface PropsType {
  data: Menu;
  menusState: State<number[]>;
  isModalState: State<boolean>;
}

const MenuModal = ({ data, isModalState: modalState, menusState }: PropsType): JSX.Element => {
  const { id, name, photoUrl, price } = data;
  const [isModal, setIsModal] = modalState;
  const [menus, setMenus] = menusState;

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Img src={photoUrl} />
        <S.TitleContainer>
          <S.Title>{name}</S.Title>
          <S.Won>{price.toLocaleString("ko-KR")}원</S.Won>
        </S.TitleContainer>
        <S.Content>담으시겠습니까?</S.Content>
      </S.InnerContainer>
      <S.ButtonContainer>
        <S.BuyButton
          onClick={() => {
            setMenus(menus.concat(id));
            setIsModal(false);
          }}
        >
          {" "}
          담기
        </S.BuyButton>
        <S.CancelButton
          onClick={() => {
            setIsModal(false);
          }}
        >
          취소
        </S.CancelButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MenuModal;
