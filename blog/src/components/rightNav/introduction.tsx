import React from "react";
import css from "./styles/introduction.module.less";

export default function Introduction() {
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
