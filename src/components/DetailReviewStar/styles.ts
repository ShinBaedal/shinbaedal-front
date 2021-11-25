/* eslint-disable */
import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const MainDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background-color: ${color.white};
  padding: 24px;
`;

export const ReviewGo = styled.p`
  font: ${font.subtitle2};
`;

export const StarContainer = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const Star = styled.img`
  width: 24px;
`;

export const ReviewInput = styled.textarea`
  width: 100%;
  display: block;
  border-radius: 20px;
  box-sizing: border-box;
  border: 0;
  font: ${font.body3};
  background-color: ${color.lightGrey};
  outline: none;
  padding: 12px;
  height: 100px;
  resize: none;
  &::placeholder {
    color: ${color.grey};
  }
`;

export const WriteBtn = styled.button`
  width: 100%;
  height: 35px;
  padding: 8px 0px;
  display: flex;
  justify-content: center;
  background-color: ${color.green};
  border-radius: 5px;
  margin-top: 36px;
  outline: none;
  border: 0;
  font: ${font.body1};
  color: white;
`;

export const Black = styled.div`
  background-color: ${color.black};
`;
