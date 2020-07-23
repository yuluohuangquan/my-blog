import React from "react";
import { Tag } from "antd";
import { colorMap } from "./constant";
import css from "./styles/overview.module.less";
import { useHistory } from "react-router-dom";

interface injectProps {
  detail: {
    title: string;
    introduce: string;
    addTime: string;
    id: number;
    type: string;
  };
}

export default function Item({ detail }: injectProps) {
  const { title, introduce, addTime, id, type } = detail;
  let history = useHistory();

  const goDetail = () => {
    history.push(`/detail/${id}`);
  };
  
  return (
    <div className={css.detail} onClick={goDetail}>
      <header>{title}</header>
      <div className={css.detailContent}>{introduce}</div>
      <footer>
        <p>{addTime}</p>
        <h5>
          <Tag color={colorMap[type].color}>{colorMap[type].name}</Tag>
        </h5>
      </footer>
    </div>
  );
}
