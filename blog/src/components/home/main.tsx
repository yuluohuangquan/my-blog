import React, { useState, useEffect, useCallback } from "react";
import { getArticleList } from "../../axios/api";
import css from "./styles/main.module.less";
import Item from "./overview";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    changeCollapse();
  }, []);

  const changeCollapse = useCallback(async () => {
    const res = await getArticleList();
    setList(res.data?.list);
    console.log(res.data?.list);
  }, []);

  return (
    <div className={css.main}>
      {list?.map((item, index) => {
        return <Item key={index} detail={item} />;
      })}
    </div>
  );
}
