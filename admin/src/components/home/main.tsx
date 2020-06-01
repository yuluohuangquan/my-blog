import React from "react";
import Container from "../container";

import css from "./styles/main.module.less";

export default function Home() {
  return (
    <Container>
      <div className={css.home}>
        <div className={css.homeContent}>{"首页"}</div>
      </div>
    </Container>
  );
}
