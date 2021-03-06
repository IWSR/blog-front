import React from 'react';

import styles from './style/article.module.less';

class Article extends React.Component <IProp, IState> {

  private dom: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: IProp) {
    super(props);
    this.state = {
      isAnimationEnd: false,
      isNeedAnimation: false
    };
    this.animationendHandle = this.animationendHandle.bind(this)
  }

  componentDidMount() {
    const ctx = this;
    if (ctx.dom.current) {
      ctx.dom.current.addEventListener('animationend', ctx.animationendHandle);
    }
    this.setState({
      isNeedAnimation: true
    });
  }

  // 方法声明
  animationendHandle() {
    const ctx = this;
    if (ctx.dom &&ctx.dom.current) {
      ctx.dom.current.removeEventListener('animationend', ctx.animationendHandle);
    }
    this.setState({
      isAnimationEnd: true,
      isNeedAnimation: false
    });
  }

  bigNumberHandle(number: number, limitLength?: number) {
    // TODO: limitLength: 限制显示位数，需要实现替换数字为k w 等缩写
    let str = number.toString();
    if (str.length > 3) {
      str = str.replace(/\B(?=(\d{3})+\b)/g, ',');
    }
    return str;
  }

  render() {
    const ctx = this;
    const {index, item} = ctx.props;
    const {isNeedAnimation, isAnimationEnd} = ctx.state;
    const isOdd = (index + 1) % 2 === 1;
    console.log(styles, 'styles');

    return (
      <div className={`${styles.item} ${isNeedAnimation ? styles['item_animation'] : ''} ${ isAnimationEnd ? styles['item_animation-end'] : ''}`}
        key={index}
        ref={ctx.dom}>
        <div className={`${styles['item__info']} ${isOdd ? styles['order_2'] : ''}`}>
          <div className={styles['date']}>{item.date}</div>
          <div className={styles['title']}>{item.title}</div>
          <div className={styles['detail']}>
            <span className={styles['icon']}>
              <i className="iconfont icon-kanbaozhi"></i>
              <p>{ctx.bigNumberHandle(item.viewNum)} 热度</p>
            </span>
            <span className={styles['icon']}>
              <i className="iconfont icon-tubiao--copy"></i>
              <p>{ctx.bigNumberHandle(item.commentNum)} 条评论</p>
            </span>
            <span className={styles['icon']}>
              <i className="iconfont icon-wenjian"></i>
              <p>{item.item}</p>
            </span>
          </div>
          <div className={styles['abstract']}>{item.abstract}</div>
        </div>
        <div className={`${styles['item__pic']} ${isOdd ? '' : styles['order_2']}`}>
          <div className={styles['pic']} style={{
            backgroundImage: `url(${item.pic})` 
          }}></div>
        </div>
      </div>
    )
  }
}

interface IProp {
  index: number,
  item: showArticles,
  // observer: IntersectionObserver | null
}

interface IState {
  isAnimationEnd: boolean,
  isNeedAnimation: boolean
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

interface showArticles extends articles {
  isNew?: boolean
}

export default Article;
