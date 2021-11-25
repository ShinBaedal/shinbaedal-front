/* eslint-disable */
import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

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
