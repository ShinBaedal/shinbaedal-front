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
  border: 0;
`;


export const Container = styled.div`
  width: 100%;
  background-color: ${color.white};
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 104px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const Title = styled.div`
  font: ${font.subtitle2};
`;
