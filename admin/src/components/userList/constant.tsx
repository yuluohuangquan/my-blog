import React from 'react';

export const columns = [
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '用户类型',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '最近登录次数',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
        render: (_text: any) => {
            return <div>
                <a>{'删除 '}</a>
                <a>{' 修改'}</a>
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