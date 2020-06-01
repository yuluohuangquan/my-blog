import React from "react";
import css from "./styles/main.module.less";

export default function Header() {
  return (
    <div className={css.header}>
      <p className={css.title}>{"网站名称"}</p>
      <div className={css.headerRight}>
      <p>{'admin'}</p>
      </div>
    </div>
  );
}
