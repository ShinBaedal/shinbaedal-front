import styled from "@emotion/styled";
import { color } from "../../../../style/color";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Nav = styled.div<{ width: number; active: boolean }>`
  width: ${(props) => props.width}%;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.active ? color.white : color.grey)};
  background-color: ${(props) => (props.active ? color.green : color.white)};
  border-bottom: ${(props) => (props.active ? 0 : 1)}px solid ${color.grey};
`;
