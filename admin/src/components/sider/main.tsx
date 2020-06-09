import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

import { menuList } from '../../constant';
import css from "./styles/main.module.less";

export default function Sider() {
  let history = useHistory();

  const handleClick = (e: any) => {
    window.console.log("click ", e);
  };

  const changeTab = (key: string) => {
    history.push(`/${key}`);
  }

  return (
    <Menu
      className={css.sider}
      onClick={handleClick}
      style={{ width: 260 }}
      defaultSelectedKeys={[]}
      mode="inline"
    >
      {
        menuList.map(item => {
          return <Menu.Item key={item.key} onClick={() => changeTab(item.key)}>{item.title}</Menu.Item>;
        })
      }
    </Menu>
  );
}
