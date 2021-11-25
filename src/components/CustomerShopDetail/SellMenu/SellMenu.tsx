import * as S from "./styles";
import Menu from "../../../interface/Menu";
import MenuModal from "../../MenuModal/MenuModal";
import State from "../../../interface/State";

interface PropsType {
  data: Menu;
  menusState: State<number[]>;
  isModalState: State<boolean>;
  modalState: State<JSX.Element | null>;
}

const SellMenu = ({ data, isModalState, menusState, modalState }: PropsType) => {
  const { id, name, photoUrl, price } = data;
  const [isModal, setIsModal] = isModalState;
  const [modal, setModal] = modalState;

  return (
    <S.Container
      onClick={() => {
        setIsModal(true);
        setModal(<MenuModal data={data} menusState={menusState} modalState={isModalState} />);
      }}
    >
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
