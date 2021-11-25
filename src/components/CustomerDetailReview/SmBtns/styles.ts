import styled from "@emotion/styled";
import { color } from "../../../style/color";

export const BtnContainer = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const SMBtn = styled.div<{ isActive: boolean }>`
  border-radius: 50px;
  border: 0;
  background-color: ${(props) => (props.isActive ? color.green : color.white)};
  color: ${(props) => (props.isActive ? color.white : color.grey)};
  ${(props) =>
    !props.isActive ? `border: 1px solid ${color.grey}` : `border: 1px solid transparent`};
  padding: 8px 12px;
`;
