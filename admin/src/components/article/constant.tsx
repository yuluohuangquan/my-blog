import React from 'react';

export const columns = [
    {
        title: '标题',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '类型',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '查看次数',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
        render: (_text: any) => {
            return <div>
                <a>{'删除'}</a>
                <a>{'修改'}</a>
            </div>
        },
    },
];

export const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export const MarkdownList = [
    '# 一级标题',
    '## 二级标题',
    '###### 六级标题',
    '*斜体文本*',
    '_斜体文本_',
    '**粗体文本**',
    '__粗体文本__',
    '***粗斜体文本***',
    '___粗斜体文本___',
    '~~删除线~~',
    '<u>带下划线文本</u>',
    '创建脚注格式类似这样 [^SUNYU] [^SUNYU]: 创建脚注格式',
    '* 第一项',
    '* 第二项',
    '这是一个链接 [博客地址](https://www.sunyu.ml)',
    '![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")',
    '你也可以用 ``` 包裹一段代码，并指定一种语言（也可以不指定）'
];