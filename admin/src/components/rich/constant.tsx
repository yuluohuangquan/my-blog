import React from "react";

export const columns = [
  {
    title: "期数",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "一",
    dataIndex: "num1",
    key: "num1"
  },
  {
    title: "二",
    dataIndex: "num2",
    key: "num2"
  },
  {
    title: "三",
    dataIndex: "num3",
    key: "num3"
  },
  {
    title: "四",
    dataIndex: "num4",
    key: "num4"
  },
  {
    title: "五",
    dataIndex: "num5",
    key: "num5"
  },
  {
    title: "六",
    dataIndex: "num6",
    key: "num6"
  },
  {
    title: "七",
    dataIndex: "num7",
    key: "num7"
  },
  {
    title: "操作",
    key: "action",
    render: (_text: any) => {
      return (
        <div>
          <a>{"预留"}</a>
        </div>
      );
    }
  }
];
