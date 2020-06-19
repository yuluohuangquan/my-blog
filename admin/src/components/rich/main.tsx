import React, { useState, useEffect } from "react";
import Container from "../container";
import { Table } from 'antd';
import { columns } from './constant';
import * as Api from '../../axios/api';
import css from "./styles/main.module.less";

export default function Main() {
    const [tableList, setTableList] = useState([]); // 表格数据
    const [] = useState([]); // 图表数据

    useEffect(() => {
        getDataList();
      }, []);

    const  getDataList = async () => {
        const detail = {
            pagesize: 0,
            pagenumber: 0,
        };
        const res = await Api.getDaLetou(detail);
        setTableList(res && res.data);
        window.console.log(res);
    }

    return (
        <Container>
            <div className={css.home}>
                <div className={css.homeContent}>{"一夜暴富"}</div>
                <Table columns={columns} dataSource={tableList} pagination={false} scroll={{ x: 'max-content', y: 400 }}/>
            </div>
        </Container>
    );
}
