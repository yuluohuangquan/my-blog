import React from "react";
import css from './styles/overview.module.less';
import { useHistory } from "react-router-dom";

interface injectProps {
    detail: {
        title: string;
        description: string;
        time: string;
        id: number;
    }
}

export default function Item({ detail }: injectProps) {
    const { title, description, time, id } = detail;
    let history = useHistory();

    const goDetail = () => {
        history.push(`/detail/${id}`);
    }
    return (
        <div className={css.detail} onClick={goDetail}>
            <header>{title}</header>
            <div className={css.detailContent}>{description}</div>
            <footer>{time}</footer>
        </div>
    );
}
