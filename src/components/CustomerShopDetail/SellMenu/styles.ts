import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const Container = styled.button`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  padding: 0px 24px;
  border: 0;
  background-color: transparent;
  text-align: left;
  outline: none;
  &:active {
    background-color: ${color.lightGrey};
  }
  align-items: center;
`;

export const InfoContainer = styled.div`
  grid-column: 2 / 5;
  transform: translateX(-4px);
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: center;
`;

export const Body2 = styled.div`
  font: ${font.body2};
`;

export const Won = styled.div`
  font: ${font.description3};
  color: ${color.green};
`;

export const Img = styled.img`
  width: 100%;
  height: 58px;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  grid-column: 1 / 2;
`;

export const Line = styled.div`
  grid-column: 1 / 5;
  height: 1px;
  width: 100%;
  margin: 8px 0px;
  background-color: ${color.grey};
`;
