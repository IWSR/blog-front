import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './style/titleTabs.less';

class TitleTabs extends React.Component <IProps, IState> {
  // constructor(props: IProps) {
  //   super(props);
  // }

  render() {
    const itemList:Array<itemList> = [
      {icon: 'icon', title: '首页', route: 'wa'}
    ];
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

};

interface IState {

}

interface itemList {
  title: string;
  icon: string;
  route?: string;
}

export default withRouter(TitleTabs);