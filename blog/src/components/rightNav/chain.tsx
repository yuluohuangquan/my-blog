import React from "react";
import css from "./styles/chain.module.less";

export default function Chain() {
    return (
        <div className={css.main}>
            <h4>经常访问的网站</h4>
            <div>
                <a href="https://juejin.im" target="view_window">掘金</a>
                <a href="https://www.freecodecamp.one/" target="view_window">自由学习</a>
                <a href="https://leetcode.com/" target="view_window">力扣</a>
                <a href="https://codepen.io/" target="view_window">代码在线编辑</a>
                <a href="http://www.alloyteam.com/" target="view_window">腾讯学习</a>
                <a href="https://www.docschina.org/" target="view_window">印象中文</a>
                <a href="https://learnku.com/" target="view_window">learnku</a>
            </div>
        </div>
    );
}
