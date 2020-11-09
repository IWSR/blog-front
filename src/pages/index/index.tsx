import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import NormalLayout from '@/components/layouts/normal';
import Wave from './util/wave';
import Article from './components/articles/articles';
import {RecommendHook} from './components/recommend/recommend';
import './style/index.less';

class Index extends React.Component <IProp, IState> {

  private canvas: any = React.createRef();
  private main: any = React.createRef();

  constructor(props: IProp) {
    super(props);
    this.state = {
      recommendList: [
        {pic: 'https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg', title: 'title here', subTitle: 'subtitle'},
        {pic: 'https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg', title: 'title here', subTitle: 'subtitle'},
        {pic: 'https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg', title: 'title here', subTitle: 'subtitle'}
      ]
    };
  }

  componentDidMount() {
    const ctx = this.canvas.current.getContext('2d');
    const dpr = 2;
    const wave = new Wave(ctx, window.innerWidth, 80 * dpr);
    wave.animate();
  }

  scrollToContent() {
    const offsetTop = this.main.current.offsetTop - 80;
    
    window.scrollTo({
      top: offsetTop, 
      behavior: "smooth"
    });
  }

  render() {
    const {recommendList} = this.state;

    return (
      <NormalLayout>
        {/* 奇怪的用法 */}
        <Head>
          <title>First Post</title>
          <link rel="icon" href="/ico/favicon.ico" />
        </Head>

        <div className='index-container'>
          <div className='above-fold'>
            <div className="info">
              <div className="text-magic" data-word="Hello,IWSR!">
                Hello,IWSR!
              </div>
              <div className="info__contact">
                <p className='contact__str'><i className='iconfont icon-left' />Welcome to my world! And I hope you can enjoy your time！(｡･ω･｡)<i className='iconfont icon-right' /></p>
                <ul className="contact__way" style={{maxWidth: `${5*35}px`}}>
                  <li className="way">
                    <Link href="/detail">
                      <i className="iconfont icon-git1"></i>
                    </Link>
                  </li>
                  <li className="way">
                    <i className="iconfont icon-wyy" style={{color: '#e72e2d'}}></i>
                  </li>
                  <li className="way">
                    <i className="iconfont icon-zhihu" style={{color: '#1396db'}}></i>
                  </li>
                  <li className="way">
                    <i className="iconfont icon-bilibili" style={{color: '#d4237a'}}></i>
                  </li>
                  <li className="way">
                    <i className="iconfont icon-youxiang" style={{color: '#febf01'}}></i>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="arrow_down">
              <i className='iconfont icon-jiantou' onClick={() => {
                this.scrollToContent()
              }} />
            </div>
            
            <canvas ref={this.canvas} className="wave" />
          </div>
          <div className='main-body' ref={this.main}>
            <div className="content">
              <div className="content__part">
                <h1 className="part__title">text</h1>
                <RecommendHook recommendList={recommendList} />
              </div>
              <div className="content__part">
                <h1 className="part__title">text2</h1>
                <Article />
              </div>
            </div>
          </div>
        </div>
      </NormalLayout>
    );
  }
}

interface IProp {

}

interface IState {
  recommendList: Array<listItem>
}

interface listItem {
  pic: string,
  title: string,
  subTitle: string
}

// 静态生成
// 此函数在构建时被调用
// https://www.nextjs.cn/docs/basic-features/data-fetching
/*
  context
    -params: contains the route parameters for pages using dynamic routes
    -preview:  is true if the page is in the preview mode
    -previewData: contains the preview data set by setPreviewData
*/
// export async function getStaticProps(context) {
//   // 调用外部 API 获取博文列表
//   // 通过返回 { props: posts } 对象，Blog 模块
//   // 在构建时将接收到 `posts` 参数
//   return { props: { data } }
// };

// 服务器端渲染
// 抛出这个函数代表服务端渲染？
// https://www.nextjs.cn/docs/basic-features/data-fetching
// export async function getServerSideProps(context) {
//   return { props: { data } }
// }

export default Index;
