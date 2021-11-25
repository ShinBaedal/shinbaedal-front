import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-top: 36px;
  background-color: ${color.white};
`;

export const InnerContainer = styled.div`
  width: 100%;
  padding: 0px 24px;
`;

export const Grid = styled.div`
  display: grid;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const Title = styled.div`
  font: ${font.subtitle1};
`;

export const Body1 = styled.div`
  font: ${font.body1};
  color: ${color.green};
`;

export const StarContainer = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const Star = styled.img`
  width: 16px;
`;
