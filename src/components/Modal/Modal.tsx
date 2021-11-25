import { useLayoutEffect, useRef, useState } from "react";
import State from "../../interface/State";
import * as S from "./styles";

interface PropsType {
  children: React.ReactNode;
  activeState: State<boolean>;
}

const Modal = ({ children, activeState }: PropsType) => {
  const [active, setActive] = activeState;
  const isFullRef = useRef<boolean>(false);
  const isCloseRef = useRef<boolean>(false);
  const [isTouch, setisTouch] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<number>(0);
  const firstHeightRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    document.body.style.overflow = active ? "hidden" : "unset";
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  useLayoutEffect(() => {
    if (!firstHeightRef.current && containerRef.current)
      firstHeightRef.current = containerRef.current.clientHeight;
  }, [containerRef]);

  useLayoutEffect(() => {
    if (containerRef.current && firstHeightRef.current && !isTouch) {
      if (isFullRef.current) {
        containerRef.current.style.height = `100vh`;
      } else if (isCloseRef.current) {
        setActive(false);
      } else {
        containerRef.current.style.height = `${firstHeightRef.current}px`;
      }
    }
  }, [isTouch]);

  return (
    <S.Outer active={active}>
      <S.Background onClick={() => setActive(false)} />

      <S.Container bottom={0} ref={containerRef}>
        <S.Bar
          onTouchStart={() => {
            setisTouch(true);
          }}
          onTouchEnd={() => {
            setisTouch(false);
          }}
          onTouchMove={(e) => {
            if (e.touches.length > 0) {
              const touch = e.touches[0];
              const screenY = touch.screenY + 100;

              const y = window.screen.height - screenY;

              if (containerRef.current && firstHeightRef.current) {
                if (screenY < window.screen.height * 0.3) {
                  setActive(true);
                  isFullRef.current = true;
                } else if (screenY < window.screen.height * 0.9) {
                  setActive(true);
                  isFullRef.current = false;
                } else {
                  isCloseRef.current = true;
                  isFullRef.current = false;
                }
                containerRef.current.style.height = `${y}px`;
              }
            }
          }}
        />
        <S.Inner>{children}</S.Inner>
      </S.Container>
    </S.Outer>
  );
};

export default Modal;
