import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NormalLayout from '@/components/layouts/normal';
import markDownIt from 'markdown-it';

import './style/detail.less';

const text = `
##### eventLoop
**macrotask**
>别称task，并且该队列不唯一An event loop has one or more task queues. A task queue is a set of tasks.

| 种类 | 描述 |
|----|----|
| DOM操作任务源 |此任务源被用来相应dom操作，例如一个元素以非阻塞的方式[插入文档](https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document)|
| 用户交互任务源 | 此任务源用于对用户交互作出反应，例如键盘或鼠标输入。响应用户操作的事件（例如click）必须使用task队列。 |
| 网络任务源 | 网络任务源被用来响应网络活动。 |
| history traversal任务源 | 当调用history.back()等类似的api时，将任务插进task队列。 |
`;

function Detail() {
  const [article, setArticle] = useState({
    __html: ''
  });

  useEffect(() => {
    const md = new markDownIt('commonmark')
      .enable('table');
    const cache = md.render(text);
    console.log(md.parse(text, {}), 'cache');
    setArticle({
      __html: cache
    });
  }, []);

  return (
    <NormalLayout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="detail-container">
        <div className="container__banner">
          <img src="http://raw.yiyoushuo.com/UGC/ac9feeb0-d647-4316-ab93-e1846e83887f.jpg" alt="" className="banner__img"/>
        </div>
        <div className="container__article" dangerouslySetInnerHTML={article} />
      </div>
    </NormalLayout>
  );
}

export default Detail;