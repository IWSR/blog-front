import React from 'react';

import styles from './style/footer.module.less';

const iconStyle = {
  color: 'rgba(178, 208, 197, 1)',
  padding: '0 3px'
};

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <i className={`iconfont icon-chilun ${styles['rolling-icon']}`} />
        <p className={styles.content__text}>Crafted with <i className="iconfont icon-chuyin" style={iconStyle} /> by <a className={styles.author}>IWSR</a></p>
        <p className={styles.content__text}>随便搞点什么东西先塞进去随便搞点什么东西先塞进去</p>
        <p className={styles.content__text}></p>
      </div>
    </div>
  );
}

export default Footer;