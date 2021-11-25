import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Img = styled.img`
  width: 100%;
  height: 327px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-bottom: 16px;
`;

export const Container = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font: ${font.body3};
  margin-bottom: 8px;
`;

export const TitleInfoContainer = styled.div`
  display: flex;
`;
export const TitleInfo = styled.div`
  color: ${(props) => props.color};
`;

export const StarContainer = styled.div`
  display: flex;
  column-gap: 4px;
  color: ${(props) => props.color};
`;

export const Star = styled.img`
  width: 16px;
`;

export const ReviewContainer = styled.div`
  width: 100%;
  background-color: ${color.lightGrey};
  font: ${font.description2};
  color: ${color.black};
  padding: 12px;
  border-radius: 20px;
`;

export const ReviewContainerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
