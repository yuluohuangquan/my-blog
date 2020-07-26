import React from "react";
import Container from "../container";
import { Table, Button } from 'antd';
import { useHistory } from "react-router-dom";
import { columns, data } from './constant';
import css from "./styles/main.module.less";

export default function Main() {
    let history = useHistory();

    const addArticle = () => {
        history.push("/addArticle");
    }
    return (
        <Container>
            <div className={css.home}>
                <div className={css.homeContent}>
                    <p>{"文章管理"}</p>
                    <Button onClick={addArticle} type="primary">{'新增'}</Button>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        </Container>
    );
}
