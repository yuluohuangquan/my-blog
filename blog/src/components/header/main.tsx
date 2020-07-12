import React from "react";
import { useHistory } from "react-router-dom";
import css from "./styles/main.module.less";

export default function Header() {
  let history = useHistory();

  const goHome = () => {
    history.push('/home');
  }

  return (
    <header className={css.header}>
      <div className={css.content}>
        <div className={css.title}>
          <a onClick={goHome}>孙雨的博客</a>
          <span>时间出真知</span>
        </div>
        <div className={css.titleList}>
          <div>前端学习</div>
          <div>最新技术</div>
          <div>算法学习</div>
          <div>暴富秘诀</div>
        </div>
      </div>
    </header>
  );
}
