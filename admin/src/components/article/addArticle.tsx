import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useHistory } from "react-router-dom";
import { Input, Button, Modal } from "antd";
import css from "./styles/add.module.less";

const { TextArea } = Input;

export default function Main() {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const setValue = (e: any) => {
    setText(e.target.value);
  };

  const goBack = () => {
    history.goBack();
  };

  const saveDraft = () => {
    // 保存为草稿
  };

  const changeVisible = () => {
    // 打开关闭模态框
    setVisible(!visible);
  };

  return (
    <>
      <div className={css.main}>
        <div className={css.title}>
          <Input
            className={css.titleInput}
            placeholder={"文章名"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={css.titleContent}>
            <Button>{"保存草稿"}</Button>
            <Button onClick={changeVisible}>{"保存"}</Button>
            <a onClick={goBack}>{"返回"}</a>
          </div>
        </div>
        <section>
          <div className={css.leftContent}>
            <TextArea value={text} onChange={setValue} />
          </div>
          <div className={css.rightContent}>
            <ReactMarkdown source={text} />
          </div>
        </section>
      </div>
      {visible && (
        <Modal
          width="520px"
          keyboard={false}
          visible={visible}
          title={"文章保存"}
          destroyOnClose={true}
          onCancel={changeVisible}
        >
          {"asd"}
        </Modal>
      )}
    </>
  );
}
