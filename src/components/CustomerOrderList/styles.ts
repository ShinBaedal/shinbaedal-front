import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const MainTitle = styled.div`
  font: ${font.headline4};
  padding-top: 36px;
  padding-left: 24px;
`;
export const SubTitle = styled.div`
  margin-bottom: 10px;
`;
export const MainDiv = styled.div`
  margin-top: 16px;
  margin-left: 24px;
  margin-bottom: 16px;
  padding: 12px;
  width: 327px;
  height: 130px;
  border-radius: 20px;
  font: ${font.body2};
  background-color: ${color.lightGrey};
`;

export const SubTextDiv = styled.p`
  margin-top: 10px;
  font: ${font.body3}
  color: ${color.greyOpacity};
`;
export const Menus = styled.span`
  margin-bottom: 10px;
  font: ${font.body3}
  color: ${color.grey}
`;
export const Arrows = styled.span`
  float: right;
  padding: 12px;
  display: block;
`;

export const Wait = styled.span`
  float: right;
  float: bottom;
  padding: 6px;
  font: ${font.body3};
`;
