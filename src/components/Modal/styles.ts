import styled from "@emotion/styled";
import { color } from "../../style/color";

export const Bar = styled.div`
  height: 24px;
  width: 100%;
  box-sizing: border-box;
`;

export const Container = styled.div<{ bottom: number }>`
  width: 100%;
  background-color: ${color.white};
  border-radius: 20px 20px 0px 0px;
  padding: 0px 24px ${(props) => props.bottom + 24}px 24px;
  bottom: 0px;
  position: absolute;
  transition: height 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: hidden;
`;

export const Inner = styled.div`
  max-height: 80vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Background = styled.div`
  background-color: ${color.blackOpacity};
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Outer = styled.div<{ active: boolean }>`
  width: 100vw;
  height: 100vh;
  z-index: 20;
  position: fixed;
  top: 0px;
  left: 0px;
  display: ${(props) => (props.active ? "unset" : "none")};
`;
