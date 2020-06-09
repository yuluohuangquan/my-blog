import React from "react";
import { List, Switch } from "antd";
import Container from "../container";
import { list } from "./constant";

import css from "./styles/main.module.less";

export default function Home() {
  return (
    <Container>
      <div className={css.main}>
        <div className={css.mainContent}>{"功能模块管理"}</div>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={list}
          renderItem={item => (
            <List.Item actions={[<Switch />]}>
              <List.Item.Meta
                key={item.key}
                description={item.name}
              />
            </List.Item>
          )}
        />
      </div>
    </Container>
  );
}
