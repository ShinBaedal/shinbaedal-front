/* eslint-disable */
import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const MainDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 360px;
  border-radius: 20px;
  background-color: ${color.grey};
`;

export const ReviewGo = styled.p`
  padding-top: 20px;
  padding-left: 20px;
  font: ${font.headline2};
`;

export const ReviewInput = styled.input`
  width: 90%;
  padding-bottom: 120px;
  display: block;
  margin: 0 auto;
  border-radius: 20px;
  border: 0;
  padding-top: 10px;
  padding-left: 10px;
  font: ${font.description1};
  background-color: ${color.lightGrey};
`;

export const Fill = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: ${color.grey};
`;

export const WriteBtn = styled.button`
  width: 80%;
  height: 35px;
  margin-top: 30px;
  margin-left: 37.5px;
  display: block;
  background-color: ${color.green};
  border-radius: 20px;
  border: 0;
  font: ${font.body1};
  color: white;
`;

export const Black = styled.div`
  background-color: ${color.black};
`;
