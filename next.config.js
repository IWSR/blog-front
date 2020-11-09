const path = require('path');
const withLess = require('@zeit/next-less');
// const withCSS = require('@zeit/next-css');
/*
  https://www.nextjs.cn/docs/api-reference/next.config.js/custom-webpack-config

  buildId: String - The build id, used as a unique identifier between builds
  dev: Boolean - Indicates if the compilation will be done in development
  isServer: Boolean - It's true for server-side compilation, and false for client-side compilation
  defaultLoaders: Object - Default loaders used internally by Next.js:
  babel: Object - Default babel-loader configuration
*/
module.exports = withLess({
  cssLoaderOptions: {
    localIdentName: '[local]_[hash:base64:5]',
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname)
    };

    return config
  }
});
