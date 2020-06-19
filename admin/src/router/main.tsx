import React from "react";
import { Route } from "react-router-dom";

import Login from "../components/login";
import Home from "../components/home";
import MenuList from '../components/menuList';
import Test from "../components/test";
import Translate from "../components/translate";
import Features from '../components/features';
import Article from '../components/article';
import UserList from '../components/userList';
import Rich from "../components/rich";

import Header from "../components/header";
import Sider from "../components/sider";

const router = (
  <>
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/menuList" component={MenuList} />
    <Route path="/features" component={Features} />
    <Route path="/article" component={Article} />
    <Route path="/user" component={UserList} />
    <Route path="/test" component={Test} />
    <Route path="/getrich" component={Rich} />
    <Route path="/translate" component={Translate} />
    {/* <Route path="/" exact component={Login} /> */}
  </>
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
