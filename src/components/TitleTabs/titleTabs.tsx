import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import _ from '@/tools/lodash';
import './style/titleTabs.less';

class TitleTabs extends React.Component <IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentIndex: null
    };
  }

  onMouseOverHandle(e: any) {
    const { index } = e.currentTarget.dataset;
    const { currentIndex } = this.state;
    if (parseInt(index) === parseInt(currentIndex)) {
      return false
    }
    this.setState({
      currentIndex: parseInt(index)
    });
  }

  onMouseOutHandle(e: any) {
    this.setState({
      currentIndex: null
    });
  }

  renderChildren(children: Array<tabItem>) {
    if (!children.length) return null;
    return (
      <ul className='select-items'>
        {
          children.map((item, index) => {
            // const isChildrenExit = _.get(item, 'children', []).length;
            return (
              <li className='select-item' key={index}>
                <i className={`iconfont ${item.icon}`}></i>{item.title}
              </li>
            )
          })
        }
      </ul>
    );
  }

  render() {
    const { tabs, isShow } = this.props;
    const { currentIndex } = this.state;

    return (
      <ul className={`list-container ${isShow ? 'list-container__show' : ''}`}>
        {
          tabs.map((item, index) => {
            const children = _.get(item, 'children', []);
            const isChildrenExit = !!children.length;
            return (
              <li className={`list-item ${parseInt(currentIndex) === index}`} key={index}
                data-index={index}
                onMouseOver={(e) => {this.onMouseOverHandle(e)}}
                onMouseOut={(e) => {this.onMouseOutHandle(e)}}>
                <div className='box'>
                  <i className={`iconfont ${item.icon} ${item.animate ? item.animate : ''}`}></i>{item.title}
                </div>
                {
                  (isChildrenExit) ? this.renderChildren(children) : null
                }
              </li>
            )
          })
        }
      </ul>
    );
  }
}

interface IProps extends RouteComponentProps {
  tabs: Array<tabItem>
  isShow: boolean
};

interface IState {
  currentIndex: any
}

interface tabItem {
  icon: string,
  title: string,
  animate?: string,
  route?: string,
  children?: Array<tabItem>
}

export default withRouter(TitleTabs);