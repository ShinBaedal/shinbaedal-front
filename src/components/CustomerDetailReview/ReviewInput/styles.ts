import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const Container = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  color: ${color.grey};
  font: ${font.body3};
  outline: none;
  border: 0;
  text-align: left;
  background-color: ${color.lightGrey};
  margin-bottom: 8px;
  &:active {
    filter: brightness(0.9);
  }
`;
