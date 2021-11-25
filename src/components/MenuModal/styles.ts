import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Container = styled.div`
  width: 100%;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Img = styled.img`
  width: 100%;
  height: 327px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font: ${font.body1};
`;

export const Won = styled.div`
  color: ${color.green};
  font: ${font.body3};
`;

export const Content = styled.div`
  font: ${font.body3};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  display: grid;
  margin-top: 24px;
`;

export const BuyButton = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: ${color.green};
  padding: 8px 0px;
  display: flex;
  justify-content: center;
  color: ${color.white};
  grid-column: 1 / 4;
`;

export const CancelButton = styled.div`
  grid-column: 4 / 5;
  width: 100%;
  background-color: ${color.darkGrey};
  padding: 8px 0px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  color: ${color.white};
`;
