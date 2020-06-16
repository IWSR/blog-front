import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './style/titleTabs.less';

class TitleTabs extends React.Component <IProps, IState> {

  render() {
    const { tabs, isShow } = this.props;
    return (
      <ul className={`list-container ${isShow ? 'list-container__show' : ''}`}>
        {
          tabs.map((item, index) => {
            return (
              <li className='list-item' key={index}>
                <i className={`iconfont ${item.icon} ${item.animate ? item.animate : ''}`}></i>{item.title}
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
  
}

interface tabItem {
  icon: string,
  title: string,
  animate?: string,
  route?: string,
  children?: Array<tabItem>
}

export default withRouter(TitleTabs);