import React, { useRef, useState } from "react";
import * as S from "./styles";
interface PropsType {
  pictures: string[];
}

const PictureSlider = ({ pictures }: PropsType): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const onImgClick = (index: number) => {
    setIndex(index);
  };

  const renderPictures = pictures.map((value, index) => {
    return <S.Img onClick={() => onImgClick(index)} src={value} key={index} alt="img" />;
  });

  const renderDots = pictures.map((_, i) => {
    return <S.Dot isActive={index === i} />;
  });

  const calcX = (): number => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const x = (width + 16) * index;
      return -x;
    }
    return 0;
  };

  return (
    <S.Container>
      <S.ImgContainer ref={containerRef}>
        <S.ImgContainerInner x={calcX()}>{renderPictures}</S.ImgContainerInner>
      </S.ImgContainer>
      <S.DotContainer>{renderDots}</S.DotContainer>
    </S.Container>
  );
};

export default PictureSlider;
