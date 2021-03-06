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
                <a href="https://codesandbox.io/" target="view_window">代码在线编辑</a>
                <a href="http://www.alloyteam.com/" target="view_window">腾讯学习</a>
                <a href="https://www.docschina.org/" target="view_window">印象中文</a>
                <a href="https://www.jb51.net/" target="view_window">脚本之家</a>
                <a href="https://learnku.com/" target="view_window">learnku</a>
                <a href="138.128.218.122:8888" target="view_window">宝塔</a>
            </div>
        </div>
    );
}
