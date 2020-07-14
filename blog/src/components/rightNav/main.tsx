import React from "react";
import css from "./styles/main.module.less";

export default function Home() {
  return (
    <div className={css.main}>
      <div className={css.content}>
        <title></title>
        <div className={css.detailContent}></div>
        <footer></footer>
      </div>
    </div>
  );
}
