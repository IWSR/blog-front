import React from 'react';

import _ from '@/tools/lodash';

import Article from './components/article/article';

import './style/articles.less';

const newItem = {
  id: 1,
  date: '2019-12-31',
  title: 'GraphQL 实现递归查询',
  abstract: '当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress 这样套嵌的评论信息时，通常的写法是： { posts(first: 100)通常的写法是： { posts(first: 100)',
  viewNum: 8000,
  commentNum: 20,
  item: '野生技术协会',
  pic: 'https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg'
};

class Articles extends React.Component <IProp, IState> {

  private line: React.RefObject<HTMLDivElement> = React.createRef();
  private LoadingObserver: IntersectionObserver | null = null;
  private animationObserver: IntersectionObserver | null = null;

  constructor(props: IProp) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          date: '2019-12-31',
          title: 'GraphQL 实现递归查询',
          abstract: '当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress 这样套嵌的评论信息时，通常的写法是： { posts(first: 100)通常的写法是： { posts(first: 100)',
          viewNum: 8000,
          commentNum: 20,
          item: '野生技术协会',
          pic: 'https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg'
        }
      ]
    };
  }

  componentDidMount() {
    this.LoadingObserver = new IntersectionObserver((entries) => {
      const isVisible = entries[0].isIntersecting;
      // isVisible 触发新元素加入
      if (!isVisible) return false;
      if (this.state.items.length === 5) return false;
      const items = _.deepClone(this.state.items);
      const testItem = _.deepClone(newItem);
      items.push(testItem);
      this.setState({
        items
      });
    }, {
      
    });

    if (this.line.current) {
      // 触发加载
      this.LoadingObserver.observe(this.line.current);
    }
  }

  componentWillUnmount() {
    this.LoadingObserver && this.LoadingObserver.disconnect();
  }

  render() {
    const {items} = this.state;
    return (
      <div className="items">
        {
          // 文章内容不为空
          items.length > 0 && items.map((item, index) => {
            return (
              <Article key={index} item={item} index={index} />
            )
          })
        }
        {
          // 空
          items.length === 0 && (
            <div className="empty-item">empty</div>
          )
        }
        <div className="observer-line" ref={this.line}></div>
      </div>
    )
  }
}

interface IProp {
  
}

interface IState {
  items: Array<articles>
}

interface articles {
  id: number,
  title: string,
  date: string,
  abstract: string,
  viewNum: number,
  commentNum: number,
  item: string,
  pic: string
}

export default Articles;