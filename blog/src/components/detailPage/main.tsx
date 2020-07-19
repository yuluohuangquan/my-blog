import React from "react";
import css from "./styles/main.module.less";

interface InjectProps {
  match: any;
}

export default function Detail({ match }: InjectProps) {
  const { id } = match.params;
  console.log(id);

  return (
    <div className={css.main}>
      <h3>标题</h3>
      <div className={css.content}>

      </div>
      {/* <footer>底部</footer> */}
    </div>
  );
}
