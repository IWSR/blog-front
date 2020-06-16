import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './style/titleTabs.less';

class TitleTabs extends React.Component <IProps, IState> {
  render() {
    const itemList = this.props.tabs;
    return (
      <ul className='list-container'>
        {
          itemList.map((item, index) => {
            return (
              <li className='list-item' key={index}>
                <i className={`iconfont ${item.icon}`}></i>{item.title}
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

interface itemList {
  title: string;
  icon: string;
  route?: string;
}

export default withRouter(TitleTabs);