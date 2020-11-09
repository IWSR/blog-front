import React from 'react';

import './style/footer.less';

const iconStyle = {
  color: 'rgba(178, 208, 197, 1)',
  padding: '0 3px'
};

function Footer() {
  return (
    <div className='footer'>
      <div className='content'>
        <i className={`iconfont icon-chilun rolling-icon`} />
        <p className='content__text'>Crafted with <i className="iconfont icon-chuyin" style={iconStyle} /> by <a className='author'>IWSR</a></p>
        <p className='content__text'>随便搞点什么东西先塞进去随便搞点什么东西先塞进去</p>
        <p className='content__text'>随便搞点什么东西先塞进去随便搞点什么</p>
      </div>
    </div>
  );
}

export default Footer;