import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.white};
`;

export const Back = styled.img`
  width: 13px;
`;

export const Logout = styled.img`
  width: 24px;
`;

export const Title = styled.div`
  color: ${color.black};
  font: ${font.body2};
`;
