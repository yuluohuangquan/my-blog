import React from "react";
import Container from "../container";
import { Table, Button } from "antd";
import { columns, data } from "./constant";
import css from "./styles/main.module.less";

export default function Main() {
  const addUser = () => {
    window.console.log("加");
  };

  return (
    <Container>
      <div className={css.main}>
        <div className={css.mainContent}>
          {"用户管理"}
          <Button type="primary" onClick={addUser}>{"新增"}</Button>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </Container>
  );
}
