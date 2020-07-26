import React from "react";
// import { Breadcrumb } from "antd";
// import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import css from "./styles/main.module.less";

export default function Container(props: any) {
  const { children } = props;
  return (
    <div className={css.main}>
      {/* <Breadcrumb>
        <Breadcrumb.Item href="/home">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/home">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb> */}
      {children}
    </div>
  );
}
