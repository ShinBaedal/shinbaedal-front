/* eslint-disable */
import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const MenuButton = styled.button`
  width: 50%;
  height: 40px;
  background-color: ${color.white};
  border: 0;
  color: ${color.grey};
  border-bottom: 1px solid ${color.grey};
`;
export const ReviewButton = styled.button`
  width: 50%;
  height: 40px;
  background-color: ${color.green};
  border: 0;
  color: ${color.white};
  border-bottom: 1px solid ${color.grey};
`;
export const SMBtn = styled.button`
  width: 60px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  font: ${font.body2};
  color: ${color.grey};
  background-color: ${color.white};
  border: 1px solid ${color.grey};
  margin-right: 15px;
  margin-bottom: 15px;
  &:hover {
    background-color: ${color.green};
  }
`;

export const Review = styled.div`
  width: 90%;
  height: 60px;
  margin: auto;
  margin-bottom: 14px;
  border-radius: 20px;
  background-color: ${color.lightGrey};
`;
export const ReviewText = styled.p`
  padding-left: 10px;
  font: ${font.headline3};
  padding-top: 10px;
  display: inline-block;
`;
export const ReviewStar = styled.span`
  padding-right: 10px;
  float: right;
  color: ${color.red};
`;
export const ReviewSubText = styled.span`
  padding-left: 10px;
  padding-top: 10px;
`;
