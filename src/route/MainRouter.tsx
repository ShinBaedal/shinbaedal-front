import React, { FC, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { MainContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <Switch>
        <Route exact path="/" component={MainContainer} />
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
