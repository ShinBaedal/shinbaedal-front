import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const Contaienr = styled.div`
  width: 100%;
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: ${color.white};
  margin-bottom: 36px;
`;

export const MainTitle = styled.div`
  font: ${font.headline4};
`;

export const SubTitle = styled.div`
  font: ${font.body2};
`;

export const MainDiv = styled.div`
  padding: 12px;
  width: 100%;
  border-radius: 20px;
  font: ${font.body3};
  background-color: ${color.lightGrey};
`;

export const SubTextContainer = styled.div`
  margin-top: 2px;
`;

export const SubTextDiv = styled.p`
  margin-top: 8px;
  font: ${font.body3};
  color: ${color.darkGrey};
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Menus = styled.span`
  margin-bottom: 10px;
  font: ${font.body3};
  color: ${color.grey};
`;

export const Arrows = styled.span`
  display: block;
`;

export const Wait = styled.span`
  font: ${font.body3};
  text-align: right;
  color: ${color.black};
`;
