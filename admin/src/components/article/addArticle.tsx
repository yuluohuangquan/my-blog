import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useHistory } from "react-router-dom";
import { Input } from 'antd';
import css from "./styles/add.module.less";

const { TextArea } = Input;

export default function Main() {
    let history = useHistory();
    const [text, setText] = useState('');

    const setValue = (e: any) => {
        setText(e.target.value);
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className={css.main}>
            <div className={css.title}>
                <h4>{"新增文章"}</h4>
                <a onClick={goBack}>{'返回'}</a>
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
    );
}
