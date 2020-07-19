import React from "react";
import { Route, Switch } from "react-router-dom";
import { Chain, Introduction } from '../components/rightNav';
import css from "./styles/main.module.less";

import Home from "../components/home";
import Header from "../components/header";
import Detail from "../components/detailPage";

const router = (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/detail/:id" component={Detail} />
    <Route path="/" exact component={Home} />
  </Switch>
);

function Main() {
  // const pathname = window.location.pathname;

  return (
    <>
      <Header />
      <div className={css.main}>
        <div className={css.content}>
          {router}
        </div>
        <div className={css.side}>
          <Introduction />
          <Chain />
        </div>
      </div>
    </>
  );
}

export default React.memo(Main);
