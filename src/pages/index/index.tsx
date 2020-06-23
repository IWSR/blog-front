import React from 'react';

import Wave from './util/wave';
import './style/index.less';

class Index extends React.Component <IProp, IState> {

  private canvas: any = React.createRef();
  private canvas2: any = React.createRef();

  componentDidMount() {
    const ctx = this.canvas.current.getContext('2d');
    // const ctx2 = this.canvas2.current.getContext('2d');
    const dpr = 2;
    const wave = new Wave(ctx, window.innerWidth, 80 * dpr);
    // const wave2 = new Wave(ctx2, '#ffffff', 300 * dpr, 80 * dpr, Math.PI);
    wave.animate();
    // wave.animate();
  }

  render() {
    return (
      <div className='index-container'>
        <div className='above-fold'>
          <canvas ref={this.canvas} className="wave" />
          <canvas ref={this.canvas2} className="wave" />
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