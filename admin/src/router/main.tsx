import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../components/login";
import Home from "../components/home";
import Test from "../components/test";
import Translate from "../components/translate";

import Header from "../components/header";
import Sider from "../components/sider";

const router = (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/test" component={Test} />
    <Route path="/translate" component={Translate} />
    <Route path="/" exact component={Login} />
  </Switch>
);

function Main() {
  const pathname = window.location.pathname;

  return (
    <>
      {pathname !== "/" && pathname !== "/login" && (
        <>
          <Header />
          <Sider />
        </>
      )}
      {router}
    </>
  );
}

export default React.memo(Main);
