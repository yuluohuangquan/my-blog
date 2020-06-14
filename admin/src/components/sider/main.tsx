import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

import { menuList } from '../../constant';
import css from "./styles/main.module.less";

export default function Sider() {
  let history = useHistory();
  const [selectKey, setSelectKey] = useState('');

  useEffect(() => {
    setSelectKey(window.location.pathname.slice(1));
    window.console.log("useEffect ", window.location.pathname.slice(1));
  }, []);

  const handleClick = (e: any) => {
    window.console.log("click ", e, window.location);
  };

  const changeTab = (key: string) => {
    history.push(`/${key}`);
  }

  return (
    <Menu
      className={css.sider}
      onClick={handleClick}
      style={{ width: 260 }}
      selectedKeys={[selectKey]}
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
