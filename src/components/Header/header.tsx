import React from 'react';

import './style/header.less';
import TitleTabs from '@/components/TitleTabs/titleTabs';

const tabsConfig = [
  {
    icon: 'icon--sport_09',
    title: '首页',
    animate: 'bounce'
  },
  {
    icon: 'icon-guidang',
    title: '归档',
    animate: 'tada',
    children: [
      {
        icon: 'icon--sport_09',
        title: 'test1',
        animate: 'bounce'
      },
      {
        icon: 'icon--sport_09',
        title: 'test2',
        animate: 'bounce'
      }
    ]
  },
  {
    icon: 'icon-list',
    title: '清单',
    animate: 'headShake'
  },
  {
    icon: 'icon-tubiao--copy',
    title: '留言板',
    animate: 'tada',
    children: [
      {
        icon: 'icon--sport_09',
        title: 'test123333',
        animate: 'bounce'
      },
      {
        icon: 'icon--sport_09',
        title: 'test2',
        animate: 'bounce'
      }
    ]
  },
  {
    icon: 'icon-pengyou',
    title: '友人帐',
    animate: 'gulu'
  }
];

class Header extends React.Component <IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      isMouseOver: false,
      isNeedShow: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0 && !this.state.isNeedShow) {
        this.setState({
          isNeedShow: true
        });
      } else if (window.scrollY === 0 && this.state.isNeedShow) {
        this.setState({
          isNeedShow: false
        });
      }
    });
  }

  onMouseOver(e: any) {
    const {isMouseOver} = this.state;
    if (isMouseOver) {
      return false
    }
    this.setState({
      isMouseOver: true
    });
  }

  onMouseOut(e: any) {
    const {isMouseOver} = this.state;
    if (!isMouseOver) {
      return false
    }
    this.setState({
      isMouseOver: false
    });
  }

  render() {
    const { isMouseOver, isNeedShow } = this.state;
    return (
      <div className={`header-container ${isNeedShow ? 'header-container_show' : ''}`} onMouseOver={(e) => this.onMouseOver(e)} onMouseOut={(e) => this.onMouseOut(e)}>
        <div className="home">
          <ruby>
            <span className='title'>
              <span className='title__bg'>未来道具</span>
              <span className='title__rotate'>
                <i className='iconfont icon-chilun'></i>
              </span>
              <span>研究所</span>
            </span>
            <rt className='subtitle'>未来道具研究所</rt>
          </ruby>
        </div>
        <TitleTabs tabs={tabsConfig} isShow={isMouseOver || isNeedShow} />
        <div className="login-area">login</div>
      </div>
    );
  }
}

interface IProps {
  
};

interface IState {
  isMouseOver: boolean
  isNeedShow: boolean
}

export default Header;