import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const Review = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${color.lightGrey};
  padding: 12px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div`
  font: ${font.body3};
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export const Star = styled.img`
  width: 16px;
`;

export const ReviewStar = styled.span`
  color: ${color.green};
  font: ${font.body1};
`;

export const ReviewSubText = styled.span`
  font: ${font.description2};
`;

export const SellerReview = styled.div`
  font: ${font.description2};
  color: ${color.darkGrey};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  width: 100%;
  white-space: nowrap;
`;
