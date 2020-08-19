import React, { useState, useEffect, useCallback } from "react";
import Container from "../container";
import { Table, Button } from "antd";
import { useHistory } from "react-router-dom";
import { columns } from "./constant";
import * as Api from "../../axios/api";
import css from "./styles/main.module.less";

export default function Main() {
  let history = useHistory();
  const [articleList, setArticleList] = useState([]);
  const [typeList, setTypeList] = useState([]);

  useEffect(() => {
    getArticleList();
    getTypeList();
  }, []);

  const getArticleList = useCallback(async () => {
    const res = (await Api.getArticleList()) as any;
    if (res && res.list) {
      setArticleList(res.list);
    }
  }, []);

  const getTypeList = useCallback(async () => {
    const res = (await Api.getTypeList()) as any;
    if (res && res.type) {
      let list: any[] = [];
      res.type.map((item: any) => {
        return list.push(item.typeName);
      });
      setTypeList(list);
    }
  }, []);

  const addArticle = () => {
    history.push("/addArticle");
  };
  return (
    <Container>
      <div className={css.home}>
        <div className={css.homeContent}>
          <p>{"文章管理"}</p>
          <Button onClick={addArticle} type="primary">
            {"新增"}
          </Button>
        </div>
        <Table columns={columns(typeList)} dataSource={articleList} />
      </div>
    </Container>
  );
}
