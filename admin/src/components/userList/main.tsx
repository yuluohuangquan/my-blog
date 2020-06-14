import React from "react";
import Container from "../container";
import { Table } from 'antd';
import { columns, data } from './constant';
import css from "./styles/main.module.less";

export default function Main() {
    return (
        <Container>
            <div className={css.main}>
                <div className={css.mainContent}>{"用户管理"}</div>
                <Table columns={columns} dataSource={data} />
            </div>
        </Container>
    );
}
