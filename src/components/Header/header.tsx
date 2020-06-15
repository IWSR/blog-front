import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './style/header.less';
import TitleTabs from '@/components/TitleTabs/titleTabs';

class Header extends React.Component <IProps, IState> {
  // constructor(props: IProps) {
  //   super(props);
  // }

  render() {
    return (
      <div className='header-container'>
        <div className="home">
          <ruby className='title'>
            <span className='title__bg'>未来道具</span>
            <span className='title__rotate'>の</span>
            <span>研究所</span>
            <rp />
            <rt className='subtitle'>未来道具研究所</rt>
            <rp />
          </ruby>
        </div>
        <TitleTabs />
        <div className="login-area">login</div>
      </div>
    );
  }
}

interface IProps extends RouteComponentProps {

};

interface IState {

}

export default withRouter(Header);