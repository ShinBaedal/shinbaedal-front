import React from "react";
import State from "../../../interface/State";
import * as S from "./styles";

interface PropsType {
  navs: string[];
  navState: State<string>;
}

const SmBtns = ({ navState, navs }: PropsType) => {
  const [nav, setNav] = navState;

  const onClick = (value: string) => {
    setNav(value);
  };

  const renderNavs = navs.map((value) => {
    return (
      <S.SMBtn isActive={value === nav} onClick={() => onClick(value)}>
        {value}
      </S.SMBtn>
    );
  });

  return <S.BtnContainer>{renderNavs}</S.BtnContainer>;
};

export default SmBtns;
