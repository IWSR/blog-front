import React from 'react';

import Wave from './util/wave';
import './style/index.less';

class Index extends React.Component <IProp, IState> {

  private canvas: any = React.createRef();

  componentDidMount() {
    const ctx = this.canvas.current.getContext('2d');
    const dpr = 2;
    const wave = new Wave(ctx, '#cccccc', 300 * dpr, 80 * dpr);
    const wave2 = new Wave(ctx, '#a1a1a1', 300 * dpr, 80 * dpr, 30 * dpr);
    wave2.animate();
    wave.animate();
  }

  render() {
    return (
      <div className='index-container'>
        <div className='above-fold'>
          <canvas ref={this.canvas} className="wave" />
        </div>
        <div className='main-body'></div>
      </div>
    );
  }
}

interface IProp {

}

interface IState {
  
}

export default Index;