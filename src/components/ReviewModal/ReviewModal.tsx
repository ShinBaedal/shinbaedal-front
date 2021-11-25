import * as S from "./styles";
import Img from "../../assets/pictures/hamburger.jpg";
import Star from "../../assets/icons/star.svg";
import Review from "../../interface/Review";

interface PropsType {
  data: Review;
}

const ReviewModal = ({ data }: PropsType) => {
  const { content, reply, menuNames, rate, type, user, id } = data;

  return (
    <S.Container>
      <S.Img src={Img}></S.Img>
      <S.ReviewContainerContainer>
        <div>
          <S.TitleContainer>
            <S.TitleInfoContainer>
              <div>{user.name} ·&nbsp;</div>
              <S.TitleInfo>{type}적 리뷰</S.TitleInfo>
            </S.TitleInfoContainer>
            <S.StarContainer>
              <S.Star src={Star} />
              {rate}
            </S.StarContainer>
          </S.TitleContainer>
          <S.ReviewContainer>{content}</S.ReviewContainer>
        </div>
        <div>
          {reply.content && (
            <>
              <S.TitleContainer>사장님의 답글</S.TitleContainer>
              <S.ReviewContainer>{reply.content}</S.ReviewContainer>
            </>
          )}
        </div>
      </S.ReviewContainerContainer>
    </S.Container>
  );
};

export default ReviewModal;
