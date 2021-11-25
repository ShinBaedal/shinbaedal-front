import React from "react";
import Order from "../../interface/Order";
import * as S from "./styles";

interface PropsType {
  data: Order;
}

export default function Order({ data }: PropsType) {
  const { isDone, menuNames, storeName } = data;

  return (
    <div>
      <S.MainDiv>
        <S.SContainer>
          <S.SubTitle>{storeName}</S.SubTitle>
        </S.SContainer>
        <S.SubTextContainer>
          {menuNames.slice(0, menuNames.length - 1).map((value, index) => {
            return <S.SubTextDiv key={index}>{value}</S.SubTextDiv>;
          })}
          <S.SContainer>
            <S.SubTextDiv>{menuNames[menuNames.length - 1]}</S.SubTextDiv>
            <S.Wait>{isDone ? "주문 완료" : "주문 대기"}</S.Wait>
          </S.SContainer>
        </S.SubTextContainer>
      </S.MainDiv>
    </div>
  );
}
