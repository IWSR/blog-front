import React from 'react';

import './style/articles.less';

class Articles extends React.Component <IProp, IState> {
  private observerEle: React.RefObject<HTMLDivElement> = React.createRef();
  private base: React.RefObject<HTMLDivElement> = React.createRef();
  private observer: IntersectionObserver | null = null;

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
        },
        {
          id: 1,
          date: '2019-12-31',
          title: 'GraphQL 实现递归查询',
          abstract: '当我们需要用 GraphQL 查询多层套嵌的数据，比如像 WordPress 这样套嵌的评论信息时，通常的写法是： { posts(first: 100)通常的写法是： { posts(first: 100)',
          viewNum: 8000,
          commentNum: 20,
          item: '野生技术协会',
          pic: 'https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg'
        },
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
    this.observer = new IntersectionObserver((entries, observer) => {
      console.log('observer', entries, observer);
    }, {
      root: this.base.current
    });
    if (this.observerEle.current) {
      this.observer.observe(this.observerEle.current);
    }
  }

  componentWillUnmount() {
    this.observer && this.observer.disconnect();
  }

  render() {
    const {items} = this.state;
    return (
      <div className="items" ref={this.base}>
        {
          // 文章内容不为空
          items.length > 0 && items.map((item, index) => {
            const isOdd = (index + 1) % 2 === 1;
            console.log(isOdd, 'isOdd');
            return (
              <div className={`item`} key={index}>
                <div className={`item__info ${isOdd ? 'even' : ''}`}>
                  <div className="date">{item.date}</div>
                  <div className="title">{item.title}</div>
                  <div className="detail">
                    <span className="icon">
                      <i className="iconfont icon-kanbaozhi"></i>
                      <p>{item.viewNum}热度</p>
                    </span>
                    <span className="icon">
                      <i className="iconfont icon-tubiao--copy"></i>
                      <p>{item.commentNum}条评论</p>
                    </span>
                    <span className="icon">
                      <i className="iconfont icon-wenjian"></i>
                      <p>{item.item}</p>
                    </span>
                  </div>
                  <div className="abstract">{item.abstract}</div>
                </div>
                <div className={`item__pic ${isOdd ? '' : 'even'}`}>
                  <div className="pic" style={{
                    backgroundImage: `url(${item.pic})` 
                  }}></div>
                </div>
              </div>
            )
          })
        }
        {
          // 空
          items.length === 0 && (
            <div className="empty-item">empty</div>
          )
        }
        <div className="observer-line" ref={this.observerEle}></div>
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