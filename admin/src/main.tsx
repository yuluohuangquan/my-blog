import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./axios/interceptors";

import Routers from "./router";

import store from "./store";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Routers />
        </Switch>
      </Router>
    </Provider>
  );
}

export default React.memo(Main);
