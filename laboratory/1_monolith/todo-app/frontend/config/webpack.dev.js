const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    proxy: {
      '/api/': 'http://localhost:4000',
    },
    port: 8081,
  },
});
