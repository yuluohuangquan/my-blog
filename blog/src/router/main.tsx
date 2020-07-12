import React from "react";
import { Route, Switch } from "react-router-dom";
import css from "./styles/main.module.less";

import Home from "../components/home";

import Header from "../components/header";

const router = (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/" exact component={Home} />
  </Switch>
);

function Main() {
  // const pathname = window.location.pathname;

  return (
    <>
      <Header />
      <div className={css.main}>
        {router}
      </div>
    </>
  );
}

export default React.memo(Main);
