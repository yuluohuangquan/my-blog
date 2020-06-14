import React, { useState } from "react";
import { Input, Button, Table, Collapse, List } from "antd";
import Container from "../container";
import css from "./styles/index.module.less";
import { colum } from "./constant";

const { Panel } = Collapse;
const Textarea = Input.TextArea;

export default function Translate() {
  const [keyTitle, setkeyTitle] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [translateValue, setTranslateValue] = useState("");
  const [enList, setEnList] = useState([]);
  const [zhList, setZhList] = useState([]);
  const [I18nList, setI18nList] = useState([]);

  const translate = () => {
    let defaultList: any = null;
    defaultList = [];
    let translateList: any = null;
    translateList = [];
    let list: any = null;
    list = [];
    translateValue.split(/\n/).forEach((item, index) => {
      translateList.push(
        `"${keyTitle}${item
          .toLocaleUpperCase()
          .replace(/\ /g, "_")}": "${item}",`
      );
      defaultList.push(
        `"${keyTitle}${item.toLocaleUpperCase().replace(/\ /g, "_")}": "${
          defaultValue.split(/\n/)[index]
        }",`
      );
      list.push({
        zh: defaultValue.split(/\n/)[index],
        i18n: `I18n.t('${keyTitle}${item.toLocaleUpperCase().replace(/\ /g, "_")}')`
      });
    });
    setEnList(translateList);
    setZhList(defaultList);
    setI18nList(list);
  };

  return (
    <Container>
    <div className={css.main}>
      <div className={css.title}>
        <div className={css.titleText}>
          <p>{"翻译页面  "}</p>
          <Input
            placeholder={"key值头部"}
            onChange={e => {
              setkeyTitle(e.target.value);
            }}
          />
        </div>
        <Button type="primary" onClick={translate}>
          {"翻译"}
        </Button>
      </div>
      <div className={css.inputList}>
        <Textarea
          className={css.inputHeight}
          placeholder="输入需要翻译的内容"
          onChange={e => {
            setDefaultValue(e.target.value);
          }}
        />
        <Textarea
          className={css.inputHeight}
          placeholder="输入翻译后的内容"
          onChange={e => {
            setTranslateValue(e.target.value);
          }}
        />
      </div>
      <Collapse>
        <Panel header="中文" key="1">
          <List
            bordered
            dataSource={zhList}
            renderItem={(item, index) => <List.Item key={index.toString()}>{item}</List.Item>}
          />
        </Panel>
        <Panel header="英文" key="2">
          <List
            bordered
            dataSource={enList}
            renderItem={(item, index) => <List.Item key={index.toString()}>{item}</List.Item>}
          />
        </Panel>
        <Panel header="中英" key="3">
          <Table columns={colum} pagination={false} dataSource={I18nList} />
        </Panel>
      </Collapse>
    </div>
    </Container>
  );
}
