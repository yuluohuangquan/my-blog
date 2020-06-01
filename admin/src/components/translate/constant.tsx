import React from "react";

export const colum = [
  {
    title: "中文",
    dataIndex: "zh",
    key: "zh",
    render: (text: string) => <a>{text}</a>
  },
  {
    title: "I18n",
    dataIndex: "i18n",
    key: "i18n",
    render: (text: string) => <a>{text}</a>
  }
];
