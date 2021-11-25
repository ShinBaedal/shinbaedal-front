import TopMenus from "./TopMenus";
import Total from "./Total";
import SellMenu from "../CustomerShopDetail/SellMenu/SellMenu";
import * as S from "./styles";

export default function CustomerorderDetail() {
  return (
    <>
      <S.Container>
        <TopMenus />
        {[1, 2, 3, 4].map((a, i) => (
          <SellMenu />
        ))}
        <Total />
      </S.Container>
    </>
  );
}
