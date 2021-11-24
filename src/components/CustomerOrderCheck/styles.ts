import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";
export const Selected = styled.div`
  margin-left: 30px;
  margin-bottom: 20px;
  font: ${font.headline1};
`;
export const SelectedMenu = styled.div`
  margin-left: 30px;
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
  margin-left: 10px;
  width: 35px;
  background-color: ${color.red};
  border-radius: 5px;
  border: 0;
  color: white;
  margin-right: 20px;
`;
export const OrderForm = styled.div`
  background-color: ${color.white};
  float: right;
  width: 100%;
  font: ${font.headline3};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6rem;
`;
export const OrderPrice = styled.span`
  color: ${color.green};
  font: ${font.headline3};
  float: right;
  padding-right: 30px;
`;

export const Order = styled.button`
  background-color: ${color.green};
  border-radius: 5px;
  border: 0;
  color: white;
  width: 80%;
  height: 30px;
  margin-left: 32.5px;
  font: ${font.headline3};
`;
