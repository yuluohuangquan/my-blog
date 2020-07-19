import React from "react";
import css from './styles/main.module.less';
import Item from './overview';

export default function Home() {
  const MockList = [
    {
      id: 1,
      title: '第一条测试博客数据',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第2条测试博客数据',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第3条测试博客数据',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第4条测试博客数据',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第4条测试博客数据',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第4条测试博客数据',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第4条测试博客数据5',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第4条测试博客数据4',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第4条测试博客数据3',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第4条测试博客数据2',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }, {
      id: 1,
      title: '第4条测试博客数据1',
      time: '2020-07-01',
      description: '详情是什么呢，我也不知道啊，是暗杀估价师图有好感个GVVG几句话环境就感觉化工厂1工程竣工超级兵好几遍好几遍好几遍韩剧'
    }
  ];

  return (
    <div className={css.main}>
      {
        MockList.map((item, index) => {
          return <Item key={index} detail={item} />
        })
      }
    </div>
  );
}
