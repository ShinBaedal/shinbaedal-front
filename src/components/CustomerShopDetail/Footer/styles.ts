import styled from "@emotion/styled";
import { color } from "../../../style/color";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background-color: ${color.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  z-index: 10;
  padding: 16px 24px;
`;

export const Btn = styled.div`
  padding: 8px 0px;
  color: ${color.white};
  border-radius: 5px;
  background-color: ${color.green};
  text-align: center;
`;
