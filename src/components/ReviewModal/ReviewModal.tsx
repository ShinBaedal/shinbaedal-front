import * as S from "./styles";
import Img from "../../assets/pictures/hamburger.jpg";
import Star from "../../assets/icons/star.svg";

const ReviewModal = () => {
  return (
    <S.Container>
      <S.Img src={Img}></S.Img>
      <S.ReviewContainerContainer>
        <div>
          <S.TitleContainer>
            <S.TitleInfoContainer>
              <div>김진근 ·&nbsp;</div>
              <S.TitleInfo>긍정적 리뷰</S.TitleInfo>
            </S.TitleInfoContainer>
            <S.StarContainer>
              <S.Star src={Star} />
              4.5
            </S.StarContainer>
          </S.TitleContainer>
          <S.ReviewContainer>
            대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며, 선전포고와 강화를
            한다. 대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 국회의원은 그 지위를
            남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는
            직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.
          </S.ReviewContainer>
        </div>
        <div>
          <S.TitleContainer>사장님의 답글</S.TitleContainer>
          <S.ReviewContainer>
            대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며, 선전포고와 강화를
            한다. 대통령은 국가의 원수이며, 외국에 대하여 국가를 대표한다. 국회의원은 그 지위를
            남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는
            직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.
          </S.ReviewContainer>
        </div>
      </S.ReviewContainerContainer>
    </S.Container>
  );
};

export default ReviewModal;
