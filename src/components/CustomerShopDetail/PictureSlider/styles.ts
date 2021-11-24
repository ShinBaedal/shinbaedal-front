import styled from "@emotion/styled";
import { color } from "../../../style/color";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
  padding: 0px 24px;
`;

export const ImgContainer = styled.div`
  height: 227px;
  grid-column: 1 / 4;
  position: relative;
  overflow: visible;
`;

export const ImgContainerInner = styled.div<{ x: number }>`
  position: absolute;
  display: flex;
  height: 100%;
  column-gap: 16px;
  overflow: visible;
  transform: translateX(${(props) => props.x}px);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
`;

export const DotContainer = styled.div`
  width: 100%;
  grid-column: 1 / 5;
  display: flex;
  column-gap: 6px;
  justify-content: center;
  margin-top: 12px;
`;

export const Dot = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props.isActive ? color.green : color.grey)};
  border-radius: 50%;
`;
