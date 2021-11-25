import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";

export const Container = styled.div`
  padding-top: 12px;
  width: 100%;
  background-color: ${color.white};
  padding-bottom: 36px;
`;

export const Selected = styled.div`
  padding: 0px 24px;
  margin-bottom: 16px;
  font: ${font.subtitle1};
`;

export const SelectedMenu = styled.div`
  width: 100%;
  display: flex;
`;

export const MenuInfo = styled.div`
  font: ${font.headline3};
  margin-left: 20px;
`;
export const MenuName = styled.div`
  font: ${font.headline3};
  margin-left: 20px;
  margin-top: 20px;
`;
export const Price = styled.div`
  font: ${font.headline3};
  margin-top: 20px;
  margin-left: 20px;
  color: ${color.green};
`;
export const Xbtn = styled.button`
  width: 35px;
  background-color: ${color.red};
  border-radius: 5px;
  border: 0;
  color: white;
`;
export const OrderForm = styled.div`
  background-color: ${color.white};
  width: 100%;
  display: flex;
  padding: 16px 24px 24px 24px;
  flex-direction: column;
  row-gap: 12px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const OrderPrice = styled.span`
  color: ${color.green};
  float: right;
`;

export const TitleContainer = styled.div`
  font: ${font.subtitle2};
  display: flex;
  color: ${color.black};
  justify-content: right;
`;

export const Order = styled.button`
  background-color: ${color.green};
  border-radius: 5px;
  border: 0;
  padding: 10px 0px;
  color: white;
  width: 100%;
  font: ${font.body1};
`;

export const MenuContainer = styled.button`
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

export const Btn = styled.div`
  width: 100%;
  grid-column: 4 / 5;
  background-color: ${color.red};
  font: ${font.body3};
  color: ${color.white};
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  grid-column: 2 / 4;
  transform: translateX(-4px);
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: center;
`;

export const Body2 = styled.div`
  font: ${font.body2};
  color: ${color.black};
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
