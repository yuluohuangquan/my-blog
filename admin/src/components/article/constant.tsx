import React from "react";

const isDraftList = ["草稿", "文章"];

export const columns = (typeList: any) => {
  return [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
      render: (text: number) => {
        return <span>{typeList[text]}</span>;
      },
    },
    {
      title: "是否草稿",
      dataIndex: "isDraft",
      key: "isDraft",
      render: (text: number) => {
        return <span>{isDraftList[text]}</span>;
      },
    },
    {
      title: "查看次数",
      dataIndex: "viewCount",
      key: "viewCount",
    },
    {
      title: "操作",
      dataIndex: "id",
      key: "id",
      render: (_text: any) => {
        return (
          <div>
            <a>{"删除 "} </a> |<a> {" 修改"}</a>
          </div>
        );
      },
    },
  ];
};

export const MarkdownList = [
  "# 一级标题",
  "## 二级标题",
  "###### 六级标题",
  "*斜体文本*",
  "_斜体文本_",
  "**粗体文本**",
  "__粗体文本__",
  "***粗斜体文本***",
  "___粗斜体文本___",
  "~~删除线~~",
  "<u>带下划线文本</u>",
  "创建脚注格式类似这样 [^SUNYU] [^SUNYU]: 创建脚注格式",
  "* 第一项",
  "* 第二项",
  "这是一个链接 [博客地址](https://www.sunyu.ml)",
  '![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")',
  "你也可以用 ``` 包裹一段代码，并指定一种语言（也可以不指定）",
];
