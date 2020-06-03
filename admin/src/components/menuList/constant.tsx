import React from 'React';
import { Tag } from 'antd';

export const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '类型',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any) => (
            <>
                {tags.map((tag: any) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '数量',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
        render: (text: any, record: any) => {
            return <>
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </>
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