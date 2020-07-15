import React from "react";
import css from './styles/overview.module.less';

interface injectProps {
    detail: {
        title: string;
        description: string;
        time: string;
    }
}

export default function Item({ detail }: injectProps) {
    const { title, description, time } = detail;
    return (
        <div className={css.detail}>
            <header>{title}</header>
            <div className={css.detailContent}>{description}</div>
            <footer>{time}</footer>
        </div>
    );
}
